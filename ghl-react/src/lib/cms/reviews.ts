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

  const rows = (reviewsRes.data || []) as GoogleReviewRow[];
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
  return message || "Reviews request failed";
}
