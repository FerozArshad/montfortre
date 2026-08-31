import ContactSection from "../shared/ContactSection";
import HeroGoogleRating from "../shared/HeroGoogleRating";
import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import "../../styles/neighborhoods-page.css";
import "../../styles/success-page.css";
import "../../styles/home-reviews.css";

export default function SuccessStoriesContent() {
  return (
    <div>
      <section className="nbhd-hero" data-screen-label="Success hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <div className="nbhd-crumb">
              <a href="/" className="nbhd-crumb-link">Home</a> <span className="nbhd-crumb-sep">/</span>{" "}
              <span className="nbhd-crumb-here">Success Stories</span>
            </div>
            <h1>Success stories from New York buyers and sellers</h1>
            <p className="nbhd-hero-lead">
              Real reviews from New York buyers and sellers who trusted Stanley Montfort with one of the biggest
              decisions of their lives.
            </p>
            <div className="nbhd-hero-ctas">
              <a href="tel:+16469701078" className="nbhd-hero-tel">
                Call 1-(646)-970-1078
              </a>
              <a href="https://calendly.com/montfort" className="nbhd-hero-book">
                Book A Consultation
              </a>
            </div>
          </div>
          <div className="nbhd-hero-media" data-reveal="">
            <div className="nbhd-hero-frame">
              <img
                src="/redesign-assets/hoods/harlem.webp"
                alt="Harlem brownstones"
                width="640"
                height="512"
                loading="eager"
              />
            </div>
            <HeroGoogleRating prefix="nbhd" />
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
