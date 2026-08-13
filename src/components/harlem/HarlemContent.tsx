import { useRef, useState } from "react";
import HarlemSchools from "../HarlemSchools";
import ContactSection from "../shared/ContactSection";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/harlem-page.css";

const PROPERTY_TYPES = [
  {
    href: "/featured-brownstones-for-sale/harlem-brownstones/",
    image: "/redesign-assets/hoods/harlem-brownstones.webp",
    alt: "Harlem Brownstones",
    title: "Harlem Brownstones",
    copy: "Historic architecture, timeless charm, and classic Harlem living.",
  },
  {
    href: "/buying-a-condo-in-nyc/",
    image: "/redesign-assets/hoods/harlem-condos.webp",
    alt: "Harlem Condos",
    title: "Harlem Condos",
    copy: "Modern amenities, urban convenience, and vibrant Harlem living.",
  },
  {
    href: "/buying-sro-in-nyc/",
    image: "/redesign-assets/hoods/harlem-sros.webp",
    alt: "Harlem SROs",
    title: "Harlem SROs",
    copy: "Affordable housing, investment potential, and unique opportunities.",
  },
  {
    href: "/co-ownership-buying-in-nyc/",
    image: "/redesign-assets/hoods/harlem-coownership.webp",
    alt: "Harlem Co-Ownership",
    title: "Harlem Co-Ownership",
    copy: "Shared ownership, lower costs, and greater buying power.",
  },
] as const;

const STATS = [
  { value: "338,411", label: "Residents" },
  { value: "18%", label: "Homeowners" },
  { value: "39", label: "Average age" },
  { value: "$659K", label: "Avg. sold price · 30 days" },
] as const;

const EXPLORE_LINKS = ["Featured listings", "Market report", "Around the area", "Local advice"] as const;

type AreaPlace = {
  href: string;
  name: string;
  reviews: string;
  starWidth: string;
  image?: string;
};

const SHOP_PLACES: AreaPlace[] = [
  { href: "https://www.yelp.com/biz/tj-maxx-columbus-village", name: "TJ Maxx", reviews: "78 reviews", starWidth: "60.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/mkNZJbYk0NkpVlJztaob4Q/l.jpg" },
  { href: "https://www.yelp.com/biz/ridge-hill-yonkers", name: "Ridge Hill", reviews: "224 reviews", starWidth: "50.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/nfTVuNBiQcK6y51LjpkjHQ/l.jpg" },
  { href: "https://www.yelp.com/biz/unique-boutique-third-avenue-new-york", name: "Unique Boutique Third Avenue", reviews: "44 reviews", starWidth: "90.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/TWcqcVMgkWermK6tTvGyBQ/l.jpg" },
  { href: "https://www.yelp.com/biz/the-westchester-white-plains", name: "The Westchester", reviews: "192 reviews", starWidth: "70.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/J6okgYAWaGyqQX2Am813eQ/l.jpg" },
  { href: "https://www.yelp.com/biz/chelsea-flea-market-new-york-2", name: "Chelsea Flea Market", reviews: "55 reviews", starWidth: "60.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/F784pclJAsG96PxQoDgs9Q/l.jpg" },
  { href: "https://www.yelp.com/biz/homegoods-new-york-2", name: "HomeGoods", reviews: "111 reviews", starWidth: "70.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/XzK9nvaCUoiGGKW0BIKrgg/l.jpg" },
  { href: "https://www.yelp.com/biz/pinstripe-collectible-bronx", name: "Pinstripe Collectible", reviews: "4 reviews", starWidth: "100.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/DRO77kIGK-x47UxqyFDIkQ/l.jpg" },
  { href: "https://www.yelp.com/biz/city-place-edgewater", name: "City Place", reviews: "10 reviews", starWidth: "80.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/YjzB1-Ph-dcSdGCtRD4siQ/l.jpg" },
  { href: "https://www.yelp.com/biz/eglance-bookstore-flushing", name: "Eglance Bookstore", reviews: "10 reviews", starWidth: "90.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/DBkjvkItdfi84gObNnatxg/l.jpg" },
  { href: "https://www.yelp.com/biz/pier-village-long-branch", name: "Pier Village", reviews: "82 reviews", starWidth: "60.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/E5cGGCi9mmmVVChTT8ggGw/l.jpg" },
];

const DINE_PLACES: AreaPlace[] = [
  { href: "https://www.yelp.com/biz/greedy-pot-new-york", name: "Greedy Pot", reviews: "79 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/indomable-coffee-new-york-2", name: "Indomable Coffee", reviews: "40 reviews", starWidth: "100.0%" },
  { href: "https://www.yelp.com/biz/lechonera-la-isla-new-york-2", name: "Lechonera La Isla", reviews: "125 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/harlemite-peruvian-cuisine-new-york-2", name: "Harlemite Peruvian Cuisine", reviews: "161 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/piccola-cucina-uptown-new-york", name: "Piccola Cucina Uptown", reviews: "628 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/maisonetta-bronx", name: "Maisonetta", reviews: "111 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/cocotazo-new-york", name: "Cocotazo", reviews: "92 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/el-patio-de-fela-new-york", name: "El Patio de Fela", reviews: "17 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/nobody-told-me-new-york", name: "Nobody Told Me", reviews: "311 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/the-eighty-six-new-york", name: "The Eighty Six", reviews: "24 reviews", starWidth: "100.0%" },
];

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UtensilIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v4M9.5 3v4M4.5 3v4a2 2 0 0 0 2 2M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarRating({ width }: { width: string }) {
  return (
    <span className="hlm-stars">
      ★★★★★
      <span className="hlm-stars-fill" style={{ width }}>★★★★★</span>
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

function AreaCard({ place, variant }: { place: AreaPlace; variant: "shop" | "dine" }) {
  return (
    <div className="hlm-area-card">
      <a
        href={place.href}
        target="_blank"
        rel="noopener nofollow"
        className={`hlm-area-media hlm-area-media--${variant}`}
      >
        {place.image ? (
          <>
            <img src={place.image} alt={place.name} loading="lazy" />
            <div className="hlm-area-shade" />
            <div className="hlm-area-caption">
              <div className="hlm-area-name hlm-area-name--shop">{place.name}</div>
              <div className="hlm-area-meta">
                <StarRating width={place.starWidth} />
                <span className="hlm-area-reviews">{place.reviews}</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="hlm-area-utensil">
              <UtensilIcon />
            </div>
            <div className="hlm-area-caption hlm-area-caption--dine">
              <div className="hlm-area-name hlm-area-name--dine">{place.name}</div>
              <div className="hlm-area-meta hlm-area-meta--dine">
                <StarRating width={place.starWidth} />
                <span className="hlm-area-reviews">{place.reviews}</span>
              </div>
            </div>
          </>
        )}
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

export default function HarlemContent() {
  const [areaCat, setAreaCat] = useState<"shop" | "dine">("shop");
  const shopTrackRef = useRef<HTMLDivElement>(null);
  const dineTrackRef = useRef<HTMLDivElement>(null);

  const scrollArea = (dir: -1 | 1) => {
    const track = areaCat === "shop" ? shopTrackRef.current : dineTrackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.getBoundingClientRect().width + 22 : 322;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <>
      <section className="hlm-hero" data-screen-label="Harlem hero">
        <div className="hlm-hero-ring" />
        <div className="hlm-hero-inner">
          <div data-reveal="">
            <div className="hlm-crumb">
              <a href="/neighborhoods/" className="hlm-crumb-link">Neighborhoods</a> <span className="hlm-crumb-sep">/</span> <span className="hlm-crumb-here">Manhattan</span>
            </div>
            <h1>Harlem Realtor</h1>
            <p className="hlm-hero-lead">
              One of New York City&apos;s most vibrant, historically rich neighborhoods, where classic brownstones, pre-war buildings, and new developments meet a world-famous arts and culture scene.
            </p>
            <div className="hlm-hero-ctas">
              <a href="https://calendly.com/montfort" className="hlm-hero-book">
                Book Now
              </a>
              <a href="tel:646-970-1078" className="hlm-hero-tel">
                (646) 970-1078
              </a>
            </div>
            <div className="hlm-hero-explore">
              <div className="hlm-hero-explore-label">Explore Harlem</div>
              <div className="hlm-hero-explore-links">
                {EXPLORE_LINKS.map((label) => (
                  <a key={label} href="/harlem/" className="hlm-hero-explore-link">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hlm-hero-media" data-reveal="">
            <div className="hlm-hero-frame">
              <img src="/redesign-assets/hoods/harlem.webp" alt="Harlem brownstones" />
            </div>
            <div className="hlm-hero-rating">
              <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" />
              <div className="hlm-hero-rating-copy">
                <span className="hlm-hero-rating-title">Google Rating</span>
                <div className="hlm-hero-rating-row">
                  <span className="hlm-hero-rating-score">5.0</span>
                  <span className="hlm-hero-rating-stars">★★★★★</span>
                </div>
                <span className="hlm-hero-rating-count">
                  Over <strong>57 Reviews</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hlm-stats" data-screen-label="Harlem stats">
        <div className="hlm-stats-inner">
          {STATS.map((stat) => (
            <div key={stat.label} className="hlm-stat" data-reveal="">
              <div className="hlm-stat-value">{stat.value}</div>
              <div className="hlm-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="hlm-about" data-screen-label="About Harlem">
        <div className="hlm-about-inner">
          <div data-reveal="">
            <div className="hlm-kicker">
              <span className="hlm-kicker-line" />
              <span className="hlm-kicker-label">The neighborhood</span>
            </div>
            <h2>Living in Harlem</h2>
            <p>
              Located in Upper Manhattan and known for its deep cultural roots and iconic role in the Harlem Renaissance, the area blends historic charm with modern energy. Tree-lined streets are filled with classic brownstones, pre-war buildings, and a growing number of new developments.
            </p>
            <p>
              Home to world-renowned landmarks such as the Apollo Theater and Studio Museum, Harlem features an excellent selection of restaurants, cafes, and local shops. Residents enjoy convenient access to Central Park, Marcus Garvey Park, and multiple subway lines, a unique blend of tradition and opportunity.
            </p>
          </div>
          <div className="hlm-about-photo" data-reveal="">
            <img src="/redesign-assets/hoods/harlem.webp" alt="Harlem street" />
          </div>
        </div>
      </section>

      <section className="hlm-types" data-screen-label="Harlem property types">
        <div className="hlm-types-inner">
          <div className="hlm-types-head" data-reveal="">
            <div className="hlm-section-kicker">What we help you buy</div>
            <h2>Harlem property types</h2>
            <span className="hlm-rule" />
          </div>
          <div className="hlm-types-grid">
            {PROPERTY_TYPES.map((item) => (
              <a key={item.href} data-reveal="" href={item.href} className="hlm-type-card">
                <div className="hlm-type-media">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </div>
                <div className="hlm-type-body">
                  <div className="hlm-type-title">{item.title}</div>
                  <p>{item.copy}</p>
                  <div className="hlm-type-explore">
                    Explore <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="hlm-listings" data-screen-label="Featured listings">
        <div className="hlm-listings-inner">
          <div data-reveal="">
            <div className="hlm-section-kicker">On the market</div>
            <h2>Featured Harlem listings</h2>
            <p>
              In the beautiful area of Harlem reside <strong>338,411 people</strong>, where 18% are homeowners. With an average age of 39, residents are well established, with many growing families. Over the past 30 days roughly <strong>17 homes</strong> have sold at an average price of <strong>$659,263</strong>, down $49,637 from the previous period.
            </p>
            <div className="hlm-listings-cta">
              <a href="/idx/listings/harlem/" className="hlm-listings-btn">
                View Harlem listings
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="hlm-market" data-screen-label="Market report">
        <div className="hlm-market-inner">
          <div data-reveal="">
            <div className="hlm-market-kicker">Harlem market report</div>
            <h2>Want the full market report for Harlem?</h2>
            <p className="hlm-market-lead">
              Enter your info below for instant access to the area&apos;s latest market report, complete with sales and demographic trends, so you have everything you need to make the best decisions for your home goals.
            </p>
            <div className="hlm-form">
              <div className="hlm-form-row">
                <input type="text" placeholder="First name" className="hlm-field" />
                <input type="text" placeholder="Last name" className="hlm-field" />
              </div>
              <input type="email" placeholder="Email address" className="hlm-field" />
              <input type="text" placeholder="City" className="hlm-field" />
              <a href="https://calendly.com/montfort" className="hlm-form-submit">
                Submit
              </a>
            </div>
          </div>
          <div className="hlm-market-card" data-reveal="">
            <img src="/redesign-assets/hoods/harlem.webp" alt="Harlem market" />
            <div className="hlm-market-card-copy">
              <div className="hlm-market-card-title">Harlem</div>
              <div className="hlm-market-card-sub">Market Report</div>
            </div>
          </div>
        </div>
      </section>

      <HarlemSchools />

      <section className="hlm-area" data-screen-label="Around the area">
        <div className="hlm-area-inner">
          <div className="hlm-area-head" data-reveal="">
            <div className="hlm-area-head-copy">
              <div className="hlm-section-kicker">Around the area</div>
              <h2>Top-rated spots in &amp; near Harlem</h2>
              <p>Browse the top-rated businesses Harlem has to offer, pulled from Yelp.</p>
            </div>
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
          </div>
          <div className="hlm-area-chips">
            <button
              type="button"
              className={`area-chip${areaCat === "dine" ? " is-active" : ""}`}
              data-cat="dine"
              onClick={() => setAreaCat("dine")}
            >
              Dine
            </button>
            <button
              type="button"
              className={`area-chip${areaCat === "shop" ? " is-active" : ""}`}
              data-cat="shop"
              onClick={() => setAreaCat("shop")}
            >
              Shop
            </button>
          </div>
          <div id="area-track-shop" ref={shopTrackRef} className="area-track no-sb" hidden={areaCat !== "shop"}>
            {SHOP_PLACES.map((place) => (
              <AreaCard key={place.href} place={place} variant="shop" />
            ))}
          </div>
          <div id="area-track-dine" ref={dineTrackRef} className="area-track no-sb" hidden={areaCat !== "dine"}>
            {DINE_PLACES.map((place) => (
              <AreaCard key={place.href} place={place} variant="dine" />
            ))}
          </div>
        </div>
      </section>

      <ResourcesSection />
      <ContactSection />
    </>
  );
}
