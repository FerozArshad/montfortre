import { getSupabase, isCmsConfigured } from "../supabase";

export type AdminSession = {
  userId: string;
  email: string;
  isAdmin: boolean;
};

/** Local-only UI access until real Auth/password is locked down. Never enable in production. */
export function isAdminDevBypass(): boolean {
  return import.meta.env.DEV === true && import.meta.env.VITE_ADMIN_DEV_BYPASS === "true";
}

export function getDevBypassSession(): AdminSession {
  return {
    userId: "dev-bypass",
    email: "dev-bypass@local (password later)",
    isAdmin: true,
  };
}

/** Admin check via user_roles (not a role column on profiles). */
export async function getAdminSession(): Promise<AdminSession | null> {
  if (isAdminDevBypass()) return getDevBypassSession();

  const sb = getSupabase();
  if (!sb) return null;
  const { data: sessionData } = await sb.auth.getSession();
  const user = sessionData.session?.user;
  if (!user) return null;

  const [{ data: profile }, { data: roles }] = await Promise.all([
    sb.from("profiles").select("email, display_name").eq("id", user.id).maybeSingle(),
    sb.from("user_roles").select("role").eq("user_id", user.id),
  ]);

  const isAdmin = (roles || []).some((r) => String(r.role).toLowerCase() === "admin");
  return {
    userId: user.id,
    email: profile?.email || user.email || "",
    isAdmin,
  };
}

export async function signInAdmin(email: string, password: string): Promise<{ error?: string }> {
  if (isAdminDevBypass()) return {};

  const sb = getSupabase();
  if (!sb) {
    return { error: "CMS is not configured (missing VITE_SUPABASE_URL / publishable key)." };
  }
  const { error } = await sb.auth.signInWithPassword({ email, password });
  if (error) {
    const msg = error.message || "Login failed";
    if (/email not confirmed/i.test(msg)) {
      return {
        error:
          "Email not confirmed. In Lovable Cloud → Auth → Users, open this user and confirm the email (or disable “Confirm email” for development).",
      };
    }
    if (/invalid login credentials/i.test(msg)) {
      return { error: "Invalid login credentials (wrong email/password, or user not created yet)." };
    }
    return { error: msg };
  }
  const session = await getAdminSession();
  if (!session?.isAdmin) {
    await sb.auth.signOut();
    return {
      error:
        "Signed in, but this account is not an admin. Insert into user_roles (user_id, role) with role = 'admin'.",
    };
  }
  return {};
}

export async function signOutAdmin(): Promise<void> {
  if (isAdminDevBypass()) return;
  const sb = getSupabase();
  if (!sb) return;
  await sb.auth.signOut();
}

export { isCmsConfigured };
