import { FormEvent, useState } from "react";
import { submitLead, type LeadFormType } from "../../lib/cms/leads";
import {
  hasLeadErrors,
  leadFormRequiresMessage,
  leadValidationMessage,
  type LeadFieldErrors,
  validateLeadFields,
} from "../../lib/leadValidation";
import { readLeadHoneypot } from "../../lib/leadFormSecurity";
import { useLeadFormTurnstile } from "../../hooks/useLeadFormTurnstile";
import LeadFormHoneypot from "./LeadFormHoneypot";
import LeadFormTurnstile from "./LeadFormTurnstile";
import "../../styles/form-status.css";

type Props = {
  formType: LeadFormType;
  listingSlug?: string;
  sourcePage?: string;
  className?: string;
  submitLabel?: string;
  messagePlaceholder?: string;
  onSuccess?: () => void;
  compact?: boolean;
};

function fieldClass(base: string, invalid: boolean): string {
  return `${base}${invalid ? " form-field--invalid" : ""}`;
}

export default function LeadCaptureForm({
  formType,
  listingSlug,
  sourcePage,
  className = "",
  submitLabel = "Submit",
  messagePlaceholder = "Questions or comments?",
  onSuccess,
  compact = false,
}: Props) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<LeadFieldErrors>({});
  const [done, setDone] = useState(false);
  const requireMessage = leadFormRequiresMessage(formType);
  const turnstile = useLeadFormTurnstile();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: String(data.get("firstName") || data.get("first_name") || ""),
      lastName: String(data.get("lastName") || data.get("last_name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || data.get("comments") || ""),
      requireMessage,
    };

    const nextErrors = validateLeadFields(payload);
    setFieldErrors(nextErrors);
    if (hasLeadErrors(nextErrors)) {
      setError(leadValidationMessage(nextErrors));
      return;
    }

    setBusy(true);
    setError("");
    try {
      await submitLead({
        firstName: payload.firstName.trim(),
        lastName: payload.lastName.trim(),
        email: payload.email.trim(),
        phone: payload.phone.trim(),
        message: payload.message.trim(),
        formType,
        listingSlug,
        sourcePage,
        honeypot: readLeadHoneypot(data),
        turnstileToken: turnstile.requireToken(),
      });
      setDone(true);
      setFieldErrors({});
      form.reset();
      turnstile.resetTurnstile();
      onSuccess?.();
    } catch (err) {
      turnstile.resetTurnstile();
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <p className="lead-form-thanks" role="status">
        Thank you — we received your message and will be in touch shortly.
      </p>
    );
  }

  return (
    <form className={`lead-capture-form${compact ? " lead-capture-form--compact" : ""} ${className}`.trim()} onSubmit={onSubmit} noValidate>
      <LeadFormHoneypot />
      <div className="lead-capture-names">
        <div>
          <input
            name="firstName"
            type="text"
            required
            placeholder="First name *"
            autoComplete="given-name"
            className={fieldClass("lead-capture-field", Boolean(fieldErrors.firstName))}
            aria-invalid={Boolean(fieldErrors.firstName)}
          />
          {fieldErrors.firstName ? <p className="form-field-hint">{fieldErrors.firstName}</p> : null}
        </div>
        <div>
          <input
            name="lastName"
            type="text"
            required
            placeholder="Last name *"
            autoComplete="family-name"
            className={fieldClass("lead-capture-field", Boolean(fieldErrors.lastName))}
            aria-invalid={Boolean(fieldErrors.lastName)}
          />
          {fieldErrors.lastName ? <p className="form-field-hint">{fieldErrors.lastName}</p> : null}
        </div>
      </div>
      <div>
        <input
          name="email"
          type="email"
          required
          placeholder="Email address *"
          autoComplete="email"
          className={fieldClass("lead-capture-field", Boolean(fieldErrors.email))}
          aria-invalid={Boolean(fieldErrors.email)}
        />
        {fieldErrors.email ? <p className="form-field-hint">{fieldErrors.email}</p> : null}
      </div>
      <div>
        <input
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="Phone number *"
          className={fieldClass("lead-capture-field", Boolean(fieldErrors.phone))}
          aria-invalid={Boolean(fieldErrors.phone)}
        />
        {fieldErrors.phone ? <p className="form-field-hint">{fieldErrors.phone}</p> : null}
      </div>
      <div>
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          required={requireMessage}
          placeholder={`${messagePlaceholder}${requireMessage ? " *" : ""}`}
          className={fieldClass("lead-capture-field lead-capture-field--area", Boolean(fieldErrors.message))}
          aria-invalid={Boolean(fieldErrors.message)}
        />
        {fieldErrors.message ? <p className="form-field-hint">{fieldErrors.message}</p> : null}
      </div>
      {error ? <div className="lead-capture-error" role="alert">{error}</div> : null}
      {turnstile.required ? (
        <LeadFormTurnstile
          key={turnstile.resetKey}
          siteKey={turnstile.siteKey}
          onToken={turnstile.setToken}
          onExpire={turnstile.resetTurnstile}
        />
      ) : null}
      <button type="submit" className="lead-capture-submit" disabled={busy || (turnstile.required && !turnstile.token)}>
        {busy ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
