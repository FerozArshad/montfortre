import { useEffect, useState } from "react";
import { LISTING_AGENT } from "../../data/listings";
import { submitLead } from "../../lib/cms/leads";
import {
  hasLeadErrors,
  leadValidationMessage,
  type LeadFieldErrors,
  validateLeadFields,
} from "../../lib/leadValidation";
import HeroGoogleRating from "../shared/HeroGoogleRating";
import "../../styles/harlem-brownstones-for-sale.css";
import "../../styles/form-status.css";
import { readLeadHoneypot } from "../../lib/leadFormSecurity";
import { useLeadFormTurnstile } from "../../hooks/useLeadFormTurnstile";
import LeadFormHoneypot from "../shared/LeadFormHoneypot";
import LeadFormTurnstile from "../shared/LeadFormTurnstile";

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
  const [gateError, setGateError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<LeadFieldErrors>({});
  const turnstile = useLeadFormTurnstile();

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

  const unlock = async (form: HTMLFormElement) => {
    const data = new FormData(form);
    const questions = String(data.get("message") || "").trim();
    const payload = {
      firstName: String(data.get("firstName") || "").trim(),
      lastName: String(data.get("lastName") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: questions,
      requireMessage: true,
    };

    const nextErrors = validateLeadFields(payload);
    setFieldErrors(nextErrors);
    if (hasLeadErrors(nextErrors)) {
      setGateError(leadValidationMessage(nextErrors));
      return;
    }

    setGateError("");
    try {
      await submitLead({
        ...payload,
        message: [questions, "Requested access to exclusive Harlem brownstone listings"].filter(Boolean).join("\n\n"),
        formType: "listing-access",
        honeypot: readLeadHoneypot(data),
        turnstileToken: turnstile.requireToken(),
      });
    } catch (error) {
      turnstile.resetTurnstile();
      setGateError(error instanceof Error ? error.message : "We could not save your details.");
      return;
    }

    setFieldErrors({});
    turnstile.resetTurnstile();
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
          <div>
            <HeroGoogleRating prefix="solo" />
          </div>
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
              <a href="tel:+16469701078">(646) 970-1078</a>.
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
                  void unlock(e.currentTarget);
                }}
                noValidate
              >
                <LeadFormHoneypot />
                <div className="hbfs-gate-grid">
                  <label className="hbfs-field">
                    <span>First Name *</span>
                    <input
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      className={fieldErrors.firstName ? "form-field--invalid" : ""}
                      aria-invalid={Boolean(fieldErrors.firstName)}
                    />
                    {fieldErrors.firstName ? <span className="form-field-hint">{fieldErrors.firstName}</span> : null}
                  </label>
                  <label className="hbfs-field">
                    <span>Last Name *</span>
                    <input
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      className={fieldErrors.lastName ? "form-field--invalid" : ""}
                      aria-invalid={Boolean(fieldErrors.lastName)}
                    />
                    {fieldErrors.lastName ? <span className="form-field-hint">{fieldErrors.lastName}</span> : null}
                  </label>
                  <label className="hbfs-field">
                    <span>Email *</span>
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={fieldErrors.email ? "form-field--invalid" : ""}
                      aria-invalid={Boolean(fieldErrors.email)}
                    />
                    {fieldErrors.email ? <span className="form-field-hint">{fieldErrors.email}</span> : null}
                  </label>
                  <label className="hbfs-field">
                    <span>Phone *</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      className={fieldErrors.phone ? "form-field--invalid" : ""}
                      aria-invalid={Boolean(fieldErrors.phone)}
                    />
                    {fieldErrors.phone ? <span className="form-field-hint">{fieldErrors.phone}</span> : null}
                  </label>
                </div>
                <label className="hbfs-field hbfs-field--full">
                  <span>Questions or comments *</span>
                  <textarea
                    name="message"
                    rows={3}
                    className={fieldErrors.message ? "form-field--invalid" : ""}
                    aria-invalid={Boolean(fieldErrors.message)}
                  />
                  {fieldErrors.message ? <span className="form-field-hint">{fieldErrors.message}</span> : null}
                </label>
                {gateError ? (
                  <p className="hbfs-gate-error" role="alert">
                    {gateError}
                  </p>
                ) : null}
                {turnstile.required ? (
                  <LeadFormTurnstile
                    key={turnstile.resetKey}
                    siteKey={turnstile.siteKey}
                    onToken={turnstile.setToken}
                    onExpire={turnstile.resetTurnstile}
                  />
                ) : null}
                <button type="submit" className="hbfs-btn hbfs-btn--block" disabled={turnstile.required && !turnstile.token}>
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
