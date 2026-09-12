import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home-reviews.css";
import useReputationAggregate from "../../hooks/useReputationAggregate";
import useReputationReviews from "../../hooks/useReputationReviews";
import useReviewCarousel from "../../hooks/useReviewCarousel";
import { GOOGLE_G_MARK, ratingStars } from "../../lib/googlePlacesReviews";

type ReviewsSectionProps = {
  /**
   * "carousel" is the sitewide teaser; "grid" stacks every stored review for the
   * success-stories page, where the whole set is the point.
   */
  variant?: "carousel" | "grid";
  /** Slides shown in carousel mode. Ignored by the grid. */
  limit?: number;
  heading?: string;
};

const GRID_PAGE_SIZE = 8;

function formatReviewDate(iso?: string | null): string | null {
  if (!iso) return null;
  const t = Date.parse(iso);
  if (!Number.isFinite(t)) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(t));
}

function ReviewCard({
  review,
}: {
  review: {
    id: string;
    href: string;
    name: string;
    quote: string;
    rating: number;
    photo?: string;
    publishedAt?: string | null;
  };
}) {
  const postedOn = formatReviewDate(review.publishedAt);
  return (
    <a href={review.href} target="_blank" rel="noopener noreferrer" className="home-rev-slide">
      <div className="home-rev-author">
        {review.photo ? (
          <img src={review.photo} alt="" referrerPolicy="no-referrer" />
        ) : (
          <span className="home-rev-author-fallback" aria-hidden="true">
            {(review.name.trim()[0] || "G").toUpperCase()}
          </span>
        )}
        <div>
          <h4>{review.name}</h4>
          <div className="home-rev-posted">
            <img src={GOOGLE_G_MARK} alt="" /> Posted on Google
            {postedOn ? (
              <>
                <span className="home-rev-posted-sep" aria-hidden="true">
                  ·
                </span>
                <time className="home-rev-posted-date" dateTime={review.publishedAt || undefined}>
                  {postedOn}
                </time>
              </>
            ) : null}
          </div>
        </div>
        <span className="home-rev-slide-stars">{ratingStars(review.rating)}</span>
      </div>
      <div>
        <span className="home-rev-quote-mark">“</span>
        <p>{review.quote}</p>
      </div>
    </a>
  );
}

/** Sitewide Google reviews — original Montfort cream carousel (no GHL iframe). */
export default function ReviewsSection({
  variant = "carousel",
  limit = 8,
  heading = "Realtor Reviews",
}: ReviewsSectionProps = {}) {
  const { reviews, loading } = useReputationReviews();
  const { ratingLabel, stars, totalReviews } = useReputationAggregate();
  const isGrid = variant === "grid";
  const [shown, setShown] = useState(GRID_PAGE_SIZE);

  const slides = isGrid ? reviews.slice(0, shown) : reviews.slice(0, limit);
  const hasMore = isGrid && shown < reviews.length;

  // Passing 0 keeps the carousel wiring inert on the grid page.
  useReviewCarousel(isGrid ? 0 : slides.length);

  return (
    <section className="home-rev" data-screen-label="Reviews">
      <div className="home-rev-inner">
        <div data-reveal="" className="home-rev-head">
          <div>
            <div className="home-rev-kicker">
              <span className="home-rev-kicker-line" />
              <span className="home-rev-kicker-label">What clients say</span>
            </div>
            <h2>{heading}</h2>
          </div>
          <div className="home-rev-score">
            <img src={GOOGLE_G_MARK} alt="Google" />
            <span className="home-rev-score-num">{ratingLabel}</span>
            <div className="home-rev-score-copy">
              <span className="home-rev-stars">{stars}</span>
              {isGrid ? null : (
                <Link to="/success-stories/" className="home-rev-all">
                  Read all reviews →
                </Link>
              )}
              {!loading && totalReviews > 0 ? (
                <span className="home-rev-count-hint">Over {totalReviews} Google reviews</span>
              ) : null}
            </div>
          </div>
        </div>

        {slides.length === 0 ? (
          <p className="home-rev-empty">Loading client reviews…</p>
        ) : isGrid ? (
          <>
            <div className="home-rev-grid">
              {slides.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            {hasMore ? (
              <div className="home-rev-more">
                <button
                  type="button"
                  className="home-rev-more-btn"
                  onClick={() => setShown((n) => n + GRID_PAGE_SIZE)}
                >
                  Show more reviews ({reviews.length - shown} left)
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <>
            <div className="home-rev-slider">
              <div id="review-track" className="no-sb">
                {slides.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
              <button type="button" id="review-prev" className="home-rev-nav" aria-label="Previous review">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path
                    d="M12.5 4.5L7 10l5.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button type="button" id="review-next" className="home-rev-nav" aria-label="Next review">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path
                    d="M7.5 4.5L13 10l-5.5 5.5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div id="review-dots">
              {slides.map((review, i) => (
                <button
                  key={review.id}
                  type="button"
                  className="rev-dot"
                  data-i={String(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
