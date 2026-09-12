import GuideDownloadForm from "./GuideDownloadForm";
import "../../styles/home-download.css";

const GUIDE = "15 Costly Mistakes Made When Buying a Brownstone";
const FILE_URL = "/redesign-assets/guides/nyc-brownstone-buyer-mistakes-2026-2027.pdf";
const MAP_EMBED =
  "https://www.google.com/maps?q=8+West+126th+Street,+New+York,+NY+10027&output=embed";
const DIRECTIONS_URL = "https://maps.google.com/?cid=11378470238102062088";

type NeighborhoodMistakesLeadProps = {
  /** Used in body copy so the section feels local to this page. */
  neighborhood: string;
  /** Optional deep link for “brownstone” in the body (defaults to Harlem brownstones). */
  brownstoneHref?: string;
};

/**
 * Bottom-of-page lead magnet matching the home Free Download block:
 * 15 Costly Mistakes form (left) + office map (right).
 * Used on main neighborhood hubs and brownstone/townhouse pages
 * instead of the old market-report social CTA.
 */
export default function NeighborhoodMistakesLead({
  neighborhood,
  brownstoneHref = "/harlem-brownstones/",
}: NeighborhoodMistakesLeadProps) {
  return (
    <section className="home-dl" data-screen-label="15 Costly Mistakes download">
      <div className="home-dl-inner">
        <div data-reveal="" className="home-dl-copy">
          <div className="home-dl-kicker">Free Download</div>
          <h2>15 Costly Mistakes Made When Buying a Brownstone</h2>
          <p className="home-dl-lead">
            Educate yourself on these 15 costly mistakes — the difference between a successful purchase and a
            disastrous one.
          </p>
          <p className="home-dl-body">
            Looking at a{" "}
            <a href={brownstoneHref} className="home-dl-link">
              brownstone
            </a>{" "}
            in {neighborhood}? Taking the time to educate yourself on these 15 costly mistakes can make all the
            difference between a successful purchase and a disastrous one.
          </p>
          <GuideDownloadForm
            guide={`${GUIDE} (${neighborhood})`}
            fileUrl={FILE_URL}
            submitLabel="Download the free guide"
          />
        </div>

        <div data-reveal="" className="home-dl-map">
          <iframe
            title="Montfort Real Estate on Google Maps"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="home-dl-veil" />
          <div className="home-dl-visit">
            <div>
              <div className="home-dl-visit-kicker">Visit our office</div>
              <h3>8 West 126th Street</h3>
              <div className="home-dl-visit-city">New York, NY 10027</div>
            </div>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="home-dl-directions">
              Directions{" "}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
