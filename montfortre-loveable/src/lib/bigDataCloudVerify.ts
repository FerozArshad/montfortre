/**
 * BigDataCloud Phone & Email Verification — quota-aware client.
 *
 * Optimizations for a ~10k requests/month plan:
 * 1. Never call the API until local format checks already passed.
 * 2. Call only on submit (not blur/keystroke).
 * 3. Session + memory cache so retries / same contact reuse results (0 extra quota).
 * 4. Soft-fail on network/403/quota — fall back to local validation only.
 * 5. At most 2 requests per unique contact (1 email + 1 phone).
 *
 * Docs: https://www.bigdatacloud.com/phone-email-verification
 */

export type BigDataCloudFieldResult = {
  ok: boolean;
  message?: string;
  /** True when a live API call was made (vs cache / skip). */
  billed?: boolean;
};

type CachePayload = {
  ok: boolean;
  message?: string;
  exp: number;
};

const EMAIL_URL = "https://api-bdc.net/data/email-verify";
const PHONE_URL = "https://api-bdc.net/data/phone-number-validate";
const CACHE_PREFIX = "bdc:v1:";
const VALID_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const INVALID_TTL_MS = 24 * 60 * 60 * 1000;
const memoryCache = new Map<string, CachePayload>();

function normalizeUsDigits(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) return digits.slice(1);
  return digits;
}

function apiKey(): string {
  return String(import.meta.env.VITE_BIGDATACLOUD_API_KEY || "").trim();
}

export function isBigDataCloudConfigured(): boolean {
  return Boolean(apiKey());
}

function readCache(key: string): CachePayload | null {
  const mem = memoryCache.get(key);
  if (mem && mem.exp > Date.now()) return mem;
  try {
    const raw = sessionStorage.getItem(CACHE_PREFIX + key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachePayload;
    if (!parsed || typeof parsed.exp !== "number" || parsed.exp <= Date.now()) {
      sessionStorage.removeItem(CACHE_PREFIX + key);
      return null;
    }
    memoryCache.set(key, parsed);
    return parsed;
  } catch {
    return null;
  }
}

function writeCache(key: string, value: Omit<CachePayload, "exp"> & { ok: boolean }): void {
  const exp = Date.now() + (value.ok ? VALID_TTL_MS : INVALID_TTL_MS);
  const payload: CachePayload = { ok: value.ok, message: value.message, exp };
  memoryCache.set(key, payload);
  try {
    sessionStorage.setItem(CACHE_PREFIX + key, JSON.stringify(payload));
  } catch {
    /* private mode / quota — memory cache still helps within the page */
  }
}

async function fetchJson(url: string): Promise<Record<string, unknown> | null> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 6000);
  try {
    const res = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (res.status === 403 || res.status === 429) {
      // Quota / package not enabled — soft-fail, do not burn retries.
      return null;
    }
    if (!res.ok) return null;
    return (await res.json()) as Record<string, unknown>;
  } catch {
    return null;
  } finally {
    window.clearTimeout(timer);
  }
}

/**
 * Verify email with BigDataCloud after local syntax already passed.
 * Returns null when skipped (no key / soft-fail) — caller keeps local result.
 */
export async function verifyEmailWithBigDataCloud(email: string): Promise<BigDataCloudFieldResult | null> {
  const key = apiKey();
  if (!key) return null;

  const normalized = email.trim().toLowerCase();
  const cacheKey = `email:${normalized}`;
  const cached = readCache(cacheKey);
  if (cached) {
    return { ok: cached.ok, message: cached.message, billed: false };
  }

  const url =
    `${EMAIL_URL}?emailAddress=${encodeURIComponent(normalized)}` +
    `&key=${encodeURIComponent(key)}`;
  const data = await fetchJson(url);
  if (!data) return null;

  const isValid = data.isValid === true;
  const isDisposable = data.isDisposable === true;
  const isSpam = data.isKnownSpammerDomain === true;
  const hasMx = data.isMailServerDefined !== false;

  let ok = isValid && !isDisposable && !isSpam;
  let message: string | undefined;
  if (isDisposable) {
    ok = false;
    message = "Please use a permanent email address (not a disposable inbox).";
  } else if (isSpam) {
    ok = false;
    message = "Enter a valid email address.";
  } else if (!hasMx || !isValid) {
    ok = false;
    message = "Enter a valid email address.";
  }

  writeCache(cacheKey, { ok, message });
  return { ok, message, billed: true };
}

/**
 * Verify US phone with BigDataCloud after local NANP checks already passed.
 */
export async function verifyPhoneWithBigDataCloud(phone: string): Promise<BigDataCloudFieldResult | null> {
  const key = apiKey();
  if (!key) return null;

  const digits = normalizeUsDigits(phone);
  if (digits.length !== 10) return null;

  const cacheKey = `phone:US:${digits}`;
  const cached = readCache(cacheKey);
  if (cached) {
    return { ok: cached.ok, message: cached.message, billed: false };
  }

  const url =
    `${PHONE_URL}?number=${encodeURIComponent(digits)}` +
    `&countryCode=US&key=${encodeURIComponent(key)}`;
  const data = await fetchJson(url);
  if (!data) return null;

  const ok = data.isValid === true;
  const message = ok ? undefined : "Enter a valid US phone number.";
  writeCache(cacheKey, { ok, message });
  return { ok, message, billed: true };
}
