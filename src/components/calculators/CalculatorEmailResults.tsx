import { useState } from "react";
import LeadCaptureForm from "../shared/LeadCaptureForm";
import "../../styles/calculator-email-results.css";

export type CalculatorEmailLine = {
  label: string;
  amount: number | string;
  note?: string;
};

type Props = {
  /** Short name shown in the email subject/preview, e.g. "Buyer Closing Cost Estimate" */
  title: string;
  summary: string;
  lines: CalculatorEmailLine[];
  totalLabel?: string;
  totalValue: string;
  sourcePage?: string;
};

/**
 * Clear email-results CTA for calculator pages: capture contact info, then show
 * an on-page preview of the email the visitor would receive.
 */
export default function CalculatorEmailResults({
  title,
  summary,
  lines,
  totalLabel = "Estimated total",
  totalValue,
  sourcePage,
}: Props) {
  const [open, setOpen] = useState(false);
  const [previewed, setPreviewed] = useState(false);

  return (
    <div className="calc-email" data-screen-label="Email calculator results">
      <div className="calc-email-banner">
        <div>
          <p className="calc-email-kicker">Get these numbers in your inbox</p>
          <h4>Email me these calculator results</h4>
          <p className="calc-email-copy">
            We&apos;ll send a clean summary of your estimate so you can review it with your attorney,
            lender, or partner — no OTP required.
          </p>
        </div>
        {!open ? (
          <button type="button" className="calc-email-cta" onClick={() => setOpen(true)}>
            Email me the results
          </button>
        ) : null}
      </div>

      {open && !previewed ? (
        <div className="calc-email-form-wrap">
          <LeadCaptureForm
            formType="other"
            sourcePage={sourcePage}
            submitLabel="Email my results"
            messagePlaceholder="Any notes for Stanley? (optional)"
            hideMessage
            defaultMessage={`Please email my ${title}.\n\n${summary}\n\nTotal: ${totalValue}`}
            meta={{
              intent: "calculator-email",
              calculator: title,
              summary,
              total: totalValue,
              lines,
            }}
            onSuccess={() => setPreviewed(true)}
          />
        </div>
      ) : null}

      {previewed ? (
        <div className="calc-email-preview" role="status">
          <p className="calc-email-preview-note">
            Request saved. Here&apos;s how your emailed results will look:
          </p>
          <article className="calc-email-message">
            <header className="calc-email-message-head">
              <div className="calc-email-message-brand">Montfort Real Estate</div>
              <div className="calc-email-message-meta">
                <strong>Subject:</strong> Your {title} from Stanley Montfort
              </div>
            </header>
            <div className="calc-email-message-body">
              <p>Hi there —</p>
              <p>
                Thanks for using the Montfort {title.toLowerCase()}. Here is the estimate you
                generated on our site:
              </p>
              <p className="calc-email-message-summary">{summary}</p>
              <table className="calc-email-table">
                <tbody>
                  {lines.map((line) => (
                    <tr key={line.label}>
                      <td>
                        {line.label}
                        {line.note ? <span className="calc-email-line-note">{line.note}</span> : null}
                      </td>
                      <td>
                        {typeof line.amount === "number"
                          ? `$${line.amount.toLocaleString("en-US")}`
                          : line.amount}
                      </td>
                    </tr>
                  ))}
                  <tr className="calc-email-table-total">
                    <td>{totalLabel}</td>
                    <td>{totalValue}</td>
                  </tr>
                </tbody>
              </table>
              <p>
                These figures are educational estimates only — not tax, legal, or lending advice.
                Reply to this email or call <strong>(646) 970-1078</strong> if you want Stanley to
                walk through the numbers with you.
              </p>
              <p>
                — Stanley Montfort
                <br />
                Montfort Real Estate
              </p>
            </div>
          </article>
        </div>
      ) : null}
    </div>
  );
}
