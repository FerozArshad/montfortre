import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminGate } from "../../admin/AdminGate";
import { HubBulkBar, HubSortSelect } from "../../admin/hub/HubToolbar";
import {
  formatHubDate,
  isSoldStatus,
  isTrashedSlug,
  parsePriceFilter,
  sortListings,
  type ListingSortKey,
} from "../../admin/hub/hubShared";
import { ListingsHubChrome } from "../../admin/listings/ListingsHubChrome";
import { allNeighborhoodOptions } from "../../admin/listings/listingOptionLists";
import { loadListingsHubSettings } from "../../admin/listings/listingsHubSettings";
import {
  adminDuplicateListing,
  adminFetchListings,
  adminPatchListingPropertyStatus,
  adminPatchListingPublished,
  adminRestoreListing,
  adminTrashListing,
  LISTING_PROPERTY_STATUSES,
  type ListingPropertyStatus,
} from "../../lib/cms/listings";
import type { CmsListingRow } from "../../lib/cms/types";

type HubTab = "active" | "sold" | "drafts" | "trash" | "all";
const PAGE_SIZE = 25;

function ActionsMenu({
  row,
  trashed,
  onDuplicate,
  onUnpublish,
  onTrash,
  onMarkSold,
  onRestore,
}: {
  row: CmsListingRow;
  trashed: boolean;
  onDuplicate: () => void;
  onUnpublish: () => void;
  onTrash: () => void;
  onMarkSold: () => void;
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
          <Link role="menuitem" to={`/admin/listings/${row.id}`} onClick={() => setOpen(false)}>
            Edit
          </Link>
          {row.published && !trashed ? (
            <a role="menuitem" href={`/${row.slug}/`} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              Open in new tab
            </a>
          ) : null}
          {isSoldStatus(row.status) && row.published && !trashed ? (
            <a
              role="menuitem"
              href={`/${row.slug}/#promote`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Promote sold
            </a>
          ) : null}
          {!trashed && !isSoldStatus(row.status) ? (
            <button type="button" role="menuitem" onClick={() => { setOpen(false); onMarkSold(); }}>
              Mark as sold
            </button>
          ) : null}
          {!trashed ? (
            <button type="button" role="menuitem" onClick={() => { setOpen(false); onDuplicate(); }}>
              Duplicate
            </button>
          ) : null}
          {row.published && !trashed ? (
            <button type="button" role="menuitem" onClick={() => { setOpen(false); onUnpublish(); }}>
              Unpublish
            </button>
          ) : null}
          {trashed ? (
            <button type="button" role="menuitem" onClick={() => { setOpen(false); onRestore(); }}>
              Restore
            </button>
          ) : (
            <button type="button" role="menuitem" className="is-danger" onClick={() => { setOpen(false); onTrash(); }}>
              Trash
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

function ListingsHubInner() {
  const navigate = useNavigate();
  const hubSettings = loadListingsHubSettings();
  const [rows, setRows] = useState<CmsListingRow[]>([]);
  const [error, setError] = useState("");
  const [tab, setTab] = useState<HubTab>("active");
  const [query, setQuery] = useState("");
  const [neighborhoodFilter, setNeighborhoodFilter] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const [page, setPage] = useState(1);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [sortKey, setSortKey] = useState<ListingSortKey>("updated");

  async function load() {
    try {
      setRows(await adminFetchListings());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load");
    }
  }

  useEffect(() => {
    void load();
  }, []);

  useEffect(() => {
    setPage(1);
    setSelected(new Set());
  }, [tab, query, neighborhoodFilter, sortKey]);

  const liveRows = useMemo(() => rows.filter((r) => !isTrashedSlug(r.slug)), [rows]);
  const trashedRows = useMemo(() => rows.filter((r) => isTrashedSlug(r.slug)), [rows]);

  const counts = useMemo(() => {
    const active = liveRows.filter((r) => r.published && !isSoldStatus(r.status)).length;
    const sold = liveRows.filter((r) => isSoldStatus(r.status)).length;
    const drafts = liveRows.filter((r) => !r.published).length;
    return { active, sold, drafts, trash: trashedRows.length, all: liveRows.length };
  }, [liveRows, trashedRows]);

  const priceMin = parsePriceFilter(hubSettings.priceFilterFrom);
  const priceMax = parsePriceFilter(hubSettings.priceFilterTo);

  const neighborhoodOptions = useMemo(
    () => allNeighborhoodOptions(rows.map((r) => r.neighborhood).filter(Boolean)),
    [rows],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = tab === "trash" ? trashedRows : liveRows;
    const matched = base.filter((row) => {
      if (tab === "active" && !(row.published && !isSoldStatus(row.status))) return false;
      if (tab === "sold" && !isSoldStatus(row.status)) return false;
      if (tab === "drafts" && row.published) return false;
      if (neighborhoodFilter && row.neighborhood !== neighborhoodFilter) return false;
      if (priceMin !== null && row.price_value < priceMin) return false;
      if (priceMax !== null && row.price_value > priceMax) return false;
      if (!q) return true;
      const hay = `${row.title} ${row.street} ${row.neighborhood} ${row.status} ${row.slug}`.toLowerCase();
      return hay.includes(q);
    });
    return sortListings(matched, sortKey, "desc");
  }, [liveRows, trashedRows, tab, query, neighborhoodFilter, sortKey, priceMin, priceMax]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const allPageSelected = pageRows.length > 0 && pageRows.every((r) => selected.has(r.id));

  async function onUnpublish(row: CmsListingRow) {
    if (!window.confirm(`Unpublish listing “${row.title}”?`)) return;
    try {
      await adminPatchListingPublished(row.id, false);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unpublish failed");
    }
  }

  async function onPropertyStatus(row: CmsListingRow, status: ListingPropertyStatus) {
    setSavingId(row.id);
    setError("");
    try {
      const updated = await adminPatchListingPropertyStatus(row.id, status);
      setRows((prev) => prev.map((r) => (r.id === row.id ? updated : r)));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Status update failed");
    } finally {
      setSavingId(null);
    }
  }

  async function onTrash(row: CmsListingRow) {
    if (!window.confirm(`Move “${row.title}” to trash? It will be unpublished and the slug freed.`)) return;
    try {
      await adminTrashListing(row.id);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Trash failed");
    }
  }

  async function onRestore(row: CmsListingRow) {
    try {
      await adminRestoreListing(row.id);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Restore failed");
    }
  }

  async function onDuplicate(row: CmsListingRow) {
    try {
      const copy = await adminDuplicateListing(row.id);
      await load();
      navigate(`/admin/listings/${copy.id}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Duplicate failed");
    }
  }

  async function bulkMarkSold() {
    setError("");
    for (const id of selected) {
      await adminPatchListingPropertyStatus(id, "Sold");
    }
    setSelected(new Set());
    await load();
  }

  async function bulkPublish(published: boolean) {
    setError("");
    for (const id of selected) {
      await adminPatchListingPublished(id, published);
    }
    setSelected(new Set());
    await load();
  }

  async function bulkTrash() {
    if (!window.confirm(`Move ${selected.size} listing(s) to trash?`)) return;
    setError("");
    for (const id of selected) {
      await adminTrashListing(id);
    }
    setSelected(new Set());
    await load();
  }

  return (
    <ListingsHubChrome
      title="Listings Hub"
      lede="AgentFire-style Active / Sold / Drafts / Trash workflow for your listing pages."
      actions={
        <button type="button" className="admin-btn" onClick={() => setShowAdd(true)}>
          + Add listing
        </button>
      }
    >
      {error ? <div className="admin-error">{error}</div> : null}

      {showAdd ? (
        <div className="hub-modal-backdrop" role="presentation" onClick={() => setShowAdd(false)}>
          <div className="hub-modal" role="dialog" aria-modal="true" aria-labelledby="hub-add-title" onClick={(e) => e.stopPropagation()}>
            <h2 id="hub-add-title">Add listing</h2>
            <p className="admin-muted">Choose how to create this listing page.</p>
            <div className="hub-add-grid">
              <Link className="hub-add-card" to="/admin/listings/new" onClick={() => setShowAdd(false)}>
                <strong>Create custom listing</strong>
                <span>Enter address, price, gallery, and specs manually.</span>
              </Link>
              <div className="hub-add-card hub-add-card--disabled" aria-disabled="true">
                <strong>Add from IDX</strong>
                <span>MLS import (AgentFire AF IDX) — not wired yet.</span>
              </div>
            </div>
            <button type="button" className="admin-btn admin-btn--ghost" onClick={() => setShowAdd(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      <div className="hub-stats">
        {(
          [
            ["active", counts.active, "Active"],
            ["sold", counts.sold, "Sold"],
            ["drafts", counts.drafts, "Drafts"],
            ["trash", counts.trash, "Trash"],
            ["all", counts.all, "All"],
          ] as const
        ).map(([id, count, label]) => (
          <button key={id} type="button" className={`hub-stat${tab === id ? " is-active" : ""}`} onClick={() => setTab(id)}>
            <strong>{count}</strong>
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="hub-toolbar">
        <div className="hub-tabs" role="tablist" aria-label="Listing status">
          {(
            [
              ["active", "Active listings"],
              ["sold", "Sold listings"],
              ["drafts", "Drafts"],
              ["trash", "Trash"],
              ["all", "All"],
            ] as const
          ).map(([id, label]) => (
            <button key={id} type="button" role="tab" aria-selected={tab === id} className={`hub-tab${tab === id ? " is-active" : ""}`} onClick={() => setTab(id)}>
              {label}
            </button>
          ))}
        </div>
        <label className="hub-search">
          <span className="admin-muted" style={{ margin: 0 }}>Search</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Address, neighborhood, status…" />
        </label>
        <label className="hub-sort">
          <span className="admin-muted">Neighborhood</span>
          <select className="admin-inline-select" value={neighborhoodFilter} onChange={(e) => setNeighborhoodFilter(e.target.value)}>
            <option value="">All</option>
            {neighborhoodOptions.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <HubSortSelect
          label="Sort"
          value={sortKey}
          onChange={(v) => setSortKey(v as ListingSortKey)}
          options={[
            { value: "updated", label: "Last updated" },
            { value: "title", label: "Title" },
            { value: "price", label: "Price" },
            { value: "status", label: "Status" },
          ]}
        />
      </div>

      {(priceMin !== null || priceMax !== null) ? (
        <p className="admin-muted hub-filter-note">
          Price filter from Settings: {priceMin ? `$${priceMin.toLocaleString()}` : "any"} – {priceMax ? `$${priceMax.toLocaleString()}` : "any"}
        </p>
      ) : null}

      <HubBulkBar selectedCount={selected.size} onClear={() => setSelected(new Set())}>
        <button type="button" className="admin-btn admin-btn--sm admin-btn--ghost" onClick={() => void bulkMarkSold()}>
          Mark sold
        </button>
        <button type="button" className="admin-btn admin-btn--sm admin-btn--ghost" onClick={() => void bulkPublish(true)}>
          Publish
        </button>
        <button type="button" className="admin-btn admin-btn--sm admin-btn--ghost" onClick={() => void bulkPublish(false)}>
          Unpublish
        </button>
        <button type="button" className="admin-btn admin-btn--sm admin-btn--ghost is-danger" onClick={() => void bulkTrash()}>
          Trash
        </button>
      </HubBulkBar>

      <div className="admin-card admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th className="hub-check-col">
                <input
                  type="checkbox"
                  aria-label="Select all on page"
                  checked={allPageSelected}
                  onChange={(e) => {
                    if (!e.target.checked) {
                      setSelected(new Set());
                      return;
                    }
                    setSelected(new Set(pageRows.map((r) => r.id)));
                  }}
                />
              </th>
              <th>Listing</th>
              <th>Price</th>
              <th>Status</th>
              <th>Visibility</th>
              <th>Updated</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {pageRows.map((row) => {
              const trashed = isTrashedSlug(row.slug);
              const currentStatus = LISTING_PROPERTY_STATUSES.includes(row.status as ListingPropertyStatus)
                ? (row.status as ListingPropertyStatus)
                : "For Sale";
              const busy = savingId === row.id;
              return (
                <tr key={row.id} className={busy ? "is-saving" : undefined}>
                  <td className="hub-check-col">
                    <input
                      type="checkbox"
                      checked={selected.has(row.id)}
                      aria-label={`Select ${row.title}`}
                      onChange={(e) => {
                        setSelected((prev) => {
                          const next = new Set(prev);
                          if (e.target.checked) next.add(row.id);
                          else next.delete(row.id);
                          return next;
                        });
                      }}
                    />
                  </td>
                  <td>
                    <div className="hub-listing-cell">
                      {row.hero_image ? <img src={row.hero_image} alt="" className="hub-listing-thumb" /> : (
                        <div className="hub-listing-thumb hub-listing-thumb--empty" />
                      )}
                      <div>
                        <Link className="hub-listing-title" to={`/admin/listings/${row.id}`}>{row.title}</Link>
                        <div className="admin-muted" style={{ margin: 0, fontSize: 12 }}>
                          {row.street || row.slug}
                          {row.neighborhood ? ` · ${row.neighborhood}` : ""}
                          {row.mls ? ` · MLS ${row.mls}` : ""}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{row.price}</td>
                  <td>
                    {!trashed ? (
                      <select className="admin-inline-select" value={currentStatus} disabled={busy} aria-label={`Market status for ${row.title}`} onChange={(e) => void onPropertyStatus(row, e.target.value as ListingPropertyStatus)}>
                        {LISTING_PROPERTY_STATUSES.map((status) => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    ) : (
                      <span className="admin-muted">Trashed</span>
                    )}
                  </td>
                  <td>
                    {!trashed ? (
                      <select className="admin-inline-select" value={row.published ? "live" : "draft"} disabled={busy} aria-label={`Visibility for ${row.title}`} onChange={async (e) => {
                        setSavingId(row.id);
                        setError("");
                        try {
                          const updated = await adminPatchListingPublished(row.id, e.target.value === "live");
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
                    ) : (
                      <span className="admin-muted">—</span>
                    )}
                  </td>
                  <td className="admin-muted">{formatHubDate(row.updated_at)}</td>
                  <td>
                    <ActionsMenu
                      row={row}
                      trashed={trashed}
                      onDuplicate={() => void onDuplicate(row)}
                      onUnpublish={() => void onUnpublish(row)}
                      onTrash={() => void onTrash(row)}
                      onMarkSold={() => void onPropertyStatus(row, "Sold")}
                      onRestore={() => void onRestore(row)}
                    />
                  </td>
                </tr>
              );
            })}
            {!filtered.length ? (
              <tr>
                <td colSpan={7} className="admin-muted">No listings in this tab.</td>
              </tr>
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
    </ListingsHubChrome>
  );
}

export default function AdminListingsPage() {
  return (
    <AdminGate>
      <ListingsHubInner />
    </AdminGate>
  );
}
