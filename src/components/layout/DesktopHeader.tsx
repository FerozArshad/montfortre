import "../../styles/desktop-nav.css";

const LOGO_MASK =
  "https://assets.agentfire3.com/uploads/sites/312/2026/07/Logo-Transparency-black.png";

function ChevronIcon() {
  return (
    <svg className="mnav-chev" width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ display: "block" }}>
      <path
        d="M2.5 4.5L6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="mnav-arrow" width="16" height="12" viewBox="0 0 16 12" fill="none" style={{ display: "block" }}>
      <path
        d="M1 6h13M9.5 1.5L14 6l-4.5 4.5"
        stroke="#C98A2C"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DesktopHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        background: "#fff",
        boxShadow: "0 1px 0 rgba(18,16,14,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "26px 64px",
          display: "flex",
          alignItems: "center",
          gap: 40,
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            paddingRight: 32,
            borderRight: "1px solid rgba(201,138,44,0.5)",
          }}
        >
          <div
            role="img"
            aria-label="Montfort Real Estate"
            style={{
              height: 52,
              aspectRatio: "3813/2662",
              background: "#113B5F",
              WebkitMask: `url('${LOGO_MASK}') center/contain no-repeat`,
              mask: `url('${LOGO_MASK}') center/contain no-repeat`,
            }}
          />
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 30,
            marginLeft: "auto",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.11em",
            textTransform: "uppercase",
          }}
        >
          <div className="mnav-item" style={{ position: "relative" }}>
            <a href="/services/" className="mnav-top" style={{ display: "flex", alignItems: "center", gap: 7, color: "#0F1729", padding: "8px 0" }}>
              Services <ChevronIcon />
            </a>
            <div
              className="mnav-drop"
              style={{
                position: "absolute",
                top: "calc(100% + 18px)",
                left: -24,
                width: 520,
                background: "#fff",
                border: "1px solid #EAE1BE",
                borderTop: "3px solid #C98A2C",
                boxShadow: "0 30px 70px rgba(17,59,95,0.22)",
                borderRadius: 16,
                padding: 14,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
              }}
            >
              <a href="/nyc-buyers-agent-service/" className="mnav-link" style={{ padding: "15px 22px", color: "#0F1729", fontSize: 12.5, letterSpacing: "0.09em" }}>NYC Buyer&apos;s Agent</a>
              <a href="/nyc-listing-agent-service/" className="mnav-link" style={{ padding: "15px 22px", color: "#0F1729", fontSize: 12.5, letterSpacing: "0.09em" }}>NYC Listing Agent</a>
              <a href="/nyc-multifamily-real-estate-agent-service/" className="mnav-link" style={{ padding: "15px 22px", color: "#0F1729", fontSize: 12.5, letterSpacing: "0.09em" }}>NYC Multifamily Agent</a>
              <a href="/whats-my-home-worth/" className="mnav-link" style={{ padding: "15px 22px", color: "#0F1729", fontSize: 12.5, letterSpacing: "0.09em" }}>Free Home Valuation</a>
              <a href="/mortgage-calculator/" className="mnav-link" style={{ padding: "15px 22px", color: "#0F1729", fontSize: 12.5, letterSpacing: "0.09em" }}>Mortgage Calculator</a>
            </div>
          </div>

          <div className="mnav-item" style={{ position: "relative" }}>
            <a href="/neighborhoods/" className="mnav-top" style={{ display: "flex", alignItems: "center", gap: 7, color: "#0F1729", padding: "8px 0" }}>
              Neighborhoods <ChevronIcon />
            </a>
            <div
              className="mnav-drop"
              style={{
                position: "absolute",
                top: "calc(100% + 18px)",
                left: -24,
                width: 520,
                background: "#fff",
                border: "1px solid #EAE1BE",
                borderTop: "3px solid #C98A2C",
                boxShadow: "0 30px 70px rgba(17,59,95,0.22)",
                borderRadius: 16,
                padding: 14,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
              }}
            >
              {[
                ["Harlem Realtor", "/harlem/"],
                ["Upper West Side Realtor", "/upper-west-side/"],
                ["Upper East Side Realtor", "/upper-east-side/"],
                ["Chelsea Realtor", "/chelsea/"],
                ["Downtown Brooklyn Realtor", "/downtown-brooklyn/"],
                ["Dumbo Realtor", "/dumbo/"],
                ["Brooklyn Heights Realtor", "/brooklyn-heights/"],
                ["Bedford Stuyvesant Realtor", "/bedford-stuyvesant/"],
                ["Williamsburg Realtor", "/williamsburg/"],
                ["Crown Heights Realtor", "/crown-heights/"],
                ["Park Slope Realtor", "/park-slope/"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="mnav-link" style={{ padding: "14px 22px", color: "#0F1729", fontSize: 12.5, letterSpacing: "0.09em" }}>
                  {label}
                </a>
              ))}
              <a
                href="/neighborhoods/"
                className="mnav-link"
                style={{
                  gridColumn: "1 / -1",
                  padding: "15px 22px",
                  marginTop: 6,
                  borderTop: "1px solid #EAE1BE",
                  color: "#113B5F",
                  fontSize: 11.5,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                }}
              >
                View all neighborhoods <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="mnav-item" style={{ position: "relative" }}>
            <a href="/idx-sales/" className="mnav-top" style={{ display: "flex", alignItems: "center", gap: 7, color: "#0F1729", padding: "8px 0" }}>
              Listings <ChevronIcon />
            </a>
            <div
              className="mnav-drop"
              style={{
                position: "absolute",
                top: "calc(100% + 18px)",
                left: -24,
                width: 260,
                background: "#fff",
                border: "1px solid #EAE1BE",
                borderTop: "3px solid #C98A2C",
                boxShadow: "0 30px 70px rgba(17,59,95,0.22)",
                borderRadius: 16,
                padding: 14,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <a href="/idx-sales/" className="mnav-link" style={{ padding: "15px 22px", color: "#0F1729", fontSize: 12.5, letterSpacing: "0.09em" }}>Homes For Sale</a>
              <a href="/idx-rentals/" className="mnav-link" style={{ padding: "15px 22px", color: "#0F1729", fontSize: 12.5, letterSpacing: "0.09em" }}>Rentals</a>
              <a href="https://stanley.olridx.com/#" target="_blank" rel="noopener noreferrer" className="mnav-link" style={{ padding: "15px 22px", color: "#0F1729", fontSize: 12.5, letterSpacing: "0.09em" }}>Customer Login</a>
            </div>
          </div>

          <a href="/success-stories/" style={{ color: "#0F1729", padding: "8px 0" }}>Success Stories</a>
          <a href="/about-us/" style={{ color: "#0F1729", padding: "8px 0" }}>About</a>

          <div className="mnav-item" style={{ position: "relative" }}>
            <a href="/blog/" className="mnav-top" style={{ display: "flex", alignItems: "center", gap: 7, color: "#0F1729", padding: "8px 0" }}>
              Resources <ChevronIcon />
            </a>
            <div
              className="mnav-drop"
              style={{
                position: "absolute",
                top: "calc(100% + 18px)",
                left: -24,
                width: 240,
                background: "#fff",
                border: "1px solid #EAE1BE",
                borderTop: "3px solid #C98A2C",
                boxShadow: "0 30px 70px rgba(17,59,95,0.22)",
                borderRadius: 16,
                padding: 14,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <a href="/about-us/" className="mnav-link" style={{ padding: "15px 22px", color: "#0F1729", fontSize: 12.5, letterSpacing: "0.09em" }}>About Us</a>
              <a href="/stanley-montfort/" className="mnav-link" style={{ padding: "15px 22px", color: "#0F1729", fontSize: 12.5, letterSpacing: "0.09em" }}>Stanley Montfort</a>
              <a href="/contact/" className="mnav-link" style={{ padding: "15px 22px", color: "#0F1729", fontSize: 12.5, letterSpacing: "0.09em" }}>Contact</a>
            </div>
          </div>
        </nav>

        <a
          href="tel:+1-646-970-1078"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "#0F1729",
            transition: "color 0.2s ease",
          }}
          {...{ "style-hover": "color:#C98A2C" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "0 0 auto" }}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span style={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1.15 }}>
            <span style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: "-0.01em" }}>(646) 970-1078</span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#3B4C5E", marginTop: 2 }}>Mon-Sat 8AM-7PM</span>
          </span>
        </a>
      </div>
    </header>
  );
}
