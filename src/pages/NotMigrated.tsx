import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";

/** Shown for routes that exist on montfortre.com but aren't migrated to this build yet. */
export default function NotMigrated() {
  const { pathname } = useLocation();
  const liveUrl = "https://montfortre.com" + pathname;
  return (
    <>
      <Seo title="Montfort Real Estate" metas={[{ name: "robots", content: "noindex, nofollow" }]} links={[]} jsonLd={[]} />
      <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F9F6E6", padding: "40px 20px" }}>
        <div style={{ maxWidth: 560, textAlign: "center", background: "#fff", border: "1px solid #EAE1BE", borderTop: "3px solid #C98A2C", borderRadius: 16, boxShadow: "0 30px 60px rgba(17,59,95,0.10)", padding: "48px 36px" }}>
          <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 26, color: "#0F1729" }}>This page is on its way</div>
          <p style={{ color: "#52677A", fontSize: 15.5, lineHeight: 1.7, margin: "14px 0 26px" }}>
            This section hasn&#8217;t been migrated to the new design yet. You can view it on the current site, or head back to the homepage.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={liveUrl} target="_blank" rel="noopener" style={{ background: "#113B5F", color: "#F9F6E6", fontWeight: 800, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 22px", borderRadius: 10, textDecoration: "none" }}>View on current site</a>
            <a href="/" style={{ border: "2px solid #113B5F", color: "#113B5F", fontWeight: 800, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", padding: "12px 22px", borderRadius: 10, textDecoration: "none" }}>Back to homepage</a>
          </div>
        </div>
      </div>
    </>
  );
}
