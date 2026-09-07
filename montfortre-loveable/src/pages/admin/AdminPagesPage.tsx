import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AdminGate } from "../../admin/AdminGate";
import { adminFetchFreeformPages, type CmsFreeformPageRow } from "../../lib/cms/pages";
import { loadAllPageSeoOverrides } from "../../lib/cms/pageSeoOverrides";
import { listBuiltInSitePages, type SitePageInventoryItem } from "../../lib/cms/sitePageStats";

const PAGE_SIZE = 25;

type ListRow =
  | {
      kind: "builtin" | "blog-article";
      key: string;
      title: string;
      path: string;
      meta_title: string;
      meta_description: string;
      source: string;
    }
  | {
      kind: "cms";
      key: string;
      id: string;
      title: string;
      path: string;
      meta_title: string;
      meta_description: string;
      published: boolean;
      source: string;
    };

function PagesInner() {
  const [cmsRows, setCmsRows] = useState<CmsFreeformPageRow[]>([]);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "builtin" | "blog-article" | "cms">("all");
  const [loading, setLoading] = useState(true);
  const [overridesTick, setOverridesTick] = useState(0);
  const [page, setPage] = useState(1);

  async function load() {
    setLoading(true);
    try {
      setCmsRows(await adminFetchFreeformPages().catch(() => [] as CmsFreeformPageRow[]));
      setError("");
      setOverridesTick((n) => n + 1);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load");
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

  const builtIn = listBuiltInSitePages();

  const rows = useMemo<ListRow[]>(() => {
    void overridesTick;
    const overrides = loadAllPageSeoOverrides();
    const list: ListRow[] = builtIn.map((p: SitePageInventoryItem) => {
      const o = overrides[p.key] || {};
      return {
        kind: p.kind,
        key: p.key,
        title: o.title?.trim() || p.title,
        path: p.path,
        meta_title: o.meta_title || "",
        meta_description: o.meta_description || "",
        source: p.kind === "blog-article" ? "Blog article" : "Site page",
      };
    });

    for (const cms of cmsRows) {
      list.push({
        kind: "cms",
        key: `cms:${cms.id}`,
        id: cms.id,
        title: cms.title,
        path: `/${cms.slug}/`,
        meta_title: cms.meta_title,
        meta_description: cms.meta_description,
        published: cms.published,
        source: "CMS page",
      });
    }

    return list.sort((a, b) => a.title.localeCompare(b.title));
  }, [builtIn, cmsRows, overridesTick]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (filter !== "all" && r.kind !== filter) return false;
      if (!q) return true;
      return `${r.title} ${r.path} ${r.meta_title} ${r.meta_description} ${r.source}`.toLowerCase().includes(q);
    });
  }, [rows, query, filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageRows = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, safePage]);

  const counts = useMemo(
    () => ({
      all: rows.length,
      builtin: rows.filter((r) => r.kind === "builtin").length,
      blog: rows.filter((r) => r.kind === "blog-article").length,
      cms: rows.filter((r) => r.kind === "cms").length,
    }),
    [rows],
  );

  function editHref(row: ListRow) {
    if (row.kind === "cms") return `/admin/pages/cms/${row.id}`;
    return `/admin/pages/seo/${encodeURIComponent(row.key)}`;
  }

  function typeShort(row: ListRow) {
    if (row.kind === "blog-article") return "Blog";
    if (row.kind === "cms") return "CMS";
    return "Site";
  }

  const rangeStart = filtered.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(safePage * PAGE_SIZE, filtered.length);

  return (
    <div className="admin-dash">
      <div className="admin-page-head admin-dash-head">
        <div>
          <p className="admin-kicker">Content</p>
          <h1>Pages</h1>
          <p className="admin-lede">
            All site pages — edit title and SEO meta only. Page body content cannot be changed from the dashboard.
          </p>
        </div>
        <div className="admin-page-actions">
          <button type="button" className="admin-btn admin-btn--ghost" onClick={() => void load()}>
            Refresh
          </button>
        </div>
      </div>

      {error ? <div className="admin-error">{error}</div> : null}

      <section className="admin-dash-section" aria-label="Page counts">
        <div className="admin-dash-section-head">
          <h2>Your library</h2>
          <p>Built-in routes, blog articles, and CMS freeform pages.</p>
        </div>
        <div className={`admin-stats admin-stats--pages-4${loading ? " admin-stats--loading" : ""}`}>
          <button type="button" className={`admin-stat admin-stat--btn${filter === "all" ? " is-active" : ""}`} onClick={() => setFilter("all")}>
            <span className="admin-stat-label">All pages</span>
            <strong>{loading ? "—" : counts.all}</strong>
            <span className="admin-stat-meta">listed</span>
            <em>Click to show all</em>
          </button>
          <button type="button" className={`admin-stat admin-stat--btn${filter === "builtin" ? " is-active" : ""}`} onClick={() => setFilter("builtin")}>
            <span className="admin-stat-label">Site pages</span>
            <strong>{loading ? "—" : counts.builtin}</strong>
            <span className="admin-stat-meta">built-in</span>
            <em>SEO overrides</em>
          </button>
          <button type="button" className={`admin-stat admin-stat--btn${filter === "blog-article" ? " is-active" : ""}`} onClick={() => setFilter("blog-article")}>
            <span className="admin-stat-label">Blog articles</span>
            <strong>{loading ? "—" : counts.blog}</strong>
            <span className="admin-stat-meta">registry</span>
            <em>SEO overrides</em>
          </button>
          <button type="button" className={`admin-stat admin-stat--btn${filter === "cms" ? " is-active" : ""}`} onClick={() => setFilter("cms")}>
            <span className="admin-stat-label">CMS pages</span>
            <strong>{loading ? "—" : counts.cms}</strong>
            <span className="admin-stat-meta">cloud</span>
            <em>Title + meta</em>
          </button>
        </div>
      </section>

      <div className="hub-toolbar pages-hub-toolbar">
        <label className="hub-search">
          <span className="admin-muted" style={{ margin: 0 }}>
            Search
          </span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Title, path, meta…" />
        </label>
        <p className="pages-hub-count admin-muted">
          {loading ? "Loading…" : `Showing ${rangeStart}–${rangeEnd} of ${filtered.length}`}
        </p>
      </div>

      <div className="admin-card admin-table-wrap pages-table-wrap">
        <table className="admin-table admin-table--pages">
          <colgroup>
            <col className="pages-col-title" />
            <col className="pages-col-path" />
            <col className="pages-col-type" />
            <col className="pages-col-meta" />
            <col className="pages-col-actions" />
          </colgroup>
          <thead>
            <tr>
              <th>Title</th>
              <th>Path</th>
              <th>Type</th>
              <th>Meta</th>
              <th className="admin-table-col-actions"> </th>
            </tr>
          </thead>
          <tbody>
            {pageRows.map((row) => (
              <tr key={row.key}>
                <td>
                  <strong className="pages-row-title" title={row.title}>
                    {row.title}
                  </strong>
                </td>
                <td>
                  <code className="pages-row-path" title={row.path}>
                    {row.path}
                  </code>
                </td>
                <td className="pages-row-type">
                  <span className={`pages-type-badge pages-type-badge--${row.kind}`} title={row.source}>
                    {typeShort(row)}
                  </span>
                  {row.kind === "cms" && "published" in row ? (
                    <span className={`pages-status-dot ${row.published ? "is-live" : "is-draft"}`} title={row.published ? "Live" : "Draft"}>
                      {row.published ? "Live" : "Draft"}
                    </span>
                  ) : null}
                </td>
                <td className="admin-muted pages-row-meta" title={row.meta_description || row.meta_title || "Default"}>
                  {row.meta_title || row.meta_description
                    ? `${(row.meta_description || row.meta_title).slice(0, 42)}${(row.meta_description || row.meta_title).length > 42 ? "…" : ""}`
                    : "Default"}
                </td>
                <td className="pages-row-actions">
                  <div className="pages-row-actions-inner">
                    <Link className="pages-action" to={editHref(row)}>
                      Edit SEO
                    </Link>
                    <span className="pages-action-sep" aria-hidden="true">
                      ·
                    </span>
                    <a className="pages-action" href={row.path} target="_blank" rel="noreferrer">
                      View
                    </a>
                  </div>
                </td>
              </tr>
            ))}
            {!loading && filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="admin-muted">
                  No pages match this filter.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>

        {filtered.length > PAGE_SIZE ? (
          <div className="pages-pager">
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
    </div>
  );
}

export default function AdminPagesPage() {
  return (
    <AdminGate>
      <PagesInner />
    </AdminGate>
  );
}
