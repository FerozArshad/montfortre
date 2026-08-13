import ContactSection from "../shared/ContactSection";

type PropertyLink = {
  href: string;
  title: string;
  subtitle: string;
};

type ManhattanHood = {
  href: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  imageFirst: boolean;
  types: PropertyLink[];
};

type BrooklynHood = {
  href: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  wide?: boolean;
  types: PropertyLink[];
};

const PROMISES = [
  {
    title: (
      <>
        Smooth
        <br />
        Transaction
      </>
    ),
    text: "With limited risk throughout the buying process.",
    pad: "0 48px 0 0",
    border: true,
  },
  {
    title: (
      <>
        No
        <br />
        Pressure
      </>
    ),
    text: "No pressure to overpay or purchase within a specific timeframe.",
    pad: "0 48px",
    border: true,
  },
  {
    title: (
      <>
        Ongoing
        <br />
        Support
      </>
    ),
    text: "A dedicated team that remains available even after the transaction is complete.",
    pad: "0 0 0 48px",
    border: false,
  },
] as const;

const MANHATTAN: ManhattanHood[] = [
  {
    href: "/harlem/",
    title: "Harlem Realtor",
    description: "Historic architecture, world-famous culture, and one of Manhattan’s deepest brownstone markets.",
    image: "/redesign-assets/nbhd/65438018.webp",
    alt: "Harlem brownstones",
    imageFirst: true,
    types: [
      { href: "/harlem-brownstones/", title: "Harlem Brownstones", subtitle: "Historic architecture, timeless charm, and classic Harlem living" },
      { href: "/harlem-condos/", title: "Harlem Condos", subtitle: "Modern amenities, urban convenience, and vibrant Harlem living" },
      { href: "/harlem-sros/", title: "Harlem SROs", subtitle: "Affordable housing, investment potential, and unique opportunities" },
      { href: "/harlem-co-ownership/", title: "Harlem Co-Ownership", subtitle: "Shared ownership, lower costs, and greater buying power" },
    ],
  },
  {
    href: "/upper-west-side/",
    title: "Upper West Side Realtor",
    description: "Pre-war grandeur between Central Park and Riverside, with townhouses, condos, and classic co-ops.",
    image: "/redesign-assets/nbhd/eadc74f3.webp",
    alt: "Upper West Side",
    imageFirst: false,
    types: [
      { href: "/upper-west-side-townhouses/", title: "Upper West Side Townhouses", subtitle: "Elegant townhomes, historic charm, and classic Manhattan living" },
      { href: "/upper-west-side-condos/", title: "Upper West Side Condos", subtitle: "Modern luxury, premium amenities, and sophisticated city living" },
      { href: "/upper-west-side-co-ops-2/", title: "Upper West Side Co-Ops", subtitle: "Classic residences, strong communities, and timeless Manhattan appeal" },
    ],
  },
  {
    href: "/upper-east-side/",
    title: "Upper East Side Realtor",
    description: "Museum Mile, Carnegie Hill, and Lenox Hill — Manhattan’s most prestigious addresses.",
    image: "/redesign-assets/nbhd/943207db.webp",
    alt: "Upper East Side",
    imageFirst: true,
    types: [
      { href: "/upper-east-side-townhouses/", title: "Upper East Side Townhouses", subtitle: "Elegant townhomes, timeless charm, and prestigious Manhattan living" },
      { href: "/upper-east-side-condos/", title: "Upper East Side Condos", subtitle: "Luxury residences, premium amenities, and sophisticated city living" },
      { href: "/upper-east-side-co-ops/", title: "Upper East Side Co-Ops", subtitle: "Classic residences, refined communities, and timeless Upper East Side appeal" },
    ],
  },
  {
    href: "/chelsea/",
    title: "Chelsea Realtor",
    description: "Galleries, the High Line, and a mix of landmarked townhouses and new-development condos.",
    image: "/redesign-assets/nbhd/90c53c45.webp",
    alt: "Chelsea",
    imageFirst: false,
    types: [
      { href: "/chelsea-townhouses/", title: "Chelsea Townhouses", subtitle: "Historic townhomes, architectural charm, and stylish city living" },
      { href: "/chelsea-condos/", title: "Chelsea Condos", subtitle: "Modern luxury, premium amenities, and vibrant Manhattan living" },
      { href: "/chelsea-co-ops-2/", title: "Chelsea Co-Ops", subtitle: "Classic residences, strong communities, and timeless Chelsea appeal" },
    ],
  },
];

const BROOKLYN: BrooklynHood[] = [
  {
    href: "/downtown-brooklyn/",
    title: "Downtown Brooklyn Realtor",
    description: "High-rise living at the borough’s transit and business core.",
    image: "/redesign-assets/nbhd/0dd93ed5.webp",
    alt: "Downtown Brooklyn",
    types: [
      { href: "/downtown-brooklyn-condos-2/", title: "Downtown Brooklyn Condos", subtitle: "Modern high-rises, premium amenities, and convenient city living" },
      { href: "/downstone-brooklyn-co-ops/", title: "Downtown Brooklyn Co-Ops", subtitle: "Established communities, great value, and classic Brooklyn living" },
    ],
  },
  {
    href: "/dumbo/",
    title: "Dumbo Realtor",
    description: "Converted warehouses, cobblestone streets, and the best skyline views in the city.",
    image: "/redesign-assets/nbhd/d86879d1.webp",
    alt: "Dumbo",
    types: [
      { href: "/dumbo-condos/", title: "Dumbo Condos", subtitle: "Waterfront views, modern luxury, and iconic Brooklyn living" },
      { href: "/dumbo-co-ops-2/", title: "Dumbo Co-Ops", subtitle: "Historic character, vibrant communities, and lasting Brooklyn appeal" },
    ],
  },
  {
    href: "/brooklyn-heights/",
    title: "Brooklyn Heights Realtor",
    description: "The city’s first landmarked district — the Promenade, and blocks of 19th-century townhouses.",
    image: "/redesign-assets/nbhd/745851cc.webp",
    alt: "Brooklyn Heights",
    types: [
      { href: "/brooklyn-heights-townhouses-2/", title: "Brooklyn Heights Townhouses", subtitle: "Historic brownstones, skyline views, and timeless Brooklyn charm" },
      { href: "/brooklyn-heights-condos-3/", title: "Brooklyn Heights Condos", subtitle: "Luxury residences, waterfront views, and sophisticated city living" },
      { href: "/brooklyn-heights-co-ops-3/", title: "Brooklyn Heights Co-Ops", subtitle: "Classic residences, strong communities, and enduring Brooklyn appeal" },
    ],
  },
  {
    href: "/bedford-stuyvesant/",
    title: "Bedford-Stuyvesant Realtor",
    description: "One of the largest concentrations of intact brownstones anywhere in New York.",
    image: "/redesign-assets/nbhd/66fdf193.webp",
    alt: "Bedford-Stuyvesant",
    types: [
      { href: "/bedford-stuyvesant-brownstones-2/", title: "Bedford-Stuyvesant Brownstones", subtitle: "Historic brownstones, rich culture, and authentic Brooklyn living" },
      { href: "/bedford-stuyvesant/", title: "Bedford-Stuyvesant Multifamily", subtitle: "Two-, three-, and four-family houses with strong rental income" },
    ],
  },
  {
    href: "/williamsburg/",
    title: "Williamsburg Realtor",
    description: "Waterfront towers, converted lofts, and Brooklyn’s most in-demand nightlife and dining.",
    image: "/redesign-assets/nbhd/f55c71f9.webp",
    alt: "Williamsburg",
    types: [
      { href: "/williamsburg/", title: "Williamsburg Condos", subtitle: "New development, waterfront amenities, and strong resale demand" },
      { href: "/williamsburg/", title: "Williamsburg Townhouses", subtitle: "Row houses and conversions with rental upside" },
    ],
  },
  {
    href: "/crown-heights/",
    title: "Crown Heights Realtor",
    description: "Limestone row houses beside the Botanic Garden — still one of Brooklyn’s best values.",
    image: "/redesign-assets/nbhd/b6c26a69.webp",
    alt: "Crown Heights",
    types: [
      { href: "/crown-heights/", title: "Crown Heights Brownstones", subtitle: "Limestone and brownstone row houses with original detail" },
      { href: "/crown-heights/", title: "Crown Heights Multifamily", subtitle: "Investment buildings with room to reposition" },
    ],
  },
  {
    href: "/park-slope/",
    title: "Park Slope Realtor",
    description: "Prospect Park at the door, celebrated schools, and some of the most sought-after row houses in Brooklyn.",
    image: "/redesign-assets/nbhd/69cc59cd.webp",
    alt: "Park Slope",
    wide: true,
    types: [
      { href: "/park-slope/", title: "Park Slope Brownstones", subtitle: "Landmarked row houses steps from Prospect Park" },
      { href: "/park-slope/", title: "Park Slope Co-Ops", subtitle: "Pre-war apartments with strong communities and steady value" },
    ],
  },
];

const CHECK_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C98A2C" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

function PtArrow({ compact }: { compact?: boolean }) {
  const w = compact ? 18 : 20;
  const h = compact ? 13 : 14;
  return (
    <svg className="pt-arrow" width={w} height={h} viewBox="0 0 20 14" fill="none" style={{ flex: "0 0 auto" }}>
      <path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const MANHATTAN_TYPE_ROW = {
  display: "flex",
  alignItems: "center",
  gap: 18,
  padding: "18px 10px",
  borderBottom: "1px solid #D9CFA6",
  borderRadius: 10,
  color: "#0F1729",
} as const;

const BROOKLYN_TYPE_ROW = {
  display: "flex",
  alignItems: "center",
  gap: 16,
  padding: "16px 10px",
  borderBottom: "1px solid #D9CFA6",
  borderRadius: 10,
  color: "#0F1729",
} as const;

const HOOD_IMAGE_WRAP = {
  borderRadius: 16,
  overflow: "hidden",
  aspectRatio: "16/11",
  background: "#E0D9B8",
  border: "6px solid #FFFFFF",
  boxShadow: "0 26px 60px rgba(17,59,95,0.2)",
} as const;

const HOOD_IMG = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)",
} as const;

function ManhattanCopy({ hood }: { hood: ManhattanHood }) {
  return (
    <div className="nbhd-copy">
      <a
        href={hood.href}
        style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 36, lineHeight: 1.1, letterSpacing: "-0.045em", textTransform: "uppercase", color: "#0F1729", display: "inline-block" }}
        {...{ "style-hover": "color:#C98A2C" }}
      >
        {hood.title}
      </a>
      <p style={{ fontSize: 17, lineHeight: 1.8, color: "#3B4C5E", margin: "16px 0 0", maxWidth: 520, textWrap: "pretty" }}>{hood.description}</p>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 28, borderTop: "1px solid #D9CFA6" }}>
        {hood.types.map((item) => (
          <a key={item.title} href={item.href} className="pt-row" style={MANHATTAN_TYPE_ROW}>
            <span style={{ flex: "1 1 auto" }}>
              <span style={{ display: "block", fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: "-0.01em" }}>{item.title}</span>
              <span style={{ display: "block", fontSize: 15, color: "#3B4C5E", marginTop: 4 }}>{item.subtitle}</span>
            </span>
            <PtArrow />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function NeighborhoodsContent() {
  return (
    <>
      <section data-screen-label="Neighborhoods hero" style={{ position: "relative", background: "#F5EECB", borderBottom: "1px solid #E0D9B8", overflow: "hidden", padding: "80px 64px 90px" }}>
        <div style={{ position: "absolute", top: -150, right: -160, width: 560, height: 560, borderRadius: "50%", border: "1px solid rgba(201,138,44,0.2)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1.02fr 0.98fr", gap: 72, alignItems: "center" }}>
          <div data-reveal="">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8A7B4E" }}>
              <a href="/" style={{ color: "#8A7B4E" }}>Home</a> <span style={{ opacity: 0.5 }}>/</span> <span style={{ color: "#C98A2C" }}>Neighborhoods</span>
            </div>
            <h1 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 62, lineHeight: 1.04, letterSpacing: "-0.02em", color: "#0F1729", margin: "18px 0 0", textWrap: "pretty" }}>NYC Neighborhoods</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#3B4C5E", margin: "22px 0 0", maxWidth: 560, textWrap: "pretty" }}>
              Expert local insight for buyers, sellers and investors. We’ll help you find the <strong style={{ fontWeight: 700, color: "#0F1729" }}>right NYC neighborhood</strong> based on your lifestyle, budget and long-term goals — so you can buy with confidence and avoid costly mistakes.
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
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A7B4E" }}>Explore by borough</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px 32px", marginTop: 16 }}>
                <a href="#manhattan" style={{ fontSize: 15.5, fontWeight: 600, color: "#0F1729" }} {...{ "style-hover": "color:#C98A2C" }}>Manhattan · 4 neighborhoods</a>
                <a href="#brooklyn" style={{ fontSize: 15.5, fontWeight: 600, color: "#0F1729" }} {...{ "style-hover": "color:#C98A2C" }}>Brooklyn · 7 neighborhoods</a>
              </div>
            </div>
          </div>
          <div data-reveal="" style={{ position: "relative" }}>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "5/4", background: "#E0D9B8", border: "6px solid #FFFFFF", boxShadow: "0 40px 90px rgba(17,59,95,0.28)" }}>
              <img src="/redesign-assets/nbhd/d86879d1.webp" alt="New York City skyline from Brooklyn" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", right: -14, bottom: -22, display: "inline-flex", alignItems: "center", gap: 18, background: "#FFFFFF", border: "1px solid rgba(201,138,44,0.55)", borderRadius: 16, boxShadow: "0 22px 48px rgba(17,59,95,0.28)", padding: "18px 26px", whiteSpace: "nowrap" }}>
              <svg width="50" height="50" viewBox="0 0 48 48" style={{ flex: "0 0 auto", display: "block" }} role="img" aria-label="Google">
                <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 2-1.6 5-4.5 7l-.1.3 6.5 5 .5.1c4.2-3.8 6.6-9.5 6.6-15.7" />
                <path fill="#34A853" d="M24 46c5.9 0 10.9-1.9 14.5-5.3l-6.9-5.4c-1.8 1.3-4.3 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-.3.1-6.7 5.2-.1.3C8 41.6 15.4 46 24 46" />
                <path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4v-.3l-6.8-5.3-.2.1A22 22 0 0 0 2 24c0 3.5.9 6.9 2.5 9.9z" />
                <path fill="#EA4335" d="M24 10.5c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4.3 29.9 2 24 2 15.4 2 8 6.4 4.5 14.1l7 5.4c1.8-5.3 6.7-9 12.5-9" />
              </svg>
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

      <section data-screen-label="Promises" style={{ position: "relative", background: "#0F1729", padding: "52px 64px 56px", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -220, left: "50%", transform: "translateX(-50%)", width: 900, height: 900, borderRadius: "50%", border: "1px solid rgba(201,138,44,0.13)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
            <span style={{ width: 40, height: 1, background: "rgba(201,138,44,0.6)", display: "block" }} />
            <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C98A2C" }}>What working with us means</span>
            <span style={{ width: 40, height: 1, background: "rgba(201,138,44,0.6)", display: "block" }} />
          </div>
          <div className="nbhd-promises" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 0, marginTop: 34 }}>
            {PROMISES.map((item) => (
              <div
                key={item.text}
                className="nbhd-promise"
                data-reveal=""
                style={{ padding: item.pad, borderRight: item.border ? "1px solid rgba(201,138,44,0.24)" : undefined }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <span style={{ flex: "0 0 auto", width: 54, height: 54, borderRadius: 100, border: "1px solid rgba(201,138,44,0.55)", background: "rgba(201,138,44,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {CHECK_ICON}
                  </span>
                  <span style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 20, lineHeight: 1.2, letterSpacing: "0.06em", textTransform: "uppercase", color: "#F9F6E6" }}>{item.title}</span>
                </div>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "rgba(249,246,230,0.76)", margin: "16px 0 0", textWrap: "pretty" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-screen-label="Intro" style={{ background: "#F9F6E6", padding: "96px 64px", borderBottom: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 80, alignItems: "start" }}>
          <div data-reveal="">
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 34, height: 1, background: "#C98A2C", display: "block" }} />
              <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>Neighborhood guides</span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.16, letterSpacing: "-0.014em", color: "#0F1729", margin: "18px 0 0", textWrap: "pretty" }}>Explore NYC Neighborhoods with Confidence</h2>
          </div>
          <div data-reveal="">
            <p style={{ fontSize: 18, lineHeight: 1.85, color: "#3B4C5E", margin: 0, textWrap: "pretty" }}>
              Finding the right neighborhood is just as important as finding the right property. Whether you’re searching for a historic Harlem brownstone, a luxury Upper East Side condo, or an investment opportunity in Brooklyn, our neighborhood guides provide local market insights, lifestyle information, pricing trends, and community highlights to help you make an informed decision.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.85, color: "#3B4C5E", margin: "18px 0 0", textWrap: "pretty" }}>
              Browse NYC neighborhoods below, or call us at <a href="tel:646-970-1078" style={{ fontWeight: 700, color: "#113B5F" }}>1-646-970-1078</a> for personalized guidance from a local real estate expert.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 30 }}>
              <a
                href="#manhattan"
                style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#113B5F", color: "#F9F6E6", fontSize: 12, fontWeight: 800, letterSpacing: "0.13em", textTransform: "uppercase", borderRadius: 100, padding: "14px 24px" }}
                {...{ "style-hover": "background:#C98A2C; color:#0F1729" }}
              >
                Manhattan · 4 neighborhoods
              </a>
              <a
                href="#brooklyn"
                style={{ display: "inline-flex", alignItems: "center", gap: 9, border: "1.5px solid #113B5F", color: "#113B5F", fontSize: 12, fontWeight: 800, letterSpacing: "0.13em", textTransform: "uppercase", borderRadius: 100, padding: "12.5px 24px" }}
                {...{ "style-hover": "background:#113B5F; color:#F9F6E6" }}
              >
                Brooklyn · 7 neighborhoods
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="manhattan" data-screen-label="Manhattan" style={{ background: "#F5EECB", padding: "80px 64px 0", borderBottom: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", alignItems: "baseline", gap: 22 }}>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 36, letterSpacing: "-0.045em", textTransform: "uppercase", color: "#0F1729", margin: 0 }}>Manhattan</h2>
          <span style={{ flex: "1 1 auto", height: 1, background: "#D9CFA6", display: "block" }} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8A7B4E" }}>Harlem · UWS · UES · Chelsea</span>
        </div>
        <div className="nbhd-hood-list" style={{ maxWidth: 1440, margin: "0 auto", padding: "64px 0 96px", display: "flex", flexDirection: "column", gap: 72 }}>
          {MANHATTAN.map((hood) => (
            <div
              key={hood.href}
              className="nbhd-hood"
              data-reveal=""
              style={{ display: "grid", gridTemplateColumns: hood.imageFirst ? "1.05fr 0.95fr" : "0.95fr 1.05fr", gap: 64, alignItems: "center" }}
            >
              {hood.imageFirst ? (
                <>
                  <div className="hood-card" style={HOOD_IMAGE_WRAP}>
                    <img src={hood.image} alt={hood.alt} style={HOOD_IMG} />
                  </div>
                  <ManhattanCopy hood={hood} />
                </>
              ) : (
                <>
                  <ManhattanCopy hood={hood} />
                  <div className="hood-card" style={HOOD_IMAGE_WRAP}>
                    <img src={hood.image} alt={hood.alt} style={HOOD_IMG} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="brooklyn" data-screen-label="Brooklyn" style={{ background: "#F9F6E6", padding: "80px 64px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "flex", alignItems: "baseline", gap: 22 }}>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 36, letterSpacing: "-0.045em", textTransform: "uppercase", color: "#0F1729", margin: 0 }}>Brooklyn</h2>
          <span style={{ flex: "1 1 auto", height: 1, background: "#E0D9B8", display: "block" }} />
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8A7B4E" }}>Seven neighborhoods</span>
        </div>
        <div className="nbhd-hood-list" style={{ maxWidth: 1440, margin: "0 auto", padding: "56px 0 40px", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 44 }}>
          {BROOKLYN.map((hood) =>
            hood.wide ? (
              <div key={hood.href} data-reveal="" className="hood-card" style={{ gridColumn: "1 / -1", background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: 16, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div style={{ overflow: "hidden", background: "#E0D9B8", minHeight: 320 }}>
                  <img src={hood.image} alt={hood.alt} style={HOOD_IMG} />
                </div>
                <div style={{ padding: "44px 44px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <a
                    href={hood.href}
                    style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 30, letterSpacing: "-0.025em", textTransform: "uppercase", color: "#0F1729" }}
                    {...{ "style-hover": "color:#C98A2C" }}
                  >
                    {hood.title}
                  </a>
                  <p style={{ fontSize: 16.5, lineHeight: 1.75, color: "#3B4C5E", margin: "12px 0 0", maxWidth: 520, textWrap: "pretty" }}>{hood.description}</p>
                  <div style={{ display: "flex", flexDirection: "column", marginTop: 24, borderTop: "1px solid #D9CFA6", maxWidth: 560 }}>
                    {hood.types.map((item) => (
                      <a key={item.title} href={item.href} className="pt-row" style={BROOKLYN_TYPE_ROW}>
                        <span style={{ flex: "1 1 auto" }}>
                          <span style={{ display: "block", fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 17 }}>{item.title}</span>
                          <span style={{ display: "block", fontSize: 14.5, color: "#3B4C5E", marginTop: 3 }}>{item.subtitle}</span>
                        </span>
                        <PtArrow compact />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div key={hood.href} data-reveal="" className="hood-card" style={{ background: "#F5EECB", border: "1px solid #E0D9B8", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#E0D9B8" }}>
                  <img src={hood.image} alt={hood.alt} style={HOOD_IMG} />
                </div>
                <div style={{ padding: "34px 34px 30px", display: "flex", flexDirection: "column", flex: "1 1 auto" }}>
                  <a
                    href={hood.href}
                    style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#0F1729" }}
                    {...{ "style-hover": "color:#C98A2C" }}
                  >
                    {hood.title}
                  </a>
                  <p style={{ fontSize: 16, lineHeight: 1.75, color: "#3B4C5E", margin: "12px 0 0", textWrap: "pretty" }}>{hood.description}</p>
                  <div style={{ display: "flex", flexDirection: "column", marginTop: 22, borderTop: "1px solid #D9CFA6" }}>
                    {hood.types.map((item) => (
                      <a key={item.title} href={item.href} className="pt-row" style={BROOKLYN_TYPE_ROW}>
                        <span style={{ flex: "1 1 auto" }}>
                          <span style={{ display: "block", fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 17 }}>{item.title}</span>
                          <span style={{ display: "block", fontSize: 14.5, color: "#3B4C5E", marginTop: 3 }}>{item.subtitle}</span>
                        </span>
                        <PtArrow compact />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </section>

      <section data-screen-label="Not sure CTA" style={{ background: "#F9F6E6", padding: "40px 64px 96px" }}>
        <div data-reveal="" style={{ maxWidth: 1440, margin: "0 auto", background: "#0F1729", borderRadius: 16, padding: "56px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48, flexWrap: "wrap" }}>
          <div style={{ maxWidth: 720 }}>
            <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 36, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#F9F6E6", margin: 0, textWrap: "pretty" }}>Not sure which neighborhood fits?</h2>
            <p style={{ fontSize: 17.5, lineHeight: 1.7, color: "rgba(249,246,230,0.82)", margin: "14px 0 0", textWrap: "pretty" }}>
              Tell us your budget, commute, and long-term plan. We’ll shortlist the blocks worth your weekends — and the ones worth skipping.
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="https://calendly.com/montfort"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#C98A2C", color: "#0F1729", fontSize: 15, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: 100, padding: "18px 34px", minHeight: 56 }}
              {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}
            >
              Book Now
            </a>
            <a
              href="tel:646-970-1078"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(249,246,230,0.7)", color: "#F9F6E6", fontSize: 15, fontWeight: 800, letterSpacing: "0.03em", borderRadius: 100, padding: "16px 32px", minHeight: 56 }}
              {...{ "style-hover": "background:#F9F6E6; color:#113B5F; border-color:#F9F6E6" }}
            >
              (646) 970-1078
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
