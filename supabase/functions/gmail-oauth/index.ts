// Completes the "Connect Gmail" flow started from /admin/notifications.
//
// The browser sends the authorisation code Google handed back; this function
// exchanges it for a refresh token and stores it in Vault. The exchange has to
// happen here rather than in the browser because it needs the client secret.
//
// Caller must be a signed-in admin: we replay their JWT against
// lead_notify_status(), which raises unless has_role(uid, 'admin').

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

function env(name: string): string {
  const value = Deno.env.get(name);
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  try {
    const authHeader = req.headers.get("Authorization") || "";
    if (!authHeader) return json({ error: "Missing Authorization header" }, 401);

    const supabaseUrl = env("SUPABASE_URL");

    // Admin check: this RPC raises for non-admins, so a clean call proves the
    // caller's role without duplicating the policy logic here.
    const asCaller = createClient(supabaseUrl, env("SUPABASE_ANON_KEY"), {
      global: { headers: { Authorization: authHeader } },
      auth: { persistSession: false },
    });
    const { error: roleError } = await asCaller.rpc("lead_notify_status");
    if (roleError) return json({ error: "Not authorized" }, 403);

    const { code, redirect_uri: redirectUri } = await req.json();
    if (!code || !redirectUri) {
      return json({ error: "code and redirect_uri are required" }, 400);
    }

    const admin = createClient(supabaseUrl, env("SUPABASE_SERVICE_ROLE_KEY"), {
      auth: { persistSession: false },
    });

    const { data: config, error: configError } = await admin.rpc("lead_notify_config");
    if (configError) return json({ error: configError.message }, 500);
    if (!config?.client_id || !config?.client_secret) {
      return json({ error: "Save the Google client ID and secret before connecting." }, 400);
    }

    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: config.client_id,
        client_secret: config.client_secret,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });

    const token = await tokenRes.json().catch(() => ({}));

    if (!tokenRes.ok) {
      const detail = token?.error_description || token?.error || `HTTP ${tokenRes.status}`;
      return json({ error: `Google rejected the code: ${detail}` }, 400);
    }

    if (!token.refresh_token) {
      // Google withholds it when this account already granted consent.
      return json({
        error:
          "Google did not return a refresh token. Remove the app at " +
          "myaccount.google.com/permissions for this account, then connect again.",
      }, 400);
    }

    // Requires the userinfo.email scope; used only to label the connection.
    let connectedEmail = "";
    try {
      const infoRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${token.access_token}` },
      });
      if (infoRes.ok) connectedEmail = (await infoRes.json())?.email || "";
    } catch {
      // Non-fatal: the connection still works, it just shows unlabelled.
    }

    const { error: storeError } = await admin.rpc("lead_notify_store_token", {
      p_refresh_token: token.refresh_token,
      p_connected_email: connectedEmail,
    });
    if (storeError) return json({ error: storeError.message }, 500);

    return json({ connected: true, email: connectedEmail });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("gmail-oauth failed:", message);
    return json({ error: message }, 500);
  }
});
