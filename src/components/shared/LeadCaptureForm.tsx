import { FormEvent, useState } from "react";
import { submitLead, type LeadFormType } from "../../lib/cms/leads";

type Props = {
  formType: LeadFormType;
  listingSlug?: string;
  sourcePage?: string;
  className?: string;
  submitLabel?: string;
  showPhone?: boolean;
  showMessage?: boolean;
  messagePlaceholder?: string;
  onSuccess?: () => void;
  compact?: boolean;
};

export default function LeadCaptureForm({
  formType,
  listingSlug,
  sourcePage,
  className = "",
  submitLabel = "Submit",
  showPhone = true,
  showMessage = true,
  messagePlaceholder = "Comments, questions?",
  onSuccess,
  compact = false,
}: Props) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setBusy(true);
    setError("");
    try {
      await submitLead({
        firstName: String(data.get("firstName") || data.get("first_name") || ""),
        lastName: String(data.get("lastName") || data.get("last_name") || ""),
        email: String(data.get("email") || ""),
        phone: String(data.get("phone") || ""),
        message: String(data.get("message") || data.get("comments") || ""),
        formType,
        listingSlug,
        sourcePage,
      });
      setDone(true);
      form.reset();
      onSuccess?.();
    } catch (err) {
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
    <form className={`lead-capture-form${compact ? " lead-capture-form--compact" : ""} ${className}`.trim()} onSubmit={onSubmit}>
      <div className="lead-capture-names">
        <input name="firstName" type="text" required placeholder="First name" autoComplete="given-name" className="lead-capture-field" />
        <input name="lastName" type="text" placeholder="Last name" autoComplete="family-name" className="lead-capture-field" />
      </div>
      <input name="email" type="email" required placeholder="Email address" autoComplete="email" className="lead-capture-field" />
      {showPhone ? (
        <input name="phone" type="tel" placeholder="Phone" autoComplete="tel" className="lead-capture-field" />
      ) : null}
      {showMessage ? (
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          placeholder={messagePlaceholder}
          className="lead-capture-field lead-capture-field--area"
        />
      ) : null}
      {error ? <div className="lead-capture-error" role="alert">{error}</div> : null}
      <button type="submit" className="lead-capture-submit" disabled={busy}>
        {busy ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
