import { useEffect, useState } from "react";
import useStickyHeader from "../hooks/useStickyHeader";
import useTouchDropdowns from "../hooks/useTouchDropdowns";
import "../styles/mobile-header.css";

interface MenuLink {
  label: string;
  href: string;
  external?: boolean;
}

interface MenuSection {
  label: string;
  href: string;
  links?: MenuLink[];
  external?: boolean;
}

const MENU: MenuSection[] = [
  {
    label: "Services",
    href: "/services/",
    links: [
      { label: "NYC Buyer\u2019s Agent", href: "/nyc-buyers-agent-service/" },
      { label: "NYC Listing Agent", href: "/nyc-listing-agent-service/" },
      { label: "NYC Multifamily Agent", href: "/nyc-multifamily-real-estate-agent-service/" },
      { label: "Free Home Valuation", href: "/whats-my-home-worth/" },
      { label: "Mortgage Calculator", href: "/mortgage-calculator/" },
    ],
  },
  {
    label: "Neighborhoods",
    href: "/neighborhoods/",
    links: [
      { label: "Harlem Realtor", href: "/harlem/" },
      { label: "Upper West Side Realtor", href: "/upper-west-side/" },
      { label: "Upper East Side Realtor", href: "/upper-east-side/" },
      { label: "Chelsea Realtor", href: "/chelsea/" },
      { label: "Downtown Brooklyn Realtor", href: "/downtown-brooklyn/" },
      { label: "Dumbo Realtor", href: "/dumbo/" },
      { label: "Brooklyn Heights Realtor", href: "/brooklyn-heights/" },
      { label: "Bedford Stuyvesant Realtor", href: "/bedford-stuyvesant/" },
      { label: "Williamsburg Realtor", href: "/williamsburg/" },
      { label: "Crown Heights Realtor", href: "/crown-heights/" },
      { label: "Park Slope Realtor", href: "/park-slope/" },
      { label: "View all neighborhoods", href: "/neighborhoods/" },
    ],
  },
  {
    label: "Listings",
    href: "/idx-sales/",
    links: [
      { label: "Homes For Sale", href: "/idx-sales/" },
      { label: "Rentals", href: "/idx-rentals/" },
      { label: "Customer Login", href: "https://stanley.olridx.com/#", external: true },
    ],
  },
  { label: "Success Stories", href: "/success-stories/" },
  {
    label: "About",
    href: "/about-us/",
    links: [
      { label: "About Us", href: "/about-us/" },
      { label: "Stanley Montfort", href: "/stanley-montfort/" },
    ],
  },
  { label: "Resources", href: "/blog/" },
  { label: "Contact", href: "https://calendly.com/montfort", external: true },
];

const LOGO_URL =
  "https://assets.agentfire3.com/uploads/sites/312/2026/07/Logo-Transparency-black.png";

function Chevron() {
  return (
    <svg className="mfr-chev" width="13" height="13" viewBox="0 0 12 12" fill="none">
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

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useStickyHeader();
  useTouchDropdowns();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <div className="mfr-mobile-header" data-menu-open={open ? "true" : undefined}>
      <div className="mfr-bar">
        <a href="/" className="mfr-bar-logo" aria-label="Montfort Real Estate — home">
          <img src={LOGO_URL} alt="Montfort Real Estate" width="60" height="42" />
        </a>

        <div className="mfr-bar-actions">
          <a href="tel:+1-646-970-1078" className="mfr-bar-phone">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="mfr-phone-text">(646) 970-1078</span>
          </a>

          <button
            type="button"
            className="mfr-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => (open ? close() : setOpen(true))}
          >
            <span className="mfr-burger-bar" />
            <span className="mfr-burger-bar" />
            <span className="mfr-burger-bar" />
          </button>
        </div>
      </div>

      <div className="mfr-menu-panel" aria-hidden={!open}>
        <nav className="mfr-menu-nav" aria-label="Mobile">
          {MENU.map((section) => {
            const isOpen = expanded === section.label;
            return (
              <div key={section.label} className={["mfr-acc-item", isOpen ? "is-open" : ""].filter(Boolean).join(" ")}>
                <div className="mfr-acc-row">
                  <a
                    href={section.href}
                    className="mfr-acc-link"
                    onClick={close}
                    {...(section.external ? { target: "_blank", rel: "noopener" } : {})}
                  >
                    {section.label}
                  </a>
                  {section.links && (
                    <button
                      type="button"
                      className="mfr-acc-toggle"
                      aria-label={`${isOpen ? "Collapse" : "Expand"} ${section.label}`}
                      aria-expanded={isOpen}
                      onClick={() => setExpanded(isOpen ? null : section.label)}
                    >
                      <Chevron />
                    </button>
                  )}
                </div>

                {section.links && (
                  <div
                    className="mfr-acc-panel"
                    style={isOpen ? { maxHeight: section.links.length * 56 + 16 } : undefined}
                  >
                    <div className="mfr-acc-panel-inner">
                      {section.links.map((link) => (
                        <a
                          key={link.label + link.href}
                          href={link.href}
                          className="mfr-acc-sub"
                          onClick={close}
                          {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <a href="tel:+1-646-970-1078" className="mfr-menu-call" onClick={close}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (646) 970-1078
          </a>
          <div className="mfr-menu-hours">Mon-Sat 8AM-7PM</div>
        </nav>
      </div>
    </div>
  );
}
