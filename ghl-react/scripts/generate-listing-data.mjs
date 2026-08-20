/**
 * Generate listing TS modules from scripts/_listing-scrape/*.json
 * Usage: node scripts/generate-listing-data.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scrapeDir = path.join(__dirname, "_listing-scrape");
const outDir = path.join(__dirname, "../src/data/listings");

function camelExport(slug) {
  return (
    "LISTING_" +
    slug
      .replace(/-/g, "_")
      .toUpperCase()
      .replace(/[^A-Z0-9_]/g, "")
  );
}

function fileName(slug) {
  // listing523West121stStreet2 style
  const parts = slug.split("-");
  const camel = parts
    .map((p, i) => {
      if (i === 0 && /^\d/.test(p)) return p;
      return p.charAt(0).toUpperCase() + p.slice(1);
    })
    .join("");
  return `listing${camel.charAt(0).toUpperCase()}${camel.slice(1)}.ts`;
}

function esc(s) {
  return String(s ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function priceValue(price) {
  const n = Number(String(price).replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function emit(listing) {
  const exp = camelExport(listing.slug);
  const opt = (key, val) => (val ? `\n  ${key}: ${JSON.stringify(val)},` : "");
  return `/** Auto-generated from live montfortre.com/${listing.slug}/ — review before ship. */

import { LISTING_AGENT, parsePriceValue, type ListingDetail } from "./types";

export const ${exp}: ListingDetail = {
  slug: ${JSON.stringify(listing.slug)},
  title: ${JSON.stringify(listing.title)},
  status: "",
  price: ${JSON.stringify(listing.price)},
  priceValue: parsePriceValue(${JSON.stringify(listing.price)}),
  beds: ${JSON.stringify(listing.beds || "")},
  baths: ${JSON.stringify(listing.baths || "")},${opt("year", listing.year)}${opt("sqft", listing.sqft)}${opt("stories", listing.stories)}
  propertyType: "",
  street: ${JSON.stringify(listing.street || listing.title)},
  city: ${JSON.stringify(listing.city || "New York")},
  state: ${JSON.stringify(listing.state || "NY")},
  zip: ${JSON.stringify(listing.zip || "")},
  neighborhood: ${JSON.stringify(listing.neighborhood || "")},
  heroImage: ${JSON.stringify(listing.heroImage)},
  heroAlt: ${JSON.stringify(listing.heroAlt)},
  sortOrder: ${Number(listing.sortOrder) || 99},
  gallery: ${JSON.stringify(listing.gallery || [], null, 2).replace(/\n/g, "\n  ")},
  facts: ${JSON.stringify(listing.facts || [], null, 2).replace(/\n/g, "\n  ")},
  overviewParas: ${JSON.stringify(listing.overviewParas || [], null, 2).replace(/\n/g, "\n  ")},
  insights: ${JSON.stringify(listing.insights || [], null, 2).replace(/\n/g, "\n  ")},
  location: ${JSON.stringify(listing.location || { mapQuery: listing.title, blurb: "", nearby: [] }, null, 2).replace(/\n/g, "\n  ")},
  agent: { ...LISTING_AGENT },
  tourHref: ${JSON.stringify(listing.tourHref || `https://montfortre.com/${listing.slug}/`)},
};
`;
}

function main() {
  const allPath = path.join(scrapeDir, "_all.json");
  if (!fs.existsSync(allPath)) {
    console.error("Missing", allPath, "- run scrape-listings.mjs first");
    process.exit(1);
  }
  const all = JSON.parse(fs.readFileSync(allPath, "utf8"));
  const exports = [];
  for (const listing of all) {
    if (listing.slug === "523-west-121st-street-2") {
      // keep hand-tuned file; still register it
      exports.push({
        slug: listing.slug,
        file: "listing523West121stStreet2",
        exp: "LISTING_523_WEST_121ST_2",
      });
      continue;
    }
    const fn = fileName(listing.slug);
    const exp = camelExport(listing.slug);
    fs.writeFileSync(path.join(outDir, fn), emit(listing));
    console.log("wrote", fn);
    exports.push({
      slug: listing.slug,
      file: fn.replace(/\.ts$/, ""),
      exp,
    });
  }

  // Always ensure 523 is first in registry if present
  const index = `/** Registry of all Montfort broker listings. */

import type { ListingDetail } from "./types";
import { LISTING_523_WEST_121ST_2 } from "./listing523West121stStreet2";
${exports
  .filter((e) => e.slug !== "523-west-121st-street-2")
  .map((e) => `import { ${e.exp} } from "./${e.file}";`)
  .join("\n")}

export type { ListingDetail, ListingFact, ListingGalleryImage, ListingInsight } from "./types";
export { LISTING_AGENT, parsePriceValue } from "./types";

export const ALL_LISTINGS: ListingDetail[] = [
  LISTING_523_WEST_121ST_2,
${exports
  .filter((e) => e.slug !== "523-west-121st-street-2")
  .map((e) => `  ${e.exp},`)
  .join("\n")}
].sort((a, b) => a.sortOrder - b.sortOrder);

export const LISTING_SLUGS = ALL_LISTINGS.map((l) => l.slug);

export function getListingBySlug(slug: string): ListingDetail | undefined {
  return ALL_LISTINGS.find((l) => l.slug === slug);
}

export function isListingSlug(slug: string): boolean {
  return LISTING_SLUGS.includes(slug);
}
`;
  fs.writeFileSync(path.join(outDir, "index.ts"), index);
  console.log("wrote index.ts with", exports.length, "listings");
}

main();
