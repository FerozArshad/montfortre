import { FormEvent, useState } from "react";
import ContactSection from "../shared/ContactSection";
import HeroGoogleRating from "../shared/HeroGoogleRating";
import PromisesBar from "../shared/PromisesBar";
import ReviewsSection from "../shared/ReviewsSection";
import { submitLead } from "../../lib/cms/leads";
import {
  hasLeadErrors,
  leadValidationMessage,
  type LeadFieldErrors,
  validateLeadFieldsAsync,
} from "../../lib/leadValidation";
import { readLeadHoneypot } from "../../lib/leadFormSecurity";
import { useLeadFormTurnstile } from "../../hooks/useLeadFormTurnstile";
import LeadFormHoneypot from "../shared/LeadFormHoneypot";
import LeadFormTurnstile from "../shared/LeadFormTurnstile";
import "../../styles/form-status.css";
import "../../styles/nyc-brownstone-buyer-access.css";
import "../../styles/brownstone-violation-assessment.css";

const BOROUGHS = ["Brooklyn", "Manhattan", "Queens", "Bronx", "Staten Island"] as const;

type Step = "form" | "confirm" | "analyzing" | "preview" | "unlock" | "done";

const WHAT_YOU_GET = [
  {
    title: "Live HPD & DOB violation scan",
    copy: "Surface open and historical violation signals — Class A/B/C severity cues, registration issues, and stale alteration filings before you tour.",
  },
  {
    title: "Property Intelligence Grade",
    copy: "A clear grade that weighs public-record consistency, open jobs, tax profile, and zoning context so you know if a showing is worth your time.",
  },
  {
    title: "Tax, zoning & transit context",
    copy: "Compare tax class signals, FAR/zoning restrictions, landmark overlays, and transit access against nearby similar townhouses.",
  },
  {
    title: "Record consistency check",
    copy: "Cross-check unit counts, square footage, and use across PLUTO, DOF, and HPD so discrepancies show up early — not after attorney review.",
  },
] as const;

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Enter the address",
    copy: "Paste any NYC brownstone, townhouse, or 1–4 family address from a listing email or broker sheet.",
  },
  {
    step: "02",
    title: "Confirm the property",
    copy: "We confirm borough and address before screening available public-record databases.",
  },
  {
    step: "03",
    title: "See what’s worth reviewing",
    copy: "Get a preliminary screening of violations, open DOB jobs, taxes, zoning, and record consistency.",
  },
  {
    step: "04",
    title: "Unlock Stanley’s read",
    copy: "Share contact details to receive the free property-intelligence follow-up before you write an offer.",
  },
] as const;

const SCREENING_CHECKS = [
  "Property Records",
  "DOB Violations",
  "HPD Violations",
  "Open DOB Jobs",
  "Tax Comparison",
  "Zoning & Transit",
  "Landmark Status",
  "Flood / Resiliency",
] as const;

const DATA_SOURCES = ["HPD Online", "DOB BIS", "ZoLa / PLUTO", "DOF Tax", "ACRIS signals"] as const;

function fieldClass(base: string, invalid: boolean): string {
  return `${base}${invalid ? " form-field--invalid" : ""}`;
}

function locationLabel(address: string, borough: string, zip: string): string {
  return [address, borough, zip ? `NY ${zip}` : ""].filter(Boolean).join(", ");
}

export default function BrownstoneViolationAssessmentContent() {
  const [step, setStep] = useState<Step>("form");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [address, setAddress] = useState("");
  const [borough, setBorough] = useState("Brooklyn");
  const [zip, setZip] = useState("");
  const [addressError, setAddressError] = useState("");
  const [boroughError, setBoroughError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<LeadFieldErrors>({});
  const turnstile = useLeadFormTurnstile();

  function startGrade(e: FormEvent) {
    e.preventDefault();
    const nextAddressError = address.trim() ? "" : "Street address is required.";
    const nextBoroughError = borough ? "" : "Select a borough.";
    setAddressError(nextAddressError);
    setBoroughError(nextBoroughError);
    setError("");
    if (nextAddressError || nextBoroughError) return;
    setStep("confirm");
  }

  function runAnalysis() {
    setStep("analyzing");
    window.setTimeout(() => setStep("preview"), 1600);
  }

  async function unlockReport(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    const nextErrors = await validateLeadFieldsAsync({
      firstName,
      lastName,
      email,
      phone,
      requireMessage: false,
    });
    setFieldErrors(nextErrors);
    if (hasLeadErrors(nextErrors)) {
      setError(leadValidationMessage(nextErrors) || "Please fix the highlighted fields.");
      return;
    }

    const place = locationLabel(address.trim(), borough, zip.trim());
    const message = `Brownstone Violation Assessment unlock request — ${place}`;

    setBusy(true);
    setError("");
    try {
      await submitLead({
        firstName,
        lastName,
        email,
        phone,
        message,
        formType: "other",
        sourcePage: "/brownstone-violation-assessment/",
        meta: {
          intent: "brownstone-grade",
          form_label: "brownstone-grade-unlock",
          address: address.trim(),
          borough,
          zip: zip.trim(),
        },
        honeypot: readLeadHoneypot(data),
        turnstileToken: turnstile.requireToken(),
      });
      setFieldErrors({});
      form.reset();
      turnstile.resetTurnstile();
      setStep("done");
    } catch (err) {
      turnstile.resetTurnstile();
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setBusy(false);
    }
  }

  const place = locationLabel(address.trim(), borough, zip.trim());

  return (
    <>
      <section className="nba-hero" data-screen-label="Violation assessment hero">
        <div className="nba-hero-glow" aria-hidden="true" />
        <div className="nba-hero-inner nba-hero-inner--split">
          <div className="nba-hero-copy">
            <p className="nba-badge">Brownstone Violation Assessment</p>
            <h1>
              Grade That Brownstone —{" "}
              <span className="nba-gold">know what public records reveal before you offer</span>
            </h1>
            <p className="nba-lead">
              Paste any NYC brownstone, townhouse, or 1–4 family address. Screen DOB and HPD violation signals, open
              jobs, tax profile, zoning context, transit access, and record consistency — then unlock Stanley&apos;s
              free property-intelligence read before inspections or attorney retainers.
            </p>
            <div className="nba-hero-ctas">
              <a href="#grade-form" className="nba-btn nba-btn--primary">
                Grade this property
              </a>
              <a href="tel:+16469701078" className="nba-btn nba-btn--ghost">
                Call (646) 970-1078
              </a>
            </div>
            <p className="nba-trust">Free screening · No credit card · Public-record intelligence in ~60s</p>
          </div>
          <div className="nba-hero-media">
            <div className="nba-hero-frame">
              <img
                src="/redesign-assets/services/buying-a-brownstone-nyc.png"
                alt="NYC brownstone public-record screening"
                width={720}
                height={576}
                loading="eager"
              />
            </div>
            <HeroGoogleRating prefix="nba" />
          </div>
        </div>
      </section>

      <PromisesBar variant="light" screenLabel="Client promises" />

      <section className="bsg-grade" id="grade-form" data-screen-label="Grade form">
        <div className="bsg-grade-inner">
          <div className="bsg-grade-copy">
            <p className="bsg-kicker">Free NYC property intelligence</p>
            <h2>Decode the address in under a minute</h2>
            <p>
              Most buyers discover violations at a $750–$1,000 inspection — after they&apos;re already emotionally (and
              contractually) invested. Grade the brownstone first using available NYC public records, then decide
              whether a showing is worth it.
            </p>
            <ul className="bsg-source-list" aria-label="Public data sources">
              {DATA_SOURCES.map((src) => (
                <li key={src}>{src}</li>
              ))}
            </ul>
          </div>

          <div className="bsg-form-card">
            {step === "form" || step === "analyzing" ? (
              <>
                <div className="bsg-form-title-row">
                  <span className="bsg-form-icon" aria-hidden="true">
                    ⌂
                  </span>
                  <h2 className="bsg-form-title">Property intelligence input form</h2>
                </div>
                <form className="bsg-form" onSubmit={startGrade} noValidate>
                  <div>
                    <label htmlFor="bsg-address">Street Address *</label>
                    <input
                      id="bsg-address"
                      name="address"
                      type="text"
                      required
                      autoComplete="street-address"
                      placeholder="e.g. 375 Gates Avenue or 148 W 121st St"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className={fieldClass("bsg-field", Boolean(addressError))}
                      aria-invalid={Boolean(addressError)}
                      disabled={step === "analyzing"}
                    />
                    {addressError ? <p className="form-field-hint">{addressError}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="bsg-borough">Borough (Required) *</label>
                    <select
                      id="bsg-borough"
                      name="borough"
                      required
                      value={borough}
                      onChange={(e) => setBorough(e.target.value)}
                      className={fieldClass("bsg-field", Boolean(boroughError))}
                      aria-invalid={Boolean(boroughError)}
                      disabled={step === "analyzing"}
                    >
                      {BOROUGHS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                    {boroughError ? <p className="form-field-hint">{boroughError}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="bsg-zip">ZIP Code (Optional)</label>
                    <input
                      id="bsg-zip"
                      name="zip"
                      type="text"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      className="bsg-field"
                      placeholder="e.g. 11216"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      disabled={step === "analyzing"}
                    />
                  </div>
                  <button type="submit" className="bsg-submit" disabled={step === "analyzing"}>
                    {step === "analyzing" ? "Analyzing public records…" : "Grade this property"}
                  </button>
                  <div className="bsg-form-trust">
                    <span>✓ Free report · No credit card</span>
                    <span>Public-record intelligence in ~60s</span>
                  </div>
                </form>
              </>
            ) : null}

            {step === "preview" ? (
              <div className="bsg-preview">
                <p className="bsg-preview-kicker">Preliminary public record screening complete</p>
                <h3 className="bsg-preview-address">{place}</h3>
                <p className="bsg-preview-lead">
                  We have compiled available NYC agency signals for this property. Unlock Stanley&apos;s free follow-up
                  for the Property Intelligence Grade and what to investigate next.
                </p>
                <ul className="bsg-check-grid">
                  {SCREENING_CHECKS.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      <strong>{item}</strong>
                      <em>Checked</em>
                    </li>
                  ))}
                </ul>
                <button type="button" className="bsg-submit" onClick={() => setStep("unlock")}>
                  Unlock free report now
                </button>
                <p className="bsg-form-trust bsg-form-trust--center">
                  Free · Instant access · No credit card required
                </p>
              </div>
            ) : null}

            {step === "unlock" ? (
              <>
                <div className="bsg-form-title-row">
                  <h2 className="bsg-form-title">Unlock your free report</h2>
                </div>
                <p className="bsg-form-lead">
                  Enter your contact details to receive Stanley&apos;s read on <strong>{place}</strong>.
                </p>
                <form className="bsg-form" onSubmit={unlockReport} noValidate>
                  <LeadFormHoneypot />
                  <div className="bsg-names">
                    <div>
                      <label htmlFor="bsg-first">First name *</label>
                      <input
                        id="bsg-first"
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        className={fieldClass("bsg-field", Boolean(fieldErrors.firstName))}
                        aria-invalid={Boolean(fieldErrors.firstName)}
                      />
                      {fieldErrors.firstName ? (
                        <p className="form-field-hint">{fieldErrors.firstName}</p>
                      ) : null}
                    </div>
                    <div>
                      <label htmlFor="bsg-last">Last name *</label>
                      <input
                        id="bsg-last"
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        className={fieldClass("bsg-field", Boolean(fieldErrors.lastName))}
                        aria-invalid={Boolean(fieldErrors.lastName)}
                      />
                      {fieldErrors.lastName ? (
                        <p className="form-field-hint">{fieldErrors.lastName}</p>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="bsg-email">Email *</label>
                    <input
                      id="bsg-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={fieldClass("bsg-field", Boolean(fieldErrors.email))}
                      aria-invalid={Boolean(fieldErrors.email)}
                    />
                    {fieldErrors.email ? <p className="form-field-hint">{fieldErrors.email}</p> : null}
                  </div>
                  <div>
                    <label htmlFor="bsg-phone">Phone *</label>
                    <input
                      id="bsg-phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      className={fieldClass("bsg-field", Boolean(fieldErrors.phone))}
                      aria-invalid={Boolean(fieldErrors.phone)}
                    />
                    {fieldErrors.phone ? <p className="form-field-hint">{fieldErrors.phone}</p> : null}
                  </div>
                  {error ? (
                    <div className="bsg-error" role="alert">
                      {error}
                    </div>
                  ) : null}
                  {turnstile.required ? (
                    <LeadFormTurnstile
                      key={turnstile.resetKey}
                      siteKey={turnstile.siteKey}
                      onToken={turnstile.setToken}
                      onExpire={turnstile.resetTurnstile}
                    />
                  ) : null}
                  <button
                    type="submit"
                    className="bsg-submit"
                    disabled={busy || (turnstile.required && !turnstile.token)}
                  >
                    {busy ? "Submitting…" : "Send my free report"}
                  </button>
                  <button
                    type="button"
                    className="bsg-secondary"
                    onClick={() => {
                      setError("");
                      setStep("preview");
                    }}
                  >
                    Back
                  </button>
                </form>
              </>
            ) : null}

            {step === "done" ? (
              <p className="bsg-success" role="status">
                Thanks — Stanley will review public-record signals for <strong>{place}</strong> and follow up with your
                report.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {step === "confirm" ? (
        <div className="bsg-modal" role="dialog" aria-modal="true" aria-labelledby="bsg-confirm-title">
          <div className="bsg-modal-card">
            <h3 id="bsg-confirm-title">Is this the correct NYC property?</h3>
            <p>Please confirm the subject property address and borough before we access public record databases.</p>
            <p className="bsg-modal-address">{place}</p>
            <button type="button" className="bsg-submit" onClick={runAnalysis}>
              Yes, confirm &amp; grade property
            </button>
            <button type="button" className="bsg-secondary" onClick={() => setStep("form")}>
              Select different address
            </button>
          </div>
        </div>
      ) : null}

      <section className="bsg-section bsg-section--light" data-screen-label="What you get">
        <div className="bsg-section-inner">
          <p className="bsg-kicker">What you get</p>
          <h2>Everything you need before you make an offer — in one place</h2>
          <p className="bsg-section-lead">
            Inspired by tools like{" "}
            <a href="https://www.brownstonedna.com/" target="_blank" rel="noopener noreferrer">
              BrownstoneDNA
            </a>
            , this Montfort screening focuses on the public-record risks buyers miss until inspection day — then pairs
            it with Stanley&apos;s advisory follow-up.
          </p>
          <div className="bsg-reveal-grid bsg-reveal-grid--4">
            {WHAT_YOU_GET.map((item) => (
              <article key={item.title} className="bsg-reveal-card bsg-reveal-card--light">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bsg-section" data-screen-label="How it works">
        <div className="bsg-section-inner">
          <p className="bsg-kicker">How it works</p>
          <h2>From address to clear next step</h2>
          <p className="bsg-section-lead">Four steps. Under a minute. Bid with clearer eyes.</p>
          <ol className="bsg-steps">
            {HOW_IT_WORKS.map((item) => (
              <li key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bsg-section bsg-section--light" data-screen-label="What public data can reveal">
        <div className="bsg-section-inner">
          <p className="bsg-kicker">Public records</p>
          <h2>What can NYC public data reveal about a property?</h2>
          <p className="bsg-section-lead">
            Enter any NYC address above for a screening of DOB, HPD, PLUTO, and tax databases.
          </p>
          <div className="bsg-reveal-grid">
            <article className="bsg-reveal-card bsg-reveal-card--light">
              <h3>DOB &amp; HPD Violations</h3>
              <p>
                Identify open building violations, hazardous Class C conditions, and stale alteration filings that
                haven&apos;t been signed off for years.
              </p>
            </article>
            <article className="bsg-reveal-card bsg-reveal-card--light">
              <h3>Tax &amp; Zoning Profile</h3>
              <p>
                Compare annual property tax bills against nearby similar townhouses and inspect zoning restrictions,
                FAR, and historic district rules.
              </p>
            </article>
            <article className="bsg-reveal-card bsg-reveal-card--light">
              <h3>Record Consistency</h3>
              <p>
                Cross-verify unit counts, square footage, and property use across PLUTO, DOF, and HPD records to
                identify discrepancies early.
              </p>
            </article>
          </div>
          <div className="bsg-disclaimer bsg-disclaimer--light">
            <strong>Disclaimer &amp; Public Data Transparency</strong>
            <p>
              Grade That Brownstone is an informational screening tool based on available public records and other
              objective data sources (DOB, HPD, PLUTO, DOF, NYPD). Public databases can be delayed, incomplete,
              inaccurate, or inconsistently keyed.
            </p>
            <p>
              This report should not be relied upon as a substitute for attorney review, title review, physical home
              inspection, architect review, engineering review, appraisal, lender underwriting, tax advice, or formal
              due diligence.
            </p>
            <p>
              The Property Intelligence Grade is NOT an opinion of market value and is NOT an automated investment
              recommendation or financial advice.
            </p>
          </div>
        </div>
      </section>

      <ReviewsSection heading="What clients say" />
      <ContactSection />
    </>
  );
}
