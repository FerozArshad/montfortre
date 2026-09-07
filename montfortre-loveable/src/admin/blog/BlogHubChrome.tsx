import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  lede?: string;
  actions?: ReactNode;
  onNewArticle?: () => void;
};

export function BlogHubChrome({
  children,
  title = "Blogging",
  lede = "Manage your articles.",
  actions,
  onNewArticle,
}: Props) {
  const { pathname } = useLocation();
  const hubActive =
    pathname === "/admin/blog" ||
    pathname === "/admin/blog/" ||
    pathname === "/admin/blog/new" ||
    (/^\/admin\/blog\/[^/]+$/.test(pathname) && pathname !== "/admin/blog/settings");
  const settingsActive = pathname === "/admin/blog/settings";

  return (
    <div className="hub-root blog-hub-root">
      <div className="hub-top">
        <div>
          <div className="hub-kicker">Site tools</div>
          <h1 className="hub-title">{title}</h1>
          {lede ? <p className="hub-lede">{lede}</p> : null}
        </div>
        {actions ? <div className="hub-top-actions">{actions}</div> : null}
      </div>

      <nav className="hub-subnav" aria-label="Blog">
        <Link to="/admin/blog" className={`hub-subnav-link${hubActive && !settingsActive ? " is-active" : ""}`}>
          All articles
        </Link>
        <Link to="/admin/blog/settings" className={`hub-subnav-link${settingsActive ? " is-active" : ""}`}>
          Settings
        </Link>
        {onNewArticle ? (
          <button type="button" className="hub-subnav-cta" onClick={onNewArticle}>
            + New article
          </button>
        ) : (
          <Link to="/admin/blog/new" className="hub-subnav-cta">
            + New article
          </Link>
        )}
      </nav>

      {children}
    </div>
  );
}
