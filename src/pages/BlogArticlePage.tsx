import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import BlogArticleLayout from "../components/blog-article/BlogArticleLayout";
import type { BlogArticleModule } from "../components/blog-article/types";
import { fetchPublishedBlogBySlug } from "../lib/cms/blog";
import { LOADING_SEO } from "../lib/cms/loadingSeo";
import PageShell from "../layouts/PageShell";

interface BlogArticlePageProps {
  /** When set (static registry route), used as fallback while CMS loads / if CMS empty. */
  article?: BlogArticleModule;
  slug?: string;
}

export default function BlogArticlePage({ article: staticArticle, slug: slugProp }: BlogArticlePageProps) {
  const params = useParams();
  const slug = slugProp || params.slug || staticArticle?.meta.slug || "";
  const [article, setArticle] = useState<BlogArticleModule | null | undefined>(
    staticArticle && !slugProp ? staticArticle : undefined,
  );

  useEffect(() => {
    if (!slug) {
      setArticle(staticArticle ?? null);
      return;
    }
    let cancelled = false;
    (async () => {
      const fromCms = await fetchPublishedBlogBySlug(slug);
      if (!cancelled) setArticle(fromCms ?? staticArticle ?? null);
    })();
    return () => {
      cancelled = true;
    };
  }, [slug, staticArticle]);

  if (article === undefined) {
    return (
      <PageShell seo={LOADING_SEO} pageClassName="blog-article-page brownstone-guide-page">
        <p style={{ padding: "4rem 1.5rem", textAlign: "center" }}>Loading article…</p>
      </PageShell>
    );
  }

  if (!article) return <Navigate to="/blog" replace />;

  return (
    <PageShell seo={article.seo} pageClassName="blog-article-page brownstone-guide-page">
      <BlogArticleLayout meta={article.meta} bodyHtml={article.bodyHtml} afterBody={article.afterBody} />
    </PageShell>
  );
}
