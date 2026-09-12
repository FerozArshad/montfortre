/**
 * Writes scripts/cms-seed-data.json from static registries for the CLI seed.
 * Run: npx vite-node scripts/export-cms-seed-data.ts
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ALL_LISTINGS } from "../src/data/listings";
import { BLOG_ARTICLE_REGISTRY } from "../src/blog/registry";
import { detailToListingInsert } from "../src/lib/cms/types";

const __dirname = dirname(fileURLToPath(import.meta.url));

const listings = ALL_LISTINGS.map((l) => detailToListingInsert(l, true));
const posts = Object.entries(BLOG_ARTICLE_REGISTRY).map(([slug, article]) => {
  const { meta, bodyHtml } = article;
  return {
    slug: meta.slug || slug,
    h1: meta.h1,
    lead: meta.lead,
    category: meta.category,
    author_name: meta.authorName,
    author_href: meta.authorHref,
    author_role: meta.authorRole,
    featured_image_src: meta.featuredImageSrc,
    featured_image_alt: meta.featuredImageAlt,
    share_url: meta.shareUrl,
    toc: meta.toc || [],
    body_html: bodyHtml,
    kicker_label: meta.kickerLabel ?? null,
    show_hero_ctas: meta.showHeroCtas !== false,
    published: true,
  };
});

const out = join(__dirname, "cms-seed-data.json");
writeFileSync(out, JSON.stringify({ listings, posts }, null, 2));
console.log(`Wrote ${listings.length} listings + ${posts.length} posts → ${out}`);
