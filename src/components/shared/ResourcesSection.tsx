const BLOG_ARTICLES = [
  {
    href: "/upper-west-side-townhouse-q2-2024-market-report/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Upper West Side Townhouse Q2 2024 Market Report",
    category: "Market Report",
    title: "Upper West Side Townhouse Q2 2024 Market Report",
    excerpt: "On the Upper West Side, we observed a distinct trend that diverges from the citywide patterns…",
  },
  {
    href: "/harlem-brownstone-q2-2024-market-report/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Harlem Brownstone Q2 2024 Market Report",
    category: "Market Report",
    title: "Harlem Brownstone Q2 2024 Market Report",
    excerpt: "The Harlem brownstone market has seen an increase in sales activity since this time last year…",
  },
  {
    href: "/discover-your-dream-home-explore-apartments-for-sale-on-the-upper-west-side/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "Explore Apartments for Sale on the Upper West Side",
    category: "Buyer Guide",
    title: "Discover Your Dream Home: Apartments for Sale on the Upper West Side",
    excerpt: "Searching for your dream home in one of New York City's most sought-after neighborhoods?…",
  },
] as const;

export default function ResourcesSection() {
  return (
    <section data-screen-label="Resources" style={{ background: "#F5EECB", padding: "120px 64px", borderTop: "1px solid #E0D9B8" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div data-reveal="" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 56 }}>
          <div style={{ maxWidth: 760 }}>
            <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 46, lineHeight: 1.2, letterSpacing: "-0.008em", color: "#0F1729", margin: 0, textWrap: "pretty" }}>Recent News &amp; Realtor Advice</h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#3B4C5E", margin: "16px 0 0" }}>Stay in the loop on the latest events, news, &amp; happenings in and around our community!</p>
          </div>
          <a
            href="/blog/"
            style={{ fontSize: 13, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#113B5F", whiteSpace: "nowrap", borderBottom: "2px solid #C98A2C", paddingBottom: 5 }}
            {...{ "style-hover": "border-bottom-color:#0F1729" }}
          >
            All resources
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 44, marginTop: 56, paddingTop: 52, borderTop: "2px solid #0F1729" }}>
          {BLOG_ARTICLES.map((article) => (
            <a key={article.href} data-reveal="" href={article.href} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ aspectRatio: "5/3", borderRadius: 16, overflow: "hidden", background: "#E0D9B8" }}>
                <img
                  src={article.image}
                  alt={article.alt}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 1s cubic-bezier(0.22,0.61,0.36,1)" }}
                  {...{ "style-hover": "transform:scale(1.05)" }}
                />
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#C98A2C", marginTop: 22 }}>{article.category}</div>
              <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 23, lineHeight: 1.32, color: "#0F1729", marginTop: 12, textWrap: "pretty" }}>{article.title}</div>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "#3B4C5E", margin: "12px 0 0", textWrap: "pretty" }}>{article.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 18, fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#113B5F" }}>
                Read article <span style={{ color: "#C98A2C" }}>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
