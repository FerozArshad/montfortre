import { getSupabase } from "./supabase";
import { getSiteOrigin } from "./siteOrigin";
import { fetchTrackingPublicConfig } from "./trackingPublic";

export async function sendMetaCapiEvent(input: {
  eventName: "PageView" | "ViewContent" | "Lead";
  eventId?: string;
  eventSourceUrl?: string;
  customData?: Record<string, unknown>;
  email?: string;
  phone?: string;
}): Promise<void> {
  const config = await fetchTrackingPublicConfig();
  if (!config.meta.capi_enabled) return;

  const sb = getSupabase();
  if (!sb) return;

  const eventId = input.eventId || crypto.randomUUID();
  const origin = getSiteOrigin();
  const eventSourceUrl = input.eventSourceUrl || origin;

  try {
    await sb.functions.invoke("meta-capi", {
      body: {
        event_name: input.eventName,
        event_id: eventId,
        event_source_url: eventSourceUrl,
        custom_data: input.customData,
        email: input.email,
        phone: input.phone,
      },
    });
  } catch {
    // Best effort — browser pixel remains primary.
  }

  return;
}

export function createMetaEventId(): string {
  return crypto.randomUUID();
}
