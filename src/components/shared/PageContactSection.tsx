import PageContactForm from "./PageContactForm";
import "../../styles/contact-section.css";

type PageContactSectionProps = {
  /** Lead topic stored with the submission (also drives the default heading). */
  topic: string;
  /** Override the “Have questions about …?” heading. */
  title?: string;
  /** Short supporting line under the heading. */
  lead?: string;
};

const MAP_SRC =
  "https://www.google.com/maps?q=8+West+126th+Street,+New+York,+NY+10027&output=embed";

const DEFAULT_LEAD =
  "Reach out for buyer representation, listing strategy, or a confidential valuation with Stanley Montfort.";

/** Soften topic casing for the contact headline (“Harlem Brownstones” → “… Harlem brownstones?”). */
function questionsAbout(topic: string): string {
  const soft = topic
    .replace(/\bCo\s*Ops\b/gi, "co-ops")
    .replace(/\bCoownership\b/gi, "co-ownership")
    .replace(/\bCo\s*Ownership\b/gi, "co-ownership")
    .replace(/\bBrownstones\b/g, "brownstones")
    .replace(/\bTownhouses\b/g, "townhouses")
    .replace(/\bCondos\b/g, "condos")
    .replace(/\bSROs\b/gi, "SROs");
  return `Have questions about ${soft}?`;
}

/**
 * Neighborhood / property-type contact strip: heading, lead, form, and map.
 * Same layout on every page so visitors always know how to reach Stanley.
 */
export default function PageContactSection({
  topic,
  title,
  lead = DEFAULT_LEAD,
}: PageContactSectionProps) {
  return (
    <section className="contact-section" data-screen-label="Contact">
      <div className="contact-inner">
        <div data-reveal="" className="contact-copy">
          <h2>{title ?? questionsAbout(topic)}</h2>
          {lead ? <p className="contact-lead">{lead}</p> : null}
          <PageContactForm topic={topic} />
        </div>
        <div data-reveal="" className="contact-map">
          <iframe
            title="Montfort Real Estate on Google Maps"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="contact-map-veil" />
        </div>
      </div>
    </section>
  );
}
