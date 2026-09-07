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

function shuffleReviews(rows: ReputationReview[]): ReputationReview[] {
  const next = [...rows];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

/** Live Google reviews (Places API) with curated Montfort fallback — no iframe. */
export default function useReputationReviews() {
  const [state, setState] = useState<ReviewsState>({
    reviews: shuffleReviews(CURATED_REVIEWS).slice(0, 8),
    aggregate: DEFAULT_AGGREGATE,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;
    let pool: ReputationReview[] = CURATED_REVIEWS;
    let reshuffleTimer = 0;

    const applyPool = (source: ReputationReview[]) => {
      pool = source.length ? source : CURATED_REVIEWS;
      setState((prev) => ({
        ...prev,
        reviews: shuffleReviews(pool).slice(0, Math.max(8, Math.min(pool.length, 12))),
        loading: false,
        error: null,
      }));
    };

    fetchGoogleReviews()
      .then(({ reviews, aggregate }) => {
        if (cancelled) return;
        setState((prev) => ({ ...prev, aggregate }));
        applyPool(reviews.length ? reviews : CURATED_REVIEWS);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setState((prev) => ({
          ...prev,
          aggregate: DEFAULT_AGGREGATE,
          loading: false,
          error: err instanceof Error ? err.message : "Failed to load reviews",
        }));
        applyPool(CURATED_REVIEWS);
      });

    // Re-shuffle the visible deck periodically so returning visitors see fresh order.
    reshuffleTimer = window.setInterval(() => {
      if (cancelled || document.hidden) return;
      setState((prev) => ({
        ...prev,
        reviews: shuffleReviews(pool).slice(0, Math.max(8, Math.min(pool.length, 12))),
      }));
    }, 90_000);

    return () => {
      cancelled = true;
      window.clearInterval(reshuffleTimer);
    };
  }, []);

  return state;
}
