import type { Plugin } from "vite";

const OLR_ORIGIN = "https://stanley.olridx.com";

type CacheEntry = { at: number; value: unknown };
const responseCache = new Map<string, CacheEntry>();
let cookieCache: { at: number; value: string } | null = null;

const COOKIE_TTL_MS = 5 * 60 * 1000;
const RESPONSE_TTL_MS = 15 * 60 * 1000;

function fromCache(key: string): unknown | null {
  const hit = responseCache.get(key);
  if (!hit) return null;
  if (Date.now() - hit.at > RESPONSE_TTL_MS) {
    responseCache.delete(key);
    return null;
  }
  return hit.value;
}

function toCache(key: string, value: unknown) {
  responseCache.set(key, { at: Date.now(), value });
}

async function olrCookie(): Promise<string> {
  if (cookieCache && Date.now() - cookieCache.at < COOKIE_TTL_MS) return cookieCache.value;

  const warm = await fetch(`${OLR_ORIGIN}/Search/Sales?idr=False`, {
    headers: { "user-agent": "Mozilla/5.0 MontfortOlrProxy" },
  });
  const cookieParts: string[] = [];
  const raw = warm.headers.get("set-cookie");
  if (raw) cookieParts.push(raw.split(",")[0]?.split(";")[0] || "");
  const multi = (warm.headers as Headers & { getSetCookie?: () => string[] }).getSetCookie?.() || [];
  for (const c of multi) {
    const pair = c.split(";")[0];
    if (pair) cookieParts.push(pair);
  }
  const value = [...new Set(cookieParts.filter(Boolean))].join("; ");
  cookieCache = { at: Date.now(), value };
  return value;
}

async function olrPost(path: string, body: unknown, cookie: string): Promise<unknown> {
  const res = await fetch(`${OLR_ORIGIN}${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
      accept: "application/json",
      "user-agent": "Mozilla/5.0 MontfortOlrProxy",
      ...(cookie ? { cookie } : {}),
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`OLR ${res.status}`);
  return res.json();
}

async function fetchOlrSavedSearch(
  savedSearchId: string,
  cookie: string,
  pageIndex = 0,
  pageSize = 48,
): Promise<unknown> {
  return olrPost(
    "/Search/SearchListingsByQuery",
    {
      serializedOptionsQuery: savedSearchId,
      PagingOptions: {
        OrderBy: "1",
        OrderByDescending: true,
        PageSize: pageSize,
        PageIndex: pageIndex,
      },
    },
    cookie,
  );
}

async function fetchOlrCatalog(mode: "sales" | "rentals", pageIndex: number, pageSize: number, cookie: string) {
  const propertyTypes = mode === "rentals" ? ["Rental"] : ["Sale", "BuildingForSale"];
  // OLR accepts either wrapped searchOptions or flat criteria; flat is what the public Sales page uses.
  return olrPost(
    "/Search/SearchListings",
    {
      PropertyTypes: propertyTypes,
      PagingOptions: {
        OrderBy: "1",
        OrderByDescending: true,
        PageSize: pageSize,
        PageIndex: pageIndex,
      },
    },
    cookie,
  );
}

function sendJson(res: import("http").ServerResponse, status: number, data: unknown) {
  res.statusCode = status;
  res.setHeader("content-type", "application/json");
  res.setHeader("cache-control", "public, max-age=900");
  res.end(JSON.stringify(data));
}

async function warmCookieAndSalesCatalog() {
  try {
    const cookie = await olrCookie();
    const catalogKey = "/api/olr-listings?mode=sales&page=0&pageSize=12";
    if (!fromCache(catalogKey)) {
      const data = await fetchOlrCatalog("sales", 0, 12, cookie);
      toCache(catalogKey, data);
    }

    // Warm neighborhood saved searches serially so first hub visits hit Vite cache.
    const hubIds = [
      "115357",
      "115376",
      "115380",
      "115381",
      "115388",
      "115393",
      "115389",
      "115397",
      "115398",
      "115385",
      "94747",
    ];
    for (const id of hubIds) {
      const key = `/api/olr-saved-search?id=${id}&page=0&pageSize=12`;
      if (fromCache(key)) continue;
      try {
        const data = await fetchOlrSavedSearch(id, cookie, 0, 12);
        toCache(key, data);
      } catch {
        /* keep going — OLR flakes under load */
      }
    }
  } catch {
    /* OLR may be down during boot — first browser request will retry */
  }
}

/** Local/dev APIs so the browser can load OLR listings without CORS. */
export function olrSavedSearchApi(): Plugin {
  return {
    name: "olr-saved-search-api",
    configureServer(server) {
      // Warm OLR cookie + sales catalog as soon as Vite starts so /idx-sales is fast.
      void warmCookieAndSalesCatalog();

      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api/olr-")) return next();

        try {
          const url = new URL(req.url, "http://127.0.0.1");
          const cacheKey = url.pathname + url.search;
          const cached = fromCache(cacheKey);
          if (cached) {
            sendJson(res, 200, cached);
            return;
          }

          const cookie = await olrCookie();

          if (url.pathname === "/api/olr-saved-search") {
            const id = (url.searchParams.get("id") || "").replace(/^#/, "").trim();
            if (!/^\d+$/.test(id)) {
              sendJson(res, 400, { error: "Missing numeric saved-search id" });
              return;
            }
            const pageIndex = Math.max(0, Number(url.searchParams.get("page") || 0) || 0);
            const pageSize = Math.min(48, Math.max(1, Number(url.searchParams.get("pageSize") || 48) || 48));
            const data = await fetchOlrSavedSearch(id, cookie, pageIndex, pageSize);
            toCache(cacheKey, data);
            sendJson(res, 200, data);
            return;
          }

          if (url.pathname === "/api/olr-listings") {
            const mode = url.searchParams.get("mode") === "rentals" ? "rentals" : "sales";
            const pageIndex = Math.max(0, Number(url.searchParams.get("page") || 0) || 0);
            const pageSize = Math.min(48, Math.max(1, Number(url.searchParams.get("pageSize") || 24) || 24));
            const data = await fetchOlrCatalog(mode, pageIndex, pageSize, cookie);
            toCache(cacheKey, data);
            sendJson(res, 200, data);
            return;
          }

          return next();
        } catch (err) {
          sendJson(res, 502, { error: err instanceof Error ? err.message : String(err) });
        }
      });
    },
  };
}
