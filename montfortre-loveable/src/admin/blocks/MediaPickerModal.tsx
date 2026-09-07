import { useEffect, useMemo, useState } from "react";
import { fetchMediaForPicker, type MediaPickerItem, type MediaSource } from "../../lib/cms/media";
import { uploadCmsImage } from "../../lib/cms/upload";

const PAGE_SIZE = 50;

type Props = {
  open: boolean;
  onClose: () => void;
  onSelect: (url: string, alt: string) => void;
  title?: string;
};

type Filter = "all" | "uploads" | "site" | "cdn";

function sourceLabel(source?: MediaSource) {
  if (source === "cloud" || source === "storage") return "Upload";
  if (source === "cdn") return "CDN";
  return "Site";
}

export function MediaPickerModal({ open, onClose, onSelect, title = "Media library" }: Props) {
  const [items, setItems] = useState<MediaPickerItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setLoading(true);
    setError("");
    setQuery("");
    setFilter("all");
    setVisibleCount(PAGE_SIZE);
    void fetchMediaForPicker()
      .then((rows) => {
        if (!cancelled) {
          setItems(rows);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load media");
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [open]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, filter]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const src = item.source || "public";
      if (filter === "uploads" && src !== "cloud" && src !== "storage") return false;
      if (filter === "site" && src !== "public") return false;
      if (filter === "cdn" && src !== "cdn") return false;
      if (!q) return true;
      return `${item.alt} ${item.url} ${item.folder || ""}`.toLowerCase().includes(q);
    });
  }, [items, query, filter]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const remaining = Math.max(0, filtered.length - visible.length);

  if (!open) return null;

  async function onUpload(file: File | null) {
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const url = await uploadCmsImage("media", file);
      const alt = file.name.replace(/\.[^.]+$/, "");
      const next: MediaPickerItem = {
        id: `cloud:${url}`,
        url,
        alt,
        created_at: new Date().toISOString(),
        source: "cloud",
        folder: "uploads",
      };
      setItems((prev) => [next, ...prev]);
      setVisibleCount(PAGE_SIZE);
      onSelect(url, alt);
      onClose();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="media-picker-backdrop" role="presentation" onClick={onClose}>
      <div
        className="media-picker media-picker--library"
        role="dialog"
        aria-modal="true"
        aria-labelledby="media-picker-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="media-picker-head">
          <h2 id="media-picker-title">{title}</h2>
          <button type="button" className="media-picker-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="media-picker-toolbar">
          <label className="media-picker-search">
            <span className="visually-hidden">Search</span>
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search images…" />
          </label>
          <label className="admin-btn admin-btn--ghost admin-btn--sm media-picker-upload-btn">
            Upload new
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              hidden
              onChange={(e) => void onUpload(e.target.files?.[0] || null)}
            />
          </label>
          {uploading ? <span className="admin-muted">Uploading…</span> : null}
        </div>

        <div className="media-picker-filters" role="tablist" aria-label="Media source">
          {(
            [
              ["all", "All"],
              ["uploads", "Uploads"],
              ["site", "Site"],
              ["cdn", "CDN"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={filter === id}
              className={`media-picker-filter${filter === id ? " is-active" : ""}`}
              onClick={() => setFilter(id)}
            >
              {label}
            </button>
          ))}
          <span className="media-picker-count admin-muted">
            {loading ? "…" : `Showing ${visible.length} of ${filtered.length}`}
          </span>
        </div>

        {error ? <div className="admin-error">{error}</div> : null}
        {loading ? <p className="admin-muted media-picker-status">Loading library…</p> : null}
        {!loading && filtered.length === 0 ? (
          <p className="admin-muted media-picker-status">No images match. Try another filter or upload a new file.</p>
        ) : null}

        <ul className="media-picker-grid">
          {visible.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="media-picker-item"
                title={item.alt || item.url}
                onClick={() => {
                  onSelect(item.url, item.alt || "");
                  onClose();
                }}
              >
                <img src={item.url} alt="" loading="lazy" decoding="async" />
                <span className="media-picker-item-meta">
                  <em>{sourceLabel(item.source)}</em>
                  <strong>{item.alt || item.url.split("/").pop()}</strong>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {hasMore ? (
          <div className="media-picker-more">
            <button
              type="button"
              className="admin-btn admin-btn--ghost media-picker-load-more"
              onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
            >
              Load more ({Math.min(PAGE_SIZE, remaining)} of {remaining} remaining)
            </button>
          </div>
        ) : null}

        <p className="media-picker-foot admin-muted">
          Selecting an image stores only its URL (and alt) on the listing or blog — not the file bytes.
        </p>
      </div>
    </div>
  );
}
