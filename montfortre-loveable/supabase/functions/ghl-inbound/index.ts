// Receives lead data from a GoHighLevel workflow webhook and records it as a
// lead, so contacts created inside GHL (chat widget, GHL forms, calendar
// bookings) appear in the site's admin inbox.
//
// Configure in GHL: Automation → Workflows → trigger "Form Submitted" or
// "Contact Created" → action "Webhook" → POST to
//   https://<project>.supabase.co/functions/v1/ghl-inbound?secret=<secret>
// The secret must match the Vault secret ghl_inbound_secret. It may also be
// sent as an x-webhook-secret header instead of a query parameter.
//
// Called by GHL rather than the browser, so verify_jwt = false in config.toml.
//
// Rows are written with meta.origin = 'ghl', which the outbound sync trigger
// checks so a contact cannot bounce between the two systems forever.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

function serviceClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } },
  );
}

async function expectedSecret(): Promise<string> {
  try {
    const { data } = await serviceClient().rpc("ghl_config");
    if (data && typeof data === "object") {
      const secret = String((data as Record<string, unknown>).inbound_secret || "");
      if (secret) return secret;
    }
  } catch {
    // Fall back to the function secret below.
  }
  return Deno.env.get("GHL_WEBHOOK_SECRET") ?? "";
}

/** GHL payload keys vary by trigger, so accept the common spellings. */
function pick(payload: Record<string, unknown>, keys: string[]): string {
  for (const key of keys) {
    const value = payload[key];
    if (typeof value === "string" && value.trim()) return value.trim();
    if (typeof value === "number") return String(value);
  }
  return "";
}

function splitName(full: string): { first: string; last: string } {
  const trimmed = full.trim();
  if (!trimmed) return { first: "", last: "" };
  const space = trimmed.indexOf(" ");
  if (space === -1) return { first: trimmed, last: "" };
  return { first: trimmed.slice(0, space), last: trimmed.slice(space + 1) };
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const url = new URL(req.url);
    const provided = req.headers.get("x-webhook-secret") || url.searchParams.get("secret") || "";
    const secret = await expectedSecret();

    if (!secret || provided !== secret) {
      return new Response("Forbidden", { status: 403 });
    }

    const payload = (await req.json()) as Record<string, unknown>;
    const body = (payload?.contact && typeof payload.contact === "object"
      ? (payload.contact as Record<string, unknown>)
      : payload) ?? {};

    const email = pick(body, ["email", "Email", "contact_email"]);
    const phone = pick(body, ["phone", "Phone", "contact_phone"]);
    if (!email && !phone) {
      return new Response(JSON.stringify({ error: "Payload has no email or phone" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    let first = pick(body, ["first_name", "firstName", "First Name"]);
    let last = pick(body, ["last_name", "lastName", "Last Name"]);
    if (!first && !last) {
      const split = splitName(pick(body, ["full_name", "fullName", "name", "Name"]));
      first = split.first;
      last = split.last;
    }

    const contactId = pick(body, ["contact_id", "contactId", "id"]);
    const ghlSource = pick(body, ["source", "Source", "attributionSource"]);

    // Everything GHL sent is kept so nothing is silently dropped; the admin
    // detail pane renders these automatically.
    const meta: Record<string, unknown> = { origin: "ghl" };
    if (contactId) meta.ghl_contact_id = contactId;
    if (ghlSource) meta.ghl_source = ghlSource;
    for (const [key, value] of Object.entries(body)) {
      if (["email", "phone", "first_name", "firstName", "last_name", "lastName", "id"].includes(key)) continue;
      if (value === null || value === undefined || value === "") continue;
      if (typeof value === "object") continue;
      meta[`ghl_${key}`] = value;
    }

    const row = {
      first_name: first,
      last_name: last,
      // The leads table requires an email, so fall back to a phone-derived
      // placeholder rather than dropping the lead entirely.
      email: email || `${phone.replace(/\D/g, "") || "unknown"}@no-email.ghl`,
      phone,
      message: pick(body, ["message", "Message", "notes", "body", "question"]),
      form_type: "ghl",
      source_page: pick(body, ["page_url", "pageUrl", "url"]),
      listing_slug: "",
      meta,
      status: "new",
    };

    const { data, error } = await serviceClient().from("leads").insert(row).select("id").single();
    if (error) throw new Error(error.message);

    return new Response(JSON.stringify({ received: true, leadId: data?.id }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("ghl-inbound failed:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
