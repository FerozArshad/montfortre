import HeroGoogleRating from "./HeroGoogleRating";
import "../../styles/neighborhoods-page.css";

interface NeighborhoodHubHeroProps {
  /** Display name of the neighborhood, e.g. "Harlem". */
  name: string;
  /** Image slug under /redesign-assets/hoods/. */
  image: string;
  lead: string;
}

/**
 * Hero for the neighborhood hub pages. The title is a styled paragraph rather
 * than a heading: these pages already carry their h1 in the article below.
 */
export default function NeighborhoodHubHero({ name, image, lead }: NeighborhoodHubHeroProps) {
  return (
    <section className="nbhd-hero" data-screen-label={`${name} hero`}>
      <div className="nbhd-hero-ring" />
      <div className="nbhd-hero-inner">
        <div data-reveal="">
          <div className="nbhd-crumb">
            <a href="/" className="nbhd-crumb-link">
              Home
            </a>{" "}
            <span className="nbhd-crumb-sep">/</span> <span className="nbhd-crumb-here">{name}</span>
          </div>
          <p className="nbhd-hero-title">{name} real estate</p>
          <p className="nbhd-hero-lead">{lead}</p>
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
            <img src={`/redesign-assets/hoods/${image}`} alt={name} width="640" height="512" loading="eager" />
          </div>
          <HeroGoogleRating prefix="nbhd" />
        </div>
      </div>
    </section>
  );
}
