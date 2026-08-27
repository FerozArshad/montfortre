import { FormEvent, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getAdminSession, isAdminDevBypass, isCmsConfigured, signInAdmin } from "../../lib/cms/auth";
import { checkCmsHealth, type CmsHealth } from "../../lib/cms/health";
import "../../styles/admin.css";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from || "/admin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const [alreadyAdmin, setAlreadyAdmin] = useState(false);
  const [health, setHealth] = useState<CmsHealth | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (isAdminDevBypass()) {
        if (!cancelled) {
          setAlreadyAdmin(true);
          setReady(true);
        }
        return;
      }
      if (!isCmsConfigured()) {
        if (!cancelled) {
          setHealth(await checkCmsHealth());
          setReady(true);
        }
        return;
      }
      const [s, h] = await Promise.all([getAdminSession(), checkCmsHealth()]);
      if (!cancelled) {
        setAlreadyAdmin(Boolean(s?.isAdmin));
        setHealth(h);
        setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (ready && alreadyAdmin) return <Navigate to="/admin" replace />;

  const schemaReady = Boolean(health?.postsOk && health?.pagesOk && health?.profilesOk && health?.userRolesOk);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await signInAdmin(email.trim(), password);
    setBusy(false);
    if (res.error) {
      setError(res.error);
      return;
    }
    navigate(from, { replace: true });
  }

  return (
    <div className="admin-root">
      <div className="admin-login">
        <div className="admin-login-brand">
          <div className="admin-login-logo" role="img" aria-label="Montfort Real Estate" />
          <div>
            <h1>Sign in</h1>
            <p className="admin-lede" style={{ marginBottom: 0 }}>
              Montfort content admin — invite-only access.
            </p>
          </div>
        </div>
        {!isCmsConfigured() ? (
          <div className="admin-error">CMS environment is not configured. Add credentials and restart the app.</div>
        ) : null}
        {isCmsConfigured() && health && !schemaReady ? (
          <div className="admin-error">Cloud services are not ready yet. Confirm setup, then try again.</div>
        ) : null}
        {error ? <div className="admin-error">{error}</div> : null}
        <form className="admin-form" onSubmit={onSubmit}>
          <label>
            Email
            <input type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
          </label>
          <button className="admin-btn" type="submit" disabled={busy || !isCmsConfigured() || !schemaReady}>
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
