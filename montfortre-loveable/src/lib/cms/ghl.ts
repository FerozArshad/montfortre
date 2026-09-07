import { getSupabase, getSupabaseUrl } from "../supabase";
import { getRequiredUserId } from "./ownership";

export type GhlStatus = {
  enabled: boolean;
  location_id: string;
  source_label: string;
  last_error: string;
  connected_at: string | null;
  updated_at: string;
  has_token: boolean;
  has_inbound_secret: boolean;
  has_sync_url: boolean;
};

export type GhlSyncLogRow = {
  id: string;
  lead_id: string;
  contact_id: string;
  status: "queued" | "synced" | "failed" | "skipped";
  error: string;
  created_at: string;
  settled_at: string | null;
};

function missingSchema(message: string): boolean {
  return /does not exist|schema cache|PGRST202|PGRST205/i.test(message);
}

export async function fetchGhlStatus(): Promise<GhlStatus> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb.rpc("ghl_status");
  if (error) {
    if (missingSchema(error.message)) {
      throw new Error(
        "GoHighLevel settings are missing. Run supabase/migrations/20260901010000_ghl_sync.sql in Cloud SQL.",
      );
    }
    throw new Error(error.message);
  }
  return data as GhlStatus;
}

export async function saveGhlConfig(input: {
  locationId: string;
  token: string;
  sourceLabel: string;
  enabled: boolean;
  inboundSecret: string;
  syncUrl: string;
}): Promise<GhlStatus> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb.rpc("ghl_save_config", {
    p_location_id: input.locationId.trim(),
    // Blank keeps whatever is already stored.
    p_token: input.token.trim(),
    p_source_label: input.sourceLabel.trim(),
    p_enabled: input.enabled,
    p_inbound_secret: input.inboundSecret.trim(),
    p_sync_url: input.syncUrl.trim(),
  });
  if (error) throw new Error(error.message);
  return data as GhlStatus;
}

export async function disconnectGhl(): Promise<GhlStatus> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb.rpc("ghl_disconnect");
  if (error) throw new Error(error.message);
  return data as GhlStatus;
}

export async function fetchGhlSyncLog(limit = 20): Promise<GhlSyncLogRow[]> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb
    .from("ghl_sync_log")
    .select("id, lead_id, contact_id, status, error, created_at, settled_at")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    if (missingSchema(error.message)) return [];
    throw new Error(error.message);
  }
  return (data || []) as GhlSyncLogRow[];
}

/** Copies pg_net results into the log so the admin does not wait for the cron. */
export async function reconcileGhlSync(): Promise<number> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb.rpc("ghl_sync_reconcile");
  if (error) throw new Error(error.message);
  return Number(data || 0);
}

/** The URL a GHL workflow webhook should POST to, including the shared secret. */
export function inboundWebhookUrl(secret: string): string {
  const base = getSupabaseUrl();
  if (!base) return "";
  const query = secret ? `?secret=${encodeURIComponent(secret)}` : "";
  return `${base}/functions/v1/ghl-inbound${query}`;
}

/** The URL the leads trigger posts to. Saved into Vault as ghl_sync_url. */
export function outboundFunctionUrl(): string {
  const base = getSupabaseUrl();
  return base ? `${base}/functions/v1/ghl-sync` : "";
}
