import { FormEvent, useMemo, useState } from "react";
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

const BUDGETS = ["Under $1.5M", "$1.5M–$2.5M", "$2.5M–$4M", "$4M+"] as const;
const AREAS = ["Harlem", "Brooklyn", "UWS / UES", "Flexible NYC"] as const;
const TIMELINES = ["0–3 months", "3–6 months", "6–12 months", "Just exploring"] as const;

type Step = 0 | 1 | 2;

const STEP_META = [
  {
    kicker: "Let's start with the basics",
    title: "Let's start with the basics",
    lead: "Tell me a little about yourself and what you're looking for. This should take about 60 seconds.",
    progress: 8,
  },
  {
    kicker: "Your search criteria",
    title: "What are you shopping for?",
    lead: "Pick the closest fit — Stanley will refine matches from your off-market profile.",
    progress: 45,
  },
  {
    kicker: "Almost done",
    title: "When do you want to buy?",
    lead: "This helps prioritize privately marketed brownstones that fit your timing.",
    progress: 82,
  },
] as const;

function ShieldIcon() {
  return (
    <svg className="nba-match-shield" width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2 4 5v6.5c0 5 3.4 9.4 8 10.5 4.6-1.1 8-5.5 8-10.5V5l-8-3Zm-1.1 14.2-3.4-3.4 1.4-1.4 2 2 4.3-4.3 1.4 1.4-5.7 5.7Z"
      />
    </svg>
  );
}

function fieldClass(invalid: boolean): string {
  return `nba-match-input${invalid ? " form-field--invalid" : ""}`;
}

export default function OffMarketFinderQuiz() {
  const [step, setStep] = useState<Step>(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [area, setArea] = useState("");
  const [timeline, setTimeline] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<LeadFieldErrors>({});
  const [done, setDone] = useState(false);
  const turnstile = useLeadFormTurnstile();

  const meta = STEP_META[step];
  const progress = useMemo(() => meta.progress, [meta]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (step === 0) {
      const nextErrors = await validateLeadFieldsAsync({
        firstName,
        lastName,
        email,
        phone,
        message: "profile",
        requireMessage: false,
      });
      const contactErrors: LeadFieldErrors = {
        firstName: nextErrors.firstName,
        lastName: nextErrors.lastName,
        email: nextErrors.email,
        phone: nextErrors.phone,
      };
      setFieldErrors(contactErrors);
      if (hasLeadErrors(contactErrors)) {
        setError(leadValidationMessage(contactErrors));
        return;
      }
      setError("");
      setStep(1);
      return;
    }

    if (step === 1) {
      if (!budget || !area) {
        setError("Choose a budget range and preferred area to continue.");
        return;
      }
      setError("");
      setStep(2);
      return;
    }

    if (!timeline) {
      setError("Choose a timeline to finish your profile.");
      return;
    }

    setBusy(true);
    setError("");
    try {
      const message = [
        "Off Market Brownstone Finder quiz",
        `Budget: ${budget}`,
        `Area: ${area}`,
        `Timeline: ${timeline}`,
      ].join(" · ");

      await submitLead({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message,
        formType: "other",
        sourcePage: "/nyc-brownstone-buyer-access/",
        meta: {
          intent: "off-market-finder",
          program: "off-market-brownstone-finder",
          budget,
          area,
          timeline,
        },
        honeypot: readLeadHoneypot(data),
        turnstileToken: turnstile.requireToken(),
      });
      setDone(true);
      setFieldErrors({});
      turnstile.resetTurnstile();
    } catch (err) {
      turnstile.resetTurnstile();
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="nba-match-card" role="status">
        <p className="nba-match-done">
          Thank you — Stanley received your off-market profile and will follow up with matches that fit.
        </p>
      </div>
    );
  }

  return (
    <form className="nba-match-card" onSubmit={onSubmit} noValidate>
      <LeadFormHoneypot />

      <div className="nba-match-progress">
        <div className="nba-match-progress-row">
          <span>Your buyer profile</span>
          <span>{progress}%</span>
        </div>
        <div className="nba-match-progress-track" aria-hidden="true">
          <div className="nba-match-progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="nba-match-step-head">
        <p className="nba-match-step-kicker">{meta.kicker}</p>
        <h3>{meta.title}</h3>
        <p className="nba-match-step-lead">{meta.lead}</p>
      </div>

      {step === 0 ? (
        <div className="nba-match-fields">
          <div className="nba-match-row-2">
            <label className="nba-match-label">
              First name *
              <input
                className={fieldClass(Boolean(fieldErrors.firstName))}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Alexandra"
                autoComplete="given-name"
                required
              />
            </label>
            <label className="nba-match-label">
              Last name *
              <input
                className={fieldClass(Boolean(fieldErrors.lastName))}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Sterling"
                autoComplete="family-name"
                required
              />
            </label>
          </div>
          <label className="nba-match-label">
            Email address *
            <input
              className={fieldClass(Boolean(fieldErrors.email))}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alexandra@example.com"
              autoComplete="email"
              required
              aria-invalid={Boolean(fieldErrors.email)}
            />
            {fieldErrors.email ? <span className="form-field-hint">{fieldErrors.email}</span> : null}
          </label>
          <label className="nba-match-label">
            Phone number *
            <input
              className={fieldClass(Boolean(fieldErrors.phone))}
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(917) 555-0198"
              autoComplete="tel"
              required
              aria-invalid={Boolean(fieldErrors.phone)}
            />
            {fieldErrors.phone ? <span className="form-field-hint">{fieldErrors.phone}</span> : null}
          </label>

          <div className="nba-match-privacy">
            <div className="nba-match-privacy-title">
              <ShieldIcon />
              <strong>Private &amp; confidential</strong>
            </div>
            <p>
              Your information is reviewed personally by Stanley Montfort. No automated spam — just relevant
              opportunities and strategy.
            </p>
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="nba-match-fields">
          <fieldset className="nba-match-fieldset">
            <legend>Budget range *</legend>
            <div className="nba-match-options" role="radiogroup" aria-label="Budget range">
              {BUDGETS.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="radio"
                  aria-checked={budget === item}
                  className={`nba-match-option${budget === item ? " is-active" : ""}`}
                  onClick={() => setBudget(item)}
                >
                  <span className="nba-match-option-dot" aria-hidden="true" />
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="nba-match-fieldset">
            <legend>Preferred area *</legend>
            <div className="nba-match-options" role="radiogroup" aria-label="Preferred area">
              {AREAS.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="radio"
                  aria-checked={area === item}
                  className={`nba-match-option${area === item ? " is-active" : ""}`}
                  onClick={() => setArea(item)}
                >
                  <span className="nba-match-option-dot" aria-hidden="true" />
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="nba-match-fields">
          <fieldset className="nba-match-fieldset">
            <legend>Timeline *</legend>
            <div className="nba-match-options" role="radiogroup" aria-label="Timeline">
              {TIMELINES.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="radio"
                  aria-checked={timeline === item}
                  className={`nba-match-option${timeline === item ? " is-active" : ""}`}
                  onClick={() => setTimeline(item)}
                >
                  <span className="nba-match-option-dot" aria-hidden="true" />
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
          {turnstile.required ? (
            <LeadFormTurnstile
              key={turnstile.resetKey}
              siteKey={turnstile.siteKey}
              onToken={turnstile.setToken}
              onExpire={turnstile.resetTurnstile}
            />
          ) : null}
        </div>
      ) : null}

      {error ? (
        <div className="nba-match-error" role="alert">
          {error}
        </div>
      ) : null}

      <div className={`nba-match-footer${step === 0 ? " nba-match-footer--solo" : ""}`}>
        {step > 0 ? (
          <button type="button" className="nba-match-back" onClick={() => setStep((s) => (s - 1) as Step)}>
            ← Back
          </button>
        ) : (
          <span className="nba-match-back-spacer" aria-hidden="true" />
        )}
        <button
          type="submit"
          className="nba-match-submit"
          disabled={busy || (step === 2 && turnstile.required && !turnstile.token)}
        >
          {busy
            ? "Sending…"
            : step === 0
              ? "Start My Buyer Profile →"
              : step === 2
                ? "Find MY Off-Market Brownstone →"
                : "Continue →"}
        </button>
      </div>
    </form>
  );
}
