// Sends Stanley an email whenever a lead row is inserted.
//
// Invoked by the AFTER INSERT trigger on public.leads (see the
// 20260829090000_lead_notifications.sql migration), not by the browser.
// Auth is a shared secret header rather than a JWT, because Postgres has no
// user session to sign one — hence verify_jwt = false in config.toml.
//
// Gmail credentials come from public.lead_notify_config(), which is managed on
// /admin/notifications. Function secrets of the same name are used as a
// fallback so a CLI-configured deployment keeps working.
//
// Required function secret:
//   LEAD_WEBHOOK_SECRET must match the Vault secret lead_notify_secret

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

type GmailConfig = {
  enabled: boolean;
  clientId: string;
  clientSecret: string;
  refreshToken: string;
  sender: string;
  notifyTo: string;
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
};

const FORM_LABELS: Record<string, string> = {
  contact: "Contact",
  "listing-lead": "Listing popup",
  "listing-tour": "Tour request",
  "blog-embed": "Blog form",
  "home-valuation": "Home valuation",
  "market-report": "Market report",
  other: "Other",
};

const SITE_ORIGIN = "https://monttfortre.lovable.app";

function serviceClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } },
  );
}

async function loadConfig(): Promise<GmailConfig> {
  const fallback = (name: string) => Deno.env.get(name) ?? "";
  let row: Record<string, string | boolean> = {};

  try {
    const { data } = await serviceClient().rpc("lead_notify_config");
    if (data && typeof data === "object") row = data;
  } catch {
    // Migration not applied yet — fall back to function secrets below.
  }

  const config: GmailConfig = {
    enabled: row.enabled !== false,
    clientId: String(row.client_id || "") || fallback("GOOGLE_CLIENT_ID"),
    clientSecret: String(row.client_secret || "") || fallback("GOOGLE_CLIENT_SECRET"),
    refreshToken: String(row.refresh_token || "") || fallback("GOOGLE_REFRESH_TOKEN"),
    sender: String(row.sender_email || "") || fallback("GMAIL_SENDER"),
    notifyTo: String(row.notify_to || "") || fallback("LEAD_NOTIFY_TO"),
  };

  const missing = (Object.keys(config) as Array<keyof GmailConfig>).filter(
    (key) => key !== "enabled" && !config[key],
  );
  if (missing.length) {
    throw new Error(
      `Gmail notifications are not configured (missing ${missing.join(", ")}). ` +
        "Finish setup on /admin/notifications.",
    );
  }

  return config;
}

/** Surface the reason on the dashboard; never throws. */
async function recordError(message: string): Promise<void> {
  try {
    await serviceClient().rpc("lead_notify_set_error", { p_error: message });
  } catch {
    // Best effort only.
  }
}

function escapeHtml(raw: string): string {
  return raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** base64url over UTF-8, which is what the Gmail API expects for `raw`. */
function base64Url(input: string): string {
  const bytes = new TextEncoder().encode(input);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/** RFC 2047, so non-ASCII names survive in the Subject header. */
function encodeHeader(value: string): string {
  // eslint-disable-next-line no-control-regex
  if (/^[\x20-\x7E]*$/.test(value)) return value;
  return `=?UTF-8?B?${base64Url(value).replace(/-/g, "+").replace(/_/g, "/")}=?=`;
}

// Access tokens live an hour. Reuse across warm invocations to avoid a token
// round-trip per lead.
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
    // invalid_grant means the refresh token was revoked, the password changed,
    // or the consent screen is still in Testing mode (7-day expiry).
    const detail = body?.error_description || body?.error || `HTTP ${res.status}`;
    throw new Error(`Token refresh failed: ${detail}`);
  }

  cachedToken = {
    value: body.access_token as string,
    expiresAt: Date.now() + (Number(body.expires_in) || 3600) * 1000,
  };
  return cachedToken.value;
}

function buildEmail(lead: LeadRecord): { subject: string; html: string; text: string } {
  const name = `${lead.first_name || ""} ${lead.last_name || ""}`.trim() || lead.email || "New lead";
  const formLabel = FORM_LABELS[lead.form_type || "other"] || lead.form_type || "Other";
  const subject = `${formLabel}: ${name}`;

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Email", lead.email || ""],
    ["Phone", lead.phone || ""],
    ["Form", formLabel],
    ["Page", lead.source_page || ""],
    ["Listing", lead.listing_slug || ""],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]));

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    lead.message || "(no message)",
    "",
    `${SITE_ORIGIN}/admin/leads`,
  ].join("\n");

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#6b7280;">${escapeHtml(label)}</td>` +
        `<td style="padding:4px 0;color:#111827;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:560px;">
<h2 style="margin:0 0 16px;font-size:18px;color:#111827;">${escapeHtml(subject)}</h2>
<table style="border-collapse:collapse;font-size:14px;margin-bottom:16px;">${rowsHtml}</table>
${
    lead.message
      ? `<div style="padding:12px 16px;background:#f9fafb;border-left:3px solid #d1d5db;font-size:14px;color:#374151;white-space:pre-wrap;">${
        escapeHtml(lead.message)
      }</div>`
      : ""
  }
<p style="margin:16px 0 0;font-size:13px;">
<a href="${SITE_ORIGIN}/admin/leads" style="color:#2563eb;">Open the leads inbox</a>
</p>
</div>`;

  return { subject, html, text };
}

async function sendEmail(lead: LeadRecord, config: GmailConfig): Promise<void> {
  const token = await getAccessToken(config);
  const sender = config.sender;
  const to = config.notifyTo;
  const { subject, html, text } = buildEmail(lead);
  const boundary = `b${crypto.randomUUID().replace(/-/g, "")}`;

  const headers = [
    `From: ${sender}`,
    `To: ${to}`,
    // Replying in Gmail then goes straight to the lead.
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

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Gmail send failed: HTTP ${res.status} ${detail.slice(0, 300)}`);
  }
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  if (req.headers.get("x-webhook-secret") !== Deno.env.get("LEAD_WEBHOOK_SECRET")) {
    return new Response("Forbidden", { status: 403 });
  }

  try {
    const payload = await req.json();
    const lead: LeadRecord = payload?.record ?? payload?.lead ?? payload;
    if (!lead || typeof lead !== "object") {
      return new Response(JSON.stringify({ error: "No lead in payload" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const config = await loadConfig();
    if (!config.enabled) {
      return new Response(JSON.stringify({ sent: false, reason: "disabled" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    await sendEmail(lead, config);
    return new Response(JSON.stringify({ sent: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("notify-lead failed:", message);
    await recordError(message);
    // 500 so the delivery log records the failure and the lead is still saved.
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
