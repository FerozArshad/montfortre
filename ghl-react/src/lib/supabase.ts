import { createClient, type SupabaseClient } from "@supabase/supabase-js";

function clean(v: string | undefined): string | undefined {
  if (!v) return undefined;
  const t = v.replace(/^["']|["']$/g, "").trim();
  return t || undefined;
}

function readUrl(): string | undefined {
  return clean(import.meta.env.VITE_SUPABASE_URL as string | undefined);
}

function readAnonKey(): string | undefined {
  return clean(
    (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ||
      (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined),
  );
}

/** True when Supabase env is configured (Lovable / production CMS). */
export function isCmsConfigured(): boolean {
  return Boolean(readUrl() && readAnonKey());
}

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  const url = readUrl();
  const anonKey = readAnonKey();
  if (!url || !anonKey) return null;
  if (!client) {
    client = createClient(url, anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }
  return client;
}
