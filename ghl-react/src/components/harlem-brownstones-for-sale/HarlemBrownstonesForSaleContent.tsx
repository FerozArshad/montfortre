import { useEffect, useState } from "react";
import { LISTING_AGENT } from "../../data/listings";
import "../../styles/harlem-brownstones-for-sale.css";

const STORAGE_KEY = "montfort-hbfs-unlocked";
const IDX_SRC = "https://stanley.olridx.com/Search/Sales#109591";

function readUnlocked(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function writeUnlocked(): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }
}

export default function HarlemBrownstonesForSaleContent() {
  const [unlocked, setUnlocked] = useState(readUnlocked);
  const [gateOpen, setGateOpen] = useState(() => !readUnlocked());
  const [embed, setEmbed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setEmbed(window.location.hostname === "montfortre.com");
  }, []);

  useEffect(() => {
    if (unlocked || gateOpen) return;
    const t = window.setTimeout(() => setGateOpen(true), 400);
    return () => window.clearTimeout(t);
  }, [unlocked, gateOpen]);

  useEffect(() => {
    if (!gateOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && unlocked) setGateOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [gateOpen, unlocked]);

  const unlock = () => {
    writeUnlocked();
    setUnlocked(true);
    setSubmitted(true);
    window.setTimeout(() => setGateOpen(false), 900);
  };

  return (
    <div className="hbfs-root">
      <section className="hbfs-hero" data-screen-label="Harlem brownstones for sale hero">
        <img
          className="hbfs-hero-photo"
          src="/redesign-assets/hoods/harlem-brownstones.webp"
          alt=""
          aria-hidden="true"
        />
        <div className="hbfs-hero-shade" />
        <div className="hbfs-hero-inner">
          <nav className="hbfs-crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/harlem/">Harlem</a>
            <span aria-hidden="true">/</span>
            <span>Brownstones For Sale</span>
          </nav>
          <p className="hbfs-brand">Montfort Real Estate</p>
          <h1>Scroll down to see exclusive Harlem Brownstones For Sale</h1>
          <p className="hbfs-lead">See exclusive listings — live Harlem brownstone inventory from OLR IDX.</p>
          <a href="#listings" className="hbfs-hero-cta">
            View listings
          </a>
        </div>
      </section>

      <section id="listings" className="hbfs-listings" data-screen-label="Harlem brownstone listings">
        <div className="hbfs-listings-inner">
          <div className="hbfs-kicker">
            <span className="hbfs-kicker-line" aria-hidden="true" />
            <span>Exclusive inventory</span>
          </div>
          <h2>Harlem brownstones for sale</h2>
          <p className="hbfs-listings-lead">
            Live search results filtered for Harlem brownstone opportunities. Submit the access form to unlock this
            board.
          </p>

          {!unlocked ? (
            <div className="hbfs-locked">
              <p>Listings are locked until you request instant access.</p>
              <button type="button" className="hbfs-btn" onClick={() => setGateOpen(true)}>
                Get Instant Access
              </button>
            </div>
          ) : embed ? (
            <iframe
              className="hbfs-frame"
              src={IDX_SRC}
              title="Harlem Brownstones For Sale"
              scrolling="yes"
              loading="lazy"
            />
          ) : (
            <div className="hbfs-fallback">
              <p>
                This board embeds live OLR IDX search. OLR only allows the iframe on montfortre.com, so it stays blank
                on localhost and preview. Open the search to browse Harlem listings now.
              </p>
              <a href={IDX_SRC} target="_blank" rel="noopener noreferrer" className="hbfs-btn">
                Open live listings
              </a>
            </div>
          )}

          {unlocked ? (
            <p className="hbfs-footnote">
              Live listing data provided by OLR IDX. Need help?{" "}
              <a href="mailto:sm@montfortre.com">Email Stanley</a> or call{" "}
              <a href="tel:646-970-1078">(646) 970-1078</a>.
            </p>
          ) : null}
        </div>
      </section>

      {gateOpen ? (
        <div
          className="hbfs-gate"
          role="dialog"
          aria-modal="true"
          aria-labelledby="hbfs-gate-title"
          onClick={() => {
            if (unlocked) setGateOpen(false);
          }}
        >
          <div className="hbfs-gate-card" onClick={(e) => e.stopPropagation()}>
            {unlocked ? (
              <button
                type="button"
                className="hbfs-gate-close"
                onClick={() => setGateOpen(false)}
                aria-label="Close"
              >
                Close
              </button>
            ) : null}

            <div className="hbfs-gate-portrait">
              <img src={LISTING_AGENT.photo} alt="" width={120} height={120} />
            </div>
            <p className="hbfs-gate-eyebrow">Get Instant Access</p>
            <h2 id="hbfs-gate-title">Harlem Brownstones</h2>
            <p className="hbfs-gate-body">
              Prices in Harlem are still about 10% lower from it&apos;s all time high, take advantage while these
              opportunities still last.
            </p>

            {submitted && unlocked ? (
              <p className="hbfs-gate-thanks" role="status">
                Access unlocked — scroll to view exclusive listings.
              </p>
            ) : (
              <form
                className="hbfs-gate-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  unlock();
                }}
              >
                <div className="hbfs-gate-grid">
                  <label className="hbfs-field">
                    <span>First Name *</span>
                    <input name="firstName" type="text" required autoComplete="given-name" />
                  </label>
                  <label className="hbfs-field">
                    <span>Last Name *</span>
                    <input name="lastName" type="text" required autoComplete="family-name" />
                  </label>
                  <label className="hbfs-field">
                    <span>Email *</span>
                    <input name="email" type="email" required autoComplete="email" />
                  </label>
                  <label className="hbfs-field">
                    <span>Phone *</span>
                    <input name="phone" type="tel" required autoComplete="tel" />
                  </label>
                </div>
                <button type="submit" className="hbfs-btn hbfs-btn--block">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
