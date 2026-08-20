import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "_listing-scrape");

const CARD = {
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

const all = [];
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && x !== "_all.json")) {
  const p = path.join(dir, f);
  const d = JSON.parse(fs.readFileSync(p, "utf8"));
  const c = CARD[d.slug] || {};
  d.beds = c.beds || d.beds || "";
  d.baths = c.baths || d.baths || "";
  d.year = c.year || d.year || "";
  d.sqft = c.sqft || d.sqft || "";
  d.stories = c.stories || d.stories || "";
  d.zip = c.zip || d.zip || "";

  const facts = [{ label: "Price", value: d.price || "—" }];
  if (d.beds) facts.push({ label: "Bedrooms", value: d.beds });
  if (d.baths) facts.push({ label: "Bathrooms", value: d.baths });
  if (d.year) facts.push({ label: "Year", value: d.year });
  if (d.sqft) facts.push({ label: "Sq Ft", value: d.sqft });
  if (d.stories) facts.push({ label: "Stories", value: d.stories });
  facts.push({ label: "City", value: d.city || "New York" });
  facts.push({ label: "State", value: d.state || "NY" });
  if (d.zip) facts.push({ label: "ZIP", value: d.zip });
  d.facts = facts;

  d.insights = [
    ...(d.beds ? [{ title: "Bedrooms", body: d.beds }] : []),
    ...(d.baths ? [{ title: "Bathrooms", body: d.baths }] : []),
    ...(d.year && !d.beds ? [{ title: "Year built", body: d.year }] : []),
    ...(d.sqft && !d.beds ? [{ title: "Square feet", body: d.sqft }] : []),
    ...(d.stories && !d.beds ? [{ title: "Stories", body: d.stories }] : []),
  ];

  if (d.gallery?.length > 2) {
    const nums = d.gallery.map((g) => {
      const m = g.src.match(/\/(\d+)(?:-\d+)?\.(jpg|png|webp)$/i);
      return m ? Number(m[1]) : null;
    });
    if (nums.every((n) => n != null) && nums[0] > nums[nums.length - 1]) {
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
console.log("patched", all.length);
