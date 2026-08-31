import type { PageSeo, SeoMeta } from "../../seo/types";
import { pathnameToPageKey } from "./sitePageStats";

const KEY = "montfort.pageSeo.overrides.v1";

export type PageSeoOverride = {
  /** Display / document title override */
  title?: string;
  meta_title?: string;
  meta_description?: string;
  /** Optional og:image URL */
  og_image?: string;
  updated_at?: string;
};

export type PageSeoOverrideMap = Record<string, PageSeoOverride>;

function readAll(): PageSeoOverrideMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return {};
    return JSON.parse(raw) as PageSeoOverrideMap;
  } catch {
    return {};
  }
}

function writeAll(map: PageSeoOverrideMap) {
  localStorage.setItem(KEY, JSON.stringify(map));
}

export function loadAllPageSeoOverrides(): PageSeoOverrideMap {
  return readAll();
}

export function loadPageSeoOverride(pageKey: string): PageSeoOverride | null {
  const row = readAll()[pageKey];
  return row || null;
}

export function savePageSeoOverride(pageKey: string, patch: PageSeoOverride): PageSeoOverride {
  const map = readAll();
  const next: PageSeoOverride = {
    ...map[pageKey],
    ...patch,
    updated_at: new Date().toISOString(),
  };
  // Drop empty strings
  for (const k of Object.keys(next) as (keyof PageSeoOverride)[]) {
    if (typeof next[k] === "string" && !(next[k] as string).trim()) {
      delete next[k];
    }
  }
  map[pageKey] = next;
  writeAll(map);
  return next;
}

function upsertMeta(metas: SeoMeta[], matcher: (m: SeoMeta) => boolean, attrs: SeoMeta): SeoMeta[] {
  const list = metas.map((m) => ({ ...m }));
  const i = list.findIndex(matcher);
  if (i >= 0) list[i] = { ...list[i], ...attrs };
  else list.push(attrs);
  return list;
}

/** Merge dashboard SEO overrides into a frozen PageSeo module. */
export function applyPageSeoOverride(seo: PageSeo, pathname: string): PageSeo {
  const pageKey = pathnameToPageKey(pathname);
  const override = loadPageSeoOverride(pageKey);
  if (!override) return seo;

  const docTitle = (override.meta_title || override.title || seo.title).trim();
  let metas = seo.metas.map((m) => ({ ...m }));

  if (override.meta_description?.trim()) {
    const desc = override.meta_description.trim();
    metas = upsertMeta(metas, (m) => m.name === "description", { name: "description", content: desc });
    metas = upsertMeta(metas, (m) => m.name === "twitter:description", { name: "twitter:description", content: desc });
    metas = upsertMeta(metas, (m) => m.property === "og:description", { property: "og:description", content: desc });
  }

  if (docTitle) {
    metas = upsertMeta(metas, (m) => m.name === "twitter:title", { name: "twitter:title", content: docTitle });
    metas = upsertMeta(metas, (m) => m.property === "og:title", { property: "og:title", content: docTitle });
  }

  if (override.og_image?.trim()) {
    const img = override.og_image.trim();
    metas = upsertMeta(metas, (m) => m.property === "og:image", { property: "og:image", content: img });
    metas = upsertMeta(metas, (m) => m.name === "twitter:image", { name: "twitter:image", content: img });
  }

  return {
    title: docTitle,
    metas,
    links: [...seo.links],
    jsonLd: [...seo.jsonLd],
  };
}
