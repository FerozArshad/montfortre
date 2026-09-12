import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import ReviewsSection from "../shared/ReviewsSection";
import "../../styles/harlem-page.css";
import "../../styles/neighborhoods-page.css";
import "../../styles/harlem-brownstones-page.css";

import HeroGoogleRating from "../shared/HeroGoogleRating";
import PageListingsSection from "../shared/PageListingsSection";
import PageContactSection from "../shared/PageContactSection";
import NeighborhoodMistakesLead from "../shared/NeighborhoodMistakesLead";
import NeighborhoodGuideBody from "../shared/NeighborhoodGuideBody";
import harlemBrownstonesGuide from "../../data/neighborhood-guides/harlem-brownstones.html?raw";

const NEWS_ARTICLES = [
  {
    href: "/upper-west-side-townhouse-q2-2024-market-report/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Upper West Side Townhouse Q2 2024 Market Report",
    title: "Upper West Side Townhouse Q2 2024 Market Report",
    excerpt:
      "On the Upper West Side, we observed a distinct trend that diverges from the citywide patterns. Speci…",
  },
  {
    href: "/harlem-brownstone-q2-2024-market-report/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Harlem Brownstone Q2 2024 Market Report",
    title: "Harlem Brownstone Q2 2024 Market Report",
    excerpt: "The Harlem brownstone market has seen an increase in sales activity since this time last year. In Q2…",
  },
  {
    href: "/discover-your-dream-home-explore-apartments-for-sale-on-the-upper-west-side/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "Discover Your Dream Home: Explore Apartments for Sale on the Upper West Side",
    title: "Discover Your Dream Home: Explore Apartments for Sale on the Upper West Side",
    excerpt:
      "Are you searching for your dream home in one of New York City’s most sought-after neighborhoods? Loo…",
  },
] as const;

const CALC_LINKS = [
  {
    href: "/nyc-brownstone-buyer-closing-cost-calculator/",
    label: "Buyer Closing Cost Calculator",
  },
  {
    href: "/nyc-brownstone-seller-closing-cost-calculator/",
    label: "Seller Closing Cost Calculator",
  },
  {
    href: "/nyc-rent-vs-buy-brownstone-calculator/",
    label: "Rent vs Buy Brownstone Calculator",
  },
  {
    href: "/nyc-condo-vs-brownstone-calculator/",
    label: "Condo vs Brownstone Calculator",
  },
] as const;

export default function HarlemBrownstonesContent() {
  return (
    <>
      <section className="nbhd-hero" data-screen-label="Service hero">
        <div className="nbhd-hero-ring" />
        <div className="nbhd-hero-inner">
          <div data-reveal="">
            <h1>Harlem Brownstones — Expert Guidance for Buyers, Sellers & Investors</h1>
            <p className="nbhd-hero-lead">
              We’ll help you purchase the right <b>Harlem brownstone</b> while avoiding costly renovation surprises,
              structural issues, and unnecessary risks
            </p>
            <div className="nbhd-hero-ctas">
              <a href="tel:+16469701078" className="nbhd-hero-tel">
                Call 1-(646)-970-1078
              </a>
              <a href="https://calendly.com/montfort" className="nbhd-hero-book">
                Schedule A Consultation
              </a>
            </div>
          </div>
          <div className="nbhd-hero-media" data-reveal="">
            <div className="nbhd-hero-frame">
              <img
                src="/redesign-assets/migrated-live/Harlem-main-page.png"
                alt="Harlem brownstones"
                width="640"
                height="512"
                loading="eager"
                className="nbhd-hero-photo"
              />
            </div>
            <HeroGoogleRating prefix="nbhd" />
          </div>
        </div>
      </section>

      <PromisesBar variant="nbhd" />

      <PageListingsSection
        market="Harlem"
        propertyType="Brownstone"
        label="Harlem brownstones"
        idxUrl="https://stanley.olridx.com/Search/Sales?idr=False#115357"
      />

      <section className="nbhd-intro" data-screen-label="Guide">
        <div className="nbhd-intro-inner">
          <div className="nbhd-intro-copy" data-reveal="">
            <NeighborhoodGuideBody html={harlemBrownstonesGuide} />
          </div>
        </div>
      </section>

      <ReviewsSection />

      <ResourcesSection
        title="Recent News & Realtor Advice"
        subtitle="Stay in the loop on the latest events, news, & happenings in and around our community!"
        showCategory={false}
        showCta={false}
        articles={NEWS_ARTICLES}
      />

      <section className="hb-calc-strip" data-screen-label="Brownstone calculators">
        <div className="hb-calc-strip-inner">
          <h2>NYC Brownstone Calculators</h2>
          <p>Estimate closing costs, compare rent vs buy, and weigh condo vs brownstone ownership.</p>
          <ul className="hb-calc-strip-links">
            {CALC_LINKS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <NeighborhoodMistakesLead neighborhood="Harlem" brownstoneHref="/harlem-brownstones/" />

      <PageContactSection topic="Harlem Brownstones" />
    </>
  );
}
