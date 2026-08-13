import type { ReactNode } from "react";
import DesktopHeader from "../components/layout/DesktopHeader";
import SiteFooter from "../components/layout/SiteFooter";
import Seo from "../components/Seo";
import useCarousels from "../hooks/useCarousels";
import useStyleHover from "../hooks/useStyleHover";
import type { PageSeo } from "../seo/types";
import "../styles/page-shell.css";

export interface PageShellProps {
  seo: PageSeo;
  children: ReactNode;
  /** Extra class on the page wrapper; `site-page` is always applied */
  pageClassName?: string;
  /** IDX and minimal pages omit the shared footer */
  showFooter?: boolean;
  /** IDX pages omit the desktop header (MobileHeader still renders from App.tsx) */
  showDesktopHeader?: boolean;
}

/**
 * GHL AI Studio page shell for converted TSX routes.
 * Pattern: Seo → DesktopHeader → page content → SiteFooter.
 * MobileHeader is rendered once in App.tsx above all routes.
 */
export default function PageShell({
  seo,
  children,
  pageClassName = "",
  showFooter = true,
  showDesktopHeader = true,
}: PageShellProps) {
  useStyleHover();
  useCarousels();

  return (
    <>
      <Seo
        title={seo.title}
        metas={[...seo.metas]}
        links={[...seo.links]}
        jsonLd={[...seo.jsonLd]}
      />
      {showDesktopHeader && <DesktopHeader />}
      <div className={["site-page", pageClassName].filter(Boolean).join(" ")}>{children}</div>
      {showFooter && <SiteFooter />}
    </>
  );
}
