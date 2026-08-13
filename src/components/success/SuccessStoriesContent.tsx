import ContactSection from "../shared/ContactSection";
import ResourcesSection from "../shared/ResourcesSection";

const GOOGLE_MARK =
  "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png";

const TESTIMONIALS = [
  {
    initials: "KS",
    name: "Kristen Scheyder",
    href: "https://www.google.com/maps/contrib/106383080176387870829/reviews?hl=en",
    date: "Jul 2026 · View on Google",
    quote:
      "Stanley was great to work with. He worked with our schedule, took the time to understand our priorities, showed us a range of properties in different areas that could suit our needs and helped us strategize our approach. He was also a great resource in helping us find local connections for inspections, repairs, etc. We look forward to staying in touch with him and will definitely recommend him.",
  },
  {
    initials: "AD",
    name: "Angelina Darrisaw",
    href: "https://www.google.com/maps/contrib/101694945511048714275/reviews?hl=en",
    date: "Jul 2026 · View on Google",
    quote:
      "Incredible experience. Very knowledgeable about the brownstone buying process and helped me understand the budget differences for condo vs brownstones. Walked away more informed as a result.",
  },
  {
    initials: "SR",
    name: "Stephie Rowe",
    href: "https://www.google.com/maps/contrib/112594200448090017399/reviews?hl=en",
    date: "Jul 2026 · View on Google",
    quote: "Great Service",
  },
  {
    initials: "SC",
    name: "Sandrine Charles",
    href: "https://www.google.com/maps/contrib/111964719774825390259/reviews?hl=en",
    date: "Jun 2026 · View on Google",
    quote: "Thank you for a streamlined process from start to finish ensuring the right place was found and secured without haste!",
  },
  {
    initials: "SR",
    name: "Seth Rabinowitz",
    href: "https://www.google.com/maps/contrib/100922205373403327263/reviews?hl=en",
    date: "Jun 2026 · View on Google",
    quote:
      "We had a great experience working with Stanley. He taught us a lot about the specific market we were looking in, which enabled us to make a very good decision on purchase of a new home.",
  },
  {
    initials: "CA",
    name: "Corey A. Witmer",
    href: "https://www.google.com/maps/contrib/109328620676722096746/reviews?hl=en",
    date: "Apr 2026 · View on Google",
    quote:
      "Stanley was the dream real estate agent we didn't know we deserved! From the beginning he was attentive to help us figure out what type of property we wanted, and could afford. Throughout the process he was a calm and patient presence, offering sincere and sage perspectives to keep us grounded. Ultimately we landed a unicorn of a property for below market price for the block. I'd highly recommend him for future homebuyers.",
  },
  {
    initials: "PW",
    name: "Perry Witmer",
    href: "https://www.google.com/maps/contrib/116771421068638089471/reviews?hl=en",
    date: "Apr 2026 · View on Google",
    quote:
      "Stanley is amazing! No one knows the Harlem market better than him, and his deep expertise was a tremendous resource. He taught me how to spot 'red flags' and talked me out of an offer on a place that had evidence of poor workmanship. He always knew exactly what a property was worth, regardless of the listing price. Responsive, thorough, and gave excellent advice at every step. So grateful to have worked with him!",
  },
  {
    initials: "DS",
    name: "Davon Snipes",
    href: "https://www.google.com/maps/contrib/108132066685824850224/reviews?hl=en",
    date: "Mar 2026 · View on Google",
    quote:
      "Stan has been an incredibly patient, knowledgeable, and professional broker. He understands the market and has many relationships in the industry. He was thoughtful and gracious about responding to our feedback, and left no stone unturned in helping us find the property of our dreams. And he continues to provide guidance post-closing. Look no further!",
  },
  {
    initials: "AN",
    name: "Anika Nfr-Ka Ma’at Daniels",
    href: "https://www.google.com/maps/contrib/107286042219082422872/reviews?hl=en",
    date: "Jan 2026 · View on Google",
    quote:
      "Stan is extremely knowledgeable and professional. He also has the utmost patience! He helped me sell my home and purchase a condo at the same time. My home had all types of special contingencies but he found me a buyer very close to the price I wanted. Stan works extremely hard and is always accessible. I would give him more stars if I could. Highly recommend.",
  },
] as const;

const CARD_STYLE = {
  breakInside: "avoid",
  display: "inline-block",
  width: "100%",
  marginBottom: 24,
  background: "#F9F6E6",
  border: "1px solid #E0D9B8",
  borderRadius: 16,
  padding: "30px 30px 26px",
  verticalAlign: "top",
} as const;

export default function SuccessStoriesContent() {
  return (
    <div>
      <section data-screen-label="Success hero" style={{ position: "relative", background: "#0F1729", overflow: "hidden", padding: "96px 64px 90px" }}>
        <img
          src="/redesign-assets/hoods/harlem.webp"
          alt="Harlem"
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.14, display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,23,41,0.7) 0%, rgba(15,23,41,0.94) 62%)" }} />
        <div style={{ position: "absolute", top: -140, right: -160, width: 600, height: 600, borderRadius: "50%", border: "1px solid rgba(201,138,44,0.16)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <span style={{ width: 34, height: 1, background: "#C98A2C", display: "block" }} />
            <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F0D9A8" }}>Client Reviews</span>
            <span style={{ width: 34, height: 1, background: "#C98A2C", display: "block" }} />
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 56, lineHeight: 1.08, letterSpacing: "-0.018em", color: "#F9F6E6", margin: "22px 0 0", textWrap: "pretty" }}>
            Success stories
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: "rgba(249,246,230,0.85)", margin: "20px auto 0", maxWidth: 640, textWrap: "pretty" }}>
            Real reviews from New York buyers and sellers who trusted Stanley Montfort with one of the biggest decisions of their lives.
          </p>
          <a
            href="https://maps.google.com/?cid=11378470238102062088"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read verified Google reviews"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 24,
              marginTop: 38,
              background: "#FFFFFF",
              border: "1px solid rgba(201,138,44,0.6)",
              borderRadius: 16,
              boxShadow: "0 22px 48px rgba(0,0,0,0.35)",
              padding: "18px 30px",
              whiteSpace: "nowrap",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingRight: 24, borderRight: "1px solid #E0D9B8", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                <img src={GOOGLE_MARK} alt="Google" style={{ width: 30, height: 30, display: "block" }} />
                <span style={{ fontSize: 30, fontWeight: 900, lineHeight: 1, letterSpacing: "-0.02em", color: "#0F1729" }}>5.0</span>
              </div>
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "#52677A" }}>Verified Google reviews</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 9, textAlign: "left" }}>
              <span style={{ color: "#F5A623", fontSize: 19, letterSpacing: "0.14em", lineHeight: 1 }}>★★★★★</span>
              <span style={{ fontSize: 15, lineHeight: 1.4, color: "#0F1729" }}>
                Over <strong style={{ fontWeight: 700 }}>57 reviews</strong>
              </span>
            </div>
          </a>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
            <a
              href="https://calendly.com/montfort"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 9,
                background: "#C98A2C",
                color: "#0F1729",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: 100,
                padding: "16px 30px",
                minHeight: 52,
              }}
              {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}
            >
              Book a consultation{" "}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h9M8 3.5L12.5 8 8 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="tel:+1-646-970-1078"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 9,
                background: "transparent",
                color: "#F9F6E6",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "1px solid rgba(201,138,44,0.6)",
                borderRadius: 100,
                padding: "16px 30px",
                minHeight: 52,
              }}
              {...{ "style-hover": "background:rgba(249,246,230,0.08); border-color:#C98A2C" }}
            >
              Call (646) 970-1078
            </a>
          </div>
        </div>
      </section>

      <section data-screen-label="Testimonials" style={{ background: "#F5EECB", padding: "100px 64px", borderBottom: "1px solid #E0D9B8" }}>
        <div className="success-masonry" style={{ maxWidth: 1280, margin: "0 auto", columnCount: 3, columnGap: 24 }}>
          {TESTIMONIALS.map((item) => (
            <div key={item.href} data-reveal="" style={CARD_STYLE}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
                <span style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: 56, lineHeight: 0.7, color: "#C98A2C" }}>{'\u201C'}</span>
                <span style={{ color: "#F5A623", fontSize: 16, letterSpacing: "0.1em", lineHeight: 1, marginTop: 8 }}>★★★★★</span>
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3B4C5E", margin: "6px 0 0", textWrap: "pretty" }}>{item.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 22, paddingTop: 20, borderTop: "1px solid #E0D9B8" }}>
                <div
                  style={{
                    position: "relative",
                    flex: "0 0 auto",
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "#113B5F",
                    color: "#F9F6E6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Space Grotesk',system-ui,sans-serif",
                    fontWeight: 700,
                    fontSize: 17,
                  }}
                >
                  {item.initials}
                </div>
                <div style={{ flex: "1 1 auto", minWidth: 0 }}>
                  <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 15.5, color: "#0F1729", textWrap: "pretty" }}>{item.name}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 3 }}>
                    <img src={GOOGLE_MARK} alt="Google" style={{ width: 15, height: 15, display: "block" }} />
                    <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, color: "#52677A" }} {...{ "style-hover": "color:#C98A2C" }}>
                      {item.date}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ResourcesSection />
      <ContactSection />
    </div>
  );
}
