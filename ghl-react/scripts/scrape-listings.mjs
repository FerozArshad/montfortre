/**
 * One-shot scraper: pull listing index + detail pages from live montfortre.com
 * and write JSON for generating TS data files.
 *
 * Usage: node scripts/scrape-listings.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "_listing-scrape");

const KNOWN_SLUGS = [
  "523-west-121st-street-2",
  "475-west-144th-street",
  "26-west-95th-street",
  "124-west-131st-street-2",
  "313-west-143rd-street-2a",
  "14-west-121st-street",
  "481-west-145th-street",
  "542-cathedral-parkway",
  "544-west-148th-street",
  "76-west-105th-street-thn",
  "76-west-105th-street-ph",
  "2040-madison-avenue-4",
  "420-west-144th-street",
  "108-west-114th-street-4b",
];

/** Specs from live current-listings cards (more reliable than body text scrape). */
const CARD_META = {
  "523-west-121st-street-2": { beds: "2", baths: "1", zip: "10027" },
  "475-west-144th-street": { year: "1901", sqft: "4,608", stories: "4", zip: "10031" },
  "26-west-95th-street": { year: "1893", sqft: "6,700", stories: "5", zip: "10025" },
  "124-west-131st-street-2": { beds: "5", baths: "4.5", sqft: "4,688", zip: "10027" },
  "313-west-143rd-street-2a": { beds: "3", baths: "2", sqft: "1,650", zip: "10030" },
  "14-west-121st-street": { beds: "6", baths: "4.5", sqft: "5,320", zip: "10030" },
  "481-west-145th-street": { year: "1926", sqft: "3,666", stories: "4", zip: "10031" },
  "542-cathedral-parkway": { year: "1985", sqft: "4,100", stories: "4", zip: "10025" },
  "544-west-148th-street": { year: "1910", sqft: "3,536", stories: "4", zip: "10031" },
  "76-west-105th-street-thn": { beds: "3", baths: "3+", sqft: "4,232", zip: "10025" },
  "76-west-105th-street-ph": { beds: "4", baths: "4", sqft: "3,675", zip: "10025" },
  "2040-madison-avenue-4": { year: "1899", sqft: "3,240", stories: "4", zip: "10035" },
  "420-west-144th-street": { year: "1920", sqft: "3,615", stories: "4", zip: "10031" },
  "108-west-114th-street-4b": { beds: "1", baths: "1", zip: "10026" },
};

async function collectSlugs() {
  return KNOWN_SLUGS;
}

function stripSize(url) {
  return url.replace(/-\d+x\d+(?=\.(jpg|jpeg|png|webp))/i, "");
}

function text(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&rsquo;/g, "'")
    .replace(/&#8220;|&ldquo;/g, '"')
    .replace(/&#8221;|&rdquo;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "MontfortListingScraper/1.0" },
  });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.text();
}

function extractGallery(html) {
  const alts = [];
  // Prefer caption order from listing gallery text blob if present
  const imgRe =
    /<img[^>]+(?:src|data-src|data-lazy-src)=["']([^"']+agentfire[^"']+)["'][^>]*(?:alt=["']([^"']*)["'])?/gi;
  const byAlt = new Map();
  let m;
  while ((m = imgRe.exec(html))) {
    let src = stripSize(m[1]);
    if (!/\/uploads\/sites\/312\//.test(src)) continue;
    if (/logo|bio-pic|favicon|qr|icon/i.test(src)) continue;
    const alt = (m[2] || "").trim();
    if (alt) byAlt.set(alt, src);
    else if (![...byAlt.values()].includes(src)) byAlt.set(src, src);
  }

  // Ordered alts from common gallery caption patterns in page source
  const ordered = [];
  const seen = new Set();
  const push = (src, alt) => {
    if (!src || seen.has(src)) return;
    seen.add(src);
    ordered.push({ src, alt: alt || "Listing photo" });
  };

  for (const [alt, src] of byAlt) {
    if (alt === src) continue;
    push(src, alt);
  }
  for (const [alt, src] of byAlt) {
    if (alt === src) push(src, "Listing photo");
  }
  return ordered;
}

function extractOverviewParas(html) {
  const aboutIdx = html.search(/About this property/i);
  if (aboutIdx < 0) return [];
  const chunk = html.slice(aboutIdx, aboutIdx + 20000);
  const panelMatch = chunk.match(/tab-pane[\s\S]*?(?:<\/div>\s*<\/div>\s*<div class="tab-pane|Property Insights)/i);
  const block = panelMatch ? panelMatch[0] : chunk.slice(0, 12000);
  const paras = [];
  const pre = block.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi);
  for (const p of pre) {
    const t = text(p[1]);
    if (t.length < 40) continue;
    if (/Bedrooms|Bathrooms|Schedule/i.test(t) && t.length < 80) continue;
    if (/fill in your details/i.test(t)) continue;
    if (/^\*All showings/i.test(t)) continue;
    if (/what days of the week/i.test(t)) continue;
    if (/Questions about the layout/i.test(t)) continue;
    paras.push(t);
  }
  return paras;
}

function extractInsights(html) {
  const insights = [];
  const bed = html.match(/Bedrooms[\s\S]{0,200}?<span[^>]*>\s*([\d.]+)\s*<\/span>/i);
  const bath = html.match(/Bathrooms[\s\S]{0,200}?<span[^>]*>\s*([\d.]+)\s*<\/span>/i);
  if (bed) insights.push({ title: "Bedrooms", body: bed[1] });
  if (bath) insights.push({ title: "Bathrooms", body: bath[1] });
  return insights;
}

function extractMeta(html, slug) {
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
  const title = text(h1 || "").replace(/\s+/g, " ") || slug;
  const priceMatch = html.match(/\$[\d,]+/);
  const price = priceMatch ? priceMatch[0] : "";

  const body = text(html);
  const city = /New York/i.test(body) ? "New York" : "";
  const state = /\bNY\b|New York/.test(body) ? "NY" : "";
  const zipM = body.match(/\b(100\d{2})\b/);
  const zip = zipM ? zipM[1] : "";

  let beds = "";
  let baths = "";
  const bedsM = body.match(/(\d+(?:\.\d+)?)\s*beds?/i);
  const bathsM = body.match(/(\d+(?:\.\d+)?(?:\+)?)\s*baths?/i);
  if (bedsM) beds = bedsM[1];
  if (bathsM) baths = bathsM[1];

  const yearM = body.match(/\b((?:18|19|20)\d{2})\s*year\b/i);
  const sqftM = body.match(/\b([\d,]+)\s*sqft\b/i);
  const storiesM = body.match(/\b([1-9]\d?)\s*stories\b/i);

  return {
    title: title.replace(/\s+/g, " "),
    price,
    beds,
    baths,
    year: yearM ? yearM[1] : "",
    sqft: sqftM ? sqftM[1] : "",
    stories: storiesM ? storiesM[1] : "",
    city,
    state,
    zip,
  };
}

async function scrapeListing(slug, sortOrder) {
  const url = `https://montfortre.com/${slug}/`;
  console.log("scraping", url);
  const html = await fetchText(url);
  const meta = extractMeta(html, slug);
  // Prefer live title casing from h1 raw then normalize lightly
  const h1Raw = text((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || "");
  const title = h1Raw
    ? h1Raw.replace(/\s+/g, " ").replace(/\w\S*/g, (t) => {
        if (/^#/.test(t)) return t;
        return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
      })
    : meta.title;

  const gallery = extractGallery(html);
  const overviewParas = extractOverviewParas(html);
  let insights = extractInsights(html);

  const card = CARD_META[slug] || {};
  meta.beds = card.beds || meta.beds;
  meta.baths = card.baths || meta.baths;
  meta.year = card.year || meta.year;
  meta.sqft = card.sqft || meta.sqft;
  meta.stories = card.stories || meta.stories;
  meta.zip = card.zip || meta.zip;

  const facts = [{ label: "Price", value: meta.price || "—" }];
  if (meta.beds) facts.push({ label: "Bedrooms", value: meta.beds });
  if (meta.baths) facts.push({ label: "Bathrooms", value: meta.baths });
  if (meta.year) facts.push({ label: "Year", value: meta.year });
  if (meta.sqft) facts.push({ label: "Sq Ft", value: meta.sqft });
  if (meta.stories) facts.push({ label: "Stories", value: meta.stories });
  facts.push({ label: "City", value: meta.city || "New York" });
  facts.push({ label: "State", value: meta.state || "NY" });
  if (meta.zip) facts.push({ label: "ZIP", value: meta.zip });

  if (!insights.length) {
    insights = [
      ...(meta.beds ? [{ title: "Bedrooms", body: meta.beds }] : []),
      ...(meta.baths ? [{ title: "Bathrooms", body: meta.baths }] : []),
      ...(meta.year && !meta.beds ? [{ title: "Year built", body: meta.year }] : []),
      ...(meta.sqft && !meta.beds ? [{ title: "Square feet", body: meta.sqft }] : []),
      ...(meta.stories && !meta.beds ? [{ title: "Stories", body: meta.stories }] : []),
    ];
  }

  const lastPara = overviewParas[overviewParas.length - 1] || "";
  const nearby = [];
  for (const word of [
    "Columbia University",
    "Barnard College",
    "Morningside Park",
    "Riverside Park",
    "Central Park",
    "Harlem",
    "subway",
  ]) {
    if (lastPara.includes(word) || overviewParas.join(" ").includes(word)) nearby.push(word);
  }

  // Keep gallery order from scrape (live often leads with exterior / higher index)
  const galleryOrdered = gallery;
  const hero = galleryOrdered[0] || {
    src: "https://montfortre.com/redesign-assets/listings/placeholder.jpg",
    alt: title,
  };

  return {
    slug,
    title,
    status: "",
    price: meta.price,
    beds: meta.beds,
    baths: meta.baths,
    year: meta.year,
    sqft: meta.sqft,
    stories: meta.stories,
    propertyType: "",
    street: title,
    city: meta.city || "New York",
    state: meta.state || "NY",
    zip: meta.zip,
    neighborhood: "",
    heroImage: hero.src,
    heroAlt: hero.alt,
    gallery: galleryOrdered,
    facts,
    overviewParas,
    insights,
    location: {
      mapQuery: `${title}, New York, NY ${meta.zip}`.trim(),
      blurb: lastPara || `${title} in New York, NY.`,
      nearby: nearby.length ? nearby : ["New York City"],
    },
    sortOrder,
    tourHref: url,
  };
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const slugs = await collectSlugs();
  console.log("slugs", slugs);
  const all = [];
  let i = 0;
  for (const slug of slugs) {
    i += 1;
    try {
      const data = await scrapeListing(slug, i);
      all.push(data);
      fs.writeFileSync(path.join(outDir, `${slug}.json`), JSON.stringify(data, null, 2));
    } catch (e) {
      console.error("FAIL", slug, e.message);
    }
  }
  fs.writeFileSync(path.join(outDir, "_all.json"), JSON.stringify(all, null, 2));
  console.log("wrote", all.length, "listings to", outDir);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
