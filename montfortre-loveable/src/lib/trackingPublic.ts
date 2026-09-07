import { getSupabase } from "./supabase";
import { isProductionHostname } from "./siteOrigin";

export type TurnstilePublicConfig = {
  enabled: boolean;
  site_key?: string;
  production_only?: boolean;
};

export type MetaPublicConfig = {
  enabled: boolean;
  pixel_id?: string;
  track_page_views?: boolean;
  track_leads?: boolean;
  track_listing_views?: boolean;
  production_only?: boolean;
  capi_enabled?: boolean;
};

export type TrackingPublicConfig = {
  turnstile: TurnstilePublicConfig;
  meta: MetaPublicConfig;
};

const EMPTY: TrackingPublicConfig = {
  turnstile: { enabled: false },
  meta: { enabled: false, capi_enabled: false },
};

let cached: TrackingPublicConfig | null = null;
let inflight: Promise<TrackingPublicConfig> | null = null;

export function shouldUseTurnstile(config: TrackingPublicConfig): boolean {
  if (!config.turnstile.enabled || !config.turnstile.site_key) return false;
  if (config.turnstile.production_only !== false && !isProductionHostname(window.location.hostname)) {
    return false;
  }
  return true;
}

export async function fetchTrackingPublicConfig(force = false): Promise<TrackingPublicConfig> {
  if (!force && cached) return cached;
  if (!force && inflight) return inflight;

  inflight = (async () => {
    const sb = getSupabase();
    if (!sb) {
      cached = EMPTY;
      return EMPTY;
    }

    const { data, error } = await sb.rpc("tracking_public_config");
    if (error || !data) {
      cached = EMPTY;
      return EMPTY;
    }

    const row = data as TrackingPublicConfig;
    cached = {
      turnstile: row.turnstile || { enabled: false },
      meta: row.meta || { enabled: false, capi_enabled: false },
    };
    return cached;
  })();

  try {
    return await inflight;
  } finally {
    inflight = null;
  }
}

export function invalidateTrackingPublicConfig(): void {
  cached = null;
}
