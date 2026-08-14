import fs from "node:fs";
import path from "node:path";

const pages = [
  { file: "Services.tsx", prefix: "SERVICES", out: "services.ts", route: "/services/" },
  { file: "Blog.tsx", prefix: "BLOG", out: "blog.ts", route: "/blog/" },
  { file: "Harlem.tsx", prefix: "HARLEM", out: "harlem.ts", route: "/harlem/" },
  { file: "Neighborhoods.tsx", prefix: "NEIGHBORHOODS", out: "neighborhoods.ts", route: "/neighborhoods/" },
  { file: "Home.tsx", prefix: "HOME", out: "home.ts", route: "/" },
];

const pagesDir = path.resolve("src/pages");
const outDir = path.resolve("src/seo/pages");

function extractBlock(src, name) {
  const re = new RegExp(`const ${name} = `);
  const start = src.search(re);
  if (start < 0) throw new Error(`missing ${name}`);
  const after = src.slice(start);
  const eq = after.indexOf("=");
  let i = eq + 1;
  while (after[i] === " " || after[i] === "\n") i++;
  const first = after[i];
  let end;
  if (first === "[") {
    let depth = 0;
    for (let j = i; j < after.length; j++) {
      if (after[j] === "[") depth++;
      if (after[j] === "]") depth--;
      if (depth === 0) {
        end = j + 1;
        break;
      }
    }
  } else if (first === '"') {
    end = i + 1;
    while (end < after.length) {
      if (after[end] === "\\" ) {
        end += 2;
        continue;
      }
      if (after[end] === '"') {
        end++;
        break;
      }
      end++;
    }
  } else {
    throw new Error(`unexpected ${name} start ${first}`);
  }
  return after.slice(eq + 1, end).trim();
}

for (const page of pages) {
  const src = fs.readFileSync(path.join(pagesDir, page.file), "utf8");
  const titleLit = extractBlock(src, "TITLE");
  const metasLit = extractBlock(src, "METAS");
  const linksLit = extractBlock(src, "LINKS");
  const jsonLdLit = extractBlock(src, "JSON_LD");
  const TITLE = Function(`return ${titleLit}`)();
  const METAS = Function(`return ${metasLit}`)();
  const LINKS = Function(`return ${linksLit}`)().map((link) => {
    const next = { ...link };
    if (typeof next.href === "string") next.href = next.href.replaceAll("&amp;", "&");
    return next;
  });
  const JSON_LD = Function(`return ${jsonLdLit}`)();

  const body = `/** Frozen SEO for ${page.route} — do not edit values. */

import type { PageSeo } from "../types";

export const ${page.prefix}_TITLE = ${JSON.stringify(TITLE)};

export const ${page.prefix}_METAS = ${JSON.stringify(METAS, null, 2)} as const;

export const ${page.prefix}_LINKS = ${JSON.stringify(LINKS, null, 2)} as const;

export const ${page.prefix}_JSON_LD = ${JSON.stringify(JSON_LD, null, 2)} as const;

export const ${page.prefix}_SEO: PageSeo = {
  title: ${page.prefix}_TITLE,
  metas: ${page.prefix}_METAS,
  links: ${page.prefix}_LINKS,
  jsonLd: ${page.prefix}_JSON_LD,
};
`;
  fs.writeFileSync(path.join(outDir, page.out), body);
  console.log("wrote", page.out);
}
