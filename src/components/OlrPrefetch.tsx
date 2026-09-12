import { useEffect } from "react";
import {
  prefetchOlrNeighborhoodHubs,
  prefetchOlrSalesCatalog,
  prefetchOlrSavedSearch,
  savedSearchIdForPath,
} from "../lib/olrListings";

/**
 * Warms OLR caches in the background and on neighborhood-link hover
 * so listing cards paint from localStorage/memory instead of a cold OLR call.
 */
export default function OlrPrefetch() {
  useEffect(() => {
    const warm = () => {
      prefetchOlrSalesCatalog();
      prefetchOlrNeighborhoodHubs();
    };
    let idleId: number | undefined;
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(warm, { timeout: 3500 });
    } else {
      timer = setTimeout(warm, 1000);
    }
    return () => {
      if (idleId != null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timer != null) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const onIntent = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      let path = "";
      try {
        path = new URL(anchor.href, window.location.origin).pathname;
      } catch {
        return;
      }
      const id = savedSearchIdForPath(path);
      if (id) prefetchOlrSavedSearch(id);
    };

    document.addEventListener("pointerover", onIntent, { passive: true, capture: true });
    document.addEventListener("focusin", onIntent, { capture: true });
    return () => {
      document.removeEventListener("pointerover", onIntent, true);
      document.removeEventListener("focusin", onIntent, true);
    };
  }, []);

  return null;
}
