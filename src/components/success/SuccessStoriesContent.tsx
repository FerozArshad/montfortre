import { useEffect } from "react";
import ContactSection from "../shared/ContactSection";
import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import useReputationAggregate from "../../hooks/useReputationAggregate";
import {
  REPUTATION_HUB_SUCCESS_STORIES_WIDGET_URL,
  REPUTATION_HUB_WIDGET_SCRIPT,
  REPUTATION_HUB_WIDGET_SCRIPT_ID,
} from "../../lib/reputationHubReviews";
import "../../styles/success-page.css";
import "../../styles/home-reviews.css";

const GOOGLE_MARK =
  "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png";

function ensureReviewWidgetScript() {
  if (document.getElementById(REPUTATION_HUB_WIDGET_SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = REPUTATION_HUB_WIDGET_SCRIPT_ID;
  script.src = REPUTATION_HUB_WIDGET_SCRIPT;
  script.async = true;
  document.body.appendChild(script);
}

export default function SuccessStoriesContent() {
  const { ratingLabel, stars, totalReviews } = useReputationAggregate();

  useEffect(() => {
    ensureReviewWidgetScript();
  }, []);

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
            href="https://maps.google.com/?cid=11378470238102062088"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read verified Google reviews"
            className="succ-google"
          >
            <div className="succ-google-score">
              <div className="succ-google-score-row">
                <img src={GOOGLE_MARK} alt="Google" />
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

      <section className="succ-list home-rev" data-screen-label="Testimonials">
        <div className="home-rev-inner">
          <iframe
            className="lc_reviews_widget home-rev-frame"
            src={REPUTATION_HUB_SUCCESS_STORIES_WIDGET_URL}
            title="Google reviews for Montfort Real Estate"
            loading="eager"
            scrolling="no"
            frameBorder={0}
            referrerPolicy="no-referrer-when-downgrade"
            style={{ minWidth: "100%", width: "100%" }}
          />
        </div>
      </section>

      <ResourcesSection />
      <ContactSection />
    </div>
  );
}
