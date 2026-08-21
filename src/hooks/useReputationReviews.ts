import { useEffect, useState } from "react";
import {
  fetchReputationReviews,
  type ReputationAggregate,
  type ReputationReview,
} from "../lib/reputationHubReviews";

type ReviewsState = {
  reviews: ReputationReview[];
  aggregate: ReputationAggregate | null;
  loading: boolean;
  error: string | null;
};

/** Live Google reviews from ReputationHub only — no static fallback cards. */
export default function useReputationReviews() {
  const [state, setState] = useState<ReviewsState>({
    reviews: [],
    aggregate: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    fetchReputationReviews()
      .then(({ reviews, aggregate }) => {
        if (cancelled) return;
        setState({
          reviews,
          aggregate,
          loading: false,
          error: null,
        });
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setState({
          reviews: [],
          aggregate: null,
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
