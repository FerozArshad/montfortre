import { useCallback, useEffect, useMemo, useState } from "react";

import { Link } from "react-router-dom";

import { AdminGate } from "../../admin/AdminGate";

import { isAdminDevBypass } from "../../lib/cms/auth";

import { adminFetchBlogPosts, adminPatchBlogPublished } from "../../lib/cms/blog";
import { adminFetchLeads, leadDisplayName, leadFormTypeLabel, type LeadRow } from "../../lib/cms/leads";
import { checkCmsHealth, type CmsHealth } from "../../lib/cms/health";
import { adminFetchMedia } from "../../lib/cms/media";
import { adminFetchFreeformPages, type CmsFreeformPageRow } from "../../lib/cms/pages";
import { buildWebsitePageStats } from "../../lib/cms/sitePageStats";
import {

  adminFetchListings,

  adminPatchListingPropertyStatus,

  adminPatchListingPublished,

  LISTING_PROPERTY_STATUSES,

  type ListingPropertyStatus,

} from "../../lib/cms/listings";

import { isSoldStatus, isTrashedSlug } from "../../admin/hub/hubShared";

import type { CmsBlogRow, CmsListingRow } from "../../lib/cms/types";



type ContentTab = "all" | "listings" | "blog";



type ContentRow =

  | { kind: "listing"; row: CmsListingRow; updatedAt: string }

  | { kind: "blog"; row: CmsBlogRow; updatedAt: string };



function draftLabel(count: number) {

  return count === 1 ? "1 draft" : `${count} drafts`;

}



function formatUpdated(iso: string) {

  try {

    return new Date(iso).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });

  } catch {

    return "—";

  }

}



function DashboardInner() {

  const [listings, setListings] = useState<CmsListingRow[]>([]);

  const [posts, setPosts] = useState<CmsBlogRow[]>([]);

  const [cmsPages, setCmsPages] = useState<CmsFreeformPageRow[]>([]);

  const [leads, setLeads] = useState<LeadRow[]>([]);

  const [mediaCount, setMediaCount] = useState(0);

  const [error, setError] = useState("");

  const [health, setHealth] = useState<CmsHealth | null>(null);

  const [loading, setLoading] = useState(true);

  const [savingId, setSavingId] = useState<string | null>(null);

  const [tab, setTab] = useState<ContentTab>("all");

  const [query, setQuery] = useState("");

  const bypass = isAdminDevBypass();



  const healthReady = Boolean(health?.postsOk && health?.pagesOk && health?.profilesOk && health?.userRolesOk);

  const schemaReady = bypass || healthReady;



  const loadContent = useCallback(async () => {

    const [listingRows, postRows, pageRows, leadRows, mediaRows] = await Promise.all([
      adminFetchListings(),
      adminFetchBlogPosts(),
      adminFetchFreeformPages().catch(() => [] as CmsFreeformPageRow[]),
      adminFetchLeads().catch(() => [] as LeadRow[]),
      adminFetchMedia().catch(() => []),
    ]);

    setListings(listingRows);

    setPosts(postRows);

    setCmsPages(pageRows);

    setLeads(leadRows);

    setMediaCount(mediaRows.length);

  }, []);



  useEffect(() => {

    (async () => {

      setError("");

      setLoading(true);

      try {

        const h = await checkCmsHealth();

        setHealth(h);

        if (bypass || (h.postsOk && h.pagesOk)) await loadContent();

      } catch (e) {

        setError(e instanceof Error ? e.message : "Failed to load dashboard");

      } finally {

        setLoading(false);

      }

    })();

  }, [bypass, loadContent]);



  const liveListings = listings.filter((l) => !isTrashedSlug(l.slug));
  const livePosts = posts.filter((p) => !isTrashedSlug(p.slug));

  const listingActive = liveListings.filter((l) => l.published && !isSoldStatus(l.status)).length;
  const listingSold = liveListings.filter((l) => isSoldStatus(l.status)).length;
  const listingDraft = liveListings.filter((l) => !l.published).length;
  const blogLive = livePosts.filter((p) => p.published).length;
  const blogDraft = livePosts.length - blogLive;
  const cmsPagesLive = cmsPages.filter((p) => p.published).length;
  const cmsPagesDraft = cmsPages.length - cmsPagesLive;
  const pageStats = buildWebsitePageStats({
    listingsLive: listingActive,
    blogLive,
    cmsPagesLive,
    cmsPagesDraft,
  });
  const leadsNew = leads.filter((l) => l.status === "new").length;
  const recentLeads = leads.slice(0, 5);

  const totalItems = liveListings.length + livePosts.length;

  const showEmptyHint = !loading && schemaReady && totalItems === 0;



  const allRows = useMemo<ContentRow[]>(() => {

    const rows: ContentRow[] = [

      ...liveListings.map((row) => ({ kind: "listing" as const, row, updatedAt: row.updated_at })),

      ...livePosts.map((row) => ({ kind: "blog" as const, row, updatedAt: row.updated_at })),

    ];

    return rows.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

  }, [liveListings, livePosts]);



  const filteredRows = useMemo(() => {

    const q = query.trim().toLowerCase();

    return allRows.filter((item) => {

      if (tab === "listings" && item.kind !== "listing") return false;

      if (tab === "blog" && item.kind !== "blog") return false;

      if (!q) return true;

      if (item.kind === "listing") {

        const row = item.row;

        return `${row.title} ${row.street} ${row.neighborhood} ${row.status} ${row.slug}`.toLowerCase().includes(q);

      }

      const row = item.row;

      return `${row.h1} ${row.category} ${row.slug} ${row.lead}`.toLowerCase().includes(q);

    });

  }, [allRows, tab, query]);



  async function onListingPropertyStatus(id: string, status: ListingPropertyStatus) {

    setSavingId(id);

    setError("");

    try {

      const updated = await adminPatchListingPropertyStatus(id, status);

      setListings((prev) => prev.map((r) => (r.id === id ? updated : r)));

    } catch (e) {

      setError(e instanceof Error ? e.message : "Status update failed");

    } finally {

      setSavingId(null);

    }

  }



  async function onListingPublished(id: string, published: boolean) {

    setSavingId(id);

    setError("");

    try {

      const updated = await adminPatchListingPublished(id, published);

      setListings((prev) => prev.map((r) => (r.id === id ? updated : r)));

    } catch (e) {

      setError(e instanceof Error ? e.message : "Publish update failed");

    } finally {

      setSavingId(null);

    }

  }



  async function onBlogPublished(id: string, published: boolean) {

    setSavingId(id);

    setError("");

    try {

      const updated = await adminPatchBlogPublished(id, published);

      setPosts((prev) => prev.map((r) => (r.id === id ? updated : r)));

    } catch (e) {

      setError(e instanceof Error ? e.message : "Publish update failed");

    } finally {

      setSavingId(null);

    }

  }



  return (

    <div className="admin-dash">

      <div className="admin-page-head admin-dash-head">

        <div>

          <p className="admin-kicker">Overview</p>

          <h1>Dashboard</h1>

          <p className="admin-lede">Manage listings, blog, pages, media, and inbound leads.</p>

        </div>

        <div className="admin-page-actions">

          <Link className="admin-btn admin-btn--ghost" to="/admin/listings/new">

            + Listing

          </Link>

          <Link className="admin-btn" to="/admin/blog/new">

            + Blog post

          </Link>

        </div>

      </div>



      {error ? <div className="admin-error">{error}</div> : null}



      {!schemaReady ? (

        <div className="admin-card admin-dash-empty">

          <h2 className="admin-card-title">Connection needed</h2>

          <p className="admin-card-desc">

            The CMS cannot reach Cloud tables yet. Open Settings to review connection status.

          </p>

          <Link className="admin-btn" to="/admin/settings">

            Open settings

          </Link>

        </div>

      ) : (

        <>

          <div className="admin-dash-status">

            <div className="admin-status-pill">

              <span className={`admin-status-dot${healthReady || bypass ? " admin-status-dot--ok" : ""}`} />

              {loading ? "Checking connection…" : healthReady ? "Cloud connected" : "Local preview"}

            </div>

            <Link className="admin-link-quiet" to="/admin/settings">

              System settings

            </Link>

          </div>



          <section className="admin-dash-section" aria-label="Content counts">

            <div className="admin-dash-section-head">

              <h2>Your library</h2>

              <p>Counts reflect only content owned by your account.</p>

            </div>

            <div className={`admin-stats${loading ? " admin-stats--loading" : ""}`}>

              <Link className="admin-stat" to="/admin/listings">

                <span className="admin-stat-label">Listings active</span>

                <strong>{loading ? "—" : listingActive}</strong>

                <span className="admin-stat-meta">live</span>

                <em>{loading ? "…" : `${listingSold} sold · ${draftLabel(listingDraft)}`}</em>

              </Link>

              <Link className="admin-stat" to="/admin/blog">

                <span className="admin-stat-label">Blog posts</span>

                <strong>{loading ? "—" : blogLive}</strong>

                <span className="admin-stat-meta">live</span>

                <em>{loading ? "…" : draftLabel(blogDraft)}</em>

              </Link>

              <Link className="admin-stat" to="/admin/pages">

                <span className="admin-stat-label">Website pages</span>

                <strong>{loading ? "—" : pageStats.totalOnSite}</strong>

                <span className="admin-stat-meta">on site</span>

                <em>
                  {loading
                    ? "…"
                    : `${cmsPagesLive} CMS live · ${draftLabel(cmsPagesDraft)}`}
                </em>

              </Link>

              <Link className="admin-stat" to="/admin/leads">

                <span className="admin-stat-label">New leads</span>

                <strong>{loading ? "—" : leadsNew}</strong>

                <span className="admin-stat-meta">inbox</span>

                <em>{loading ? "…" : `${leads.length} total`}</em>

              </Link>

              <Link className="admin-stat" to="/admin/media">

                <span className="admin-stat-label">Media</span>

                <strong>{loading ? "—" : mediaCount}</strong>

                <span className="admin-stat-meta">files</span>

                <em>Upload &amp; manage</em>

              </Link>

            </div>

          </section>

          <section className="admin-card" style={{ marginTop: 16 }}>
            <div className="admin-card-title" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>Recent leads</span>
              <Link className="admin-btn admin-btn--ghost admin-btn--sm" to="/admin/leads">
                Open inbox
              </Link>
            </div>
            {loading ? (
              <p className="admin-muted">Loading…</p>
            ) : recentLeads.length === 0 ? (
              <p className="admin-muted">
                No leads yet. After you run <code>003_leads.sql</code>, contact / listing / blog forms appear here.
              </p>
            ) : (
              <ul className="leads-recent-list">
                {recentLeads.map((lead) => (
                  <li key={lead.id}>
                    <Link to="/admin/leads">
                      <strong>{leadDisplayName(lead)}</strong>
                      <span>
                        {leadFormTypeLabel(lead.form_type)}
                        {lead.source_page ? ` · ${lead.source_page}` : ""}
                      </span>
                      {lead.status === "new" ? <em className="leads-pill">New</em> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {showEmptyHint ? (

            <div className="admin-dash-hint">

              <div>

                <strong>No content yet</strong>

                <p>
                  Existing Cloud listings and posts may belong to another account. Open Settings → Assign existing content to
                  me, or create something new below.
                </p>

              </div>

              <div className="admin-table-actions">

                <Link className="admin-btn admin-btn--sm admin-btn--ghost" to="/admin/settings">
                  Assign existing
                </Link>

                <Link className="admin-btn admin-btn--sm admin-btn--ghost" to="/admin/listings/new">

                  Add listing

                </Link>

                <Link className="admin-btn admin-btn--sm" to="/admin/blog/new">

                  Write article

                </Link>

              </div>

            </div>

          ) : null}



          <section className="admin-dash-section" aria-label="Content manager">

            <div className="admin-dash-section-head">

              <h2>Content manager</h2>

              <p>Edit content, change listing status, and publish or unpublish from one place.</p>

            </div>



            <div className="hub-toolbar admin-dash-toolbar">

              <div className="hub-tabs" role="tablist" aria-label="Content type">

                {(

                  [

                    ["all", "All"],

                    ["listings", "Listings"],

                    ["blog", "Blog"],

                  ] as const

                ).map(([id, label]) => (

                  <button

                    key={id}

                    type="button"

                    role="tab"

                    aria-selected={tab === id}

                    className={`hub-tab${tab === id ? " is-active" : ""}`}

                    onClick={() => setTab(id)}

                  >

                    {label}

                  </button>

                ))}

              </div>

              <label className="hub-search">

                <span className="admin-muted" style={{ margin: 0 }}>

                  Search

                </span>

                <input

                  value={query}

                  onChange={(e) => setQuery(e.target.value)}

                  placeholder="Title, address, category…"

                />

              </label>

            </div>



            <div className="admin-card admin-table-wrap">

              <table className="admin-table admin-dash-table">

                <thead>

                  <tr>

                    <th>Content</th>

                    <th>Type</th>

                    <th>Market status</th>

                    <th>Visibility</th>

                    <th>Updated</th>

                    <th />

                  </tr>

                </thead>

                <tbody>

                  {filteredRows.map((item) => {

                    const busy = savingId === item.row.id;

                    if (item.kind === "listing") {

                      const row = item.row;

                      const currentStatus = LISTING_PROPERTY_STATUSES.includes(row.status as ListingPropertyStatus)

                        ? (row.status as ListingPropertyStatus)

                        : "For Sale";

                      return (

                        <tr key={`listing-${row.id}`} className={busy ? "is-saving" : undefined}>

                          <td>

                            <div className="hub-listing-cell">

                              {row.hero_image ? (

                                <img src={row.hero_image} alt="" className="hub-listing-thumb" />

                              ) : (

                                <div className="hub-listing-thumb hub-listing-thumb--empty" />

                              )}

                              <div>

                                <Link className="hub-listing-title" to={`/admin/listings/${row.id}`}>

                                  {row.title}

                                </Link>

                                <div className="admin-muted" style={{ margin: 0, fontSize: 12 }}>

                                  {row.street || row.slug}

                                  {row.neighborhood ? ` · ${row.neighborhood}` : ""}

                                </div>

                              </div>

                            </div>

                          </td>

                          <td>

                            <span className="admin-type-badge admin-type-badge--listing">Listing</span>

                          </td>

                          <td>

                            <select

                              className="admin-inline-select"

                              value={currentStatus}

                              disabled={busy}

                              aria-label={`Market status for ${row.title}`}

                              onChange={(e) =>

                                void onListingPropertyStatus(row.id, e.target.value as ListingPropertyStatus)

                              }

                            >

                              {LISTING_PROPERTY_STATUSES.map((status) => (

                                <option key={status} value={status}>

                                  {status}

                                </option>

                              ))}

                            </select>

                          </td>

                          <td>

                            <select

                              className="admin-inline-select"

                              value={row.published ? "live" : "draft"}

                              disabled={busy}

                              aria-label={`Visibility for ${row.title}`}

                              onChange={(e) => void onListingPublished(row.id, e.target.value === "live")}

                            >

                              <option value="live">Live</option>

                              <option value="draft">Draft</option>

                            </select>

                          </td>

                          <td className="admin-muted">{formatUpdated(row.updated_at)}</td>

                          <td>

                            <Link className="admin-btn admin-btn--ghost admin-btn--sm" to={`/admin/listings/${row.id}`}>

                              Edit

                            </Link>

                          </td>

                        </tr>

                      );

                    }



                    const row = item.row;

                    return (

                      <tr key={`blog-${row.id}`} className={busy ? "is-saving" : undefined}>

                        <td>

                          <div className="hub-listing-cell">

                            {row.featured_image_src ? (

                              <img src={row.featured_image_src} alt="" className="hub-listing-thumb" />

                            ) : (

                              <div className="hub-listing-thumb hub-listing-thumb--empty" />

                            )}

                            <div>

                              <Link className="hub-listing-title" to={`/admin/blog/${row.id}`}>

                                {row.h1}

                              </Link>

                              <div className="admin-muted" style={{ margin: 0, fontSize: 12 }}>

                                {row.category} · /{row.slug}/

                              </div>

                            </div>

                          </div>

                        </td>

                        <td>

                          <span className="admin-type-badge admin-type-badge--blog">Blog</span>

                        </td>

                        <td>

                          <span className="admin-muted">—</span>

                        </td>

                        <td>

                          <select

                            className="admin-inline-select"

                            value={row.published ? "live" : "draft"}

                            disabled={busy}

                            aria-label={`Visibility for ${row.h1}`}

                            onChange={(e) => void onBlogPublished(row.id, e.target.value === "live")}

                          >

                            <option value="live">Live</option>

                            <option value="draft">Draft</option>

                          </select>

                        </td>

                        <td className="admin-muted">{formatUpdated(row.updated_at)}</td>

                        <td>

                          <Link className="admin-btn admin-btn--ghost admin-btn--sm" to={`/admin/blog/${row.id}`}>

                            Edit

                          </Link>

                        </td>

                      </tr>

                    );

                  })}

                  {!loading && !filteredRows.length ? (

                    <tr>

                      <td colSpan={6} className="admin-muted">

                        {totalItems === 0

                          ? "No listings or blog posts yet. Use the buttons above to create one."

                          : "No items match this filter."}

                      </td>

                    </tr>

                  ) : null}

                  {loading ? (

                    <tr>

                      <td colSpan={6} className="admin-muted">

                        Loading your content…

                      </td>

                    </tr>

                  ) : null}

                </tbody>

              </table>

            </div>



            <p className="admin-muted admin-dash-footnote">

              Media files stay in Cloud storage; listing and blog records store image URLs only.

              {bypass ? " Local dev bypass shows all Cloud content without ownership filter." : null}

            </p>

          </section>

        </>

      )}

    </div>

  );

}



export default function AdminDashboardPage() {

  return (

    <AdminGate>

      <DashboardInner />

    </AdminGate>

  );

}

