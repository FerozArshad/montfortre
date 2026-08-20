import { useEffect, useState } from "react";
import {
  fetchReputationReviews,
  type ReputationAggregate,
  type ReputationReview,
} from "../lib/reputationHubReviews";

type ReviewsState = {
  reviews: ReputationReview[];
  aggregate: ReputationAggregate;
  loading: boolean;
  error: string | null;
};

const DEFAULT_AGGREGATE: ReputationAggregate = { rating: 5, totalReviews: 79 };

export default function useReputationReviews(fallback: ReputationReview[]) {
  const [state, setState] = useState<ReviewsState>({
    reviews: fallback,
    aggregate: DEFAULT_AGGREGATE,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    fetchReputationReviews()
      .then(({ reviews, aggregate }) => {
        if (cancelled) return;
        setState({
          reviews: reviews.length ? reviews : fallback,
          aggregate,
          loading: false,
          error: null,
        });
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setState({
          reviews: fallback,
          aggregate: DEFAULT_AGGREGATE,
          loading: false,
          error: err instanceof Error ? err.message : "Failed to load reviews",
        });
      });

    return () => {
      cancelled = true;
    };
    // Fallback is a stable module-level constant from ReviewsSection.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
}
