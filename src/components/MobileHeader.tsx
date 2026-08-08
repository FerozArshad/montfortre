import { useEffect, useState } from "react";
import useTouchDropdowns from "../hooks/useTouchDropdowns";

interface MenuLink {
  label: string;
  href: string;
  external?: boolean;
}

interface MenuSection {
  label: string;
  href: string;
  links?: MenuLink[];
}

/* Mirrors the desktop nav exactly (same labels and hrefs). */
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
      { label: "Harlem", href: "/harlem/" },
      { label: "Upper West Side", href: "/upper-west-side/" },
      { label: "Upper East Side", href: "/upper-east-side/" },
      { label: "Chelsea", href: "/chelsea/" },
      { label: "Downtown Brooklyn", href: "/downtown-brooklyn/" },
      { label: "Dumbo", href: "/dumbo/" },
      { label: "Brooklyn Heights", href: "/brooklyn-heights/" },
      { label: "Bedford-Stuyvesant", href: "/bedford-stuyvesant/" },
      { label: "Williamsburg", href: "/williamsburg/" },
      { label: "Crown Heights", href: "/crown-heights/" },
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
  { label: "About", href: "/about-us/" },
  {
    label: "Resources",
    href: "/blog/",
    links: [
      { label: "About Us", href: "/about-us/" },
      { label: "Stanley Montfort", href: "/stanley-montfort/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

const LOGO_URL =
  "https://assets.agentfire3.com/uploads/sites/312/2026/07/Logo-Transparency-black.png";

const chev = (open: boolean) => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 12 12"
    fill="none"
    style={{
      display: "block",
      transition: "transform .28s cubic-bezier(0.22,0.61,0.36,1)",
      transform: open ? "rotate(180deg)" : "none",
    }}
  >
    <path
      d="M2.5 4.5L6 8l3.5-3.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

/**
 * Mobile header + full-screen slide-in menu, shown only below 1024px
 * (visibility is controlled by src/responsive.css). Rendered once in the
 * shared layout so it appears on every route. The desktop header inside
 * each page's HTML is hidden below 1024px by the same stylesheet.
 */
export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Touch enhancement for the desktop nav dropdowns (tablets without hover).
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
    <div
      className="mfr-mobile-header"
      style={{
        display: "none",
        position: "sticky",
        top: 0,
        zIndex: 200,
        fontFamily: "'DM Sans',system-ui,sans-serif",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          background: "#fff",
          boxShadow: "0 1px 0 rgba(18,16,14,0.1)",
          padding: "12px 16px",
        }}
      >
        <a href="/" aria-label="Montfort Real Estate — home" style={{ display: "flex", alignItems: "center" }}>
          <div
            role="img"
            aria-label="Montfort Real Estate"
            style={{
              height: 42,
              aspectRatio: "3813/2662",
              background: "#113B5F",
              WebkitMask: `url('${LOGO_URL}') center/contain no-repeat`,
              mask: `url('${LOGO_URL}') center/contain no-repeat`,
            }}
          ></div>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <a
            href="tel:+1-646-970-1078"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#0F1729",
              textDecoration: "none",
              padding: "10px 8px",
            }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flex: "0 0 auto", color: "#C98A2C" }}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span
              className="mfr-phone-text"
              style={{
                fontFamily: "'Space Grotesk',system-ui,sans-serif",
                fontSize: 16,
                fontWeight: 700,
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
              }}
            >
              (646) 970-1078
            </span>
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => (open ? close() : setOpen(true))}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              width: 44,
              height: 44,
              background: "transparent",
              border: "1px solid #EAE1BE",
              borderRadius: 10,
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: "#0F1729",
                borderRadius: 2,
                transition: "transform .25s ease, opacity .2s ease",
                transform: open ? "translateY(7px) rotate(45deg)" : "none",
              }}
            ></span>
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: "#0F1729",
                borderRadius: 2,
                transition: "opacity .2s ease",
                opacity: open ? 0 : 1,
              }}
            ></span>
            <span
              style={{
                display: "block",
                width: 20,
                height: 2,
                background: "#0F1729",
                borderRadius: 2,
                transition: "transform .25s ease, opacity .2s ease",
                transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            ></span>
          </button>
        </div>
      </div>

      {/* Full-screen slide-in menu */}
      <div
        aria-hidden={!open}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 190,
          background: "#F9F6E6",
          paddingTop: 68,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform .32s cubic-bezier(0.22,0.61,0.36,1)",
          visibility: open ? "visible" : "hidden",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <nav style={{ padding: "8px 16px 40px" }} aria-label="Mobile">
          {MENU.map((section) => {
            const isOpen = expanded === section.label;
            return (
              <div key={section.label} style={{ borderBottom: "1px solid #EAE1BE" }}>
                <div style={{ display: "flex", alignItems: "stretch" }}>
                  <a
                    href={section.href}
                    onClick={close}
                    style={{
                      flex: "1 1 auto",
                      display: "flex",
                      alignItems: "center",
                      padding: "17px 4px",
                      color: "#0F1729",
                      textDecoration: "none",
                      fontFamily: "'Space Grotesk',system-ui,sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      letterSpacing: "0.11em",
                      textTransform: "uppercase",
                    }}
                  >
                    {section.label}
                  </a>
                  {section.links && (
                    <button
                      type="button"
                      aria-label={`${isOpen ? "Collapse" : "Expand"} ${section.label}`}
                      aria-expanded={isOpen}
                      onClick={() => setExpanded(isOpen ? null : section.label)}
                      style={{
                        flex: "0 0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 52,
                        background: "transparent",
                        border: "none",
                        borderLeft: "1px solid #EAE1BE",
                        color: isOpen ? "#C98A2C" : "#0F1729",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      {chev(isOpen)}
                    </button>
                  )}
                </div>

                {section.links && (
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: isOpen ? section.links.length * 56 + 16 : 0,
                      transition: "max-height .3s cubic-bezier(0.22,0.61,0.36,1)",
                    }}
                  >
                    <div style={{ padding: "2px 0 14px" }}>
                      {section.links.map((link) => (
                        <a
                          key={link.label + link.href}
                          href={link.href}
                          onClick={close}
                          {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
                          style={{
                            display: "block",
                            padding: "13px 16px",
                            color: "#113B5F",
                            textDecoration: "none",
                            fontSize: 14.5,
                            fontWeight: 600,
                            borderRadius: 10,
                          }}
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

          <a
            href="tel:+1-646-970-1078"
            onClick={close}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              margin: "24px 0 0",
              background: "#113B5F",
              color: "#F9F6E6",
              textDecoration: "none",
              fontFamily: "'Space Grotesk',system-ui,sans-serif",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.05em",
              padding: "16px 24px",
              borderRadius: 10,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            (646) 970-1078
          </a>
          <div
            style={{
              textAlign: "center",
              marginTop: 10,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#3B4C5E",
            }}
          >
            Mon-Sat 8AM-7PM
          </div>
        </nav>
      </div>
    </div>
  );
}
