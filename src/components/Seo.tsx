import { adaptSiteUrls, getSiteOrigin, isProductionHostname } from "../lib/siteOrigin";
import { useEffect } from "react";

type MetaAttrs = { [key: string]: string | undefined };

interface SeoProps {
  title: string;
  metas: MetaAttrs[];
  links: MetaAttrs[];
  jsonLd: string[];
}

function adaptAttrs(attrs: MetaAttrs, origin: string): MetaAttrs {
  const next: MetaAttrs = {};
  Object.entries(attrs).forEach(([k, v]) => {
    next[k] = typeof v === "string" ? adaptSiteUrls(v, origin) : v;
  });
  return next;
}

/**
 * Injects exact SEO tags (title, meta, canonical/icon links, JSON-LD) into <head>.
 * Frozen modules still store https://montfortre.com/; this rewrites that origin to the
 * current host (or VITE_PUBLIC_SITE_URL) so GHL preview / staging domains work.
 */
export default function Seo({ title, metas, links, jsonLd }: SeoProps) {
  useEffect(() => {
    const origin = getSiteOrigin();
    document.title = title;
    document.documentElement.lang = "en-US";
    document.head
      .querySelectorAll('meta[name="author"][content*="Vibe"], meta[name="twitter:site"][content*="Vibe"], meta[name="generator"][content*="Vibe"]')
      .forEach((el) => el.remove());
    const added: Element[] = [];

    if (!isProductionHostname(window.location.hostname)) {
      const robots = document.createElement("meta");
      robots.name = "robots";
      robots.content = "noindex, nofollow";
      document.head.appendChild(robots);
      added.push(robots);
    }

    metas.forEach((attrs) => {
      const adapted = adaptAttrs(attrs, origin);
      const key = adapted.name
        ? `meta[name="${adapted.name}"]`
        : adapted.property
          ? `meta[property="${adapted.property}"]`
          : null;
      if (key) document.head.querySelectorAll(key).forEach((el) => el.remove());
      const el = document.createElement("meta");
      Object.entries(adapted).forEach(([k, v]) => {
        if (v !== undefined) el.setAttribute(k, v);
      });
      document.head.appendChild(el);
      added.push(el);
    });

    links.forEach((attrs) => {
      const adapted = adaptAttrs(attrs, origin);
      if (adapted.rel === "canonical") {
        document.head.querySelectorAll('link[rel="canonical"]').forEach((el) => el.remove());
      }
      const el = document.createElement("link");
      Object.entries(adapted).forEach(([k, v]) => {
        if (v !== undefined) el.setAttribute(k, v);
      });
      document.head.appendChild(el);
      added.push(el);
    });

    jsonLd.forEach((raw) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.textContent = adaptSiteUrls(raw, origin);
      document.head.appendChild(el);
      added.push(el);
    });

    return () => added.forEach((el) => el.remove());
  }, [title, metas, links, jsonLd]);
  return null;
}
