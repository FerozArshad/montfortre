import "../../styles/contact-section.css";
import PageContactForm from "./PageContactForm";

type ContactSectionProps = {
  /** Optional page-specific heading. */
  title?: string;
  /** Optional supporting line under the heading. */
  lead?: string;
  /** Lead topic stored with the submission. */
  topic?: string;
};

const DEFAULT_TITLE = "Have questions about buying or selling in NYC?";
const DEFAULT_LEAD =
  "Reach out for buyer representation, listing strategy, or a confidential valuation with Stanley Montfort.";

/**
 * Sitewide contact strip — same heading + lead + form + map pattern used on
 * neighborhood pages so visitors always have a clear way to reach Stanley.
 */
export default function ContactSection({
  title = DEFAULT_TITLE,
  lead = DEFAULT_LEAD,
  topic = "General Contact",
}: ContactSectionProps = {}) {
  return (
    <section className="contact-section" data-screen-label="Contact">
      <div className="contact-inner">
        <div data-reveal="" className="contact-copy">
          <h2>{title}</h2>
          {lead ? <p className="contact-lead">{lead}</p> : null}
          <PageContactForm topic={topic} />
        </div>
        <div data-reveal="" className="contact-map">
          <iframe
            title="Montfort Real Estate on Google Maps"
            src="https://www.google.com/maps?q=8+West+126th+Street,+New+York,+NY+10027&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="contact-map-veil" />
          <div className="contact-visit">
            <div>
              <div className="contact-visit-kicker">Visit our office</div>
              <div className="contact-visit-street">8 West 126th Street</div>
              <div className="contact-visit-city">New York, NY 10027</div>
            </div>
            <a
              href="https://maps.google.com/?cid=11378470238102062088"
              target="_blank"
              rel="noopener"
              className="contact-directions"
            >
              Directions{" "}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h9M8 3.5L12.5 8 8 12.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
