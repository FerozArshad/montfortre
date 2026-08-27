import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { AdminGate } from "../../admin/AdminGate";
import { BlogBodyEditor } from "../../admin/blocks/BlogBodyEditor";
import { MediaPickerModal } from "../../admin/blocks/MediaPickerModal";
import { CategoryPicker } from "../../admin/blog/CategoryPicker";
import BlogArticleLayout from "../../components/blog-article/BlogArticleLayout";
import type { BlogArticleMeta } from "../../components/blog-article/types";
import { adminFetchBlogById, adminUpsertBlogPost } from "../../lib/cms/blog";
import {
  blocksToHtml,
  createEmptyBlock,
  parseArticleBody,
  tocFromBlocks,
  type CmsBlock,
} from "../../lib/cms/blocks";
import { slugify } from "../../lib/cms/sanitize";
import { uploadCmsImage } from "../../lib/cms/upload";

type BlogSectionId = "details" | "featured" | "body" | "page";

const SECTIONS: { id: BlogSectionId; label: string }[] = [
  { id: "details", label: "Details" },
  { id: "featured", label: "Featured image" },
  { id: "body", label: "Body" },
  { id: "page", label: "Page settings" },
];

type BlogForm = {
  slug: string;
  h1: string;
  lead: string;
  category: string;
  author_name: string;
  author_href: string;
  author_role: string;
  featured_image_src: string;
  featured_image_alt: string;
  blocks: CmsBlock[];
  published: boolean;
  meta_title: string;
  meta_description: string;
  show_hero_ctas: boolean;
};

function demoBlogForm(title = "", slug = ""): BlogForm {
  const h1 = title.trim() || "Demo article title — Harlem market notes";
  return {
    slug: slug.trim() || slugify(h1) || "demo-blog-preview",
    h1,
    lead: "Placeholder lead — this is the hero summary under the title. Edit it in Design → Details; the canvas updates live.",
    category: "Market Report",
    author_name: "Stanley Montfort",
    author_href: "/stanley-montfort/",
    author_role: "Real Estate Advisor®",
    featured_image_src: "/redesign-assets/hoods/harlem.webp",
    featured_image_alt: h1,
    blocks: [
      { ...createEmptyBlock("heading"), level: 2, text: "Where this heading appears" },
      {
        ...createEmptyBlock("text"),
        html: "<p>Placeholder body paragraph — add blocks in Design → Body. Nothing is saved until you click Save.</p>",
      },
      {
        ...createEmptyBlock("text"),
        html: "<p>Second placeholder paragraph for spacing on the live Montfort blog layout.</p>",
      },
    ] as CmsBlock[],
    published: false,
    meta_title: "",
    meta_description: "",
    show_hero_ctas: true,
  };
}

function emptyBlogForm(): BlogForm {
  return {
    slug: "",
    h1: "",
    lead: "",
    category: "News",
    author_name: "Stanley Montfort",
    author_href: "/stanley-montfort/",
    author_role: "Real Estate Advisor®",
    featured_image_src: "",
    featured_image_alt: "",
    blocks: [createEmptyBlock("text")],
    published: false,
    meta_title: "",
    meta_description: "",
    show_hero_ctas: true,
  };
}

const HISTORY_MAX = 40;

function cloneForm(form: BlogForm): BlogForm {
  return structuredClone(form);
}

function SparkBlogInner() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const isNew = !id || id === "new";
  const navigate = useNavigate();
  const [form, setForm] = useState(() =>
    isNew
      ? demoBlogForm(searchParams.get("title") || "", searchParams.get("slug") || "")
      : emptyBlogForm(),
  );
  const [section, setSection] = useState<BlogSectionId>("details");
  const [panelOpen, setPanelOpen] = useState(true);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [savedFlash, setSavedFlash] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [historyLen, setHistoryLen] = useState(0);
  const historyRef = useRef<BlogForm[]>([]);
  const skipHistory = useRef(false);

  const deferred = useDeferredValue(form);
  const preview = useMemo(() => {
    const slug = deferred.slug.trim() || slugify(deferred.h1) || "draft";
    const blocks = deferred.blocks;
    const bodyHtml = blocksToHtml(blocks);
    const toc = tocFromBlocks(blocks);
    const meta: BlogArticleMeta = {
      slug,
      h1: deferred.h1.trim() || "Untitled article",
      lead: deferred.lead,
      category: deferred.category || "News",
      authorName: deferred.author_name,
      authorHref: deferred.author_href,
      authorRole: deferred.author_role,
      featuredImageSrc: deferred.featured_image_src || "/redesign-assets/hoods/harlem.webp",
      featuredImageAlt: deferred.featured_image_alt || deferred.h1 || "Article",
      shareUrl: `https://montfortre.com/${slug}/`,
      toc,
      showHeroCtas: deferred.show_hero_ctas,
    };
    return { meta, bodyHtml };
  }, [deferred]);

  useEffect(() => {
    if (isNew) {
      setForm(demoBlogForm(searchParams.get("title") || "", searchParams.get("slug") || ""));
      historyRef.current = [];
      setHistoryLen(0);
      setDirty(false);
      return;
    }
    (async () => {
      try {
        const row = await adminFetchBlogById(id!);
        if (!row) {
          setError("Post not found");
          return;
        }
        skipHistory.current = true;
        setForm({
          slug: row.slug,
          h1: row.h1,
          lead: row.lead,
          category: row.category,
          author_name: row.author_name,
          author_href: row.author_href,
          author_role: row.author_role,
          featured_image_src: row.featured_image_src,
          featured_image_alt: row.featured_image_alt,
          blocks: row.blocks?.length ? row.blocks : parseArticleBody(row.body_html),
          published: row.published,
          meta_title: row.meta_title || "",
          meta_description: row.meta_description || "",
          show_hero_ctas: row.show_hero_ctas !== false,
        });
        historyRef.current = [];
        setHistoryLen(0);
        setDirty(false);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Load failed");
      }
    })();
  }, [id, isNew, searchParams]);

  function pushHistory(prev: BlogForm) {
    if (skipHistory.current) {
      skipHistory.current = false;
      return;
    }
    historyRef.current = [...historyRef.current.slice(-(HISTORY_MAX - 1)), cloneForm(prev)];
    setHistoryLen(historyRef.current.length);
  }

  function patchForm(updater: (prev: BlogForm) => BlogForm) {
    setForm((prev) => {
      pushHistory(prev);
      setDirty(true);
      return updater(prev);
    });
  }

  function setField<K extends keyof BlogForm>(key: K, value: BlogForm[K]) {
    patchForm((prev) => ({ ...prev, [key]: value }));
  }

  function undo() {
    const prev = historyRef.current.pop();
    if (!prev) return;
    skipHistory.current = true;
    setForm(prev);
    setHistoryLen(historyRef.current.length);
    setDirty(true);
  }

  function onExit() {
    if (dirty && !window.confirm("Leave without saving? Unsaved changes will be lost.")) return;
    navigate("/admin/blog");
  }

  async function onSave() {
    setBusy(true);
    setError("");
    try {
      if (!form.h1.trim()) throw new Error("Add a title before saving");
      const slug = form.slug.trim() || slugify(form.h1);
      const row = await adminUpsertBlogPost(
        {
          slug,
          h1: form.h1.trim(),
          lead: form.lead.trim(),
          category: form.category,
          author_name: form.author_name,
          author_href: form.author_href,
          author_role: form.author_role,
          featured_image_src: form.featured_image_src,
          featured_image_alt: form.featured_image_alt || form.h1,
          share_url: `https://montfortre.com/${slug}/`,
          blocks: form.blocks,
          published: form.published,
          meta_title: form.meta_title || null,
          meta_description: form.meta_description || null,
        },
        isNew ? undefined : id,
      );
      setDirty(false);
      setSavedFlash(true);
      window.setTimeout(() => setSavedFlash(false), 1600);
      if (isNew || row.id !== id) navigate(`/admin/blog/${row.id}`, { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setBusy(false);
    }
  }

  async function onImage(file: File | null) {
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const url = await uploadCmsImage("blog-images", file);
      patchForm((prev) => ({
        ...prev,
        featured_image_src: url,
        featured_image_alt: prev.featured_image_alt || prev.h1 || file.name,
      }));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  const titleLabel = form.h1.trim() || (isNew ? "New article" : "Edit article");

  return (
    <div className="spark-root">
      <div className="spark-topbar" role="banner">
        <div className="spark-topbar-left">
          <span className="spark-brand">Blog</span>
          <span className="spark-title" title={titleLabel}>
            {titleLabel}
          </span>
          {isNew ? <span className="spark-dirty">Demo preview — not saved</span> : null}
          {dirty ? <span className="spark-dirty">Unsaved</span> : null}
          {savedFlash ? <span className="spark-saved">Saved</span> : null}
        </div>
        <div className="spark-topbar-right">
          <button type="button" className="spark-btn spark-btn--ghost" onClick={undo} disabled={!historyLen}>
            Undo
          </button>
          <button type="button" className="spark-btn spark-btn--ghost" onClick={() => setPanelOpen((v) => !v)}>
            {panelOpen ? "Hide design" : "Design"}
          </button>
          <button type="button" className="spark-btn spark-btn--ghost" onClick={onExit}>
            Exit
          </button>
          <button type="button" className="spark-btn spark-btn--save" onClick={() => void onSave()} disabled={busy}>
            {busy ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      {error ? <div className="spark-error">{error}</div> : null}

      <div className={`spark-body${panelOpen ? "" : " spark-body--full"}`}>
        <div className="spark-canvas spark-canvas--blog" aria-label="Live article preview">
          <div className="spark-canvas-scale blog-article-page brownstone-guide-page">
            <BlogArticleLayout meta={preview.meta} bodyHtml={preview.bodyHtml} />
          </div>
        </div>

        {panelOpen ? (
          <aside className="spark-panel" aria-label="Design">
            <div className="spark-panel-head">
              <strong>Design</strong>
              <button type="button" className="spark-panel-close" onClick={() => setPanelOpen(false)} aria-label="Close design panel">
                ×
              </button>
            </div>
            <div className="spark-accordion">
              {SECTIONS.map((s) => {
                const open = section === s.id;
                return (
                  <div key={s.id} className={`spark-acc${open ? " is-open" : ""}`}>
                    <button type="button" className="spark-acc-trigger" aria-expanded={open} onClick={() => setSection(s.id)}>
                      <span>{s.label}</span>
                      <span aria-hidden="true">{open ? "▴" : "▾"}</span>
                    </button>
                    {open ? (
                      <div className="spark-acc-body">
                        {s.id === "details" ? (
                          <>
                            <label>
                              Title
                              <input
                                value={form.h1}
                                onChange={(e) => {
                                  const h1 = e.target.value;
                                  patchForm((prev) => ({
                                    ...prev,
                                    h1,
                                    slug: isNew && !prev.slug ? slugify(h1) : prev.slug,
                                  }));
                                }}
                              />
                            </label>
                            <label>
                              URL slug
                              <input value={form.slug} onChange={(e) => setField("slug", e.target.value)} />
                            </label>
                            <CategoryPicker value={form.category} onChange={(category) => setField("category", category)} />
                            <label>
                              Lead
                              <textarea value={form.lead} onChange={(e) => setField("lead", e.target.value)} rows={4} />
                            </label>
                            <label>
                              Author
                              <input value={form.author_name} onChange={(e) => setField("author_name", e.target.value)} />
                            </label>
                            <label className="spark-check">
                              <input
                                type="checkbox"
                                checked={form.show_hero_ctas}
                                onChange={(e) => setField("show_hero_ctas", e.target.checked)}
                              />
                              Show hero CTAs
                            </label>
                          </>
                        ) : null}

                        {s.id === "featured" ? (
                          <>
                            <p className="spark-muted">Stores image URL + alt only. Pick from the site media library or upload a new file.</p>
                            <div className="spark-media-actions">
                              <button type="button" className="spark-btn spark-btn--ghost spark-btn--block" onClick={() => setMediaOpen(true)}>
                                Choose from media library
                              </button>
                            </div>
                            <label>
                              Upload new image
                              <input
                                type="file"
                                accept="image/jpeg,image/png,image/webp,image/gif"
                                onChange={(e) => void onImage(e.target.files?.[0] || null)}
                              />
                              {uploading ? <span className="spark-muted">Uploading…</span> : null}
                            </label>
                            <label>
                              Image URL
                              <input
                                value={form.featured_image_src}
                                onChange={(e) => setField("featured_image_src", e.target.value)}
                              />
                            </label>
                            <label>
                              Alt text
                              <input
                                value={form.featured_image_alt}
                                onChange={(e) => setField("featured_image_alt", e.target.value)}
                              />
                            </label>
                            {form.featured_image_src ? (
                              <img className="spark-thumb" src={form.featured_image_src} alt="" />
                            ) : null}
                          </>
                        ) : null}

                        {s.id === "body" ? (
                          <div className="spark-blog-blocks">
                            <BlogBodyEditor
                              blocks={form.blocks}
                              onChange={(blocks) => setField("blocks", blocks)}
                              permalink={
                                form.slug.trim()
                                  ? `https://montfortre.com/${form.slug.trim()}/`
                                  : undefined
                              }
                            />
                          </div>
                        ) : null}

                        {s.id === "page" ? (
                          <>
                            <label className="spark-check">
                              <input
                                type="checkbox"
                                checked={form.published}
                                onChange={(e) => setField("published", e.target.checked)}
                              />
                              Publish live
                            </label>
                            <label>
                              Meta title
                              <input value={form.meta_title} onChange={(e) => setField("meta_title", e.target.value)} />
                            </label>
                            <label>
                              Meta description
                              <input
                                value={form.meta_description}
                                onChange={(e) => setField("meta_description", e.target.value)}
                              />
                            </label>
                          </>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </aside>
        ) : null}
      </div>

      <MediaPickerModal
        open={mediaOpen}
        title="Choose featured image"
        onClose={() => setMediaOpen(false)}
        onSelect={(url, alt) => {
          patchForm((prev) => ({
            ...prev,
            featured_image_src: url,
            featured_image_alt: alt || prev.featured_image_alt || prev.h1,
          }));
        }}
      />
    </div>
  );
}

export default function AdminBlogEditPage() {
  return (
    <AdminGate>
      <SparkBlogInner />
    </AdminGate>
  );
}
