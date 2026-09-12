import { useCallback, useEffect, useState } from "react";
import { fetchTrackingPublicConfig, shouldUseTurnstile } from "../lib/trackingPublic";

export function useLeadFormTurnstile() {
  const [required, setRequired] = useState(false);
  const [siteKey, setSiteKey] = useState("");
  const [token, setToken] = useState("");
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    let cancelled = false;
    fetchTrackingPublicConfig().then((config) => {
      if (cancelled) return;
      const active = shouldUseTurnstile(config);
      setRequired(active);
      setSiteKey(active ? String(config.turnstile.site_key || "") : "");
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const resetTurnstile = useCallback(() => {
    setToken("");
    setResetKey((value) => value + 1);
  }, []);

  const requireToken = useCallback((): string => {
    if (required && !token.trim()) {
      throw new Error("Complete the security check and try again.");
    }
    return token.trim();
  }, [required, token]);

  return {
    required,
    siteKey,
    token,
    setToken,
    resetKey,
    resetTurnstile,
    requireToken,
  };
}
