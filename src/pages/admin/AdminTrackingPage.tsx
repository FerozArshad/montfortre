import { useEffect, useState } from "react";
import { AdminGate } from "../../admin/AdminGate";
import {
  fetchMetaPixelStatus,
  fetchTurnstileStatus,
  isValidMetaPixelId,
  saveMetaPixelConfig,
  saveTurnstileConfig,
  type MetaPixelStatus,
  type TurnstileStatus,
} from "../../lib/cms/metaPixelSettings";
import { isProductionHostname } from "../../lib/siteOrigin";

function formatWhen(value: string | null | undefined): string {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function TrackingInner() {
  const [metaStatus, setMetaStatus] = useState<MetaPixelStatus | null>(null);
  const [turnstileStatus, setTurnstileStatus] = useState<TurnstileStatus | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(true);
  const [savingMeta, setSavingMeta] = useState(false);
  const [savingTurnstile, setSavingTurnstile] = useState(false);

  const [pixelId, setPixelId] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [trackPageViews, setTrackPageViews] = useState(true);
  const [trackLeads, setTrackLeads] = useState(true);
  const [trackListingViews, setTrackListingViews] = useState(true);
  const [productionOnly, setProductionOnly] = useState(true);
  const [capiEnabled, setCapiEnabled] = useState(false);
  const [capiAccessToken, setCapiAccessToken] = useState("");
  const [testEventCode, setTestEventCode] = useState("");

  const [turnstileEnabled, setTurnstileEnabled] = useState(false);
  const [turnstileSiteKey, setTurnstileSiteKey] = useState("");
  const [turnstileSecretKey, setTurnstileSecretKey] = useState("");
  const [turnstileProductionOnly, setTurnstileProductionOnly] = useState(true);

  const onProduction = isProductionHostname(window.location.hostname);

  function applyMetaStatus(next: MetaPixelStatus) {
    setMetaStatus(next);
    setPixelId(next.pixel_id || "");
    setEnabled(next.enabled);
    setTrackPageViews(next.track_page_views);
    setTrackLeads(next.track_leads);
    setTrackListingViews(next.track_listing_views);
    setProductionOnly(next.production_only);
    setCapiEnabled(next.capi_enabled);
    setTestEventCode(next.test_event_code || "");
    setCapiAccessToken("");
  }

  function applyTurnstileStatus(next: TurnstileStatus) {
    setTurnstileStatus(next);
    setTurnstileEnabled(next.enabled);
    setTurnstileSiteKey(next.site_key || "");
    setTurnstileProductionOnly(next.production_only);
    setTurnstileSecretKey("");
  }

  async function load() {
    setLoading(true);
    setError("");
    try {
      const [meta, turnstile] = await Promise.all([fetchMetaPixelStatus(), fetchTurnstileStatus()]);
      applyMetaStatus(meta);
      applyTurnstileStatus(turnstile);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load tracking settings");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function onSaveMeta() {
    setSavingMeta(true);
    setError("");
    setNotice("");
    try {
      applyMetaStatus(
        await saveMetaPixelConfig({
          pixelId,
          enabled,
          trackPageViews,
          trackLeads,
          trackListingViews,
          productionOnly,
          capiEnabled,
          capiAccessToken,
          testEventCode,
        }),
      );
      setNotice("Meta tracking settings saved.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSavingMeta(false);
    }
  }

  async function onSaveTurnstile() {
    setSavingTurnstile(true);
    setError("");
    setNotice("");
    try {
      applyTurnstileStatus(
        await saveTurnstileConfig({
          siteKey: turnstileSiteKey,
          secretKey: turnstileSecretKey,
          enabled: turnstileEnabled,
          productionOnly: turnstileProductionOnly,
        }),
      );
      setNotice("Turnstile settings saved.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSavingTurnstile(false);
    }
  }

  const pixelValid = !pixelId.trim() || isValidMetaPixelId(pixelId);
  const live = enabled && isValidMetaPixelId(pixelId);
  const willFireHere = live && (!productionOnly || onProduction);
  const turnstileLive = turnstileEnabled && turnstileSiteKey.trim().length >= 10;
  const turnstileWillFireHere = turnstileLive && (!turnstileProductionOnly || onProduction);

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Tracking</h1>
          <p className="admin-lede">
            Meta Pixel + Conversions API for ad attribution, and Cloudflare Turnstile CAPTCHA on lead forms to
            reduce bot traffic.
          </p>
        </div>
      </div>

      {error ? <div className="admin-error">{error}</div> : null}
      {notice ? <div className="admin-success">{notice}</div> : null}

      <div className="admin-card">
        <h2 className="admin-card-title">Setup checklist</h2>
        <ol className="review-import-steps">
          <li>
            In <strong>Meta Events Manager</strong>, copy your Pixel ID and generate a Conversions API access token
            under Settings.
          </li>
          <li>
            In <strong>Cloudflare Turnstile</strong>, create a widget for <code>montfortre.com</code> and copy the site
            + secret keys.
          </li>
          <li>
            Paste keys below, enable what you need, and save each section.
          </li>
          <li>
            Submit a test lead on the live site. Confirm <code>PageView</code> and <code>Lead</code> in Events Manager
            (Test events tab if using a test event code).
          </li>
        </ol>
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Cloudflare Turnstile</h2>
        <p className="admin-card-desc">
          When enabled, all public lead forms show a CAPTCHA widget. Submissions are verified server-side before the
          lead is saved.
        </p>

        <div className="admin-status-row">
          <div className="admin-status-pill">
            <span className={`admin-status-dot${turnstileLive ? " admin-status-dot--ok" : ""}`} />
            {loading ? "Checking…" : turnstileLive ? "CAPTCHA enabled" : "CAPTCHA disabled"}
          </div>
          <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => void load()} disabled={loading}>
            Refresh
          </button>
        </div>

        <p className="admin-muted" style={{ marginTop: 12 }}>
          Active on this browser: {turnstileWillFireHere ? "yes" : "no"}
          {turnstileProductionOnly && !onProduction ? " (production-only is on)" : ""}
        </p>

        <div className="admin-form" style={{ marginTop: 20 }}>
          <label>
            Site key (public)
            <input
              type="text"
              value={turnstileSiteKey}
              onChange={(e) => setTurnstileSiteKey(e.target.value)}
              placeholder="0x4AAAAAAA..."
              autoComplete="off"
            />
          </label>

          <label style={{ marginTop: 16 }}>
            Secret key
            <input
              type="password"
              value={turnstileSecretKey}
              onChange={(e) => setTurnstileSecretKey(e.target.value)}
              placeholder={turnstileStatus?.has_secret_key ? "Saved — enter only to replace" : "Enter secret key"}
              autoComplete="new-password"
            />
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16 }}>
            <input type="checkbox" checked={turnstileEnabled} onChange={(e) => setTurnstileEnabled(e.target.checked)} />
            Enable Turnstile on lead forms
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
            <input
              type="checkbox"
              checked={turnstileProductionOnly}
              onChange={(e) => setTurnstileProductionOnly(e.target.checked)}
            />
            Production only (<code>montfortre.com</code>)
          </label>

          <div className="admin-form-actions">
            <button type="button" className="admin-btn" onClick={() => void onSaveTurnstile()} disabled={savingTurnstile || loading}>
              {savingTurnstile ? "Saving…" : "Save Turnstile"}
            </button>
          </div>
        </div>

        {turnstileStatus?.updated_at ? (
          <p className="admin-muted" style={{ marginBottom: 0 }}>
            Last saved {formatWhen(turnstileStatus.updated_at)}.
          </p>
        ) : null}
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Meta Pixel + Conversions API</h2>
        <p className="admin-card-desc">
          Browser pixel for on-page events, plus server-side CAPI for better match rates and deduplication via shared
          event IDs.
        </p>

        <div className="admin-status-row">
          <div className="admin-status-pill">
            <span className={`admin-status-dot${live ? " admin-status-dot--ok" : ""}`} />
            {loading ? "Checking…" : live ? "Pixel enabled" : "Pixel disabled"}
          </div>
          <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => void load()} disabled={loading}>
            Refresh
          </button>
        </div>

        <p className="admin-muted" style={{ marginTop: 12 }}>
          Pixel fires on this browser: {willFireHere ? "yes" : "no"}
          {productionOnly && !onProduction ? " (production-only is on)" : ""}
          {" · "}
          CAPI: {capiEnabled && metaStatus?.has_capi_access_token ? "enabled" : "off"}
        </p>

        <div className="admin-form" style={{ marginTop: 20 }}>
          <label>
            Pixel ID
            <input
              type="text"
              inputMode="numeric"
              value={pixelId}
              onChange={(e) => setPixelId(e.target.value.replace(/\D/g, ""))}
              placeholder="123456789012345"
              autoComplete="off"
            />
          </label>
          {!pixelValid ? (
            <p className="admin-error" style={{ margin: "8px 0 0" }}>
              Pixel ID must be 10–20 digits (numbers only).
            </p>
          ) : null}

          <label style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16 }}>
            <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
            Enable Meta Pixel on the public site
          </label>

          <div className="admin-notify-recipients" style={{ marginTop: 20 }}>
            <div className="admin-notify-recipients-head">
              <strong>Browser events</strong>
            </div>
            <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input type="checkbox" checked={trackPageViews} onChange={(e) => setTrackPageViews(e.target.checked)} />
              Page views
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
              <input type="checkbox" checked={trackLeads} onChange={(e) => setTrackLeads(e.target.checked)} />
              Lead submissions
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
              <input type="checkbox" checked={trackListingViews} onChange={(e) => setTrackListingViews(e.target.checked)} />
              Listing detail views
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
              <input type="checkbox" checked={productionOnly} onChange={(e) => setProductionOnly(e.target.checked)} />
              Production only
            </label>
          </div>

          <div className="admin-notify-recipients" style={{ marginTop: 20 }}>
            <div className="admin-notify-recipients-head">
              <strong>Conversions API (server-side)</strong>
            </div>
            <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input type="checkbox" checked={capiEnabled} onChange={(e) => setCapiEnabled(e.target.checked)} />
              Enable Conversions API
            </label>
            <label style={{ marginTop: 12 }}>
              Access token
              <input
                type="password"
                value={capiAccessToken}
                onChange={(e) => setCapiAccessToken(e.target.value)}
                placeholder={metaStatus?.has_capi_access_token ? "Saved — enter only to replace" : "EAA..."}
                autoComplete="new-password"
              />
            </label>
            <label style={{ marginTop: 12 }}>
              Test event code (optional)
              <input
                type="text"
                value={testEventCode}
                onChange={(e) => setTestEventCode(e.target.value)}
                placeholder="TEST12345"
                autoComplete="off"
              />
            </label>
            <p className="admin-muted" style={{ margin: "8px 0 0" }}>
              Lead events use hashed email/phone from the server. Browser + server share the same event ID for dedup.
            </p>
          </div>

          <div className="admin-form-actions">
            <button
              type="button"
              className="admin-btn"
              onClick={() => void onSaveMeta()}
              disabled={savingMeta || loading || (enabled && !isValidMetaPixelId(pixelId))}
            >
              {savingMeta ? "Saving…" : "Save Meta settings"}
            </button>
          </div>
        </div>

        {metaStatus?.updated_at ? (
          <p className="admin-muted" style={{ marginBottom: 0 }}>
            Last saved {formatWhen(metaStatus.updated_at)}.
          </p>
        ) : null}
      </div>
    </>
  );
}

export default function AdminTrackingPage() {
  return (
    <AdminGate>
      <TrackingInner />
    </AdminGate>
  );
}
