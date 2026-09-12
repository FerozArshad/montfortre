// Upserts a site lead into GoHighLevel as a contact.
//
// Invoked by the AFTER INSERT trigger on public.leads (see the
// 20260901010000_ghl_sync.sql migration), not by the browser. Auth is a shared
// secret header rather than a JWT, because Postgres has no user session to sign
// one — hence verify_jwt = false in config.toml.
//
// The private integration token and location come from public.ghl_config(),
// managed on /admin/integrations. Upsert is used rather than create so a repeat
// enquirer updates their existing contact instead of producing a duplicate.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const GHL_API = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

type GhlConfig = {
  enabled: boolean;
  locationId: string;
  sourceLabel: string;
  token: string;
  inboundSecret: string;
};

type LeadRecord = {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  message?: string;
  form_type?: string;
  source_page?: string;
  listing_slug?: string;
  meta?: Record<string, unknown> | null;
};

const FORM_LABELS: Record<string, string> = {
  contact: "Contact",
  "listing-lead": "Listing popup",
  "listing-tour": "Tour request",
  "blog-embed": "Blog form",
  "home-valuation": "Home valuation",
  "market-report": "Market report",
  "guide-download": "Guide download",
  "mortgage-checklist": "Mortgage checklist",
  "listing-access": "Listing access",
  neighborhood: "Neighborhood form",
  other: "Other",
};

function serviceClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } },
  );
}

async function loadConfig(): Promise<GhlConfig> {
  const fallback = (name: string) => Deno.env.get(name) ?? "";
  let row: Record<string, unknown> = {};

  try {
    const { data } = await serviceClient().rpc("ghl_config");
    if (data && typeof data === "object") row = data as Record<string, unknown>;
  } catch {
    // Migration not applied yet — fall back to function secrets below.
  }

  return {
    enabled: row.enabled === true,
    locationId: String(row.location_id || "") || fallback("GHL_LOCATION_ID"),
    sourceLabel: String(row.source_label || "") || "Website",
    token: String(row.token || "") || fallback("GHL_PRIVATE_TOKEN"),
    inboundSecret: String(row.inbound_secret || "") || fallback("GHL_WEBHOOK_SECRET"),
  };
}

async function recordError(message: string): Promise<void> {
  try {
    await serviceClient().rpc("ghl_set_error", { p_error: message });
  } catch {
    // Logging the failure must never mask the original error.
  }
}

async function recordContact(leadId: string, contactId: string): Promise<void> {
  if (!leadId || !contactId) return;
  try {
    await serviceClient().rpc("ghl_record_contact", {
      p_lead_id: leadId,
      p_contact_id: contactId,
    });
  } catch {
    // The sync itself succeeded; losing the id is not worth failing over.
  }
}

/** Flattens the lead's meta JSON into GHL custom fields. */
function customFields(meta: Record<string, unknown> | null | undefined) {
  if (!meta || typeof meta !== "object") return [];

  return Object.entries(meta)
    .filter(([key]) => key !== "origin")
    .map(([key, value]) => {
      const flat = Array.isArray(value)
        ? value.join(", ")
        : value && typeof value === "object"
          ? JSON.stringify(value)
          : String(value ?? "");
      return { key, field_value: flat };
    })
    .filter((field) => field.field_value !== "");
}

function buildContact(lead: LeadRecord, config: GhlConfig) {
  const formType = lead.form_type || "contact";
  const tags = [`site:${formType}`];
  if (lead.listing_slug) tags.push(`listing:${lead.listing_slug}`);

  return {
    locationId: config.locationId,
    firstName: lead.first_name || "",
    lastName: lead.last_name || "",
    email: lead.email || "",
    phone: lead.phone || "",
    source: `${config.sourceLabel} — ${FORM_LABELS[formType] || formType}`,
    tags,
    customFields: customFields(lead.meta),
  };
}

async function upsertContact(lead: LeadRecord, config: GhlConfig): Promise<string> {
  const res = await fetch(`${GHL_API}/contacts/upsert`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      Version: GHL_VERSION,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(buildContact(lead, config)),
  });

  const body = await res.text().catch(() => "");
  if (!res.ok) {
    throw new Error(`GHL upsert failed: HTTP ${res.status} ${body.slice(0, 300)}`);
  }

  try {
    const parsed = JSON.parse(body);
    return String(parsed?.contact?.id || parsed?.id || "");
  } catch {
    return "";
  }
}

/**
 * Adds the enquiry as a note, so the full message survives even when the
 * contact already existed and the upsert only refreshed their details.
 */
async function addNote(contactId: string, lead: LeadRecord, config: GhlConfig): Promise<void> {
  if (!contactId || !lead.message) return;

  const parts = [lead.message];
  if (lead.source_page) parts.push(`Page: ${lead.source_page}`);

  await fetch(`${GHL_API}/contacts/${contactId}/notes`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      Version: GHL_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ body: parts.join("\n\n") }),
  }).catch(() => {
    // A missing note should not fail the sync.
  });
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const payload = await req.json();
    const lead: LeadRecord = payload?.record ?? payload?.lead ?? payload;
    if (!lead || typeof lead !== "object" || !lead.email) {
      return new Response(JSON.stringify({ error: "No lead in payload" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const config = await loadConfig();

    const expected = config.inboundSecret || Deno.env.get("GHL_WEBHOOK_SECRET") || "";
    if (expected && req.headers.get("x-webhook-secret") !== expected) {
      return new Response("Forbidden", { status: 403 });
    }

    if (!config.enabled) {
      return new Response(JSON.stringify({ synced: false, reason: "disabled" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!config.token || !config.locationId) {
      throw new Error("GHL is not connected: missing private token or location id.");
    }

    const contactId = await upsertContact(lead, config);
    await recordContact(String(lead.id || ""), contactId);
    await addNote(contactId, lead, config);

    return new Response(JSON.stringify({ synced: true, contactId }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("ghl-sync failed:", message);
    await recordError(message);
    // 500 so the reconciler records the failure; the lead is already saved.
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
