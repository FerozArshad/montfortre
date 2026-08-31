import useReputationAggregate from "../../hooks/useReputationAggregate";
import "../../styles/hero-rating-solo.css";

interface HeroGoogleRatingProps {
  /**
   * Class prefix of the host page's hero, so existing hero CSS applies. Use
   * "solo" on heroes with no matching styles of their own: it carries its own
   * self-contained card styling that reads on light and dark backgrounds.
   */
  prefix: "nbhd" | "tf" | "stan" | "solo";
}

/**
 * Live Google rating badge pinned to a hero image. Numbers come from the same
 * reputation aggregate the rest of the site uses, so they follow the synced
 * review data rather than hard-coded copy.
 */
export default function HeroGoogleRating({ prefix }: HeroGoogleRatingProps) {
  const { ratingLabel, stars, totalReviews } = useReputationAggregate();
  return (
    <div className={`${prefix}-hero-rating`}>
      <svg width="50" height="50" viewBox="0 0 48 48" role="img" aria-label="Google">
        <path
          fill="#4285F4"
          d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 2-1.6 5-4.5 7l-.1.3 6.5 5 .5.1c4.2-3.8 6.6-9.5 6.6-15.7"
        />
        <path
          fill="#34A853"
          d="M24 46c5.9 0 10.9-1.9 14.5-5.3l-6.9-5.4c-1.8 1.3-4.3 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-.3.1-6.7 5.2-.1.3C8 41.6 15.4 46 24 46"
        />
        <path
          fill="#FBBC05"
          d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4v-.3l-6.8-5.3-.2.1A22 22 0 0 0 2 24c0 3.5.9 6.9 2.5 9.9z"
        />
        <path
          fill="#EA4335"
          d="M24 10.5c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4.3 29.9 2 24 2 15.4 2 8 6.4 4.5 14.1l7 5.4c1.8-5.3 6.7-9 12.5-9"
        />
      </svg>
      <div className={`${prefix}-hero-rating-copy`}>
        <span className={`${prefix}-hero-rating-title`}>Google Rating</span>
        <div className={`${prefix}-hero-rating-row`}>
          <span className={`${prefix}-hero-rating-score`}>{ratingLabel}</span>
          <span className={`${prefix}-hero-rating-stars`}>{stars}</span>
        </div>
        <span className={`${prefix}-hero-rating-count`}>
          Over <strong>{totalReviews} Reviews</strong>
        </span>
      </div>
    </div>
  );
}
