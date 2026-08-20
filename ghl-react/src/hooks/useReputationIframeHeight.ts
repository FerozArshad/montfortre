import { useEffect, useState, type RefObject } from "react";

const DEFAULT_HEIGHT = 560;
const MIN_HEIGHT = 320;
const MAX_HEIGHT = 4000;

function readHeight(data: unknown): number | null {
  if (typeof data === "number" && Number.isFinite(data)) return data;
  if (typeof data === "string") {
    const n = Number(data);
    return Number.isFinite(n) ? n : null;
  }
  if (!data || typeof data !== "object") return null;

  const record = data as Record<string, unknown>;
  for (const key of ["frameHeight", "height", "iframeHeight", "scrollHeight"]) {
    const value = record[key];
    if (typeof value === "number" && Number.isFinite(value)) return value;
    if (typeof value === "string") {
      const n = Number(value);
      if (Number.isFinite(n)) return n;
    }
  }
  return null;
}

function isTrustedOrigin(origin: string) {
  return (
    origin.includes("reputationhub.site") ||
    origin.includes("leadconnectorhq.com") ||
    origin.includes("msgsndr.com")
  );
}

/** Resize ReputationHub review iframe from widget postMessage height updates. */
export default function useReputationIframeHeight(iframeRef: RefObject<HTMLIFrameElement | null>) {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.origin && !isTrustedOrigin(event.origin)) return;
      if (
        iframeRef.current?.contentWindow &&
        event.source &&
        event.source !== iframeRef.current.contentWindow
      ) {
        return;
      }

      const raw = readHeight(event.data);
      if (raw == null) return;
      const next = Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, Math.round(raw)));
      setHeight(next);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [iframeRef]);

  return height;
}
