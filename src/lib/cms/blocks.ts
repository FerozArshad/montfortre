import { sanitizeBlogHtml } from "./sanitize";

export type CmsGalleryImage = { src: string; alt: string };

export type CmsBlock =
  | { id: string; type: "heading"; level: 2 | 3; text: string }
  | { id: string; type: "text"; html: string }
  | { id: string; type: "image"; src: string; alt: string }
  | { id: string; type: "gallery"; images: CmsGalleryImage[] }
  | { id: string; type: "container"; children: CmsBlock[] }
  | { id: string; type: "divider" }
  | { id: string; type: "cta"; label: string; href: string };

/** One question/answer pair rendered in the article's FAQ accordion. */
export type ArticleFaq = { q: string; a: string };

export type ArticleEditorMeta = {
  featured_image_src?: string;
  featured_image_alt?: string;
  author_name?: string;
  author_href?: string;
  author_role?: string;
  meta_title?: string;
  meta_description?: string;
  show_hero_ctas?: boolean;
  kicker_label?: string | null;
  /** Bottom-of-article FAQ. Also emitted as FAQPage JSON-LD. */
  faqs?: ArticleFaq[];
  /** Defaults to true when absent so existing posts keep their sidebar. */
  show_toc?: boolean;
};

/** Drops blanks and trims, so half-filled editor rows never reach the page. */
export function sanitizeFaqs(input: unknown): ArticleFaq[] {
  if (!Array.isArray(input)) return [];
  return input
    .map((row) => {
      const item = row as Partial<ArticleFaq> | null;
      return {
        q: String(item?.q ?? "").trim(),
        a: String(item?.a ?? "").trim(),
      };
    })
    .filter((row) => row.q.length > 0 && row.a.length > 0);
}

export type ArticleBodyPayload = {
  __montfort: "article";
  version: 1;
  blocks: CmsBlock[];
  meta?: ArticleEditorMeta;
};

export type FreeformPagePayload = {
  __montfort: "page";
  version: 1;
  blocks: CmsBlock[];
  /** Optional lead under title / meta description fallback */
  lead?: string;
  meta_title?: string;
  meta_description?: string;
};

export function newBlockId(): string {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `b-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function createEmptyBlock(type: CmsBlock["type"]): CmsBlock {
  const id = newBlockId();
  switch (type) {
    case "heading":
      return { id, type, level: 2, text: "Heading" };
    case "text":
      return { id, type, html: "<p>Write your text…</p>" };
    case "image":
      return { id, type, src: "", alt: "" };
    case "gallery":
      return { id, type, images: [] };
    case "container":
      return { id, type, children: [] };
    case "divider":
      return { id, type };
    case "cta":
      return { id, type, label: "Book a consultation", href: "https://calendly.com/montfort" };
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sanitizeBlock(block: CmsBlock): CmsBlock {
  switch (block.type) {
    case "heading":
      return { ...block, text: block.text.replace(/<[^>]*>/g, "").trim() || "Heading" };
    case "text":
      return { ...block, html: sanitizeBlogHtml(block.html || "") };
    case "image":
      return { ...block, src: block.src.trim(), alt: block.alt.replace(/<[^>]*>/g, "").trim() };
    case "gallery":
      return {
        ...block,
        images: (block.images || [])
          .filter((img) => img.src?.trim())
          .map((img) => ({ src: img.src.trim(), alt: (img.alt || "").replace(/<[^>]*>/g, "").trim() })),
      };
    case "container":
      return { ...block, children: sanitizeBlocks(block.children || []) };
    case "cta":
      return {
        ...block,
        label: block.label.replace(/<[^>]*>/g, "").trim() || "Learn more",
        href: block.href.trim() || "#",
      };
    case "divider":
      return block;
  }
}

export function sanitizeBlocks(blocks: CmsBlock[]): CmsBlock[] {
  return (blocks || []).map(sanitizeBlock);
}

export function blocksToHtml(blocks: CmsBlock[]): string {
  const parts: string[] = [];
  for (const block of sanitizeBlocks(blocks)) {
    switch (block.type) {
      case "heading": {
        const tag = block.level === 3 ? "h3" : "h2";
        const id = block.text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
          .slice(0, 60);
        parts.push(`<${tag} id="${escapeHtml(id)}">${escapeHtml(block.text)}</${tag}>`);
        break;
      }
      case "text":
        parts.push(block.html);
        break;
      case "image":
        if (block.src) {
          parts.push(
            `<figure class="cms-block-image"><img src="${escapeHtml(block.src)}" alt="${escapeHtml(block.alt)}" loading="lazy" />${
              block.alt ? `<figcaption>${escapeHtml(block.alt)}</figcaption>` : ""
            }</figure>`,
          );
        }
        break;
      case "gallery":
        if (block.images.length) {
          parts.push(
            `<div class="cms-block-gallery">${block.images
              .map(
                (img) =>
                  `<figure><img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt)}" loading="lazy" /></figure>`,
              )
              .join("")}</div>`,
          );
        }
        break;
      case "container":
        parts.push(`<div class="cms-block-container">${blocksToHtml(block.children)}</div>`);
        break;
      case "divider":
        parts.push("<hr class=\"cms-block-divider\" />");
        break;
      case "cta":
        parts.push(
          `<p class="cms-block-cta"><a class="cms-block-cta-link" href="${escapeHtml(block.href)}">${escapeHtml(block.label)}</a></p>`,
        );
        break;
    }
  }
  return parts.join("\n");
}

/** Wrap legacy HTML (or plain string) as a single text block document. */
export function htmlToBlocks(html: string): CmsBlock[] {
  const trimmed = (html || "").trim();
  if (!trimmed) return [createEmptyBlock("text")];
  return [{ id: newBlockId(), type: "text", html: sanitizeBlogHtml(trimmed) }];
}

export function parseArticleDocument(raw: string | null | undefined): { blocks: CmsBlock[]; meta: ArticleEditorMeta } {
  if (!raw?.trim()) return { blocks: [], meta: {} };
  try {
    const data = JSON.parse(raw) as ArticleBodyPayload;
    if (data?.__montfort === "article" && Array.isArray(data.blocks)) {
      return { blocks: sanitizeBlocks(data.blocks), meta: data.meta || {} };
    }
  } catch {
    /* legacy HTML */
  }
  return { blocks: htmlToBlocks(raw), meta: {} };
}

export function parseArticleBody(raw: string | null | undefined): CmsBlock[] {
  return parseArticleDocument(raw).blocks;
}

export function parseArticleMeta(raw: string | null | undefined): ArticleEditorMeta {
  return parseArticleDocument(raw).meta;
}

export function serializeArticleBody(blocks: CmsBlock[], meta?: ArticleEditorMeta): string {
  const payload: ArticleBodyPayload = {
    __montfort: "article",
    version: 1,
    blocks: sanitizeBlocks(blocks),
  };
  if (meta && Object.keys(meta).length) payload.meta = meta;
  return JSON.stringify(payload);
}

export function parseFreeformPageBody(raw: string | null | undefined): FreeformPagePayload | null {
  if (!raw?.trim()) return null;
  try {
    const data = JSON.parse(raw) as FreeformPagePayload;
    if (data?.__montfort === "page" && Array.isArray(data.blocks)) {
      return {
        __montfort: "page",
        version: 1,
        blocks: sanitizeBlocks(data.blocks),
        lead: data.lead || "",
        meta_title: data.meta_title || "",
        meta_description: data.meta_description || "",
      };
    }
  } catch {
    return null;
  }
  return null;
}

export function serializeFreeformPageBody(
  blocks: CmsBlock[],
  lead = "",
  seo?: { meta_title?: string; meta_description?: string },
): string {
  const payload: FreeformPagePayload = {
    __montfort: "page",
    version: 1,
    blocks: sanitizeBlocks(blocks),
    lead: lead.trim() || undefined,
    meta_title: seo?.meta_title?.trim() || undefined,
    meta_description: seo?.meta_description?.trim() || undefined,
  };
  return JSON.stringify(payload);
}

export function tocFromBlocks(blocks: CmsBlock[]): [string, string][] {
  const toc: [string, string][] = [];
  const walk = (list: CmsBlock[]) => {
    for (const b of list) {
      if (b.type === "heading") {
        const id = b.text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")
          .slice(0, 60);
        toc.push([`#${id}`, b.text]);
      } else if (b.type === "container") {
        walk(b.children);
      }
    }
  };
  walk(blocks);
  return toc;
}

export function articleBodyToHtml(raw: string | null | undefined): string {
  return sanitizeBlogHtml(blocksToHtml(parseArticleBody(raw)));
}
