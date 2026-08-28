import ContactSection from "../shared/ContactSection";
import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import useReputationAggregate from "../../hooks/useReputationAggregate";
import { GOOGLE_G_MARK, GOOGLE_MAPS_PROFILE_HREF } from "../../lib/googlePlacesReviews";
import "../../styles/success-page.css";
import "../../styles/home-reviews.css";

export default function SuccessStoriesContent() {
  const { ratingLabel, stars, totalReviews } = useReputationAggregate();

  return (
    <div>
      <section className="succ-hero" data-screen-label="Success hero">
        <img className="succ-hero-photo" src="/redesign-assets/hoods/harlem.webp" alt="Harlem" aria-hidden="true" />
        <div className="succ-hero-shade" />
        <div className="succ-hero-ring" />
        <div className="succ-hero-inner">
          <div className="succ-hero-kicker">
            <span className="succ-hero-kicker-line" />
            <span className="succ-hero-kicker-label">Client Reviews</span>
            <span className="succ-hero-kicker-line" />
          </div>
          <h1>Success stories</h1>
          <p className="succ-hero-lead">
            Real reviews from New York buyers and sellers who trusted Stanley Montfort with one of the biggest decisions of their lives.
          </p>
          <a
            href={GOOGLE_MAPS_PROFILE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read verified Google reviews"
            className="succ-google"
          >
            <div className="succ-google-score">
              <div className="succ-google-score-row">
                <img src={GOOGLE_G_MARK} alt="Google" />
                <span className="succ-google-num">{ratingLabel}</span>
              </div>
              <span className="succ-google-label">Verified Google reviews</span>
            </div>
            <div className="succ-google-meta">
              <span className="succ-google-stars">{stars}</span>
              <span className="succ-google-count">
                Over <strong>{totalReviews} reviews</strong>
              </span>
            </div>
          </a>
          <div className="succ-hero-ctas">
            <a href="https://calendly.com/montfort" target="_blank" rel="noopener noreferrer" className="succ-hero-book">
              Book a consultation{" "}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h9M8 3.5L12.5 8 8 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="tel:+1-646-970-1078" className="succ-hero-tel">
              Call (646) 970-1078
            </a>
          </div>
        </div>
      </section>
      <PromisesBar variant="nbhd" />

      <div className="succ-list">
        <ReviewsSection variant="grid" heading="All client reviews" />
      </div>

      <ResourcesSection />
      <ContactSection />
    </div>
  );
}
