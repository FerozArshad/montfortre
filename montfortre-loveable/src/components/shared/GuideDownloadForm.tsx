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

interface GuideDownloadFormProps {
  /** Name of the guide, recorded on the lead so the admin knows what was asked for. */
  guide: string;
  /** Opened / linked once the lead is saved. */
  fileUrl?: string;
  className?: string;
  fieldClassName?: string;
  submitClassName?: string;
  submitLabel?: string;
}

function fieldClass(base: string, invalid: boolean): string {
  return `${base}${invalid ? " form-field--invalid" : ""}`;
}

/** Lead capture for a downloadable guide — saves a lead, then delivers the file. */
export default function GuideDownloadForm({
  guide,
  fileUrl,
  className = "home-dl-form",
  fieldClassName = "home-dl-field",
  submitClassName = "home-dl-submit",
  submitLabel = "Download the guide",
}: GuideDownloadFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [questions, setQuestions] = useState("");
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
        message: [questions.trim(), `Requested the guide: ${guide}`].filter(Boolean).join("\n\n"),
        formType: "guide-download",
        meta: { guide, fileUrl: fileUrl || null },
        honeypot: readLeadHoneypot(data),
        turnstileToken: turnstile.requireToken(),
      });
      setDone(true);
      setFieldErrors({});
      turnstile.resetTurnstile();
      if (fileUrl) {
        window.open(fileUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      turnstile.resetTurnstile();
      setError(err instanceof Error ? err.message : "We could not save your request.");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <p className={`${className} form-note`} role="status">
        {fileUrl ? (
          <>
            Thanks — your guide should have opened in a new tab.{" "}
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              Download again
            </a>
            .
          </>
        ) : (
          <>Thanks — check your inbox, we&apos;re sending the guide over now.</>
        )}
      </p>
    );
  }

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <LeadFormHoneypot />
      <div className="home-dl-names">
        <input
          type="text"
          placeholder="First name *"
          className={fieldClass(fieldClassName, Boolean(fieldErrors.firstName))}
          autoComplete="given-name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          aria-invalid={Boolean(fieldErrors.firstName)}
        />
        <input
          type="text"
          placeholder="Last name *"
          className={fieldClass(fieldClassName, Boolean(fieldErrors.lastName))}
          autoComplete="family-name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          aria-invalid={Boolean(fieldErrors.lastName)}
        />
      </div>
      {fieldErrors.firstName || fieldErrors.lastName ? (
        <p className="form-field-hint">{fieldErrors.firstName || fieldErrors.lastName}</p>
      ) : null}
      <input
        type="email"
        placeholder="Email address *"
        className={fieldClass(fieldClassName, Boolean(fieldErrors.email))}
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        aria-invalid={Boolean(fieldErrors.email)}
      />
      {fieldErrors.email ? <p className="form-field-hint">{fieldErrors.email}</p> : null}
      <input
        type="tel"
        placeholder="Phone number *"
        className={fieldClass(fieldClassName, Boolean(fieldErrors.phone))}
        autoComplete="tel"
        inputMode="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        aria-invalid={Boolean(fieldErrors.phone)}
      />
      {fieldErrors.phone ? <p className="form-field-hint">{fieldErrors.phone}</p> : null}
      <textarea
        placeholder="Questions or comments? *"
        rows={3}
        className={fieldClass(fieldClassName, Boolean(fieldErrors.message))}
        value={questions}
        onChange={(event) => setQuestions(event.target.value)}
        aria-invalid={Boolean(fieldErrors.message)}
      />
      {fieldErrors.message ? <p className="form-field-hint">{fieldErrors.message}</p> : null}
      {turnstile.required ? (
        <LeadFormTurnstile
          key={turnstile.resetKey}
          siteKey={turnstile.siteKey}
          onToken={turnstile.setToken}
          onExpire={turnstile.resetTurnstile}
        />
      ) : null}
      <button type="submit" className={submitClassName} disabled={busy || (turnstile.required && !turnstile.token)}>
        {busy ? "Sending…" : submitLabel}
      </button>
      {error ? <p className="form-error" role="alert">{error}</p> : null}
    </form>
  );
}
