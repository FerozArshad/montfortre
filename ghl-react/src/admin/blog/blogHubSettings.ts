const KEY = "montfort.blogHub.settings";

export type BlogHubSettings = {
  defaultAuthorName: string;
  defaultAuthorHref: string;
  defaultAuthorRole: string;
  defaultCategory: string;
};

export const BLOG_CATEGORIES = [
  "News",
  "Market Report",
  "Buying",
  "Selling",
  "Neighborhoods",
  "Investment",
  "Guides",
] as const;

export const DEFAULT_BLOG_HUB_SETTINGS: BlogHubSettings = {
  defaultAuthorName: "Stanley Montfort",
  defaultAuthorHref: "/stanley-montfort/",
  defaultAuthorRole: "Real Estate Advisor®",
  defaultCategory: "News",
};

export function loadBlogHubSettings(): BlogHubSettings {
  if (typeof window === "undefined") return DEFAULT_BLOG_HUB_SETTINGS;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT_BLOG_HUB_SETTINGS;
    return { ...DEFAULT_BLOG_HUB_SETTINGS, ...(JSON.parse(raw) as Partial<BlogHubSettings>) };
  } catch {
    return DEFAULT_BLOG_HUB_SETTINGS;
  }
}

export function saveBlogHubSettings(next: BlogHubSettings) {
  localStorage.setItem(KEY, JSON.stringify(next));
}
