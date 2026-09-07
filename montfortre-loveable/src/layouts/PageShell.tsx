import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import DesktopHeader from "../components/layout/DesktopHeader";
import SiteFooter from "../components/layout/SiteFooter";
import ReviewsSection from "../components/shared/ReviewsSection";
import Seo from "../components/Seo";
import useCarousels from "../hooks/useCarousels";
import useStyleHover from "../hooks/useStyleHover";
import { applyPageSeoOverride } from "../lib/cms/pageSeoOverrides";
import type { PageSeo } from "../seo/types";
import "../styles/page-shell.css";
import "../styles/mobile-layout.css";

export interface PageShellProps {
  seo: PageSeo;
  children: ReactNode;
  /** Extra class on the page wrapper; `site-page` is always applied */
  pageClassName?: string;
  /** IDX and minimal pages omit the shared footer */
  showFooter?: boolean;
  /** IDX pages omit the desktop header (MobileHeader still renders from App.tsx) */
  showDesktopHeader?: boolean;
  /**
   * Custom Montfort Google reviews carousel.
   * Prefer mid-page placement (above Recent News) inside page content.
   * Pass true only for pages that still need end-of-content reviews.
   */
  showReviews?: boolean;
}

/**
 * GHL AI Studio page shell for converted TSX routes.
 * Pattern: Seo → DesktopHeader → page content → optional ReviewsSection → SiteFooter.
 * MobileHeader is rendered once in App.tsx above all routes.
 */
export default function PageShell({
  seo,
  children,
  pageClassName = "",
  showFooter = true,
  showDesktopHeader = true,
  showReviews = false,
}: PageShellProps) {
  useStyleHover();
  useCarousels();
  const { pathname } = useLocation();
  const reviewsVisible = showReviews;
  const resolvedSeo = applyPageSeoOverride(seo, pathname);

  return (
    <>
      <Seo
        title={resolvedSeo.title}
        metas={[...resolvedSeo.metas]}
        links={[...resolvedSeo.links]}
        jsonLd={[...resolvedSeo.jsonLd]}
      />
      {showDesktopHeader && <DesktopHeader />}
      <div className={["site-page", pageClassName].filter(Boolean).join(" ")}>
        {children}
        {reviewsVisible ? <ReviewsSection /> : null}
      </div>
      {showFooter && <SiteFooter />}
    </>
  );
}
