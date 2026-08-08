import fs from "fs";

const transcript =
  "C:/Users/feroz/.cursor/projects/d-Montfortr/agent-transcripts/ae837346-cdf1-4dd4-88d5-f1f4050703e1/ae837346-cdf1-4dd4-88d5-f1f4050703e1.jsonl";

const line = fs
  .readFileSync(transcript, "utf8")
  .split(/\n/)
  .find((l) => l.includes("top-schools") && l.includes("James Weldon"));

const obj = JSON.parse(line);
const text = obj.message.content.find((c) => c.type === "text").text;
const start = text.indexOf('<section id="top-schools"');
const end = text.indexOf("</section>", start) + "</section>".length;
const html = text.slice(start, end);
fs.writeFileSync("d:/Montfortr/ghl-react/scripts/_harlem-schools-raw.html", html);

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function parseTab(tabHtml) {
  const schools = [];
  const re =
    /<span class="agb-school__item[\s\S]*?<\/span>\s*(?=<\/div>)/g;
  let m;
  while ((m = re.exec(tabHtml))) {
    const block = m[0];
    const titleM = block.match(/agb-school__title[^>]*>\s*([\s\S]*?)\s*<\/span>/);
    const phoneM = block.match(/agb-school__phone[^>]*>\s*([\s\S]*?)\s*<\/span>/);
    const typeM = block.match(/agb-school__type[^>]*>\s*([\s\S]*?)\s*<\/span>/);
    const gradesM = block.match(/agb-school__grades[^>]*>\s*([\s\S]*?)\s*<\/span>/);
    const filled = (block.match(/fa-star(?!-o)/g) || []).length;
    const empty = (block.match(/fa-star-o/g) || []).length;
    const hasRating = filled + empty > 0;
    const websiteM = block.match(
      /agb-school__website[\s\S]*?<a href="([^"]*)"/
    );
    if (!titleM) continue;
    schools.push({
      name: decode(titleM[1]),
      phone: phoneM ? decode(phoneM[1]) : "",
      type: typeM ? decode(typeM[1]) : "",
      grades: gradesM ? decode(gradesM[1]) : "",
      rating: hasRating ? filled : null,
      website:
        websiteM && websiteM[1] && !websiteM[1].includes("javascript")
          ? websiteM[1]
          : null,
    });
  }
  return schools;
}

const tabIds = ["all", "preschool", "elementary-school", "middle-school", "high-school"];
const byCat = {};

for (const id of tabIds) {
  const re = new RegExp(
    `data-category_id="${id}"([\\s\\S]*?)(?=<div class="agb-schools__tab|\\s*<div class="agb-schools__footer|$)`
  );
  const match = html.match(re);
  byCat[id] = match ? parseTab(match[1]) : [];
  console.log(id, byCat[id].length);
}

// Merge into unique list with categories from tab membership
const map = new Map();
for (const [cat, list] of Object.entries(byCat)) {
  for (const s of list) {
    const key = s.name.toLowerCase();
    if (!map.has(key)) {
      map.set(key, { ...s, categories: cat === "all" ? [] : [cat] });
    } else {
      const cur = map.get(key);
      if (cat !== "all" && !cur.categories.includes(cat)) cur.categories.push(cat);
      if (cur.rating == null && s.rating != null) cur.rating = s.rating;
      if (!cur.website && s.website) cur.website = s.website;
    }
  }
}

// Preserve "all" order
const schools = byCat.all.map((s) => map.get(s.name.toLowerCase()));

fs.mkdirSync("d:/Montfortr/ghl-react/src/data", { recursive: true });
fs.writeFileSync(
  "d:/Montfortr/ghl-react/src/data/harlemSchools.json",
  JSON.stringify(schools, null, 2)
);
console.log("unique", schools.length);
console.log(schools.slice(0, 2));
