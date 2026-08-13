const FORM_FIELD = {
  background: "rgba(249,246,230,0.1)",
  border: "1px solid rgba(201,138,44,0.45)",
  borderRadius: 10,
  padding: "15px 16px",
  fontFamily: "inherit",
  fontSize: 15.5,
  color: "#F9F6E6",
  minHeight: 52,
} as const;

export default function ContactSection() {
  return (
    <section data-screen-label="Contact" style={{ background: "#113B5F", padding: "100px 64px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "stretch" }}>
        <div data-reveal="" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C98A2C" }}>Get in touch</div>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 42, lineHeight: 1.22, letterSpacing: "-0.008em", color: "#F9F6E6", margin: "16px 0 0", textWrap: "pretty" }}>Contact Montfort Real Estate</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 32, maxWidth: 520 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <input type="text" placeholder="First name" style={FORM_FIELD} />
              <input type="text" placeholder="Last name" style={FORM_FIELD} />
            </div>
            <input type="email" placeholder="Email address" style={FORM_FIELD} />
            <textarea placeholder="Comments, questions?" rows={4} style={{ ...FORM_FIELD, resize: "vertical" }} />
            <a
              href="https://calendly.com/montfort"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#C98A2C", color: "#0F1729", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: 100, fontSize: 15, padding: "17px 24px", minHeight: 54 }}
              {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}
            >
              Submit
            </a>
          </div>
        </div>
        <div data-reveal="" style={{ position: "relative", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(201,138,44,0.55)", boxShadow: "0 30px 70px rgba(11,18,32,0.4)", minHeight: 440, background: "#0B1220" }}>
          <iframe
            title="Montfort Real Estate on Google Maps"
            src="https://www.google.com/maps?q=8+West+126th+Street,+New+York,+NY+10027&output=embed"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, filter: "grayscale(1) contrast(0.92) brightness(0.92)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(120deg, rgba(17,59,95,0.34) 0%, rgba(17,59,95,0) 46%), linear-gradient(0deg, rgba(11,18,32,0.55) 0%, rgba(11,18,32,0) 34%)", mixBlendMode: "multiply" }} />
          <div style={{ position: "absolute", left: 24, right: 24, bottom: 24, background: "#F9F6E6", borderRadius: 16, borderTop: "3px solid #C98A2C", padding: "24px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, boxShadow: "0 20px 44px rgba(11,18,32,0.35)" }}>
            <div>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C98A2C" }}>Visit our office</div>
              <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 20, color: "#0F1729", marginTop: 8, lineHeight: 1.3 }}>8 West 126th Street</div>
              <div style={{ fontSize: 14.5, color: "#3B4C5E", marginTop: 3 }}>New York, NY 10027</div>
            </div>
            <a
              href="https://maps.google.com/?cid=11378470238102062088"
              target="_blank"
              rel="noopener"
              style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", gap: 9, background: "#113B5F", color: "#F9F6E6", fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 100, padding: "14px 22px" }}
              {...{ "style-hover": "background:#C98A2C; color:#0F1729" }}
            >
              Directions{" "}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h9M8 3.5L12.5 8 8 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
