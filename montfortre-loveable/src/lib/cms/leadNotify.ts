import { getSupabase, getSupabaseUrl } from "../supabase";
import { getRequiredUserId } from "./ownership";

export type LeadNotifyRecipient = {
  id: string;
  email: string;
  sort_order: number;
};

export type LeadNotifyStatus = {
  enabled: boolean;
  client_id: string;
  sender_email: string;
  notify_to: string;
  recipients: LeadNotifyRecipient[];
  connected_email: string;
  last_error: string;
  connected_at: string | null;
  updated_at: string;
  has_client_secret: boolean;
  has_refresh_token: boolean;
  has_webhook_secret: boolean;
  has_notify_url: boolean;
};

export type LeadNotifyDeliveryRow = {
  id: string;
  recipient_email: string;
  sender_email: string;
  status: "queued" | "sending" | "delivered" | "failed";
  error: string;
  provider_message_id: string;
  queued_at: string | null;
  sending_at: string | null;
  delivered_at: string | null;
  failed_at: string | null;
};

export type LeadNotifyLogRow = {
  id: string;
  lead_id: string;
  status: "queued" | "sending" | "delivered" | "failed" | "partially_delivered" | "sent";
  error: string;
  created_at: string;
  settled_at: string | null;
  queued_at: string | null;
  started_at: string | null;
  sender_email: string;
  recipient_count: number;
  deliveries: LeadNotifyDeliveryRow[];
};

export const MAX_NOTIFY_RECIPIENTS = 4;

export const GOOGLE_SCOPES = [
  "https://www.googleapis.com/auth/gmail.send",
  "https://www.googleapis.com/auth/userinfo.email",
].join(" ");

const STATE_KEY = "gmail_oauth_state";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidNotifyEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

export function normalizeNotifyRecipients(values: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of values) {
    const email = raw.trim().toLowerCase();
    if (!email || !isValidNotifyEmail(email) || seen.has(email)) continue;
    seen.add(email);
    out.push(email);
  }
  return out.slice(0, MAX_NOTIFY_RECIPIENTS);
}

/** Where Google sends the admin back. Must be registered on the OAuth client. */
export function oauthRedirectUri(): string {
  return `${window.location.origin}/auth/google`;
}

function missingSchema(message: string): boolean {
  return /does not exist|schema cache|PGRST202|PGRST205/i.test(message);
}

export async function fetchLeadNotifyStatus(): Promise<LeadNotifyStatus> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb.rpc("lead_notify_status");
  if (error) {
    if (missingSchema(error.message)) {
      throw new Error(
        "Notification settings are missing. Run supabase/migrations/20260830090000_lead_notify_settings.sql in Cloud SQL.",
      );
    }
    throw new Error(error.message);
  }

  const row = data as LeadNotifyStatus;
  return {
    ...row,
    recipients: Array.isArray(row.recipients) ? row.recipients : [],
  };
}

export async function saveLeadNotifyConfig(input: {
  clientId: string;
  clientSecret: string;
  senderEmail: string;
  notifyTo: string;
  recipients: string[];
  enabled: boolean;
  webhookSecret?: string;
  notifyUrl?: string;
}): Promise<LeadNotifyStatus> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const recipients = normalizeNotifyRecipients(input.recipients);
  if (recipients.length === 0 && input.enabled) {
    throw new Error("Add at least one notification recipient, or turn off email notifications.");
  }

  const { data, error } = await sb.rpc("lead_notify_save_config", {
    p_client_id: input.clientId.trim(),
    p_client_secret: input.clientSecret.trim(),
    p_sender_email: input.senderEmail.trim(),
    p_notify_to: recipients[0] || input.notifyTo.trim(),
    p_enabled: input.enabled,
    p_webhook_secret: (input.webhookSecret || "").trim(),
    p_notify_url: (input.notifyUrl || notifyFunctionUrl()).trim(),
    p_notify_recipients: recipients,
  });
  if (error) throw new Error(error.message);
  return data as LeadNotifyStatus;
}

/** URL the leads trigger posts to. Saved into Vault as lead_notify_url. */
export function notifyFunctionUrl(): string {
  const base = getSupabaseUrl();
  return base ? `${base}/functions/v1/notify-lead` : "";
}

export async function reconcileLeadNotifications(): Promise<number> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb.rpc("lead_notifications_reconcile");
  if (error) throw new Error(error.message);
  return Number(data || 0);
}

/** Sends a branded test email to the address the admin chooses. */
export async function sendTestNotification(to: string): Promise<{ to: string }> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const email = to.trim();
  if (!email || !isValidNotifyEmail(email)) {
    throw new Error("Enter a valid email address to send the test to.");
  }

  const { data, error } = await sb.rpc("lead_notify_send_test", { p_to: email });
  if (error) {
    if (missingSchema(error.message)) {
      throw new Error(
        "Test send is not set up yet. Run supabase/migrations/20260901140000_lead_notify_send_test.sql in Cloud SQL.",
      );
    }
    throw new Error(error.message);
  }

  const queued = data as { queued?: boolean; to?: string; request_id?: number };
  const requestId = Number(queued?.request_id || 0);
  if (!requestId) {
    throw new Error("Could not queue the test email. Re-save settings on /admin/notifications.");
  }

  for (let attempt = 0; attempt < 12; attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const { data: poll, error: pollError } = await sb.rpc("lead_notify_poll_test", {
      p_request_id: requestId,
    });
    if (pollError) throw new Error(pollError.message);

    const result = poll as { status?: string; error?: string; detail?: string; to?: string };
    if (result.status === "pending") continue;

    if (result.status === "sent") {
      const deliveredTo = (result.to || queued.to || email).trim();
      return { to: deliveredTo };
    }

    let detail = result.error || "Test send failed";
    try {
      const parsed = JSON.parse(result.detail || "{}") as { error?: string; reason?: string };
      if (parsed.error) detail = parsed.error;
      else if (parsed.reason) detail = parsed.reason;
    } catch {
      // Keep the raw HTTP detail.
    }
    throw new Error(detail);
  }

  throw new Error("Test is still processing. Refresh the page and check the activity log below.");
}

export async function disconnectGmail(): Promise<LeadNotifyStatus> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb.rpc("lead_notify_disconnect");
  if (error) throw new Error(error.message);
  return data as LeadNotifyStatus;
}

/** Sends the admin to Google's consent screen. */
export function startGmailConnect(clientId: string): void {
  const state = crypto.randomUUID();
  sessionStorage.setItem(STATE_KEY, state);

  const url =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    new URLSearchParams({
      client_id: clientId,
      redirect_uri: oauthRedirectUri(),
      response_type: "code",
      scope: GOOGLE_SCOPES,
      access_type: "offline",
      prompt: "consent",
      state,
    });

  window.location.href = url;
}

export function consumeOauthState(): string | null {
  const state = sessionStorage.getItem(STATE_KEY);
  sessionStorage.removeItem(STATE_KEY);
  return state;
}

/** Hands the authorisation code to the gmail-oauth Edge Function. */
export async function completeGmailConnect(code: string): Promise<{ email: string }> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");

  const { data, error } = await sb.functions.invoke("gmail-oauth", {
    body: { code, redirect_uri: oauthRedirectUri() },
  });

  if (error) {
    let detail = error.message;
    const res = (error as { context?: Response }).context;
    if (res && typeof res.json === "function") {
      const body = await res.json().catch(() => null);
      if (body?.error) detail = body.error;
    }
    throw new Error(detail);
  }
  if (data?.error) throw new Error(data.error);

  return { email: data?.email || "" };
}

export async function fetchLeadNotifyLog(limit = 20): Promise<LeadNotifyLogRow[]> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb
    .from("lead_notifications")
    .select(
      "id, lead_id, status, error, created_at, settled_at, queued_at, started_at, sender_email, recipient_count, deliveries:lead_notification_deliveries(id, recipient_email, sender_email, status, error, provider_message_id, queued_at, sending_at, delivered_at, failed_at)",
    )
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    if (missingSchema(error.message)) return [];
    throw new Error(error.message);
  }

  return ((data || []) as LeadNotifyLogRow[]).map((row) => ({
    ...row,
    deliveries: [...(row.deliveries || [])].sort((a, b) =>
      a.recipient_email.localeCompare(b.recipient_email),
    ),
  }));
}

export function formatNotifyStatus(status: LeadNotifyLogRow["status"]): string {
  switch (status) {
    case "queued":
      return "Queued";
    case "sending":
      return "Sending";
    case "delivered":
    case "sent":
      return "Delivered";
    case "partially_delivered":
      return "Partially Delivered";
    case "failed":
      return "Failed";
    default:
      return status;
  }
}

export function formatDeliveryStatus(status: LeadNotifyDeliveryRow["status"]): string {
  switch (status) {
    case "queued":
      return "Queued";
    case "sending":
      return "Sending";
    case "delivered":
      return "Delivered";
    case "failed":
      return "Failed";
    default:
      return status;
  }
}

export function shortLeadRef(leadId: string): string {
  return leadId ? leadId.slice(0, 8) : "—";
}
