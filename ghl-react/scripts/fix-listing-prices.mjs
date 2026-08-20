import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "_listing-scrape");

async function fetchText(url) {
  const res = await fetch(url, { headers: { "User-Agent": "MontfortListingScraper/1.0" } });
  if (!res.ok) throw new Error(`${url} ${res.status}`);
  return res.text();
}

function priceFromDetail(html) {
  // Prefer price near h1 / listing header, not random $ in body
  const h1Block = html.slice(0, Math.min(html.length, 120000));
  const matches = [...h1Block.matchAll(/\$[\d,]+(?:\.\d{2})?/g)].map((m) => m[0]);
  // Prefer largest sale-looking price (>= 100k) first; else first match
  const sale = matches.find((p) => Number(p.replace(/[^0-9.]/g, "")) >= 100000);
  return (sale || matches[0] || "").replace(/,$/, "");
}

const all = [];
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && x !== "_all.json")) {
  const p = path.join(dir, f);
  const d = JSON.parse(fs.readFileSync(p, "utf8"));
  try {
    const html = await fetchText(`https://montfortre.com/${d.slug}/`);
    const price = priceFromDetail(html);
    if (price) {
      d.price = price;
      if (d.facts?.[0]?.label === "Price") d.facts[0].value = price;
    }
    console.log(d.slug, "->", d.price);
  } catch (e) {
    console.error("fail", d.slug, e.message);
  }
  all.push(d);
  fs.writeFileSync(p, JSON.stringify(d, null, 2));
}
all.sort((a, b) => a.sortOrder - b.sortOrder);
fs.writeFileSync(path.join(dir, "_all.json"), JSON.stringify(all, null, 2));
