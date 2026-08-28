/**
 * Google reviews read/write against Supabase.
 *
 * Reviews are populated by the scheduled sync job (see
 * supabase/migrations/20260828100100_google_reviews_sync.sql). The browser never
 * talks to Google directly, so no Places API key ships in the client bundle.
 */

import { getSupabase, isCmsConfigured } from "../supabase";
// Type-only so this module never forms a runtime import cycle with
// googlePlacesReviews.ts, which imports fetchReviewsFromDb from here.
import type { ReputationAggregate, ReputationReview } from "../googlePlacesReviews";
import { getRequiredUserId } from "./ownership";

export type GoogleReviewRow = {
  id: string;
  review_key: string;
  author_name: string;
  author_url: string;
  photo_url: string;
  rating: number;
  quote: string;
  published_at: string | null;
  hidden: boolean;
  sort_order: number;
  synced_at: string | null;
};

export type GoogleReviewStats = {
  rating: number;
  total_reviews: number;
  maps_uri: string;
  place_id: string;
  synced_at: string | null;
  last_error: string;
};

const REVIEW_COLUMNS =
  "id, review_key, author_name, author_url, photo_url, rating, quote, published_at, hidden, sort_order, synced_at";

/** `href` may come back empty; the caller substitutes the Google fallback link. */
function rowToReview(row: GoogleReviewRow, mapsUri: string): ReputationReview {
  return {
    id: row.id,
    href: row.author_url?.trim() || mapsUri?.trim() || "",
    name: row.author_name?.trim() || "Google reviewer",
    quote: row.quote || "",
    rating: Number(row.rating) || 5,
    photo: row.photo_url?.trim() || undefined,
  };
}

/**
 * Drops a hand-added review once the same reviewer arrives from Google, which
 * happens when a manually imported person later rotates into the Places API's
 * top five. The synced copy wins because Google keeps it up to date. Order is
 * otherwise preserved.
 */
function dedupeByReviewer(rows: GoogleReviewRow[]): GoogleReviewRow[] {
  const byKey = new Map<string, GoogleReviewRow>();
  for (const row of rows) {
    const key = reviewerKey(row.author_name);
    const existing = byKey.get(key);
    if (!existing || (isManualReview(existing) && !isManualReview(row))) {
      byKey.set(key, row);
    }
  }
  const kept = new Set(byKey.values());
  return rows.filter((row) => kept.has(row));
}

/**
 * Public read: visible reviews plus the aggregate rating. Returns null when the
 * CMS is unreachable or empty so the caller can fall back to curated slides.
 */
export async function fetchReviewsFromDb(): Promise<{
  reviews: ReputationReview[];
  aggregate: ReputationAggregate;
} | null> {
  const sb = getSupabase();
  if (!sb || !isCmsConfigured()) return null;

  const [reviewsRes, statsRes] = await Promise.all([
    sb
      .from("google_reviews")
      .select(REVIEW_COLUMNS)
      .eq("hidden", false)
      .order("sort_order", { ascending: true })
      .order("published_at", { ascending: false }),
    sb
      .from("google_review_stats")
      .select("rating, total_reviews, maps_uri")
      .eq("id", 1)
      .maybeSingle(),
  ]);

  if (reviewsRes.error) {
    console.warn("[cms] google_reviews fetch failed, using curated slides", reviewsRes.error.message);
    return null;
  }

  const rows = dedupeByReviewer((reviewsRes.data || []) as GoogleReviewRow[]);
  if (!rows.length) return null;

  const stats = (statsRes.data || null) as Pick<
    GoogleReviewStats,
    "rating" | "total_reviews" | "maps_uri"
  > | null;
  const mapsUri = stats?.maps_uri || "";

  return {
    reviews: rows.map((row) => rowToReview(row, mapsUri)),
    aggregate: {
      rating: Number(stats?.rating) || 0,
      totalReviews: Number(stats?.total_reviews) || 0,
    },
  };
}

/** Admin read: every review including hidden ones, in display order. */
export async function adminFetchReviews(): Promise<GoogleReviewRow[]> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb
    .from("google_reviews")
    .select(REVIEW_COLUMNS)
    .order("sort_order", { ascending: true })
    .order("published_at", { ascending: false });

  if (error) throw new Error(describeError(error.message));
  return (data || []) as GoogleReviewRow[];
}

export async function adminFetchReviewStats(): Promise<GoogleReviewStats | null> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");

  const { data, error } = await sb
    .from("google_review_stats")
    .select("rating, total_reviews, maps_uri, place_id, synced_at, last_error")
    .eq("id", 1)
    .maybeSingle();

  if (error) throw new Error(describeError(error.message));
  return (data || null) as GoogleReviewStats | null;
}

export async function adminSetReviewHidden(id: string, hidden: boolean): Promise<void> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { error } = await sb.from("google_reviews").update({ hidden }).eq("id", id);
  if (error) throw new Error(describeError(error.message));
}

/** Persists the given ids as sort_order 0..n-1. */
export async function adminSaveReviewOrder(ids: string[]): Promise<void> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  for (let i = 0; i < ids.length; i += 1) {
    const { error } = await sb.from("google_reviews").update({ sort_order: i }).eq("id", ids[i]);
    if (error) throw new Error(describeError(error.message));
  }
}

export type ReviewInput = {
  author_name: string;
  quote: string;
  rating: number;
  published_at: string | null;
  author_url: string;
  photo_url: string;
};

/** Manual rows carry this prefix so the Google sync can never overwrite them. */
export const MANUAL_REVIEW_PREFIX = "manual/";

export function isManualReview(row: Pick<GoogleReviewRow, "review_key">): boolean {
  return row.review_key.startsWith(MANUAL_REVIEW_PREFIX);
}

function newManualKey(): string {
  const id =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${MANUAL_REVIEW_PREFIX}${id}`;
}

/**
 * Normalised reviewer name used to spot the same person arriving from two
 * sources. Google returns straight apostrophes while hand-entered copy tends to
 * use curly ones, so "Ma'at" and "Ma’at" must collapse to one key.
 */
export function reviewerKey(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/\s+/g, " ");
}

/** Imports and hand-added reviews append below whatever is already stored. */
async function nextSortOrder(sb: NonNullable<ReturnType<typeof getSupabase>>): Promise<number> {
  const { data } = await sb
    .from("google_reviews")
    .select("sort_order")
    .order("sort_order", { ascending: false })
    .limit(1)
    .maybeSingle();
  return Number((data as { sort_order?: number } | null)?.sort_order ?? -1) + 1;
}

/**
 * Adds a review typed in by an admin. Google's Places API only ever returns its
 * five "most relevant" reviews, so the rest have to be entered by hand.
 */
export async function adminCreateReview(input: ReviewInput): Promise<GoogleReviewRow> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const sortOrder = await nextSortOrder(sb);

  const { data, error } = await sb
    .from("google_reviews")
    .insert({
      review_key: newManualKey(),
      author_name: input.author_name.trim(),
      quote: input.quote.trim(),
      rating: input.rating,
      published_at: input.published_at,
      author_url: input.author_url.trim(),
      photo_url: input.photo_url.trim(),
      hidden: false,
      sort_order: sortOrder,
    })
    .select(REVIEW_COLUMNS)
    .single();

  if (error) throw new Error(describeError(error.message));
  return data as GoogleReviewRow;
}

export type ImportResult = { inserted: number; skipped: string[] };

/**
 * Bulk-adds reviews pasted in from the Google Maps dialog.
 *
 * Reviewers already stored are skipped rather than inserted, because a paste of
 * the full list will always re-include the five the scheduled sync has already
 * pulled from Google.
 */
export async function adminImportReviews(rows: ReviewInput[]): Promise<ImportResult> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data: existingRows, error: existingError } = await sb
    .from("google_reviews")
    .select("author_name");
  if (existingError) throw new Error(describeError(existingError.message));

  const seen = new Set(
    ((existingRows || []) as { author_name: string }[]).map((r) => reviewerKey(r.author_name))
  );

  const skipped: string[] = [];
  const payload: Record<string, unknown>[] = [];
  let sortOrder = await nextSortOrder(sb);

  for (const row of rows) {
    const name = row.author_name.trim();
    const key = reviewerKey(name);
    if (!name || !row.quote.trim()) continue;
    if (seen.has(key)) {
      skipped.push(name);
      continue;
    }
    seen.add(key);
    payload.push({
      review_key: newManualKey(),
      author_name: name,
      quote: row.quote.trim(),
      rating: row.rating,
      published_at: row.published_at,
      author_url: row.author_url.trim(),
      photo_url: row.photo_url.trim(),
      hidden: false,
      sort_order: sortOrder,
    });
    sortOrder += 1;
  }

  if (payload.length) {
    const { error } = await sb.from("google_reviews").insert(payload);
    if (error) throw new Error(describeError(error.message));
  }

  return { inserted: payload.length, skipped };
}

export async function adminUpdateReview(id: string, patch: Partial<ReviewInput>): Promise<void> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { error } = await sb.from("google_reviews").update(patch).eq("id", id);
  if (error) throw new Error(describeError(error.message));
}

/**
 * Removes every hand-added row, leaving the Google-synced ones untouched. Exists
 * so a bad paste can be undone in one action instead of dozens of deletions.
 */
export async function adminDeleteImportedReviews(): Promise<number> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb
    .from("google_reviews")
    .delete()
    .like("review_key", `${MANUAL_REVIEW_PREFIX}%`)
    .select("id");

  if (error) throw new Error(describeError(error.message));
  return (data || []).length;
}

export async function adminDeleteReview(id: string): Promise<void> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { error } = await sb.from("google_reviews").delete().eq("id", id);
  if (error) throw new Error(describeError(error.message));
}

/**
 * Triggers the sync job by hand. pg_net is async, so the request is fired and
 * the ingest is polled a few times until the response lands.
 */
export async function adminSyncReviewsNow(): Promise<string> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { error: reqError } = await sb.rpc("google_reviews_request");
  if (reqError) throw new Error(describeError(reqError.message));

  for (let attempt = 0; attempt < 8; attempt += 1) {
    await new Promise((resolve) => window.setTimeout(resolve, 1500));
    const { data, error } = await sb.rpc("google_reviews_ingest");
    if (error) throw new Error(describeError(error.message));
    const status = String(data ?? "");
    if (status !== "pending") return status;
  }

  return "Still waiting on Google — check back in a minute.";
}

function describeError(message: string): string {
  if (/does not exist|schema cache|PGRST205|PGRST202/i.test(message)) {
    return "Reviews tables missing. Run supabase/migrations/20260828100000_google_reviews.sql and 20260828100100_google_reviews_sync.sql in Lovable Cloud SQL, then try again.";
  }
  // Hit locally whenever VITE_ADMIN_DEV_BYPASS skips the gate without a session,
  // since the policies check has_role(auth.uid(), 'admin').
  if (/row-level security|violates row-level|42501/i.test(message)) {
    return "Not allowed — sign in with an admin account on the live site. Writing reviews doesn't work with the local admin bypass because there's no signed-in user.";
  }
  return message || "Reviews request failed";
}
