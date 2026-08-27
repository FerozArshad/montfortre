import { useEffect, useState } from "react";
import { LISTING_AGENT } from "../../data/listings";
import { submitLead } from "../../lib/cms/leads";

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

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setError("");
    }
  }, [open]);

  if (!open) return null;

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
          <form
            className="listing-lead-form"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              setBusy(true);
              setError("");
              void (async () => {
                try {
                  await submitLead({
                    firstName: String(data.get("firstName") || ""),
                    lastName: String(data.get("lastName") || ""),
                    email: String(data.get("email") || ""),
                    phone: String(data.get("phone") || ""),
                    formType: "listing-lead",
                    listingSlug,
                    message: "Listing lead popup",
                  });
                  setSubmitted(true);
                  try {
                    sessionStorage.setItem(STORAGE_KEY, "1");
                  } catch {
                    /* ignore */
                  }
                  window.setTimeout(onClose, 1400);
                } catch (err) {
                  setError(err instanceof Error ? err.message : "Submission failed");
                } finally {
                  setBusy(false);
                }
              })();
            }}
          >
            <div className="listing-lead-grid">
              <label className="listing-field">
                <span>First Name *</span>
                <input name="firstName" type="text" required autoComplete="given-name" />
              </label>
              <label className="listing-field">
                <span>Last Name *</span>
                <input name="lastName" type="text" required autoComplete="family-name" />
              </label>
              <label className="listing-field">
                <span>Email *</span>
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label className="listing-field">
                <span>Phone *</span>
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
            </div>
            {error ? (
              <p className="lead-capture-error" role="alert">
                {error}
              </p>
            ) : null}
            <button type="submit" className="listing-btn listing-btn--gold listing-btn--block" disabled={busy}>
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
