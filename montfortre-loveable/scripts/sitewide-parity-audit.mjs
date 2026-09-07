/**
 * Sitewide public-route parity audit.
 * 1) Extract public paths from App.tsx
 * 2) Find /redesign-assets/… refs in src and check public/
 * 3) Optionally probe live + local HTTP for status / H1
 *
 * Usage:
 *   node scripts/sitewide-parity-audit.mjs
 *   node scripts/sitewide-parity-audit.mjs --live
 *   node scripts/sitewide-parity-audit.mjs --live --local http://127.0.0.1:5173
 */
import { readFileSync, existsSync, readdirSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const srcDir = join(root, "src");
const outDir = join(root, "scripts", "_audit-out");

const args = process.argv.slice(2);
const doLive = args.includes("--live");
const localIdx = args.indexOf("--local");
const localBase = localIdx >= 0 ? args[localIdx + 1] : null;

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (name === "node_modules" || name === ".git" || name === "admin") continue;
      walk(p, files);
    } else if (/\.(tsx?|jsx?|css|html|md)$/i.test(name)) {
      files.push(p);
    }
  }
  return files;
}

function extractRoutes() {
  const app = readFileSync(join(srcDir, "App.tsx"), "utf8");
  const paths = new Set();
  for (const m of app.matchAll(/path=["']([^"']+)["']/g)) {
    const p = m[1];
    if (p.startsWith("/admin") || p.startsWith("/auth") || p === "*" || p.includes(":")) continue;
    paths.add(p === "/" ? "/" : p.replace(/\/$/, ""));
  }
  return [...paths].sort();
}

function extractAssetRefs() {
  const files = walk(srcDir);
  /** @type {Map<string, Set<string>>} */
  const byAsset = new Map();
  const re = /(?:src|href|image|poster|url)\s*[=:]\s*["'`](\/redesign-assets\/[^"'`?#]+)["'`]|["'`](\/redesign-assets\/[^"'`?#]+\.(?:png|jpe?g|webp|gif|svg|avif))["'`]/gi;
  for (const file of files) {
    const text = readFileSync(file, "utf8");
    let m;
    const re2 = /\/redesign-assets\/[A-Za-z0-9_./\-]+\.(?:png|jpe?g|webp|gif|svg|avif)/gi;
    while ((m = re2.exec(text))) {
      const asset = m[0].replace(/\\/g, "/");
      if (!byAsset.has(asset)) byAsset.set(asset, new Set());
      byAsset.get(asset).add(relative(root, file).replace(/\\/g, "/"));
    }
  }
  return byAsset;
}

function checkAssets(byAsset) {
  const missing = [];
  const ok = [];
  for (const [asset, refs] of [...byAsset.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    const disk = join(publicDir, asset.replace(/^\//, ""));
    if (existsSync(disk)) ok.push({ asset, refs: [...refs] });
    else {
      const webp = disk.replace(/\.(png|jpe?g)$/i, ".webp");
      const png = disk.replace(/\.webp$/i, ".png");
      missing.push({
        asset,
        refs: [...refs],
        altWebpExists: existsSync(webp),
        altPngExists: existsSync(png),
      });
    }
  }
  return { missing, ok, total: byAsset.size };
}

async function probe(base, path) {
  const url = path === "/" ? `${base}/` : `${base}${path}/`;
  try {
    const res = await fetch(url, {
      redirect: "follow",
      headers: { "user-agent": "MontfortParityAudit/1.0" },
      signal: AbortSignal.timeout(20000),
    });
    const html = await res.text();
    const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [, ""])[1]
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 120);
    const hasHeroImg = /nbhd-hero|hero.*<img|<img[^>]+class="[^"]*hero/i.test(html) || /<img[^>]+src="\/redesign-assets\//i.test(html);
    const formFields = (html.match(/name="(first_name|last_name|email_address|phone|other\[Comments\])"/g) || []).length;
    const brokenHints = (html.match(/src="\/redesign-assets\/[^"]+"/g) || []).length;
    return {
      path,
      status: res.status,
      h1,
      hasHeroImg,
      formFields,
      assetRefsInHtml: brokenHints,
      ok: res.status >= 200 && res.status < 400,
    };
  } catch (err) {
    return { path, status: 0, error: err instanceof Error ? err.message : String(err), ok: false };
  }
}

async function probeMany(base, paths, concurrency = 6) {
  const out = [];
  let i = 0;
  async function worker() {
    while (i < paths.length) {
      const idx = i++;
      out[idx] = await probe(base, paths[idx]);
      if ((idx + 1) % 10 === 0) process.stderr.write(`  probed ${idx + 1}/${paths.length}\n`);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return out;
}

mkdirSync(outDir, { recursive: true });

const routes = extractRoutes();
const byAsset = extractAssetRefs();
const assetReport = checkAssets(byAsset);

const summary = {
  generatedAt: new Date().toISOString(),
  routeCount: routes.length,
  assetRefs: assetReport.total,
  missingAssets: assetReport.missing.length,
  routes,
  missing: assetReport.missing,
};

writeFileSync(join(outDir, "asset-missing.json"), JSON.stringify(assetReport.missing, null, 2));
writeFileSync(join(outDir, "routes.json"), JSON.stringify(routes, null, 2));

if (doLive) {
  process.stderr.write("Probing live montfortre.com…\n");
  summary.live = await probeMany("https://montfortre.com", routes);
  writeFileSync(join(outDir, "live-probe.json"), JSON.stringify(summary.live, null, 2));
}

if (localBase) {
  process.stderr.write(`Probing local ${localBase}…\n`);
  summary.local = await probeMany(localBase.replace(/\/$/, ""), routes);
  writeFileSync(join(outDir, "local-probe.json"), JSON.stringify(summary.local, null, 2));
}

writeFileSync(join(outDir, "summary.json"), JSON.stringify(summary, null, 2));

const lines = [
  `# Sitewide parity audit`,
  ``,
  `Generated: ${summary.generatedAt}`,
  `Public routes: ${routes.length}`,
  `Asset refs scanned: ${assetReport.total}`,
  `Missing assets: ${assetReport.missing.length}`,
  ``,
];

if (assetReport.missing.length) {
  lines.push(`## Missing assets`);
  for (const m of assetReport.missing) {
    const hint = m.altWebpExists ? " (webp exists — switch extension)" : m.altPngExists ? " (png exists — switch extension)" : "";
    lines.push(`- \`${m.asset}\`${hint}`);
    for (const r of m.refs.slice(0, 3)) lines.push(`  - ${r}`);
  }
  lines.push(``);
} else {
  lines.push(`## Missing assets`);
  lines.push(`None.`);
  lines.push(``);
}

if (summary.live) {
  const fails = summary.live.filter((r) => !r.ok);
  lines.push(`## Live HTTP fails (${fails.length})`);
  for (const f of fails) lines.push(`- ${f.path} → ${f.status || f.error}`);
  lines.push(``);
}

writeFileSync(join(outDir, "REPORT.md"), lines.join("\n"));
console.log(lines.join("\n"));
console.log(`\nWrote ${relative(root, outDir)}/`);
