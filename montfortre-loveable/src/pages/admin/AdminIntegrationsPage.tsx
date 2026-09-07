import { useEffect, useMemo, useState } from "react";
import { AdminGate } from "../../admin/AdminGate";
import {
  disconnectGhl,
  fetchGhlStatus,
  fetchGhlSyncLog,
  inboundWebhookUrl,
  outboundFunctionUrl,
  reconcileGhlSync,
  saveGhlConfig,
  type GhlStatus,
  type GhlSyncLogRow,
} from "../../lib/cms/ghl";

function formatWhen(value: string | null): string {
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

function IntegrationsInner() {
  const [status, setStatus] = useState<GhlStatus | null>(null);
  const [log, setLog] = useState<GhlSyncLogRow[]>([]);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [locationId, setLocationId] = useState("");
  const [token, setToken] = useState("");
  const [sourceLabel, setSourceLabel] = useState("Website");
  const [inboundSecret, setInboundSecret] = useState("");
  const [enabled, setEnabled] = useState(true);

  const syncUrl = useMemo(() => outboundFunctionUrl(), []);
  // Only shown right after the admin types a secret: it is write-only afterwards.
  const webhookUrl = useMemo(
    () => inboundWebhookUrl(inboundSecret || "YOUR-SECRET"),
    [inboundSecret],
  );

  function applyStatus(next: GhlStatus) {
    setStatus(next);
    setLocationId(next.location_id);
    setSourceLabel(next.source_label || "Website");
    setEnabled(next.enabled);
    setToken("");
  }

  async function load() {
    setLoading(true);
    setError("");
    try {
      const [next, rows] = await Promise.all([fetchGhlStatus(), fetchGhlSyncLog()]);
      applyStatus(next);
      setLog(rows);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load integration settings");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function onSave() {
    setSaving(true);
    setError("");
    setNotice("");
    try {
      applyStatus(
        await saveGhlConfig({
          locationId,
          token,
          sourceLabel,
          enabled,
          inboundSecret,
          // Stored in Vault so the leads trigger knows where to post.
          syncUrl,
        }),
      );
      setInboundSecret("");
      setNotice("Settings saved.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function onDisconnect() {
    if (!window.confirm("Disconnect GoHighLevel? New leads will stop syncing to the CRM.")) return;
    setSaving(true);
    setError("");
    try {
      applyStatus(await disconnectGhl());
      setNotice("GoHighLevel disconnected.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Disconnect failed");
    } finally {
      setSaving(false);
    }
  }

  async function onRefreshLog() {
    setError("");
    try {
      await reconcileGhlSync();
      setLog(await fetchGhlSyncLog());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not refresh the sync log");
    }
  }

  const connected = Boolean(status?.has_token && status?.location_id);
  const live = connected && Boolean(status?.enabled);

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Integrations</h1>
          <p className="admin-lede">
            Keep the site and GoHighLevel in step. Every lead captured here is pushed to the CRM as a contact,
            and leads created inside GHL — chat widget, GHL forms, calendar bookings — come back into this
            inbox.
          </p>
        </div>
      </div>

      {error ? <div className="admin-error">{error}</div> : null}
      {notice ? <div className="admin-success">{notice}</div> : null}

      <div className="admin-card">
        <h2 className="admin-card-title">Setup guide</h2>
        <p className="admin-card-desc">
          Follow these steps once to connect GoHighLevel. You can do inbound (GHL → site) and outbound (site → GHL)
          separately — start with inbound if you do not yet have a private integration token.
        </p>
        <ol className="review-import-steps">
          <li>
            <strong>Database.</strong> If this page shows “settings are missing”, run the migration{" "}
            <code>supabase/migrations/20260901010000_ghl_sync.sql</code> in Lovable Cloud SQL (or ask Lovable’s agent
            to apply it).
          </li>
          <li>
            <strong>Edge functions.</strong> Deploy <code>ghl-sync</code> and <code>ghl-inbound</code> to Supabase
            (Lovable usually deploys these when the repo is pushed). Both must be live before sync works.
          </li>
          <li>
            <strong>Location ID.</strong> In GoHighLevel, open your sub-account dashboard. Copy the string from the
            URL after <code>/location/</code> — for example{" "}
            <code>app.gohighlevel.com/v2/location/<strong>ve9EPM428h8vShlRW1KT</strong>/dashboard</code>.
          </li>
          <li>
            <strong>Private integration token (outbound only).</strong> In GHL go to Settings → Private Integrations →
            Create new integration. Enable <code>contacts.write</code> and <code>contacts.readonly</code>. Copy the{" "}
            <code>pit-…</code> token immediately — GHL shows it only once. If you do not see “Create new integration”,
            ask your agency admin to enable Private Integrations under Settings → Company, and confirm your user role
            is Admin.
          </li>
          <li>
            <strong>Webhook secret (inbound).</strong> Invent any long random string (or use a password generator).
            Paste it into the Webhook secret field below and save. You will need this exact value when building the GHL
            workflow — it is stored encrypted and cannot be read back here after saving.
          </li>
          <li>
            <strong>Save below.</strong> Enter the location ID, token (if you have one), webhook secret, and leave
            “Push every new lead to GoHighLevel” checked if outbound sync should run. Click Save settings. Saving also
            registers the outbound sync URL in the database.
          </li>
          <li>
            <strong>GHL workflow (inbound).</strong> In GHL: Automation → Workflows → Create Workflow → Start from
            scratch. Trigger: <strong>Contact Created</strong> (best for chat widget and all new contacts). Action:{" "}
            <strong>Webhook</strong> → method <strong>POST</strong> → paste the webhook URL shown in the “Receive leads
            from GoHighLevel” section below (replace <code>YOUR-SECRET</code> with the secret from step 5). Publish the
            workflow — draft workflows never fire.
          </li>
          <li>
            <strong>Test outbound.</strong> Submit any form on the website. Within a few seconds you should see a row in
            Recent syncs below with status “synced”, and a matching contact in GHL tagged{" "}
            <code>site:&lt;form-type&gt;</code>.
          </li>
          <li>
            <strong>Test inbound.</strong> Create a test contact in GHL or send a message through the site chat widget.
            The lead should appear in <a href="/admin/leads">Leads</a> labelled “GoHighLevel”. It will not be pushed
            back to GHL (loop prevention).
          </li>
          <li>
            <strong>Email notifications.</strong> Inbound GHL leads still trigger the Gmail notification on{" "}
            <a href="/admin/notifications">Notifications</a> (to <code>sm@montfortre.com</code>). Outbound site leads
            also notify by email and sync to GHL when enabled.
          </li>
        </ol>
        <p className="admin-muted" style={{ marginBottom: 0 }}>
          Outbound sync URL (saved automatically on Save):{" "}
          <code style={{ wordBreak: "break-all" }}>{syncUrl || "—"}</code>
        </p>
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">GoHighLevel connection</h2>
        <p className="admin-card-desc">
          {connected
            ? "Site leads are upserted into this location as contacts."
            : "Add a private integration token to start syncing leads to the CRM."}
        </p>
        <div className="admin-status-row">
          <div className="admin-status-pill">
            <span className={`admin-status-dot${live ? " admin-status-dot--ok" : ""}`} />
            {loading ? "Checking…" : live ? "Connected and syncing" : connected ? "Connected, paused" : "Not connected"}
          </div>
          {connected ? (
            <button
              type="button"
              className="admin-btn admin-btn--ghost admin-btn--sm"
              onClick={() => void onDisconnect()}
              disabled={saving}
            >
              Disconnect
            </button>
          ) : null}
          <button
            type="button"
            className="admin-btn admin-btn--ghost admin-btn--sm"
            onClick={() => void load()}
            disabled={loading}
          >
            Refresh
          </button>
        </div>

        {connected && status?.connected_at ? (
          <p className="admin-muted" style={{ marginTop: 12, marginBottom: 0 }}>
            Connected {formatWhen(status.connected_at)}.
          </p>
        ) : null}

        {status?.last_error ? (
          <p className="admin-muted" style={{ marginTop: 12, marginBottom: 0 }}>
            Last sync error: {status.last_error}
          </p>
        ) : null}
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Credentials</h2>
        <p className="admin-card-desc">
          In GoHighLevel go to Settings → Private Integrations, create a token with the{" "}
          <code>contacts.write</code> and <code>contacts.readonly</code> scopes, then paste it here. The
          location ID is the string in your GHL dashboard URL after <code>/location/</code>.
        </p>

        <div className="admin-form">
          <div className="admin-form-row">
            <label>
              Location ID
              <input
                type="text"
                value={locationId}
                onChange={(e) => setLocationId(e.target.value)}
                placeholder="ve9EPM428h8vShlRW1KT"
                autoComplete="off"
              />
            </label>
            <label>
              Private integration token
              <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder={status?.has_token ? "Stored — leave blank to keep" : "pit-…"}
                autoComplete="new-password"
              />
            </label>
          </div>

          <div className="admin-form-row">
            <label>
              Contact source label
              <input
                type="text"
                value={sourceLabel}
                onChange={(e) => setSourceLabel(e.target.value)}
                placeholder="Website"
                autoComplete="off"
              />
            </label>
            <label>
              Webhook secret
              <input
                type="password"
                value={inboundSecret}
                onChange={(e) => setInboundSecret(e.target.value)}
                placeholder={status?.has_inbound_secret ? "Stored — leave blank to keep" : "Any long random string"}
                autoComplete="new-password"
              />
            </label>
          </div>

          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
            Push every new lead to GoHighLevel
          </label>

          <div className="admin-form-actions">
            <button type="button" className="admin-btn" onClick={() => void onSave()} disabled={saving || loading}>
              {saving ? "Saving…" : "Save settings"}
            </button>
          </div>
        </div>

        <p className="admin-muted" style={{ marginBottom: 0 }}>
          Contacts are matched on email or phone, so a repeat enquirer updates their existing record instead of
          creating a duplicate. Leads are always saved to this inbox even when the CRM push fails.
        </p>
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Receive leads from GoHighLevel</h2>
        <p className="admin-card-desc">
          In GHL open Automation → Workflows, create a workflow with a “Form Submitted” or “Contact Created”
          trigger, add a <strong>Webhook</strong> action, set the method to POST and paste this URL:
        </p>
        <p>
          <code style={{ wordBreak: "break-all" }}>{webhookUrl || "Set VITE_SUPABASE_URL to see the URL"}</code>
        </p>
        <p className="admin-muted" style={{ marginBottom: 0 }}>
          Replace <code>YOUR-SECRET</code> with the webhook secret you saved above — the secret is stored
          encrypted and cannot be read back here. Leads that arrive this way are labelled “GoHighLevel” in the
          inbox and are never pushed back to the CRM.
        </p>
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Recent syncs</h2>
        <p className="admin-card-desc">
          The last {log.length || 20} pushes to GoHighLevel. “Queued” settles within about five minutes.
        </p>
        <div className="admin-status-row" style={{ marginBottom: 12 }}>
          <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => void onRefreshLog()}>
            Check for results now
          </button>
        </div>
        {log.length === 0 ? (
          <p className="admin-muted" style={{ marginBottom: 0 }}>
            Nothing synced yet. Submit a form on the site to test the connection.
          </p>
        ) : (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>When</th>
                  <th>Status</th>
                  <th>Detail</th>
                </tr>
              </thead>
              <tbody>
                {log.map((row) => (
                  <tr key={row.id}>
                    <td>{formatWhen(row.created_at)}</td>
                    <td>{row.status}</td>
                    <td>
                      {row.error ||
                        (row.status === "synced"
                          ? row.contact_id
                            ? `Contact ${row.contact_id}`
                            : "Synced"
                          : "—")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default function AdminIntegrationsPage() {
  return (
    <AdminGate>
      <IntegrationsInner />
    </AdminGate>
  );
}
