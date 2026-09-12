import { useEffect, useState } from "react";
import {
  CURATED_REVIEWS,
  DEFAULT_AGGREGATE,
  fetchGoogleReviews,
  type ReputationAggregate,
  type ReputationReview,
} from "../lib/googlePlacesReviews";

type ReviewsState = {
  reviews: ReputationReview[];
  aggregate: ReputationAggregate | null;
  loading: boolean;
  error: string | null;
};

/** Newest published reviews first; undated curated slides keep relative order at the end. */
function sortNewestFirst(rows: ReputationReview[]): ReputationReview[] {
  return [...rows].sort((a, b) => {
    const aTime = a.publishedAt ? Date.parse(a.publishedAt) : Number.NaN;
    const bTime = b.publishedAt ? Date.parse(b.publishedAt) : Number.NaN;
    const aOk = Number.isFinite(aTime);
    const bOk = Number.isFinite(bTime);
    if (aOk && bOk) return bTime - aTime;
    if (aOk) return -1;
    if (bOk) return 1;
    return 0;
  });
}

/** Live Google reviews (Places API) with curated Montfort fallback — no iframe. */
export default function useReputationReviews() {
  const [state, setState] = useState<ReviewsState>({
    reviews: sortNewestFirst(CURATED_REVIEWS),
    aggregate: DEFAULT_AGGREGATE,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    fetchGoogleReviews()
      .then(({ reviews, aggregate }) => {
        if (cancelled) return;
        const source = reviews.length ? reviews : CURATED_REVIEWS;
        setState({
          reviews: sortNewestFirst(source),
          aggregate,
          loading: false,
          error: null,
        });
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setState({
          reviews: sortNewestFirst(CURATED_REVIEWS),
          aggregate: DEFAULT_AGGREGATE,
          loading: false,
          error: err instanceof Error ? err.message : "Failed to load reviews",
        });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
