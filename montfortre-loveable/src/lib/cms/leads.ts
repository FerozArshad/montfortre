import { getSupabase, isCmsConfigured } from "../supabase";
import { getRequiredUserId } from "./ownership";
import {
  formatUsPhone,
  hasLeadErrors,
  leadFormRequiresMessage,
  leadValidationMessage,
  validateLeadFieldsAsync,
} from "../leadValidation";
import {
  clipLeadText,
  LEAD_FIELD_LIMITS,
  normalizeLeadFormType,
  sanitizeLeadMeta,
} from "../leadFormSecurity";
import { createMetaEventId, trackMetaLead } from "../metaPixel";
import { fetchTrackingPublicConfig, shouldUseTurnstile, type TrackingPublicConfig } from "../trackingPublic";

export type LeadStatus = "new" | "read" | "archived";

export type LeadFormType =
  | "contact"
  | "listing-lead"
  | "listing-tour"
  | "blog-embed"
  | "home-valuation"
  | "market-report"
  | "guide-download"
  | "mortgage-checklist"
  | "listing-access"
  | "neighborhood"
  | "ghl"
  | "other";

export type LeadRow = {
  id: string;
  created_at: string;
  updated_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  form_type: string;
  source_page: string;
  listing_slug: string;
  meta: Record<string, unknown>;
  status: LeadStatus;
};

export type LeadSubmitInput = {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  message?: string;
  formType: LeadFormType;
  sourcePage?: string;
  listingSlug?: string;
  meta?: Record<string, unknown>;
  honeypot?: string;
  turnstileToken?: string;
};

function currentPath(): string {
  if (typeof window === "undefined") return "";
  return `${window.location.pathname}${window.location.search}`;
}

function needsEdgeSubmit(config: TrackingPublicConfig): boolean {
  if (shouldUseTurnstile(config)) return true;
  if (config.meta.capi_enabled && config.meta.track_leads !== false) return true;
  return false;
}

/** Public site → insert lead into Cloud. */
export async function submitLead(input: LeadSubmitInput): Promise<{ id: string }> {
  const sb = getSupabase();
  if (!sb || !isCmsConfigured()) {
    throw new Error("Lead capture is not configured (missing Supabase).");
  }

  if (input.formType !== "ghl") {
    const errors = await validateLeadFieldsAsync({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      phone: input.phone,
      message: input.message,
      requireMessage: leadFormRequiresMessage(input.formType),
      requirePhone: true,
    });
    if (hasLeadErrors(errors)) {
      throw new Error(leadValidationMessage(errors));
    }
  }

  if ((input.honeypot || "").trim()) {
    throw new Error("Submission failed.");
  }

  const trackingConfig = await fetchTrackingPublicConfig();
  if (shouldUseTurnstile(trackingConfig) && !(input.turnstileToken || "").trim()) {
    throw new Error("Complete the security check and try again.");
  }

  const email = clipLeadText(input.email, LEAD_FIELD_LIMITS.email).toLowerCase();
  const phone = input.phone ? formatUsPhone(input.phone) : "";
  const formType = normalizeLeadFormType(input.formType || "contact");
  const sourcePage = clipLeadText(input.sourcePage || currentPath(), LEAD_FIELD_LIMITS.sourcePage);
  const listingSlug = clipLeadText(input.listingSlug || "", LEAD_FIELD_LIMITS.listingSlug).toLowerCase();
  const meta = sanitizeLeadMeta(input.meta);

  const payload = {
    first_name: clipLeadText(input.firstName || "", LEAD_FIELD_LIMITS.firstName),
    last_name: clipLeadText(input.lastName || "", LEAD_FIELD_LIMITS.lastName),
    email,
    phone,
    message: clipLeadText(input.message || "", LEAD_FIELD_LIMITS.message),
    form_type: formType,
    source_page: sourcePage,
    listing_slug: listingSlug,
    meta,
    honeypot: input.honeypot || "",
  };

  const metaEventId = createMetaEventId();
  let leadId: string;

  if (needsEdgeSubmit(trackingConfig)) {
    const { data, error } = await sb.functions.invoke("submit-public-lead", {
      body: {
        payload,
        turnstile_token: input.turnstileToken || "",
        meta_event_id: metaEventId,
      },
    });

    if (error) {
      throw new Error(error.message || "Failed to save lead");
    }
    if (data && typeof data === "object" && "error" in data && data.error) {
      throw new Error(String(data.error));
    }
    if (!data?.id) {
      throw new Error("Failed to save lead");
    }
    leadId = String(data.id);
  } else {
    const { data, error } = await sb.rpc("submit_public_lead", { p_payload: payload });
    if (error) {
      const msg = error.message || "Failed to save lead";
      if (/does not exist|schema cache|PGRST202|PGRST205|submit_public_lead/i.test(msg)) {
        throw new Error(
          "Lead submit RPC missing. Run supabase/migrations/20260902110000_lead_submit_hardening.sql in Cloud SQL, then try again.",
        );
      }
      throw new Error(msg);
    }

    if (!data) {
      throw new Error("Failed to save lead");
    }
    leadId = data as string;
  }

  trackMetaLead({
    formType: payload.form_type,
    sourcePage: payload.source_page,
    listingSlug: payload.listing_slug,
    eventId: metaEventId,
  });

  return { id: leadId };
}

/** Every lead, newest first. Pages through the API so nothing is cut off. */
export async function adminFetchLeads(): Promise<LeadRow[]> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const pageSize = 1000;
  const rows: LeadRow[] = [];

  for (let from = 0; ; from += pageSize) {
    const { data, error } = await sb
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
      .range(from, from + pageSize - 1);

    if (error) throw new Error(error.message);
    const page = (data || []) as LeadRow[];
    rows.push(...page);
    if (page.length < pageSize) break;
  }

  return rows;
}

export async function adminPatchLeadStatus(id: string, status: LeadStatus): Promise<void> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { error } = await sb
    .from("leads")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id);
  if (error) throw new Error(error.message);
}

export async function adminDeleteLead(id: string): Promise<void> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { error } = await sb.from("leads").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export type LeadImportRow = {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  message?: string;
  formType?: string;
  sourcePage?: string;
  listingSlug?: string;
  createdAt?: string;
  status?: LeadStatus;
  meta?: Record<string, unknown>;
};

/** Bulk insert for AgentFire / Gravity Forms CSV imports. Skips rows missing email. */
export async function adminImportLeads(
  rows: LeadImportRow[],
): Promise<{ inserted: number; skipped: number }> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const payload = rows
    .map((r) => {
      const email = clipLeadText(r.email || "", LEAD_FIELD_LIMITS.email).toLowerCase();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) return null;
      const created =
        r.createdAt && !Number.isNaN(Date.parse(r.createdAt))
          ? new Date(r.createdAt).toISOString()
          : undefined;
      return {
        first_name: clipLeadText(r.firstName || "", LEAD_FIELD_LIMITS.firstName),
        last_name: clipLeadText(r.lastName || "", LEAD_FIELD_LIMITS.lastName),
        email,
        phone: clipLeadText(r.phone || "", LEAD_FIELD_LIMITS.phone),
        message: clipLeadText(r.message || "", LEAD_FIELD_LIMITS.message),
        form_type: normalizeLeadFormType(r.formType || "other"),
        source_page: clipLeadText(r.sourcePage || "", LEAD_FIELD_LIMITS.sourcePage),
        listing_slug: clipLeadText(r.listingSlug || "", LEAD_FIELD_LIMITS.listingSlug).toLowerCase(),
        meta: sanitizeLeadMeta({ ...(r.meta || {}), imported_from: "agentfire-csv" }),
        status: (r.status || "new") as LeadStatus,
        ...(created ? { created_at: created, updated_at: created } : {}),
      };
    })
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  if (payload.length === 0) return { inserted: 0, skipped: rows.length };

  const { error, data } = await sb.from("leads").insert(payload).select("id");
  if (error) throw new Error(error.message);
  return {
    inserted: data?.length ?? payload.length,
    skipped: rows.length - payload.length,
  };
}

/** Parse Gravity Forms / AgentFire-style CSV into import rows. */
export function parseAgentFireLeadsCsv(text: string): LeadImportRow[] {
  const rows = parseCsv(text);
  if (rows.length < 2) return [];
  const headers = rows[0].map((h) => h.trim().toLowerCase());
  const idx = (...names: string[]) => {
    for (const name of names) {
      const i = headers.findIndex((h) => h === name || h.includes(name));
      if (i >= 0) return i;
    }
    return -1;
  };

  const iFirst = idx("first name", "firstname", "first_name", "name");
  const iLast = idx("last name", "lastname", "last_name");
  const iEmail = idx("email", "e-mail", "email address");
  const iPhone = idx("phone", "telephone", "mobile", "cell");
  const iMessage = idx("message", "comments", "comment", "notes", "body");
  const iSource = idx("source url", "source", "page", "referrer", "entry url", "form title");
  const iDate = idx("date", "created", "entry date", "date created", "submission date");
  const iForm = idx("form", "form name", "form title", "type");

  const out: LeadImportRow[] = [];
  for (let r = 1; r < rows.length; r += 1) {
    const cols = rows[r];
    const get = (i: number) => (i >= 0 ? (cols[i] || "").trim() : "");
    let first = get(iFirst);
    let last = get(iLast);
    if (iFirst >= 0 && iLast < 0 && first.includes(" ")) {
      const parts = first.split(/\s+/);
      first = parts[0] || "";
      last = parts.slice(1).join(" ");
    }
    const email = get(iEmail);
    if (!email) continue;
    out.push({
      firstName: first || email.split("@")[0] || "Lead",
      lastName: last,
      email,
      phone: get(iPhone),
      message: get(iMessage),
      sourcePage: get(iSource),
      formType: mapImportFormType(get(iForm)),
      createdAt: get(iDate) || undefined,
      status: "new",
      meta: { csv_row: r },
    });
  }
  return out;
}

function mapImportFormType(raw: string): string {
  const t = raw.toLowerCase();
  if (!t) return "other";
  if (t.includes("tour")) return "listing-tour";
  if (t.includes("listing")) return "listing-lead";
  if (t.includes("blog")) return "blog-embed";
  if (t.includes("valuation")) return "home-valuation";
  if (t.includes("market")) return "market-report";
  if (t.includes("contact")) return "contact";
  return "other";
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  const src = text.replace(/^\uFEFF/, "");

  for (let i = 0; i < src.length; i += 1) {
    const ch = src[i];
    const next = src[i + 1];
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i += 1;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
      continue;
    }
    if (ch === '"') {
      inQuotes = true;
      continue;
    }
    if (ch === ",") {
      row.push(cell);
      cell = "";
      continue;
    }
    if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && next === "\n") i += 1;
      row.push(cell);
      cell = "";
      if (row.some((c) => c.trim())) rows.push(row);
      row = [];
      continue;
    }
    cell += ch;
  }
  row.push(cell);
  if (row.some((c) => c.trim())) rows.push(row);
  return rows;
}

export function leadDisplayName(lead: LeadRow): string {
  const name = `${lead.first_name} ${lead.last_name}`.trim();
  return name || lead.email;
}

export function leadFormTypeLabel(type: string): string {
  switch (type) {
    case "contact":
      return "Contact";
    case "listing-lead":
      return "Listing popup";
    case "listing-tour":
      return "Tour request";
    case "blog-embed":
      return "Blog form";
    case "home-valuation":
      return "Home valuation";
    case "market-report":
      return "Market report";
    case "guide-download":
      return "Guide download";
    case "mortgage-checklist":
      return "Mortgage checklist";
    case "listing-access":
      return "Listing access";
    case "neighborhood":
      return "Neighborhood form";
    case "ghl":
      return "GoHighLevel";
    default:
      return type || "Other";
  }
}

/**
 * Flattens a lead's meta JSON into label/value pairs for display, so extra
 * fields captured by a form show up in the admin without per-form code.
 */
export function leadMetaEntries(meta: Record<string, unknown> | null | undefined): { label: string; value: string }[] {
  if (!meta || typeof meta !== "object") return [];

  const format = (value: unknown): string => {
    if (value === null || value === undefined || value === "") return "";
    if (Array.isArray(value)) return value.map(format).filter(Boolean).join(", ");
    if (typeof value === "object") return JSON.stringify(value);
    if (typeof value === "boolean") return value ? "Yes" : "No";
    return String(value);
  };

  const labelFor = (key: string): string => {
    const spaced = key.replace(/[_-]+/g, " ").replace(/([a-z0-9])([A-Z])/g, "$1 $2");
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  };

  return Object.entries(meta)
    .map(([key, value]) => ({ label: labelFor(key), value: format(value) }))
    .filter((entry) => entry.value !== "");
}
