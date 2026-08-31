import { getSupabase } from "../supabase";
import { getRequiredUserId } from "./ownership";

export type LeadNotifyStatus = {
  enabled: boolean;
  client_id: string;
  sender_email: string;
  notify_to: string;
  connected_email: string;
  last_error: string;
  connected_at: string | null;
  updated_at: string;
  has_client_secret: boolean;
  has_refresh_token: boolean;
};

export type LeadNotifyLogRow = {
  id: string;
  lead_id: string;
  status: "queued" | "sent" | "failed";
  error: string;
  created_at: string;
  settled_at: string | null;
};

export const GOOGLE_SCOPES = [
  "https://www.googleapis.com/auth/gmail.send",
  // Only used to label the connection with the mailbox that authorised it.
  "https://www.googleapis.com/auth/userinfo.email",
].join(" ");

const STATE_KEY = "gmail_oauth_state";

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
  return data as LeadNotifyStatus;
}

export async function saveLeadNotifyConfig(input: {
  clientId: string;
  clientSecret: string;
  senderEmail: string;
  notifyTo: string;
  enabled: boolean;
}): Promise<LeadNotifyStatus> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb.rpc("lead_notify_save_config", {
    p_client_id: input.clientId.trim(),
    // Blank keeps whatever is already stored.
    p_client_secret: input.clientSecret.trim(),
    p_sender_email: input.senderEmail.trim(),
    p_notify_to: input.notifyTo.trim(),
    p_enabled: input.enabled,
  });
  if (error) throw new Error(error.message);
  return data as LeadNotifyStatus;
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
      // Both are required for Google to return a refresh token at all.
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
    // invoke() reports non-2xx generically, so surface the function's own message.
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
    .select("id, lead_id, status, error, created_at, settled_at")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    if (missingSchema(error.message)) return [];
    throw new Error(error.message);
  }
  return (data || []) as LeadNotifyLogRow[];
}
