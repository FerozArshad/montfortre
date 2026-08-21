import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/home-reviews.css";
import {
  REPUTATION_HUB_WIDGET_SCRIPT,
  REPUTATION_HUB_WIDGET_SCRIPT_ID,
  REPUTATION_HUB_WIDGET_URL,
} from "../../lib/reputationHubReviews";

function ensureReviewWidgetScript() {
  if (document.getElementById(REPUTATION_HUB_WIDGET_SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = REPUTATION_HUB_WIDGET_SCRIPT_ID;
  script.src = REPUTATION_HUB_WIDGET_SCRIPT;
  script.async = true;
  document.body.appendChild(script);
}

/** Sitewide Google reviews — live ReputationHub widget (script sizes iframe). */
export default function ReviewsSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    ensureReviewWidgetScript();
  }, [pathname]);

  return (
    <section className="home-rev" data-screen-label="Reviews">
      <div className="home-rev-inner">
        <iframe
          key={pathname}
          className="lc_reviews_widget home-rev-frame"
          src={REPUTATION_HUB_WIDGET_URL}
          title="Google reviews for Montfort Real Estate"
          loading="eager"
          scrolling="no"
          frameBorder={0}
          referrerPolicy="no-referrer-when-downgrade"
          style={{ minWidth: "100%", width: "100%" }}
        />
      </div>
    </section>
  );
}
