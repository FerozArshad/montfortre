import { useMemo } from "react";
import { sanitizeBlogHtml } from "../../lib/cms/sanitize";
import "../../styles/neighborhood-guide.css";
import "../../styles/faq-accordion.css";

/** Strip duplicated hero lead paragraph when the page already shows it above. */
function prepareGuideHtml(raw: string): string {
  let html = raw.replace(/^\s*<p>[\s\S]*?<\/p>\s*/i, (first) => {
    if (/<h[1-3]/i.test(first)) return first;
    return "";
  });
  html = html
    .replace(/<a href="\/cdn-cgi\/l\/email-protection[^"]*">[\s\S]*?<\/a>/gi, "sm@montfortre.com")
    .replace(/\[email&#160;protected\]/gi, "sm@montfortre.com")
    .replace(/\[email\s*protected\]/gi, "sm@montfortre.com");
  html = html.replace(/<img([^>]*?)>/gi, (full, attrs) => {
    if (/class=/i.test(attrs)) {
      return `<img${attrs.replace(/class="/i, 'class="nbhd-guide-img ')}>`;
    }
    return `<img class="nbhd-guide-img"${attrs}>`;
  });
  html = convertFaqSectionToAccordion(html);
  html = formatGuideContactLine(html);
  return html;
}

/** Turn trailing Phone / Email / Address prose into a full-width contact strip. */
function formatGuideContactLine(html: string): string {
  return html.replace(
    /<p(?:\s[^>]*)?>\s*(?:<strong>)?\s*Phone:\s*(?:<\/strong>)?\s*([^<]+?)\s*(?:&nbsp;|\s)+?(?:<strong>)?\s*Email:\s*(?:<\/strong>)?\s*([^<]+?)\s*(?:&nbsp;|\s)+?(?:<strong>)?\s*Address:\s*(?:<\/strong>)?\s*([^<]+?)\s*<\/p>\s*$/i,
    (_full, phone: string, email: string, address: string) => {
      const phoneClean = phone.replace(/&nbsp;/g, " ").trim();
      const emailClean = email.replace(/&nbsp;/g, " ").trim();
      const addressClean = address.replace(/&nbsp;/g, " ").trim();
      const telHref = phoneClean.replace(/[^\d+]/g, "");
      return `<div class="nbhd-guide-contact"><p class="nbhd-guide-contact-item"><strong>Phone</strong><a href="tel:${telHref}">${phoneClean}</a></p><p class="nbhd-guide-contact-item"><strong>Email</strong><a href="mailto:${emailClean}">${emailClean}</a></p><p class="nbhd-guide-contact-item"><strong>Address</strong>${addressClean}</p></div>`;
    },
  );
}

/**
 * Turn FAQ h3 + following blocks into the shared dropdown accordion markup
 * used on service/valuation pages (.faq-ac / .faq-ac-item).
 */
function convertFaqSectionToAccordion(html: string): string {
  // Live guides use "Frequently Asked Questions…"; some stubs use "FAQ(s)".
  const faqHeading =
    /<h2\b[^>]*>((?:(?!<\/h2>)[\s\S])*?(?:frequently\s+asked\s+questions?|\bFAQ(?:s)?\b)(?:(?!<\/h2>)[\s\S])*)<\/h2>/i;
  const match = faqHeading.exec(html);
  if (!match || match.index == null) return html;

  const start = match.index + match[0].length;
  const rest = html.slice(start);
  const nextH2 = rest.search(/<h2\b/i);
  const faqBody = nextH2 >= 0 ? rest.slice(0, nextH2) : rest;
  const after = nextH2 >= 0 ? rest.slice(nextH2) : "";

  // Already converted
  if (/class=["'][^"']*faq-ac/.test(faqBody)) return html;

  const items: string[] = [];
  const h3Re = /<h3\b[^>]*>([\s\S]*?)<\/h3>/gi;
  const headings: { qHtml: string; start: number; end: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = h3Re.exec(faqBody))) {
    headings.push({ qHtml: m[1], start: m.index, end: m.index + m[0].length });
  }
  if (headings.length === 0) return html;

  for (let i = 0; i < headings.length; i++) {
    const q = headings[i];
    const bodyStart = q.end;
    const bodyEnd = i + 1 < headings.length ? headings[i + 1].start : faqBody.length;
    const answer = faqBody.slice(bodyStart, bodyEnd).trim();
    const qText = q.qHtml.trim();
    items.push(
      `<details class="faq-ac-item"><summary><span class="faq-ac-q">${qText}</span><span class="faq-ac-mark" aria-hidden="true"></span></summary><div class="faq-ac-body">${answer}</div></details>`,
    );
  }

  const beforeFaq = faqBody.slice(0, headings[0].start).trim();
  const accordion = `${beforeFaq ? `${beforeFaq}\n` : ""}<div class="faq-ac">${items.join("")}</div>`;
  return html.slice(0, match.index) + match[0] + "\n" + accordion + "\n" + after;
}

export default function NeighborhoodGuideBody({ html }: { html: string }) {
  const safe = useMemo(() => sanitizeBlogHtml(prepareGuideHtml(html)), [html]);
  return <div className="nbhd-guide-html" dangerouslySetInnerHTML={{ __html: safe }} />;
}
