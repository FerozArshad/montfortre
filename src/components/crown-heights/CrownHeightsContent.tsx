import { useRef, useState } from "react";
import PromisesBar from "../shared/PromisesBar";
import HarlemSchools from "../HarlemSchools";
import ResourcesSection from "../shared/ResourcesSection";
import CrownHeightsAreaNav from "./CrownHeightsAreaNav";
import CrownHeightsPoiMap from "./CrownHeightsPoiMap";
import CrownHeightsRealtorArticle from "./CrownHeightsRealtorArticle";
import { CROWN_HEIGHTS_YELP_CATS } from "../../data/crownHeightsGuide";
import CROWN_HEIGHTS_SCHOOLS from "../../data/crownHeightsSchools.json";
import CROWN_HEIGHTS_YELP from "../../data/crownHeightsYelp.json";
import "../../styles/harlem-page.css";
import "../../styles/crown-heights-page.css";

const PROPERTY_TYPES = [
  {
    href: "/crown-heights-brownstones-2/",
    image: "/redesign-assets/hoods/crown-heights-brownstones.png",
    alt: "Crown Heights Brownstones",
    title: "Crown Heights Brownstones",
    copy: "Historic brownstones, cultural richness, and timeless Brooklyn charm",
  },
  {
    href: "/crown-heights-condos-2/",
    image: "/redesign-assets/hoods/crown-heights-condos.png",
    alt: "Crown Heights Condos",
    title: "Crown Heights Condos",
    copy: "Modern residences, vibrant amenities, and convenient city living",
  },
  {
    href: "/crown-heights-co-ops-2/",
    image: "/redesign-assets/hoods/crown-heights-coops.png",
    alt: "Crown Heights Co-Ops",
    title: "Crown Heights Co-Ops",
    copy: "Strong communities, great value, and classic Brooklyn living",
  },
  {
    href: "/crown-heights-sros-3/",
    image: "/redesign-assets/hoods/crown-heights-sros.png",
    alt: "Crown Heights SROs",
    title: "Crown Heights SROs",
    copy: "Affordable housing, investment potential, and unique opportunities",
  },
  {
    href: "/crown-heights-co-ownership-2/",
    image: "/redesign-assets/hoods/crown-heights-coownership.png",
    alt: "Crown Heights Co-Ownership",
    title: "Crown Heights Co-Ownership",
    copy: "Shared ownership, lower costs, and greater buying power",
  },
] as const;

type YelpCat = (typeof CROWN_HEIGHTS_YELP_CATS)[number]["id"];

type AreaPlace = {
  href: string;
  name: string;
  reviews: string;
  rating: number;
  image?: string;
};

type School = {
  name: string;
  phone: string;
  type: string;
  grades: string;
  rating: number | null;
  website: string | null;
  categories: string[];
};

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  const width = `${Math.max(0, Math.min(100, (rating / 5) * 100))}%`;
  return (
    <span className="hlm-stars">
      ★★★★★
      <span className="hlm-stars-fill" style={{ width }}>
        ★★★★★
      </span>
    </span>
  );
}

async function sharePlace(url: string, name: string) {
  try {
    if (navigator.share) {
      await navigator.share({ title: name, url });
      return;
    }
  } catch {
    return;
  }
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

function AreaCard({ place }: { place: AreaPlace }) {
  return (
    <div className="hlm-area-card">
      <a href={place.href} target="_blank" rel="noopener nofollow" className="hlm-area-media">
        {place.image ? <img src={place.image} alt={place.name} loading="lazy" /> : null}
        <div className="hlm-area-shade" />
        <div className="hlm-area-caption">
          <div className="hlm-area-name">{place.name}</div>
          <div className="hlm-area-meta">
            <StarRating rating={place.rating} />
            <span className="hlm-area-reviews">{place.reviews}</span>
          </div>
        </div>
      </a>
      <button
        type="button"
        className="area-share"
        data-url={place.href}
        data-name={place.name}
        onClick={() => void sharePlace(place.href, place.name)}
      >
        <ShareIcon />
        Share
      </button>
    </div>
  );
}

const OLR_SALES_URL = "https://stanley.olridx.com/Search/Sales";

function CrownHeightsListingsIdx() {
  const embed = window.location.hostname === "montfortre.com";

  if (!embed) {
    return (
      <div className="hlm-listings-idx">
        <div className="hlm-listings-fallback">
          <p>
            This box is the live OLR IDX sales search. OLR only allows it to embed on montfortre.com, so it stays blank
            on localhost and preview. Open the search to see Crown Heights listings now.
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
        title="Crown Heights homes for sale"
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

const CROWN_HEIGHTS_ARTICLES = [
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

export default function CrownHeightsContent() {
  const [areaCat, setAreaCat] = useState<YelpCat>("dine");
  const [marketEmail, setMarketEmail] = useState(false);
  const areaTrackRef = useRef<HTMLDivElement>(null);

  const areaPlaces = (CROWN_HEIGHTS_YELP[areaCat] ?? []) as AreaPlace[];

  const scrollArea = (dir: -1 | 1) => {
    const track = areaTrackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.getBoundingClientRect().width + 22 : 322;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const selectAreaCat = (id: YelpCat) => {
    setAreaCat(id);
    areaTrackRef.current?.scrollTo({ left: 0 });
  };

  return (
    <>
      <CrownHeightsPoiMap />
      <CrownHeightsAreaNav />

      <PromisesBar variant="nbhd" />
      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Crown Heights resides 139,974 people where 17% are homeowners. With an average age
              of 35, it’s a fairly young and energetic area, with many of them starting new families. Over the past 30
              days roughly 10 homes have been sold with an average sold price of 1,385,341. That is a decrease of
              $306,206 from the previous period.
            </p>
            <div className="hlm-listings-cta">
              <a href="/idx/listings/crown-heights/" className="hlm-listings-btn">
                View More Listings
              </a>
              <a href={OLR_SALES_URL} target="_blank" rel="noopener noreferrer" className="hlm-listings-ext">
                Open full search in new tab
              </a>
            </div>
          </div>
          <CrownHeightsListingsIdx />
        </div>
      </section>

      <CrownHeightsRealtorArticle />

<section className="hlm-types" data-screen-label="Crown Heights property types">
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
            <h2>Want the full market report for Crown Heights?</h2>
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
            <img src="/redesign-assets/hoods/crown-heights.webp" alt="Crown Heights" />
            <div className="hlm-market-card-copy">
              <div className="hlm-market-card-title">Crown Heights</div>
              <div className="hlm-market-card-sub">Market Report</div>
            </div>
          </div>
        </div>
      </section>

      <HarlemSchools schools={CROWN_HEIGHTS_SCHOOLS as School[]} nearLabel="Crown Heights" />

      <section id="the-area" className="hlm-area" data-screen-label="Around the area">
        <div className="hlm-area-inner">
          <div className="hlm-area-head" data-reveal="">
            <div className="hlm-area-head-copy">
              <h2>Around The Area</h2>
              <p>Browse through the top rated businesses that Crown Heights has to offer!</p>
            </div>
            {areaPlaces.length ? (
              <div className="hlm-area-nav">
                <button id="area-prev" className="hlm-area-arrow" type="button" aria-label="Previous" onClick={() => scrollArea(-1)}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button id="area-next" className="hlm-area-arrow" type="button" aria-label="Next" onClick={() => scrollArea(1)}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            ) : null}
          </div>
          <div className="hlm-area-chips">
            {CROWN_HEIGHTS_YELP_CATS.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`area-chip${areaCat === cat.id ? " is-active" : ""}`}
                data-cat={cat.id}
                onClick={() => selectAreaCat(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div id="area-track" ref={areaTrackRef} className="area-track no-sb">
            {areaPlaces.map((place) => (
              <AreaCard key={`${areaCat}-${place.href}`} place={place} />
            ))}
          </div>
        </div>
      </section>

      <div id="advice">
        <ResourcesSection
          title="Recent News & Realtor Advice"
          subtitle="Stay in the loop on the latest events, news, & happenings in and around our community!"
          ctaLabel="Read More"
          moreLabel="Read More"
          showCategory={false}
          articles={CROWN_HEIGHTS_ARTICLES}
        />
      </div>
    </>
  );
}
