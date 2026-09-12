/**
 * Build a catalog of every image already used on the site:
 * - public/ static assets (site-relative URLs)
 * - AgentFire / external image URLs referenced in listing + blog source
 *
 * Output: src/data/siteMediaCatalog.json
 *
 * Run: node scripts/generate-site-media-catalog.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const outFile = path.join(root, "src", "data", "siteMediaCatalog.json");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"]);
const URL_RE =
  /https?:\/\/[^\s"'`)\\]+?\.(?:jpe?g|png|webp|gif|svg)(?:\?[^\s"'`)\\]*)?/gi;
const REL_RE = /["'`](\/(?:redesign-assets|instagram|og-)[^"'`]*?\.(?:jpe?g|png|webp|gif|svg))["'`]/gi;

/** @type {Map<string, { id: string, url: string, alt: string, source: string, folder: string }>} */
const byUrl = new Map();

function altFromPath(p) {
  const base = path.basename(p).replace(/\.[^.]+$/, "");
  return base.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

function add(url, source, folderHint = "") {
  const clean = url.split("#")[0].trim();
  if (!clean) return;
  const key = clean.toLowerCase();
  if (byUrl.has(key)) return;
  const folder =
    folderHint ||
    (clean.startsWith("/")
      ? clean.split("/").slice(1, 3).join("/")
      : clean.includes("agentfire")
        ? "listings-cdn"
        : "external");
  byUrl.set(key, {
    id: `site:${Buffer.from(clean).toString("base64url").slice(0, 48)}`,
    url: clean,
    alt: altFromPath(clean),
    source,
    folder,
  });
}

function walkPublic(dir, relBase = "") {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith(".")) continue;
    const full = path.join(dir, name);
    const rel = relBase ? `${relBase}/${name}` : name;
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      walkPublic(full, rel);
      continue;
    }
    const ext = path.extname(name).toLowerCase();
    if (!IMAGE_EXT.has(ext)) continue;
    // Skip huge binary backups if any
    if (name.endsWith(".backup-check.bin")) continue;
    const url = `/${rel.replace(/\\/g, "/")}`;
    const folder = rel.split(/[/\\]/).slice(0, 2).join("/");
    add(url, "public", folder);
  }
}

function scanSourceTree(dir) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    if (name === "node_modules" || name === "dist" || name.startsWith(".")) continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      scanSourceTree(full);
      continue;
    }
    if (!/\.(ts|tsx|js|mjs|json|md|html)$/i.test(name)) continue;
    let text = "";
    try {
      text = fs.readFileSync(full, "utf8");
    } catch {
      continue;
    }
    for (const m of text.matchAll(URL_RE)) {
      add(m[0].replace(/[),.;]+$/, ""), "cdn");
    }
    for (const m of text.matchAll(REL_RE)) {
      add(m[1], "public", m[1].split("/").slice(1, 3).join("/"));
    }
  }
}

walkPublic(publicDir);
scanSourceTree(path.join(root, "src", "data", "listings"));
scanSourceTree(path.join(root, "src", "blog"));
scanSourceTree(path.join(root, "src", "components"));

const items = [...byUrl.values()].sort((a, b) => a.url.localeCompare(b.url));

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(
  outFile,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      count: items.length,
      items,
    },
    null,
    2,
  ),
);

console.log(`Wrote ${items.length} media entries → ${path.relative(root, outFile)}`);
