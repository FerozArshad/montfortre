import { useState } from "react";
import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import BedfordStuyvesantAreaNav from "./BedfordStuyvesantAreaNav";
import BedfordStuyvesantPoiMap from "./BedfordStuyvesantPoiMap";
import BedfordStuyvesantRealtorArticle from "./BedfordStuyvesantRealtorArticle";

import "../../styles/harlem-page.css";
import "../../styles/bedford-stuyvesant-page.css";

const PROPERTY_TYPES = [
  {
    href: "/bedford-stuyvesant-brownstones-2/",
    image: "/redesign-assets/hoods/bedford-stuyvesant-brownstones.png",
    alt: "Bedford stuyvesant Brownstones",
    title: "Bedford stuyvesant Brownstones",
    copy: "Historic brownstones, rich culture, and authentic Brooklyn living",
  },
  {
    href: "/bedford-stuyvesant-condos-2/",
    image: "/redesign-assets/hoods/bedford-stuyvesant-condos.png",
    alt: "Bedford stuyvesant Condos",
    title: "Bedford stuyvesant Condos",
    copy: "Modern residences, vibrant neighborhoods, and urban convenience",
  },
  {
    href: "/bedford-stuyvesant-co-ops-2/",
    image: "/redesign-assets/hoods/bedford-stuyvesant-coops.png",
    alt: "Bedford stuyvesant Co-Ops",
    title: "Bedford stuyvesant Co-Ops",
    copy: "Community-focused living, great value, and Brooklyn charm",
  },
  {
    href: "/bedford-stuyvesant-sros-2/",
    image: "/redesign-assets/hoods/bedford-stuyvesant-sros.png",
    alt: "Bedford stuyvesant SROs",
    title: "Bedford stuyvesant SROs",
    copy: "Affordable housing, investment potential, and unique opportunities",
  },
  {
    href: "/bedford-stuyvesant-co-ownership/",
    image: "/redesign-assets/hoods/bedford-stuyvesant-coownership.png",
    alt: "Bedford Coownership",
    title: "Bedford stuyvesant Co-Ownership",
    copy: "Shared ownership, lower costs, and greater buying power",
  },
] as const;






const OLR_SALES_URL = "https://stanley.olridx.com/Search/Sales";

function BedfordStuyvesantListingsIdx() {
  const embed = window.location.hostname === "montfortre.com";

  if (!embed) {
    return (
      <div className="hlm-listings-idx">
        <div className="hlm-listings-fallback">
          <p>
            This box is the live OLR IDX sales search. OLR only allows it to embed on montfortre.com, so it stays blank
            on localhost and preview. Open the search to see Bedford-Stuyvesant listings now.
          </p>
          <a href={OLR_SALES_URL} target="_blank" rel="noopener noreferrer" className="hlm-listings-btn">
            Open live listings
          </a>
        </div>
        <p className="hlm-listings-footnote">
          Live listing data provided by OLR IDX. Need help? <a href="/contact/">Contact us</a> or{" "}
          <a href="https://stanley.olridx.com/#" target="_blank" rel="noopener noreferrer">
            log in to your customer account
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="hlm-listings-idx">
      <iframe
        className="hlm-listings-frame"
        src={OLR_SALES_URL}
        scrolling="yes"
        title="Bedford-Stuyvesant homes for sale"
        loading="lazy"
      />
      <p className="hlm-listings-footnote">
        Live listing data provided by OLR IDX. Need help? <a href="/contact/">Contact us</a> or{" "}
        <a href="https://stanley.olridx.com/#" target="_blank" rel="noopener noreferrer">
          log in to your customer account
        </a>
        .
      </p>
    </div>
  );
}

const BEDFORD_STUYVESANT_ARTICLES = [
  {
    href: "/upper-west-side-townhouse-q2-2024-market-report/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Upper West Side Townhouse Q2 2024 Market Report",
    title: "Upper West Side Townhouse Q2 2024 Market Report",
    excerpt: "On the Upper West Side, we observed a distinct trend that diverges from the citywide patterns. Specifically, the…",
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
    image: "/redesign-assets/hoods/brooklyn-heights.webp",
    alt: "Discover Your Dream Home: Explore Apartments for Sale on the …",
    title: "Discover Your Dream Home: Explore Apartments for Sale on the …",
    excerpt: "Are you searching for your dream home in one of New York City’s most sought-after neighborhoods? Look no…",
  },
] as const;

export default function BedfordStuyvesantContent() {
  const [marketEmail, setMarketEmail] = useState(false);

  return (
    <>
      <BedfordStuyvesantPoiMap />
      <BedfordStuyvesantAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Bedford-Stuyvesant resides 68,920 people where 21% are homeowners. With an average
              age of 30, it’s a fairly young and energetic area, with many of them starting new families. Over the{"  "}
              roughly 51 homes have been sold with an average sold price of 2,207,397. That is an increase of $553,408
              from the previous period.
            </p>
            <div className="hlm-listings-cta">
              <a href="/idx/listings/bedford-stuyvesant/" className="hlm-listings-btn">
                View More Listings
              </a>
              <a href={OLR_SALES_URL} target="_blank" rel="noopener noreferrer" className="hlm-listings-ext">
                Open full search in new tab
              </a>
            </div>
          </div>
          <BedfordStuyvesantListingsIdx />
        </div>
      </section>

      <BedfordStuyvesantRealtorArticle />

<section className="hlm-types" data-screen-label="Bedford-Stuyvesant property types">
        <div className="hlm-types-inner">
          <div className="hlm-types-grid">
            {PROPERTY_TYPES.map((item) => (
              <a key={item.href} data-reveal="" href={item.href} className="hlm-type-card">
                <div className="hlm-type-media">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>
                <div className="hlm-type-body">
                  <div className="hlm-type-title">{item.title}</div>
                  <p>{item.copy}</p>
                  <div className="hlm-type-explore">Learn More</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="market-report" className="hlm-market" data-screen-label="Market report">
        <div className="hlm-market-inner">
          <div data-reveal="">
            <h2>Want the full market report for Bedford-Stuyvesant?</h2>
            <p className="hlm-market-lead">
              We want to ensure that you have all the information needed to make the best decisions when it comes to
              your home goals. When you enter your info below you will get instant access to the area&apos;s latest
              market report, complete with sales and demographic trends.
            </p>
            {!marketEmail ? (
              <div className="hlm-market-social">
                <button type="button" className="hlm-market-social-btn">
                  Continue with Facebook
                </button>
                <button type="button" className="hlm-market-social-btn">
                  Continue with Google
                </button>
                <button type="button" className="hlm-market-email-link" onClick={() => setMarketEmail(true)}>
                  or click here to continue with your email address
                </button>
              </div>
            ) : (
              <div className="hlm-form">
                <button type="button" className="hlm-market-back" onClick={() => setMarketEmail(false)}>
                  ← Back
                </button>
                <div className="hlm-form-row">
                  <input type="text" placeholder="First Name *" className="hlm-field" required />
                  <input type="text" placeholder="Last Name *" className="hlm-field" required />
                </div>
                <input type="email" placeholder="Email *" className="hlm-field" required />
                <input type="text" placeholder="City" className="hlm-field" />
                <a href="https://calendly.com/montfort" className="hlm-form-submit">
                  Submit
                </a>
              </div>
            )}
          </div>
          <div className="hlm-market-card" data-reveal="">
            <img src="/redesign-assets/hoods/bedford-stuyvesant.webp" alt="Bedford-Stuyvesant" />
            <div className="hlm-market-card-copy">
              <div className="hlm-market-card-title">Bedford-Stuyvesant</div>
              <div className="hlm-market-card-sub">Market Report</div>
            </div>
          </div>
        </div>
      </section>

      
      <div id="advice">
        <ResourcesSection
          title="Local News & Advice"
          subtitle="Read helpful resources and articles related to the area."
          ctaLabel="View More Articles"
          moreLabel="Read More"
          showCategory={false}
          articles={BEDFORD_STUYVESANT_ARTICLES}
        />
      </div>
    </>
  );
}
