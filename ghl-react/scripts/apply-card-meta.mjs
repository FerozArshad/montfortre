import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "_listing-scrape");

/** Authoritative card fields from live current-listings / homepage. */
const CARD = {
  "523-west-121st-street-2": { price: "$799,000", beds: "2", baths: "1", zip: "10027" },
  "475-west-144th-street": {
    price: "$2,249,999",
    year: "1901",
    sqft: "4,608",
    stories: "4",
    zip: "10031",
    clearBeds: true,
  },
  "26-west-95th-street": {
    price: "$11,995,000",
    year: "1893",
    sqft: "6,700",
    stories: "5",
    zip: "10025",
    clearBeds: true,
  },
  "124-west-131st-street-2": {
    price: "$3,495,000",
    beds: "5",
    baths: "4.5",
    sqft: "4,688",
    zip: "10027",
    clearYear: true,
  },
  "313-west-143rd-street-2a": {
    price: "$1,250,000",
    beds: "3",
    baths: "2",
    sqft: "1,650",
    zip: "10030",
    clearYear: true,
  },
  "14-west-121st-street": {
    price: "$2,999,999",
    beds: "6",
    baths: "4.5",
    sqft: "5,320",
    zip: "10030",
    clearYear: true,
  },
  "481-west-145th-street": {
    price: "$2,550,000",
    year: "1926",
    sqft: "3,666",
    stories: "4",
    zip: "10031",
    clearBeds: true,
  },
  "542-cathedral-parkway": {
    price: "$4,950,000",
    year: "1985",
    sqft: "4,100",
    stories: "4",
    zip: "10025",
    clearBeds: true,
  },
  "544-west-148th-street": {
    price: "$2,699,000",
    year: "1910",
    sqft: "3,536",
    stories: "4",
    zip: "10031",
    clearBeds: true,
  },
  "76-west-105th-street-thn": {
    price: "$4,750,000",
    beds: "3",
    baths: "3+",
    sqft: "4,232",
    zip: "10025",
    clearYear: true,
  },
  "76-west-105th-street-ph": {
    price: "$4,450,000",
    beds: "4",
    baths: "4",
    sqft: "3,675",
    zip: "10025",
    clearYear: true,
  },
  "2040-madison-avenue-4": {
    price: "$2,250,000",
    year: "1899",
    sqft: "3,240",
    stories: "4",
    zip: "10035",
    clearBeds: true,
  },
  "420-west-144th-street": {
    price: "$3,199,000",
    year: "1920",
    sqft: "3,615",
    stories: "4",
    zip: "10031",
    clearBeds: true,
  },
  "108-west-114th-street-4b": {
    price: "$350,000",
    beds: "1",
    baths: "1",
    zip: "10026",
    clearYear: true,
  },
};

const all = [];
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && x !== "_all.json")) {
  const p = path.join(dir, f);
  const d = JSON.parse(fs.readFileSync(p, "utf8"));
  const c = CARD[d.slug] || {};
  if (c.price) d.price = c.price;
  if (c.beds != null) d.beds = c.beds;
  if (c.baths != null) d.baths = c.baths;
  if (c.year != null) d.year = c.year;
  if (c.sqft != null) d.sqft = c.sqft;
  if (c.stories != null) d.stories = c.stories;
  if (c.zip) d.zip = c.zip;
  if (c.clearBeds) {
    d.beds = "";
    d.baths = "";
  }
  if (c.clearYear) {
    d.year = "";
    d.stories = "";
  }

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

  fs.writeFileSync(p, JSON.stringify(d, null, 2));
  all.push(d);
  console.log(d.slug, d.price, d.beds || d.year);
}
all.sort((a, b) => a.sortOrder - b.sortOrder);
fs.writeFileSync(path.join(dir, "_all.json"), JSON.stringify(all, null, 2));
