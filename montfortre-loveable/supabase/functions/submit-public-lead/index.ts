// Public lead submit with optional Turnstile verification + Meta CAPI Lead event.
// Browser calls this when Turnstile is enabled; may also send CAPI Lead from here.

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
  turnstile_enabled?: boolean;
  turnstile_secret?: string;
  lead_submit_edge_secret?: string;
  meta_pixel_id?: string;
  meta_capi_enabled?: boolean;
  meta_capi_token?: string;
  meta_test_event_code?: string;
  meta_track_leads?: boolean;
};

async function loadServerConfig(): Promise<ServerConfig> {
  const { data } = await serviceClient().rpc("tracking_server_config");
  return (data && typeof data === "object") ? (data as ServerConfig) : {};
}

async function verifyTurnstile(secret: string, token: string, remoteip?: string): Promise<boolean> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret,
      response: token,
      ...(remoteip ? { remoteip } : {}),
    }),
  });
  const body = await res.json().catch(() => ({}));
  return body?.success === true;
}

async function sha256Hex(value: string): Promise<string> {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function normalizePhone(phone: string): string {
  let digits = phone.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) digits = digits.slice(1);
  return digits.length === 10 ? `1${digits}` : digits;
}

function normalizeName(value: string): string {
  return value.trim().toLowerCase().replace(/[^a-z]/g, "");
}

async function sendMetaCapiLead(input: {
  config: ServerConfig;
  eventId: string;
  eventSourceUrl: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  formType: string;
  clientIp?: string;
  userAgent?: string;
}): Promise<void> {
  if (!input.config.meta_capi_enabled || !input.config.meta_track_leads) return;
  const pixelId = String(input.config.meta_pixel_id || "").trim();
  const token = String(input.config.meta_capi_token || "").trim();
  if (!pixelId || !token) return;

  const userData: Record<string, string[]> = {};
  const em = normalizeEmail(input.email);
  if (em) userData.em = [await sha256Hex(em)];
  const ph = normalizePhone(input.phone);
  if (ph.length >= 10) userData.ph = [await sha256Hex(ph)];
  const fn = normalizeName(input.firstName);
  if (fn) userData.fn = [await sha256Hex(fn)];
  const ln = normalizeName(input.lastName);
  if (ln) userData.ln = [await sha256Hex(ln)];
  if (input.clientIp) userData.client_ip_address = input.clientIp;
  if (input.userAgent) userData.client_user_agent = input.userAgent;

  const payload: Record<string, unknown> = {
    data: [{
      event_name: "Lead",
      event_time: Math.floor(Date.now() / 1000),
      event_id: input.eventId,
      event_source_url: input.eventSourceUrl,
      action_source: "website",
      user_data: userData,
      custom_data: {
        content_name: input.formType || "lead",
        content_category: "lead_form",
      },
    }],
  };

  const testCode = String(input.config.meta_test_event_code || "").trim();
  if (testCode) payload.test_event_code = testCode;

  const url = `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${encodeURIComponent(token)}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Meta CAPI Lead failed:", res.status, detail.slice(0, 300));
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const body = await req.json();
    const config = await loadServerConfig();
    const payload = body?.payload ?? body;

    if (!payload || typeof payload !== "object") {
      return json({ error: "Invalid payload" }, 400);
    }

    if (config.turnstile_enabled) {
      const token = String(body?.turnstile_token || payload?.turnstile_token || "").trim();
      const secret = String(config.turnstile_secret || "").trim();
      if (!token || !secret) {
        return json({ error: "Complete the security check and try again." }, 400);
      }
      const remoteip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
        || req.headers.get("cf-connecting-ip")
        || undefined;
      const ok = await verifyTurnstile(secret, token, remoteip);
      if (!ok) {
        return json({ error: "Security check failed. Please try again." }, 400);
      }
    }

    const edgeSecret = String(config.lead_submit_edge_secret || "").trim();
    const rpcPayload = {
      ...payload,
      ...(config.turnstile_enabled && edgeSecret ? { _edge_auth: edgeSecret } : {}),
    };
    delete rpcPayload.turnstile_token;

    const { data: leadId, error } = await serviceClient().rpc("submit_public_lead", {
      p_payload: rpcPayload,
    });
    if (error) throw new Error(error.message);

    const eventId = String(body?.meta_event_id || crypto.randomUUID());
    const siteOrigin = Deno.env.get("SITE_ORIGIN") || "https://montfortre.com";
    const sourcePath = String(payload.source_page || "/");
    const eventSourceUrl = sourcePath.startsWith("http")
      ? sourcePath
      : `${siteOrigin.replace(/\/+$/, "")}${sourcePath.startsWith("/") ? sourcePath : `/${sourcePath}`}`;

    await sendMetaCapiLead({
      config,
      eventId,
      eventSourceUrl,
      email: String(payload.email || ""),
      phone: String(payload.phone || ""),
      firstName: String(payload.first_name || ""),
      lastName: String(payload.last_name || ""),
      formType: String(payload.form_type || "contact"),
      clientIp: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
        || req.headers.get("cf-connecting-ip")
        || undefined,
      userAgent: req.headers.get("user-agent") || undefined,
    });

    return json({ id: leadId, meta_event_id: eventId });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("submit-public-lead failed:", message);
    return json({ error: message }, 400);
  }
});
