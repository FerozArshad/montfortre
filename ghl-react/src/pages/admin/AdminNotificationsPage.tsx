import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AdminGate } from "../../admin/AdminGate";
import {
  disconnectGmail,
  fetchLeadNotifyLog,
  fetchLeadNotifyStatus,
  oauthRedirectUri,
  saveLeadNotifyConfig,
  startGmailConnect,
  type LeadNotifyLogRow,
  type LeadNotifyStatus,
} from "../../lib/cms/leadNotify";

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

function NotificationsInner() {
  const [params, setParams] = useSearchParams();
  const [status, setStatus] = useState<LeadNotifyStatus | null>(null);
  const [log, setLog] = useState<LeadNotifyLogRow[]>([]);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [notifyTo, setNotifyTo] = useState("");
  const [enabled, setEnabled] = useState(true);

  const redirectUri = useMemo(() => oauthRedirectUri(), []);

  function applyStatus(next: LeadNotifyStatus) {
    setStatus(next);
    setClientId(next.client_id);
    setSenderEmail(next.sender_email);
    setNotifyTo(next.notify_to);
    setEnabled(next.enabled);
    setClientSecret("");
  }

  async function load() {
    setLoading(true);
    setError("");
    try {
      const [next, rows] = await Promise.all([fetchLeadNotifyStatus(), fetchLeadNotifyLog()]);
      applyStatus(next);
      setLog(rows);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load notification settings");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  // The /auth/google callback bounces back here with the outcome.
  useEffect(() => {
    const connected = params.get("connected");
    const failed = params.get("error");
    if (!connected && !failed) return;

    if (connected) setNotice(`Gmail connected${connected !== "1" ? ` as ${connected}` : ""}.`);
    if (failed) setError(failed);

    params.delete("connected");
    params.delete("error");
    setParams(params, { replace: true });
  }, [params, setParams]);

  async function onSave() {
    setSaving(true);
    setError("");
    setNotice("");
    try {
      applyStatus(
        await saveLeadNotifyConfig({ clientId, clientSecret, senderEmail, notifyTo, enabled }),
      );
      setNotice("Settings saved.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function onDisconnect() {
    if (!window.confirm("Disconnect Gmail? Lead notification emails will stop until you reconnect.")) {
      return;
    }
    setSaving(true);
    setError("");
    try {
      applyStatus(await disconnectGmail());
      setNotice("Gmail disconnected.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Disconnect failed");
    } finally {
      setSaving(false);
    }
  }

  function onConnect() {
    if (!status?.client_id) {
      setError("Save the Google client ID first.");
      return;
    }
    if (!status.has_client_secret) {
      setError("Save the Google client secret first.");
      return;
    }
    startGmailConnect(status.client_id);
  }

  const connected = Boolean(status?.has_refresh_token);
  const ready = connected && Boolean(status?.sender_email) && Boolean(status?.notify_to);

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Notifications</h1>
          <p className="admin-lede">
            Email Stanley whenever a form is submitted. Every form on the site is covered — contact, listing
            popups, tour requests, valuations and blog forms.
          </p>
        </div>
      </div>

      {error ? <div className="admin-error">{error}</div> : null}
      {notice ? <div className="admin-success">{notice}</div> : null}

      <div className="admin-card">
        <h2 className="admin-card-title">Gmail connection</h2>
        <p className="admin-card-desc">
          {connected
            ? "Notifications are sent through this Google account."
            : "Connect a Google account to start sending notification emails."}
        </p>
        <div className="admin-status-row">
          <div className="admin-status-pill">
            <span className={`admin-status-dot${ready ? " admin-status-dot--ok" : ""}`} />
            {loading
              ? "Checking…"
              : connected
                ? `Connected${status?.connected_email ? ` as ${status.connected_email}` : ""}`
                : "Not connected"}
          </div>
          <button type="button" className="admin-btn" onClick={onConnect} disabled={saving || loading}>
            {connected ? "Reconnect" : "Connect Gmail"}
          </button>
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
            Last send error: {status.last_error}
          </p>
        ) : null}
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Google credentials</h2>
        <p className="admin-card-desc">
          From your Google Cloud OAuth client. In that client’s “Authorized redirect URIs”, add exactly{" "}
          <code>{redirectUri}</code> — otherwise Google refuses the connection.
        </p>

        <div className="admin-form">
          <div className="admin-form-row">
            <label>
              Client ID
              <input
                type="text"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                placeholder="1234-abc.apps.googleusercontent.com"
                autoComplete="off"
              />
            </label>
            <label>
              Client secret
              <input
                type="password"
                value={clientSecret}
                onChange={(e) => setClientSecret(e.target.value)}
                placeholder={status?.has_client_secret ? "Stored — leave blank to keep" : "GOCSPX-…"}
                autoComplete="new-password"
              />
            </label>
          </div>

          <div className="admin-form-row">
            <label>
              Send from
              <input
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="stanley@montfortre.com"
                autoComplete="off"
              />
            </label>
            <label>
              Send notifications to
              <input
                type="email"
                value={notifyTo}
                onChange={(e) => setNotifyTo(e.target.value)}
                placeholder="stanley@montfortre.com"
                autoComplete="off"
              />
            </label>
          </div>

          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <input type="checkbox" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
            Send an email for every new lead
          </label>

          <div className="admin-form-actions">
            <button type="button" className="admin-btn" onClick={() => void onSave()} disabled={saving || loading}>
              {saving ? "Saving…" : "Save settings"}
            </button>
          </div>
        </div>

        <p className="admin-muted" style={{ marginBottom: 0 }}>
          “Send from” must be the account you connect above — Gmail only lets it send as itself. Leads are always
          saved to the inbox even if an email fails.
        </p>
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Recent deliveries</h2>
        <p className="admin-card-desc">
          The last {log.length || 20} notification attempts. “Queued” settles within about five minutes.
        </p>
        {log.length === 0 ? (
          <p className="admin-muted" style={{ marginBottom: 0 }}>
            No notifications yet. Submit a form on the site to test the connection.
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
                    <td>{row.error || (row.status === "sent" ? "Delivered" : "—")}</td>
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

export default function AdminNotificationsPage() {
  return (
    <AdminGate>
      <NotificationsInner />
    </AdminGate>
  );
}
