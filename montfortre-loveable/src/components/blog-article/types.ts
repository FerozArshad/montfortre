import type { ReactNode } from "react";
import type { PageSeo } from "../../seo/types";

export type BlogTocItem = readonly [href: string, label: string];

export type BlogFaqItem = { q: string; a: string };

export interface BlogArticleMeta {
  slug: string;
  h1: string;
  lead: string;
  category: string;
  authorName: string;
  authorHref: string;
  authorRole: string;
  featuredImageSrc: string;
  featuredImageAlt: string;
  shareUrl: string;
  toc: readonly BlogTocItem[];
  kickerLabel?: string;
  showHeroCtas?: boolean;
  /** Bottom-of-article FAQ accordion; omitted or empty hides the section. */
  faqs?: readonly BlogFaqItem[];
}

export interface BlogArticleModule {
  meta: BlogArticleMeta;
  seo: PageSeo;
  /** Verbatim cleaned article HTML from the live/HTTrack source. */
  bodyHtml: string;
  /** Optional article-specific React blocks after the HTML body (CTA overrides, etc.). */
  afterBody?: ReactNode;
}
