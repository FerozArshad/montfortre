import { LEAD_HONEYPOT_FIELD } from "../../lib/leadFormSecurity";

/** Hidden honeypot input — bots that fill every field are rejected server-side. */
export default function LeadFormHoneypot() {
  return (
    <input
      type="text"
      name={LEAD_HONEYPOT_FIELD}
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      className="lead-form-hp"
    />
  );
}
