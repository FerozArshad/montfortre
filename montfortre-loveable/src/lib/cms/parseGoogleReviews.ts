/**
 * Parses text copied out of the Google Maps review dialog into structured rows.
 *
 * The Places API only ever returns its five "most relevant" reviews and offers
 * no pagination, so the remaining reviews have to be brought across by hand. An
 * admin selects the reviews in the Maps dialog, copies them, and pastes the
 * result here; this module turns that blob into rows they can check before they
 * are saved.
 *
 * Pure and dependency-free so it can be reasoned about (and tested) without a
 * database or a browser.
 */

export type ParsedReview = {
  author_name: string;
  quote: string;
  rating: number;
  /** ISO timestamp derived from Google's relative date, or null when absent. */
  published_at: string | null;
  /** Surfaced in the preview so the admin can fix anything the parser guessed. */
  warnings: string[];
};

/**
 * "Local Guide · 27 reviews · 5 photos", "3 reviews", "1 review". This line is
 * the anchor for a review block: the line above it is the reviewer's name.
 */
const REVIEWER_META_RE =
  /^(?:local guide\s*[·•]\s*)?[\d,]+\s+reviews?(?:\s*[·•]\s*[\d,]+\s+photos?)?$/i;

/** "2 months ago", "a year ago", "Edited 5 months ago". */
const RELATIVE_DATE_RE =
  /^(?:edited\s+)?(a|an|\d+)\s+(minute|hour|day|week|month|year)s?\s+ago(?:\s+on\s+google)?$/i;

/**
 * UI chrome Google interleaves with the review text. The action words can be
 * copied onto a single line ("Like  Share"), so they are matched as a run.
 */
const NOISE_RE =
  /^(?:(?:like|share|helpful|report|more|see more|read more|photos?|\d+|translated by google|see original|show original)(?:\s+|$))+$/i;

/** Reaction tallies such as "🙏1" that sit between the review and the reply. */
const REACTION_RE = /^[^\p{L}\p{N}]+\d*$/u;

/**
 * Everything from here on is the business replying, not the review. Google
 * labels the reply with the business name, e.g. "Montfort Real Estate (owner)".
 */
const OWNER_REPLY_RE = /^(?:response from the owner|owner['’]s response\b|.+\(owner\)$)/i;

const UNIT_DAYS: Record<string, number> = {
  minute: 1 / 1440,
  hour: 1 / 24,
  day: 1,
  week: 7,
  month: 30.44,
  year: 365.25,
};

/**
 * Google shows relative dates only, so an exact timestamp is unrecoverable. The
 * approximation is good enough for ordering, and the admin can correct it.
 */
function relativeToIso(amount: string, unit: string, now: Date): string {
  const n = /^an?$/i.test(amount) ? 1 : Number(amount) || 1;
  const days = n * (UNIT_DAYS[unit.toLowerCase()] ?? 1);
  const date = new Date(now.getTime() - days * 86400000);
  return date.toISOString();
}

/** Strips the stray bullets and zero-width characters Google's copy leaves in. */
function cleanLine(line: string): string {
  return line
    .replace(/[\u200b-\u200d\ufeff]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isNoise(line: string): boolean {
  return line.length === 0 || NOISE_RE.test(line) || REACTION_RE.test(line);
}

/**
 * A name line is short and isn't itself metadata or chrome. Trailing periods are
 * allowed because initials are common ("Dionne N."); the requirement that the
 * next line be a "N reviews" count is what actually prevents prose from being
 * mistaken for a name.
 */
function looksLikeName(line: string): boolean {
  if (!line || line.length > 60) return false;
  if (REVIEWER_META_RE.test(line) || RELATIVE_DATE_RE.test(line)) return false;
  if (OWNER_REPLY_RE.test(line)) return false;
  return !isNoise(line);
}

export function parseGoogleReviews(raw: string, now: Date = new Date()): ParsedReview[] {
  const lines = raw.split(/\r?\n/).map(cleanLine);

  // Anchor on the "N reviews" line: it is the most reliable marker Google emits,
  // and everything else is located relative to it.
  const anchors: number[] = [];
  for (let i = 0; i < lines.length; i += 1) {
    if (REVIEWER_META_RE.test(lines[i]) && looksLikeName(lines[i - 1] ?? "")) {
      anchors.push(i);
    }
  }

  const out: ParsedReview[] = [];

  for (let a = 0; a < anchors.length; a += 1) {
    const anchor = anchors[a];
    const name = lines[anchor - 1];
    // A block ends where the next reviewer's name begins.
    const blockEnd = a + 1 < anchors.length ? anchors[a + 1] - 1 : lines.length;

    const warnings: string[] = [];
    let published_at: string | null = null;
    let cursor = anchor + 1;

    for (let i = anchor + 1; i < blockEnd; i += 1) {
      const match = lines[i].match(RELATIVE_DATE_RE);
      if (match) {
        published_at = relativeToIso(match[1], match[2], now);
        cursor = i + 1;
        break;
      }
    }

    if (!published_at) {
      warnings.push("No date found — set it manually.");
    }

    const body = lines.slice(cursor, blockEnd);
    const replyAt = body.findIndex((line) => OWNER_REPLY_RE.test(line));
    const quote = (replyAt === -1 ? body : body.slice(0, replyAt))
      .filter((line) => !isNoise(line))
      .join(" ")
      // Collapsed reviews end with a "…More" affordance rather than a separate line.
      .replace(/\s*[…]?\s*More$/i, "…")
      .trim();

    if (!quote) continue;

    if (quote.length < 24) {
      warnings.push("Very short review text — check it copied in full.");
    }
    if (/\u2026$|\.\.\.$/.test(quote)) {
      warnings.push("Text looks truncated — expand “More” on Google and re-copy.");
    }

    out.push({
      author_name: name,
      quote,
      // Stars are images/aria-labels and never survive a copy, so assume the
      // 5-star case and let the admin adjust the exceptions.
      rating: 5,
      published_at,
      warnings,
    });
  }

  return out;
}
