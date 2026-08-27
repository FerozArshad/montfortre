import { Link } from "react-router-dom";
import "../../styles/home-reviews.css";
import useReputationAggregate from "../../hooks/useReputationAggregate";
import useReputationReviews from "../../hooks/useReputationReviews";
import useReviewCarousel from "../../hooks/useReviewCarousel";
import { GOOGLE_G_MARK, ratingStars } from "../../lib/googlePlacesReviews";

/** Sitewide Google reviews — original Montfort cream carousel (no GHL iframe). */
export default function ReviewsSection() {
  const { reviews, loading } = useReputationReviews();
  const { ratingLabel, stars, totalReviews } = useReputationAggregate();
  const slides = reviews;

  useReviewCarousel(slides.length);

  return (
    <section className="home-rev" data-screen-label="Reviews">
      <div className="home-rev-inner">
        <div data-reveal="" className="home-rev-head">
          <div>
            <div className="home-rev-kicker">
              <span className="home-rev-kicker-line" />
              <span className="home-rev-kicker-label">What clients say</span>
            </div>
            <h2>Realtor Reviews</h2>
          </div>
          <div className="home-rev-score">
            <img src={GOOGLE_G_MARK} alt="Google" />
            <span className="home-rev-score-num">{ratingLabel}</span>
            <div>
              <span className="home-rev-stars">{stars}</span>
              <Link to="/success-stories/" className="home-rev-all">
                Read all reviews →
              </Link>
              {!loading && totalReviews > 0 ? (
                <span className="home-rev-count-hint">Over {totalReviews} Google reviews</span>
              ) : null}
            </div>
          </div>
        </div>

        {slides.length === 0 ? (
          <p className="home-rev-empty">Loading client reviews…</p>
        ) : (
          <>
            <div className="home-rev-slider">
              <div id="review-track" className="no-sb">
                {slides.map((review) => (
                  <a
                    key={review.id}
                    href={review.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-rev-slide"
                  >
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
                        </div>
                      </div>
                      <span className="home-rev-slide-stars">{ratingStars(review.rating)}</span>
                    </div>
                    <div>
                      <span className="home-rev-quote-mark">“</span>
                      <p>{review.quote}</p>
                    </div>
                  </a>
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
