import type { ReactNode } from "react";
import PromisesBar from "../shared/PromisesBar";
import ContactSection from "../shared/ContactSection";
import ResourcesSection from "../shared/ResourcesSection";
import useReputationAggregate from "../../hooks/useReputationAggregate";
import "../../styles/services-page.css";


const HERO_NEIGHBORHOODS = [
  { href: "/park-slope/", label: "Park Slope Realtor" },
  { href: "/bedford-stuyvesant/", label: "Bedford Stuyvesant Realtor" },
  { href: "/brooklyn-heights/", label: "Brooklyn Heights Realtor" },
  { href: "/dumbo/", label: "Dumbo Realtor" },
  { href: "/downtown-brooklyn/", label: "Downtown Brooklyn Realtor" },
  { href: "/chelsea/", label: "Chelsea Realtor" },
  { href: "/upper-east-side/", label: "Upper East Side Realtor" },
  { href: "/upper-west-side/", label: "Upper West Side Realtor" },
  { href: "/crown-heights/", label: "Crown Heights Realtor" },
  { href: "/williamsburg/", label: "Williamsburg Realtor" },
  { href: "/harlem/", label: "Harlem Realtor" },
] as const;

type CatalogCardData = {
  href: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  lazy?: boolean;
};

function CatalogCard({ href, image, alt, title, description, lazy }: CatalogCardData) {
  return (
    <div data-reveal="" className="svc-card">
      <div className="svc-card-media">
        <img src={image} alt={alt} {...(lazy ? { loading: "lazy" as const } : {})} />
      </div>
      <div className="svc-card-body">
        <a href={href} className="svc-card-title">
          {title}
        </a>
        <p>{description}</p>
        <a href={href} className="svc-card-more">
          Learn more <span className="svc-card-more-arrow">→</span>
        </a>
      </div>
    </div>
  );
}

function CatalogGroup({
  eyebrow,
  title,
  overviewHref,
  thumb,
  cards,
  columns = 4,
  first = false,
}: {
  eyebrow: string;
  title: string;
  overviewHref: string;
  thumb: ReactNode;
  cards: CatalogCardData[];
  columns?: 3 | 4;
  first?: boolean;
}) {
  return (
    <div data-reveal="" className={first ? "svc-catalog-group" : "svc-catalog-group svc-catalog-group--next"}>
      <div className="svc-catalog-head">
        <div className="svc-catalog-head-main">
          {thumb}
          <div>
            <div className="svc-catalog-eyebrow">{eyebrow}</div>
            <h2>{title}</h2>
          </div>
        </div>
        <a href={overviewHref} className="svc-catalog-overview">
          View overview →
        </a>
      </div>
      <div className={columns === 3 ? "svc-catalog-grid svc-catalog-grid--3" : "svc-catalog-grid"}>
        {cards.map((card) => (
          <CatalogCard key={card.href} {...card} />
        ))}
      </div>
    </div>
  );
}

function ThumbImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="svc-thumb">
      <img src={src} alt={alt} />
    </div>
  );
}

export default function ServicesContent() {
  const { ratingLabel, stars, totalReviews } = useReputationAggregate();
  return (
    <div>
      <section className="svc-hero" data-screen-label="Services hero">
        <div className="svc-hero-ring" />
        <div className="svc-hero-inner">
          <div data-reveal="">
            <div className="svc-hero-kicker">
              <span className="svc-hero-kicker-line" />
              <span className="svc-hero-kicker-label">Montfort Real Estate</span>
            </div>
            <h1>NYC Realtor Services</h1>
            <p className="svc-hero-lead">
              Whether you&apos;re <strong>buying</strong> or <strong>selling</strong>, our team helps you avoid costly mistakes, negotiate with confidence, and achieve the best possible outcome for your real estate goals.
            </p>
            <div className="svc-hero-ctas">
              <a href="https://calendly.com/montfort" className="svc-hero-book">
                Book Now
              </a>
              <a href="tel:646-970-1078" className="svc-hero-tel">
                (646) 970-1078
              </a>
            </div>
            <div className="svc-hero-hoods">
              <div className="svc-hero-hoods-label">Serving NYC&apos;s top neighborhoods</div>
              <div className="svc-hero-hoods-grid">
                {HERO_NEIGHBORHOODS.map((hood) => (
                  <a key={hood.href} href={hood.href} className="svc-hero-hood">
                    {hood.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div data-reveal="" className="svc-hero-media">
            <div className="svc-hero-frame">
              <img src="/redesign-assets/hoods/upper-west-side.webp" alt="NYC brownstone real estate" />
            </div>
            <div className="svc-hero-rating">
              <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" />
              <div className="svc-hero-rating-copy">
                <span className="svc-hero-rating-title">Google Rating</span>
                <div className="svc-hero-rating-row">
                  <span className="svc-hero-rating-score">{ratingLabel}</span>
                  <span className="svc-hero-rating-stars">{stars}</span>
                </div>
                <span className="svc-hero-rating-count">
                  Over <strong>{totalReviews} Reviews</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PromisesBar variant="light" screenLabel="Client promises" />

      <section className="svc-catalog" data-screen-label="Services">
        <div className="svc-catalog-inner">
          <div data-reveal="" className="svc-catalog-intro">
            <div className="svc-catalog-kicker">
              <span className="svc-catalog-kicker-line" />
              <span className="svc-catalog-kicker-label">What we offer</span>
            </div>
            <h2>Expertise across every NYC transaction</h2>
            <p>
              From buyer and listing representation to investment advisory and valuation, we help clients make confident real estate decisions throughout New York City. Browse our specialized services below or call <strong>1-646-970-1078</strong> to discuss your goals.
            </p>
          </div>
          <div className="svc-catalog-groups">
            <CatalogGroup
              first
              eyebrow="Buy"
              title={"NYC Buyer’s Agent"}
              overviewHref="/nyc-buyers-agent-service/"
              thumb={<ThumbImage src="/redesign-assets/services/buyers-agent.webp" alt="NYC Buyer’s Agent" />}
              cards={[
                {
                  href: "/buying-a-condo-in-nyc/",
                  image: "/redesign-assets/slots/svc-buying-a-condo-in-nyc.webp",
                  alt: "svc buying a condo in nyc",
                  title: "Buying a Condo in NYC",
                  description: "Expert guidance, market insights, and strategic representation for condo buyers.",
                },
                {
                  href: "/buying-a-brownstone-in-nyc/",
                  image: "/redesign-assets/slots/svc-buying-a-brownstone-in-nyc.webp",
                  alt: "svc buying a brownstone in nyc",
                  title: "Buying a Brownstone in NYC",
                  description: "Expert guidance for buying iconic NYC brownstones.",
                },
                {
                  href: "/buying-sro-in-nyc/",
                  image: "/redesign-assets/services/buying-sro-in-nyc.webp",
                  alt: "Buying an SRO in NYC",
                  title: "Buying an SRO in NYC",
                  description: "Affordable housing, investment value, and specialized NYC expertise.",
                  lazy: true,
                },
                {
                  href: "/co-ownership-buying-in-nyc/",
                  image: "/redesign-assets/slots/svc-co-ownership-buying-in-nyc.webp",
                  alt: "svc co ownership buying in nyc",
                  title: "Co-Ownership Buying in NYC",
                  description: "Shared ownership, lower costs, and greater buying power.",
                },
              ]}
            />
            <CatalogGroup
              eyebrow="Sell"
              title="NYC Listing Agent"
              overviewHref="/nyc-listing-agent-service/"
              thumb={<ThumbImage src="/redesign-assets/services/listing-agent.webp" alt="NYC Listing Agent" />}
              cards={[
                {
                  href: "/selling-brownstones-in-nyc/",
                  image: "/redesign-assets/slots/svc-selling-brownstones-in-nyc.webp",
                  alt: "svc selling brownstones in nyc",
                  title: "Selling Brownstones in NYC",
                  description: "Historic value, expert marketing, and premium buyer demand.",
                },
                {
                  href: "/selling-condos-in-nyc/",
                  image: "/redesign-assets/slots/svc-selling-condos-in-nyc.webp",
                  alt: "svc selling condos in nyc",
                  title: "Selling Condos in NYC",
                  description: "Strategic pricing, qualified buyers, and maximum market exposure.",
                },
                {
                  href: "/selling-co-ops-in-nyc/",
                  image: "/redesign-assets/slots/svc-selling-co-ops-in-nyc.webp",
                  alt: "svc selling co ops in nyc",
                  title: "Selling Co-ops in NYC",
                  description: "Board expertise, targeted marketing, and seamless transactions.",
                },
                {
                  href: "/selling-sros-in-nyc/",
                  image: "/redesign-assets/services/selling-sros-in-nyc.webp",
                  alt: "Selling SROs in NYC",
                  title: "Selling SROs in NYC",
                  description: "Regulatory expertise, investor connections, and maximum property value.",
                  lazy: true,
                },
                {
                  href: "/selling-probate-properties-in-nyc/",
                  image: "/redesign-assets/slots/svc-selling-probate-properties-in-nyc.webp",
                  alt: "svc selling probate properties in nyc",
                  title: "Selling Probate Properties in NYC",
                  description: "Compassionate guidance, legal coordination, and stress-free sales.",
                },
              ]}
            />
            <CatalogGroup
              eyebrow="Invest"
              title="NYC Multifamily Real Estate Agent"
              overviewHref="/nyc-multifamily-real-estate-agent-service/"
              thumb={<ThumbImage src="/redesign-assets/services/multifamily.webp" alt="NYC Multifamily Real Estate Agent" />}
              cards={[
                {
                  href: "/2-family-house-for-sale-nyc/",
                  image: "/redesign-assets/services/2-family-house-for-sale-nyc.webp",
                  alt: "2-Family House for Sale NYC",
                  title: "2-Family House for Sale NYC",
                  description: "Rental income potential, flexible living, and smart investing.",
                  lazy: true,
                },
                {
                  href: "/3-family-house-for-sale-nyc/",
                  image: "/redesign-assets/services/3-family-house-for-sale-nyc.webp",
                  alt: "3-Family House for Sale NYC",
                  title: "3-Family House for Sale NYC",
                  description: "Multiple income streams, long-term growth, and NYC opportunity.",
                  lazy: true,
                },
                {
                  href: "/4-family-house-for-sale-nyc/",
                  image: "/redesign-assets/services/4-family-house-for-sale-nyc.webp",
                  alt: "4-Family House for Sale NYC",
                  title: "4-Family House for Sale NYC",
                  description: "Maximum cash flow, strong returns, and multifamily ownership.",
                  lazy: true,
                },
              ]}
            />
            <CatalogGroup
              eyebrow="Value"
              title="NYC Free Home Valuation"
              overviewHref="/home-valuation/"
              thumb={<ThumbImage src="/redesign-assets/services/home-valuation.webp" alt="NYC Free Home Valuation" />}
              cards={[
                {
                  href: "/nyc-condo-free-home-valuation/",
                  image: "/redesign-assets/services/nyc-condo-free-home-valuation.webp",
                  alt: "NYC Condo Free Home Valuation",
                  title: "NYC Condo Free Home Valuation",
                  description: "Accurate pricing insights, market expertise, and condo valuation guidance.",
                  lazy: true,
                },
                {
                  href: "/nyc-co-op-free-home-valuation/",
                  image: "/redesign-assets/slots/svc-nyc-co-op-free-home-valuation.webp",
                  alt: "svc nyc co op free home valuation",
                  title: "NYC Co-op Free Home Valuation",
                  description: "Board-aware pricing, market insights, and co-op valuation expertise.",
                },
                {
                  href: "/nyc-brownstone-free-home-valuation/",
                  image: "/redesign-assets/services/nyc-brownstone-free-home-valuation.webp",
                  alt: "NYC Brownstone Free Home Valuation",
                  title: "NYC Brownstone Free Home Valuation",
                  description: "Historic property expertise, market analysis, and accurate valuation.",
                  lazy: true,
                },
                {
                  href: "/nyc-sro-free-home-valuation/",
                  image: "/redesign-assets/services/nyc-sro-free-home-valuation.webp",
                  alt: "NYC SRO Free Home Valuation",
                  title: "NYC SRO Free Home Valuation",
                  description: "Regulatory expertise, investment analysis, and accurate property valuation.",
                  lazy: true,
                },
              ]}
            />
            <CatalogGroup
              eyebrow="Finance"
              title="NYC Mortgage Calculator"
              overviewHref="/mortgage-calculator/"
              thumb={<ThumbImage src="/redesign-assets/services/mortgage.webp" alt="NYC Mortgage Calculator" />}
              cards={[
                {
                  href: "/nyc-brownstone-mortgages/",
                  image: "/redesign-assets/slots/svc-nyc-brownstone-mortgages.webp",
                  alt: "svc nyc brownstone mortgages",
                  title: "NYC Brownstone Mortgages",
                  description: "Historic property financing, flexible loan options, and expert support.",
                },
                {
                  href: "/nyc-sro-mortgages/",
                  image: "/redesign-assets/services/nyc-sro-mortgages.webp",
                  alt: "NYC SRO Mortgages",
                  title: "NYC SRO Mortgages",
                  description: "Specialized financing, investment opportunities, and expert guidance.",
                  lazy: true,
                },
                {
                  href: "/nyc-first-time-home-buyer-mortages/",
                  image: "/redesign-assets/services/nyc-first-time-home-buyer-mortages.webp",
                  alt: "NYC First-Time Home Buyer Mortgages",
                  title: "NYC First-Time Home Buyer Mortgages",
                  description: "Flexible financing, lower down payments, and homeownership opportunities.",
                  lazy: true,
                },
              ]}
            />
            <CatalogGroup
              eyebrow="Finance"
              title="NYC Brownstone Calculators"
              overviewHref="https://montfortre.com/calculators/"
              columns={3}
              thumb={
                <div className="svc-thumb svc-thumb--calc">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#F0D9A8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="8" y1="10" x2="9" y2="10" />
                    <line x1="12" y1="10" x2="13" y2="10" />
                    <line x1="16" y1="10" x2="16" y2="10" />
                    <line x1="8" y1="14" x2="9" y2="14" />
                    <line x1="12" y1="14" x2="13" y2="14" />
                    <line x1="16" y1="14" x2="16" y2="18" />
                    <line x1="8" y1="18" x2="9" y2="18" />
                    <line x1="12" y1="18" x2="13" y2="18" />
                  </svg>
                </div>
              }
              cards={[
                {
                  href: "https://montfortre.com/nyc-brownstone-buyer-closing-cost-calculator/",
                  image: "/redesign-assets/services/mortgage.webp",
                  alt: "NYC Brownstone Buyer Closing Cost Calculator",
                  title: "NYC Brownstone Buyer Closing Cost Calculator",
                  description: "Estimate your total closing costs as a buyer, from taxes to attorney fees.",
                  lazy: true,
                },
                {
                  href: "https://montfortre.com/nyc-rent-vs-buy-brownstone-calculator/",
                  image: "/redesign-assets/services/buyers-agent.webp",
                  alt: "NYC Rent vs Buy Brownstone Calculator",
                  title: "NYC Rent vs Buy Brownstone Calculator",
                  description: "Compare the long-term cost of renting versus owning a Brownstone.",
                  lazy: true,
                },
                {
                  href: "https://montfortre.com/nyc-brownstone-seller-closing-cost-calculator/",
                  image: "/redesign-assets/services/home-valuation.webp",
                  alt: "NYC Brownstone Seller Closing Cost Calculator",
                  title: "NYC Brownstone Seller Closing Cost Calculator",
                  description: "Project your net proceeds after commissions, transfer taxes, and fees.",
                  lazy: true,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <ResourcesSection />
      <ContactSection />
    </div>
  );
}
