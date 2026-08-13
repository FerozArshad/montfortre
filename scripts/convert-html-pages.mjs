import fs from "node:fs";
import path from "node:path";

const root = path.resolve("src/pages");
const seoOut = path.resolve("src/seo/pages");

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
      if (after[end] === "\\") {
        end += 2;
        continue;
      }
      if (after[end] === '"') {
        end++;
        break;
      }
      end++;
    }
  } else if (first === "`") {
    end = i + 1;
    while (end < after.length) {
      if (after[end] === "\\") {
        end += 2;
        continue;
      }
      if (after[end] === "`") {
        end++;
        break;
      }
      end++;
    }
  } else {
    throw new Error(`unexpected ${name} start ${JSON.stringify(first)}`);
  }
  return after.slice(eq + 1, end).trim();
}

function writeSeo({ file, prefix, out, route }) {
  const src = fs.readFileSync(path.join(root, file), "utf8");
  const TITLE = Function(`return ${extractBlock(src, "TITLE")}`)();
  const METAS = Function(`return ${extractBlock(src, "METAS")}`)();
  const LINKS = Function(`return ${extractBlock(src, "LINKS")}`)().map((link) => {
    const next = { ...link };
    if (typeof next.href === "string") next.href = next.href.replaceAll("&amp;", "&");
    return next;
  });
  const JSON_LD = Function(`return ${extractBlock(src, "JSON_LD")}`)();
  const body = `/** Frozen SEO for ${route} — do not edit values. */

import type { PageSeo } from "../types";

export const ${prefix}_TITLE = ${JSON.stringify(TITLE)};

export const ${prefix}_METAS = ${JSON.stringify(METAS, null, 2)} as const;

export const ${prefix}_LINKS = ${JSON.stringify(LINKS, null, 2)} as const;

export const ${prefix}_JSON_LD = ${JSON.stringify(JSON_LD, null, 2)} as const;

export const ${prefix}_SEO: PageSeo = {
  title: ${prefix}_TITLE,
  metas: ${prefix}_METAS,
  links: ${prefix}_LINKS,
  jsonLd: ${prefix}_JSON_LD,
};
`;
  fs.writeFileSync(path.join(seoOut, out), body);
  console.log("wrote seo", out);
}

function cssToJsxStyle(css) {
  const parts = [];
  css.split(";").forEach((decl) => {
    const d = decl.trim();
    if (!d) return;
    const colon = d.indexOf(":");
    if (colon < 0) return;
    let prop = d.slice(0, colon).trim();
    let val = d.slice(colon + 1).trim();
    if (prop.startsWith("--")) {
      parts.push(`"${prop}": ${JSON.stringify(val)}`);
      return;
    }
    const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase()).replace(/^Moz/, "Moz").replace(/^Webkit/, "Webkit").replace(/^Ms/, "ms");
    let jsVal;
    if (/^-?\d+(\.\d+)?$/.test(val) && !["lineHeight", "fontWeight", "opacity", "zIndex", "flexGrow", "flexShrink", "order"].includes(camel)) {
      jsVal = val.includes(".") ? val : Number(val);
      if (typeof jsVal === "number") {
        parts.push(`${camel}: ${jsVal}`);
        return;
      }
    }
    if (/^-?\d+(\.\d+)?px$/.test(val) && ["width", "height", "top", "left", "right", "bottom", "fontSize", "margin", "padding", "gap", "minHeight", "maxWidth", "maxHeight", "borderRadius", "letterSpacing"].includes(camel) === false) {
      // keep px strings for compound values
    }
    if (/^-?\d+(\.\d+)?px$/.test(val) && ["fontSize", "width", "height", "top", "left", "right", "bottom", "minHeight", "maxWidth", "marginTop", "marginBottom", "paddingTop", "letterSpacing"].includes(camel)) {
      const n = parseFloat(val);
      if (camel === "letterSpacing" || camel === "fontSize" && val.includes(".")) {
        parts.push(`${camel}: ${JSON.stringify(val)}`);
        return;
      }
      if (Number.isInteger(n) && camel !== "letterSpacing") {
        parts.push(`${camel}: ${n}`);
        return;
      }
    }
    jsVal = JSON.stringify(val);
    parts.push(`${camel}: ${jsVal}`);
  });
  return `{ ${parts.join(", ")} }`;
}

const ATTR_MAP = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  crossorigin: "crossOrigin",
  referrerpolicy: "referrerPolicy",
  colspan: "colSpan",
  rowspan: "rowSpan",
  maxlength: "maxLength",
  minlength: "minLength",
  readonly: "readOnly",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  contenteditable: "contentEditable",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "stroke-miterlimit": "strokeMiterlimit",
  "font-size": "fontSize",
  "font-family": "fontFamily",
  "font-weight": "fontWeight",
  "text-anchor": "textAnchor",
  "clip-path": "clipPath",
  "fill-opacity": "fillOpacity",
  "stroke-opacity": "strokeOpacity",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "xmlns:xlink": "xmlnsXlink",
  "xlink:href": "xlinkHref",
};

const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);

function convertAttrs(raw) {
  const out = [];
  const re = /([:@]?[\w:-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  let m;
  while ((m = re.exec(raw))) {
    const name = m[1];
    const val = m[2] ?? m[3] ?? m[4];
    if (name === "style-hover") {
      out.push(`{...{ "style-hover": ${JSON.stringify(val ?? "")} }}`);
      continue;
    }
    if (name === "style") {
      out.push(`style={${cssToJsxStyle(val ?? "")}}`);
      continue;
    }
    const mapped = ATTR_MAP[name] || name;
    if (val === undefined) {
      out.push(mapped);
      continue;
    }
    if (name === "open" || mapped === "open") {
      out.push("open");
      continue;
    }
    if (val === "" && (name.startsWith("data-") || name === "data-reveal")) {
      out.push(`${mapped}=""`);
      continue;
    }
    if (mapped === "viewBox" || mapped === "d" || name === "src" || name === "href" || name === "alt") {
      out.push(`${mapped}=${JSON.stringify(val)}`);
      continue;
    }
    out.push(`${mapped}=${JSON.stringify(val)}`);
  }
  return out.join(" ");
}

function htmlToJsx(html) {
  let s = html.replace(/\r\n/g, "\n");
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  s = s.replace(/<\/?([A-Za-z][\w:-]*)([^>]*)\/?>/g, (full, tag, attrs, offset) => {
    const lower = tag.toLowerCase();
    const isClose = full.startsWith("</");
    const selfClosing = full.endsWith("/>") || VOID.has(lower);
    if (isClose) return `</${lower === "svg" ? "svg" : tag.includes(":") ? tag : lower}>`;
    const jsxTag = lower;
    const a = convertAttrs(attrs.trim());
    const open = a ? `<${jsxTag} ${a}` : `<${jsxTag}`;
    if (VOID.has(lower) || selfClosing) return `${open} />`;
    return `${open}>`;
  });
  s = s.replace(/&nbsp;/g, "\u00a0");
  return s;
}

function extractMainHtml(src) {
  const html = Function(`return ${extractBlock(src, "HTML")}`)();
  const styleEnd = html.indexOf("</style>");
  const afterStyle = styleEnd >= 0 ? html.slice(styleEnd + 8) : html;
  let body = afterStyle;
  const headerStart = body.indexOf("<header");
  const headerEnd = body.indexOf("</header>");
  if (headerStart >= 0 && headerEnd >= 0) {
    body = body.slice(0, headerStart) + body.slice(headerEnd + "</header>".length);
  }
  const footerStart = body.indexOf("<footer");
  if (footerStart >= 0) body = body.slice(0, footerStart);
  const resources = body.indexOf('data-screen-label="Resources"');
  if (resources >= 0) {
    const sec = body.lastIndexOf("<section", resources);
    body = body.slice(0, sec);
  }
  const contact = body.indexOf('data-screen-label="Contact"');
  if (contact >= 0) {
    const sec = body.lastIndexOf("<section", contact);
    body = body.slice(0, sec);
  }
  body = body.replace(/<div style="width:100%; max-width:100%; background:#F9F6E6; overflow-x:hidden">\s*/, "");
  body = body.replace(/\s*<\/div>\s*$/, "");
  return body.trim();
}

function wrapComponent(name, imports, jsx) {
  return `${imports}

export default function ${name}() {
  return (
    <>
${jsx}
    </>
  );
}
`;
}

const pages = [
  {
    file: "TwoFamilyHouseForSaleNyc.tsx",
    prefix: "TWO_FAMILY",
    seoOut: "twoFamily.ts",
    route: "/2-family-house-for-sale-nyc/",
    contentPath: "src/components/two-family/TwoFamilyContent.tsx",
    component: "TwoFamilyContent",
    extraImports: `import ContactSection from "../shared/ContactSection";
import ResourcesSection from "../shared/ResourcesSection";`,
    extras: `
      <ResourcesSection />
      <ContactSection />`,
  },
  {
    file: "BrownstoneBuyingGuide.tsx",
    prefix: "BROWNSTONE_GUIDE",
    seoOut: "brownstoneGuide.ts",
    route: "/advice-for-buyers-looking-to-purchase-brownstones/",
    contentPath: "src/components/brownstone/BrownstoneGuideContent.tsx",
    component: "BrownstoneGuideContent",
    extraImports: `import ContactSection from "../shared/ContactSection";`,
    extras: `
      <ContactSection />`,
  },
];

for (const page of pages) {
  writeSeo({ file: page.file, prefix: page.prefix, out: page.seoOut, route: page.route });
  const src = fs.readFileSync(path.join(root, page.file), "utf8");
  const main = extractMainHtml(src);
  let jsx = htmlToJsx(main);
  jsx = jsx
    .split("\n")
    .map((line) => (line.trim() ? "      " + line : line))
    .join("\n");
  jsx = jsx + page.extras;
  const contents = wrapComponent(page.component, page.extraImports, jsx);
  const outAbs = path.resolve(page.contentPath);
  fs.mkdirSync(path.dirname(outAbs), { recursive: true });
  fs.writeFileSync(outAbs, contents);
  console.log("wrote", page.contentPath, "chars", contents.length);
}
