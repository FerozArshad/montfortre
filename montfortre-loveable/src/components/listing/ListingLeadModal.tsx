import { FormEvent, useEffect, useState } from "react";
import { LISTING_AGENT } from "../../data/listings";
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

const STORAGE_KEY = "montfort-listing-lead-dismissed";

type Props = {
  open: boolean;
  onClose: () => void;
  listingSlug?: string;
};

export default function ListingLeadModal({ open, onClose, listingSlug }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<LeadFieldErrors>({});
  const turnstile = useLeadFormTurnstile();

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setError("");
      setFieldErrors({});
    }
  }, [open]);

  if (!open) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: String(data.get("firstName") || ""),
      lastName: String(data.get("lastName") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || ""),
      requireMessage: true,
    };

    const nextErrors = await validateLeadFieldsAsync(payload);
    setFieldErrors(nextErrors);
    if (hasLeadErrors(nextErrors)) {
      setError(leadValidationMessage(nextErrors));
      return;
    }

    setBusy(true);
    setError("");
    try {
      await submitLead({
        ...payload,
        formType: "listing-lead",
        listingSlug,
        honeypot: readLeadHoneypot(data),
        turnstileToken: turnstile.requireToken(),
      });
      setSubmitted(true);
      setFieldErrors({});
      turnstile.resetTurnstile();
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      window.setTimeout(onClose, 1400);
    } catch (err) {
      turnstile.resetTurnstile();
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div
      className="listing-modal listing-lead-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="listing-lead-title"
      onClick={onClose}
    >
      <div className="listing-modal-card listing-lead-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="listing-modal-close" onClick={onClose} aria-label="Close">
          Close
        </button>

        <div className="listing-lead-portrait">
          <img src={LISTING_AGENT.photo} alt="" width={120} height={120} className="listing-cover-img" />
        </div>

        <p className="listing-lead-eyebrow">Get Instant Access</p>
        <h2 id="listing-lead-title">Harlem Brownstones</h2>
        <p className="listing-lead-body">
          Prices in Harlem are still about 10% lower from it&apos;s all time high. Get the latest inventory, pricing
          insight, and off-market opportunities from Stanley Montfort.
        </p>

        {submitted ? (
          <p className="listing-lead-thanks" role="status">
            Thank you — we&apos;ll be in touch shortly.
          </p>
        ) : (
          <form className="listing-lead-form" onSubmit={handleSubmit} noValidate>
            <LeadFormHoneypot />
            <div className="listing-lead-grid">
              <label className="listing-field">
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
              <label className="listing-field">
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
              <label className="listing-field">
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
              <label className="listing-field">
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
            <label className="listing-field">
              <span>Questions or comments *</span>
              <textarea
                name="message"
                rows={3}
                className={fieldErrors.message ? "form-field--invalid" : ""}
                aria-invalid={Boolean(fieldErrors.message)}
              />
              {fieldErrors.message ? <span className="form-field-hint">{fieldErrors.message}</span> : null}
            </label>
            {error ? (
              <p className="lead-capture-error" role="alert">
                {error}
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
            <button
              type="submit"
              className="listing-btn listing-btn--gold listing-btn--block"
              disabled={busy || (turnstile.required && !turnstile.token)}
            >
              {busy ? "Sending…" : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function shouldAutoOpenListingLead(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return true;
  }
}

export function dismissListingLeadSession(): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }
}
