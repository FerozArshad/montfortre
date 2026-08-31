import "../../styles/desktop-nav.css";

function ChevronIcon() {
  return (
    <svg className="mnav-chev" width="11" height="11" viewBox="0 0 12 12" fill="none">
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
    <svg className="mnav-arrow" width="16" height="12" viewBox="0 0 16 12" fill="none">
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

const HOOD_LINKS = [
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
] as const;

export default function DesktopHeader() {
  return (
    <header className="dnav">
      <div className="dnav-inner">
        <a href="/" className="dnav-logo">
          <div className="dnav-logo-mark" role="img" aria-label="Montfort Real Estate" />
        </a>

        <nav className="dnav-nav">
          <div className="mnav-item">
            <a href="/services/" className="mnav-top">
              Services <ChevronIcon />
            </a>
            <div className="mnav-drop mnav-drop--wide">
              <a href="/nyc-buyers-agent-service/" className="mnav-link">
                NYC Buyer&apos;s Agent
              </a>
              <a href="/nyc-listing-agent-service/" className="mnav-link">
                NYC Listing Agent
              </a>
              <a href="/nyc-multifamily-real-estate-agent-service/" className="mnav-link">
                NYC Multifamily Agent
              </a>
              <a href="/whats-my-home-worth/" className="mnav-link">
                Free Home Valuation
              </a>
              <a href="/mortgage-calculator/" className="mnav-link">
                Mortgage Calculator
              </a>
            </div>
          </div>

          <div className="mnav-item">
            <a href="/neighborhoods/" className="mnav-top">
              Neighborhoods <ChevronIcon />
            </a>
            <div className="mnav-drop mnav-drop--wide">
              {HOOD_LINKS.map(([label, href]) => (
                <a key={href} href={href} className="mnav-link mnav-link--hood">
                  {label}
                </a>
              ))}
              <a href="/neighborhoods/" className="mnav-link mnav-link--all">
                View all neighborhoods <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="mnav-item">
            <a href="/current-listings/" className="mnav-top">
              Listings <ChevronIcon />
            </a>
            <div className="mnav-drop mnav-drop--listings">
              <a href="/current-listings/" className="mnav-link">
                Current Listings
              </a>
              <a href="/idx-sales/" className="mnav-link">
                Homes For Sale
              </a>
              <a href="/idx-rentals/" className="mnav-link">
                Rentals
              </a>
              <a href="https://stanley.olridx.com/#" target="_blank" rel="noopener noreferrer" className="mnav-link">
                Customer Login
              </a>
            </div>
          </div>

          <a href="/success-stories/" className="dnav-plain">
            Success Stories
          </a>
          <div className="mnav-item">
            <a href="/about-us/" className="mnav-top">
              About <ChevronIcon />
            </a>
            <div className="mnav-drop mnav-drop--resources">
              <a href="/stanley-montfort/" className="mnav-link">
                Stanley Montfort
              </a>
            </div>
          </div>
          <a href="/blog/" className="dnav-plain">
            Resources
          </a>
          <a href="https://calendly.com/montfort" target="_blank" rel="noopener noreferrer" className="dnav-plain">
            Contact
          </a>
        </nav>

        <a href="tel:+16469701078" className="dnav-phone">
          <svg className="dnav-phone-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="dnav-phone-copy">
            <span className="dnav-phone-num">(646) 970-1078</span>
            <span className="dnav-phone-hours">Open 24 Hours</span>
          </span>
        </a>
      </div>
    </header>
  );
}
