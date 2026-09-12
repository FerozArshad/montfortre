import { Link, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  lede?: string;
  actions?: ReactNode;
};

export function ListingsHubChrome({ children, title, lede, actions }: Props) {
  const { pathname } = useLocation();

  const hubActive =
    pathname === "/admin/listings" ||
    pathname === "/admin/listings/new" ||
    (/^\/admin\/listings\/[^/]+$/.test(pathname) && pathname !== "/admin/listings/settings");
  const settingsActive = pathname === "/admin/listings/settings";

  return (
    <div className="hub-root">
      <div className="hub-top">
        <div>
          <div className="hub-kicker">Site tools</div>
          <h1 className="hub-title">{title}</h1>
          {lede ? <p className="hub-lede">{lede}</p> : null}
        </div>
        {actions ? <div className="hub-top-actions">{actions}</div> : null}
      </div>

      <nav className="hub-subnav" aria-label="Listings Hub">
        <Link to="/admin/listings" className={`hub-subnav-link${hubActive && !settingsActive ? " is-active" : ""}`}>
          Listings Hub
        </Link>
        <Link to="/admin/listings/settings" className={`hub-subnav-link${settingsActive ? " is-active" : ""}`}>
          Settings
        </Link>
        <Link to="/admin/listings/new" className="hub-subnav-cta">
          + Add listing
        </Link>
      </nav>

      {children}
    </div>
  );
}
