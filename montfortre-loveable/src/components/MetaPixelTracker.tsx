import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { fetchTrackingPublicConfig } from "../lib/trackingPublic";
import { createMetaEventId, initMetaPixel, trackMetaPageView } from "../lib/metaPixel";
import { sendMetaCapiEvent } from "../lib/metaCapi";

function isPublicMarketingPath(pathname: string): boolean {
  return !pathname.startsWith("/admin") && !pathname.startsWith("/auth/");
}

export default function MetaPixelTracker() {
  const { pathname } = useLocation();
  const readyRef = useRef(false);
  const lastPathRef = useRef("");
  const capiEnabledRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const config = await fetchTrackingPublicConfig();
      if (cancelled) return;

      capiEnabledRef.current = Boolean(config.meta.capi_enabled);
      const ready = await initMetaPixel(config.meta);
      readyRef.current = ready;

      if (ready && isPublicMarketingPath(pathname)) {
        const eventId = trackMetaPageView({ eventId: createMetaEventId() });
        if (capiEnabledRef.current) {
          void sendMetaCapiEvent({
            eventName: "PageView",
            eventId,
            eventSourceUrl: window.location.href,
          });
        }
        lastPathRef.current = pathname;
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!readyRef.current || !isPublicMarketingPath(pathname)) return;
    if (lastPathRef.current === pathname) return;
    lastPathRef.current = pathname;

    const eventId = trackMetaPageView({ eventId: createMetaEventId() });
    if (capiEnabledRef.current) {
      void sendMetaCapiEvent({
        eventName: "PageView",
        eventId,
        eventSourceUrl: window.location.href,
      });
    }
  }, [pathname]);

  return null;
}
