// Sends notification emails whenever a lead row is inserted.
//
// Invoked by the AFTER INSERT trigger on public.leads (see migrations),
// not by the browser. Auth is a shared secret header rather than a JWT.
//
// Gmail credentials come from public.lead_notify_config(), managed on
// /admin/notifications. Sends to all configured recipients (max 4) using
// one connected Gmail account as the sender.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-webhook-secret",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

type GmailConfig = {
  enabled: boolean;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  sender: string;
  notifyRecipients: string[];
};

type LeadRecord = {
  id?: string;
  created_at?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  message?: string;
  form_type?: string;
  source_page?: string;
  listing_slug?: string;
  meta?: Record<string, unknown> | null;
};

type DeliveryResult = {
  recipient: string;
  status: "delivered" | "failed";
  error?: string;
  message_id?: string;
  queued_at?: string;
  sending_at?: string;
  delivered_at?: string;
  failed_at?: string;
};

const FORM_LABELS: Record<string, string> = {
  contact: "Contact form",
  "listing-lead": "Listing popup",
  "listing-tour": "Tour request",
  "blog-embed": "Blog form",
  "home-valuation": "Home valuation",
  "market-report": "Market report",
  "guide-download": "Guide download",
  "mortgage-checklist": "Mortgage checklist",
  "listing-access": "Listing access",
  neighborhood: "Neighborhood form",
  ghl: "GoHighLevel",
  other: "Website form",
};

const SITE_ORIGIN = Deno.env.get("SITE_ORIGIN") || "https://montfortre.com";
const ADMIN_LEADS_URL = `${Deno.env.get("ADMIN_ORIGIN") || SITE_ORIGIN}/admin/leads`;
const BRAND = {
  navy: "#0f1729",
  gold: "#c98a2c",
  cream: "#faf8f5",
  text: "#1f2937",
  muted: "#6b7280",
  border: "#e5e7eb",
};
const LOGO_URL = `${SITE_ORIGIN}/redesign-assets/logo-transparency-black.png`;
const PORTRAIT_URL = `${SITE_ORIGIN}/redesign-assets/team/stanley-montfort-email.jpg`;
const OFFICE_EMAIL = "sm@montfortre.com";
const OFFICE_PHONE = "1-646-970-1078";
const OFFICE_ADDRESS = "8 West 126th Street, New York, NY 10027";

function serviceClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } },
  );
}

function parseRecipients(row: Record<string, unknown>): string[] {
  const fromArray = row.notify_recipients;
  if (Array.isArray(fromArray)) {
    return fromArray
      .map((item) => String(item || "").trim().toLowerCase())
      .filter((email) => email.includes("@"));
  }
  const legacy = String(row.notify_to || "").trim().toLowerCase();
  return legacy.includes("@") ? [legacy] : [];
}

async function loadConfig(): Promise<GmailConfig> {
  const fallback = (name: string) => Deno.env.get(name) ?? "";
  let row: Record<string, unknown> = {};

  try {
    const { data } = await serviceClient().rpc("lead_notify_config");
    if (data && typeof data === "object") row = data as Record<string, unknown>;
  } catch {
    // Migration not applied yet — fall back to function secrets below.
  }

  const notifyRecipients = parseRecipients(row);
  const legacyTo = String(row.notify_to || "") || fallback("LEAD_NOTIFY_TO");

  const config: GmailConfig = {
    enabled: row.enabled !== false,
    clientId: String(row.client_id || "") || fallback("GOOGLE_CLIENT_ID"),
    clientSecret: String(row.client_secret || "") || fallback("GOOGLE_CLIENT_SECRET"),
    refreshToken: String(row.refresh_token || "") || fallback("GOOGLE_REFRESH_TOKEN"),
    sender: String(row.sender_email || "") || fallback("GMAIL_SENDER"),
    notifyRecipients: notifyRecipients.length
      ? notifyRecipients
      : legacyTo.includes("@")
        ? [legacyTo.trim().toLowerCase()]
        : [],
  };

  const missing = ["clientId", "clientSecret", "refreshToken", "sender"].filter(
    (key) => !config[key as keyof GmailConfig],
  );
  if (missing.length) {
    throw new Error(
      `Gmail notifications are not configured (missing ${missing.join(", ")}). ` +
        "Finish setup on /admin/notifications.",
    );
  }

  return config;
}

async function recordError(message: string): Promise<void> {
  try {
    await serviceClient().rpc("lead_notify_set_error", { p_error: message });
  } catch {
    // Best effort only.
  }
}

async function markSending(
  notificationId: string,
  sender: string,
  recipients: string[],
): Promise<void> {
  try {
    await serviceClient().rpc("lead_notify_mark_sending", {
      p_notification_id: notificationId,
      p_sender_email: sender,
      p_recipients: recipients,
    });
  } catch (err) {
    console.error("lead_notify_mark_sending failed:", err);
  }
}

async function finalizeNotification(
  notificationId: string,
  sender: string,
  deliveries: DeliveryResult[],
): Promise<void> {
  try {
    await serviceClient().rpc("lead_notify_finalize", {
      p_notification_id: notificationId,
      p_sender_email: sender,
      p_deliveries: deliveries,
    });
  } catch (err) {
    console.error("lead_notify_finalize failed:", err);
  }
}

async function expectedWebhookSecret(): Promise<string> {
  try {
    const { data } = await serviceClient().rpc("lead_notify_config");
    if (data && typeof data === "object") {
      const secret = String((data as Record<string, unknown>).webhook_secret || "");
      if (secret) return secret;
    }
  } catch {
    // Fall back to the function secret below.
  }
  return Deno.env.get("LEAD_WEBHOOK_SECRET") ?? "";
}

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function base64Url(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function encodeHeader(value: string): string {
  // eslint-disable-next-line no-control-regex
  if (/^[\x20-\x7E]*$/.test(value)) return value;
  return `=?UTF-8?B?${base64Url(value).replace(/-/g, "+").replace(/_/g, "/")}?=`;
}

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(config: GmailConfig): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.value;
  }

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      refresh_token: config.refreshToken,
      grant_type: "refresh_token",
    }),
  });

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = body?.error_description || body?.error || `HTTP ${res.status}`;
    throw new Error(`Token refresh failed: ${detail}`);
  }

  cachedToken = {
    value: body.access_token as string,
    expiresAt: Date.now() + (Number(body.expires_in) || 3600) * 1000,
  };
  return cachedToken.value;
}

function metaLabel(key: string): string {
  const spaced = key.replace(/[_-]+/g, " ").replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

function metaValue(value: unknown): string {
  if (value === null || value === undefined || value === "") return "";
  if (Array.isArray(value)) return value.map(metaValue).filter(Boolean).join(", ");
  if (typeof value === "object") return JSON.stringify(value);
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return String(value);
}

function leadMetaRows(meta: Record<string, unknown> | null | undefined): Array<[string, string]> {
  if (!meta || typeof meta !== "object") return [];
  return Object.entries(meta)
    .filter(([key]) => key !== "origin")
    .map(([key, value]) => [metaLabel(key), metaValue(value)] as [string, string])
    .filter((entry): entry is [string, string] => Boolean(entry[1]));
}

function buildEmail(lead: LeadRecord): { subject: string; html: string; text: string } {
  const name = `${lead.first_name || ""} ${lead.last_name || ""}`.trim() || lead.email || "New lead";
  const formLabel = FORM_LABELS[lead.form_type || "other"] || lead.form_type || "Website form";
  const subject = `Montfort Real Estate · New ${formLabel} — ${name}`;

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Email", lead.email || ""],
    ["Phone", lead.phone || ""],
    ["Form", formLabel],
    ["Page", lead.source_page || ""],
    ["Listing", lead.listing_slug || ""],
    ...leadMetaRows(lead.meta),
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  const text = [
    "Montfort Real Estate",
    "New website lead",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    lead.message ? `Message:\n${lead.message}` : "",
    "",
    `Open the leads inbox: ${ADMIN_LEADS_URL}`,
    "",
    OFFICE_EMAIL,
    OFFICE_PHONE,
    OFFICE_ADDRESS,
  ]
    .filter(Boolean)
    .join("\n");

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr>` +
        `<td style="padding:10px 16px 10px 0;color:${BRAND.muted};font-size:13px;vertical-align:top;width:120px;">${escapeHtml(label)}</td>` +
        `<td style="padding:10px 0;color:${BRAND.text};font-size:14px;vertical-align:top;">${escapeHtml(value)}</td>` +
        `</tr>`,
    )
    .join("");

  const messageHtml = lead.message
    ? `<div style="margin-top:20px;padding:16px 18px;background:${BRAND.cream};border-left:4px solid ${BRAND.gold};border-radius:0 8px 8px 0;">` +
      `<div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.gold};margin-bottom:8px;">Message</div>` +
      `<div style="font-size:14px;line-height:1.6;color:${BRAND.text};white-space:pre-wrap;">${escapeHtml(lead.message)}</div>` +
      `</div>`
    : "";

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:${BRAND.cream};">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${BRAND.cream};padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 18px 40px rgba(15,23,41,0.12);">
  <tr>
    <td style="background:#ffffff;padding:24px 32px 0;text-align:center;border-bottom:1px solid ${BRAND.border};">
      <img src="${LOGO_URL}" alt="Montfort Real Estate" width="200" style="display:block;margin:0 auto;max-width:200px;height:auto;" />
    </td>
  </tr>
  <tr>
    <td style="background:${BRAND.navy};padding:22px 32px;text-align:center;">
      <div style="font-family:Georgia,'Times New Roman',serif;font-size:24px;line-height:1.3;color:#ffffff;margin:0 0 6px;">New website lead</div>
      <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:14px;color:${BRAND.gold};">${escapeHtml(formLabel)}</div>
    </td>
  </tr>
  <tr>
    <td style="padding:28px 32px 8px;font-family:system-ui,-apple-system,Segoe UI,sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">${rowsHtml}</table>
      ${messageHtml}
      <div style="margin:28px 0 12px;text-align:center;">
        <a href="${ADMIN_LEADS_URL}" style="display:inline-block;padding:14px 28px;background:${BRAND.gold};color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;border-radius:999px;">Open leads inbox</a>
      </div>
    </td>
  </tr>
  <tr>
    <td style="padding:0 32px 28px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${BRAND.cream};border-radius:12px;overflow:hidden;">
        <tr>
          <td style="padding:18px 20px;vertical-align:top;width:92px;">
            <img src="${PORTRAIT_URL}" alt="Stanley Montfort" width="72" height="72" style="display:block;width:72px;height:72px;border-radius:50%;object-fit:cover;object-position:center top;" />
          </td>
          <td style="padding:18px 20px 18px 0;font-family:system-ui,-apple-system,Segoe UI,sans-serif;vertical-align:top;">
            <div style="font-size:15px;font-weight:700;color:${BRAND.navy};margin-bottom:4px;">Stanley Montfort</div>
            <div style="font-size:13px;line-height:1.5;color:${BRAND.muted};margin-bottom:8px;">Montfort Real Estate · NYC brownstone expert</div>
            <div style="font-size:13px;line-height:1.6;color:${BRAND.text};">
              <a href="mailto:${OFFICE_EMAIL}" style="color:${BRAND.navy};text-decoration:none;">${OFFICE_EMAIL}</a><br />
              <a href="tel:+16469701078" style="color:${BRAND.navy};text-decoration:none;">${OFFICE_PHONE}</a><br />
              ${OFFICE_ADDRESS}
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 32px 24px;font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:12px;line-height:1.5;color:${BRAND.muted};text-align:center;">
      Reply to this email to reach the lead directly.<br />
      © ${new Date().getFullYear()} Montfort Real Estate LLC
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>`;

  return { subject, html, text };
}

async function sendEmailTo(
  lead: LeadRecord,
  config: GmailConfig,
  to: string,
): Promise<string> {
  const token = await getAccessToken(config);
  const sender = config.sender;
  const recipient = to.trim();
  if (!recipient.includes("@")) {
    throw new Error("A valid notification email address is required.");
  }
  const { subject, html, text } = buildEmail(lead);
  const boundary = `b${crypto.randomUUID().replace(/-/g, "")}`;

  const headers = [
    `From: Montfort Real Estate <${sender}>`,
    `To: ${recipient}`,
    lead.email ? `Reply-To: ${lead.email}` : "",
    `Subject: ${encodeHeader(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ].filter(Boolean);

  const raw = [
    ...headers,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "",
    text,
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "",
    html,
    `--${boundary}--`,
  ].join("\r\n");

  const res = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: base64Url(raw) }),
    },
  );

  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const detail = typeof body === "object" && body !== null
      ? JSON.stringify(body)
      : await res.text().catch(() => "");
    throw new Error(`Gmail send failed: HTTP ${res.status} ${String(detail).slice(0, 300)}`);
  }

  return String((body as { id?: string }).id || "");
}

function overallStatus(deliveries: DeliveryResult[]): string {
  if (!deliveries.length) return "failed";
  const delivered = deliveries.filter((d) => d.status === "delivered").length;
  const failed = deliveries.length - delivered;
  if (failed === 0) return "delivered";
  if (delivered === 0) return "failed";
  return "partially_delivered";
}

async function sendToRecipients(
  lead: LeadRecord,
  config: GmailConfig,
  recipients: string[],
  notificationId?: string,
): Promise<{ deliveries: DeliveryResult[]; overall: string }> {
  if (notificationId) {
    await markSending(notificationId, config.sender, recipients);
  }

  const deliveries: DeliveryResult[] = [];
  const queuedAt = new Date().toISOString();

  for (const recipient of recipients) {
    const sendingAt = new Date().toISOString();
    try {
      const messageId = await sendEmailTo(lead, config, recipient);
      deliveries.push({
        recipient,
        status: "delivered",
        message_id: messageId,
        queued_at: queuedAt,
        sending_at: sendingAt,
        delivered_at: new Date().toISOString(),
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      deliveries.push({
        recipient,
        status: "failed",
        error: message,
        queued_at: queuedAt,
        sending_at: sendingAt,
        failed_at: new Date().toISOString(),
      });
    }
  }

  const overall = overallStatus(deliveries);

  if (notificationId) {
    await finalizeNotification(notificationId, config.sender, deliveries);
  }

  return { deliveries, overall };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const payload = await req.json();
    const config = await loadConfig();

    if (payload?.test === true) {
      const expected = await expectedWebhookSecret();
      const provided = req.headers.get("x-webhook-secret") || "";
      const secretOk = Boolean(expected && provided === expected);

      let adminOk = false;
      const authHeader = req.headers.get("Authorization") || "";
      if (authHeader) {
        const asCaller = createClient(
          Deno.env.get("SUPABASE_URL") ?? "",
          Deno.env.get("SUPABASE_ANON_KEY") ?? "",
          { global: { headers: { Authorization: authHeader } }, auth: { persistSession: false } },
        );
        const { error: roleError } = await asCaller.rpc("lead_notify_status");
        adminOk = !roleError;
      }

      if (!secretOk && !adminOk) {
        return json({ error: "Not authorized" }, 403);
      }

      if (!config.enabled) {
        return json({ sent: false, reason: "Notifications are disabled on /admin/notifications." }, 503);
      }

      const testTo = String(payload?.to || "").trim().toLowerCase();
      if (!testTo.includes("@")) {
        return json({ error: "Enter a valid email address to send the test to." }, 400);
      }

      const testLead: LeadRecord = {
        first_name: "Test",
        last_name: "Lead",
        email: "test@example.com",
        phone: "(646) 970-1078",
        message:
          "This is a test notification from the Montfort admin dashboard. If you received this, email delivery is working.",
        form_type: "contact",
        source_page: "/admin/notifications",
      };

      const messageId = await sendEmailTo(testLead, config, testTo);
      await recordError("");
      return json({
        sent: true,
        to: testTo,
        sender: config.sender,
        deliveries: [{
          recipient: testTo,
          status: "delivered",
          message_id: messageId,
          delivered_at: new Date().toISOString(),
        }],
      });
    }

    const expected = await expectedWebhookSecret();
    const provided = req.headers.get("x-webhook-secret") || "";
    if (!expected || provided !== expected) {
      return json({
        error: "Forbidden — webhook secret mismatch. Re-save settings on /admin/notifications.",
      }, 403);
    }

    const lead: LeadRecord = payload?.record ?? payload?.lead ?? payload;
    const notificationId = String(payload?.notification_id || "").trim() || undefined;

    if (!lead || typeof lead !== "object") {
      return json({ error: "No lead in payload" }, 400);
    }

    if (!config.enabled) {
      const reason = "Notifications are disabled on /admin/notifications.";
      if (notificationId) {
        await finalizeNotification(notificationId, config.sender, [{
          recipient: "(none)",
          status: "failed",
          error: reason,
          failed_at: new Date().toISOString(),
        }]);
      }
      return json({ sent: false, reason, notification_id: notificationId }, 503);
    }

    const recipients = config.notifyRecipients;
    if (!recipients.length) {
      const reason = "No notification recipients configured. Add up to 4 on /admin/notifications.";
      if (notificationId) {
        await finalizeNotification(notificationId, config.sender, [{
          recipient: "(none)",
          status: "failed",
          error: reason,
          failed_at: new Date().toISOString(),
        }]);
      }
      await recordError(reason);
      return json({ sent: false, reason, notification_id: notificationId }, 422);
    }

    const { deliveries, overall } = await sendToRecipients(lead, config, recipients, notificationId);
    const anySent = deliveries.some((d) => d.status === "delivered");

    if (anySent) {
      await recordError("");
    } else {
      const firstError = deliveries.find((d) => d.error)?.error || "All recipients failed";
      await recordError(firstError);
    }

    return json({
      sent: anySent,
      notification_id: notificationId,
      sender: config.sender,
      overall_status: overall,
      recipient_count: recipients.length,
      deliveries,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("notify-lead failed:", message);
    await recordError(message);
    return json({ error: message, sent: false }, 500);
  }
});
