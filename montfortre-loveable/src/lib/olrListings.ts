import { getSupabaseUrl } from "./supabase";

function readAnonKey(): string {
  return (
    (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ||
    (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined) ||
    ""
  )
    .replace(/^["']|["']$/g, "")
    .trim();
}

export type OlrListingCard = {
  id: string;
  title: string;
  neighborhood: string;
  borough: string;
  price: string;
  beds: string;
  baths: string;
  meta: string;
  image: string;
  href: string;
  ribbon?: string;
};

export type OlrListingsResult = {
  listings: OlrListingCard[];
  total: number;
  fromCache?: boolean;
};

type OlrApiListing = {
  ListingId?: string | number;
  Address?: string;
  Neighborhood?: string;
  Borough?: string;
  UiPrice?: string | number;
  Price?: string | number;
  NumBedrooms?: number | string | null;
  NumBaths?: number | string | null;
  UiOwnership?: string;
  BuildingType?: string;
  SaleOrRent?: string;
  ApproxSquareFootage?: string;
  MainPhoto?: { Url?: string } | null;
  SeoUrl?: string;
  RibbonText?: string;
};

type OlrApiResponse = {
  Listings?: OlrApiListing[];
  TotalListingsCount?: number;
  error?: string;
};

type CacheEntry = {
  at: number;
  listings: OlrListingCard[];
  total: number;
};

/** Serve instantly; OLR itself is often 30–60s on a cold cookie. */
const FRESH_MS = 5 * 60 * 1000;
const STALE_MS = 2 * 60 * 60 * 1000;
const STORAGE_PREFIX = "montfort-olr-v2:";

const memoryCache = new Map<string, CacheEntry>();
const inflight = new Map<string, Promise<OlrListingsResult>>();
let catalogPrefetchStarted = false;

export function extractOlrSavedSearchId(idxUrl: string): string | null {
  try {
    const u = new URL(idxUrl);
    const hash = u.hash.replace(/^#/, "").trim();
    if (/^\d+$/.test(hash)) return hash;
  } catch {
    /* ignore */
  }
  const m = idxUrl.match(/#(\d+)/);
  return m?.[1] ?? null;
}

function formatPrice(value: string | number | undefined): string {
  const n = Number(String(value ?? "").replace(/[^\d.]/g, ""));
  if (!Number.isFinite(n) || n <= 0) return "Price on request";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatCount(value: number | string | null | undefined, singular: string): string {
  if (value === null || value === undefined || value === "") return "";
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return "";
  const label = n === 1 ? singular : `${singular}s`;
  return `${n % 1 === 0 ? String(n) : n.toFixed(1)} ${label}`;
}

export function mapOlrListings(payload: OlrApiResponse): OlrListingCard[] {
  const rows = payload.Listings || [];
  return rows.map((row) => {
    const beds = formatCount(row.NumBedrooms, "bed");
    const baths = formatCount(row.NumBaths, "bath");
    const extras = [row.UiOwnership || row.BuildingType, row.ApproxSquareFootage ? `${row.ApproxSquareFootage} sf` : ""]
      .filter(Boolean)
      .join(" · ");
    const seo = row.SeoUrl || String(row.ListingId || "");
    return {
      id: String(row.ListingId || seo),
      title: row.Address || "Listing",
      neighborhood: row.Neighborhood || "",
      borough: row.Borough || "",
      price: formatPrice(row.UiPrice ?? row.Price),
      beds,
      baths,
      meta: [beds, baths, extras].filter(Boolean).join(" · "),
      image: row.MainPhoto?.Url || "/placeholder.svg",
      href: `https://stanley.olridx.com/ListingDetail/${seo}`,
      ribbon: row.RibbonText || undefined,
    };
  });
}

function cacheKey(params: Record<string, string>): string {
  return Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join("&");
}

function readStorage(key: string): CacheEntry | null {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key) ?? sessionStorage.getItem(STORAGE_PREFIX + key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CacheEntry;
    if (!parsed?.at || !Array.isArray(parsed.listings)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeStorage(key: string, entry: CacheEntry) {
  try {
    localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(entry));
  } catch {
    try {
      sessionStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(entry));
    } catch {
      /* quota / private mode */
    }
  }
}

function getCacheEntry(key: string): CacheEntry | null {
  const mem = memoryCache.get(key);
  if (mem && Date.now() - mem.at < STALE_MS) return mem;
  const stored = readStorage(key);
  if (stored && Date.now() - stored.at < STALE_MS) {
    memoryCache.set(key, stored);
    return stored;
  }
  return null;
}

function putCache(key: string, listings: OlrListingCard[], total: number) {
  const entry: CacheEntry = { at: Date.now(), listings, total };
  memoryCache.set(key, entry);
  writeStorage(key, entry);
}

/** Instant paint from session/memory when available. */
export function peekOlrCache(params: Record<string, string>): OlrListingsResult | null {
  const entry = getCacheEntry(cacheKey(params));
  if (!entry) return null;
  return { listings: entry.listings, total: entry.total, fromCache: true };
}

function olrApiUrl(params: Record<string, string>): string {
  const qs = new URLSearchParams(params).toString();
  if (import.meta.env.DEV) {
    if (params.id) return `/api/olr-saved-search?${qs}`;
    return `/api/olr-listings?${qs}`;
  }
  const base = getSupabaseUrl().replace(/\/$/, "");
  return `${base}/functions/v1/olr-saved-search?${qs}`;
}

async function networkFetch(params: Record<string, string>): Promise<OlrListingsResult> {
  const key = cacheKey(params);
  const existing = inflight.get(key);
  if (existing) return existing;

  const headers: Record<string, string> = { accept: "application/json" };
  if (!import.meta.env.DEV) {
    const anon = readAnonKey();
    if (anon) {
      headers.apikey = anon;
      headers.authorization = `Bearer ${anon}`;
    }
  }

  const request = (async () => {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 90000);
    try {
      const res = await fetch(olrApiUrl(params), { headers, signal: controller.signal });
      const data = (await res.json()) as OlrApiResponse;
      if (!res.ok) {
        throw new Error(data.error || `OLR lookup failed (${res.status})`);
      }
      const listings = mapOlrListings(data);
      const total = Number(data.TotalListingsCount || listings.length);
      putCache(key, listings, total);
      return { listings, total, fromCache: false };
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        throw new Error("Listings are taking too long to load. Open the full search or try again.");
      }
      throw err;
    } finally {
      window.clearTimeout(timer);
      inflight.delete(key);
    }
  })();

  inflight.set(key, request);
  return request;
}

type FetchOpts = {
  /** Called when a background refresh returns newer data. */
  onUpdate?: (result: OlrListingsResult) => void;
};

/**
 * Stale-while-revalidate: return cached cards immediately when we have them,
 * then refresh OLR in the background (OLR often takes 30–60s).
 */
async function fetchOlrPayload(params: Record<string, string>, opts?: FetchOpts): Promise<OlrListingsResult> {
  const key = cacheKey(params);
  const entry = getCacheEntry(key);
  const age = entry ? Date.now() - entry.at : Infinity;

  if (entry && age < FRESH_MS) {
    return { listings: entry.listings, total: entry.total, fromCache: true };
  }

  if (entry && age < STALE_MS) {
    void networkFetch(params)
      .then((fresh) => opts?.onUpdate?.(fresh))
      .catch(() => {
        /* keep showing stale */
      });
    return { listings: entry.listings, total: entry.total, fromCache: true };
  }

  return networkFetch(params);
}

export async function fetchOlrSavedSearchListings(
  savedSearchId: string,
  opts?: { pageSize?: number; page?: number; onUpdate?: (result: OlrListingsResult) => void },
): Promise<OlrListingsResult> {
  // OLR SearchListingsByQuery ignores PageIndex and returns one fixed page (~13).
  const pageSize = Math.min(48, Math.max(1, opts?.pageSize ?? 48));
  const page = Math.max(0, opts?.page ?? 0);
  return fetchOlrPayload(
    {
      id: savedSearchId,
      page: String(page),
      pageSize: String(pageSize),
    },
    { onUpdate: opts?.onUpdate },
  );
}

export async function fetchOlrCatalogListings(
  mode: "sales" | "rentals",
  page = 0,
  pageSize = 24,
  opts?: { onUpdate?: (result: OlrListingsResult) => void },
): Promise<OlrListingsResult> {
  return fetchOlrPayload(
    {
      mode,
      page: String(page),
      pageSize: String(pageSize),
    },
    { onUpdate: opts?.onUpdate },
  );
}

export function peekOlrSavedSearchCache(
  savedSearchId: string,
  opts?: { pageSize?: number; page?: number },
): OlrListingsResult | null {
  const pageSize = Math.min(48, Math.max(1, opts?.pageSize ?? 48));
  const page = Math.max(0, opts?.page ?? 0);
  return peekOlrCache({
    id: savedSearchId,
    page: String(page),
    pageSize: String(pageSize),
  });
}

export function peekOlrCatalogCache(
  mode: "sales" | "rentals",
  page = 0,
  pageSize = 24,
): OlrListingsResult | null {
  return peekOlrCache({
    mode,
    page: String(page),
    pageSize: String(pageSize),
  });
}

/**
 * Warm the sales catalog in the background so /idx-sales paints from cache.
 * Safe to call many times — only the first call starts a network request.
 */
export function prefetchOlrSalesCatalog(pageSize = 12): void {
  if (typeof window === "undefined" || catalogPrefetchStarted) return;
  if (peekOlrCatalogCache("sales", 0, pageSize)) return;
  catalogPrefetchStarted = true;
  void fetchOlrCatalogListings("sales", 0, pageSize).catch(() => {
    catalogPrefetchStarted = false;
  });
}
