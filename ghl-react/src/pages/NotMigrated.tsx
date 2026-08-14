import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import "../styles/not-migrated.css";

/** Shown for routes that exist on montfortre.com but aren't migrated to this build yet. */
export default function NotMigrated() {
  const { pathname } = useLocation();
  const liveUrl = "https://montfortre.com" + pathname;
  return (
    <>
      <Seo title="Montfort Real Estate" metas={[{ name: "robots", content: "noindex, nofollow" }]} links={[]} jsonLd={[]} />
      <div className="nm-page">
        <div className="nm-card">
          <div className="nm-title">This page is on its way</div>
          <p>
            This section hasn&#8217;t been migrated to the new design yet. You can view it on the current site, or head back to the homepage.
          </p>
          <div className="nm-actions">
            <a href={liveUrl} target="_blank" rel="noopener" className="nm-btn-fill">View on current site</a>
            <a href="/" className="nm-btn-line">Back to homepage</a>
          </div>
        </div>
      </div>
    </>
  );
}
