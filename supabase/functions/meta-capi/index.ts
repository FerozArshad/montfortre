// Server-side Meta Conversions API for PageView / ViewContent (and optional Lead retry).
// Keeps the access token off the browser.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

function serviceClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } },
  );
}

type ServerConfig = {
  meta_pixel_id?: string;
  meta_capi_enabled?: boolean;
  meta_capi_token?: string;
  meta_test_event_code?: string;
};

async function loadConfig(): Promise<ServerConfig> {
  const { data } = await serviceClient().rpc("tracking_server_config");
  return (data && typeof data === "object") ? (data as ServerConfig) : {};
}

async function sha256Hex(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const config = await loadConfig();
    if (!config.meta_capi_enabled) {
      return json({ sent: false, reason: "CAPI disabled" });
    }

    const pixelId = String(config.meta_pixel_id || "").trim();
    const token = String(config.meta_capi_token || "").trim();
    if (!pixelId || !token) {
      return json({ sent: false, reason: "CAPI not configured" });
    }

    const body = await req.json();
    const eventName = String(body?.event_name || "").trim();
    if (!["PageView", "ViewContent", "Lead"].includes(eventName)) {
      return json({ error: "Unsupported event_name" }, 400);
    }

    const eventId = String(body?.event_id || crypto.randomUUID());
    const eventSourceUrl = String(body?.event_source_url || Deno.env.get("SITE_ORIGIN") || "https://montfortre.com");
    const customData = body?.custom_data && typeof body.custom_data === "object" ? body.custom_data : {};

    const userData: Record<string, string | string[]> = {};
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || req.headers.get("cf-connecting-ip");
    const userAgent = req.headers.get("user-agent");
    if (clientIp) userData.client_ip_address = clientIp;
    if (userAgent) userData.client_user_agent = userAgent;

    if (body?.email) {
      userData.em = [await sha256Hex(String(body.email).trim().toLowerCase())];
    }
    if (body?.phone) {
      let digits = String(body.phone).replace(/\D/g, "");
      if (digits.length === 11 && digits.startsWith("1")) digits = digits.slice(1);
      if (digits.length === 10) userData.ph = [await sha256Hex(`1${digits}`)];
    }

    const payload: Record<string, unknown> = {
      data: [{
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: eventSourceUrl,
        action_source: "website",
        user_data: userData,
        ...(Object.keys(customData).length ? { custom_data: customData } : {}),
      }],
    };

    const testCode = String(config.meta_test_event_code || "").trim();
    if (testCode) payload.test_event_code = testCode;

    const url = `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${encodeURIComponent(token)}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return json({ sent: false, error: `Meta CAPI HTTP ${res.status}: ${detail.slice(0, 300)}` }, 502);
    }

    return json({ sent: true, event_id: eventId });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("meta-capi failed:", message);
    return json({ error: message }, 500);
  }
});
