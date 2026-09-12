import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AdminGate } from "../../admin/AdminGate";
import {
  disconnectGmail,
  fetchLeadNotifyLog,
  fetchLeadNotifyStatus,
  formatDeliveryStatus,
  formatNotifyStatus,
  isValidNotifyEmail,
  MAX_NOTIFY_RECIPIENTS,
  notifyFunctionUrl,
  oauthRedirectUri,
  reconcileLeadNotifications,
  saveLeadNotifyConfig,
  sendTestNotification,
  shortLeadRef,
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
    second: "2-digit",
  });
}

function statusClass(status: string): string {
  if (status === "delivered" || status === "sent") return "admin-notify-status--ok";
  if (status === "partially_delivered") return "admin-notify-status--warn";
  if (status === "failed") return "admin-notify-status--bad";
  if (status === "sending") return "admin-notify-status--pending";
  return "admin-notify-status--muted";
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
  const [recipients, setRecipients] = useState<string[]>([""]);
  const [enabled, setEnabled] = useState(true);

  const [webhookSecret, setWebhookSecret] = useState("");
  const [testEmailTo, setTestEmailTo] = useState("");
  const [recipientError, setRecipientError] = useState("");

  const redirectUri = useMemo(() => oauthRedirectUri(), []);
  const notifyUrl = useMemo(() => notifyFunctionUrl(), []);

  function applyStatus(next: LeadNotifyStatus) {
    setStatus(next);
    setClientId(next.client_id);
    setSenderEmail(next.sender_email);
    setEnabled(next.enabled);
    setClientSecret("");
    const emails =
      next.recipients?.length > 0
        ? next.recipients.map((row) => row.email)
        : next.notify_to
          ? [next.notify_to]
          : [""];
    setRecipients(emails);
    setTestEmailTo((current) => current || emails[0] || next.notify_to || "sm@montfortre.com");
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

  function updateRecipient(index: number, value: string) {
    setRecipients((current) => current.map((email, i) => (i === index ? value : email)));
    setRecipientError("");
  }

  function addRecipient() {
    if (recipients.length >= MAX_NOTIFY_RECIPIENTS) return;
    setRecipients((current) => [...current, ""]);
  }

  function removeRecipient(index: number) {
    setRecipients((current) => {
      const next = current.filter((_, i) => i !== index);
      return next.length ? next : [""];
    });
    setRecipientError("");
  }

  function validateRecipients(): string[] | null {
    const cleaned = recipients.map((email) => email.trim().toLowerCase()).filter(Boolean);
    if (enabled && cleaned.length === 0) {
      setRecipientError("Add at least one recipient, or turn off email notifications.");
      return null;
    }

    const seen = new Set<string>();
    for (const email of cleaned) {
      if (!isValidNotifyEmail(email)) {
        setRecipientError(`Invalid email address: ${email}`);
        return null;
      }
      if (seen.has(email)) {
        setRecipientError(`Duplicate email address: ${email}`);
        return null;
      }
      seen.add(email);
    }

    if (cleaned.length > MAX_NOTIFY_RECIPIENTS) {
      setRecipientError(`Maximum ${MAX_NOTIFY_RECIPIENTS} recipients allowed.`);
      return null;
    }

    setRecipientError("");
    return cleaned;
  }

  async function onSave() {
    const cleaned = validateRecipients();
    if (!cleaned) return;

    setSaving(true);
    setError("");
    setNotice("");
    try {
      applyStatus(
        await saveLeadNotifyConfig({
          clientId,
          clientSecret,
          senderEmail,
          notifyTo: cleaned[0] || "",
          recipients: cleaned,
          enabled,
          webhookSecret,
        }),
      );
      setWebhookSecret("");
      setNotice("Settings saved. Webhook URL and secret are registered automatically.");
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

  async function onRefreshLog() {
    setError("");
    try {
      await reconcileLeadNotifications();
      setLog(await fetchLeadNotifyLog());
      applyStatus(await fetchLeadNotifyStatus());
      setNotice("Activity log refreshed.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not refresh activity log");
    }
  }

  async function onSendTest() {
    setSaving(true);
    setError("");
    setNotice("");
    try {
      const result = await sendTestNotification(testEmailTo);
      setNotice(
        `Test email sent to ${result.to}. Check inbox and spam/promotions — it can take 1–2 minutes.`,
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Test send failed");
    } finally {
      setSaving(false);
    }
  }

  const connected = Boolean(status?.has_refresh_token);
  const activeRecipients = recipients.map((email) => email.trim()).filter(Boolean);
  const pipelineReady =
    connected &&
    Boolean(status?.sender_email) &&
    activeRecipients.length > 0 &&
    Boolean(status?.has_webhook_secret) &&
    Boolean(status?.has_notify_url);
  const ready = pipelineReady;

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Notifications</h1>
          <p className="admin-lede">
            Email your team whenever a form is submitted. Every form on the site is covered — contact,
            listing popups, tour requests, valuations and blog forms. Leads are always saved to the inbox
            even if email delivery fails.
          </p>
        </div>
      </div>

      {error ? <div className="admin-error">{error}</div> : null}
      {notice ? <div className="admin-success">{notice}</div> : null}

      <div className="admin-card">
        <h2 className="admin-card-title">Setup checklist</h2>
        <p className="admin-card-desc">
          If emails are not arriving, work through these steps in order. The activity log at the bottom shows
          per-recipient results and error details.
        </p>
        <ol className="review-import-steps">
          <li>
            <strong>Save settings below</strong> with Client ID, Client secret, Send from{" "}
            <code>sm@montfortre.com</code>, and at least one notification recipient. Saving registers the
            webhook URL and generates a shared secret automatically.
          </li>
          <li>
            <strong>Connect Gmail</strong> using the <code>sm@montfortre.com</code> Google account. Gmail only
            sends from the mailbox that authorises OAuth — “Send from” must match the connected account.
          </li>
          <li>
            <strong>Google Cloud redirect URI</strong> must include exactly <code>{redirectUri}</code> on your
            OAuth client.
          </li>
          <li>
            <strong>Send a test email</strong> to any address in the field below. Check spam and Promotions —
            subject starts with <code>Montfort Real Estate · New …</code>
          </li>
        </ol>
        <p className="admin-muted" style={{ marginBottom: 0 }}>
          Pipeline: Gmail {connected ? "✓" : "✗"} · Webhook secret {status?.has_webhook_secret ? "✓" : "✗"} ·
          Notify URL {status?.has_notify_url ? "✓" : "✗"} · Recipients {activeRecipients.length || 0}/
          {MAX_NOTIFY_RECIPIENTS} · Notifications {enabled ? "on" : "off"}
        </p>
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Gmail connection</h2>
        <p className="admin-card-desc">
          {connected
            ? "All notification emails are sent from this connected Google account."
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
            onClick={() => void onSendTest()}
            disabled={saving || loading || !connected || !testEmailTo.includes("@")}
          >
            Send test email
          </button>
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

        <div className="admin-form" style={{ marginTop: 20 }}>
          <label>
            Send test email to
            <input
              type="email"
              value={testEmailTo}
              onChange={(e) => setTestEmailTo(e.target.value)}
              placeholder="sm@montfortre.com"
              autoComplete="off"
            />
          </label>
          <p className="admin-muted" style={{ margin: "8px 0 0" }}>
            Choose any inbox to verify delivery. Live form submissions go to all notification recipients below.
          </p>
        </div>
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

          <label>
            Send from
            <input
              type="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="sm@montfortre.com"
              autoComplete="off"
            />
          </label>
          <p className="admin-muted" style={{ margin: "8px 0 0" }}>
            Must be the Gmail account you connect above — Gmail only lets it send as itself.
          </p>

          <div className="admin-notify-recipients">
            <div className="admin-notify-recipients-head">
              <strong>Notification recipients</strong>
              <span className="admin-muted">Maximum {MAX_NOTIFY_RECIPIENTS} recipients</span>
            </div>
            {recipients.map((email, index) => (
              <div className="admin-notify-recipient-row" key={`recipient-${index}`}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => updateRecipient(index, e.target.value)}
                  placeholder={`person${index + 1}@example.com`}
                  autoComplete="off"
                  aria-label={`Recipient ${index + 1}`}
                />
                <button
                  type="button"
                  className="admin-btn admin-btn--ghost admin-btn--sm"
                  onClick={() => removeRecipient(index)}
                  disabled={recipients.length === 1 && !email.trim()}
                >
                  Remove
                </button>
              </div>
            ))}
            {recipientError ? <p className="admin-error" style={{ margin: "8px 0 0" }}>{recipientError}</p> : null}
            <button
              type="button"
              className="admin-btn admin-btn--ghost admin-btn--sm"
              onClick={addRecipient}
              disabled={recipients.length >= MAX_NOTIFY_RECIPIENTS}
              style={{ marginTop: 8 }}
            >
              + Add recipient
            </button>
          </div>

          <label style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 16 }}>
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
          Notify URL (saved automatically): <code style={{ wordBreak: "break-all" }}>{notifyUrl || "—"}</code>
        </p>
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Notification activity log</h2>
        <p className="admin-card-desc">
          Recent lead notification attempts with per-recipient delivery results. Queued items settle within about
          five minutes, or click refresh to check now.
        </p>
        <div className="admin-status-row" style={{ marginBottom: 12 }}>
          <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => void onRefreshLog()}>
            Refresh log
          </button>
        </div>
        {log.length === 0 ? (
          <p className="admin-muted" style={{ marginBottom: 0 }}>
            No notifications yet. Submit a form on the site to test the connection.
          </p>
        ) : (
          <div className="admin-notify-log">
            {log.map((row) => (
              <article className="admin-notify-log-item" key={row.id}>
                <header className="admin-notify-log-head">
                  <div>
                    <strong>Lead #{shortLeadRef(row.lead_id)}</strong>
                    <span className={`admin-notify-status ${statusClass(row.status)}`}>
                      {formatNotifyStatus(row.status)}
                    </span>
                  </div>
                  <div className="admin-notify-log-meta">
                    <span>Queued {formatWhen(row.queued_at || row.created_at)}</span>
                    {row.started_at ? <span> · Sending {formatWhen(row.started_at)}</span> : null}
                    {row.settled_at ? <span> · Settled {formatWhen(row.settled_at)}</span> : null}
                  </div>
                </header>

                <dl className="admin-notify-log-summary">
                  <div>
                    <dt>Sender</dt>
                    <dd>{row.sender_email || status?.sender_email || "—"}</dd>
                  </div>
                  <div>
                    <dt>Recipients</dt>
                    <dd>{row.recipient_count || row.deliveries?.length || "—"}</dd>
                  </div>
                  {row.error ? (
                    <div className="admin-notify-log-error">
                      <dt>Summary</dt>
                      <dd>{row.error}</dd>
                    </div>
                  ) : null}
                </dl>

                {row.deliveries?.length ? (
                  <ul className="admin-notify-delivery-list">
                    {row.deliveries.map((delivery) => (
                      <li
                        key={delivery.id}
                        className={`admin-notify-delivery admin-notify-delivery--${delivery.status}`}
                      >
                        <div className="admin-notify-delivery-main">
                          <span className="admin-notify-delivery-icon">
                            {delivery.status === "delivered" ? "✓" : delivery.status === "failed" ? "✗" : "…"}
                          </span>
                          <div>
                            <strong>{delivery.recipient_email}</strong>
                            <span className={`admin-notify-status ${statusClass(delivery.status)}`}>
                              {formatDeliveryStatus(delivery.status)}
                            </span>
                            <div className="admin-notify-delivery-times">
                              {delivery.delivered_at ? formatWhen(delivery.delivered_at) : null}
                              {delivery.failed_at && delivery.status === "failed"
                                ? formatWhen(delivery.failed_at)
                                : null}
                              {!delivery.delivered_at && !delivery.failed_at && delivery.sending_at
                                ? formatWhen(delivery.sending_at)
                                : null}
                            </div>
                            {delivery.error ? (
                              <p className="admin-notify-delivery-error">{delivery.error}</p>
                            ) : null}
                            {delivery.provider_message_id ? (
                              <p className="admin-muted admin-notify-message-id">
                                Gmail ID: {delivery.provider_message_id}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : row.status === "queued" || row.status === "sending" ? (
                  <p className="admin-muted" style={{ margin: 0 }}>
                    Waiting for delivery results…
                  </p>
                ) : row.error ? (
                  <p className="admin-notify-delivery-error" style={{ margin: 0 }}>
                    {row.error}
                  </p>
                ) : null}
              </article>
            ))}
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
