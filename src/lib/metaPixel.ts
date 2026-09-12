import type { MetaPixelPublicConfig } from "./cms/metaPixelSettings";
import { isProductionHostname } from "./siteOrigin";

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

type FbqFn = {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
  push?: FbqFn;
};

let runtimeConfig: MetaPixelPublicConfig = { enabled: false };
let initializedPixelId = "";
let scriptPromise: Promise<void> | null = null;

export function setMetaPixelRuntimeConfig(config: MetaPixelPublicConfig): void {
  runtimeConfig = config;
}

export function getMetaPixelRuntimeConfig(): MetaPixelPublicConfig {
  return runtimeConfig;
}

function shouldRunPixel(config: MetaPixelPublicConfig = runtimeConfig): boolean {
  if (!config.enabled || !config.pixel_id) return false;
  if (config.production_only !== false && !isProductionHostname(window.location.hostname)) {
    return false;
  }
  return true;
}

function loadMetaPixelScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.fbq) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-meta-pixel="true"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Meta Pixel script failed to load")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    script.dataset.metaPixel = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Meta Pixel script failed to load"));
    document.head.appendChild(script);
  });

  return scriptPromise;
}

function ensureFbq(): FbqFn | null {
  if (typeof window === "undefined") return null;
  if (window.fbq) return window.fbq;

  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue?.push(args);
    }
  } as FbqFn;

  fbq.queue = [];
  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
  return fbq;
}

export async function initMetaPixel(config: MetaPixelPublicConfig): Promise<boolean> {
  setMetaPixelRuntimeConfig(config);
  if (!shouldRunPixel(config)) return false;

  const pixelId = String(config.pixel_id || "").trim();
  if (!pixelId) return false;

  ensureFbq();
  await loadMetaPixelScript();

  if (initializedPixelId !== pixelId) {
    window.fbq?.("init", pixelId);
    initializedPixelId = pixelId;
  }

  return true;
}

export function createMetaEventId(): string {
  return crypto.randomUUID();
}

export function trackMetaPageView(input?: { eventId?: string }): string {
  const eventId = input?.eventId || createMetaEventId();
  if (!shouldRunPixel() || runtimeConfig.track_page_views === false) return eventId;
  window.fbq?.("track", "PageView", {}, { eventID: eventId });
  return eventId;
}

export function trackMetaLead(input: {
  formType: string;
  sourcePage?: string;
  listingSlug?: string;
  eventId?: string;
}): void {
  if (!shouldRunPixel() || runtimeConfig.track_leads === false) return;
  if (!window.fbq) return;

  const eventId = input.eventId || createMetaEventId();
  window.fbq(
    "track",
    "Lead",
    {
      content_name: input.formType || "lead",
      content_category: "lead_form",
      ...(input.sourcePage ? { source_url: input.sourcePage } : {}),
      ...(input.listingSlug ? { listing_slug: input.listingSlug } : {}),
    },
    { eventID: eventId },
  );
}

export function trackMetaListingView(input: { slug: string; title: string; eventId?: string }): string {
  if (!shouldRunPixel() || runtimeConfig.track_listing_views === false) return input.eventId || createMetaEventId();
  if (!window.fbq) return input.eventId || createMetaEventId();

  const eventId = input.eventId || createMetaEventId();
  window.fbq(
    "track",
    "ViewContent",
    {
      content_name: input.title || input.slug,
      content_category: "listing",
      content_ids: [input.slug],
    },
    { eventID: eventId },
  );
  return eventId;
}
