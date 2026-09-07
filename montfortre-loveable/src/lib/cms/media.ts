import { getSupabase, isCmsConfigured } from "../supabase";
import { getRequiredUserId } from "./ownership";
import siteMediaCatalog from "../../data/siteMediaCatalog.json";

export type MediaSource = "cloud" | "public" | "cdn" | "storage";

export type MediaPickerItem = {
  id: string;
  url: string;
  alt: string;
  created_at: string;
  mime_type?: string;
  source?: MediaSource;
  folder?: string;
  /** Site / CDN assets are read-only in the library (cannot delete from Storage). */
  readOnly?: boolean;
};

export type MediaLibraryItem = MediaPickerItem & {
  file_path: string;
  uploader_id?: string | null;
  storageOnly?: boolean;
};

type SiteCatalogFile = {
  generatedAt: string;
  count: number;
  items: Array<{ id: string; url: string; alt: string; source: string; folder: string }>;
};

const catalog = siteMediaCatalog as SiteCatalogFile;

const PAGE = 1000;

function siteCatalogItems(): MediaLibraryItem[] {
  return (catalog.items || []).map((item) => ({
    id: item.id,
    url: item.url,
    file_path: item.url,
    alt: item.alt || "",
    created_at: catalog.generatedAt || "",
    source: item.source === "cdn" ? "cdn" : "public",
    folder: item.folder,
    readOnly: true,
  }));
}

/** Full picker library (site assets + Cloud uploads). */
export async function fetchMediaForPicker(): Promise<MediaPickerItem[]> {
  const rows = await adminFetchMedia();
  return rows.map((r) => ({
    id: r.id,
    url: r.url,
    alt: r.alt,
    created_at: r.created_at,
    mime_type: r.mime_type,
    source: r.source,
    folder: r.folder,
    readOnly: r.readOnly,
  }));
}

/** Full library: site catalog + all `media` rows + Storage orphans. */
export async function adminFetchMedia(): Promise<MediaLibraryItem[]> {
  const byUrl = new Map<string, MediaLibraryItem>();

  for (const row of siteCatalogItems()) {
    if (row.url) byUrl.set(normalizeUrl(row.url), row);
  }

  if (isCmsConfigured()) {
    try {
      await getRequiredUserId();
      const fromTable = await fetchAllMediaRows();
      for (const row of fromTable) {
        if (row.url) byUrl.set(normalizeUrl(row.url), row);
      }
      const fromStorage = await listStorageMediaFiles().catch(() => [] as MediaLibraryItem[]);
      for (const file of fromStorage) {
        const key = normalizeUrl(file.url);
        if (!byUrl.has(key)) byUrl.set(key, file);
      }
    } catch {
      // Still return site catalog when Cloud is offline / not signed in.
    }
  }

  return [...byUrl.values()].sort((a, b) => {
    const rank = (s?: MediaSource) => (s === "cloud" || s === "storage" ? 0 : s === "cdn" ? 1 : 2);
    const ra = rank(a.source);
    const rb = rank(b.source);
    if (ra !== rb) return ra - rb;
    const ta = Date.parse(a.created_at) || 0;
    const tb = Date.parse(b.created_at) || 0;
    if (tb !== ta) return tb - ta;
    return a.url.localeCompare(b.url);
  });
}

export function siteMediaCatalogStats() {
  return {
    generatedAt: catalog.generatedAt,
    count: catalog.count || catalog.items?.length || 0,
  };
}

async function fetchAllMediaRows(): Promise<MediaLibraryItem[]> {
  const sb = getSupabase();
  if (!sb) return [];

  const out: MediaLibraryItem[] = [];
  let from = 0;

  for (;;) {
    const { data, error } = await sb
      .from("media")
      .select("id, file_path, alt_text, created_at, mime_type, uploader_id")
      .order("created_at", { ascending: false })
      .range(from, from + PAGE - 1);

    if (error) throw new Error(error.message);
    if (!data?.length) break;

    for (const row of data) {
      const url = String(row.file_path || "");
      out.push({
        id: row.id as string,
        url,
        file_path: url,
        alt: String(row.alt_text || ""),
        created_at: String(row.created_at || ""),
        mime_type: row.mime_type ? String(row.mime_type) : undefined,
        uploader_id: row.uploader_id ? String(row.uploader_id) : null,
        source: "cloud",
        folder: "uploads",
        readOnly: false,
      });
    }

    if (data.length < PAGE) break;
    from += PAGE;
  }

  return out;
}

async function listStorageMediaFiles(prefix = ""): Promise<MediaLibraryItem[]> {
  const sb = getSupabase();
  if (!sb) return [];

  const { data, error } = await sb.storage.from("media").list(prefix, {
    limit: 1000,
    sortBy: { column: "created_at", order: "desc" },
  });
  if (error || !data?.length) return [];

  const out: MediaLibraryItem[] = [];

  for (const entry of data) {
    const path = prefix ? `${prefix}/${entry.name}` : entry.name;
    const isFolder = !entry.id || entry.metadata == null;

    if (isFolder) {
      if (entry.name === ".emptyFolderPlaceholder") continue;
      out.push(...(await listStorageMediaFiles(path)));
      continue;
    }

    const { data: pub } = sb.storage.from("media").getPublicUrl(path);
    const url = pub.publicUrl;
    const mime =
      entry.metadata && typeof entry.metadata === "object" && "mimetype" in entry.metadata
        ? String((entry.metadata as { mimetype?: string }).mimetype || "")
        : undefined;

    out.push({
      id: `storage:${path}`,
      url,
      file_path: url,
      alt: entry.name,
      created_at: entry.created_at || entry.updated_at || new Date().toISOString(),
      mime_type: mime || undefined,
      storageOnly: true,
      source: "storage",
      folder: "uploads",
      readOnly: false,
    });
  }

  return out;
}

export async function adminUpdateMediaAlt(id: string, alt: string): Promise<void> {
  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();
  if (id.startsWith("site:") || id.startsWith("storage:")) {
    throw new Error("Alt text for site assets is derived from the filename. Upload a Cloud copy to manage alt in the library.");
  }

  const { error } = await sb.from("media").update({ alt_text: alt.trim() }).eq("id", id);
  if (error) throw new Error(error.message);
}

/** Delete Cloud media only. Site/CDN catalog entries cannot be deleted here. */
export async function adminDeleteMedia(item: MediaLibraryItem): Promise<void> {
  if (item.readOnly || item.id.startsWith("site:")) {
    throw new Error("Site and CDN images stay in the website files — they can’t be deleted from the media library.");
  }

  const sb = getSupabase();
  if (!sb) throw new Error("CMS not configured");
  await getRequiredUserId();

  const storagePath = item.id.startsWith("storage:")
    ? item.id.slice("storage:".length)
    : storagePathFromPublicUrl(item.file_path || item.url);

  if (storagePath) {
    const { error: stErr } = await sb.storage.from("media").remove([storagePath]);
    if (stErr) {
      console.warn("[cms] storage delete failed", stErr.message);
    }
  }

  if (!item.storageOnly && !item.id.startsWith("storage:")) {
    const { error } = await sb.from("media").delete().eq("id", item.id);
    if (error) throw new Error(error.message);
  }
}

function normalizeUrl(url: string): string {
  return url.split("?")[0].replace(/\/+$/, "").toLowerCase();
}

function storagePathFromPublicUrl(url: string): string | null {
  if (!url) return null;
  const marker = "/object/public/media/";
  const i = url.indexOf(marker);
  if (i >= 0) return decodeURIComponent(url.slice(i + marker.length).split("?")[0]);
  if (!/^https?:\/\//i.test(url) && url.includes("/")) return url.replace(/^\/+/, "");
  return null;
}
