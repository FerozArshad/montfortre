import { clipLeadText, LEAD_FIELD_LIMITS } from "./leadFormSecurity";
import {
  isBigDataCloudConfigured,
  verifyEmailWithBigDataCloud,
  verifyPhoneWithBigDataCloud,
} from "./bigDataCloudVerify";

export type LeadFieldErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export type LeadValidationInput = {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  message?: string;
  /** When true, the questions / comments field must not be empty. */
  requireMessage?: boolean;
  /** When false, phone is optional but still validated if provided. */
  requirePhone?: boolean;
};

/**
 * Practical email check: local@domain.tld, no spaces, no consecutive dots,
 * TLD at least 2 letters. Blocks common typos like "name@gmail" or "a@b.c".
 */
const EMAIL_RE =
  /^[a-z0-9](?:[a-z0-9_+.-]*[a-z0-9])?@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i;

/** Strip to digits and drop a leading US country code. */
export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  return digits;
}

export function isValidEmail(email: string): boolean {
  const value = email.trim();
  if (!value || value.length > 254) return false;
  if (value.includes("..") || value.startsWith(".") || value.endsWith(".")) return false;
  return EMAIL_RE.test(value);
}

/** Accepts common US formats — must resolve to exactly 10 digits. */
export function isValidUsPhone(phone: string): boolean {
  const digits = normalizePhone(phone);
  if (digits.length !== 10) return false;
  // NANP: area code and exchange cannot start with 0 or 1
  if (digits[0] === "0" || digits[0] === "1") return false;
  if (digits[3] === "0" || digits[3] === "1") return false;
  return true;
}

export function formatUsPhone(raw: string): string {
  const digits = normalizePhone(raw);
  if (digits.length !== 10) return raw.trim();
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function validateLeadFields(input: LeadValidationInput): LeadFieldErrors {
  const errors: LeadFieldErrors = {};
  const first = clipLeadText(input.firstName, LEAD_FIELD_LIMITS.firstName);
  const last = clipLeadText(input.lastName || "", LEAD_FIELD_LIMITS.lastName);
  const email = clipLeadText(input.email, LEAD_FIELD_LIMITS.email);
  const phone = clipLeadText(input.phone || "", LEAD_FIELD_LIMITS.phone);
  const message = clipLeadText(input.message || "", LEAD_FIELD_LIMITS.message);

  if (!first) errors.firstName = "First name is required.";
  else if (first.length < 2) errors.firstName = "Enter a valid first name.";

  if (!last) errors.lastName = "Last name is required.";
  else if (last.length < 2) errors.lastName = "Enter a valid last name.";

  if (!email) errors.email = "Email is required.";
  else if (!isValidEmail(email)) errors.email = "Enter a valid email address.";

  const needPhone = input.requirePhone !== false;
  if (needPhone) {
    if (!phone) errors.phone = "Phone number is required.";
    else if (!isValidUsPhone(phone)) errors.phone = "Enter a valid 10-digit US phone number.";
  } else if (phone && !isValidUsPhone(phone)) {
    errors.phone = "Enter a valid 10-digit US phone number.";
  }

  if (input.requireMessage && !message) {
    errors.message = "Please share your question or comment.";
  }

  return errors;
}

/**
 * Local checks first (free). Only if those pass, optionally enrich with
 * BigDataCloud (cached, submit-time only) — keeps the 10k/mo quota usable.
 */
export async function validateLeadFieldsAsync(input: LeadValidationInput): Promise<LeadFieldErrors> {
  const errors = validateLeadFields(input);
  if (!isBigDataCloudConfigured()) return errors;

  const email = clipLeadText(input.email, LEAD_FIELD_LIMITS.email);
  const phone = clipLeadText(input.phone || "", LEAD_FIELD_LIMITS.phone);
  const tasks: Promise<void>[] = [];

  if (!errors.email && email) {
    tasks.push(
      verifyEmailWithBigDataCloud(email)
        .then((result) => {
          if (result && !result.ok) {
            errors.email = result.message || "Enter a valid email address.";
          }
        })
        .catch(() => {
          /* soft-fail — keep local validation */
        }),
    );
  }

  if (!errors.phone && phone) {
    tasks.push(
      verifyPhoneWithBigDataCloud(phone)
        .then((result) => {
          if (result && !result.ok) {
            errors.phone = result.message || "Enter a valid US phone number.";
          }
        })
        .catch(() => {
          /* soft-fail — keep local validation */
        }),
    );
  }

  if (tasks.length) await Promise.all(tasks);
  return errors;
}

export function hasLeadErrors(errors: LeadFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function leadValidationMessage(errors: LeadFieldErrors): string {
  return (
    errors.firstName ||
    errors.lastName ||
    errors.email ||
    errors.phone ||
    errors.message ||
    "Please fix the highlighted fields."
  );
}

/** Whether this form type must include a user-written questions / comments field. */
export function leadFormRequiresMessage(formType: string): boolean {
  return formType !== "ghl";
}
