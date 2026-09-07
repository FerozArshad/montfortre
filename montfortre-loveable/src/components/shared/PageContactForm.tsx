import { FormEvent, useState } from "react";
import { submitLead, type LeadFormType } from "../../lib/cms/leads";
import {
  hasLeadErrors,
  leadValidationMessage,
  type LeadFieldErrors,
  validateLeadFields,
} from "../../lib/leadValidation";
import { readLeadHoneypot } from "../../lib/leadFormSecurity";
import { useLeadFormTurnstile } from "../../hooks/useLeadFormTurnstile";
import LeadFormHoneypot from "./LeadFormHoneypot";
import LeadFormTurnstile from "./LeadFormTurnstile";
import "../../styles/form-status.css";

interface PageContactFormProps {
  topic?: string;
  formType?: LeadFormType;
  submitLabel?: string;
  title?: string;
  subtitle?: string;
}

function fieldClass(invalid: boolean): string {
  return `contact-field${invalid ? " form-field--invalid" : ""}`;
}

/**
 * Contact block for neighborhood and property-type pages.
 * Layout: First | Last, Email | Phone, Comments.
 */
export default function PageContactForm({
  topic,
  formType = "contact",
  submitLabel = "Submit",
  title,
  subtitle,
}: PageContactFormProps) {
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<LeadFieldErrors>({});
  const turnstile = useLeadFormTurnstile();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      firstName: String(data.get("first_name") || "").trim(),
      lastName: String(data.get("last_name") || "").trim(),
      email: String(data.get("email_address") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: String(data.get("other[Comments]") || "").trim(),
      requireMessage: true,
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
        ...payload,
        formType,
        meta: topic ? { topic } : undefined,
        honeypot: readLeadHoneypot(data),
        turnstileToken: turnstile.requireToken(),
      });
      setDone(true);
      setFieldErrors({});
      form.reset();
      turnstile.resetTurnstile();
    } catch (err) {
      turnstile.resetTurnstile();
      setError(err instanceof Error ? err.message : "Submission failed.");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <p className="contact-thanks" role="status">
        Thank you — we received your message and will be in touch shortly.
      </p>
    );
  }

  return (
    <>
      {title ? <h2 className="contact-form-title">{title}</h2> : null}
      {subtitle ? <p className="contact-form-subtitle">{subtitle}</p> : null}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <LeadFormHoneypot />
        <div className="contact-names">
          <div>
            <input
              type="text"
              name="first_name"
              placeholder="First Name *"
              className={fieldClass(Boolean(fieldErrors.firstName))}
              autoComplete="given-name"
              aria-invalid={Boolean(fieldErrors.firstName)}
            />
            {fieldErrors.firstName ? <p className="form-field-hint">{fieldErrors.firstName}</p> : null}
          </div>
          <div>
            <input
              type="text"
              name="last_name"
              placeholder="Last Name *"
              className={fieldClass(Boolean(fieldErrors.lastName))}
              autoComplete="family-name"
              aria-invalid={Boolean(fieldErrors.lastName)}
            />
            {fieldErrors.lastName ? <p className="form-field-hint">{fieldErrors.lastName}</p> : null}
          </div>
        </div>
        <div className="contact-names">
          <div>
            <input
              type="email"
              name="email_address"
              placeholder="Email *"
              className={fieldClass(Boolean(fieldErrors.email))}
              autoComplete="email"
              aria-invalid={Boolean(fieldErrors.email)}
            />
            {fieldErrors.email ? <p className="form-field-hint">{fieldErrors.email}</p> : null}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number *"
              className={fieldClass(Boolean(fieldErrors.phone))}
              autoComplete="tel"
              inputMode="tel"
              aria-invalid={Boolean(fieldErrors.phone)}
            />
            {fieldErrors.phone ? <p className="form-field-hint">{fieldErrors.phone}</p> : null}
          </div>
        </div>
        <div>
          <textarea
            name="other[Comments]"
            placeholder="Questions or comments? *"
            rows={4}
            className={`${fieldClass(Boolean(fieldErrors.message))} contact-field--area`}
            aria-invalid={Boolean(fieldErrors.message)}
          />
          {fieldErrors.message ? <p className="form-field-hint">{fieldErrors.message}</p> : null}
        </div>
        {error ? (
          <p className="form-error" role="alert">
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
        <button type="submit" className="contact-submit" disabled={busy || (turnstile.required && !turnstile.token)}>
          {busy ? "Sending…" : submitLabel}
        </button>
      </form>
    </>
  );
}
