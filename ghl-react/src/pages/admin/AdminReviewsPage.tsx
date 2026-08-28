import { useEffect, useState } from "react";
import { AdminGate } from "../../admin/AdminGate";
import {
  adminFetchReviewStats,
  adminFetchReviews,
  adminSaveReviewOrder,
  adminSetReviewHidden,
  adminSyncReviewsNow,
  type GoogleReviewRow,
  type GoogleReviewStats,
} from "../../lib/cms/reviews";

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

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Reviews</h1>
          <p className="admin-lede">
            Google reviews sync automatically every Monday and Thursday. Hide any review you don’t want on
            the site, or drag the order to control how they appear in the carousel. Review text comes from
            Google and can’t be edited here.
          </p>
        </div>
        <div className="admin-page-actions">
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
                </div>
                <p className="reviews-admin-quote">{row.quote || "—"}</p>
              </div>

              <button
                type="button"
                className="admin-btn admin-btn--sm admin-btn--ghost"
                disabled={busyId === row.id}
                onClick={() => void toggleHidden(row)}
              >
                {row.hidden ? "Show" : "Hide"}
              </button>
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
