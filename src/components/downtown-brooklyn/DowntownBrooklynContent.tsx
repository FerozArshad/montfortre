import { useRef, useState } from "react";
import HarlemSchools from "../HarlemSchools";
import ResourcesSection from "../shared/ResourcesSection";
import DowntownBrooklynAreaNav from "./DowntownBrooklynAreaNav";
import DowntownBrooklynPoiMap from "./DowntownBrooklynPoiMap";
import DowntownBrooklynRealtorArticle from "./DowntownBrooklynRealtorArticle";
import { DOWNTOWN_BROOKLYN_YELP_CATS } from "../../data/downtownBrooklynGuide";
import DOWNTOWN_BROOKLYN_SCHOOLS from "../../data/downtownBrooklynSchools.json";
import DOWNTOWN_BROOKLYN_YELP from "../../data/downtownBrooklynYelp.json";
import "../../styles/harlem-page.css";
import "../../styles/downtown-brooklyn-page.css";

const PROPERTY_TYPES = [
  {
    href: "/downtown-brooklyn-condos-2/",
    image: "/redesign-assets/hoods/downtown-brooklyn-condos.png",
    alt: "Downtown Brooklyn Condos",
    title: "Downtown Brooklyn Condos",
    copy: "Modern high-rises, premium amenities, and convenient city living",
  },
  {
    href: "/downstone-brooklyn-co-ops/",
    image: "/redesign-assets/hoods/downtown-brooklyn-coops.png",
    alt: "Downtown Co-ops",
    title: "Downstone Brooklyn Co-Ops",
    copy: "Established communities, great value, and classic Brooklyn living",
  },
] as const;

type YelpCat = (typeof DOWNTOWN_BROOKLYN_YELP_CATS)[number]["id"];

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
      â˜…â˜…â˜…â˜…â˜…
      <span className="hlm-stars-fill" style={{ width }}>
        â˜…â˜…â˜…â˜…â˜…
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

function DowntownBrooklynListingsIdx() {
  const embed = window.location.hostname === "montfortre.com";

  if (!embed) {
    return (
      <div className="hlm-listings-idx">
        <div className="hlm-listings-fallback">
          <p>
            This box is the live OLR IDX sales search. OLR only allows it to embed on montfortre.com, so it stays blank
            on localhost and preview. Open the search to see Downtown Brooklyn listings now.
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
        title="Downtown Brooklyn homes for sale"
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

const DOWNTOWN_BROOKLYN_ARTICLES = [
  {
    href: "/upper-west-side-townhouse-q2-2024-market-report/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Upper West Side Townhouse Q2 2024 Market Report",
    title: "Upper West Side Townhouse Q2 2024 Market Report",
    excerpt: "On the Upper West Side, we observed a distinct trend that diverges from the citywide patterns. Specifically, theâ€¦",
  },
  {
    href: "/harlem-brownstone-q2-2024-market-report/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Harlem Brownstone Q2 2024 Market Report",
    title: "Harlem Brownstone Q2 2024 Market Report",
    excerpt: "The Harlem brownstone market has seen an increase in sales activity since this time last year. In Q2â€¦",
  },
  {
    href: "/discover-your-dream-home-explore-apartments-for-sale-on-the-upper-west-side/",
    image: "/redesign-assets/hoods/downtown-brooklyn.webp",
    alt: "Discover Your Dream Home: Explore Apartments for Sale on the â€¦",
    title: "Discover Your Dream Home: Explore Apartments for Sale on the â€¦",
    excerpt: "Are you searching for your dream home in one of New York Cityâ€™s most sought-after neighborhoods? Look noâ€¦",
  },
] as const;

export default function DowntownBrooklynContent() {
  const [areaCat, setAreaCat] = useState<YelpCat>("dine");
  const [marketEmail, setMarketEmail] = useState(false);
  const areaTrackRef = useRef<HTMLDivElement>(null);

  const areaPlaces = (DOWNTOWN_BROOKLYN_YELP[areaCat] ?? []) as AreaPlace[];

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
      <DowntownBrooklynPoiMap />
      <DowntownBrooklynAreaNav />

      <section id="featured-listings" className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <p>
              In the beautiful area of Downtown Brooklyn resides 20,854 people where 25% are homeowners. With an average
              age of 34, it&apos;s a fairly young and energetic area, with many of them starting new families. Over the
              past 30 days roughly 13 homes have been sold with an average sold price of 1,242,075. That is a decrease of
              $457,475 from the previous period.
            </p>
            <div className="hlm-listings-cta">
              <a href="/idx/listings/downtown-brooklyn/" className="hlm-listings-btn">
                View More Listings
              </a>
              <a href={OLR_SALES_URL} target="_blank" rel="noopener noreferrer" className="hlm-listings-ext">
                Open full search in new tab
              </a>
            </div>
          </div>
          <DowntownBrooklynListingsIdx />
        </div>
      </section>

      <DowntownBrooklynRealtorArticle />

      <section className="hlm-reviews" data-screen-label="Downtown Brooklyn reviews">
        <div className="hlm-reviews-inner">
          <iframe
            className="hlm-reviews-frame"
            title="Montfort Real Estate reviews"
            src="https://reputationhub.site/reputation/widgets/review_widget/J3cYmGK3p1ja7wTS63Dn"
            loading="lazy"
          />
        </div>
      </section>

      <section className="hlm-types" data-screen-label="Downtown Brooklyn property types">
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
            <h2>Want the full market report for Downtown Brooklyn?</h2>
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
                  â† Back
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
            <img src="/redesign-assets/hoods/downtown-brooklyn.webp" alt="Downtown Brooklyn" />
            <div className="hlm-market-card-copy">
              <div className="hlm-market-card-title">Downtown Brooklyn</div>
              <div className="hlm-market-card-sub">Market Report</div>
            </div>
          </div>
        </div>
      </section>

      <HarlemSchools schools={DOWNTOWN_BROOKLYN_SCHOOLS as School[]} nearLabel="Downtown Brooklyn" />

      <section id="the-area" className="hlm-area" data-screen-label="Around the area">
        <div className="hlm-area-inner">
          <div className="hlm-area-head" data-reveal="">
            <div className="hlm-area-head-copy">
              <h2>Around The Area</h2>
              <p>Browse through the top rated businesses that Downtown Brooklyn has to offer!</p>
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
            {DOWNTOWN_BROOKLYN_YELP_CATS.map((cat) => (
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
          title="Local News & Advice"
          subtitle="Read helpful resources and articles related to the area."
          ctaLabel="View More Articles"
          moreLabel="Read More"
          showCategory={false}
          articles={DOWNTOWN_BROOKLYN_ARTICLES}
        />
      </div>
    </>
  );
}

