import { useEffect, useState, type ReactNode } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { getAdminSession, isAdminDevBypass, isCmsConfigured, signOutAdmin, type AdminSession } from "../lib/cms/auth";
import "../styles/admin.css";

export function AdminGate({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AdminSession | null | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (isAdminDevBypass()) {
        if (!cancelled) setSession(await getAdminSession());
        return;
      }
      if (!isCmsConfigured()) {
        if (!cancelled) setSession(null);
        return;
      }
      const s = await getAdminSession();
      if (!cancelled) setSession(s);
    })();
    return () => {
      cancelled = true;
    };
  }, [location.pathname]);

  if (session === undefined) {
    return (
      <div className="admin-root">
        <div className="admin-login">
          <p className="admin-muted">Checking session…</p>
        </div>
      </div>
    );
  }

  if (!isAdminDevBypass() && !isCmsConfigured()) {
    return (
      <div className="admin-root">
        <div className="admin-login">
          <h1>CMS not configured</h1>
          <p className="admin-lede">Add Supabase URL and publishable key to the environment, then restart the app.</p>
        </div>
      </div>
    );
  }

  if (!session?.isAdmin) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
  }

  return <AdminShell session={session}>{children}</AdminShell>;
}

function AdminShell({ session, children }: { session: AdminSession; children: ReactNode }) {
  const { pathname } = useLocation();

  async function onLogout() {
    await signOutAdmin();
    window.location.href = "/admin/login";
  }

  const isActive = (to: string) => {
    if (to === "/admin") return pathname === "/admin";
    return pathname === to || pathname.startsWith(`${to}/`);
  };

  const link = (to: string, label: string) => (
    <Link to={to} className={isActive(to) ? "active" : ""}>
      {label}
    </Link>
  );

  const isSparkEditor =
    /^\/admin\/listings\/(?!settings(?:\/|$))[^/]+\/?$/.test(pathname) ||
    /^\/admin\/blog\/(?!settings(?:\/|$))[^/]+\/?$/.test(pathname);

  if (isSparkEditor) {
    return <div className="admin-root admin-root--spark">{children}</div>;
  }

  return (
    <div className="admin-root">
      <div className="admin-shell">
        <aside className="admin-nav">
          <div className="admin-nav-brand">
            <a href="/" className="admin-nav-logo" aria-label="Montfort Real Estate">
              <span className="admin-nav-logo-mark" role="img" aria-hidden="true" />
            </a>
            <div className="admin-nav-brand-text">
              Montfort
              <span>Content admin</span>
            </div>
          </div>
          {isAdminDevBypass() ? <div className="admin-nav-bypass">Local preview mode — sign-in disabled</div> : null}

          <div className="admin-nav-group">
            <div className="admin-nav-label">Overview</div>
            {link("/admin", "Dashboard")}
            {link("/admin/leads", "Leads")}
          </div>

          <div className="admin-nav-group">
            <div className="admin-nav-label">Content</div>
            {link("/admin/listings", "Listings Hub")}
            {link("/admin/pages", "Pages")}
            {link("/admin/blog", "Blogging")}
            {link("/admin/media", "Media")}
          </div>

          <div className="admin-nav-group">
            <div className="admin-nav-label">System</div>
            {link("/admin/settings", "Settings")}
          </div>

          <div className="admin-nav-foot">
            <div className="admin-nav-email" title={session.email}>
              {isAdminDevBypass() ? "Local preview" : session.email}
            </div>
            {!isAdminDevBypass() ? (
              <button type="button" className="admin-nav-logout" onClick={onLogout}>
                Log out
              </button>
            ) : null}
            <a className="admin-nav-site" href="/" target="_blank" rel="noreferrer">
              View site
            </a>
          </div>
        </aside>
        <main className="admin-main">{children}</main>
      </div>
    </div>
  );
}
