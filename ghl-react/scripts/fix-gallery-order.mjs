import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "_listing-scrape");

const all = [];
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && x !== "_all.json")) {
  const p = path.join(dir, f);
  const d = JSON.parse(fs.readFileSync(p, "utf8"));
  if (d.gallery?.length > 2) {
    const nums = d.gallery.map((g) => {
      const m = g.src.match(/\/(\d+)(?:-\d+)?\.(jpg|png|webp)$/i);
      return m ? Number(m[1]) : null;
    });
    // Prefer descending numbered galleries (live often leads with exterior / higher index)
    if (nums.every((n) => n != null) && nums[0] < nums[nums.length - 1]) {
      d.gallery = [...d.gallery].reverse();
    }
  }
  if (d.gallery?.[0]) {
    d.heroImage = d.gallery[0].src;
    d.heroAlt = d.gallery[0].alt;
  }
  fs.writeFileSync(p, JSON.stringify(d, null, 2));
  all.push(d);
}
all.sort((a, b) => a.sortOrder - b.sortOrder);
fs.writeFileSync(path.join(dir, "_all.json"), JSON.stringify(all, null, 2));
console.log("gallery order fixed", all.length);
