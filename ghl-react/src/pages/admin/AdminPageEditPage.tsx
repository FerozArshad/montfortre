import { FormEvent, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { AdminGate } from "../../admin/AdminGate";
import { adminFetchFreeformPageById, adminUpdateFreeformPageMeta } from "../../lib/cms/pages";
import { loadPageSeoOverride, savePageSeoOverride } from "../../lib/cms/pageSeoOverrides";
import { findBuiltInSitePage } from "../../lib/cms/sitePageStats";
import { slugify } from "../../lib/cms/sanitize";

function emptyForm() {
  return {
    title: "",
    slug: "",
    lead: "",
    meta_title: "",
    meta_description: "",
    og_image: "",
    published: false,
  };
}

function isUuid(id: string | undefined): boolean {
  return Boolean(id && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id));
}

function PageMetaFormInner() {
  const params = useParams<{ id?: string; slug?: string }>();
  const navigate = useNavigate();

  const seoKey = params.slug ? decodeURIComponent(params.slug) : null;
  const cmsId = isUuid(params.id) ? params.id! : null;
  const isNew = params.id === "new";
  const isSeoMode = Boolean(seoKey);

  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const [builtinTitle, setBuiltinTitle] = useState("");

  useEffect(() => {
    if (isNew) return;
    setError("");

    if (isSeoMode && seoKey) {
      const page = findBuiltInSitePage(seoKey);
      if (!page) {
        setError("Page not found in site inventory");
        return;
      }
      const o = loadPageSeoOverride(seoKey) || {};
      setBuiltinTitle(page.title);
      setForm({
        title: o.title?.trim() || page.title,
        slug: page.key === "home" ? "" : page.key,
        lead: "",
        meta_title: o.meta_title || "",
        meta_description: o.meta_description || "",
        og_image: o.og_image || "",
        published: true,
      });
      return;
    }

    if (!cmsId) return;

    (async () => {
      try {
        const row = await adminFetchFreeformPageById(cmsId);
        if (!row) {
          setError("Page not found");
          return;
        }
        setForm({
          title: row.title,
          slug: row.slug,
          lead: row.lead,
          meta_title: row.meta_title,
          meta_description: row.meta_description,
          og_image: "",
          published: row.published,
        });
      } catch (e) {
        setError(e instanceof Error ? e.message : "Load failed");
      }
    })();
  }, [isNew, isSeoMode, seoKey, cmsId]);

  if (isNew) {
    return <Navigate to="/admin/pages" replace />;
  }

  // Legacy /admin/pages/about-us → SEO editor
  if (params.id && !isUuid(params.id) && params.id !== "new" && !seoKey) {
    return <Navigate to={`/admin/pages/seo/${encodeURIComponent(params.id)}`} replace />;
  }

  function set<K extends keyof ReturnType<typeof emptyForm>>(key: K, value: ReturnType<typeof emptyForm>[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      if (isSeoMode && seoKey) {
        savePageSeoOverride(seoKey, {
          title: form.title.trim(),
          meta_title: form.meta_title.trim(),
          meta_description: form.meta_description.trim(),
          og_image: form.og_image.trim(),
        });
        setSaved(true);
        return;
      }

      if (!cmsId) throw new Error("Missing page id");
      const slug = form.slug.trim() || slugify(form.title);
      await adminUpdateFreeformPageMeta(cmsId, {
        title: form.title.trim(),
        slug,
        lead: form.lead.trim(),
        meta_title: form.meta_title.trim(),
        meta_description: form.meta_description.trim(),
        published: form.published,
      });
      setSaved(true);
      navigate(`/admin/pages/cms/${cmsId}`, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setBusy(false);
    }
  }

  const viewPath =
    isSeoMode && seoKey ? (seoKey === "home" ? "/" : `/${seoKey}/`) : form.slug ? `/${form.slug}/` : "/";

  return (
    <div className="admin-dash">
      <div className="admin-page-head admin-dash-head">
        <div>
          <p className="admin-kicker">Content</p>
          <h1>Edit page SEO</h1>
          <p className="admin-lede">
            Title and search metadata only
            {isSeoMode ? " — URL path is fixed for built-in site pages." : " — body content is not editable here."}
          </p>
        </div>
        <div className="admin-page-actions">
          <Link className="admin-btn admin-btn--ghost" to="/admin/pages">
            Back to pages
          </Link>
          <a className="admin-btn admin-btn--ghost" href={viewPath} target="_blank" rel="noreferrer">
            View live
          </a>
        </div>
      </div>

      {error ? <div className="admin-error">{error}</div> : null}
      {saved ? (
        <div className="admin-success">
          Saved. {isSeoMode ? "Public pages pick up meta overrides immediately." : "Content blocks were left unchanged."}
        </div>
      ) : null}

      <form className="admin-form" onSubmit={onSubmit}>
        <section className="admin-section">
          <div className="admin-section-head">
            <h2>Page details</h2>
            <p>{isSeoMode ? `Built-in page · ${builtinTitle || seoKey}` : "CMS freeform page title and URL."}</p>
          </div>
          <label>
            Title
            <input value={form.title} onChange={(e) => set("title", e.target.value)} required />
          </label>
          <label>
            URL slug
            <input
              value={isSeoMode ? (seoKey === "home" ? "(home /)" : seoKey || "") : form.slug}
              onChange={(e) => {
                if (!isSeoMode) set("slug", e.target.value);
              }}
              required={!isSeoMode}
              readOnly={isSeoMode}
              disabled={isSeoMode}
            />
          </label>
          {!isSeoMode ? (
            <label>
              Lead / summary
              <input
                value={form.lead}
                onChange={(e) => set("lead", e.target.value)}
                placeholder="Short intro under the title (optional)"
              />
            </label>
          ) : null}
        </section>

        <section className="admin-section">
          <div className="admin-section-head">
            <h2>Search & social meta</h2>
            <p>Overrides for browser tabs, Google snippets, and Open Graph cards.</p>
          </div>
          <label>
            Meta title
            <input
              value={form.meta_title}
              onChange={(e) => set("meta_title", e.target.value)}
              placeholder={form.title ? `${form.title} | Montfort Real Estate` : "Page title | Montfort Real Estate"}
            />
          </label>
          <label>
            Meta description
            <textarea
              rows={3}
              value={form.meta_description}
              onChange={(e) => set("meta_description", e.target.value)}
              placeholder="Up to ~160 characters for search results"
            />
          </label>
          {isSeoMode ? (
            <label>
              OG image URL (optional)
              <input
                value={form.og_image}
                onChange={(e) => set("og_image", e.target.value)}
                placeholder="https://… or /redesign-assets/…"
              />
            </label>
          ) : null}
        </section>

        <div className="admin-form-actions">
          {!isSeoMode ? (
            <label className="admin-check">
              <input type="checkbox" checked={form.published} onChange={(e) => set("published", e.target.checked)} />
              Published live
            </label>
          ) : (
            <span className="admin-muted">Built-in pages stay live; only SEO fields change.</span>
          )}
          <div className="admin-form-actions-right">
            <button className="admin-btn" type="submit" disabled={busy}>
              {busy ? "Saving…" : "Save metadata"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function AdminPageEditPage() {
  return (
    <AdminGate>
      <PageMetaFormInner />
    </AdminGate>
  );
}
