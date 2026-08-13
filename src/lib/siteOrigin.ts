/** Production origin stored in frozen SEO modules. Do not edit those files. */

export const PRODUCTION_SITE_ORIGIN = "https://montfortre.com";

const PRODUCTION_ORIGIN_RE = /https?:\/\/(?:www\.)?montfortre\.com/gi;

export function normalizeOrigin(raw: string): string {
  return raw.trim().replace(/\/+$/, "");
}

/**
 * Active site origin for the current deploy.
 * 1. `VITE_PUBLIC_SITE_URL` if set (no trailing slash), e.g. https://staging.example.com
 * 2. Else `window.location.origin` (GHL preview, custom domains, production)
 * 3. Else production origin
 */
export function getSiteOrigin(): string {
  const fromEnv = import.meta.env.VITE_PUBLIC_SITE_URL;
  if (typeof fromEnv === "string" && fromEnv.trim()) {
    return normalizeOrigin(fromEnv);
  }
  if (typeof window !== "undefined" && window.location?.origin) {
    return normalizeOrigin(window.location.origin);
  }
  return PRODUCTION_SITE_ORIGIN;
}

export function isProductionHostname(hostname: string): boolean {
  return /^(www\.)?montfortre\.com$/i.test(hostname);
}

/** Rewrite frozen https://montfortre.com URLs to the current origin. Leaves emails and third-party URLs alone. */
export function adaptSiteUrls(value: string, origin = getSiteOrigin()): string {
  return value.replace(PRODUCTION_ORIGIN_RE, origin);
}
