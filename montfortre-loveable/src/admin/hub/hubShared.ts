/** Shared Listings / Blog hub helpers (AgentFire-style). */

export function isTrashedSlug(slug: string) {
  return /-trashed-/i.test(slug || "");
}

export function isSoldStatus(status: string) {
  return /sold/i.test(status || "");
}

export function formatHubDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return "—";
  }
}

export function restoreSlugFromTrash(slug: string) {
  return slug.replace(/-trashed-[a-z0-9]+$/i, "");
}

export type HubSortDir = "asc" | "desc";

export type ListingSortKey = "updated" | "title" | "price" | "status";
export type BlogSortKey = "updated" | "title" | "category" | "author";

export function sortListings<T extends { title: string; price_value: number; status: string; updated_at: string }>(
  rows: T[],
  key: ListingSortKey,
  dir: HubSortDir,
): T[] {
  const mul = dir === "asc" ? 1 : -1;
  return [...rows].sort((a, b) => {
    if (key === "title") return mul * a.title.localeCompare(b.title);
    if (key === "price") return mul * (a.price_value - b.price_value);
    if (key === "status") return mul * a.status.localeCompare(b.status);
    return mul * a.updated_at.localeCompare(b.updated_at);
  });
}

export function sortBlogRows<
  T extends { h1: string; category: string; updated_at: string; author_name: string },
>(rows: T[], key: BlogSortKey, dir: HubSortDir): T[] {
  const mul = dir === "asc" ? 1 : -1;
  return [...rows].sort((a, b) => {
    if (key === "title") return mul * a.h1.localeCompare(b.h1);
    if (key === "category") return mul * a.category.localeCompare(b.category);
    if (key === "author") return mul * a.author_name.localeCompare(b.author_name);
    return mul * a.updated_at.localeCompare(b.updated_at);
  });
}

export function parsePriceFilter(value: string): number | null {
  const n = Number(String(value || "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
}
