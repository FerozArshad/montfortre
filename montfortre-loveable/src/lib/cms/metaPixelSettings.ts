import { getSupabase } from "../supabase";
import { getRequiredUserId } from "./ownership";
import { invalidateTrackingPublicConfig } from "../trackingPublic";

export type MetaPixelStatus = {
  enabled: boolean;
  pixel_id: string;
  track_page_views: boolean;
  track_leads: boolean;
  track_listing_views: boolean;
  production_only: boolean;
  capi_enabled: boolean;
  test_event_code: string;
  updated_at: string;
  has_capi_access_token: boolean;
};

export type TurnstileStatus = {
  enabled: boolean;
  site_key: string;
  production_only: boolean;
  updated_at: string;
  has_secret_key: boolean;
};

export type MetaPixelPublicConfig = {
  enabled: boolean;
  pixel_id?: string;
  track_page_views?: boolean;
  track_leads?: boolean;
  track_listing_views?: boolean;
  production_only?: boolean;
  capi_enabled?: boolean;
};

const PIXEL_ID_RE = /^[0-9]{10,20}$/;

export function isValidMetaPixelId(value: string): boolean {
  return PIXEL_ID_RE.test(value.trim());
}

function missingSchema(message: string): boolean {
  return /does not exist|schema cache|PGRST202|PGRST205/i.test(message);
}

export async function fetchMetaPixelStatus(): Promise<MetaPixelStatus> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb.rpc("meta_pixel_status");
  if (error) {
    if (missingSchema(error.message)) {
      throw new Error(
        "Meta Pixel settings are missing. Run supabase/migrations/20260902100000_meta_pixel_settings.sql in Cloud SQL.",
      );
    }
    throw new Error(error.message);
  }
  return data as MetaPixelStatus;
}

export async function fetchTurnstileStatus(): Promise<TurnstileStatus> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb.rpc("turnstile_status");
  if (error) {
    if (missingSchema(error.message)) {
      throw new Error(
        "Turnstile settings are missing. Run supabase/migrations/20260902120000_turnstile_meta_capi.sql in Cloud SQL.",
      );
    }
    throw new Error(error.message);
  }
  return data as TurnstileStatus;
}

export async function saveMetaPixelConfig(input: {
  pixelId: string;
  enabled: boolean;
  trackPageViews: boolean;
  trackLeads: boolean;
  trackListingViews: boolean;
  productionOnly: boolean;
  capiEnabled: boolean;
  capiAccessToken: string;
  testEventCode: string;
}): Promise<MetaPixelStatus> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const pixelId = input.pixelId.trim();
  if (input.enabled && !isValidMetaPixelId(pixelId)) {
    throw new Error("Enter a valid Meta Pixel ID (10–20 digits) before enabling tracking.");
  }
  if (pixelId && !isValidMetaPixelId(pixelId)) {
    throw new Error("Meta Pixel ID must be 10–20 digits (numbers only).");
  }

  const { data, error } = await sb.rpc("meta_pixel_save_config", {
    p_pixel_id: pixelId,
    p_enabled: input.enabled,
    p_track_page_views: input.trackPageViews,
    p_track_leads: input.trackLeads,
    p_track_listing_views: input.trackListingViews,
    p_production_only: input.productionOnly,
    p_capi_enabled: input.capiEnabled,
    p_capi_access_token: input.capiAccessToken.trim() || null,
    p_test_event_code: input.testEventCode.trim() || null,
  });
  if (error) throw new Error(error.message);
  invalidateTrackingPublicConfig();
  return data as MetaPixelStatus;
}

export async function saveTurnstileConfig(input: {
  siteKey: string;
  secretKey: string;
  enabled: boolean;
  productionOnly: boolean;
}): Promise<TurnstileStatus> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb.rpc("turnstile_save_config", {
    p_site_key: input.siteKey.trim(),
    p_secret_key: input.secretKey.trim() || null,
    p_enabled: input.enabled,
    p_production_only: input.productionOnly,
  });
  if (error) throw new Error(error.message);
  invalidateTrackingPublicConfig();
  return data as TurnstileStatus;
}

export async function fetchMetaPixelPublicConfig(): Promise<MetaPixelPublicConfig> {
  const sb = getSupabase();
  if (!sb) return { enabled: false, capi_enabled: false };

  const { data, error } = await sb.rpc("meta_pixel_public_config");
  if (error) {
    if (missingSchema(error.message)) return { enabled: false, capi_enabled: false };
    return { enabled: false, capi_enabled: false };
  }
  return (data || { enabled: false, capi_enabled: false }) as MetaPixelPublicConfig;
}
