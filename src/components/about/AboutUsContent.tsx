import ContactSection from "../shared/ContactSection";
import ResourcesSection from "../shared/ResourcesSection";

const CHECK_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 12.5l3.5 3.5L18 7.5" stroke="#0F1729" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NEIGHBORHOOD_CARD_LINK = {
  position: "relative",
  display: "block",
  height: 480,
  overflow: "hidden",
  borderRadius: 16,
  background: "#0F1729",
  transition: "transform 0.4s ease, box-shadow 0.4s ease",
} as const;

const NEIGHBORHOOD_CARD_IMAGE = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  transition: "transform 1.1s cubic-bezier(0.22,0.61,0.36,1)",
} as const;

const NEIGHBORHOODS = [
  {
    href: "/harlem/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Harlem Realtor",
    borough: "Manhattan",
    title: "Harlem Realtor",
    description: "Historic brownstones, rich culture, and timeless Manhattan charm.",
  },
  {
    href: "/upper-west-side/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Upper West Side Realtor",
    borough: "Manhattan",
    title: "Upper West Side Realtor",
    description: "Elegant brownstones, cultural landmarks, and classic Manhattan living.",
  },
  {
    href: "/upper-east-side/",
    image: "/redesign-assets/hoods/upper-east-side.webp",
    alt: "Upper East Side Realtor",
    borough: "Manhattan",
    title: "Upper East Side Realtor",
    description: "Luxury residences, world-class culture, and timeless Upper Manhattan elegance.",
  },
  {
    href: "/chelsea/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "Chelsea Realtor",
    borough: "Manhattan",
    title: "Chelsea Realtor",
    description: "Modern luxury, world-class art, and vibrant Manhattan living.",
  },
  {
    href: "/downtown-brooklyn/",
    image: "/redesign-assets/hoods/downtown-brooklyn.webp",
    alt: "Downtown Brooklyn Realtor",
    borough: "Brooklyn",
    title: "Downtown Brooklyn Realtor",
    description: "Modern high-rises, unmatched transit access, and vibrant Brooklyn living.",
  },
  {
    href: "/dumbo/",
    image: "/redesign-assets/hoods/dumbo.webp",
    alt: "DUMBO Realtor",
    borough: "Brooklyn",
    title: "DUMBO Realtor",
    description: "Cobblestone streets, waterfront views, and the iconic Brooklyn skyline.",
  },
  {
    href: "/brooklyn-heights/",
    image: "/redesign-assets/hoods/brooklyn-heights.webp",
    alt: "Brooklyn Heights Realtor",
    borough: "Brooklyn",
    title: "Brooklyn Heights Realtor",
    description: "Landmark brownstones, promenade views, and quiet Brooklyn elegance.",
  },
  {
    href: "/williamsburg/",
    image: "/redesign-assets/hoods/williamsburg.webp",
    alt: "Williamsburg Realtor",
    borough: "Brooklyn",
    title: "Williamsburg Realtor",
    description: "Creative energy, waterfront lofts, and vibrant Brooklyn culture.",
  },
  {
    href: "/bedford-stuyvesant/",
    image: "/redesign-assets/hoods/bedford-stuyvesant.webp",
    alt: "Bedford-Stuyvesant Realtor",
    borough: "Brooklyn",
    title: "Bedford-Stuyvesant Realtor",
    description: "Classic brownstones, tree-lined blocks, and rich Brooklyn heritage.",
  },
  {
    href: "/crown-heights/",
    image: "/redesign-assets/hoods/crown-heights.webp",
    alt: "Crown Heights Realtor",
    borough: "Brooklyn",
    title: "Crown Heights Realtor",
    description: "Historic homes, cultural diversity, and dynamic Brooklyn living.",
  },
] as const;

export default function AboutUsContent() {
  return (
    <div className="about-page">
      <section data-screen-label="About hero" style={{ position: "relative", background: "#0F1729", overflow: "hidden", padding: "100px 64px 112px" }}>
        <img
          src="/redesign-assets/hoods/harlem.webp"
          alt="Harlem"
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.14, display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,23,41,0.72) 0%, rgba(15,23,41,0.95) 62%)" }} />
        <div style={{ position: "absolute", top: -140, right: -160, width: 620, height: 620, borderRadius: "50%", border: "1px solid rgba(201,138,44,0.16)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 80, alignItems: "center" }}>
          <div data-reveal="">
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 34, height: 1, background: "#C98A2C", display: "block" }} />
              <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F0D9A8" }}>About Montfort Real Estate</span>
            </div>
            <h1 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 52, lineHeight: 1.12, letterSpacing: "-0.014em", color: "#F9F6E6", margin: "22px 0 0", textWrap: "pretty" }}>
              Meet Stanley Montfort, trusted NYC real estate advisor with <span style={{ color: "#C98A2C" }}>20+ years</span> of experience
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.75, color: "rgba(249,246,230,0.85)", margin: "26px 0 0", maxWidth: 600, textWrap: "pretty" }}>
              Whether you&apos;re buying your first home, investing in a brownstone, or selling a valuable property, Stanley provides the expertise, market insight, and personalized guidance needed to make informed decisions and achieve the best possible outcome.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36 }}>
              <a
                href="tel:646-970-1078"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#C98A2C", color: "#0F1729", fontSize: 14.5, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: 100, padding: "18px 32px", minHeight: 56 }}
                {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}
              >
                Call 1-646-970-1078
              </a>
              <a
                href="https://calendly.com/montfort"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(240,217,168,0.55)", color: "#F9F6E6", fontSize: 14.5, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: 100, padding: "16px 32px", minHeight: 56 }}
                {...{ "style-hover": "background:#F9F6E6; color:#113B5F; border-color:#F9F6E6" }}
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
          <div data-reveal="" style={{ position: "relative", justifySelf: "center", padding: "30px 30px 0", width: "100%", maxWidth: 440 }}>
            <div style={{ position: "absolute", inset: "0 0 58px", border: "1px solid rgba(201,138,44,0.5)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", left: 2, top: 18, width: 16, height: 16, borderRadius: "50%", background: "#C98A2C" }} />
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "50%", aspectRatio: "1/1", background: "#E0D9B8", border: "6px solid rgba(249,246,230,0.9)", boxShadow: "0 40px 90px rgba(0,0,0,0.42)" }}>
              <img
                src="/redesign-assets/stanley-portrait.webp"
                alt="Stanley Montfort"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 12%", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Client promises" style={{ background: "#F5EECB", borderTop: "1px solid #E0D9B8", borderBottom: "1px solid #E0D9B8", padding: "36px 64px" }}>
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

      <section data-screen-label="Approach" style={{ background: "#F9F6E6", padding: "120px 64px" }}>
        <div data-reveal="" style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>Our approach</div>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#0F1729", margin: "16px 0 0", textWrap: "pretty" }}>Expert guidance for every NYC real estate decision</h2>
          <span style={{ display: "block", width: 76, height: 3, background: "#C98A2C", margin: "24px auto 0" }} />
          <p style={{ fontSize: 19, lineHeight: 1.8, color: "#3B4C5E", margin: "28px 0 0", textWrap: "pretty" }}>
            Whether you&apos;re purchasing your first home, financing a brownstone, investing in multifamily properties, or preparing to sell, Stanley provides the market expertise and strategic guidance needed to navigate New York City&apos;s competitive landscape, helping clients make informed decisions, avoid costly mistakes, and achieve the best possible outcome for their unique situation.
          </p>
        </div>
      </section>

      <section data-screen-label="Story" style={{ background: "#fff", padding: "120px 64px", borderTop: "1px solid #E0D9B8", borderBottom: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 80, alignItems: "start" }}>
          <div data-reveal="">
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 34, height: 1, background: "#C98A2C", display: "block" }} />
              <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>How it started</span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#0F1729", margin: "16px 0 0", textWrap: "pretty" }}>How Stanley Montfort got started</h2>
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 20, maxWidth: 680 }}>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#3B4C5E", margin: 0, textWrap: "pretty" }}>
                Stanley Montfort is a dynamic, accomplished real estate professional whose expertise and passion for the industry have made him a standout in New York City. With a background in <strong style={{ fontWeight: 700, color: "#0F1729" }}>law and the military</strong>, he has made his mark in the city&apos;s competitive brownstone and townhouse market, playing a pivotal role in over <strong style={{ fontWeight: 700, color: "#0F1729" }}>one billion dollars</strong> worth of sales.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#3B4C5E", margin: 0, textWrap: "pretty" }}>
                At <strong style={{ fontWeight: 700, color: "#0F1729" }}>Leslie J. Garfield</strong>, he established himself as an expert in the Harlem townhouse market, renowned for navigating even the most complex co-ownership transactions with ease, working with SROs, negotiating with tenants, and securing seller financing while keeping every party satisfied.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#3B4C5E", margin: 0, textWrap: "pretty" }}>
                Now at <strong style={{ fontWeight: 700, color: "#0F1729" }}>Serhant</strong>, one of New York&apos;s most renowned brokerages, Stanley has expanded his expertise to condos, co-ops, and new developments while maintaining a stronghold on the townhouse and brownstone market.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#3B4C5E", margin: 0, textWrap: "pretty" }}>
                What sets Stanley apart is his ability to merge creativity with precision. Deep marketing knowledge, strategic thinking, and impeccable analytical skills let him tackle the most challenging deals with confidence and positive outcomes for everyone involved.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#3B4C5E", margin: 0, textWrap: "pretty" }}>
                More than a successful professional, he is known for a genuinely personalized approach, complete transparency, data-driven decisions, and honest conversations tailored to each client&apos;s needs.
              </p>
              <p style={{ fontSize: 17, lineHeight: 1.85, color: "#3B4C5E", margin: 0, textWrap: "pretty" }}>
                Originally from New Jersey, Stanley is a graduate of <strong style={{ fontWeight: 700, color: "#0F1729" }}>Fordham University</strong>, where he earned his JD and a Master&apos;s in International Political Economy and Development.
              </p>
            </div>
          </div>
          <div data-reveal="" style={{ position: "sticky", top: 110 }}>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", background: "#E0D9B8", boxShadow: "0 30px 70px rgba(17,59,95,0.18)", aspectRatio: "4/5" }}>
              <img
                src="/redesign-assets/stanley-portrait.webp"
                alt="Stanley Montfort"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 10%", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Neighborhoods" style={{ background: "#F5EECB", padding: "120px 64px", borderBottom: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div data-reveal="" style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
            <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>Where we work</div>
            <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#0F1729", margin: "16px 0 0", textWrap: "pretty" }}>Proudly serving NYC&apos;s most desirable neighborhoods</h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "#3B4C5E", margin: "18px 0 0", textWrap: "pretty" }}>
              From the historic brownstones of Harlem and Brooklyn Heights to the luxury residences of the Upper East Side and Chelsea, our local expertise helps you understand each neighborhood&apos;s character, market trends, and opportunities.
            </p>
            <span style={{ display: "block", width: 76, height: 3, background: "#C98A2C", margin: "24px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 24, marginTop: 60 }}>
            {NEIGHBORHOODS.map((hood) => (
              <a
                key={hood.href}
                data-reveal=""
                href={hood.href}
                style={NEIGHBORHOOD_CARD_LINK}
                {...{ "style-hover": "transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)" }}
              >
                <img
                  src={hood.image}
                  alt={hood.alt}
                  loading="lazy"
                  style={NEIGHBORHOOD_CARD_IMAGE}
                  {...{ "style-hover": "transform:scale(1.07)" }}
                />
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)" }} />
                <div style={{ position: "absolute", top: 20, left: 20, fontSize: 10.5, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0D9A8", background: "rgba(15,23,41,0.8)", padding: "7px 13px", borderRadius: 100 }}>{hood.borough}</div>
                <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "28px 26px 26px" }}>
                  <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 27, lineHeight: 1.25, color: "#fff", textWrap: "pretty" }}>{hood.title}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginTop: 11, maxWidth: 330 }}>{hood.description}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20, paddingTop: 15, borderTop: "1px solid rgba(201,138,44,0.6)", fontSize: 11.5, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>
                    Explore <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ResourcesSection />
      <ContactSection />
    </div>
  );
}
