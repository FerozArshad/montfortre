import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "_listing-scrape");

function cleanParas(paras) {
  return (paras || []).filter((p) => {
    const t = String(p).trim();
    if (t.length < 40) return false;
    if (/fill in your details/i.test(t)) return false;
    if (/schedule a viewing/i.test(t) && t.length < 120) return false;
    if (/^\*All showings/i.test(t)) return false;
    if (/what days of the week/i.test(t)) return false;
    if (/Questions about the layout/i.test(t)) return false;
    return true;
  });
}

const NEARBY_WORDS = [
  "Columbia University",
  "Barnard College",
  "Morningside Park",
  "Riverside Park",
  "Central Park",
  "Harlem",
  "Hamilton Heights",
  "Sugar Hill",
  "subway",
];

const all = [];
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && x !== "_all.json")) {
  const p = path.join(dir, f);
  const d = JSON.parse(fs.readFileSync(p, "utf8"));
  d.overviewParas = cleanParas(d.overviewParas);
  const last = d.overviewParas[d.overviewParas.length - 1] || `${d.title} in New York, NY.`;
  const joined = d.overviewParas.join(" ");
  const nearby = NEARBY_WORDS.filter((w) => joined.includes(w));
  d.location = {
    mapQuery: `${d.title}, New York, NY ${d.zip || ""}`.trim(),
    blurb: last,
    nearby: nearby.length ? nearby : ["New York City", "Harlem"],
  };
  fs.writeFileSync(p, JSON.stringify(d, null, 2));
  all.push(d);
}
all.sort((a, b) => a.sortOrder - b.sortOrder);
fs.writeFileSync(path.join(dir, "_all.json"), JSON.stringify(all, null, 2));
console.log("cleaned", all.length);
