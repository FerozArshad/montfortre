import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { completeGmailConnect, consumeOauthState } from "../lib/cms/leadNotify";

/**
 * Landing page for Google's OAuth redirect. Exchanges the authorisation code
 * through the gmail-oauth function, then returns to the notifications page with
 * the outcome. Registered on the OAuth client as <origin>/auth/google.
 */
export default function GoogleOAuthCallback() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("Finishing the Gmail connection…");
  // Codes are single-use, so guard against StrictMode's double effect.
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const back = (query: string) => navigate(`/admin/notifications?${query}`, { replace: true });

    const denied = params.get("error");
    if (denied) {
      back(`error=${encodeURIComponent(`Google returned: ${denied}`)}`);
      return;
    }

    const code = params.get("code");
    if (!code) {
      back(`error=${encodeURIComponent("No authorisation code was returned by Google.")}`);
      return;
    }

    const expected = consumeOauthState();
    const received = params.get("state");
    if (expected && received && expected !== received) {
      back(`error=${encodeURIComponent("Security check failed (state mismatch). Please try again.")}`);
      return;
    }

    (async () => {
      try {
        const { email } = await completeGmailConnect(code);
        back(`connected=${encodeURIComponent(email || "1")}`);
      } catch (e) {
        const detail = e instanceof Error ? e.message : "Could not complete the connection.";
        setMessage(detail);
        back(`error=${encodeURIComponent(detail)}`);
      }
    })();
  }, [params, navigate]);

  return (
    <div style={{ padding: "80px 24px", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
      <p>{message}</p>
    </div>
  );
}
