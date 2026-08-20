import BlogArticleLayout from "../components/blog-article/BlogArticleLayout";
import PageShell from "../layouts/PageShell";
import type { BlogArticleModule } from "../components/blog-article/types";

interface BlogArticlePageProps {
  article: BlogArticleModule;
}

export default function BlogArticlePage({ article }: BlogArticlePageProps) {
  return (
    <PageShell seo={article.seo} pageClassName="blog-article-page brownstone-guide-page">
      <BlogArticleLayout meta={article.meta} bodyHtml={article.bodyHtml} afterBody={article.afterBody} />
    </PageShell>
  );
}
