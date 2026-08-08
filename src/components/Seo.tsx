import { useEffect } from "react";

type MetaAttrs = Record<string, string>;

interface SeoProps {
  title: string;
  metas: MetaAttrs[];
  links: MetaAttrs[];
  jsonLd: string[];
}

/**
 * Injects exact SEO tags (title, meta, canonical/icon links, JSON-LD) into <head>.
 * Removes any pre-existing tag with the same name/property/rel first, so template
 * defaults (e.g. a build tool's own description or og:title) never shadow these.
 */
export default function Seo({ title, metas, links, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = "en-US";
    // strip build-template branding that we don't explicitly replace
    document.head
      .querySelectorAll('meta[name="author"][content*="Vibe"], meta[name="twitter:site"][content*="Vibe"], meta[name="generator"][content*="Vibe"]')
      .forEach((el) => el.remove());
    const added: Element[] = [];

    // staging safety: never let the preview host get indexed
    if (/\.vibepreview\.com$/i.test(window.location.hostname)) {
      const robots = document.createElement("meta");
      robots.name = "robots";
      robots.content = "noindex, nofollow";
      document.head.appendChild(robots);
      added.push(robots);
    }

    metas.forEach((attrs) => {
      const key = attrs.name
        ? `meta[name="${attrs.name}"]`
        : attrs.property
          ? `meta[property="${attrs.property}"]`
          : null;
      if (key) document.head.querySelectorAll(key).forEach((el) => el.remove());
      const el = document.createElement("meta");
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
      added.push(el);
    });

    links.forEach((attrs) => {
      if (attrs.rel === "canonical") {
        document.head.querySelectorAll('link[rel="canonical"]').forEach((el) => el.remove());
      }
      const el = document.createElement("link");
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
      added.push(el);
    });

    jsonLd.forEach((raw) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.textContent = raw;
      document.head.appendChild(el);
      added.push(el);
    });

    return () => added.forEach((el) => el.remove());
  }, [title, metas, links, jsonLd]);
  return null;
}
