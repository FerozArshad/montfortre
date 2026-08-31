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

/** Live Google reviews (Places API) with curated Montfort fallback — no iframe. */
export default function useReputationReviews() {
  const [state, setState] = useState<ReviewsState>({
    reviews: CURATED_REVIEWS.slice(0, 6),
    aggregate: DEFAULT_AGGREGATE,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    fetchGoogleReviews()
      .then(({ reviews, aggregate }) => {
        if (cancelled) return;
        setState({
          reviews: reviews.length ? reviews : CURATED_REVIEWS.slice(0, 6),
          aggregate,
          loading: false,
          error: null,
        });
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setState({
          reviews: CURATED_REVIEWS.slice(0, 6),
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
