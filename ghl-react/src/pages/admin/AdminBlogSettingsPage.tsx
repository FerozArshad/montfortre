import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdminGate } from "../../admin/AdminGate";
import { BlogHubChrome } from "../../admin/blog/BlogHubChrome";
import {
  BLOG_CATEGORIES,
  DEFAULT_BLOG_HUB_SETTINGS,
  loadBlogHubSettings,
  saveBlogHubSettings,
  type BlogHubSettings,
} from "../../admin/blog/blogHubSettings";
import { fetchBlogCategories } from "../../lib/cms/blog";

function BlogSettingsInner() {
  const [form, setForm] = useState<BlogHubSettings>(DEFAULT_BLOG_HUB_SETTINGS);
  const [saved, setSaved] = useState(false);
  const [categories, setCategories] = useState<string[]>([...BLOG_CATEGORIES]);

  useEffect(() => {
    setForm(loadBlogHubSettings());
    void fetchBlogCategories()
      .then((rows) => {
        const names = rows.map((r) => r.name).filter(Boolean);
        if (names.length) {
          setCategories(Array.from(new Set([...BLOG_CATEGORIES, ...names])));
        }
      })
      .catch(() => {
        /* local defaults */
      });
  }, []);

  function setField<K extends keyof BlogHubSettings>(key: K, value: BlogHubSettings[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  function onSave(e: FormEvent) {
    e.preventDefault();
    saveBlogHubSettings(form);
    setSaved(true);
  }

  return (
    <BlogHubChrome
      title="Blog settings"
      lede="Defaults for new articles — author, category, and hub options."
      actions={
        <Link className="admin-btn admin-btn--ghost" to="/admin/blog">
          Back to articles
        </Link>
      }
    >
      {saved ? <div className="admin-success">Settings saved for this browser.</div> : null}

      <form className="admin-form" onSubmit={onSave}>
        <section className="admin-section">
          <div className="admin-section-head">
            <h2>New article defaults</h2>
            <p>Applied when you create a custom article (not Content Magic).</p>
          </div>
          <div className="admin-form-row">
            <label>
              Default author name
              <input
                value={form.defaultAuthorName}
                onChange={(e) => setField("defaultAuthorName", e.target.value)}
              />
            </label>
            <label>
              Author profile URL
              <input
                value={form.defaultAuthorHref}
                onChange={(e) => setField("defaultAuthorHref", e.target.value)}
              />
            </label>
          </div>
          <div className="admin-form-row">
            <label>
              Author role line
              <input
                value={form.defaultAuthorRole}
                onChange={(e) => setField("defaultAuthorRole", e.target.value)}
              />
            </label>
            <label>
              Default category
              <select
                value={form.defaultCategory}
                onChange={(e) => setField("defaultCategory", e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <section className="admin-section">
          <div className="admin-section-head">
            <h2>Categories</h2>
            <p>
              Cloud categories sync when available. New names are also created when you save an article.
            </p>
          </div>
          <ul className="admin-tag-list">
            {categories.map((cat) => (
              <li key={cat} className="admin-tag">
                {cat}
              </li>
            ))}
          </ul>
        </section>

        <section className="admin-section">
          <div className="admin-section-head">
            <h2>Content Magic</h2>
            <p>AgentFire Plus AI tools (RSS, Blog About This, scratch outline) are not wired yet.</p>
          </div>
          <p className="admin-muted" style={{ margin: 0 }}>
            Use <strong>+ New article → Create custom article</strong> for now.
          </p>
        </section>

        <div className="admin-form-actions">
          <div className="admin-form-actions-right">
            <button type="submit" className="admin-btn">
              Save settings
            </button>
          </div>
        </div>
      </form>
    </BlogHubChrome>
  );
}

export default function AdminBlogSettingsPage() {
  return (
    <AdminGate>
      <BlogSettingsInner />
    </AdminGate>
  );
}
