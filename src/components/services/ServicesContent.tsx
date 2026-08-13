import type { CSSProperties, ReactNode } from "react";
import ContactSection from "../shared/ContactSection";
import ResourcesSection from "../shared/ResourcesSection";

const CHECK_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 12.5l3.5 3.5L18 7.5" stroke="#0F1729" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CARD_HOVER = "transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C";

const CARD_STYLE = {
  display: "flex",
  flexDirection: "column",
  background: "#F9F6E6",
  border: "1px solid #E0D9B8",
  borderRadius: 16,
  overflow: "hidden",
  transition: "transform .4s ease, box-shadow .4s ease, border-color .4s ease",
} as const;

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
    <div data-reveal="" style={CARD_STYLE} {...{ "style-hover": CARD_HOVER }}>
      <div style={{ aspectRatio: "16/10", overflow: "hidden", background: "#E0D9B8" }}>
        <img src={image} alt={alt} {...(lazy ? { loading: "lazy" as const } : {})} style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "24px 26px 26px" }}>
        <a
          href={href}
          style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 20, lineHeight: 1.3, color: "#0F1729", textWrap: "pretty" }}
          {...{ "style-hover": "color:#C98A2C" }}
        >
          {title}
        </a>
        <p style={{ fontSize: 15, lineHeight: 1.7, color: "#3B4C5E", margin: "12px 0 0", flex: "1 1 auto", textWrap: "pretty" }}>{description}</p>
        <a
          href={href}
          style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 22, fontSize: 11.5, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#113B5F" }}
          {...{ "style-hover": "color:#C98A2C" }}
        >
          Learn more <span style={{ color: "#C98A2C" }}>→</span>
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
  const wrapStyle: CSSProperties | undefined = first
    ? undefined
    : { marginTop: 72, paddingTop: 60, borderTop: "1px solid #E0D9B8" };

  return (
    <div data-reveal="" style={wrapStyle}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {thumb}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C98A2C" }}>{eyebrow}</div>
            <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 34, lineHeight: 1.16, letterSpacing: "-0.01em", color: "#0F1729", margin: "10px 0 0", textWrap: "pretty" }}>
              {title}
            </h2>
          </div>
        </div>
        <a
          href={overviewHref}
          style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#113B5F", whiteSpace: "nowrap", borderBottom: "2px solid #C98A2C", paddingBottom: 5 }}
          {...{ "style-hover": "border-bottom-color:#0F1729" }}
        >
          View overview →
        </a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`, gap: 22, marginTop: 34 }}>
        {cards.map((card) => (
          <CatalogCard key={card.href} {...card} />
        ))}
      </div>
    </div>
  );
}

function ThumbImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ flex: "0 0 auto", width: 96, height: 96, borderRadius: 16, overflow: "hidden", border: "1px solid #E0D9B8", boxShadow: "0 16px 34px rgba(17,59,95,0.12)" }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    </div>
  );
}

export default function ServicesContent() {
  return (
    <div>
      <section data-screen-label="Services hero" style={{ position: "relative", background: "#F5EECB", borderBottom: "1px solid #E0D9B8", overflow: "hidden", padding: "88px 64px 96px" }}>
        <div style={{ position: "absolute", top: -150, right: -160, width: 560, height: 560, borderRadius: "50%", border: "1px solid rgba(201,138,44,0.2)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1.02fr 0.98fr", gap: 72, alignItems: "center" }}>
          <div data-reveal="">
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 34, height: 1, background: "#C98A2C", display: "block" }} />
              <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>Montfort Real Estate</span>
            </div>
            <h1 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 62, lineHeight: 1.06, letterSpacing: "-0.02em", color: "#0F1729", margin: "20px 0 0", textWrap: "pretty" }}>
              NYC Realtor Services
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#3B4C5E", margin: "22px 0 0", maxWidth: 560, textWrap: "pretty" }}>
              Whether you&apos;re <strong style={{ fontWeight: 700, color: "#0F1729" }}>buying</strong> or <strong style={{ fontWeight: 700, color: "#0F1729" }}>selling</strong>, our team helps you avoid costly mistakes, negotiate with confidence, and achieve the best possible outcome for your real estate goals.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
              <a
                href="https://calendly.com/montfort"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#113B5F", color: "#F9F6E6", fontSize: 15, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: 100, padding: "18px 34px", minHeight: 56 }}
                {...{ "style-hover": "background:#C98A2C; color:#0F1729" }}
              >
                Book Now
              </a>
              <a
                href="tel:646-970-1078"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "2px solid #113B5F", color: "#113B5F", fontSize: 15, fontWeight: 800, letterSpacing: "0.03em", borderRadius: 100, padding: "16px 30px", minHeight: 56 }}
                {...{ "style-hover": "background:#113B5F; color:#F9F6E6" }}
              >
                (646) 970-1078
              </a>
            </div>
            <div style={{ marginTop: 38, paddingTop: 26, borderTop: "1px solid #D9CFA6" }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A7B4E" }}>Serving NYC&apos;s top neighborhoods</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "14px 40px", marginTop: 18 }}>
                {HERO_NEIGHBORHOODS.map((hood) => (
                  <a key={hood.href} href={hood.href} style={{ fontSize: 15.5, fontWeight: 600, color: "#0F1729", textWrap: "pretty" }} {...{ "style-hover": "color:#C98A2C" }}>
                    {hood.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div data-reveal="" style={{ position: "relative" }}>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "5/4", background: "#E0D9B8", border: "6px solid #FFFFFF", boxShadow: "0 40px 90px rgba(17,59,95,0.28)" }}>
              <img src="/redesign-assets/hoods/upper-west-side.webp" alt="NYC brownstone real estate" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", right: -14, bottom: -22, display: "inline-flex", alignItems: "center", gap: 18, background: "#FFFFFF", border: "1px solid rgba(201,138,44,0.55)", borderRadius: 16, boxShadow: "0 22px 48px rgba(17,59,95,0.28)", padding: "18px 26px", whiteSpace: "nowrap" }}>
              <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" style={{ flex: "0 0 auto", width: 50, height: 50, display: "block" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 19, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.01em", color: "#0F1729" }}>Google Rating</span>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ fontSize: 23, fontWeight: 700, lineHeight: 1, color: "#C98A2C" }}>5.0</span>
                  <span style={{ color: "#F5A623", fontSize: 19, letterSpacing: "0.08em", lineHeight: 1 }}>★★★★★</span>
                </div>
                <span style={{ fontSize: 14, lineHeight: 1.3, color: "#0F1729" }}>
                  Over <strong style={{ fontWeight: 700 }}>57 Reviews</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Client promises" style={{ background: "#F9F6E6", borderBottom: "1px solid #E0D9B8", padding: "36px 64px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 48 }}>
          <div data-reveal="" style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
            <span style={{ flex: "0 0 auto", width: 46, height: 46, borderRadius: 100, background: "#C98A2C", display: "flex", alignItems: "center", justifyContent: "center" }}>{CHECK_ICON}</span>
            <div>
              <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "0.02em", textTransform: "uppercase", color: "#0F1729" }}>Smooth Transaction</div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "#3B4C5E", margin: "8px 0 0", textWrap: "pretty" }}>With limited risk throughout the buying process.</p>
            </div>
          </div>
          <div data-reveal="" style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
            <span style={{ flex: "0 0 auto", width: 46, height: 46, borderRadius: 100, background: "#C98A2C", display: "flex", alignItems: "center", justifyContent: "center" }}>{CHECK_ICON}</span>
            <div>
              <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "0.02em", textTransform: "uppercase", color: "#0F1729" }}>No Pressure</div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "#3B4C5E", margin: "8px 0 0", textWrap: "pretty" }}>No pressure to overpay or purchase within a specific timeframe.</p>
            </div>
          </div>
          <div data-reveal="" style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
            <span style={{ flex: "0 0 auto", width: 46, height: 46, borderRadius: 100, background: "#C98A2C", display: "flex", alignItems: "center", justifyContent: "center" }}>{CHECK_ICON}</span>
            <div>
              <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 18, letterSpacing: "0.02em", textTransform: "uppercase", color: "#0F1729" }}>Ongoing Support</div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "#3B4C5E", margin: "8px 0 0", textWrap: "pretty" }}>A dedicated team that stays available even after the deal closes.</p>
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Services" style={{ background: "#fff", padding: "120px 64px", borderBottom: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div data-reveal="" style={{ maxWidth: 860 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 34, height: 1, background: "#C98A2C", display: "block" }} />
              <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>What we offer</span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.18, letterSpacing: "-0.01em", color: "#0F1729", margin: "16px 0 0", textWrap: "pretty" }}>
              Expertise across every NYC transaction
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#3B4C5E", margin: "18px 0 0", textWrap: "pretty" }}>
              From buyer and listing representation to investment advisory and valuation, we help clients make confident real estate decisions throughout New York City. Browse our specialized services below or call <strong style={{ fontWeight: 700, color: "#0F1729" }}>1-646-970-1078</strong> to discuss your goals.
            </p>
          </div>
          <div style={{ marginTop: 60 }}>
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
                <div style={{ flex: "0 0 auto", width: 96, height: 96, borderRadius: 16, overflow: "hidden", border: "1px solid #E0D9B8", boxShadow: "0 16px 34px rgba(17,59,95,0.12)", background: "#113B5F", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
