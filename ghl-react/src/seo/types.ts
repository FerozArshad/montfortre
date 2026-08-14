/** Shared SEO module types — frozen per-page constants in src/seo/pages/*.ts */

export type SeoMeta = {
  name?: string;
  property?: string;
  content?: string;
  [key: string]: string | undefined;
};

export type SeoLink = {
  rel: string;
  href?: string;
  sizes?: string;
  crossorigin?: string;
  [key: string]: string | undefined;
};

export interface PageSeo {
  title: string;
  metas: readonly SeoMeta[];
  links: readonly SeoLink[];
  jsonLd: readonly string[];
}
