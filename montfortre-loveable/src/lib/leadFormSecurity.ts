export const LEAD_HONEYPOT_FIELD = "_hp_company";

export const LEAD_FIELD_LIMITS = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 30,
  message: 5000,
  sourcePage: 500,
  listingSlug: 120,
} as const;

export const ALLOWED_LEAD_FORM_TYPES = [
  "contact",
  "listing-lead",
  "listing-tour",
  "blog-embed",
  "home-valuation",
  "market-report",
  "guide-download",
  "mortgage-checklist",
  "listing-access",
  "neighborhood",
  "other",
] as const;

export type AllowedLeadFormType = (typeof ALLOWED_LEAD_FORM_TYPES)[number];

export function normalizeLeadFormType(value: string): AllowedLeadFormType {
  const trimmed = value.trim() as AllowedLeadFormType;
  return (ALLOWED_LEAD_FORM_TYPES as readonly string[]).includes(trimmed) ? trimmed : "other";
}

export function clipLeadText(value: string, max: number): string {
  return value.trim().slice(0, max);
}

/** Relative site paths only — blocks javascript: and off-site URLs in admin links. */
export function safeLeadSourceHref(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > LEAD_FIELD_LIMITS.sourcePage) return null;
  if (/^(javascript|data|vbscript):/i.test(trimmed)) return null;
  if (!trimmed.startsWith("/")) return null;
  if (!/^\/[A-Za-z0-9/_\-.?=&%#]*$/.test(trimmed)) return null;
  return trimmed;
}

export function sanitizeLeadMeta(meta: Record<string, unknown> | undefined): Record<string, unknown> {
  if (!meta || typeof meta !== "object") return {};

  const out: Record<string, unknown> = {};
  let count = 0;

  for (const [key, value] of Object.entries(meta)) {
    if (count >= 20) break;
    if (!/^[a-zA-Z0-9_-]{1,80}$/.test(key)) continue;

    if (typeof value === "string") {
      const clipped = value.trim().slice(0, 500);
      if (clipped) out[key] = clipped;
      count += 1;
    } else if (typeof value === "number" && Number.isFinite(value)) {
      out[key] = value;
      count += 1;
    } else if (typeof value === "boolean") {
      out[key] = value;
      count += 1;
    }
  }

  return out;
}

export function readLeadHoneypot(form: FormData): string {
  return String(form.get(LEAD_HONEYPOT_FIELD) || "").trim();
}
