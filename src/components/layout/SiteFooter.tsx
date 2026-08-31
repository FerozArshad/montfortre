import "../../styles/site-footer.css";

const SERVICES = [
  ["NYC Buyer's Agent", "/nyc-buyers-agent-service/"],
  ["NYC Listing Agent", "/nyc-listing-agent-service/"],
  ["NYC Multifamily Real Estate Agent", "/nyc-multifamily-real-estate-agent-service/"],
  ["NYC Home Valuation", "/home-valuation/"],
  ["NYC Mortgage Calculator", "/mortgage-calculator/"],
] as const;

const NEIGHBORHOODS = [
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
] as const;

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-cols">
        <div>
          <div className="site-footer-heading">Realtor Services</div>
          <div className="site-footer-list">
            {SERVICES.map(([label, href]) => (
              <a key={href} href={href} className="site-footer-link">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="site-footer-heading">Neighborhoods</div>
          <div className="site-footer-list">
            {NEIGHBORHOODS.map(([label, href]) => (
              <a key={href} href={href} className="site-footer-link">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="site-footer-heading">About</div>
          <div className="site-footer-list">
            <a href="/stanley-montfort/" className="site-footer-link">
              Stanley Montfort
            </a>
            <a href="https://calendly.com/montfort" target="_blank" rel="noopener noreferrer" className="site-footer-link">
              Contact
            </a>
            <a href="/success-stories/" className="site-footer-link">
              Success Stories
            </a>
            <a href="/blog/" className="site-footer-link">
              Resources
            </a>
          </div>
        </div>

        <div className="site-footer-brand">
          <div className="site-footer-social">
            <a href="https://www.facebook.com/montfortrealestate" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="site-footer-social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M14 9h3V5.5h-3c-2.2 0-3.8 1.7-3.8 3.9V11H7.5v3.5h2.7V22h3.6v-7.5h2.7l.5-3.5h-3.2V9.6c0-.4.3-.6.7-.6z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@montfortrealestate6984" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="site-footer-social-btn">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.3-3.8.3-3.8s0-2.5-.3-3.8zM10 15V9l5.2 3z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/stanleymontfort/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="site-footer-social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.9" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.9" />
                <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
              </svg>
            </a>
          </div>
          <img className="site-footer-rebny" src="/redesign-assets/rebny.webp" alt="REBNY, Real Estate Board of New York" />
        </div>
      </div>

      <div className="site-footer-contact">
        <a href="/" className="site-footer-logo">
          <img
            className="site-footer-logo-img"
            src="/redesign-assets/logo-transparency-black.png"
            alt="Montfort Real Estate"
          />
        </a>
        <div className="site-footer-phone">
          <div>
            <span className="site-footer-label">Phone:</span>{" "}
            <a href="tel:+16469701078" className="site-footer-accent">
              1-646-970-1078
            </a>
          </div>
          <div className="site-footer-phone-gap">
            <span className="site-footer-label">Address:</span>
            <br />
            8 West 126th Street, New York, NY 10027
          </div>
        </div>
        <div className="site-footer-email">
          <span className="site-footer-label">Email:</span>
          <br />
          <a href="mailto:sm@montfortre.com" className="site-footer-accent">
            sm@montfortre.com
          </a>
        </div>
      </div>

      <div className="site-footer-legal">
        <span className="site-footer-legal-links">
          <a href="/privacy-policy/">Privacy Policy</a>
          <span className="site-footer-legal-sep">|</span>
          <a href="/sitemap/">Sitemap</a>
        </span>
        <div className="site-footer-copy">© 2026 Montfort Real Estate LLC. All rights reserved.</div>
      </div>
    </footer>
  );
}
