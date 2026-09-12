import { useEffect, useState } from "react";
import { AdminGate } from "../../admin/AdminGate";
import { isAdminDevBypass } from "../../lib/cms/auth";
import { checkCmsHealth, type CmsHealth } from "../../lib/cms/health";
import { assignExistingContentToCurrentUser, seedStaticContentToCms } from "../../lib/cms/seed";

function SettingsInner() {
  const [health, setHealth] = useState<CmsHealth | null>(null);
  const [error, setError] = useState("");
  const [seedMsg, setSeedMsg] = useState("");
  const [assignMsg, setAssignMsg] = useState("");
  const [seeding, setSeeding] = useState(false);
  const [assigning, setAssigning] = useState(false);
  const [busy, setBusy] = useState(false);
  const bypass = isAdminDevBypass();

  const schemaReady =
    bypass || Boolean(health?.postsOk && health?.pagesOk && health?.profilesOk && health?.userRolesOk);

  async function refresh() {
    setBusy(true);
    setError("");
    try {
      setHealth(await checkCmsHealth());
    } catch (e) {
      setError(e instanceof Error ? e.message : "Health check failed");
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    void refresh();
  }, []);

  async function onAssignExisting() {
    if (
      !window.confirm(
        "Assign all existing Cloud listings and blog posts to your account?\n\nContent imported under another user will appear in your dashboard after this.",
      )
    ) {
      return;
    }
    setAssigning(true);
    setError("");
    setAssignMsg("");
    try {
      const result = await assignExistingContentToCurrentUser();
      setAssignMsg(
        `Assigned ${result.pagesAssigned} page(s)/listing(s) and ${result.postsAssigned} blog post(s) to your account.` +
          (result.errors.length ? ` ${result.errors.length} issue(s) logged in console.` : ""),
      );
      if (result.errors.length) console.warn("[cms assign]", result.errors);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Assign failed");
    } finally {
      setAssigning(false);
    }
  }

  async function onSeed() {
    if (!window.confirm("Import current site listings and blog articles into Cloud? Matching slugs will be updated.")) {
      return;
    }
    setSeeding(true);
    setError("");
    setSeedMsg("");
    try {
      const result = await seedStaticContentToCms();
      setSeedMsg(
        `Imported ${result.listingsUpserted} listings and ${result.postsUpserted} posts.` +
          (result.errors.length ? ` ${result.errors.length} issue(s) logged in console.` : ""),
      );
      if (result.errors.length) console.warn("[cms seed]", result.errors);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Import failed");
    } finally {
      setSeeding(false);
    }
  }

  const rows = [
    { ok: health?.configured, label: "Environment", ready: "Connected", missing: "Missing keys" },
    { ok: health?.pagesOk, label: "Pages & listings", ready: "Ready", missing: "Unavailable" },
    { ok: health?.postsOk, label: "Blog posts", ready: "Ready", missing: "Unavailable" },
    { ok: health?.userRolesOk, label: "Admin roles", ready: "Ready", missing: "Unavailable" },
    { ok: health?.profilesOk, label: "Profiles", ready: "Ready", missing: "Unavailable" },
    { ok: health?.mediaOk, label: "Media library table", ready: "Ready", missing: "Unavailable" },
    { ok: health?.mediaBucketOk, label: "Media storage bucket", ready: "Ready", missing: "Run 002_lovable_media_storage.sql" },
    { ok: health?.leadsOk, label: "Leads inbox", ready: "Ready", missing: "Run 003_leads.sql" },
  ];

  return (
    <>
      <div className="admin-page-head">
        <div>
          <h1>Settings</h1>
          <p className="admin-lede">Connection status and maintenance tools. Day-to-day publishing lives under Content.</p>
        </div>
      </div>

      {error ? <div className="admin-error">{error}</div> : null}
      {seedMsg ? <div className="admin-success">{seedMsg}</div> : null}
      {assignMsg ? <div className="admin-success">{assignMsg}</div> : null}

      <div className="admin-card">
        <h2 className="admin-card-title">System status</h2>
        <p className="admin-card-desc">
          {schemaReady
            ? "CMS services are available. You can publish listings, pages, and posts."
            : "Something is not ready yet. Confirm Cloud setup, then re-check."}
        </p>
        <div className="admin-status-row">
          <div className="admin-status-pill">
            <span className={`admin-status-dot${schemaReady ? " admin-status-dot--ok" : ""}`} />
            {schemaReady ? "All systems ready" : "Attention needed"}
          </div>
          <button type="button" className="admin-btn admin-btn--ghost admin-btn--sm" onClick={() => void refresh()} disabled={busy}>
            {busy ? "Checking…" : "Re-check"}
          </button>
        </div>
        <ul className="admin-checklist">
          {rows.map((row) => (
            <li key={row.label} className={row.ok ? "ok" : "bad"}>
              <span>{row.label}</span>
              <span>{row.ok ? row.ready : row.missing}</span>
            </li>
          ))}
        </ul>
        {health?.message ? <p className="admin-muted" style={{ marginTop: 12, marginBottom: 0 }}>{health.message}</p> : null}
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Existing Cloud content</h2>
        <p className="admin-card-desc">
          If listings or blog posts were imported before your account existed, they belong to another{" "}
          <code>author_id</code> and will not appear in your dashboard. Assign them to your account to manage them here.
          The public site is unaffected.
        </p>
        <button
          type="button"
          className="admin-btn admin-btn--ghost"
          disabled={assigning || !schemaReady}
          onClick={() => void onAssignExisting()}
        >
          {assigning ? "Assigning…" : "Assign existing content to me"}
        </button>
      </div>

      <div className="admin-card">
        <h2 className="admin-card-title">Import site content</h2>
        <p className="admin-card-desc">
          Import built-in listings and blog articles from the site codebase into Cloud. Safe to re-run — matching slugs are
          updated and ownership is set to your account.
        </p>
        <button type="button" className="admin-btn" disabled={seeding || !schemaReady} onClick={() => void onSeed()}>
          {seeding ? "Importing…" : "Import listings & posts"}
        </button>
      </div>

      {bypass ? (
        <div className="admin-card">
          <h2 className="admin-card-title">Local preview</h2>
          <p className="admin-card-desc" style={{ marginBottom: 0 }}>
            Password protection is bypassed in this environment. Turn off the local bypass flag before production use.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default function AdminSettingsPage() {
  return (
    <AdminGate>
      <SettingsInner />
    </AdminGate>
  );
}
