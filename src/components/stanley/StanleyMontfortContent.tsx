import ContactSection from "../shared/ContactSection";
import ResourcesSection from "../shared/ResourcesSection";

export default function StanleyMontfortContent() {
  return (
    <div>
      <section data-screen-label="Stanley hero" style={{ position: "relative", background: "#0F1729", overflow: "hidden", padding: "100px 64px 112px" }}>
        <div style={{ position: "absolute", top: -140, right: -160, width: 620, height: 620, borderRadius: "50%", border: "1px solid rgba(201,138,44,0.16)" }} />
        <div style={{ position: "absolute", bottom: -180, left: -140, width: 520, height: 520, borderRadius: "50%", border: "1px solid rgba(201,138,44,0.1)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "0.95fr 1.05fr", gap: 80, alignItems: "center" }}>
          <div data-reveal="" style={{ position: "relative", justifySelf: "center", padding: "34px 34px 0", width: "100%", maxWidth: 440, order: 0 }}>
            <div style={{ position: "absolute", inset: "0 0 60px", border: "1px solid rgba(201,138,44,0.5)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", right: 8, top: 26, width: 14, height: 14, borderRadius: "50%", background: "#C98A2C" }} />
            <div style={{ position: "relative", overflow: "hidden", borderRadius: "50%", aspectRatio: "1/1", background: "#E0D9B8", border: "6px solid rgba(249,246,230,0.9)", boxShadow: "0 40px 90px rgba(0,0,0,0.42)" }}>
              <img
                src="/redesign-assets/stanley-montfort-bio.webp"
                alt="Stanley Montfort"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }}
              />
            </div>
            <div style={{ position: "absolute", left: -6, bottom: 12, background: "#F9F6E6", borderRadius: 14, borderTop: "3px solid #C98A2C", padding: "16px 22px", boxShadow: "0 24px 50px rgba(0,0,0,0.4)" }}>
              <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 26, lineHeight: 1, color: "#0F1729" }}>$1B+</div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A7B4E", marginTop: 5 }}>In Brownstone Sales</div>
            </div>
          </div>
          <div data-reveal="">
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 34, height: 1, background: "#C98A2C", display: "block" }} />
              <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F0D9A8" }}>Real Estate Advisor&reg;</span>
            </div>
            <h1 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 60, lineHeight: 1.06, letterSpacing: "-0.018em", color: "#F9F6E6", margin: "22px 0 0", textWrap: "pretty" }}>Stanley Montfort</h1>
            <p style={{ fontSize: 19, lineHeight: 1.75, color: "rgba(249,246,230,0.85)", margin: "24px 0 0", maxWidth: 560, textWrap: "pretty" }}>
              NYC&apos;s brownstone and townhouse specialist, blending a background in law and the military with the market instinct to close even the most complex deals, and keep every party satisfied.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36 }}>
              <a
                href="https://calendly.com/montfort"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#C98A2C", color: "#0F1729", fontSize: 14.5, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: 100, padding: "18px 32px", minHeight: 56 }}
                {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}
              >
                Schedule a Call
              </a>
              <a
                href="mailto:sm@montfortre.com"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, border: "2px solid rgba(240,217,168,0.55)", color: "#F9F6E6", fontSize: 14.5, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: 100, padding: "16px 32px", minHeight: 56 }}
                {...{ "style-hover": "background:#F9F6E6; color:#113B5F; border-color:#F9F6E6" }}
              >
                Click to Email
              </a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 28, marginTop: 34, paddingTop: 26, borderTop: "1px solid rgba(201,138,44,0.28)" }}>
              <a
                href="tel:9084146006"
                style={{ display: "flex", alignItems: "center", gap: 11, color: "#F9F6E6" }}
                {...{ "style-hover": "color:#C98A2C" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span style={{ fontSize: 16, fontWeight: 700 }}>(908) 414-6006</span>
              </a>
              <a
                href="mailto:sm@montfortre.com"
                style={{ display: "flex", alignItems: "center", gap: 11, color: "#F9F6E6" }}
                {...{ "style-hover": "color:#C98A2C" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 6l10 7 10-7" />
                </svg>
                <span style={{ fontSize: 16, fontWeight: 700 }}>sm@montfortre.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Stats" style={{ background: "#F5EECB", borderTop: "1px solid #E0D9B8", borderBottom: "1px solid #E0D9B8", padding: "56px 64px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 40 }}>
          <div data-reveal="">
            <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 1, letterSpacing: "-0.02em", color: "#0F1729" }}>$1B+</div>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: "#3B4C5E", marginTop: 10, textWrap: "pretty" }}>In brownstone &amp; townhouse sales facilitated</div>
          </div>
          <div data-reveal="" style={{ borderLeft: "1px solid #D9CFA6", paddingLeft: 40 }}>
            <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 1, letterSpacing: "-0.02em", color: "#0F1729" }}>Serhant</div>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: "#3B4C5E", marginTop: 10, textWrap: "pretty" }}>One of New York&apos;s most renowned brokerages</div>
          </div>
          <div data-reveal="" style={{ borderLeft: "1px solid #D9CFA6", paddingLeft: 40 }}>
            <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 1, letterSpacing: "-0.02em", color: "#0F1729" }}>JD</div>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: "#3B4C5E", marginTop: 10, textWrap: "pretty" }}>Fordham University, with a Master&apos;s in IPED</div>
          </div>
          <div data-reveal="" style={{ borderLeft: "1px solid #D9CFA6", paddingLeft: 40 }}>
            <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 1, letterSpacing: "-0.02em", color: "#0F1729" }}>Harlem</div>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: "#3B4C5E", marginTop: 10, textWrap: "pretty" }}>Established the townhouse market at Leslie J. Garfield</div>
          </div>
        </div>
      </section>

      <section data-screen-label="A little about me" style={{ background: "#F9F6E6", padding: "120px 64px" }}>
        <div data-reveal="" style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>In his words</div>
          <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#0F1729", margin: "16px 0 0", textWrap: "pretty" }}>A little about me</h2>
          <span style={{ display: "block", width: 76, height: 3, background: "#C98A2C", margin: "24px auto 0" }} />
          <p style={{ fontSize: 19, lineHeight: 1.8, color: "#3B4C5E", margin: "28px 0 0", textWrap: "pretty" }}>
            Since the start of the pandemic, I&apos;ve played a crucial role in facilitating over one billion dollars worth of brownstone sales in New York City. I&apos;m a recognized expert in the city&apos;s brownstone and townhouse market, with extensive experience on both the sell side and buy side, thanks to a background rooted in the military and law.
          </p>
          <p style={{ fontSize: 19, lineHeight: 1.8, color: "#3B4C5E", margin: "22px 0 0", textWrap: "pretty" }}>
            I honed my skills at Leslie J. Garfield, where I established myself in the Harlem townhouse market and assisted in numerous co-ownership transactions, including more complicated deals involving SROs, seller financing, and negotiating with tenants, always leaving every party satisfied.
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

      <section data-screen-label="Connect" style={{ background: "#0F1729", padding: "120px 64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -160, left: -140, width: 560, height: 560, borderRadius: "50%", border: "1px solid rgba(201,138,44,0.12)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 80, alignItems: "center" }}>
          <div data-reveal="">
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 34, height: 1, background: "#C98A2C", display: "block" }} />
              <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F0D9A8" }}>Let&apos;s connect</span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.16, letterSpacing: "-0.01em", color: "#F9F6E6", margin: "18px 0 0", textWrap: "pretty" }}>Reach out any way you like</h2>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: "rgba(249,246,230,0.82)", margin: "22px 0 0", maxWidth: 460, textWrap: "pretty" }}>
              Ready to buy, sell, or just talk through the market? Book a call, send an email, or follow along, I answer personally.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
              <a
                href="https://calendly.com/montfort"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#C98A2C", color: "#0F1729", fontSize: 14.5, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: 100, padding: "18px 32px", minHeight: 56 }}
                {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}
              >
                Schedule a Call
              </a>
            </div>
          </div>
          <div data-reveal="" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <a
              href="tel:9084146006"
              style={{ display: "flex", flexDirection: "column", gap: 14, background: "rgba(249,246,230,0.05)", border: "1px solid rgba(201,138,44,0.3)", borderRadius: 16, padding: 26 }}
              {...{ "style-hover": "border-color:#C98A2C; background:rgba(249,246,230,0.09)" }}
            >
              <span style={{ width: 46, height: 46, borderRadius: 12, background: "#C98A2C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1729" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>
                <span style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Call or text</span>
                <span style={{ display: "block", fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 19, color: "#F9F6E6", marginTop: 6 }}>(908) 414-6006</span>
              </span>
            </a>
            <a
              href="mailto:sm@montfortre.com"
              style={{ display: "flex", flexDirection: "column", gap: 14, background: "rgba(249,246,230,0.05)", border: "1px solid rgba(201,138,44,0.3)", borderRadius: 16, padding: 26 }}
              {...{ "style-hover": "border-color:#C98A2C; background:rgba(249,246,230,0.09)" }}
            >
              <span style={{ width: 46, height: 46, borderRadius: 12, background: "#C98A2C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1729" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 6l10 7 10-7" />
                </svg>
              </span>
              <span>
                <span style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Email</span>
                <span style={{ display: "block", fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 19, color: "#F9F6E6", marginTop: 6 }}>sm@montfortre.com</span>
              </span>
            </a>
            <a
              href="https://www.instagram.com/uptownbrownstones/"
              target="_blank"
              rel="noopener"
              style={{ display: "flex", flexDirection: "column", gap: 14, background: "rgba(249,246,230,0.05)", border: "1px solid rgba(201,138,44,0.3)", borderRadius: 16, padding: 26 }}
              {...{ "style-hover": "border-color:#C98A2C; background:rgba(249,246,230,0.09)" }}
            >
              <span style={{ width: 46, height: 46, borderRadius: 12, background: "#C98A2C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="#0F1729" strokeWidth="1.9" />
                  <circle cx="12" cy="12" r="4" stroke="#0F1729" strokeWidth="1.9" />
                  <circle cx="17.5" cy="6.5" r="1.3" fill="#0F1729" />
                </svg>
              </span>
              <span>
                <span style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>Instagram</span>
                <span style={{ display: "block", fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 19, color: "#F9F6E6", marginTop: 6 }}>@uptownbrownstones</span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/stanley-p-montfort-b3675548/"
              target="_blank"
              rel="noopener"
              style={{ display: "flex", flexDirection: "column", gap: 14, background: "rgba(249,246,230,0.05)", border: "1px solid rgba(201,138,44,0.3)", borderRadius: 16, padding: 26 }}
              {...{ "style-hover": "border-color:#C98A2C; background:rgba(249,246,230,0.09)" }}
            >
              <span style={{ width: 46, height: 46, borderRadius: 12, background: "#C98A2C", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#0F1729">
                  <path d="M6.5 8.5v10H3.3v-10h3.2zM4.9 3.5a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7zM20.7 18.5h-3.2v-5.2c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8v5.5H10.7s.04-9 0-10h3.2v1.4c.4-.7 1.2-1.6 3-1.6 2.2 0 3.8 1.4 3.8 4.5v5.7z" />
                </svg>
              </span>
              <span>
                <span style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F0D9A8" }}>LinkedIn</span>
                <span style={{ display: "block", fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 19, color: "#F9F6E6", marginTop: 6 }}>Stanley P. Montfort</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <ResourcesSection />
      <ContactSection />
    </div>
  );
}
