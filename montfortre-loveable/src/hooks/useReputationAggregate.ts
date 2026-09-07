import { useEffect, useState } from "react";
import {
  DEFAULT_AGGREGATE,
  fetchGoogleReviews,
  formatRatingLabel,
  ratingStars,
  type ReputationAggregate,
} from "../lib/googlePlacesReviews";

export type ReputationAggregateView = ReputationAggregate & {
  ratingLabel: string;
  stars: string;
  loading: boolean;
};

/** Live Google rating + review count (Places + curated fallback). */
export default function useReputationAggregate(): ReputationAggregateView {
  const [aggregate, setAggregate] = useState<ReputationAggregate>(DEFAULT_AGGREGATE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchGoogleReviews()
      .then(({ aggregate: next }) => {
        if (cancelled) return;
        setAggregate({
          rating: next.rating > 0 ? next.rating : DEFAULT_AGGREGATE.rating,
          totalReviews:
            next.totalReviews > 0 ? next.totalReviews : DEFAULT_AGGREGATE.totalReviews,
        });
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setAggregate(DEFAULT_AGGREGATE);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    ...aggregate,
    ratingLabel: formatRatingLabel(aggregate.rating),
    stars: ratingStars(aggregate.rating),
    loading,
  };
}
