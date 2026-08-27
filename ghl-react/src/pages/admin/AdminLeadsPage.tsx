import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AdminGate } from "../../admin/AdminGate";
import {
  adminDeleteLead,
  adminFetchLeads,
  adminImportLeads,
  adminPatchLeadStatus,
  leadDisplayName,
  leadFormTypeLabel,
  parseAgentFireLeadsCsv,
  type LeadRow,
  type LeadStatus,
} from "../../lib/cms/leads";

type Tab = "new" | "read" | "archived" | "all";

function formatWhen(iso: string) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function LeadsInner() {
  const [rows, setRows] = useState<LeadRow[]>([]);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [tab, setTab] = useState<Tab>("new");
  const [query, setQuery] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [importing, setImporting] = useState(false);
  const [selected, setSelected] = useState<LeadRow | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function load() {
    try {
      setRows(await adminFetchLeads());
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load leads");
    }
  }

  useEffect(() => {
    void load();
  }, []);

  const counts = useMemo(() => {
    return {
      new: rows.filter((r) => r.status === "new").length,
      read: rows.filter((r) => r.status === "read").length,
      archived: rows.filter((r) => r.status === "archived").length,
      all: rows.length,
    };
  }, [rows]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((row) => {
      if (tab !== "all" && row.status !== tab) return false;
      if (!q) return true;
      return `${row.first_name} ${row.last_name} ${row.email} ${row.phone} ${row.message} ${row.form_type} ${row.source_page} ${row.listing_slug}`
        .toLowerCase()
        .includes(q);
    });
  }, [rows, tab, query]);

  async function setStatus(id: string, status: LeadStatus) {
    setBusyId(id);
    try {
      await adminPatchLeadStatus(id, status);
      await load();
      if (selected?.id === id) {
        setSelected((prev) => (prev ? { ...prev, status } : prev));
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Update failed");
    } finally {
      setBusyId(null);
    }
  }

  async function onDelete(id: string) {
    if (!window.confirm("Delete this lead permanently?")) return;
    setBusyId(id);
    try {
      await adminDeleteLead(id);
      if (selected?.id === id) setSelected(null);
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Delete failed");
    } finally {
      setBusyId(null);
    }
  }

  async function openLead(row: LeadRow) {
    setSelected(row);
    if (row.status === "new") {
      try {
        await adminPatchLeadStatus(row.id, "read");
        setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, status: "read" } : r)));
        setSelected({ ...row, status: "read" });
      } catch {
        /* ignore mark-read errors */
      }
    }
  }

  async function onImportFile(file: File | null) {
    if (!file) return;
    setImporting(true);
    setNotice("");
    setError("");
    try {
      const text = await file.text();
      const parsed = parseAgentFireLeadsCsv(text);
      if (parsed.length === 0) {
        throw new Error(
          "No rows with email found. Export Gravity Forms / AgentFire entries as CSV with Email, First Name, Last Name, Phone, Message columns.",
        );
      }
      const { inserted, skipped } = await adminImportLeads(parsed);
      setNotice(
        `Imported ${inserted} lead${inserted === 1 ? "" : "s"} from AgentFire CSV${skipped ? ` (${skipped} skipped)` : ""}.`,
      );
      await load();
      setTab("all");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Import failed");
    } finally {
      setImporting(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Leads</h1>
          <p className="admin-lede">
            AgentFire-style inbox — contact forms, listing popups, tour requests, and blog embeds land here.
            Import legacy AgentFire / Gravity Forms entries via CSV.
          </p>
        </div>
        <div className="admin-page-actions">
          <input
            ref={fileRef}
            type="file"
            accept=".csv,text/csv"
            hidden
            onChange={(e) => void onImportFile(e.target.files?.[0] || null)}
          />
          <button
            type="button"
            className="admin-btn admin-btn--ghost"
            disabled={importing}
            onClick={() => fileRef.current?.click()}
          >
            {importing ? "Importing…" : "Import AgentFire CSV"}
          </button>
          <button type="button" className="admin-btn admin-btn--ghost" onClick={() => void load()}>
            Refresh
          </button>
        </div>
      </div>

      {error ? <div className="admin-error">{error}</div> : null}
      {notice ? <div className="admin-success">{notice}</div> : null}

      <div className="hub-stats">
        {(
          [
            ["new", counts.new, "New"],
            ["read", counts.read, "Read"],
            ["archived", counts.archived, "Archived"],
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
        <label className="hub-search">
          <span className="admin-muted" style={{ margin: 0 }}>
            Search
          </span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Name, email, page, listing…" />
        </label>
      </div>

      <div className={`leads-layout${selected ? " leads-layout--split" : ""}`}>
        <div className="admin-card admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Lead</th>
                <th>Source</th>
                <th>Form</th>
                <th>When</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="admin-muted">
                    No leads yet. Submit a contact form after running <code>003_leads.sql</code>, or
                    import an AgentFire / Gravity Forms CSV.
                  </td>
                </tr>
              ) : (
                filtered.map((row) => (
                  <tr
                    key={row.id}
                    className={`leads-row${selected?.id === row.id ? " is-selected" : ""}${row.status === "new" ? " is-new" : ""}`}
                    onClick={() => void openLead(row)}
                  >
                    <td>
                      <strong>{leadDisplayName(row)}</strong>
                      <div className="admin-muted">{row.email}</div>
                    </td>
                    <td>
                      <div className="leads-source">{row.source_page || "—"}</div>
                      {row.listing_slug ? <div className="admin-muted">/{row.listing_slug}/</div> : null}
                    </td>
                    <td>{leadFormTypeLabel(row.form_type)}</td>
                    <td>{formatWhen(row.created_at)}</td>
                    <td>
                      <span className={`admin-badge leads-status leads-status--${row.status}`}>{row.status}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {selected ? (
          <aside className="admin-card leads-detail">
            <div className="leads-detail-head">
              <h2>{leadDisplayName(selected)}</h2>
              <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
            <dl className="leads-detail-dl">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${selected.email}`}>{selected.email}</a>
                </dd>
              </div>
              {selected.phone ? (
                <div>
                  <dt>Phone</dt>
                  <dd>
                    <a href={`tel:${selected.phone}`}>{selected.phone}</a>
                  </dd>
                </div>
              ) : null}
              <div>
                <dt>Form</dt>
                <dd>{leadFormTypeLabel(selected.form_type)}</dd>
              </div>
              <div>
                <dt>Page</dt>
                <dd>
                  {selected.source_page ? (
                    <a href={selected.source_page} target="_blank" rel="noreferrer">
                      {selected.source_page}
                    </a>
                  ) : (
                    "—"
                  )}
                </dd>
              </div>
              {selected.listing_slug ? (
                <div>
                  <dt>Listing</dt>
                  <dd>
                    <Link to={`/${selected.listing_slug}/`}>/{selected.listing_slug}/</Link>
                  </dd>
                </div>
              ) : null}
              <div>
                <dt>Submitted</dt>
                <dd>{formatWhen(selected.created_at)}</dd>
              </div>
              <div>
                <dt>Message</dt>
                <dd className="leads-message">{selected.message || "—"}</dd>
              </div>
            </dl>
            <div className="leads-detail-actions">
              <button
                type="button"
                className="admin-btn admin-btn--sm"
                disabled={busyId === selected.id || selected.status === "new"}
                onClick={() => void setStatus(selected.id, "new")}
              >
                Mark new
              </button>
              <button
                type="button"
                className="admin-btn admin-btn--sm admin-btn--ghost"
                disabled={busyId === selected.id}
                onClick={() => void setStatus(selected.id, "archived")}
              >
                Archive
              </button>
              <button
                type="button"
                className="admin-btn admin-btn--sm admin-btn--danger"
                disabled={busyId === selected.id}
                onClick={() => void onDelete(selected.id)}
              >
                Delete
              </button>
            </div>
          </aside>
        ) : null}
      </div>
    </>
  );
}

export default function AdminLeadsPage() {
  return (
    <AdminGate>
      <LeadsInner />
    </AdminGate>
  );
}
