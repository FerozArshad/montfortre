import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import BlogArticleLayout from "../components/blog-article/BlogArticleLayout";
import BlockPageRenderer from "../components/cms/BlockPageRenderer";
import ListingPageContent from "../components/listing/ListingPageContent";
import type { BlogArticleModule } from "../components/blog-article/types";
import type { ListingDetail } from "../data/listings/types";
import { fetchPublishedBlogBySlug } from "../lib/cms/blog";
import { fetchPublishedListingBySlug } from "../lib/cms/listings";
import { fetchPublishedFreeformPageBySlug, type PublishedFreeformPage } from "../lib/cms/pages";
import PageShell from "../layouts/PageShell";
import NotMigrated from "./NotMigrated";
import { buildListingSeo } from "../seo/pages/buildListingSeo";
import { LOADING_SEO } from "../lib/cms/loadingSeo";

/**
 * Catch-all for CMS-only slugs.
 * Resolve order: listing → freeform page → blog post.
 */
export default function CmsSlugPage() {
  const { slug = "" } = useParams();
  const [listing, setListing] = useState<ListingDetail | null | undefined>(undefined);
  const [page, setPage] = useState<PublishedFreeformPage | null>(null);
  const [blog, setBlog] = useState<BlogArticleModule | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const clean = slug.replace(/^\/+|\/+$/g, "");
      if (!clean) {
        if (!cancelled) setListing(null);
        return;
      }
      const list = await fetchPublishedListingBySlug(clean);
      if (cancelled) return;
      if (list) {
        setListing(list);
        setPage(null);
        setBlog(null);
        return;
      }
      const freeform = await fetchPublishedFreeformPageBySlug(clean);
      if (cancelled) return;
      if (freeform) {
        setListing(null);
        setPage(freeform);
        setBlog(null);
        return;
      }
      const post = await fetchPublishedBlogBySlug(clean);
      if (cancelled) return;
      setListing(null);
      setPage(null);
      setBlog(post);
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (listing === undefined) {
    return (
      <PageShell seo={LOADING_SEO}>
        <p style={{ padding: "4rem 1.5rem", textAlign: "center" }}>Loading…</p>
      </PageShell>
    );
  }

  if (listing) {
    return (
      <PageShell seo={buildListingSeo(listing)} pageClassName="listing-page">
        <ListingPageContent listing={listing} />
      </PageShell>
    );
  }

  if (page) {
    return (
      <PageShell seo={page.seo} pageClassName="cms-block-page-shell">
        <BlockPageRenderer title={page.title} lead={page.lead} blocks={page.blocks} />
      </PageShell>
    );
  }

  if (blog) {
    return (
      <PageShell seo={blog.seo} pageClassName="blog-article-page brownstone-guide-page">
        <BlogArticleLayout meta={blog.meta} bodyHtml={blog.bodyHtml} afterBody={blog.afterBody} />
      </PageShell>
    );
  }

  if (!slug || slug.includes("/")) return <Navigate to="/" replace />;
  return <NotMigrated />;
}
