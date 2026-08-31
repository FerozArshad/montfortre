import { getSupabase, isCmsConfigured } from "../supabase";
import { getRequiredUserId } from "./ownership";

export type LeadStatus = "new" | "read" | "archived";

export type LeadFormType =
  | "contact"
  | "listing-lead"
  | "listing-tour"
  | "blog-embed"
  | "home-valuation"
  | "market-report"
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
};

function currentPath(): string {
  if (typeof window === "undefined") return "";
  return `${window.location.pathname}${window.location.search}`;
}

/** Public site → insert lead into Cloud. */
export async function submitLead(input: LeadSubmitInput): Promise<{ id: string }> {
  const sb = getSupabase();
  if (!sb || !isCmsConfigured()) {
    throw new Error("Lead capture is not configured (missing Supabase).");
  }

  const email = input.email.trim();
  if (!email || !email.includes("@")) throw new Error("A valid email is required.");

  const row = {
    first_name: (input.firstName || "").trim(),
    last_name: (input.lastName || "").trim(),
    email,
    phone: (input.phone || "").trim(),
    message: (input.message || "").trim(),
    form_type: input.formType || "contact",
    source_page: (input.sourcePage || currentPath()).trim(),
    listing_slug: (input.listingSlug || "").trim(),
    meta: input.meta || {},
    status: "new" as const,
  };

  const { data, error } = await sb.from("leads").insert(row).select("id").single();
  if (error) {
    const msg = error.message || "Failed to save lead";
    if (/does not exist|schema cache|PGRST205/i.test(msg)) {
      throw new Error(
        'Leads table missing. Run supabase/migrations/003_leads.sql in Lovable Cloud SQL, then try again.',
      );
    }
    throw new Error(msg);
  }
  return { id: data.id as string };
}

export async function adminFetchLeads(): Promise<LeadRow[]> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const { data, error } = await sb
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) throw new Error(error.message);
  return (data || []) as LeadRow[];
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
      const email = (r.email || "").trim();
      if (!email || !email.includes("@")) return null;
      const created =
        r.createdAt && !Number.isNaN(Date.parse(r.createdAt))
          ? new Date(r.createdAt).toISOString()
          : undefined;
      return {
        first_name: (r.firstName || "").trim(),
        last_name: (r.lastName || "").trim(),
        email,
        phone: (r.phone || "").trim(),
        message: (r.message || "").trim(),
        form_type: (r.formType || "other").trim() || "other",
        source_page: (r.sourcePage || "").trim(),
        listing_slug: (r.listingSlug || "").trim(),
        meta: { ...(r.meta || {}), imported_from: "agentfire-csv" },
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
    default:
      return type || "Other";
  }
}
