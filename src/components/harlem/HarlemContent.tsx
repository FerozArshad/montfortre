import { useRef, useState } from "react";
import HarlemSchools from "../HarlemSchools";
import ContactSection from "../shared/ContactSection";
import ResourcesSection from "../shared/ResourcesSection";

const FORM_FIELD = {
  background: "rgba(249,246,230,0.1)",
  border: "1px solid rgba(201,138,44,0.45)",
  borderRadius: 10,
  padding: "15px 16px",
  fontFamily: "inherit",
  fontSize: 15.5,
  color: "#F9F6E6",
  minHeight: 52,
} as const;

const PROPERTY_TYPES = [
  {
    href: "/featured-brownstones-for-sale/harlem-brownstones/",
    image: "/redesign-assets/hoods/harlem-brownstones.webp",
    alt: "Harlem Brownstones",
    title: "Harlem Brownstones",
    copy: "Historic architecture, timeless charm, and classic Harlem living.",
  },
  {
    href: "/buying-a-condo-in-nyc/",
    image: "/redesign-assets/hoods/harlem-condos.webp",
    alt: "Harlem Condos",
    title: "Harlem Condos",
    copy: "Modern amenities, urban convenience, and vibrant Harlem living.",
  },
  {
    href: "/buying-sro-in-nyc/",
    image: "/redesign-assets/hoods/harlem-sros.webp",
    alt: "Harlem SROs",
    title: "Harlem SROs",
    copy: "Affordable housing, investment potential, and unique opportunities.",
  },
  {
    href: "/co-ownership-buying-in-nyc/",
    image: "/redesign-assets/hoods/harlem-coownership.webp",
    alt: "Harlem Co-Ownership",
    title: "Harlem Co-Ownership",
    copy: "Shared ownership, lower costs, and greater buying power.",
  },
] as const;

const STATS = [
  { value: "338,411", label: "Residents", last: false, first: true },
  { value: "18%", label: "Homeowners", last: false, first: false },
  { value: "39", label: "Average age", last: false, first: false },
  { value: "$659K", label: "Avg. sold price · 30 days", last: true, first: false },
] as const;

const EXPLORE_LINKS = ["Featured listings", "Market report", "Around the area", "Local advice"] as const;

type AreaPlace = {
  href: string;
  name: string;
  reviews: string;
  starWidth: string;
  image?: string;
};

const SHOP_PLACES: AreaPlace[] = [
  { href: "https://www.yelp.com/biz/tj-maxx-columbus-village", name: "TJ Maxx", reviews: "78 reviews", starWidth: "60.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/mkNZJbYk0NkpVlJztaob4Q/l.jpg" },
  { href: "https://www.yelp.com/biz/ridge-hill-yonkers", name: "Ridge Hill", reviews: "224 reviews", starWidth: "50.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/nfTVuNBiQcK6y51LjpkjHQ/l.jpg" },
  { href: "https://www.yelp.com/biz/unique-boutique-third-avenue-new-york", name: "Unique Boutique Third Avenue", reviews: "44 reviews", starWidth: "90.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/TWcqcVMgkWermK6tTvGyBQ/l.jpg" },
  { href: "https://www.yelp.com/biz/the-westchester-white-plains", name: "The Westchester", reviews: "192 reviews", starWidth: "70.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/J6okgYAWaGyqQX2Am813eQ/l.jpg" },
  { href: "https://www.yelp.com/biz/chelsea-flea-market-new-york-2", name: "Chelsea Flea Market", reviews: "55 reviews", starWidth: "60.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/F784pclJAsG96PxQoDgs9Q/l.jpg" },
  { href: "https://www.yelp.com/biz/homegoods-new-york-2", name: "HomeGoods", reviews: "111 reviews", starWidth: "70.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/XzK9nvaCUoiGGKW0BIKrgg/l.jpg" },
  { href: "https://www.yelp.com/biz/pinstripe-collectible-bronx", name: "Pinstripe Collectible", reviews: "4 reviews", starWidth: "100.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/DRO77kIGK-x47UxqyFDIkQ/l.jpg" },
  { href: "https://www.yelp.com/biz/city-place-edgewater", name: "City Place", reviews: "10 reviews", starWidth: "80.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/YjzB1-Ph-dcSdGCtRD4siQ/l.jpg" },
  { href: "https://www.yelp.com/biz/eglance-bookstore-flushing", name: "Eglance Bookstore", reviews: "10 reviews", starWidth: "90.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/DBkjvkItdfi84gObNnatxg/l.jpg" },
  { href: "https://www.yelp.com/biz/pier-village-long-branch", name: "Pier Village", reviews: "82 reviews", starWidth: "60.0%", image: "https://s3-media0.fl.yelpcdn.com/bphoto/E5cGGCi9mmmVVChTT8ggGw/l.jpg" },
];

const DINE_PLACES: AreaPlace[] = [
  { href: "https://www.yelp.com/biz/greedy-pot-new-york", name: "Greedy Pot", reviews: "79 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/indomable-coffee-new-york-2", name: "Indomable Coffee", reviews: "40 reviews", starWidth: "100.0%" },
  { href: "https://www.yelp.com/biz/lechonera-la-isla-new-york-2", name: "Lechonera La Isla", reviews: "125 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/harlemite-peruvian-cuisine-new-york-2", name: "Harlemite Peruvian Cuisine", reviews: "161 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/piccola-cucina-uptown-new-york", name: "Piccola Cucina Uptown", reviews: "628 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/maisonetta-bronx", name: "Maisonetta", reviews: "111 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/cocotazo-new-york", name: "Cocotazo", reviews: "92 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/el-patio-de-fela-new-york", name: "El Patio de Fela", reviews: "17 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/nobody-told-me-new-york", name: "Nobody Told Me", reviews: "311 reviews", starWidth: "90.0%" },
  { href: "https://www.yelp.com/biz/the-eighty-six-new-york", name: "The Eighty Six", reviews: "24 reviews", starWidth: "100.0%" },
];

const SHARE_HOVER = { "style-hover": "background:#113B5F; color:#F9F6E6; border-color:#113B5F" };
const CARD_HOVER = { "style-hover": "transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C" };

function ShareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UtensilIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v4M9.5 3v4M4.5 3v4a2 2 0 0 0 2 2M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarRating({ width }: { width: string }) {
  return (
    <span style={{ position: "relative", display: "inline-block", color: "rgba(255,255,255,0.35)", fontSize: 15, letterSpacing: 2, lineHeight: 1 }}>
      ★★★★★
      <span style={{ position: "absolute", left: 0, top: 0, overflow: "hidden", whiteSpace: "nowrap", color: "#F5A623", width }}>★★★★★</span>
    </span>
  );
}

async function sharePlace(url: string, name: string) {
  try {
    if (navigator.share) {
      await navigator.share({ title: name, url });
      return;
    }
  } catch {
    return;
  }
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

const shareBtnStyle = {
  marginTop: 12,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  background: "transparent",
  border: "1px solid #E0D9B8",
  color: "#113B5F",
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  borderRadius: 100,
  padding: "11px 16px",
  cursor: "pointer",
  transition: "background .2s ease, color .2s ease",
};

function AreaCard({ place, variant }: { place: AreaPlace; variant: "shop" | "dine" }) {
  return (
    <div style={{ scrollSnapAlign: "start", flex: "0 0 300px", display: "flex", flexDirection: "column" }}>
      <a
        href={place.href}
        target="_blank"
        rel="noopener nofollow"
        style={{
          position: "relative",
          display: "block",
          aspectRatio: "4/3",
          borderRadius: 16,
          overflow: "hidden",
          background: variant === "shop" ? "#0B1220" : "linear-gradient(135deg,#113B5F 0%,#0B1220 100%)",
          boxShadow: "0 20px 44px rgba(0,0,0,0.35)",
        }}
      >
        {place.image ? (
          <>
            <img src={place.image} alt={place.name} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,23,41,0) 40%, rgba(15,23,41,0.9) 100%)" }} />
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "16px 18px" }}>
              <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: "0.03em", textTransform: "uppercase", color: "#fff", lineHeight: 1.25, textWrap: "pretty" }}>{place.name}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 8 }}>
                <StarRating width={place.starWidth} />
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>{place.reviews}</span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ position: "absolute", top: 16, right: 18, color: "rgba(201,138,44,0.85)" }}>
              <UtensilIcon />
            </div>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: 18 }}>
              <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 16, letterSpacing: "0.03em", textTransform: "uppercase", color: "#fff", lineHeight: 1.25, textWrap: "pretty" }}>{place.name}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 10 }}>
                <StarRating width={place.starWidth} />
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>{place.reviews}</span>
              </div>
            </div>
          </>
        )}
      </a>
      <button
        type="button"
        className="area-share"
        data-url={place.href}
        data-name={place.name}
        onClick={() => void sharePlace(place.href, place.name)}
        style={shareBtnStyle}
        {...SHARE_HOVER}
      >
        <ShareIcon />
        Share
      </button>
    </div>
  );
}

export default function HarlemContent() {
  const [areaCat, setAreaCat] = useState<"shop" | "dine">("shop");
  const shopTrackRef = useRef<HTMLDivElement>(null);
  const dineTrackRef = useRef<HTMLDivElement>(null);

  const scrollArea = (dir: -1 | 1) => {
    const track = areaCat === "shop" ? shopTrackRef.current : dineTrackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.getBoundingClientRect().width + 22 : 322;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const chipBase = {
    fontSize: 12.5,
    fontWeight: 700,
    letterSpacing: "0.04em",
    borderRadius: 100,
    padding: "9px 20px",
    cursor: "pointer" as const,
    transition: "background .2s ease, color .2s ease, border-color .2s ease",
  };

  return (
    <>
      <section data-screen-label="Harlem hero" style={{ position: "relative", background: "#F5EECB", borderBottom: "1px solid #E0D9B8", overflow: "hidden", padding: "80px 64px 90px" }}>
        <div style={{ position: "absolute", top: -150, right: -160, width: 560, height: 560, borderRadius: "50%", border: "1px solid rgba(201,138,44,0.2)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1.02fr 0.98fr", gap: 72, alignItems: "center" }}>
          <div data-reveal="">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#8A7B4E" }}>
              <a href="/neighborhoods/" style={{ color: "#8A7B4E" }}>Neighborhoods</a> <span style={{ opacity: 0.5 }}>/</span> <span style={{ color: "#C98A2C" }}>Manhattan</span>
            </div>
            <h1 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 62, lineHeight: 1.04, letterSpacing: "-0.02em", color: "#0F1729", margin: "18px 0 0", textWrap: "pretty" }}>Harlem Realtor</h1>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "#3B4C5E", margin: "22px 0 0", maxWidth: 560, textWrap: "pretty" }}>
              One of New York City&apos;s most vibrant, historically rich neighborhoods, where classic brownstones, pre-war buildings, and new developments meet a world-famous arts and culture scene.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
              <a
                href="https://calendly.com/montfort"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#113B5F", color: "#F9F6E6", fontSize: 15, fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: 100, padding: "18px 34px", minHeight: 56 }}
                {...{ "style-hover": "background:#C98A2C; color:#0F1729" }}
              >
                Book Now
              </a>
              <a
                href="tel:646-970-1078"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "2px solid #113B5F", color: "#113B5F", fontSize: 15, fontWeight: 800, letterSpacing: "0.03em", borderRadius: 100, padding: "16px 30px", minHeight: 56 }}
                {...{ "style-hover": "background:#113B5F; color:#F9F6E6" }}
              >
                (646) 970-1078
              </a>
            </div>
            <div style={{ marginTop: 38, paddingTop: 26, borderTop: "1px solid #D9CFA6" }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A7B4E" }}>Explore Harlem</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px 32px", marginTop: 16 }}>
                {EXPLORE_LINKS.map((label) => (
                  <a key={label} href="/harlem/" style={{ fontSize: 15.5, fontWeight: 600, color: "#0F1729" }} {...{ "style-hover": "color:#C98A2C" }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div data-reveal="" style={{ position: "relative" }}>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "5/4", background: "#E0D9B8", border: "6px solid #FFFFFF", boxShadow: "0 40px 90px rgba(17,59,95,0.28)" }}>
              <img src="/redesign-assets/hoods/harlem.webp" alt="Harlem brownstones" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", right: -14, bottom: -22, display: "inline-flex", alignItems: "center", gap: 18, background: "#FFFFFF", border: "1px solid rgba(201,138,44,0.55)", borderRadius: 16, boxShadow: "0 22px 48px rgba(17,59,95,0.28)", padding: "18px 26px", whiteSpace: "nowrap" }}>
              <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" style={{ flex: "0 0 auto", width: 50, height: 50, display: "block" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 19, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.01em", color: "#0F1729" }}>Google Rating</span>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <span style={{ fontSize: 23, fontWeight: 700, lineHeight: 1, color: "#C98A2C" }}>5.0</span>
                  <span style={{ color: "#F5A623", fontSize: 19, letterSpacing: "0.08em", lineHeight: 1 }}>★★★★★</span>
                </div>
                <span style={{ fontSize: 14, lineHeight: 1.3, color: "#0F1729" }}>
                  Over <strong style={{ fontWeight: 700 }}>57 Reviews</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Harlem stats" style={{ background: "#0F1729", padding: "56px 64px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 0 }}>
          {STATS.map((stat) => (
            <div
              key={stat.label}
              data-reveal=""
              style={{
                padding: "12px 40px",
                borderRight: stat.last ? undefined : "1px solid rgba(201,138,44,0.28)",
                paddingLeft: stat.first ? 0 : undefined,
              }}
            >
              <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 1, color: "#C98A2C" }}>{stat.value}</div>
              <div style={{ fontSize: 14, letterSpacing: "0.02em", color: "rgba(249,246,230,0.82)", marginTop: 12 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section data-screen-label="About Harlem" style={{ background: "#F9F6E6", padding: "110px 64px", borderBottom: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 80, alignItems: "center" }}>
          <div data-reveal="">
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 34, height: 1, background: "#C98A2C", display: "block" }} />
              <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>The neighborhood</span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#0F1729", margin: "16px 0 0", textWrap: "pretty" }}>Living in Harlem</h2>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#3B4C5E", margin: "22px 0 0", textWrap: "pretty" }}>
              Located in Upper Manhattan and known for its deep cultural roots and iconic role in the Harlem Renaissance, the area blends historic charm with modern energy. Tree-lined streets are filled with classic brownstones, pre-war buildings, and a growing number of new developments.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "#3B4C5E", margin: "16px 0 0", textWrap: "pretty" }}>
              Home to world-renowned landmarks such as the Apollo Theater and Studio Museum, Harlem features an excellent selection of restaurants, cafes, and local shops. Residents enjoy convenient access to Central Park, Marcus Garvey Park, and multiple subway lines, a unique blend of tradition and opportunity.
            </p>
          </div>
          <div data-reveal="" style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/5", background: "#E0D9B8", boxShadow: "0 30px 70px rgba(17,59,95,0.18)" }}>
            <img src="/redesign-assets/hoods/harlem.webp" alt="Harlem street" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </section>

      <section data-screen-label="Harlem property types" style={{ background: "#F5EECB", padding: "110px 64px", borderBottom: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div data-reveal="" style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>What we help you buy</div>
            <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#0F1729", margin: "16px 0 0", textWrap: "pretty" }}>Harlem property types</h2>
            <span style={{ display: "block", width: 76, height: 3, background: "#C98A2C", margin: "24px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 24, marginTop: 56 }}>
            {PROPERTY_TYPES.map((item) => (
              <a
                key={item.href}
                data-reveal=""
                href={item.href}
                style={{ display: "flex", flexDirection: "column", background: "#F9F6E6", border: "1px solid #E0D9B8", borderRadius: 16, overflow: "hidden", transition: "transform .4s ease, box-shadow .4s ease, border-color .4s ease" }}
                {...CARD_HOVER}
              >
                <div style={{ aspectRatio: "7/5", overflow: "hidden", background: "#E0D9B8" }}>
                  <img src={item.image} alt={item.alt} loading="lazy" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "26px 26px 24px" }}>
                  <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 21, lineHeight: 1.3, color: "#0F1729", textWrap: "pretty" }}>{item.title}</div>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "#3B4C5E", margin: "12px 0 0", flex: "1 1 auto", textWrap: "pretty" }}>{item.copy}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 22, fontSize: 11.5, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#113B5F" }}>
                    Explore <span style={{ color: "#C98A2C" }}>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section data-screen-label="Featured listings" style={{ background: "#fff", padding: "100px 64px", borderBottom: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div data-reveal="">
            <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>On the market</div>
            <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#0F1729", margin: "16px 0 0", textWrap: "pretty" }}>Featured Harlem listings</h2>
            <p style={{ fontSize: 18, lineHeight: 1.8, color: "#3B4C5E", margin: "22px 0 0", textWrap: "pretty" }}>
              In the beautiful area of Harlem reside <strong style={{ fontWeight: 700, color: "#0F1729" }}>338,411 people</strong>, where 18% are homeowners. With an average age of 39, residents are well established, with many growing families. Over the past 30 days roughly <strong style={{ fontWeight: 700, color: "#0F1729" }}>17 homes</strong> have sold at an average price of <strong style={{ fontWeight: 700, color: "#0F1729" }}>$659,263</strong>, down $49,637 from the previous period.
            </p>
            <div style={{ display: "flex", justifyContent: "center", marginTop: 34 }}>
              <a
                href="/idx/listings/harlem/"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#113B5F", color: "#F9F6E6", fontSize: 14, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 100, padding: "18px 40px", minHeight: 54 }}
                {...{ "style-hover": "background:#C98A2C; color:#0F1729" }}
              >
                View Harlem listings
              </a>
            </div>
          </div>
        </div>
      </section>

      <section data-screen-label="Market report" style={{ background: "#0F1729", padding: "100px 64px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div data-reveal="">
            <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C98A2C" }}>Harlem market report</div>
            <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 40, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#F9F6E6", margin: "16px 0 0", textWrap: "pretty" }}>Want the full market report for Harlem?</h2>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: "rgba(249,246,230,0.85)", margin: "18px 0 0", maxWidth: 560, textWrap: "pretty" }}>
              Enter your info below for instant access to the area&apos;s latest market report, complete with sales and demographic trends, so you have everything you need to make the best decisions for your home goals.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 32, maxWidth: 520 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <input type="text" placeholder="First name" style={FORM_FIELD} />
                <input type="text" placeholder="Last name" style={FORM_FIELD} />
              </div>
              <input type="email" placeholder="Email address" style={FORM_FIELD} />
              <input type="text" placeholder="City" style={FORM_FIELD} />
              <a
                href="https://calendly.com/montfort"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#C98A2C", color: "#0F1729", fontWeight: 800, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: 100, fontSize: 15, padding: "17px 24px", minHeight: 54 }}
                {...{ "style-hover": "background:#F9F6E6; color:#113B5F" }}
              >
                Submit
              </a>
            </div>
          </div>
          <div data-reveal="" style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", background: "#0B1220", border: "1px solid rgba(201,138,44,0.4)", boxShadow: "0 30px 70px rgba(0,0,0,0.4)" }}>
            <img src="/redesign-assets/hoods/harlem.webp" alt="Harlem market" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.5, display: "block" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 8, background: "linear-gradient(180deg, rgba(15,23,41,0.3), rgba(15,23,41,0.65))" }}>
              <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 34, letterSpacing: "-0.01em", color: "#F9F6E6" }}>Harlem</div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C98A2C" }}>Market Report</div>
            </div>
          </div>
        </div>
      </section>

      <HarlemSchools />

      <section data-screen-label="Around the area" style={{ background: "#F5EECB", padding: "110px 64px", borderBottom: "1px solid #E0D9B8" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div data-reveal="" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 640 }}>
              <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#3B4C5E" }}>Around the area</div>
              <h2 style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#0F1729", margin: "14px 0 0", textWrap: "pretty" }}>Top-rated spots in &amp; near Harlem</h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#3B4C5E", margin: "12px 0 0" }}>Browse the top-rated businesses Harlem has to offer, pulled from Yelp.</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, flex: "0 0 auto" }}>
              <button
                id="area-prev"
                type="button"
                aria-label="Previous"
                onClick={() => scrollArea(-1)}
                style={{ width: 52, height: 52, borderRadius: 100, border: "1px solid #C98A2C", background: "#F9F6E6", color: "#113B5F", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background .25s ease, color .25s ease" }}
                {...{ "style-hover": "background:#113B5F; color:#F9F6E6" }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                id="area-next"
                type="button"
                aria-label="Next"
                onClick={() => scrollArea(1)}
                style={{ width: 52, height: 52, borderRadius: 100, border: "1px solid #C98A2C", background: "#F9F6E6", color: "#113B5F", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "background .25s ease, color .25s ease" }}
                {...{ "style-hover": "background:#113B5F; color:#F9F6E6" }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 26 }}>
            <button
              type="button"
              className="area-chip"
              data-cat="dine"
              onClick={() => setAreaCat("dine")}
              style={{
                ...chipBase,
                color: areaCat === "dine" ? "#0F1729" : "#3B4C5E",
                background: areaCat === "dine" ? "#C98A2C" : "#F9F6E6",
                border: areaCat === "dine" ? "1px solid #C98A2C" : "1px solid #E0D9B8",
              }}
            >
              Dine
            </button>
            <button
              type="button"
              className="area-chip"
              data-cat="shop"
              onClick={() => setAreaCat("shop")}
              style={{
                ...chipBase,
                color: areaCat === "shop" ? "#0F1729" : "#3B4C5E",
                background: areaCat === "shop" ? "#C98A2C" : "#F9F6E6",
                border: areaCat === "shop" ? "1px solid #C98A2C" : "1px solid #E0D9B8",
              }}
            >
              Shop
            </button>
          </div>
          <div
            id="area-track-shop"
            ref={shopTrackRef}
            className="area-track no-sb"
            style={{
              display: areaCat === "shop" ? "flex" : "none",
              gap: 22,
              marginTop: 34,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              padding: 4,
            }}
          >
            {SHOP_PLACES.map((place) => (
              <AreaCard key={place.href} place={place} variant="shop" />
            ))}
          </div>
          <div
            id="area-track-dine"
            ref={dineTrackRef}
            className="area-track no-sb"
            style={{
              display: areaCat === "dine" ? "flex" : "none",
              gap: 22,
              marginTop: 34,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              padding: 4,
            }}
          >
            {DINE_PLACES.map((place) => (
              <AreaCard key={place.href} place={place} variant="dine" />
            ))}
          </div>
        </div>
      </section>

      <ResourcesSection />
      <ContactSection />
    </>
  );
}
