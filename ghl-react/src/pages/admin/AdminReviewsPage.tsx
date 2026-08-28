import { useEffect, useState } from "react";
import { AdminGate } from "../../admin/AdminGate";
import {
  adminCreateReview,
  adminDeleteReview,
  adminFetchReviewStats,
  adminFetchReviews,
  adminImportReviews,
  adminSaveReviewOrder,
  adminSetReviewHidden,
  adminSyncReviewsNow,
  adminUpdateReview,
  isManualReview,
  reviewerKey,
  type GoogleReviewRow,
  type GoogleReviewStats,
  type ReviewInput,
} from "../../lib/cms/reviews";
import { parseGoogleReviews, type ParsedReview } from "../../lib/cms/parseGoogleReviews";

const EMPTY_DRAFT: ReviewInput = {
  author_name: "",
  quote: "",
  rating: 5,
  published_at: null,
  author_url: "",
  photo_url: "",
};

/** `published_at` is a timestamptz; the form edits it as a plain yyyy-mm-dd. */
function toDateInput(iso: string | null): string {
  if (!iso) return "";
  try {
    return new Date(iso).toISOString().slice(0, 10);
  } catch {
    return "";
  }
}

function fromDateInput(value: string): string | null {
  if (!value) return null;
  const parsed = new Date(`${value}T12:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString();
}

function formatWhen(iso: string | null) {
  if (!iso) return "never";
  try {
    return new Date(iso).toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function ReviewsInner() {
  const [rows, setRows] = useState<GoogleReviewRow[]>([]);
  const [stats, setStats] = useState<GoogleReviewStats | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [syncing, setSyncing] = useState(false);
  const [savingOrder, setSavingOrder] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [draft, setDraft] = useState<ReviewInput | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [pasted, setPasted] = useState("");
  const [parsed, setParsed] = useState<ParsedReview[] | null>(null);
  const [importing, setImporting] = useState(false);

  async function load() {
    try {
      const [reviews, nextStats] = await Promise.all([
        adminFetchReviews(),
        adminFetchReviewStats(),
      ]);
      setRows(reviews);
      setStats(nextStats);
      setDirty(false);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load reviews");
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function toggleHidden(row: GoogleReviewRow) {
    setBusyId(row.id);
    setNotice("");
    setError("");
    try {
      await adminSetReviewHidden(row.id, !row.hidden);
      setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, hidden: !r.hidden } : r)));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not update review");
    } finally {
      setBusyId(null);
    }
  }

  function move(index: number, delta: number) {
    const target = index + delta;
    if (target < 0 || target >= rows.length) return;
    setRows((prev) => {
      const next = [...prev];
      const [moved] = next.splice(index, 1);
      next.splice(target, 0, moved);
      return next;
    });
    setDirty(true);
  }

  async function saveOrder() {
    setSavingOrder(true);
    setNotice("");
    setError("");
    try {
      await adminSaveReviewOrder(rows.map((r) => r.id));
      setDirty(false);
      setNotice("Review order saved.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not save order");
    } finally {
      setSavingOrder(false);
    }
  }

  function startAdd() {
    setEditingId(null);
    setDraft({ ...EMPTY_DRAFT });
    setNotice("");
    setError("");
  }

  function startEdit(row: GoogleReviewRow) {
    setEditingId(row.id);
    setDraft({
      author_name: row.author_name,
      quote: row.quote,
      rating: Number(row.rating) || 5,
      published_at: row.published_at,
      author_url: row.author_url,
      photo_url: row.photo_url,
    });
    setNotice("");
    setError("");
  }

  async function saveDraft() {
    if (!draft) return;
    if (!draft.author_name.trim() || !draft.quote.trim()) {
      setError("Reviewer name and review text are both required.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      if (editingId) {
        await adminUpdateReview(editingId, draft);
        setNotice("Review updated.");
      } else {
        await adminCreateReview(draft);
        setNotice("Review added.");
      }
      setDraft(null);
      setEditingId(null);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not save review");
    } finally {
      setSaving(false);
    }
  }

  function runParse() {
    setError("");
    setNotice("");
    const rows = parseGoogleReviews(pasted);
    if (!rows.length) {
      setParsed(null);
      setError(
        "Couldn't find any reviews in that text. Copy straight from the Google Maps review list, including each reviewer's name and their “N reviews” line."
      );
      return;
    }
    setParsed(rows);
  }

  function patchParsed(index: number, patch: Partial<ParsedReview>) {
    setParsed((prev) =>
      prev ? prev.map((row, i) => (i === index ? { ...row, ...patch } : row)) : prev
    );
  }

  function dropParsed(index: number) {
    setParsed((prev) => (prev ? prev.filter((_, i) => i !== index) : prev));
  }

  async function commitImport() {
    if (!parsed?.length) return;
    setImporting(true);
    setError("");
    try {
      const result = await adminImportReviews(
        parsed.map((row) => ({
          author_name: row.author_name,
          quote: row.quote,
          rating: row.rating,
          published_at: row.published_at,
          author_url: "",
          photo_url: "",
        }))
      );
      const skippedNote = result.skipped.length
        ? ` Skipped ${result.skipped.length} already stored (${result.skipped.slice(0, 3).join(", ")}${
            result.skipped.length > 3 ? "…" : ""
          }).`
        : "";
      setNotice(`Imported ${result.inserted} review${result.inserted === 1 ? "" : "s"}.${skippedNote}`);
      setParsed(null);
      setPasted("");
      setImportOpen(false);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Import failed");
    } finally {
      setImporting(false);
    }
  }

  async function removeReview(row: GoogleReviewRow) {
    if (!window.confirm(`Delete the review from ${row.author_name}? This cannot be undone.`)) return;
    setBusyId(row.id);
    setError("");
    try {
      await adminDeleteReview(row.id);
      setRows((prev) => prev.filter((r) => r.id !== row.id));
      setNotice("Review deleted.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not delete review");
    } finally {
      setBusyId(null);
    }
  }

  async function syncNow() {
    setSyncing(true);
    setNotice("");
    setError("");
    try {
      const result = await adminSyncReviewsNow();
      setNotice(`Sync: ${result}`);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Sync failed");
    } finally {
      setSyncing(false);
    }
  }

  const visibleCount = rows.filter((r) => !r.hidden).length;
  const storedKeys = new Set(rows.map((r) => reviewerKey(r.author_name)));
  const importableCount = parsed
    ? parsed.filter((r) => !storedKeys.has(reviewerKey(r.author_name))).length
    : 0;

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Reviews</h1>
          <p className="admin-lede">
            Google’s API only ever returns its five “most relevant” reviews, so bring the rest across with
            “Import from Google” — paste the list copied from Google Maps and they’re added in one go.
            Synced and imported reviews sit in one list: hide any you don’t want, and reorder them to
            control the carousel. Synced text comes from Google and can’t be edited.
          </p>
        </div>
        <div className="admin-page-actions">
          <button
            type="button"
            className="admin-btn admin-btn--ghost"
            onClick={() => {
              setImportOpen((v) => !v);
              setDraft(null);
            }}
          >
            {importOpen ? "Close import" : "Import from Google"}
          </button>
          <button type="button" className="admin-btn admin-btn--ghost" onClick={startAdd}>
            Add review
          </button>
          <button
            type="button"
            className="admin-btn admin-btn--ghost"
            disabled={syncing}
            onClick={() => void syncNow()}
          >
            {syncing ? "Syncing…" : "Sync now"}
          </button>
          <button type="button" className="admin-btn admin-btn--ghost" onClick={() => void load()}>
            Refresh
          </button>
          <button
            type="button"
            className="admin-btn"
            disabled={!dirty || savingOrder}
            onClick={() => void saveOrder()}
          >
            {savingOrder ? "Saving…" : "Save order"}
          </button>
        </div>
      </div>

      {error ? <div className="admin-error">{error}</div> : null}
      {notice ? <div className="admin-success">{notice}</div> : null}
      {stats?.last_error ? (
        <div className="admin-error">Last sync error: {stats.last_error}</div>
      ) : null}

      <div className="hub-stats">
        <div className="hub-stat">
          <strong>{visibleCount}</strong>
          <span>Shown on site</span>
        </div>
        <div className="hub-stat">
          <strong>{rows.length - visibleCount}</strong>
          <span>Hidden</span>
        </div>
        <div className="hub-stat">
          <strong>{stats ? Number(stats.rating).toFixed(1) : "—"}</strong>
          <span>Google rating</span>
        </div>
        <div className="hub-stat">
          <strong>{stats?.total_reviews ?? "—"}</strong>
          <span>Total on Google</span>
        </div>
      </div>

      <p className="admin-hint">Last synced: {formatWhen(stats?.synced_at ?? null)}</p>

      {importOpen ? (
        <div className="review-form">
          <h2 className="review-form-title">Import from Google</h2>
          <ol className="review-import-steps">
            <li>Open your Google Maps reviews and click through to the full review list.</li>
            <li>Set “Sort by” to Newest so the order matches the site.</li>
            <li>Scroll to the bottom until every review has loaded, and click any “More” links so no text is cut off.</li>
            <li>Select the whole list, copy it, and paste it below.</li>
          </ol>
          <label className="review-form-full">
            Pasted reviews
            <textarea
              rows={8}
              value={pasted}
              placeholder="Paste the copied review list here…"
              onChange={(e) => setPasted(e.target.value)}
            />
          </label>
          <div className="review-form-actions">
            <button
              type="button"
              className="admin-btn admin-btn--ghost"
              disabled={!pasted.trim()}
              onClick={runParse}
            >
              Preview reviews
            </button>
            {parsed?.length ? (
              <button
                type="button"
                className="admin-btn"
                disabled={importing || importableCount === 0}
                onClick={() => void commitImport()}
              >
                {importing ? "Importing…" : `Import ${importableCount} review${importableCount === 1 ? "" : "s"}`}
              </button>
            ) : null}
          </div>

          {parsed?.length ? (
            <>
              <p className="spark-hint">
                Found {parsed.length}. Ratings default to 5 stars because Google’s stars don’t survive a
                copy — change any that differ. Dates are approximate.
              </p>
              <ul className="review-import-list">
                {parsed.map((row, i) => {
                  const already = storedKeys.has(reviewerKey(row.author_name));
                  return (
                    <li key={`${row.author_name}-${i}`} className="review-import-row">
                      <div className="review-import-head">
                        <input
                          className="review-import-name"
                          value={row.author_name}
                          onChange={(e) => patchParsed(i, { author_name: e.target.value })}
                        />
                        <select
                          value={row.rating}
                          onChange={(e) => patchParsed(i, { rating: Number(e.target.value) })}
                        >
                          {[5, 4, 3, 2, 1].map((n) => (
                            <option key={n} value={n}>
                              {"★".repeat(n)}
                            </option>
                          ))}
                        </select>
                        <input
                          type="date"
                          value={toDateInput(row.published_at)}
                          onChange={(e) =>
                            patchParsed(i, { published_at: fromDateInput(e.target.value) })
                          }
                        />
                        <button
                          type="button"
                          className="admin-btn admin-btn--sm admin-btn--ghost is-danger"
                          onClick={() => dropParsed(i)}
                        >
                          Remove
                        </button>
                      </div>
                      <textarea
                        rows={3}
                        value={row.quote}
                        onChange={(e) => patchParsed(i, { quote: e.target.value })}
                      />
                      {already ? (
                        <p className="review-import-flag">Already stored — will be skipped.</p>
                      ) : null}
                      {row.warnings.map((warning) => (
                        <p key={warning} className="review-import-flag">
                          {warning}
                        </p>
                      ))}
                    </li>
                  );
                })}
              </ul>
            </>
          ) : null}
        </div>
      ) : null}

      {draft ? (
        <div className="review-form">
          <h2 className="review-form-title">{editingId ? "Edit review" : "Add review"}</h2>
          <div className="review-form-grid">
            <label>
              Reviewer name
              <input
                value={draft.author_name}
                onChange={(e) => setDraft({ ...draft, author_name: e.target.value })}
              />
            </label>
            <label>
              Rating
              <select
                value={draft.rating}
                onChange={(e) => setDraft({ ...draft, rating: Number(e.target.value) })}
              >
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>
                    {"★".repeat(n)} ({n})
                  </option>
                ))}
              </select>
            </label>
            <label>
              Date posted
              <input
                type="date"
                value={toDateInput(draft.published_at)}
                onChange={(e) => setDraft({ ...draft, published_at: fromDateInput(e.target.value) })}
              />
            </label>
            <label>
              Photo URL (optional)
              <input
                value={draft.photo_url}
                placeholder="https://…"
                onChange={(e) => setDraft({ ...draft, photo_url: e.target.value })}
              />
            </label>
          </div>
          <label className="review-form-full">
            Review text
            <textarea
              rows={5}
              value={draft.quote}
              placeholder="Paste the review exactly as the customer wrote it."
              onChange={(e) => setDraft({ ...draft, quote: e.target.value })}
            />
          </label>
          <label className="review-form-full">
            Link to the review on Google (optional)
            <input
              value={draft.author_url}
              placeholder="https://www.google.com/maps/…"
              onChange={(e) => setDraft({ ...draft, author_url: e.target.value })}
            />
          </label>
          <div className="review-form-actions">
            <button type="button" className="admin-btn" disabled={saving} onClick={() => void saveDraft()}>
              {saving ? "Saving…" : editingId ? "Save changes" : "Add review"}
            </button>
            <button
              type="button"
              className="admin-btn admin-btn--ghost"
              disabled={saving}
              onClick={() => {
                setDraft(null);
                setEditingId(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      {rows.length === 0 ? (
        <p className="admin-empty">
          No reviews stored yet. Press “Sync now” to pull them from Google. If that fails, check that the
          Places API is enabled and the <code>google_places_api_key</code> Vault secret is set.
        </p>
      ) : (
        <ul className="reviews-admin-list">
          {rows.map((row, index) => (
            <li key={row.id} className={`reviews-admin-row${row.hidden ? " is-hidden" : ""}`}>
              <div className="reviews-admin-order">
                <button
                  type="button"
                  className="admin-btn admin-btn--sm admin-btn--ghost"
                  disabled={index === 0}
                  aria-label={`Move ${row.author_name} up`}
                  onClick={() => move(index, -1)}
                >
                  ↑
                </button>
                <button
                  type="button"
                  className="admin-btn admin-btn--sm admin-btn--ghost"
                  disabled={index === rows.length - 1}
                  aria-label={`Move ${row.author_name} down`}
                  onClick={() => move(index, 1)}
                >
                  ↓
                </button>
              </div>

              {row.photo_url ? (
                <img className="reviews-admin-photo" src={row.photo_url} alt="" referrerPolicy="no-referrer" />
              ) : (
                <span className="reviews-admin-photo reviews-admin-photo--fallback" aria-hidden="true">
                  {(row.author_name.trim()[0] || "G").toUpperCase()}
                </span>
              )}

              <div className="reviews-admin-body">
                <div className="reviews-admin-name">
                  {row.author_name}
                  <span className="reviews-admin-stars">
                    {"★".repeat(Math.round(Number(row.rating) || 5))}
                  </span>
                  <span className="reviews-admin-source">
                    {isManualReview(row) ? "Added" : "Google"}
                  </span>
                </div>
                <p className="reviews-admin-quote">{row.quote || "—"}</p>
              </div>

              <div className="reviews-admin-tools">
                <button
                  type="button"
                  className="admin-btn admin-btn--sm admin-btn--ghost"
                  disabled={busyId === row.id}
                  onClick={() => void toggleHidden(row)}
                >
                  {row.hidden ? "Show" : "Hide"}
                </button>
                {isManualReview(row) ? (
                  <>
                    <button
                      type="button"
                      className="admin-btn admin-btn--sm admin-btn--ghost"
                      onClick={() => startEdit(row)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="admin-btn admin-btn--sm admin-btn--ghost is-danger"
                      disabled={busyId === row.id}
                      onClick={() => void removeReview(row)}
                    >
                      Delete
                    </button>
                  </>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function AdminReviewsPage() {
  return (
    <AdminGate>
      <ReviewsInner />
    </AdminGate>
  );
}
