import { useEffect } from "react";

type MetaAttrs = Record<string, string>;

interface SeoProps {
  title: string;
  metas: MetaAttrs[];
  links: MetaAttrs[];
  jsonLd: string[];
}

/** Injects exact SEO tags (title, meta, canonical/icon links, JSON-LD) into <head>. */
export default function Seo({ title, metas, links, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;
    const added: Element[] = [];
    metas.forEach((attrs) => {
      const el = document.createElement("meta");
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
      added.push(el);
    });
    links.forEach((attrs) => {
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
