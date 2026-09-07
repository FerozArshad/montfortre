import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminGate } from "../../admin/AdminGate";
import { BlogHubChrome } from "../../admin/blog/BlogHubChrome";
import { HubBulkBar, HubSortSelect } from "../../admin/hub/HubToolbar";
import { formatHubDate, isTrashedSlug, sortBlogRows, type BlogSortKey } from "../../admin/hub/hubShared";
import {
  adminDuplicateBlogPost,
  adminFetchBlogPosts,
  adminPatchBlogPublished,
  adminRestoreBlogPost,
  adminTrashBlogPost,
  fetchBlogCategories,
} from "../../lib/cms/blog";
import { slugify } from "../../lib/cms/sanitize";
import type { CmsBlogRow } from "../../lib/cms/types";

type HubTab = "all" | "published" | "drafts" | "trash";
const PAGE_SIZE = 10;

function ActionsMenu({
  row,
  trashed,
  onDuplicate,
  onUnpublish,
  onTrash,
  onRestore,
}: {
  row: CmsBlogRow;
  trashed: boolean;
  onDuplicate: () => void;
  onUnpublish: () => void;
  onTrash: () => void;
  onRestore: () => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div className="hub-actions" ref={wrapRef}>
      <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => setOpen((v) => !v)}>
        Actions ▾
      </button>
      {open ? (
        <div className="hub-actions-menu" role="menu">
          <Link role="menuitem" to={`/admin/blog/${row.id}`} onClick={() => setOpen(false)}>Edit</Link>
          {row.published && !trashed ? (
            <a role="menuitem" href={`/${row.slug}/`} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Open in new tab</a>
          ) : null}
          {!trashed ? (
            <button type="button" role="menuitem" onClick={() => { setOpen(false); onDuplicate(); }}>Duplicate</button>
          ) : null}
          {row.published && !trashed ? (
            <button type="button" role="menuitem" onClick={() => { setOpen(false); onUnpublish(); }}>Unpublish</button>
          ) : null}
          {trashed ? (
            <button type="button" role="menuitem" onClick={() => { setOpen(false); onRestore(); }}>Restore</button>
          ) : (
            <button type="button" role="menuitem" className="is-danger" onClick={() => { setOpen(false); onTrash(); }}>Trash</button>
          )}
        </div>
      ) : null}
    </div>
  );
}

function BlogHubInner() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<CmsBlogRow[]>([]);
  const [error, setError] = useState("");
  const [tab, setTab] = useState<HubTab>("all");
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [page, setPage] = useState(1);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [savingId, setSavingId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [sortKey, setSortKey] = useState<BlogSortKey>("updated");
  const [categoryOptions, setCategoryOptions] = useState<string[]>([]);

  async function load() {
    try {
      setRows(await adminFetchBlogPosts());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load");
    }
  }

  useEffect(() => {
    void load();
    void fetchBlogCategories().then((rows) => setCategoryOptions(rows.map((r) => r.name)));
  }, []);

  useEffect(() => {
    setPage(1);
    setSelected(new Set());
  }, [tab, query, categoryFilter, sortKey]);

  const liveRows = useMemo(() => rows.filter((r) => !isTrashedSlug(r.slug)), [rows]);
  const trashedRows = useMemo(() => rows.filter((r) => isTrashedSlug(r.slug)), [rows]);

  const counts = useMemo(() => ({
    all: liveRows.length,
    published: liveRows.filter((r) => r.published).length,
    drafts: liveRows.filter((r) => !r.published).length,
    trash: trashedRows.length,
  }), [liveRows, trashedRows]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = tab === "trash" ? trashedRows : liveRows;
    const matched = base.filter((row) => {
      if (tab === "published" && !row.published) return false;
      if (tab === "drafts" && row.published) return false;
      if (categoryFilter && row.category !== categoryFilter) return false;
      if (!q) return true;
      return `${row.h1} ${row.category} ${row.slug} ${row.lead} ${row.author_name}`.toLowerCase().includes(q);
    });
    return sortBlogRows(matched, sortKey, "desc");
  }, [liveRows, trashedRows, tab, query, categoryFilter, sortKey]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const allPageSelected = pageRows.length > 0 && pageRows.every((r) => selected.has(r.id));

  async function onUnpublish(row: CmsBlogRow) {
    if (!window.confirm(`Unpublish “${row.h1}”?`)) return;
    try {
      await adminPatchBlogPublished(row.id, false);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unpublish failed");
    }
  }

  async function onTrash(row: CmsBlogRow) {
    if (!window.confirm(`Trash “${row.h1}”?`)) return;
    try {
      await adminTrashBlogPost(row.id);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Trash failed");
    }
  }

  async function onRestore(row: CmsBlogRow) {
    try {
      await adminRestoreBlogPost(row.id);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Restore failed");
    }
  }

  async function onDuplicate(row: CmsBlogRow) {
    try {
      const copy = await adminDuplicateBlogPost(row.id);
      navigate(`/admin/blog/${copy.id}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Duplicate failed");
    }
  }

  async function bulkPublish(published: boolean) {
    for (const id of selected) await adminPatchBlogPublished(id, published);
    setSelected(new Set());
    await load();
  }

  async function bulkTrash() {
    if (!window.confirm(`Trash ${selected.size} article(s)?`)) return;
    for (const id of selected) await adminTrashBlogPost(id);
    setSelected(new Set());
    await load();
  }

  function openNewModal() {
    setNewTitle("");
    setShowNew(true);
  }

  function startNewArticle() {
    const title = newTitle.trim();
    if (!title) return;
    navigate(`/admin/blog/new?title=${encodeURIComponent(title)}&slug=${encodeURIComponent(slugify(title))}`);
  }

  return (
    <BlogHubChrome
      onNewArticle={openNewModal}
      actions={
        <>
          <button type="button" className="admin-btn admin-btn--ghost" disabled title="AgentFire Content Magic — not wired">
            Content Magic
          </button>
          <button type="button" className="admin-btn" onClick={openNewModal}>+ New article</button>
        </>
      }
    >
      {error ? <div className="admin-error">{error}</div> : null}

      {showNew ? (
        <div className="hub-modal-backdrop" role="presentation" onClick={() => setShowNew(false)}>
          <div className="hub-modal hub-modal--name" role="dialog" aria-modal="true" aria-labelledby="blog-new-title" onClick={(e) => e.stopPropagation()}>
            <div className="hub-modal-head">
              <p className="hub-modal-kicker">New article</p>
              <h2 id="blog-new-title">Create article</h2>
              <p className="hub-modal-lede">Custom article (AgentFire default) or Content Magic when wired.</p>
            </div>
            <div className="hub-add-grid">
              <div className="hub-add-card hub-add-card--active">
                <strong>Create custom article</strong>
                <span>Enter a title below, then continue to the editor.</span>
              </div>
              <div className="hub-add-card hub-add-card--disabled" aria-disabled="true">
                <strong>Content Magic</strong>
                <span>AI / RSS tools (AgentFire Plus) — not wired yet.</span>
              </div>
            </div>
            <label className="hub-modal-field" htmlFor="blog-new-input">
              <span>Article title</span>
              <input id="blog-new-input" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="e.g. Harlem Brownstone Market Report" autoFocus onKeyDown={(e) => e.key === "Enter" && startNewArticle()} />
            </label>
            {newTitle.trim() ? <p className="hub-modal-slug">URL slug <code>/{slugify(newTitle.trim())}/</code></p> : null}
            <div className="hub-modal-actions">
              <button type="button" className="admin-btn admin-btn--ghost" onClick={() => setShowNew(false)}>Cancel</button>
              <button type="button" className="admin-btn" disabled={!newTitle.trim()} onClick={startNewArticle}>Continue</button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="hub-stats">
        {([["all", counts.all, "All"], ["published", counts.published, "Published"], ["drafts", counts.drafts, "Drafts"], ["trash", counts.trash, "Trash"]] as const).map(([id, count, label]) => (
          <button key={id} type="button" className={`hub-stat${tab === id ? " is-active" : ""}`} onClick={() => setTab(id)}>
            <strong>{count}</strong><span>{label}</span>
          </button>
        ))}
      </div>

      <div className="hub-toolbar">
        <div className="hub-tabs" role="tablist" aria-label="Article status">
          {([["all", "All articles"], ["published", "Published"], ["drafts", "Drafts"], ["trash", "Trash"]] as const).map(([id, label]) => (
            <button key={id} type="button" role="tab" aria-selected={tab === id} className={`hub-tab${tab === id ? " is-active" : ""}`} onClick={() => setTab(id)}>{label}</button>
          ))}
        </div>
        <label className="hub-search">
          <span className="admin-muted" style={{ margin: 0 }}>Search</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Title, author, category…" />
        </label>
        <label className="hub-sort">
          <span className="admin-muted">Category</span>
          <select className="admin-inline-select" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">All</option>
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        <HubSortSelect label="Sort" value={sortKey} onChange={(v) => setSortKey(v as BlogSortKey)} options={[
          { value: "updated", label: "Last updated" },
          { value: "title", label: "Title" },
          { value: "category", label: "Category" },
          { value: "author", label: "Author" },
        ]} />
      </div>

      <HubBulkBar selectedCount={selected.size} onClear={() => setSelected(new Set())}>
        <button type="button" className="admin-btn admin-btn--sm admin-btn--ghost" onClick={() => void bulkPublish(true)}>Publish</button>
        <button type="button" className="admin-btn admin-btn--sm admin-btn--ghost" onClick={() => void bulkPublish(false)}>Unpublish</button>
        <button type="button" className="admin-btn admin-btn--sm admin-btn--ghost is-danger" onClick={() => void bulkTrash()}>Trash</button>
      </HubBulkBar>

      <div className="admin-card admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th className="hub-check-col"><input type="checkbox" aria-label="Select all on page" checked={allPageSelected} onChange={(e) => setSelected(e.target.checked ? new Set(pageRows.map((r) => r.id)) : new Set())} /></th>
              <th>Title</th>
              <th>Category</th>
              <th>Author</th>
              <th>Visibility</th>
              <th>Updated</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {pageRows.map((row) => {
              const trashed = isTrashedSlug(row.slug);
              const busy = savingId === row.id;
              return (
                <tr key={row.id} className={busy ? "is-saving" : undefined}>
                  <td className="hub-check-col">
                    <input type="checkbox" checked={selected.has(row.id)} aria-label={`Select ${row.h1}`} onChange={(e) => setSelected((prev) => {
                      const next = new Set(prev);
                      if (e.target.checked) next.add(row.id); else next.delete(row.id);
                      return next;
                    })} />
                  </td>
                  <td>
                    <div className="hub-listing-cell">
                      {row.featured_image_src ? <img src={row.featured_image_src} alt="" className="hub-listing-thumb" /> : <div className="hub-listing-thumb hub-listing-thumb--empty" />}
                      <div>
                        <Link className="hub-listing-title" to={`/admin/blog/${row.id}`}>{row.h1}</Link>
                        <div className="admin-muted" style={{ margin: 0, fontSize: 12 }}>/{row.slug}/</div>
                      </div>
                    </div>
                  </td>
                  <td>{row.category || "—"}</td>
                  <td className="admin-muted">{row.author_name}</td>
                  <td>
                    {!trashed ? (
                      <select className="admin-inline-select" value={row.published ? "live" : "draft"} disabled={busy} onChange={async (e) => {
                        setSavingId(row.id);
                        try {
                          const updated = await adminPatchBlogPublished(row.id, e.target.value === "live");
                          setRows((prev) => prev.map((r) => (r.id === row.id ? updated : r)));
                        } catch (err) {
                          setError(err instanceof Error ? err.message : "Publish update failed");
                        } finally {
                          setSavingId(null);
                        }
                      }}>
                        <option value="live">Live</option>
                        <option value="draft">Draft</option>
                      </select>
                    ) : <span className="admin-muted">Trashed</span>}
                  </td>
                  <td className="admin-muted">{formatHubDate(row.updated_at)}</td>
                  <td>
                    <ActionsMenu row={row} trashed={trashed} onDuplicate={() => void onDuplicate(row)} onUnpublish={() => void onUnpublish(row)} onTrash={() => void onTrash(row)} onRestore={() => void onRestore(row)} />
                  </td>
                </tr>
              );
            })}
            {!filtered.length ? (
              <tr><td colSpan={7} className="admin-muted">No articles in this view.</td></tr>
            ) : null}
          </tbody>
        </table>
        {filtered.length > 0 ? (
          <div className="hub-pager">
            <span className="admin-muted" style={{ margin: 0 }}>{page} of {pageCount} · Total: {filtered.length}</span>
            <div className="admin-table-actions">
              <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
              <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" disabled={page >= pageCount} onClick={() => setPage((p) => Math.min(pageCount, p + 1))}>Next</button>
            </div>
          </div>
        ) : null}
      </div>
    </BlogHubChrome>
  );
}

export default function AdminBlogPage() {
  return (
    <AdminGate>
      <BlogHubInner />
    </AdminGate>
  );
}
