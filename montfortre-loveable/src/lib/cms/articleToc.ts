/**
 * Table of contents for CMS-authored articles.
 *
 * The body editor stores the whole article as a single HTML block, so headings
 * never become `heading` blocks and `tocFromBlocks` finds nothing. We therefore
 * derive the TOC from the rendered HTML instead, injecting stable `id`s on the
 * way so the sidebar links have something to jump to.
 */

import { slugify } from "./sanitize";

export type ArticleTocItem = [href: string, label: string];

const HEADING_SELECTOR = "h2, h3";

/**
 * Adds an `id` to every h2/h3 that lacks one and returns the matching TOC.
 * Only h2s appear in the sidebar; h3s still get anchors so in-body links work.
 */
export function withHeadingAnchors(html: string): { html: string; toc: ArticleTocItem[] } {
  if (!html?.trim() || typeof window === "undefined" || typeof DOMParser === "undefined") {
    return { html: html || "", toc: [] };
  }

  let doc: Document;
  try {
    doc = new DOMParser().parseFromString(`<div id="__root">${html}</div>`, "text/html");
  } catch {
    return { html, toc: [] };
  }

  const root = doc.getElementById("__root");
  if (!root) return { html, toc: [] };

  const used = new Set<string>();
  const toc: ArticleTocItem[] = [];

  root.querySelectorAll(HEADING_SELECTOR).forEach((el) => {
    const label = (el.textContent || "").trim();
    if (!label) return;

    let id = el.getAttribute("id")?.trim() || slugify(label);
    if (!id) return;

    // Repeated headings would otherwise all share one anchor.
    if (used.has(id)) {
      let n = 2;
      while (used.has(`${id}-${n}`)) n += 1;
      id = `${id}-${n}`;
    }
    used.add(id);
    el.setAttribute("id", id);

    if (el.tagName.toLowerCase() === "h2") toc.push([`#${id}`, label]);
  });

  return { html: root.innerHTML, toc };
}
