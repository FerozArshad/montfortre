import { useEffect, useMemo, useRef, useState } from "react";
import { AdminGate } from "../../admin/AdminGate";
import {
  adminDeleteMedia,
  adminFetchMedia,
  adminUpdateMediaAlt,
  siteMediaCatalogStats,
  type MediaLibraryItem,
  type MediaSource,
} from "../../lib/cms/media";
import { uploadCmsImage } from "../../lib/cms/upload";

const GRID_PAGE = 48;

type Filter = "all" | "uploads" | "site" | "cdn";

function formatWhen(iso: string) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "—";
  }
}

function fileNameFromUrl(url: string): string {
  try {
    const path = url.split("?")[0];
    return decodeURIComponent(path.split("/").pop() || url);
  } catch {
    return url;
  }
}

function sourceLabel(source?: MediaSource) {
  if (source === "cloud" || source === "storage") return "Upload";
  if (source === "cdn") return "CDN";
  return "Site";
}

function MediaInner() {
  const [items, setItems] = useState<MediaLibraryItem[]>([]);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editAlt, setEditAlt] = useState("");
  const [selected, setSelected] = useState<MediaLibraryItem | null>(null);
  const [page, setPage] = useState(1);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const catalogStats = siteMediaCatalogStats();

  async function load() {
    setLoading(true);
    try {
      const rows = await adminFetchMedia();
      setItems(rows);
      setError("");
      setSelected((cur) => (cur ? rows.find((r) => r.id === cur.id) || null : null));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load media");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [query, filter]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => {
      const src = i.source || "public";
      if (filter === "uploads" && src !== "cloud" && src !== "storage") return false;
      if (filter === "site" && src !== "public") return false;
      if (filter === "cdn" && src !== "cdn") return false;
      if (!q) return true;
      return `${i.alt} ${i.url} ${i.mime_type || ""} ${i.folder || ""} ${fileNameFromUrl(i.url)}`.toLowerCase().includes(q);
    });
  }, [items, query, filter]);

  const counts = useMemo(() => {
    let uploads = 0;
    let site = 0;
    let cdn = 0;
    for (const i of items) {
      if (i.source === "cloud" || i.source === "storage") uploads += 1;
      else if (i.source === "cdn") cdn += 1;
      else site += 1;
    }
    return { all: items.length, uploads, site, cdn };
  }, [items]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / GRID_PAGE));
  const safePage = Math.min(page, totalPages);
  const pageItems = useMemo(() => {
    const start = (safePage - 1) * GRID_PAGE;
    return filtered.slice(start, start + GRID_PAGE);
  }, [filtered, safePage]);

  async function onUploadFiles(files: FileList | File[] | null) {
    const list = files ? Array.from(files) : [];
    if (!list.length) return;
    setUploading(true);
    setError("");
    setNotice("");
    let ok = 0;
    try {
      for (const file of list) {
        await uploadCmsImage("media", file);
        ok += 1;
      }
      setNotice(`Uploaded ${ok} file${ok === 1 ? "" : "s"}. Blog/listing records store the URL only.`);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
      if (ok) await load();
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  async function onSaveAlt(item: MediaLibraryItem) {
    setBusyId(item.id);
    try {
      await adminUpdateMediaAlt(item.id, editAlt);
      setItems((prev) => prev.map((r) => (r.id === item.id ? { ...r, alt: editAlt.trim() } : r)));
      if (selected?.id === item.id) setSelected({ ...item, alt: editAlt.trim() });
      setEditingId(null);
      setNotice("Alt text updated.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Update failed");
    } finally {
      setBusyId(null);
    }
  }

  async function onDelete(item: MediaLibraryItem) {
    if (item.readOnly) {
      setError("Site and CDN images stay with the website files and can’t be deleted here.");
      return;
    }
    if (!window.confirm(`Delete “${item.alt || fileNameFromUrl(item.url)}” permanently?`)) return;
    setBusyId(item.id);
    try {
      await adminDeleteMedia(item);
      setItems((prev) => prev.filter((r) => r.id !== item.id));
      if (selected?.id === item.id) setSelected(null);
      setNotice("Media deleted.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Delete failed");
    } finally {
      setBusyId(null);
    }
  }

  async function copyUrl(url: string) {
    try {
      await navigator.clipboard.writeText(url);
      setNotice("URL copied.");
    } catch {
      setNotice(url);
    }
  }

  const rangeStart = filtered.length === 0 ? 0 : (safePage - 1) * GRID_PAGE + 1;
  const rangeEnd = Math.min(safePage * GRID_PAGE, filtered.length);

  return (
    <div className="admin-dash">
      <div className="admin-page-head admin-dash-head">
        <div>
          <p className="admin-kicker">Content</p>
          <h1>Media</h1>
          <p className="admin-lede">
            Every site image plus Cloud uploads. Blog and listings only save the image URL and alt text — pick from this
            library when editing.
          </p>
        </div>
        <div className="admin-page-actions">
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            multiple
            hidden
            onChange={(e) => void onUploadFiles(e.target.files)}
          />
          <button type="button" className="admin-btn" disabled={uploading} onClick={() => fileRef.current?.click()}>
            {uploading ? "Uploading…" : "Upload media"}
          </button>
          <button type="button" className="admin-btn admin-btn--ghost" onClick={() => void load()}>
            Refresh
          </button>
        </div>
      </div>

      {error ? <div className="admin-error">{error}</div> : null}
      {notice ? <div className="admin-success">{notice}</div> : null}

      <div
        className={`media-dropzone${dragOver ? " is-over" : ""}${uploading ? " is-busy" : ""}`}
        onDragEnter={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          if (e.currentTarget === e.target) setDragOver(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          void onUploadFiles(e.dataTransfer.files);
        }}
      >
        <p>
          <strong>Drop images here</strong> or use Upload — JPEG, PNG, WebP, GIF · max 5MB · catalog includes{" "}
          {catalogStats.count} site assets
        </p>
      </div>

      <section className="admin-dash-section" aria-label="Media filters" style={{ marginTop: 16 }}>
        <div className={`admin-stats admin-stats--pages-4${loading ? " admin-stats--loading" : ""}`}>
          <button type="button" className={`admin-stat admin-stat--btn${filter === "all" ? " is-active" : ""}`} onClick={() => setFilter("all")}>
            <span className="admin-stat-label">All</span>
            <strong>{loading ? "—" : counts.all}</strong>
            <span className="admin-stat-meta">library</span>
            <em>Click to show all</em>
          </button>
          <button
            type="button"
            className={`admin-stat admin-stat--btn${filter === "site" ? " is-active" : ""}`}
            onClick={() => setFilter("site")}
          >
            <span className="admin-stat-label">Site files</span>
            <strong>{loading ? "—" : counts.site}</strong>
            <span className="admin-stat-meta">public/</span>
            <em>Read-only</em>
          </button>
          <button type="button" className={`admin-stat admin-stat--btn${filter === "cdn" ? " is-active" : ""}`} onClick={() => setFilter("cdn")}>
            <span className="admin-stat-label">CDN</span>
            <strong>{loading ? "—" : counts.cdn}</strong>
            <span className="admin-stat-meta">listings/blog</span>
            <em>Read-only</em>
          </button>
          <button
            type="button"
            className={`admin-stat admin-stat--btn${filter === "uploads" ? " is-active" : ""}`}
            onClick={() => setFilter("uploads")}
          >
            <span className="admin-stat-label">Uploads</span>
            <strong>{loading ? "—" : counts.uploads}</strong>
            <span className="admin-stat-meta">Cloud</span>
            <em>Editable</em>
          </button>
        </div>
      </section>

      <div className="hub-toolbar media-lib-toolbar">
        <label className="hub-search">
          <span className="admin-muted" style={{ margin: 0 }}>
            Search
          </span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Alt text, filename, folder…" />
        </label>
        <p className="media-lib-count admin-muted">
          {loading ? "Loading…" : `${filtered.length} file${filtered.length === 1 ? "" : "s"} · showing ${rangeStart}–${rangeEnd}`}
        </p>
      </div>

      <div className={`media-lib-layout${selected ? " media-lib-layout--split" : ""}`}>
        <div className="admin-card media-lib-card">
          {loading ? <p className="admin-muted media-lib-empty">Loading media…</p> : null}
          {!loading && filtered.length === 0 ? (
            <p className="admin-muted media-lib-empty">No media match this filter.</p>
          ) : null}
          <ul className="media-lib-grid">
            {pageItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`media-lib-tile${selected?.id === item.id ? " is-selected" : ""}`}
                  onClick={() => setSelected(item)}
                >
                  <span className="media-lib-thumb">
                    <img src={item.url} alt="" loading="lazy" />
                  </span>
                  <span className="media-lib-tile-meta">
                    <em>{sourceLabel(item.source)}</em>
                    <strong title={item.alt || fileNameFromUrl(item.url)}>{item.alt || fileNameFromUrl(item.url)}</strong>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {filtered.length > GRID_PAGE ? (
            <div className="pages-pager media-lib-pager">
              <button
                type="button"
                className="admin-btn admin-btn--ghost admin-btn--sm"
                disabled={safePage <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                Previous
              </button>
              <span className="admin-muted">
                Page {safePage} of {totalPages}
              </span>
              <button
                type="button"
                className="admin-btn admin-btn--ghost admin-btn--sm"
                disabled={safePage >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Next
              </button>
            </div>
          ) : null}
        </div>

        {selected ? (
          <aside className="admin-card media-lib-detail">
            <div className="media-lib-detail-head">
              <h2>Details</h2>
              <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
            <div className="media-lib-preview">
              <img src={selected.url} alt={selected.alt || ""} />
            </div>
            <dl className="media-lib-dl">
              <div>
                <dt>Source</dt>
                <dd>{sourceLabel(selected.source)}{selected.readOnly ? " · read-only" : ""}</dd>
              </div>
              <div>
                <dt>File</dt>
                <dd>{fileNameFromUrl(selected.url)}</dd>
              </div>
              <div>
                <dt>Type</dt>
                <dd>{selected.mime_type || "—"}</dd>
              </div>
              <div>
                <dt>Added</dt>
                <dd>{formatWhen(selected.created_at)}</dd>
              </div>
              <div>
                <dt>URL</dt>
                <dd className="media-lib-url">{selected.url}</dd>
              </div>
            </dl>

            {editingId === selected.id ? (
              <label className="media-lib-alt-field">
                Alt text
                <input value={editAlt} onChange={(e) => setEditAlt(e.target.value)} />
              </label>
            ) : (
              <p className="media-lib-alt-read">
                <span className="admin-muted">Alt</span>
                <strong>{selected.alt || "—"}</strong>
              </p>
            )}

            <div className="media-lib-detail-actions">
              {editingId === selected.id ? (
                <>
                  <button
                    type="button"
                    className="admin-btn admin-btn--sm"
                    disabled={busyId === selected.id}
                    onClick={() => void onSaveAlt(selected)}
                  >
                    Save alt
                  </button>
                  <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => setEditingId(null)}>
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="admin-btn admin-btn--ghost admin-btn--sm"
                  disabled={Boolean(selected.readOnly || selected.storageOnly)}
                  onClick={() => {
                    setEditingId(selected.id);
                    setEditAlt(selected.alt);
                  }}
                >
                  Edit alt
                </button>
              )}
              <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => void copyUrl(selected.url)}>
                Copy URL
              </button>
              <a className="admin-btn admin-btn--ghost admin-btn--sm" href={selected.url} target="_blank" rel="noreferrer">
                Open
              </a>
              {!selected.readOnly ? (
                <button
                  type="button"
                  className="admin-btn admin-btn--danger admin-btn--sm"
                  disabled={busyId === selected.id}
                  onClick={() => void onDelete(selected)}
                >
                  Delete
                </button>
              ) : null}
            </div>
          </aside>
        ) : null}
      </div>
    </div>
  );
}

export default function AdminMediaPage() {
  return (
    <AdminGate>
      <MediaInner />
    </AdminGate>
  );
}
