import { FormEvent, useState } from "react";
import { submitLead } from "../../lib/cms/leads";
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

interface MarketReportFormProps {
  /** Which neighborhood report was requested. */
  neighborhood: string;
}

function fieldClass(invalid: boolean): string {
  return `hlm-field${invalid ? " form-field--invalid" : ""}`;
}

/**
 * Market report request on the neighborhood hub pages. Keeps the existing
 * `hlm-*` markup so page styling is unchanged, but saves the request.
 */
export default function MarketReportForm({ neighborhood }: MarketReportFormProps) {
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
    const questions = String(data.get("questions") || "").trim();
    const payload = {
      firstName: String(data.get("first_name") || "").trim(),
      lastName: String(data.get("last_name") || "").trim(),
      email: String(data.get("email_address") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      message: questions,
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
        message: [questions, `Requested the ${neighborhood} market report`].filter(Boolean).join("\n\n"),
        formType: "market-report",
        meta: { neighborhood, city: String(data.get("city") || "").trim() },
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
      <p className="hlm-form-thanks" role="status">
        Thanks — your {neighborhood} market report is on the way.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <LeadFormHoneypot />
      <div className="hlm-form-row">
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
      <input type="text" name="city" placeholder="City" className="hlm-field" autoComplete="address-level2" />
      <div>
        <textarea
          name="questions"
          placeholder="Questions or comments? *"
          rows={3}
          className={fieldClass(Boolean(fieldErrors.message))}
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
      <button type="submit" className="hlm-form-submit" disabled={busy || (turnstile.required && !turnstile.token)}>
        {busy ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
