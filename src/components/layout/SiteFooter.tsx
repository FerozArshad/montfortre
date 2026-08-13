const footerLink = {
  color: "rgba(249,246,230,0.78)",
  fontSize: 15,
  lineHeight: 1.5,
} as const;

const socialBtn = {
  width: 44,
  height: 44,
  borderRadius: 100,
  background: "#C98A2C",
  color: "#0F1729",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background .25s ease, color .25s ease",
} as const;

export default function SiteFooter() {
  return (
    <footer className="site-footer" style={{ background: "#0B1220", padding: "88px 64px 36px", borderTop: "3px solid #C98A2C" }}>
      <div
        className="site-footer-cols"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 0.9fr auto",
          gap: 56,
          alignItems: "start",
        }}
      >
        <div>
          <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "0.02em", color: "#C98A2C" }}>
            Realtor Services
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, marginTop: 20, paddingTop: 18, borderTop: "1px solid rgba(201,138,44,0.35)" }}>
            {[
              ["NYC Buyer's Agent", "/nyc-buyers-agent-service/"],
              ["NYC Listing Agent", "/nyc-listing-agent-service/"],
              ["NYC Multifamily Real Estate Agent", "/nyc-multifamily-real-estate-agent-service/"],
              ["Home Valuation", "/home-valuation/"],
              ["Mortgage Calculator", "/mortgage-calculator/"],
            ].map(([label, href]) => (
              <a key={href} href={href} style={footerLink} {...{ "style-hover": "color:#C98A2C" }}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "0.02em", color: "#C98A2C" }}>
            Neighborhoods
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, marginTop: 20, paddingTop: 18, borderTop: "1px solid rgba(201,138,44,0.35)" }}>
            {[
              ["Harlem Realtor", "/harlem/"],
              ["Upper East Side Realtor", "/upper-east-side/"],
              ["Upper West Side Realtor", "/upper-west-side/"],
              ["Chelsea Realtor", "/chelsea/"],
              ["Downtown Brooklyn Realtor", "/downtown-brooklyn/"],
              ["Dumbo Realtor", "/dumbo/"],
              ["Brooklyn Heights Realtor", "/brooklyn-heights/"],
              ["Williamsburg Realtor", "/williamsburg/"],
              ["Bedford Stuyvesant Realtor", "/bedford-stuyvesant/"],
              ["Crown Heights Realtor", "/crown-heights/"],
              ["Park Slope Realtor", "/park-slope/"],
            ].map(([label, href]) => (
              <a key={href} href={href} style={footerLink} {...{ "style-hover": "color:#C98A2C" }}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "0.02em", color: "#C98A2C" }}>
            About
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, marginTop: 20, paddingTop: 18, borderTop: "1px solid rgba(201,138,44,0.35)" }}>
            <a href="/stanley-montfort/" style={footerLink} {...{ "style-hover": "color:#C98A2C" }}>Stanley Montfort</a>
            <a href="https://calendly.com/montfort" target="_blank" rel="noopener noreferrer" style={footerLink} {...{ "style-hover": "color:#C98A2C" }}>Contact</a>
            <a href="/success-stories/" style={footerLink} {...{ "style-hover": "color:#C98A2C" }}>Success Stories</a>
            <a href="/blog/" style={footerLink} {...{ "style-hover": "color:#C98A2C" }}>Resources</a>
          </div>
        </div>

        <div className="site-footer-brand" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 26 }}>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="https://www.facebook.com/montfortrealestate" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={socialBtn} {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M14 9h3V5.5h-3c-2.2 0-3.8 1.7-3.8 3.9V11H7.5v3.5h2.7V22h3.6v-7.5h2.7l.5-3.5h-3.2V9.6c0-.4.3-.6.7-.6z" /></svg>
            </a>
            <a href="https://www.youtube.com/@montfortrealestate6984" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={socialBtn} {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.3-3.8.3-3.8s0-2.5-.3-3.8zM10 15V9l5.2 3z" /></svg>
            </a>
            <a href="https://www.instagram.com/stanleymontfort/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={socialBtn} {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.9" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.9" /><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" /></svg>
            </a>
          </div>
          <img src="/redesign-assets/rebny.webp" alt="REBNY, Real Estate Board of New York" style={{ height: 52, width: "auto", display: "block", opacity: 0.9 }} />
        </div>
      </div>

      <div
        className="site-footer-contact"
        style={{
          maxWidth: 1440,
          margin: "64px auto 0",
          paddingTop: 44,
          borderTop: "1px solid rgba(249,246,230,0.14)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 44,
          alignItems: "center",
        }}
      >
        <a href="/" className="site-footer-logo" style={{ display: "block", justifySelf: "start" }}>
          <img
            src="https://assets.agentfire3.com/uploads/sites/312/2026/07/Logo-Transparency-black.png"
            alt="Montfort Real Estate"
            style={{ height: 72, width: "auto", display: "block", filter: "invert(1) brightness(2.2)" }}
          />
        </a>
        <div style={{ justifySelf: "center", textAlign: "center", fontSize: 15, lineHeight: 1.7, color: "rgba(249,246,230,0.8)" }}>
          <div><span style={{ fontWeight: 700, color: "#F9F6E6" }}>Phone:</span> <a href="tel:646-970-1078" style={{ color: "#C98A2C" }}>1-646-970-1078</a></div>
          <div style={{ marginTop: 8 }}><span style={{ fontWeight: 700, color: "#F9F6E6" }}>Address:</span><br />8 West 126th Street, New York, NY 10027</div>
        </div>
        <div className="site-footer-email" style={{ justifySelf: "end", textAlign: "right", fontSize: 15, lineHeight: 1.7 }}>
          <span style={{ fontWeight: 700, color: "#F9F6E6" }}>Email:</span><br />
          <a href="mailto:sm@montfortre.com" style={{ color: "#C98A2C" }}>sm@montfortre.com</a>
        </div>
      </div>

      <div className="site-footer-legal" style={{ maxWidth: 1440, margin: "40px auto 0", textAlign: "center", fontSize: 13, color: "rgba(249,246,230,0.55)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
          <a href="/privacy-policy/" style={{ color: "rgba(249,246,230,0.55)" }}>Privacy Policy</a>
          <span style={{ color: "rgba(249,246,230,0.3)" }}>|</span>
          <a href="/sitemap/" style={{ color: "rgba(249,246,230,0.55)" }}>Sitemap</a>
        </span>
        <div style={{ marginTop: 12, color: "rgba(249,246,230,0.4)" }}>© 2026 Montfort Real Estate LLC. All rights reserved.</div>
      </div>
    </footer>
  );
}
