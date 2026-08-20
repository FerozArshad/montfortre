import { useRef } from "react";
import "../../styles/home-reviews.css";
import useReputationIframeHeight from "../../hooks/useReputationIframeHeight";
import { REPUTATION_HUB_WIDGET_URL } from "../../lib/reputationHubReviews";

/** Sitewide Google reviews — ReputationHub iframe only (widget owns rating + list UI). */
export default function ReviewsSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeHeight = useReputationIframeHeight(iframeRef);

  return (
    <section className="home-rev" data-screen-label="Reviews">
      <div className="home-rev-inner">
        <iframe
          ref={iframeRef}
          className="home-rev-frame"
          src={REPUTATION_HUB_WIDGET_URL}
          title="Google reviews for Montfort Real Estate"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ height: `${iframeHeight}px` }}
        />
      </div>
    </section>
  );
}
