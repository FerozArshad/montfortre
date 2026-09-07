import { FormEvent, useState } from "react";
import { submitLead } from "../../lib/cms/leads";
import type { LeadFormType } from "../../lib/cms/leads";
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

interface ChecklistLeadFormProps {
  /** What the visitor is asking for, recorded on the lead. */
  resource: string;
  /** Opened in a new tab once the lead is saved. */
  fileUrl: string;
  formType?: LeadFormType;
  submitLabel?: string;
}

function fieldClass(invalid: boolean): string {
  return `contact-field${invalid ? " form-field--invalid" : ""}`;
}

/** First/last/email/phone + questions capture that saves a lead, then delivers the download. */
export default function ChecklistLeadForm({
  resource,
  fileUrl,
  formType = "guide-download",
  submitLabel = "Send me Free Checklist!",
}: ChecklistLeadFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [questions, setQuestions] = useState("");
  const [city, setCity] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<LeadFieldErrors>({});
  const turnstile = useLeadFormTurnstile();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: questions.trim(),
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

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      await submitLead({
        ...payload,
        message: [questions.trim(), `Requested: ${resource}`].filter(Boolean).join("\n\n"),
        formType,
        meta: { resource, city: city.trim() },
        honeypot: readLeadHoneypot(data),
        turnstileToken: turnstile.requireToken(),
      });
      setDone(true);
      setFieldErrors({});
      turnstile.resetTurnstile();
      window.open(fileUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      turnstile.resetTurnstile();
      setError(err instanceof Error ? err.message : "We could not save your request.");
    } finally {
      setBusy(false);
    }
  }

  return (
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
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
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
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
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
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          aria-invalid={Boolean(fieldErrors.phone)}
        />
        {fieldErrors.phone ? <p className="form-field-hint">{fieldErrors.phone}</p> : null}
      </div>
      <input
        type="text"
        name="City"
        placeholder="City"
        className="contact-field"
        autoComplete="address-level2"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <div>
        <textarea
          name="questions"
          placeholder="Questions or comments? *"
          rows={4}
          className={`${fieldClass(Boolean(fieldErrors.message))} contact-field--area`}
          value={questions}
          onChange={(event) => setQuestions(event.target.value)}
          aria-invalid={Boolean(fieldErrors.message)}
        />
        {fieldErrors.message ? <p className="form-field-hint">{fieldErrors.message}</p> : null}
      </div>
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
      {done ? (
        <p className="form-note" role="status">
          Thanks — your download should have opened in a new tab.{" "}
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            Open it again
          </a>
          .
        </p>
      ) : null}
      {error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
