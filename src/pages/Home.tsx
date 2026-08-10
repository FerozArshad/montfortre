import Seo from "../components/Seo";
import useStyleHover from "../hooks/useStyleHover";
import useCarousels from "../hooks/useCarousels";

const TITLE = "Montfort Real Estate | New York Realtor";
const METAS = [
  {
    "name": "description",
    "content": "Our Realtors will help you find on and off market NYC real estate that meet your criteria while avoiding costly mistakes during the home buying process."
  },
  {
    "name": "twitter:card",
    "content": "summary_large_image"
  },
  {
    "name": "twitter:title",
    "content": "Montfort Real Estate | New York Realtor"
  },
  {
    "name": "twitter:description",
    "content": "Our Realtors will help you find on and off market NYC real estate that meet your criteria while avoiding costly mistakes during the home buying process."
  },
  {
    "property": "og:locale",
    "content": "en_US"
  },
  {
    "property": "og:type",
    "content": "website"
  },
  {
    "property": "og:title",
    "content": "Montfort Real Estate"
  },
  {
    "property": "og:description",
    "content": "Our Realtors will help you find on and off market NYC real estate that meet your criteria while avoiding costly mistakes during the home buying process."
  },
  {
    "property": "og:url",
    "content": "https://montfortre.com/"
  },
  {
    "property": "og:site_name",
    "content": "Montfort Real Estate"
  },
  {
    "property": "og:image",
    "content": "https://montfortre.com/og-home.jpg"
  },
  {
    "property": "og:image:width",
    "content": "1200"
  },
  {
    "property": "og:image:height",
    "content": "630"
  },
  {
    "property": "og:image:type",
    "content": "image/jpeg"
  },
  {
    "name": "twitter:image",
    "content": "https://montfortre.com/og-home.jpg"
  },
  {
    "name": "author",
    "content": "Montfort Real Estate"
  }
];
const LINKS = [
  {
    "rel": "canonical",
    "href": "https://montfortre.com/"
  },
  {
    "rel": "icon",
    "href": "redesign-assets/favicon.png",
    "sizes": "32x32"
  },
  {
    "rel": "icon",
    "href": "redesign-assets/favicon.png",
    "sizes": "192x192"
  },
  {
    "rel": "preconnect",
    "href": "https://fonts.googleapis.com"
  },
  {
    "rel": "preconnect",
    "href": "https://fonts.gstatic.com",
    "crossorigin": ""
  },
  {
    "href": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&amp;family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&amp;display=swap",
    "rel": "stylesheet"
  }
];
const JSON_LD = [
  "{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"RealEstateAgent\",\n      \"@id\": \"https://montfortre.com/#realestateagent\",\n      \"name\": \"Stanley Montfort Real Estate\",\n      \"alternateName\": \"Montfort Real Estate\",\n      \"url\": \"https://montfortre.com/\",\n      \"telephone\": \"+1-646-970-1078\",\n      \"priceRange\": \"$$$\",\n      \"description\": \"New York City real estate agency helping buyers, sellers, homeowners, and investors navigate residential and multifamily real estate across Manhattan and Brooklyn.\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"streetAddress\": \"8 West 126th Street\",\n        \"addressLocality\": \"New York\",\n        \"addressRegion\": \"NY\",\n        \"postalCode\": \"10027\",\n        \"addressCountry\": \"US\"\n      },\n      \"areaServed\": [\n        {\n          \"@type\": \"City\",\n          \"name\": \"New York City\"\n        },\n        {\n          \"@type\": \"AdministrativeArea\",\n          \"name\": \"Manhattan\"\n        },\n        {\n          \"@type\": \"AdministrativeArea\",\n          \"name\": \"Brooklyn\"\n        }\n      ],\n      \"sameAs\": [\n        \"https://www.instagram.com/stanleymontfort/\"\n      ],\n      \"hasOfferCatalog\": {\n        \"@type\": \"OfferCatalog\",\n        \"name\": \"New York City Real Estate Services\",\n        \"itemListElement\": [\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"@id\": \"https://montfortre.com/nyc-buyers-agent-service/#service\",\n              \"name\": \"NYC Buyer\u2019s Agent Service\",\n              \"url\": \"https://montfortre.com/nyc-buyers-agent-service/\",\n              \"provider\": {\n                \"@id\": \"https://montfortre.com/#realestateagent\"\n              },\n              \"areaServed\": {\n                \"@type\": \"City\",\n                \"name\": \"New York City\"\n              }\n            }\n          },\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"@id\": \"https://montfortre.com/nyc-listing-agent/#service\",\n              \"name\": \"NYC Listing Agent Service\",\n              \"url\": \"https://montfortre.com/nyc-listing-agent/\",\n              \"provider\": {\n                \"@id\": \"https://montfortre.com/#realestateagent\"\n              },\n              \"areaServed\": {\n                \"@type\": \"City\",\n                \"name\": \"New York City\"\n              }\n            }\n          },\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"@id\": \"https://montfortre.com/nyc-multifamily-real-estate-agent/#service\",\n              \"name\": \"NYC Multifamily Real Estate Agent\",\n              \"url\": \"https://montfortre.com/nyc-multifamily-real-estate-agent/\",\n              \"provider\": {\n                \"@id\": \"https://montfortre.com/#realestateagent\"\n              },\n              \"areaServed\": {\n                \"@type\": \"City\",\n                \"name\": \"New York City\"\n              }\n            }\n          },\n          {\n            \"@type\": \"Offer\",\n            \"itemOffered\": {\n              \"@type\": \"Service\",\n              \"@id\": \"https://montfortre.com/whats-my-home-worth/#service\",\n              \"name\": \"NYC Free Home Valuation\",\n              \"url\": \"https://montfortre.com/whats-my-home-worth/\",\n              \"provider\": {\n                \"@id\": \"https://montfortre.com/#realestateagent\"\n              },\n              \"areaServed\": {\n                \"@type\": \"City\",\n                \"name\": \"New York City\"\n              }\n            }\n          }\n        ]\n      }\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"https://montfortre.com/#website\",\n      \"url\": \"https://montfortre.com/\",\n      \"name\": \"Montfort Real Estate\",\n      \"publisher\": {\n        \"@id\": \"https://montfortre.com/#realestateagent\"\n      },\n      \"inLanguage\": \"en-US\"\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"https://montfortre.com/#webpage\",\n      \"url\": \"https://montfortre.com/\",\n      \"name\": \"Montfort Real Estate | New York Realtor\",\n      \"description\": \"New York City real estate guidance for buyers, sellers, homeowners, and investors across Manhattan and Brooklyn.\",\n      \"isPartOf\": {\n        \"@id\": \"https://montfortre.com/#website\"\n      },\n      \"about\": {\n        \"@id\": \"https://montfortre.com/#realestateagent\"\n      },\n      \"mainEntity\": {\n        \"@id\": \"https://montfortre.com/#realestateagent\"\n      },\n      \"inLanguage\": \"en-US\"\n    }\n  ]\n}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"@id\":\"https://montfortre.com/#website\",\"url\":\"https://montfortre.com/\",\"name\":\"Montfort Real Estate\",\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":\"https://montfortre.com/?s={search_term_string}\",\"query-input\":\"required name=search_term_string\"}}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"url\":\"https://montfortre.com/\",\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.instagram.com/stanleymontfort/\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\"],\"@id\":\"https://montfortre.com/#organization\",\"name\":\"Montfort Real Estate\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2022/10/Logo-Transparency-black.png\"}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"RealEstateAgent\",\"@id\":\"https://montfortre.com/#real-estate-agent\",\"name\":\"Montfort Real Estate\",\"description\":\"NYC's brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication \\u2014 from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.\",\"url\":\"https://montfortre.com\",\"email\":\"sm@montfortre.com\",\"telephone\":\"1-646-970-1078\",\"faxNumber\":\"\",\"priceRange\":\"\",\"image\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"New York\",\"addressRegion\":\"NY\",\"postalCode\":\"10027\",\"streetAddress\":\"8 West 126th Street\"},\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\",\"https://www.instagram.com/stanleymontfort/\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"Customer Service\",\"email\":\"sm@montfortre.com\",\"telephone\":\"646-970-1078\"}}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Montfort Real Estate | New York Realtor\",\"description\":\"New York Realtor buying assistance to avoid overpaying for real estate We\\u2019ll make sure you make a smart real estate purchase by saving money and avoid owning real estate with maintenance and violation issues Value Your Home Find a HomeSearch Please wait while we generate your report Property TypeProperty TypeSingle-FamilyCondoMulti-FamilyTownhouseMobile/ManufacturedTimeshareLandCommercialOtherBedsBeds 1 Bedroom 2 Bedrooms 3 Bedrooms 4 Bedrooms 5 Bedrooms\",\"inLanguage\":\"en-US\",\"datePublished\":\"2021-05-27T00:20:18+00:00\",\"dateModified\":\"2026-08-04T16:46:20+00:00\",\"isPartOf\":{\"@type\":\"WebSite\",\"name\":\"Montfort Real Estate\",\"url\":\"https://montfortre.com/\"}}"
];

const HTML = `<style>
 body { margin:0; background:#F9F6E6; font-family:'DM Sans',system-ui,sans-serif; color:#0F1729; -webkit-font-smoothing:antialiased; }
 * { box-sizing:border-box; }
 a { color:#113B5F; text-decoration:none; }
 a:hover { color:#C98A2C; }
 input::placeholder { color: rgba(249,246,230,0.62); }
 @keyframes v4-in { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
 @keyframes v4-marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
 @keyframes v4-rise { from { opacity:0; transform:translateY(26px); } to { opacity:1; transform:translateY(0); } }
 .mnav-item > .mnav-drop { opacity:0; visibility:hidden; transform:translateY(12px) scale(0.98); transform-origin:top left; pointer-events:none; transition:opacity .24s ease, transform .3s cubic-bezier(0.22,0.61,0.36,1), visibility .3s; }
 .mnav-item > .mnav-drop::before { content:""; position:absolute; left:0; right:0; bottom:100%; height:22px; }
 .mnav-item:hover > .mnav-drop { opacity:1; visibility:visible; transform:translateY(0) scale(1); pointer-events:auto; }
 .mnav-item:hover > .mnav-top { color:#C98A2C; }
 .mnav-item:hover .mnav-chev { transform:rotate(180deg); color:#C98A2C; }
 .mnav-chev { transition:transform .28s cubic-bezier(0.22,0.61,0.36,1), color .22s ease; }
 .mnav-link { position:relative; border-radius:10px; transition:background .2s ease, color .2s ease; }
 .mnav-link .mnav-arrow { opacity:0; transform:translateX(-4px); transition:opacity .2s ease, transform .2s ease; }
 .mnav-link:hover { color:#C98A2C !important; background:rgba(201,138,44,0.08); }
 .mnav-link:hover .mnav-arrow { opacity:1; transform:translateX(0); }
 .no-sb { -ms-overflow-style:none; scrollbar-width:none; }
 .no-sb::-webkit-scrollbar { display:none; }
 a:hover > .ig-ov { opacity:1; }

 /* ===== Responsive overrides (layout styles are inline, hence !important).
        Desktop >=1440px is untouched: every rule below sits in a max-width query. ===== */
 @media (max-width:1024px) {
  [style*="px 64px"] { padding-left:32px !important; padding-right:32px !important; }
  [style*="grid-template-columns:620px 1fr"] { grid-template-columns:1fr !important; min-height:0 !important; gap:32px !important; }
  [style*="grid-template-columns:45fr 55fr"] { grid-template-columns:1fr !important; gap:48px !important; }
  [style*="grid-template-columns:1fr 520px"] { grid-template-columns:1fr !important; gap:56px !important; }
  [style*="grid-template-columns:1fr 520px"] > [data-reveal]:last-child { max-width:520px; margin:0 auto; width:100%; }
  [style*="grid-template-columns:repeat(3,minmax(0,1fr))"],
  [style*="grid-template-columns:repeat(4,minmax(0,1fr))"] { grid-template-columns:repeat(2,minmax(0,1fr)) !important; }
  [style*="grid-template-columns:1.2fr 1fr 0.9fr auto"] { grid-template-columns:1fr 1fr !important; }
  h1[style*="font-size:38px"] { font-size:30px !important; }
  h2[style*="font-size:54px"] { font-size:42px !important; }
  h2[style*="font-size:46px"] { font-size:36px !important; }
  h2[style*="font-size:44px"] { font-size:35px !important; }
  h2[style*="font-size:42px"] { font-size:34px !important; }
 }
 @media (max-width:768px) {
  [style*="px 64px"] { padding-left:20px !important; padding-right:20px !important; }
  section[style*="padding:130px"], section[style*="padding:120px"],
  section[style*="padding:110px"], section[style*="padding:100px"] { padding-top:64px !important; padding-bottom:64px !important; }
  footer[style*="padding:88px"] { padding-top:56px !important; }
  [style*="grid-template-columns:repeat(3,minmax(0,1fr))"],
  [style*="grid-template-columns:repeat(4,minmax(0,1fr))"] { grid-template-columns:1fr !important; gap:24px !important; }
  [style*="grid-template-columns:auto auto auto"],
  [style*="grid-template-columns:1.2fr 1fr 0.9fr auto"],
  [style*="grid-template-columns:1fr 1fr"],
  [style*="grid-template-columns:300px 1fr"],
  [style*="grid-template-columns:1fr 1fr 1fr"] { grid-template-columns:1fr !important; }
  /* Services intro: desktop side-gap was 80px — collapse it when stacked */
  [style*="grid-template-columns:1fr 1fr"][style*="gap:80px"] { gap:14px !important; align-items:start !important; }
  [style*="grid-template-columns:620px 1fr"] { gap:24px !important; }
  h1[style*="font-size:38px"] { font-size:24px !important; margin-top:12px !important; }
  h2[style*="font-size:54px"] { font-size:32px !important; }
  h2[style*="font-size:46px"] { font-size:29px !important; }
  h2[style*="font-size:44px"] { font-size:28px !important; }
  h2[style*="font-size:42px"] { font-size:27px !important; }
  [style*="font-size:40px"] { font-size:30px !important; }
  [style*="font-size:32px"] { font-size:24px !important; }
  [style*="font-size:30px"] { font-size:24px !important; }
  [style*="font-size:27px"] { font-size:19px !important; }
  [style*="font-size:26px"] { font-size:21px !important; }
  [style*="font-size:24px"] { font-size:19px !important; }
 [style*="padding:72px 64px 40px"] { padding-top:24px !important; padding-bottom:24px !important; }
 [style*="padding:34px 38px 84px"] { padding:22px 18px 70px !important; }
 [style*="animation:v4-in"] { padding-bottom:36px !important; }
 [style*="font-size:16.5px"] { font-size:15px !important; }
 [style*="margin:26px 0 22px"] { margin:16px 0 14px !important; }
 [style*="margin:30px 0 20px"] { margin:18px 0 14px !important; }
 a[style*="min-height:54px"] { min-height:46px !important; padding-top:12px !important; padding-bottom:12px !important; }
 a[style*="border:2px solid #113B5F"][style*="min-height:54px"] { display:none !important; }
 [style*="mask-image"] { margin-top:12px !important; }
  div[style*="white-space:nowrap"] { white-space:normal !important; }
  /* Hidden-cost pill: keep "THE COST OF GOING ALONE" on one line */
  [style*="background:#C98A2C"][style*="letter-spacing:0.16em"][style*="white-space:nowrap"] {
    white-space:nowrap !important;
    font-size:10px !important;
    letter-spacing:0.08em !important;
    padding:11px 16px !important;
    max-width:calc(100% - 8px) !important;
    box-sizing:border-box !important;
  }
  /* Google reviews badge: compact two-column card (keep after nowrap reset) */
  a[aria-label="Read verified Google reviews"] {
    padding:12px 12px !important;
    gap:10px !important;
    width:calc(100% - 24px) !important;
    max-width:360px !important;
    justify-content:center !important;
    white-space:nowrap !important;
    box-sizing:border-box !important;
  }
  a[aria-label="Read verified Google reviews"] > div {
    white-space:nowrap !important;
    flex-shrink:0 !important;
  }
  a[aria-label="Read verified Google reviews"] > div:first-child {
    padding-right:10px !important;
    gap:4px !important;
  }
  a[aria-label="Read verified Google reviews"] > div:last-child {
    gap:4px !important;
  }
  a[aria-label="Read verified Google reviews"] img {
    width:24px !important;
    height:24px !important;
  }
  a[aria-label="Read verified Google reviews"] [style*="font-size:30px"] { font-size:22px !important; }
  a[aria-label="Read verified Google reviews"] [style*="letter-spacing:0.16em"] {
    font-size:8.5px !important;
    letter-spacing:0.06em !important;
  }
  a[aria-label="Read verified Google reviews"] [style*="font-size:19px"] { font-size:14px !important; letter-spacing:0.08em !important; }
  a[aria-label="Read verified Google reviews"] [style*="font-size:15px"] { font-size:12.5px !important; white-space:nowrap !important; }
  div[style*="display:flex; gap:12px"] { flex-wrap:wrap !important; }
  div[style*="justify-content:space-between"] { flex-wrap:wrap !important; }
  a[style*="height:480px"] { height:400px !important; }
  #listings-track { padding-left:20px !important; padding-right:20px !important; }
  [style*="flex:0 0 380px"] { flex:0 0 290px !important; }
  [style*="padding:56px 60px"] { padding:28px 20px !important; gap:24px !important; }
  [style*="border-left:1px solid #D9CFA6"] { border-left:none !important; }
 [style*="border-right:1px solid #D9CFA6"] { border-right:none !important; }
 /* Dark-section gold CTA: keep label on one line */
 a[style*="background:#C98A2C"][style*="min-height:56px"] {
  white-space:nowrap !important;
  font-size:12.5px !important;
  letter-spacing:0.04em !important;
  padding:16px 18px !important;
  width:100% !important;
  max-width:100% !important;
  box-sizing:border-box !important;
  justify-content:center !important;
  text-align:center !important;
 }
 /* Credential / affiliation card under Stanley portrait: wider + single-line labels */
 [style*="width:88%"][style*="grid-template-columns:1fr 1px 1fr"] {
  width:100% !important;
  padding:16px 14px !important;
  gap:12px !important;
 }
 [style*="width:88%"][style*="grid-template-columns:1fr 1px 1fr"] [style*="font-size:15px"] {
  font-size:12.5px !important;
  white-space:nowrap !important;
  letter-spacing:-0.02em !important;
 }
 [style*="padding:34px 34px 0"] {
  padding-left:0 !important;
  padding-right:0 !important;
 }
 /* Founder: portrait first, then copy; More about Stanley sits under the portrait */
 [style*="grid-template-columns:1fr 520px"] { gap:28px !important; }
 [style*="grid-template-columns:1fr 520px"] > [data-reveal]:first-child { order:2; }
 [style*="grid-template-columns:1fr 520px"] > [data-reveal]:last-child {
  order:1;
  max-width:none !important;
  width:100% !important;
  margin:0 !important;
 }
 a.founder-more-m {
  display:block !important;
  text-align:center !important;
 }
 [style*="align-items:center; gap:16px; margin-top:40px"] > a[href="/stanley-montfort/"] {
  display:none !important;
 }
 /* Founder CTAs: Schedule button full-width alone */
 [style*="align-items:center; gap:16px; margin-top:40px"] {
  flex-direction:column !important;
  align-items:stretch !important;
  gap:18px !important;
 }
 [style*="align-items:center; gap:16px; margin-top:40px"] > a[style*="border-radius:100px"] {
  width:100% !important;
  box-sizing:border-box !important;
  text-align:center !important;
  white-space:nowrap !important;
  font-size:13px !important;
  padding:16px 22px !important;
 }
 /* Expect cards: kill the desktop 64px column padding so all three align */
 [style*="grid-template-rows:auto auto auto 1fr auto"] {
  padding:0 !important;
  grid-template-rows:auto auto auto auto auto !important;
  row-gap:0 !important;
 }
 /* Match card 3 density: tighter divider → title → body on mobile */
 [style*="grid-template-rows:auto auto auto 1fr auto"] > [style*="height:1px"][style*="background:#D9CFA6"] {
  margin-top:16px !important;
 }
 [style*="grid-template-rows:auto auto auto 1fr auto"] > h3[style*="font-size:25px"],
 [style*="grid-template-rows:auto auto auto 1fr auto"] > [style*="font-size:25px"][style*="margin-top:24px"] {
  margin-top:12px !important;
  font-size:22px !important;
  line-height:1.3 !important;
 }
 [style*="grid-template-rows:auto auto auto 1fr auto"] > p {
  margin-top:10px !important;
 }
 /* Review quote mark: smaller and tighter above the text */
 [style*="font-size:82px"] { font-size:48px !important; height:26px !important; }
 [style*="font-size:82px"] + p { margin-top:10px !important; }
 /* Reviews: swipe + dots on mobile; the side arrows overlap the card text */
 #review-prev, #review-next { display:none !important; }
 /* Footer bottom bar: match the left-aligned footer content */
 footer [style*="margin:40px auto 0"] { text-align:left !important; }
 /* Founder stats: compact 3-across strip instead of a tall stack */
 div[style*="repeat(3,minmax(0,1fr))"][style*="border-top:1px solid #D9CFA6"] { grid-template-columns:repeat(3,1fr) !important; gap:0 !important; margin-top:30px !important; padding-top:26px !important; }
 div[style*="repeat(3,minmax(0,1fr))"][style*="border-top:1px solid #D9CFA6"] > div { padding:0 8px !important; text-align:center !important; }
 div[style*="repeat(3,minmax(0,1fr))"][style*="border-top:1px solid #D9CFA6"] > div:not(:first-child) { border-left:1px solid #D9CFA6 !important; }
 div[style*="repeat(3,minmax(0,1fr))"][style*="border-top:1px solid #D9CFA6"] [style*="font-size:40px"] { font-size:24px !important; }
 div[style*="repeat(3,minmax(0,1fr))"][style*="border-top:1px solid #D9CFA6"] [style*="max-width:190px"] { max-width:none !important; margin-top:8px !important; font-size:12px !important; line-height:1.45 !important; }
  [style*="padding:0 32px"] { padding:0 !important; }
  [style*="flex-direction:column"][style*="align-items:flex-end"] { align-items:flex-start !important; }
  footer [style*="justify-self:center"], footer [style*="justify-self:end"] { justify-self:start !important; text-align:left !important; }
  [style*="left:24px; right:24px"] { left:12px !important; right:12px !important; }
 }
 @media (max-width:480px) {
  h2[style*="font-size:54px"] { font-size:28px !important; }
  h2[style*="font-size:46px"] { font-size:26px !important; }
  [style*="padding:56px 60px"] { padding:24px 16px !important; }
  a[style*="height:480px"] { height:340px !important; }
  [style*="flex:0 0 380px"] { flex:0 0 260px !important; }
 }
</style>

<main>


<div style="width:100%; max-width:100%; background:#F9F6E6; overflow-x:hidden">

 <header style="position:sticky; top:0; z-index:90; background:#fff; box-shadow:0 1px 0 rgba(18,16,14,0.1)">
  <div style="max-width:1440px; margin:0 auto; padding:26px 64px; display:flex; align-items:center; gap:40px">
   <a href="/" style="display:flex; align-items:center; padding-right:32px; border-right:1px solid rgba(201,138,44,0.5)">
    <div role="img" aria-label="Montfort Real Estate" style="height:52px; aspect-ratio:3813/2662; background:#113B5F; -webkit-mask:url('https://assets.agentfire3.com/uploads/sites/312/2026/07/Logo-Transparency-black.png') center/contain no-repeat; mask:url('https://assets.agentfire3.com/uploads/sites/312/2026/07/Logo-Transparency-black.png') center/contain no-repeat"></div>
   </a>
   <nav style="display:flex; align-items:center; gap:30px; margin-left:auto; font-size:13px; font-weight:700; letter-spacing:0.11em; text-transform:uppercase">
    <div class="mnav-item" style="position:relative">
     <a href="/services/" class="mnav-top" style="display:flex; align-items:center; gap:7px; color:#0F1729; padding:8px 0">Services
      <svg class="mnav-chev" width="11" height="11" viewBox="0 0 12 12" fill="none" style="display:block"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
     </a>
     <div class="mnav-drop" style="position:absolute; top:calc(100% + 18px); left:-24px; width:520px; background:#fff; border:1px solid #EAE1BE; border-top:3px solid #C98A2C; box-shadow:0 30px 70px rgba(17,59,95,0.22); border-radius:16px; padding:14px; display:grid; grid-template-columns:1fr 1fr; gap:2px">
      <a href="/nyc-buyers-agent-service/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">NYC Buyer’s Agent</a>
      <a href="/nyc-listing-agent-service/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">NYC Listing Agent</a>
      <a href="/nyc-multifamily-real-estate-agent-service/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">NYC Multifamily Agent</a>
      <a href="/whats-my-home-worth/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Free Home Valuation</a>
      <a href="/mortgage-calculator/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Mortgage Calculator</a>
     </div>
    </div>
    <div class="mnav-item" style="position:relative">
     <a href="/neighborhoods/" class="mnav-top" style="display:flex; align-items:center; gap:7px; color:#0F1729; padding:8px 0">Neighborhoods
      <svg class="mnav-chev" width="11" height="11" viewBox="0 0 12 12" fill="none" style="display:block"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
     </a>
     <div class="mnav-drop" style="position:absolute; top:calc(100% + 18px); left:-24px; width:520px; background:#fff; border:1px solid #EAE1BE; border-top:3px solid #C98A2C; box-shadow:0 30px 70px rgba(17,59,95,0.22); border-radius:16px; padding:14px; display:grid; grid-template-columns:1fr 1fr; gap:2px">
      <a href="/harlem/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Harlem</a>
      <a href="/upper-west-side/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Upper West Side</a>
      <a href="/upper-east-side/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Upper East Side</a>
      <a href="/chelsea/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Chelsea</a>
      <a href="/downtown-brooklyn/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Downtown Brooklyn</a>
      <a href="/dumbo/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Dumbo</a>
      <a href="/brooklyn-heights/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Brooklyn Heights</a>
      <a href="/bedford-stuyvesant/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Bedford-Stuyvesant</a>
      <a href="/williamsburg/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Williamsburg</a>
      <a href="/crown-heights/" class="mnav-link" style="padding:14px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Crown Heights</a>
      <a href="/neighborhoods/" class="mnav-link" style="grid-column:1 / -1; padding:15px 22px; margin-top:6px; border-top:1px solid #EAE1BE; color:#113B5F; font-size:11.5px; font-weight:800; letter-spacing:0.14em; display:flex; align-items:center; gap:9px">View all neighborhoods <svg class="mnav-arrow" width="16" height="12" viewBox="0 0 16 12" fill="none" style="display:block"><path d="M1 6h13M9.5 1.5L14 6l-4.5 4.5" stroke="#C98A2C" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
     </div>
    </div>
    <div class="mnav-item" style="position:relative">
     <a href="/idx-sales/" class="mnav-top" style="display:flex; align-items:center; gap:7px; color:#0F1729; padding:8px 0">Listings
      <svg class="mnav-chev" width="11" height="11" viewBox="0 0 12 12" fill="none" style="display:block"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
     </a>
     <div class="mnav-drop" style="position:absolute; top:calc(100% + 18px); left:-24px; width:260px; background:#fff; border:1px solid #EAE1BE; border-top:3px solid #C98A2C; box-shadow:0 30px 70px rgba(17,59,95,0.22); border-radius:16px; padding:14px; display:flex; flex-direction:column; gap:2px">
      <a href="/idx-sales/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Homes For Sale</a>
      <a href="/idx-rentals/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Rentals</a>
      <a href="https://stanley.olridx.com/#" target="_blank" rel="noopener" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Customer Login</a>
     </div>
    </div>
    <a href="/success-stories/" style="color:#0F1729; padding:8px 0">Success Stories</a>
    <div class="mnav-item" style="position:relative">
     <a href="/about-us/" class="mnav-top" style="display:flex; align-items:center; gap:7px; color:#0F1729; padding:8px 0">About
      <svg class="mnav-chev" width="11" height="11" viewBox="0 0 12 12" fill="none" style="display:block"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
     </a>
     <div class="mnav-drop" style="position:absolute; top:calc(100% + 18px); left:-24px; width:240px; background:#fff; border:1px solid #EAE1BE; border-top:3px solid #C98A2C; box-shadow:0 30px 70px rgba(17,59,95,0.22); border-radius:16px; padding:14px; display:flex; flex-direction:column; gap:2px">
      <a href="/about-us/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">About Us</a>
      <a href="/stanley-montfort/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Stanley Montfort</a>
     </div>
    </div>
    <a href="/blog/" style="color:#0F1729; padding:8px 0">Resources</a>
    <a href="https://calendly.com/montfort" target="_blank" rel="noopener" style="color:#0F1729; padding:8px 0">Contact</a>
   </nav>
   <a href="tel:+1-646-970-1078" style="display:flex; align-items:center; gap:12px; text-decoration:none; color:#0F1729; transition:color 0.2s ease" style-hover="color:#C98A2C">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:0 0 auto"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    <span style="display:flex; flex-direction:column; align-items:center; line-height:1.15">
     <span style="font-family:'Space Grotesk',system-ui,sans-serif; font-size:22px; font-weight:700; letter-spacing:-0.01em">(646) 970-1078</span>
     <span style="font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#3B4C5E; margin-top:2px">Mon-Sat 8AM-7PM</span>
    </span>
   </a>
  </div>
 </header>

 <section data-screen-label="Hero" style="position:relative; background:#0F1729; overflow:hidden">
  <img src="https://assets.agentfire3.com/uploads/sites/312/2026/06/Brooklyn-Heights-Real-Estate.png" alt="Brooklyn Heights brownstone street" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center 38%; display:block" width="1536" height="1024">
  <div style="position:absolute; inset:0; background:linear-gradient(96deg, rgba(10,9,8,0.68) 0%, rgba(10,9,8,0.4) 42%, rgba(10,9,8,0.1) 68%, rgba(10,9,8,0.34) 100%)"></div>
  <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(10,9,8,0.42) 0%, rgba(10,9,8,0) 22%)"></div>

  <div style="position:relative; z-index:2; padding:72px 64px 40px; display:grid; grid-template-columns:620px 1fr; gap:48px; align-items:center; max-width:1440px; margin:0 auto; min-height:calc(100vh - 80px)">
   <div style="animation:v4-in 0.65s ease both; padding-bottom:64px">
    <div style="position:relative; background:#F9F6E6; border:1px solid rgba(201,138,44,0.55); border-radius:16px; box-shadow:0 40px 90px rgba(17,59,95,0.4), inset 0 1px 0 rgba(255,255,255,0.6); padding:34px 38px 84px">

     <div style="font-size:11.5px; font-weight:500; letter-spacing:0.2em; text-transform:uppercase; color:#52677A">Buyer representation at no cost to you</div>

     <h1 style="font-weight:900; font-size:38px; line-height:1.26; letter-spacing:0.004em; word-spacing:0.06em; text-transform:uppercase; color:#0F1729; margin:16px 0 0; text-wrap:pretty">
      New York realtor buying assistance to <span style="background:#C98A2C; color:#0F1729; padding:0 6px">avoid overpaying</span> for real estate
     </h1>

     <p style="font-size:16.5px; line-height:1.7; color:#52677A; margin:18px 0 0; text-wrap:pretty">
      We'll make sure you make a smart real estate purchase by saving money and avoid owning real estate with maintenance and violation issues.
     </p>

     <div style="height:1px; background:#E0D9B8; margin:26px 0 22px"></div>

     <div style="display:flex; gap:12px">
      <a href="https://calendly.com/montfort" style="flex:1 1 auto; display:flex; align-items:center; justify-content:center; background:#113B5F; color:#F9F6E6; font-size:15.5px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; padding:16px 24px; border-radius:10px; min-height:54px; white-space:nowrap" style-hover="background:#C98A2C; color:#113B5F">Book Now</a>
      <a href="tel:646-970-1078" style="flex:0 0 auto; display:flex; align-items:center; justify-content:center; border:2px solid #113B5F; color:#113B5F; font-size:15.5px; font-weight:800; letter-spacing:0.02em; padding:14px 24px; border-radius:10px; min-height:54px; white-space:nowrap" style-hover="background:#F5EECB; color:#113B5F">646-970-1078</a>
     </div><form class="lead-idx-form" onsubmit="event.preventDefault(); window.open('https://stanley.olridx.com/Search/'+this.searchtype.value,'_blank')" style="margin-top:12px; display:flex; gap:12px; flex-wrap:wrap; align-items:stretch">
<div style="flex:1 1 auto; display:flex; min-height:54px; border:2px solid #113B5F; border-radius:10px; background:#fff">
<div class="lif-dd" style="position:relative; display:flex; align-items:stretch">
<input type="hidden" name="searchtype" value="Sales">
<button type="button" class="lif-btn" aria-haspopup="listbox" onclick="var l=this.parentNode.querySelector('.lif-list'); l.style.display=l.style.display==='block'?'none':'block'" style="display:flex; align-items:center; gap:12px; border:0; outline:none; padding:0 18px; background:#fff; color:#0F1729; font-family:'DM Sans',system-ui,sans-serif; font-size:15px; font-weight:700; border-right:2px solid #113B5F; cursor:pointer; white-space:nowrap; border-radius:8px 0 0 8px">
<span class="lif-label">For Sale</span>
<svg width="12" height="8" viewBox="0 0 12 8" fill="none" style="flex:0 0 auto"><path d="M1 1.5l5 5 5-5" stroke="#C98A2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
</button>
<div class="lif-list" role="listbox" style="display:none; position:absolute; top:calc(100% + 10px); left:0; min-width:170px; background:#fff; border:1px solid #EAE1BE; border-top:3px solid #C98A2C; border-radius:12px; box-shadow:0 24px 50px rgba(17,59,95,0.2); overflow:hidden; z-index:60">
<div role="option" data-v="Sales" onclick="var w=this.parentNode.parentNode; w.querySelector('input').value=this.getAttribute('data-v'); w.querySelector('.lif-label').textContent=this.textContent; this.parentNode.style.display='none'" style="padding:14px 18px; font-size:14px; font-weight:700; color:#0F1729; cursor:pointer" style-hover="background:#F5EECB; color:#113B5F">For Sale</div>
<div role="option" data-v="Rentals" onclick="var w=this.parentNode.parentNode; w.querySelector('input').value=this.getAttribute('data-v'); w.querySelector('.lif-label').textContent=this.textContent; this.parentNode.style.display='none'" style="padding:14px 18px; font-size:14px; font-weight:700; color:#0F1729; cursor:pointer" style-hover="background:#F5EECB; color:#113B5F">For Rent</div>
</div>
</div>
<button type="submit" style="flex:1 1 auto; border:0; background:#113B5F; color:#F9F6E6; font-family:'DM Sans',system-ui,sans-serif; font-size:14px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; padding:0 24px; cursor:pointer; white-space:nowrap; border-radius:0 8px 8px 0" style-hover="background:#C98A2C; color:#113B5F">Search MLS Listings</button>
</div>
<a href="/whats-my-home-worth/" style="flex:1 0 100%; text-align:center; font-weight:700; font-size:13.5px; color:#113B5F; padding-top:2px" style-hover="color:#C98A2C">What&#8217;s my home worth? &#8594;</a>
</form>

     <div style="height:1px; background:#E0D9B8; margin:30px 0 20px"></div>

     <div style="display:flex; align-items:center; justify-content:space-between; gap:12px">
      <span style="font-size:11.5px; font-weight:500; letter-spacing:0.2em; text-transform:uppercase; color:#52677A">Where we work</span>
      <a href="/neighborhoods/" style="font-size:13px; font-weight:700; color:#0F1729; white-space:nowrap">All 10 neighborhoods →</a>
     </div>
     <div style="position:relative; margin-top:20px; overflow:hidden; mask-image:linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%); -webkit-mask-image:linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)">
      <div style="display:flex; width:max-content; animation:v4-marquee 26s linear infinite">
       <a href="/harlem/" style="font-size:14.5px; font-weight:600; color:#0F1729; white-space:nowrap; padding:0 16px" style-hover="color:#F29D4C">Harlem</a>
       <span style="color:#E0D9B8; font-size:14.5px">•</span>
       <a href="/upper-west-side/" style="font-size:14.5px; font-weight:600; color:#0F1729; white-space:nowrap; padding:0 16px" style-hover="color:#F29D4C">Upper West Side</a>
       <span style="color:#E0D9B8; font-size:14.5px">•</span>
       <a href="/chelsea/" style="font-size:14.5px; font-weight:600; color:#0F1729; white-space:nowrap; padding:0 16px" style-hover="color:#F29D4C">Chelsea</a>
       <span style="color:#E0D9B8; font-size:14.5px">•</span>
       <a href="/brooklyn-heights/" style="font-size:14.5px; font-weight:600; color:#0F1729; white-space:nowrap; padding:0 16px" style-hover="color:#F29D4C">Brooklyn Heights</a>
       <span style="color:#E0D9B8; font-size:14.5px">•</span>
       <a href="/williamsburg/" style="font-size:14.5px; font-weight:600; color:#0F1729; white-space:nowrap; padding:0 16px" style-hover="color:#F29D4C">Williamsburg</a>
       <span style="color:#E0D9B8; font-size:14.5px">•</span>
       <a href="/upper-east-side/" style="font-size:14.5px; font-weight:600; color:#0F1729; white-space:nowrap; padding:0 16px" style-hover="color:#F29D4C">Upper East Side</a>
       <span style="color:#E0D9B8; font-size:14.5px">•</span>
       <a href="/harlem/" style="font-size:14.5px; font-weight:600; color:#0F1729; white-space:nowrap; padding:0 16px" style-hover="color:#F29D4C">Harlem</a>
       <span style="color:#E0D9B8; font-size:14.5px">•</span>
       <a href="/upper-west-side/" style="font-size:14.5px; font-weight:600; color:#0F1729; white-space:nowrap; padding:0 16px" style-hover="color:#F29D4C">Upper West Side</a>
       <span style="color:#E0D9B8; font-size:14.5px">•</span>
       <a href="/chelsea/" style="font-size:14.5px; font-weight:600; color:#0F1729; white-space:nowrap; padding:0 16px" style-hover="color:#F29D4C">Chelsea</a>
       <span style="color:#E0D9B8; font-size:14.5px">•</span>
       <a href="/brooklyn-heights/" style="font-size:14.5px; font-weight:600; color:#0F1729; white-space:nowrap; padding:0 16px" style-hover="color:#F29D4C">Brooklyn Heights</a>
       <span style="color:#E0D9B8; font-size:14.5px">•</span>
       <a href="/williamsburg/" style="font-size:14.5px; font-weight:600; color:#0F1729; white-space:nowrap; padding:0 16px" style-hover="color:#F29D4C">Williamsburg</a>
       <span style="color:#E0D9B8; font-size:14.5px">•</span>
       <a href="/upper-east-side/" style="font-size:14.5px; font-weight:600; color:#0F1729; white-space:nowrap; padding:0 16px" style-hover="color:#F29D4C">Upper East Side</a>
       <span style="color:#E0D9B8; font-size:14.5px">•</span>
      </div>
     </div>

     <a href="https://maps.google.com/?cid=11378470238102062088" target="_blank" rel="noopener" aria-label="Read verified Google reviews" style="position:absolute; left:50%; bottom:0; transform:translate(-50%,50%); display:inline-flex; align-items:center; gap:24px; background:#FFFFFF; border:1px solid rgba(201,138,44,0.6); border-radius:16px; box-shadow:0 18px 40px rgba(17,59,95,0.3); padding:18px 30px; white-space:nowrap; text-decoration:none; color:inherit">
      <div style="display:flex; flex-direction:column; gap:8px; padding-right:24px; border-right:1px solid #E0D9B8">
       <div style="display:flex; align-items:center; gap:11px">
        <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" style="width:30px; height:30px; display:block">
        <span style="font-size:30px; font-weight:900; line-height:1; letter-spacing:-0.02em; color:#0F1729">5.0</span>
       </div>
       <span style="font-size:11px; font-weight:500; letter-spacing:0.16em; text-transform:uppercase; color:#52677A">Verified Google reviews</span>
      </div>
      <div style="display:flex; flex-direction:column; gap:9px">
       <span style="color:#F5A623; font-size:19px; letter-spacing:0.14em; line-height:1">★★★★★</span>
       <span style="font-size:15px; line-height:1.4; color:#0F1729">Over <strong style="font-weight:700">57 reviews</strong></span>
      </div>
     </a>
    </div>
   </div>

   <div></div>
  </div>
 </section>

 <section data-screen-label="Buyer promises" style="background:#0B1220; border-bottom:1px solid rgba(201,138,44,0.35)">
  <div style="max-width:1440px; margin:0 auto; padding:24px 64px; display:grid; grid-template-columns:auto auto auto; gap:44px; justify-content:space-between; align-items:center">
   <div style="display:flex; align-items:flex-start; gap:14px">
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" style="flex:0 0 auto; display:block; margin-top:2px"><circle cx="12" cy="12" r="11" fill="#C98A2C"></circle><path d="M7.4 12.3l3.1 3.1 6.1-6.6" stroke="#0F1729" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    <div style="font-size:14px; font-weight:500; line-height:1.4; color:#F9F6E6; white-space:nowrap">Smooth transaction with limited risk</div>
   </div>
   <div style="display:flex; align-items:flex-start; gap:14px">
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" style="flex:0 0 auto; display:block; margin-top:2px"><circle cx="12" cy="12" r="11" fill="#C98A2C"></circle><path d="M7.4 12.3l3.1 3.1 6.1-6.6" stroke="#0F1729" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    <div style="font-size:14px; font-weight:500; line-height:1.4; color:#F9F6E6; white-space:nowrap">No pressure to over pay and buy within a certain time period</div>
   </div>
   <div style="display:flex; align-items:flex-start; gap:14px">
    <svg viewBox="0 0 24 24" width="21" height="21" fill="none" style="flex:0 0 auto; display:block; margin-top:2px"><circle cx="12" cy="12" r="11" fill="#C98A2C"></circle><path d="M7.4 12.3l3.1 3.1 6.1-6.6" stroke="#0F1729" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    <div style="font-size:14px; font-weight:500; line-height:1.4; color:#F9F6E6; white-space:nowrap">A team of people that will be with you even after the transaction is complete</div>
   </div>
  </div>
 </section>

 <section data-screen-label="Hidden cost of buying alone" style="position:relative; background:#0F1729; padding:130px 64px; overflow:hidden">
  <div style="position:absolute; top:-140px; right:-160px; width:620px; height:620px; border-radius:50%; border:1px solid rgba(201,138,44,0.16)"></div>
  <div style="position:absolute; bottom:-220px; left:-180px; width:520px; height:520px; border-radius:50%; border:1px solid rgba(201,138,44,0.12)"></div>
  <div style="position:relative; max-width:1440px; margin:0 auto; display:grid; grid-template-columns:45fr 55fr; gap:72px; align-items:center">
   <div data-reveal="" style="position:relative; aspect-ratio:1000/715">
    <img src="/redesign-assets/hidden-cost.webp" alt="Buyer overwhelmed at a desk" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center 42%; display:block; -webkit-mask-image:url('/redesign-assets/hidden-cost.png'); mask-image:url('/redesign-assets/hidden-cost.png'); -webkit-mask-size:contain; mask-size:contain; -webkit-mask-repeat:no-repeat; mask-repeat:no-repeat; -webkit-mask-position:center; mask-position:center" width="1100" height="787">
    <div style="position:absolute; left:50%; bottom:-6px; transform:translateX(-50%); background:#C98A2C; color:#0F1729; border-radius:100px; padding:13px 30px; font-size:12px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; white-space:nowrap; box-shadow:0 16px 34px rgba(0,0,0,0.4)">The cost of going alone</div>
   </div>
   <div>
    <h2 data-reveal="" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:46px; line-height:1.2; letter-spacing:-0.008em; color:#F9F6E6; margin:0; text-wrap:pretty">Are you aware of the <span style="background:#C98A2C; color:#0F1729; padding:2px 10px">hidden cost</span> of buying real estate without a realtor?</h2>
    <div style="margin-top:38px; border-top:1px solid rgba(201,138,44,0.3)">
     <div data-reveal="" style="display:grid; grid-template-columns:52px 1fr; gap:26px; align-items:baseline; padding:24px 0; border-bottom:1px solid rgba(201,138,44,0.3)">
      <svg viewBox="0 0 24 24" width="30" height="30" fill="none" style="display:block; margin-top:1px"><path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5 21l1.6-5-2.6-1.4 3.2-4.1-.9 3.9 2.7 1.2-2.4 5.4" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      <div style="font-size:20px; line-height:1.6; font-weight:400; color:rgba(249,246,230,0.9)">Buying <a href="/featured-brownstones-for-sale/" style="color:#C98A2C" style-hover="color:#F9F6E6">real estate</a> then later finding out it has <strong style="font-weight:700; color:#fff">structural issues</strong></div>
     </div>
     <div data-reveal="" style="display:grid; grid-template-columns:52px 1fr; gap:26px; align-items:baseline; padding:24px 0; border-bottom:1px solid rgba(201,138,44,0.3)">
      <svg viewBox="0 0 24 24" width="30" height="30" fill="none" style="display:block; margin-top:1px"><path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 15.5h8M12 11.5v8" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m5.5 5.5 13 13" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round"></path></svg>
      <div style="font-size:20px; line-height:1.6; font-weight:400; color:rgba(249,246,230,0.9)">Buying <a href="/featured-brownstones-for-sale/" style="color:#C98A2C" style-hover="color:#F9F6E6">real estate</a> then finding out you <strong style="font-weight:700; color:#fff">can't renovate it</strong></div>
     </div>
     <div data-reveal="" style="display:grid; grid-template-columns:52px 1fr; gap:26px; align-items:baseline; padding:24px 0; border-bottom:1px solid rgba(201,138,44,0.3)">
      <svg viewBox="0 0 24 24" width="30" height="30" fill="none" style="display:block; margin-top:1px"><rect x="4" y="3.5" width="14" height="17" rx="1.5" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M7.5 8h7M7.5 11.5h7M7.5 15h4" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="17.5" cy="17.5" r="4" fill="#0F1729" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M17.5 15.6v3.8M15.9 17.5h3.2" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      <div style="font-size:20px; line-height:1.6; font-weight:400; color:rgba(249,246,230,0.9)">Buying a <a href="/featured-brownstones-for-sale/" style="color:#C98A2C" style-hover="color:#F9F6E6">real estate</a> then finding out that you <strong style="font-weight:700; color:#fff">inherited some bills</strong></div>
     </div>
     <div data-reveal="" style="display:grid; grid-template-columns:52px 1fr; gap:26px; align-items:baseline; padding:24px 0; border-bottom:1px solid rgba(201,138,44,0.3)">
      <svg viewBox="0 0 24 24" width="30" height="30" fill="none" style="display:block; margin-top:1px"><circle cx="12" cy="12" r="8.5" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></circle><path d="M14.5 9.2c-.6-.8-1.6-1.2-2.7-1.2-1.6 0-2.7.8-2.7 2s1 1.7 2.8 2.1c1.9.4 3 .9 3 2.2s-1.2 2.1-2.9 2.1c-1.3 0-2.4-.5-3-1.4M12 6.2v11.6" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      <div style="font-size:20px; line-height:1.6; font-weight:400; color:rgba(249,246,230,0.9)">Purchasing a <a href="/featured-brownstones-for-sale/" style="color:#C98A2C" style-hover="color:#F9F6E6">real estate</a> with the <strong style="font-weight:700; color:#fff">wrong type of loan</strong></div>
     </div>
     <div data-reveal="" style="display:grid; grid-template-columns:52px 1fr; gap:26px; align-items:baseline; padding:24px 0; border-bottom:1px solid rgba(201,138,44,0.3)">
      <svg viewBox="0 0 24 24" width="30" height="30" fill="none" style="display:block; margin-top:1px"><path d="M3.5 19.5h17" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m5 15.5 4-3.5 3.5 2.5 6.5-6" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 8.5H19v3.5" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="m4.5 5 15 15" stroke="#C98A2C" stroke-width="1.5" stroke-linecap="round"></path></svg>
      <div style="font-size:20px; line-height:1.6; font-weight:400; color:rgba(249,246,230,0.9)">Overpaying for <a href="/featured-brownstones-for-sale/" style="color:#C98A2C" style-hover="color:#F9F6E6">real estate</a> and <strong style="font-weight:700; color:#fff">not getting any appreciation</strong></div>
     </div>
    </div>
    <div data-reveal="" style="display:flex; flex-direction:column; align-items:flex-start; gap:28px; margin-top:38px">
     <p style="font-size:18px; line-height:1.7; color:rgba(249,246,230,0.9); margin:0; max-width:520px; text-wrap:pretty">We'll make sure you make a <strong style="font-weight:700; color:#fff">smart purchase</strong> by saving money and avoid owning <a href="/featured-brownstones-for-sale/" style="color:#C98A2C">real estate</a> that will <strong style="font-weight:700; color:#fff">give you a headache</strong>.</p>
     <a href="https://calendly.com/montfort" style="flex:0 0 auto; display:inline-flex; align-items:center; justify-content:center; background:#C98A2C; color:#0F1729; font-size:14.5px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; border-radius:10px; padding:19px 32px; min-height:56px" style-hover="background:#F9F6E6; color:#113B5F">Schedule a Free Consultation</a>
    </div>
   </div>
  </div>
 </section>

 <section data-screen-label="Founder" style="background:#F5EECB; padding:130px 64px">
  <div style="max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1fr 520px; gap:88px; align-items:center">
   <div data-reveal="">
    <div style="display:flex; align-items:center; gap:14px">
     <span style="width:34px; height:1px; background:#C98A2C; display:block"></span>
     <span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">Who you work with</span>
    </div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:54px; line-height:1.1; letter-spacing:-0.012em; color:#0F1729; margin:20px 0 0">Stanley Montfort</h2>
    <p style="font-size:24px; line-height:1.55; font-weight:600; color:#113B5F; margin:22px 0 0; max-width:600px; text-wrap:pretty">
     I'm a realtor that helps people make smart <a href="/featured-brownstones-for-sale/" style="color:#113B5F; border-bottom:2px solid #C98A2C">real estate</a> purchases.
    </p>
    <p style="font-size:16.5px; line-height:1.85; color:#3B4C5E; margin:28px 0 0; max-width:620px; text-wrap:pretty">
     We understand the <strong style="font-weight:700; color:#0F1729">stress of purchasing <a href="/featured-brownstones-for-sale/" style="color:#113B5F">real estate</a></strong>, the time it takes to <strong style="font-weight:700; color:#0F1729">find the <a href="/featured-brownstones-for-sale/" style="color:#113B5F">real estate</a></strong> and then after making a large purchase your life is disrupted with <strong style="font-weight:700; color:#0F1729">hidden maintenance costs</strong>, violation issues, and being harassed by the city.
    </p>
    <p style="font-size:16.5px; line-height:1.85; color:#3B4C5E; margin:18px 0 0; max-width:620px; text-wrap:pretty">
     Since the start of the pandemic we have facilitated over a <strong style="font-weight:700; color:#0F1729">BILLION dollars</strong> of <a href="/featured-brownstones-for-sale/" style="color:#113B5F">real estate</a> transactions. Because of our experience <strong style="font-weight:700; color:#0F1729">we know the exact steps</strong> to make your purchase go smoothly and we can <strong style="font-weight:700; color:#0F1729">do it for you also</strong>.
    </p>
    <div style="display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); margin-top:44px; padding-top:36px; border-top:1px solid #D9CFA6">
     <div style="padding:0 32px; padding-left:0">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:40px; line-height:1; color:#113B5F">$1B+</div>
      <div style="font-size:14px; line-height:1.6; color:#3B4C5E; margin-top:14px; max-width:190px">Transactions facilitated since 2020</div>
     </div>
     <div style="padding:0 32px; border-left:1px solid #D9CFA6">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:40px; line-height:1; color:#113B5F">11</div>
      <div style="font-size:14px; line-height:1.6; color:#3B4C5E; margin-top:14px; max-width:190px">Manhattan and Brooklyn neighborhoods</div>
     </div>
     <div style="padding:0 32px; border-left:1px solid #D9CFA6">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:40px; line-height:1; color:#113B5F">$0</div>
      <div style="font-size:14px; line-height:1.6; color:#3B4C5E; margin-top:14px; max-width:190px">Cost to buyers for representation</div>
     </div>
    </div>
    <div style="display:flex; align-items:center; gap:16px; margin-top:40px">
     <a href="https://calendly.com/montfort" style="display:inline-flex; align-items:center; justify-content:center; background:#113B5F; color:#F9F6E6; font-size:14.5px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; border-radius:100px; padding:19px 34px; min-height:56px" style-hover="background:#C98A2C; color:#0F1729">Schedule a Free Consultation</a>
     <a href="/stanley-montfort/" style="font-size:12.5px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F; border-bottom:2px solid #C98A2C; padding-bottom:5px" style-hover="border-bottom-color:#0F1729">More about Stanley →</a>
    </div>
   </div>
   <div data-reveal="" style="position:relative; align-self:center; padding:34px 34px 0">
    <div style="position:absolute; inset:0 0 60px; border:1px solid rgba(201,138,44,0.55); border-radius:50%"></div>
    <div style="position:absolute; left:-6px; top:8px; width:16px; height:16px; border-radius:50%; background:#C98A2C"></div>
    <div style="position:absolute; right:6px; bottom:78px; width:9px; height:9px; border-radius:50%; background:#113B5F"></div>
    <div style="position:relative; overflow:hidden; border-radius:50%; background:#E0D9B8; box-shadow:0 40px 90px rgba(17,59,95,0.28); aspect-ratio:1/1; border:6px solid #F9F6E6">
     <img src="/redesign-assets/stanley-portrait.png" alt="Portrait of Stanley Montfort" style="display:block; width:100%; height:100%; object-fit:cover; object-position:center 12%; border-radius:50%" width="3277" height="4096">
    </div>
    <div style="position:relative; margin:-34px auto 0; width:88%; background:#0F1729; border-radius:16px; box-shadow:0 26px 54px rgba(17,59,95,0.32); padding:22px 28px; display:grid; grid-template-columns:1fr 1px 1fr; align-items:center; gap:22px">
     <div>
      <div style="font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#C98A2C">Credential</div>
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-size:15px; font-weight:700; letter-spacing:-0.01em; color:#F9F6E6; margin-top:6px">Licensed NYC Broker</div>
     </div>
     <div style="width:1px; height:38px; background:rgba(201,138,44,0.4)"></div>
     <div>
      <div style="font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#C98A2C">Affiliation</div>
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-size:15px; font-weight:700; letter-spacing:-0.01em; color:#F9F6E6; margin-top:6px">REBNY Member Firm</div>
     </div>
    </div>
    <a href="/stanley-montfort/" class="founder-more-m" style="display:none; margin:22px auto 0; font-size:12.5px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F; border-bottom:2px solid #C98A2C; padding-bottom:5px; width:fit-content">More about Stanley →</a>
   </div>
  </div>
 </section>

 <section data-screen-label="Service areas" style="background:#F9F6E6; padding:130px 64px; border-top:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto">
   <div data-reveal="" style="text-align:center">
    <div style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">Manhattan &amp; Brooklyn</div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:46px; line-height:1.2; letter-spacing:-0.008em; color:#0F1729; margin:16px 0 0; text-wrap:pretty">Featured Realtor Service Areas</h2>
    <span style="display:block; width:76px; height:3px; background:#C98A2C; margin:22px auto 0"></span>
   </div>
   <div style="display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:24px; margin-top:60px">
    <a data-reveal="" href="/harlem/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/harlem.png" alt="Harlem Realtor" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)" width="500" height="350">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Manhattan</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty; margin:0">Harlem Realtor</h3>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Historic brownstones, rich culture, and timeless Manhattan charm.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/upper-west-side/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/upper-west-side.png" alt="Upper West Side Realtor" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)" width="500" height="350">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Manhattan</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty; margin:0">Upper West Side Realtor</h3>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Elegant brownstones, cultural landmarks, and classic Manhattan living.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/upper-east-side/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/upper-east-side.png" alt="Upper East Side Realtor" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)" width="500" height="350">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Manhattan</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty; margin:0">Upper East Side Realtor</h3>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Luxury residences, world-class culture, and timeless Upper Manhattan elegance.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/chelsea/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/chelsea.jpg" alt="Chelsea Realtor" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)" width="1000" height="700">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Manhattan</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty; margin:0">Chelsea Realtor</h3>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Modern luxury, world-class art, and vibrant Manhattan living.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/downtown-brooklyn/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/downtown-brooklyn.jpg" alt="Downtown Brooklyn Realtor" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)" width="1000" height="700">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty; margin:0">Downtown Brooklyn Realtor</h3>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Modern high-rises, unmatched transit access, and vibrant Brooklyn living.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/dumbo/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/dumbo.jpg" alt="Dumbo Realtor" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)" width="1000" height="700">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty; margin:0">Dumbo Realtor</h3>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Waterfront views, luxury lofts, and iconic Brooklyn living.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/brooklyn-heights/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/brooklyn-heights.jpg" alt="Brooklyn Heights Realtor" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)" width="1000" height="700">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty; margin:0">Brooklyn Heights Realtor</h3>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Historic brownstones, skyline views, and timeless Brooklyn charm</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/bedford-stuyvesant/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/bedford-stuyvesant.jpg" alt="Bedford stuyvesant Realtor" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)" width="1000" height="700">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty; margin:0">Bedford stuyvesant Realtor</h3>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Historic brownstones, rich culture, and authentic Brooklyn living.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/williamsburg/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/williamsburg.jpg" alt="Williamsburg Realtor" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)" width="1000" height="700">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty; margin:0">Williamsburg Realtor</h3>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Waterfront living, creative energy, and modern Brooklyn luxury</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/crown-heights/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/crown-heights.jpg" alt="Crown Heights Realtor" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)" width="1000" height="700">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty; margin:0">Crown Heights Realtor</h3>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Historic brownstones, cultural diversity, and vibrant Brooklyn living</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/park-slope/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/park-slope.jpg" alt="Park Slope Realtor" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)" width="1000" height="700">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty; margin:0">Park Slope Realtor</h3>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Historic brownstones, tree-lined streets, and timeless Brooklyn living</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/neighborhoods/" style="display:flex; flex-direction:column; justify-content:space-between; height:480px; background:#113B5F; border-radius:16px; padding:40px 34px; transition:background 0.4s ease, transform 0.4s ease" style-hover="background:#0F1729; transform:translateY(-8px)">
     <div>
      <div style="font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8">All eleven areas</div>
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:32px; line-height:1.28; color:#F9F6E6; margin-top:22px; text-wrap:pretty; margin:0">Not sure which neighborhood fits you?</h3>
      <div style="font-size:15.5px; line-height:1.7; color:rgba(249,246,230,0.85); margin-top:16px">Compare every area we cover with local market data, or ask on a twenty-minute call.</div>
     </div>
     <div style="padding-top:16px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Browse all →</div>
    </a>
   </div>
  </div>
 </section>

 <section data-screen-label="Client expectations" style="background:#F5EECB; padding:130px 64px; border-top:1px solid #E0D9B8; border-bottom:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto">
   <div data-reveal="" style="max-width:820px">
    <div style="display:flex; align-items:center; gap:14px">
     <span style="width:34px; height:1px; background:#C98A2C; display:block"></span>
     <span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">What you get</span>
    </div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; line-height:1.22; letter-spacing:-0.008em; color:#0F1729; margin:18px 0 0; text-wrap:pretty">What can our clients expect from working with a realtor?</h2>
   </div>
   <div style="display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:0; margin-top:66px; padding-top:52px; border-top:2px solid #0F1729">
    <div data-reveal="" style="display:grid; grid-template-rows:auto auto auto 1fr auto; padding:0 64px; padding-left:0">
     <div style="display:flex; align-items:center; gap:16px">
      <img src="/redesign-assets/expect/offmarket.png" alt="On and off market real estate search" style="width: 220px; height: 220px; display: block; flex: 0 0 auto" width="250" height="250">
     </div>
     <div style="height:1px; background:#D9CFA6; margin:26px 0 0"></div>
     <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:25px; line-height:1.34; color:#0F1729; text-wrap:pretty; margin:24px 0 0">Identify On &amp; <strong style="font-weight:700; color:#0F1729">Off Market <a href="/advice-for-buyers-looking-to-purchase-brownstones/" style="color:#113B5F">Real Estate</a></strong></h3>
     <p style="font-size:16px; line-height:1.8; color:#3B4C5E; margin:14px 0 0; text-wrap:pretty">With our efficient <a href="/co-ownership-advantages-and-disadvantages-in-nyc/" style="color:#113B5F">real estate</a> searching process we'll provide you with weekly updates of both on and off market real estate to not waste your time seeing properties that do not fit your search criteria</p>
     <a href="/perfect-home-finder/" style="display:flex; align-items:center; gap:10px; margin-top:28px; font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Perfect home finder <span style="color:#C98A2C">→</span></a>
    </div>
    <div data-reveal="" style="display:grid; grid-template-rows:auto auto auto 1fr auto; padding:0 64px; border-left:1px solid #D9CFA6; border-right:1px solid #D9CFA6">
     <div style="display:flex; align-items:center; gap:16px">
      <img src="/redesign-assets/expect/troublesome.png" alt="Troublesome brownstone interior" style="width: 231px; height: 220px; display: block; flex: 0 0 auto" width="250" height="250">
     </div>
     <div style="height:1px; background:#D9CFA6; margin:26px 0 0"></div>
     <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:25px; line-height:1.34; color:#0F1729; text-wrap:pretty; margin:24px 0 0">Avoid a <strong style="font-weight:700; color:#0F1729">Troublesome <a href="/advice-for-buyers-looking-to-purchase-brownstones/" style="color:#113B5F">Real Estate</a></strong></h3>
     <p style="font-size:16px; line-height:1.8; color:#3B4C5E; margin:14px 0 0; text-wrap:pretty">With our <strong style="font-weight:700; color:#0F1729">real estate due diligence</strong> process you'll keep more money in your pocket and avoid costly mistakes</p>
     <a href="/whats-my-home-worth/" style="display:flex; align-items:center; gap:10px; margin-top:28px; font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">What’s my home worth <span style="color:#C98A2C">→</span></a>
    </div>
    <div data-reveal="" style="display:grid; grid-template-rows:auto auto auto 1fr auto; padding:0 64px; padding-right:0">
     
     <div style="display:flex; align-items:center; gap:16px">
      <img src="/redesign-assets/expect/team.png" alt="Attorneys, contractors and inspectors" style="width: 220px; height: 220px; display: block; flex: 0 0 auto" width="250" height="250">
     </div><div style="height:1px; background:#D9CFA6; margin:26px 0 0"></div>
     <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:25px; line-height:1.34; color:#0F1729; margin-top:24px; text-wrap:pretty">Get Access To The <strong style="font-weight:700; color:#0F1729">Best Attorneys</strong>, Contractors, and Inspectors <strong style="font-weight:700; color:#0F1729">In The Industry</strong></div>
     <p style="font-size:16px; line-height:1.8; color:#3B4C5E; margin:14px 0 0; text-wrap:pretty">With our <strong style="font-weight:700; color:#0F1729">experienced team</strong>, you'll move through the <strong style="font-weight:700; color:#0F1729">transaction efficiently</strong> and will not go through the real estate <strong style="font-weight:700; color:#0F1729">purchasing process</strong> blind</p>
     <a href="/mortgage-calculator/" style="display:flex; align-items:center; gap:10px; margin-top:28px; font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Mortgage calculator <span style="color:#C98A2C">→</span></a>
    </div>
   </div>
   <div data-reveal="" style="display:flex; align-items:center; justify-content:space-between; gap:44px; margin-top:64px; padding-top:32px; border-top:1px solid #D9CFA6">
    <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:24px; line-height:1.4; color:#0F1729; max-width:620px; text-wrap:pretty; margin:0">Twenty minutes on the phone tells you whether we are the right fit.</h3>
    <a href="https://calendly.com/montfort" style="flex:0 0 auto; display:inline-flex; align-items:center; justify-content:center; background:#113B5F; color:#F9F6E6; font-size:14.5px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; border-radius:10px; padding:19px 38px; min-height:56px" style-hover="background:#C98A2C; color:#0F1729">Schedule Free Consultation</a>
   </div>
  </div>
 </section>

 <section data-screen-label="Buying plan" style="position:relative; background:#fff; padding:120px 64px; border-top:1px solid #E0D9B8; border-bottom:1px solid #E0D9B8; overflow:hidden">
  <div style="position:relative; max-width:1440px; margin:0 auto">
   <div data-reveal="" style="display:flex; align-items:flex-end; justify-content:space-between; gap:56px">
    <div>
     <div style="display:flex; align-items:center; gap:14px">
      <span style="width:34px; height:1px; background:#C98A2C; display:block"></span>
      <span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">How it works</span>
     </div>
     <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:46px; line-height:1.2; letter-spacing:-0.008em; color:#0F1729; margin:16px 0 0; max-width:760px; text-wrap:pretty">Efficient Realtor Buying Plan</h2>
    </div>
    <a href="https://calendly.com/montfort" style="font-size:13px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#113B5F; white-space:nowrap; border-bottom:2px solid #C98A2C; padding-bottom:5px" style-hover="border-bottom-color:#0F1729">Schedule a Free Consultation</a>
   </div>
   <div style="display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:40px; margin-top:64px">
    <div data-reveal="">
     <div style="position:relative; aspect-ratio:1/1; border-radius:50%; overflow:hidden; background:#EFE7C4; border:1px solid rgba(201,138,44,0.45); box-shadow:0 22px 48px rgba(17,59,95,0.14)"><img src="/redesign-assets/plan/step1.png" alt="Realtor on a consultation call" style="width:100%; height:100%; object-fit:cover; display:block" width="3000" height="2000"></div>
     <div style="display:flex; align-items:baseline; gap:16px; margin-top:8px">
      <span style="font-size:15px; font-weight:900; letter-spacing:0.16em; color:#C98A2C">01</span>
      <span style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:25px; line-height:1.35; color:#0F1729">Schedule Free Consultation w/ Realtor</span>
     </div>
     <p style="font-size:16.5px; line-height:1.85; color:#3B4C5E; margin:14px 0 0; max-width:360px; text-wrap:pretty">We'll listen to your requirements, give you an overview of the market/process and you can decide if we're a good fit</p>
    </div>
    <div data-reveal="">
     <div style="position:relative; aspect-ratio:1/1; border-radius:50%; overflow:hidden; background:#EFE7C4; border:1px solid rgba(201,138,44,0.45); box-shadow:0 22px 48px rgba(17,59,95,0.14)"><img src="/redesign-assets/plan/step2.png" alt="Realtor showing a couple a home" style="width:100%; height:100%; object-fit:cover; display:block" width="3000" height="2000"></div>
     <div style="display:flex; align-items:baseline; gap:16px; margin-top:8px">
      <span style="font-size:15px; font-weight:900; letter-spacing:0.16em; color:#C98A2C">02</span>
      <span style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:25px; line-height:1.35; color:#0F1729">Realtor Will Get to Work</span>
     </div>
     <p style="font-size:16.5px; line-height:1.85; color:#3B4C5E; margin:14px 0 0; max-width:360px; text-wrap:pretty">We'll curate on market and off market real estate showings for you that fit your criteria</p>
    </div>
    <div data-reveal="">
     <div style="position:relative; aspect-ratio:1/1; border-radius:50%; overflow:hidden; background:#EFE7C4; border:1px solid rgba(201,138,44,0.45); box-shadow:0 22px 48px rgba(17,59,95,0.14)"><img src="/redesign-assets/plan/step3.png" alt="Couple celebrating their new home" style="width:100%; height:100%; object-fit:cover; display:block" width="3000" height="2000"></div>
     <div style="display:flex; align-items:baseline; gap:16px; margin-top:8px">
      <span style="font-size:15px; font-weight:900; letter-spacing:0.16em; color:#C98A2C">03</span>
      <span style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:25px; line-height:1.35; color:#0F1729">Enjoy your dream home</span>
     </div>
     <p style="font-size:16.5px; line-height:1.85; color:#3B4C5E; margin:14px 0 0; max-width:360px; text-wrap:pretty">You'll live in your home without any worries</p>
    </div>
   </div>
  </div>
 </section>

 <section data-screen-label="Services" style="background:#F9F6E6; padding:120px 64px">
  <div style="max-width:1440px; margin:0 auto">
   <div data-reveal="" style="display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:end">
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:46px; line-height:1.2; letter-spacing:-0.008em; color:#0F1729; margin:0; text-wrap:pretty">Offered Realtor Services</h2>
    <p style="font-size:17px; line-height:1.85; color:#3B4C5E; margin:0; text-wrap:pretty">Whether you are looking for realtors in <a href="/featured-brownstones-for-sale/manhattan/west-harlem/" style="color:#113B5F">Harlem</a>, Upper Westside, or other parts of NYC our dedicated, and highly qualified team of brokers is at your service to assist buyers like yourself with your real estate goals, whether purchasing or selling property.</p>
   </div>
   <div style="display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:28px; margin-top:56px">
    <a data-reveal="" href="/nyc-buyers-agent-service/" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="aspect-ratio:11/9; overflow:hidden"><img src="/redesign-assets/services/buyers-agent.png" alt="NYC Buyer's Agent materials on a desk" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="550" height="450"></div>
     <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:30px 30px 32px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:24px; line-height:1.3; color:#0F1729; text-wrap:pretty; margin:0">NYC Buyer’s Agent</h3>
      <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:14px 0 0; flex:1 1 auto; text-wrap:pretty">Expert representation to protect your interests, surface the right opportunities, and negotiate favorable terms in NYC’s most competitive market.</p>
      <div style="display:flex; align-items:center; gap:9px; margin-top:24px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Learn more <span style="color:#C98A2C">→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/nyc-listing-agent-service/" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="aspect-ratio:11/9; overflow:hidden"><img src="/redesign-assets/services/listing-agent.png" alt="NYC Listing Agent materials on a desk" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="550" height="450"></div>
     <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:30px 30px 32px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:24px; line-height:1.3; color:#0F1729; text-wrap:pretty; margin:0">NYC Listing Agent</h3>
      <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:14px 0 0; flex:1 1 auto; text-wrap:pretty">Strategic pricing, professional marketing, and skilled negotiation to maximize value across co-ops, condos, brownstones, and townhomes.</p>
      <div style="display:flex; align-items:center; gap:9px; margin-top:24px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Learn more <span style="color:#C98A2C">→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/nyc-multifamily-real-estate-agent-service/" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="aspect-ratio:11/9; overflow:hidden"><img src="/redesign-assets/services/multifamily.png" alt="NYC Multifamily Agent materials on a desk" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="550" height="450"></div>
     <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:30px 30px 32px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:24px; line-height:1.3; color:#0F1729; text-wrap:pretty; margin:0">NYC Multifamily Agent</h3>
      <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:14px 0 0; flex:1 1 auto; text-wrap:pretty">Guidance on 2–4 unit buildings, brownstone conversions, and value-add investments to build long-term wealth across the boroughs.</p>
      <div style="display:flex; align-items:center; gap:9px; margin-top:24px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Learn more <span style="color:#C98A2C">→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/home-valuation/" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="aspect-ratio:11/9; overflow:hidden"><img src="/redesign-assets/services/home-valuation.png" alt="NYC Free Home Valuation flyer and tablet" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="550" height="450"></div>
     <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:30px 30px 32px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:24px; line-height:1.3; color:#0F1729; text-wrap:pretty; margin:0">NYC Free Home Valuation</h3>
      <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:14px 0 0; flex:1 1 auto; text-wrap:pretty">Understand what your property is truly worth, beyond automated estimates, with expert, neighborhood-specific market insight.</p>
      <div style="display:flex; align-items:center; gap:9px; margin-top:24px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Learn more <span style="color:#C98A2C">→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/mortgage-calculator/" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="aspect-ratio:11/9; overflow:hidden"><img src="/redesign-assets/services/mortgage.png" alt="NYC Mortgage Calculator on a laptop" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="550" height="450"></div>
     <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:30px 30px 32px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:24px; line-height:1.3; color:#0F1729; text-wrap:pretty; margin:0">NYC Mortgage Calculator</h3>
      <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:14px 0 0; flex:1 1 auto; text-wrap:pretty">See your full monthly cost, maintenance, common charges, taxes, and closing costs, before you make an offer.</p>
      <div style="display:flex; align-items:center; gap:9px; margin-top:24px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Learn more <span style="color:#C98A2C">→</span></div>
     </div>
    </a>
    <a data-reveal="" href="https://calendly.com/montfort" target="_blank" rel="noopener" style="display:flex; flex-direction:column; justify-content:space-between; background:#113B5F; border-radius:16px; padding:34px 32px; transition:background .4s ease, transform .4s ease" style-hover="background:#0F1729; transform:translateY(-7px)">
     <div>
      <div style="font-size:10.5px; font-weight:800; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8">Not sure where to start?</div>
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:26px; line-height:1.3; color:#F9F6E6; margin-top:18px; text-wrap:pretty; margin:0">Let’s find the right service for you.</h3>
      <p style="font-size:15.5px; line-height:1.7; color:rgba(249,246,230,0.85); margin:14px 0 0">Twenty minutes on the phone is all it takes to map out your next move.</p>
     </div>
     <div style="display:flex; align-items:center; gap:9px; margin-top:28px; padding-top:16px; border-top:1px solid rgba(201,138,44,0.6); font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#F0D9A8">Book a consultation <span>→</span></div>
    </a>
   </div>
  </div>
 </section>

 <section data-screen-label="Reviews" style="background:#F5EECB; padding:120px 64px; border-top:1px solid #E0D9B8; border-bottom:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto">
   <div data-reveal="" style="display:flex; align-items:flex-end; justify-content:space-between; gap:56px">
    <div>
     <div style="display:flex; align-items:center; gap:14px">
      <span style="width:34px; height:1px; background:#C98A2C; display:block"></span>
      <span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">What clients say</span>
     </div>
     <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:46px; line-height:1.2; letter-spacing:-0.008em; color:#0F1729; margin:16px 0 0">Realtor Reviews</h2>
    </div>
    <div style="display:flex; align-items:center; gap:18px; padding-bottom:14px; border-bottom:2px solid #C98A2C">
     <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" style="width:24px; height:24px; display:block">
     <span style="font-size:40px; font-weight:900; color:#113B5F; line-height:1; letter-spacing:-0.03em">5.0</span>
     <div>
      <span style="display:block; color:#113B5F; font-size:18px; letter-spacing:0.14em; line-height:1">★★★★★</span>
      <a href="/success-stories/" style="display:block; font-size:13px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; color:#113B5F; margin-top:9px">Read all reviews →</a>
     </div>
    </div>
   </div>
   <div style="position:relative; margin-top:52px">
    <div id="review-track" class="no-sb" style="display:flex; gap:0; overflow-x:auto; scroll-snap-type:x mandatory; scroll-behavior:smooth; border-radius:16px">
    <a href="https://www.google.com/maps/contrib/107286042219082422872/reviews?hl=en" target="_blank" rel="noopener" style="scroll-snap-align:center; flex:0 0 100%; display:grid; grid-template-columns:300px 1fr; gap:56px; align-items:center; background:#FBF8EC; border:1px solid #E0D9B8; border-radius:16px; padding:56px 60px; box-sizing:border-box">
     <div style="display:flex; flex-direction:column; align-items:flex-start; gap:20px">
      <img src="https://lh3.googleusercontent.com/a-/ALV-UjViSqMG3KN7oLq8R0QnIw-DaXDyjT90luYGecAIkSmU_hO3gSPc=s120-c-rp-mo" alt="Anika Nfr-Ka Ma’at Daniels" referrerpolicy="no-referrer" style="width:104px; height:104px; border-radius:100px; object-fit:cover; background:#E0D9B8">
      <div>
       <h4 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:21px; color:#0F1729; line-height:1.25; margin:0">Anika Nfr-Ka Ma’at Daniels</h4>
       <div style="display:flex; align-items:center; gap:7px; margin-top:8px; font-size:11.5px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#3B4C5E"><img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="" style="width:15px; height:15px; display:block; filter:brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(2deg)"> Posted on Google</div>
      </div>
      <span style="color:#C98A2C; font-size:17px; letter-spacing:0.18em; line-height:1">★★★★★</span>
     </div>
     <div>
      <span style="font-family:Georgia,serif; font-size:82px; color:#C98A2C; line-height:0.4; display:block; height:44px">“</span>
      <p style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:400; font-size:27px; line-height:1.5; color:#0F1729; margin:24px 0 0; text-wrap:pretty">Stan is extremely knowledgeable and professional. He also has the utmost patience! He helped me sell my home and purchase a condo at the same time. My home had all types of special contingencies but he was able to find me a buyer and get me very close to the price I wanted. I was very specific in terms of the property that I wanted to buy and although it took some time, he was able to find me the…</p>
     </div>
    </a>
    <a href="https://www.google.com/maps/contrib/108132066685824850224/reviews?hl=en" target="_blank" rel="noopener" style="scroll-snap-align:center; flex:0 0 100%; display:grid; grid-template-columns:300px 1fr; gap:56px; align-items:center; background:#FBF8EC; border:1px solid #E0D9B8; border-radius:16px; padding:56px 60px; box-sizing:border-box">
     <div style="display:flex; flex-direction:column; align-items:flex-start; gap:20px">
      <img src="https://lh3.googleusercontent.com/a-/ALV-UjW2GJgbKFCs8CWRPaU68LmyIpJoffj2f9xx_ErBW95J1KmjMk0q=s120-c-rp-mo" alt="Davon Snipes" referrerpolicy="no-referrer" style="width:104px; height:104px; border-radius:100px; object-fit:cover; background:#E0D9B8">
      <div>
       <h4 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:21px; color:#0F1729; line-height:1.25; margin:0">Davon Snipes</h4>
       <div style="display:flex; align-items:center; gap:7px; margin-top:8px; font-size:11.5px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#3B4C5E"><img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="" style="width:15px; height:15px; display:block; filter:brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(2deg)"> Posted on Google</div>
      </div>
      <span style="color:#C98A2C; font-size:17px; letter-spacing:0.18em; line-height:1">★★★★★</span>
     </div>
     <div>
      <span style="font-family:Georgia,serif; font-size:82px; color:#C98A2C; line-height:0.4; display:block; height:44px">“</span>
      <p style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:400; font-size:27px; line-height:1.5; color:#0F1729; margin:24px 0 0; text-wrap:pretty">Stan has been an incredibly patient, knowledge, and professional broker. He understands the market, and has many relationships in the industry. He was thoughtful and gracious about responding to our feedback, and left no stone unturned in helping us to find the property of our dreams. And he continues to provide guidance and counsel post-closing. If you're looking for a brilliant real estate…</p>
     </div>
    </a>
    <a href="https://www.google.com/maps/contrib/116771421068638089471/reviews?hl=en" target="_blank" rel="noopener" style="scroll-snap-align:center; flex:0 0 100%; display:grid; grid-template-columns:300px 1fr; gap:56px; align-items:center; background:#FBF8EC; border:1px solid #E0D9B8; border-radius:16px; padding:56px 60px; box-sizing:border-box">
     <div style="display:flex; flex-direction:column; align-items:flex-start; gap:20px">
      <img src="https://lh3.googleusercontent.com/a/ACg8ocJF8BS2Xi87Fcaj122YKs-p4jY3uuigUkyo_LFIR4JEbnbvbg=s120-c-rp-mo" alt="Perry Witmer" referrerpolicy="no-referrer" style="width:104px; height:104px; border-radius:100px; object-fit:cover; background:#E0D9B8">
      <div>
       <h4 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:21px; color:#0F1729; line-height:1.25; margin:0">Perry Witmer</h4>
       <div style="display:flex; align-items:center; gap:7px; margin-top:8px; font-size:11.5px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#3B4C5E"><img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="" style="width:15px; height:15px; display:block; filter:brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(2deg)"> Posted on Google</div>
      </div>
      <span style="color:#C98A2C; font-size:17px; letter-spacing:0.18em; line-height:1">★★★★★</span>
     </div>
     <div>
      <span style="font-family:Georgia,serif; font-size:82px; color:#C98A2C; line-height:0.4; display:block; height:44px">“</span>
      <p style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:400; font-size:27px; line-height:1.5; color:#0F1729; margin:24px 0 0; text-wrap:pretty">Stanley is amazing! No one knows the Harlem market better than him, and his deep expertise was a tremendous resource. He taught me along the way how to spot 'red flags' and talked me out of making an offer on a place that seemed amazing but had, upon his close inspection, evidence of poor workmanship and lots of cut corners. Other brokers remarked in private to me about both his expertise and his…</p>
     </div>
    </a>
    <a href="https://www.google.com/maps/contrib/109328620676722096746/reviews?hl=en" target="_blank" rel="noopener" style="scroll-snap-align:center; flex:0 0 100%; display:grid; grid-template-columns:300px 1fr; gap:56px; align-items:center; background:#FBF8EC; border:1px solid #E0D9B8; border-radius:16px; padding:56px 60px; box-sizing:border-box">
     <div style="display:flex; flex-direction:column; align-items:flex-start; gap:20px">
      <img src="https://lh3.googleusercontent.com/a/ACg8ocJ_u11llTjoHDxUSwbwBOVjPqAEEYxXctnGw2ipJT0OmPkN0KAd=s120-c-rp-mo-ba12" alt="Corey A. Witmer" referrerpolicy="no-referrer" style="width:104px; height:104px; border-radius:100px; object-fit:cover; background:#E0D9B8">
      <div>
       <h4 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:21px; color:#0F1729; line-height:1.25; margin:0">Corey A. Witmer</h4>
       <div style="display:flex; align-items:center; gap:7px; margin-top:8px; font-size:11.5px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#3B4C5E"><img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="" style="width:15px; height:15px; display:block; filter:brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(2deg)"> Posted on Google</div>
      </div>
      <span style="color:#C98A2C; font-size:17px; letter-spacing:0.18em; line-height:1">★★★★★</span>
     </div>
     <div>
      <span style="font-family:Georgia,serif; font-size:82px; color:#C98A2C; line-height:0.4; display:block; height:44px">“</span>
      <p style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:400; font-size:27px; line-height:1.5; color:#0F1729; margin:24px 0 0; text-wrap:pretty">Stanley was the dream real estate agent we didn’t know we deserved! From the beginning he was attentive to our curiosity to help us figure out what type of property we wanted - and could afford. Throughout the process he was a calm and patient presence in our lives, offering us sincere and sage perspectives to keep us grounded while managing our expectations. Even with the ups and downs -…</p>
     </div>
    </a>
    <a href="https://www.google.com/maps/contrib/100922205373403327263/reviews?hl=en" target="_blank" rel="noopener" style="scroll-snap-align:center; flex:0 0 100%; display:grid; grid-template-columns:300px 1fr; gap:56px; align-items:center; background:#FBF8EC; border:1px solid #E0D9B8; border-radius:16px; padding:56px 60px; box-sizing:border-box">
     <div style="display:flex; flex-direction:column; align-items:flex-start; gap:20px">
      <img src="https://lh3.googleusercontent.com/a-/ALV-UjVd25nW1zHtfxUwKZuHN2Z62I2M2518k9vbRgSFDL7raRgZLhc=s120-c-rp-mo" alt="Seth Rabinowitz" referrerpolicy="no-referrer" style="width:104px; height:104px; border-radius:100px; object-fit:cover; background:#E0D9B8">
      <div>
       <h4 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:21px; color:#0F1729; line-height:1.25; margin:0">Seth Rabinowitz</h4>
       <div style="display:flex; align-items:center; gap:7px; margin-top:8px; font-size:11.5px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#3B4C5E"><img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="" style="width:15px; height:15px; display:block; filter:brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(2deg)"> Posted on Google</div>
      </div>
      <span style="color:#C98A2C; font-size:17px; letter-spacing:0.18em; line-height:1">★★★★★</span>
     </div>
     <div>
      <span style="font-family:Georgia,serif; font-size:82px; color:#C98A2C; line-height:0.4; display:block; height:44px">“</span>
      <p style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:400; font-size:27px; line-height:1.5; color:#0F1729; margin:24px 0 0; text-wrap:pretty">We had a great experience working with Stanley. He taught us a lot about the specific market we were looking in, which enabled us to make a very good decision on purchase of a new home.</p>
     </div>
    </a>
    <a href="https://www.google.com/maps/contrib/101694945511048714275/reviews?hl=en" target="_blank" rel="noopener" style="scroll-snap-align:center; flex:0 0 100%; display:grid; grid-template-columns:300px 1fr; gap:56px; align-items:center; background:#FBF8EC; border:1px solid #E0D9B8; border-radius:16px; padding:56px 60px; box-sizing:border-box">
     <div style="display:flex; flex-direction:column; align-items:flex-start; gap:20px">
      <img src="https://lh3.googleusercontent.com/a-/ALV-UjX0xFjJe65Or_gH4pidKtMzlHLnwtjHpiu1DGAeEo9WZQTVlvKdzg=s120-c-rp-mo-ba12" alt="Angelina Darrisaw" referrerpolicy="no-referrer" style="width:104px; height:104px; border-radius:100px; object-fit:cover; background:#E0D9B8">
      <div>
       <h4 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:21px; color:#0F1729; line-height:1.25; margin:0">Angelina Darrisaw</h4>
       <div style="display:flex; align-items:center; gap:7px; margin-top:8px; font-size:11.5px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:#3B4C5E"><img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="" style="width:15px; height:15px; display:block; filter:brightness(0) invert(1) sepia(1) saturate(3) hue-rotate(2deg)"> Posted on Google</div>
      </div>
      <span style="color:#C98A2C; font-size:17px; letter-spacing:0.18em; line-height:1">★★★★★</span>
     </div>
     <div>
      <span style="font-family:Georgia,serif; font-size:82px; color:#C98A2C; line-height:0.4; display:block; height:44px">“</span>
      <p style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:400; font-size:27px; line-height:1.5; color:#0F1729; margin:24px 0 0; text-wrap:pretty">Incredible experience. Very knowledgeable about the brownstone buying process and helped me understand the budget differences for condo vs brownstones. Walked away more informed as a result.</p>
     </div>
    </a>
    </div>
    <button id="review-prev" aria-label="Previous review" onclick="var t=document.getElementById('review-track'); var w=t.clientWidth||1; var n=t.children.length; var cur=Math.round(t.scrollLeft/w); var i=((cur+(-1))%n+n)%n; t.scrollTo({left:i*w, behavior:'smooth'}); return false;" style="position:absolute; top:50%; left:-8px; transform:translateY(-50%); width:56px; height:56px; border-radius:100px; border:1px solid #C98A2C; background:#F9F6E6; color:#113B5F; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 12px 30px rgba(17,59,95,0.22); transition:background .25s ease, color .25s ease" style-hover="background:#113B5F; color:#F9F6E6"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
    <button id="review-next" onclick="var t=document.getElementById('review-track'); var w=t.clientWidth||1; var n=t.children.length; var cur=Math.round(t.scrollLeft/w); var i=((cur+(1))%n+n)%n; t.scrollTo({left:i*w, behavior:'smooth'}); return false;" aria-label="Next review" style="position:absolute; top:50%; right:-8px; transform:translateY(-50%); width:56px; height:56px; border-radius:100px; border:1px solid #C98A2C; background:#F9F6E6; color:#113B5F; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 12px 30px rgba(17,59,95,0.22); transition:background .25s ease, color .25s ease" style-hover="background:#113B5F; color:#F9F6E6"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
   </div>
   <div id="review-dots" style="display:flex; align-items:center; justify-content:center; gap:10px; margin-top:32px">
    <button class="rev-dot" data-i="0" onclick="var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;" aria-label="Go to review 1" style="width:9px; height:9px; padding:0; border:0; border-radius:100px; background:#C98A2C; cursor:pointer; transition:background .25s ease, width .25s ease; width:28px;"></button>
    <button class="rev-dot" data-i="1" onclick="var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;" aria-label="Go to review 2" style="width:9px; height:9px; padding:0; border:0; border-radius:100px; background:#D9CFA6; cursor:pointer; transition:background .25s ease, width .25s ease; "></button>
    <button class="rev-dot" data-i="2" onclick="var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;" aria-label="Go to review 3" style="width:9px; height:9px; padding:0; border:0; border-radius:100px; background:#D9CFA6; cursor:pointer; transition:background .25s ease, width .25s ease; "></button>
    <button class="rev-dot" data-i="3" onclick="var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;" aria-label="Go to review 4" style="width:9px; height:9px; padding:0; border:0; border-radius:100px; background:#D9CFA6; cursor:pointer; transition:background .25s ease, width .25s ease; "></button>
    <button class="rev-dot" data-i="4" onclick="var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;" aria-label="Go to review 5" style="width:9px; height:9px; padding:0; border:0; border-radius:100px; background:#D9CFA6; cursor:pointer; transition:background .25s ease, width .25s ease; "></button>
    <button class="rev-dot" data-i="5" onclick="var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;" aria-label="Go to review 6" style="width:9px; height:9px; padding:0; border:0; border-radius:100px; background:#D9CFA6; cursor:pointer; transition:background .25s ease, width .25s ease; "></button>
   </div>
  </div>
 </section>

 <section data-screen-label="Instagram" style="background:#F9F6E6; padding:110px 64px; border-top:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto">
   <div data-reveal="" style="display:flex; align-items:flex-end; justify-content:space-between; gap:40px">
    <div style="display:flex; align-items:center; gap:20px">
     <div style="width:64px; height:64px; border-radius:100px; padding:2.5px; background:linear-gradient(135deg,#C98A2C,#F0D9A8); flex:0 0 auto">
      <div style="width:100%; height:100%; border-radius:100px; overflow:hidden; background:#0F1729; display:flex; align-items:center; justify-content:center">
       <img src="https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png" alt="Montfort" style="width:40px; height:40px; object-fit:contain; filter:invert(1) brightness(2)">
      </div>
     </div>
     <div>
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:26px; letter-spacing:-0.01em; color:#0F1729; line-height:1.1">@stanleymontfort</div>
      <div style="font-size:14px; color:#3B4C5E; margin-top:4px">Follow the latest listings, sales &amp; NYC market insight</div>
     </div>
    </div>
    <a href="https://www.instagram.com/stanleymontfort/" target="_blank" rel="noopener" style="flex:0 0 auto; display:inline-flex; align-items:center; gap:9px; background:#0F1729; color:#F9F6E6; font-size:13px; font-weight:800; letter-spacing:0.08em; text-transform:uppercase; border-radius:100px; padding:15px 28px; min-height:50px" style-hover="background:#C98A2C; color:#0F1729">
     <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"></rect><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"></circle><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"></circle></svg>
     Follow
    </a>
   </div>
   <div style="display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:22px; margin-top:52px">
    <a href="https://www.instagram.com/p/DbZFQBTD4hS/" target="_blank" rel="noopener" style="position:relative; display:block; aspect-ratio:1/1; border-radius:16px; overflow:hidden; background:#0F1729; group">
     <img src="/instagram/ig-1.jpg" alt="Instagram post" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover" width="640" height="800">
     
     <div class="ig-ov" style="position:absolute; inset:0; padding:20px; display:flex; flex-direction:column; justify-content:flex-end; background:linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%); opacity:0; transition:opacity .35s ease">
      <p style="font-size:13.5px; line-height:1.5; color:#F9F6E6; margin:0 0 12px; font-weight:500; text-wrap:pretty">Just Listed: 904 Gates Avenue, Bedford-Stuyvesant</p>
      <div style="display:flex; align-items:center; gap:16px; color:#F0D9A8; font-size:12.5px; font-weight:700">
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 22</span>
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 3</span>
      </div>
     </div>
    </a>
    <a href="https://www.instagram.com/p/DbWdWwVCUnb/" target="_blank" rel="noopener" style="position:relative; display:block; aspect-ratio:1/1; border-radius:16px; overflow:hidden; background:#0F1729; group">
     <img src="/instagram/ig-2.jpg" alt="Instagram post" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover" width="1439" height="959">
     
     <div class="ig-ov" style="position:absolute; inset:0; padding:20px; display:flex; flex-direction:column; justify-content:flex-end; background:linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%); opacity:0; transition:opacity .35s ease">
      <p style="font-size:13.5px; line-height:1.5; color:#F9F6E6; margin:0 0 12px; font-weight:500; text-wrap:pretty">A 4-unit Brooklyn property where the numbers really stand out</p>
      <div style="display:flex; align-items:center; gap:16px; color:#F0D9A8; font-size:12.5px; font-weight:700">
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 41</span>
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 2</span>
      </div>
     </div>
    </a>
    <a href="https://www.instagram.com/p/DbHHdBzGiZ3/" target="_blank" rel="noopener" style="position:relative; display:block; aspect-ratio:1/1; border-radius:16px; overflow:hidden; background:#0F1729; group">
     <img src="/instagram/ig-3.jpg" alt="Instagram post" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover" width="1439" height="959">
     
     <div class="ig-ov" style="position:absolute; inset:0; padding:20px; display:flex; flex-direction:column; justify-content:flex-end; background:linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%); opacity:0; transition:opacity .35s ease">
      <p style="font-size:13.5px; line-height:1.5; color:#F9F6E6; margin:0 0 12px; font-weight:500; text-wrap:pretty">SOLD: 481 West 145th Street, last asking $2,550,000</p>
      <div style="display:flex; align-items:center; gap:16px; color:#F0D9A8; font-size:12.5px; font-weight:700">
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 70</span>
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 11</span>
      </div>
     </div>
    </a>
    <a href="https://www.instagram.com/p/DalKzvTEWlq/" target="_blank" rel="noopener" style="position:relative; display:block; aspect-ratio:1/1; border-radius:16px; overflow:hidden; background:#0F1729; group">
     <img src="/instagram/ig-4.jpg" alt="Instagram post" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover" width="720" height="900">
     
     <div class="ig-ov" style="position:absolute; inset:0; padding:20px; display:flex; flex-direction:column; justify-content:flex-end; background:linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%); opacity:0; transition:opacity .35s ease">
      <p style="font-size:13.5px; line-height:1.5; color:#F9F6E6; margin:0 0 12px; font-weight:500; text-wrap:pretty">What if owning a brownstone cost less each month than renting?</p>
      <div style="display:flex; align-items:center; gap:16px; color:#F0D9A8; font-size:12.5px; font-weight:700">
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 65</span>
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 9</span>
      </div>
     </div>
    </a>
    <a href="https://www.instagram.com/p/DadYwSGFTy_/" target="_blank" rel="noopener" style="position:relative; display:block; aspect-ratio:1/1; border-radius:16px; overflow:hidden; background:#0F1729; group">
     <img src="/instagram/ig-5.jpg" alt="Instagram post" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover" width="720" height="900">
     
     <div class="ig-ov" style="position:absolute; inset:0; padding:20px; display:flex; flex-direction:column; justify-content:flex-end; background:linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%); opacity:0; transition:opacity .35s ease">
      <p style="font-size:13.5px; line-height:1.5; color:#F9F6E6; margin:0 0 12px; font-weight:500; text-wrap:pretty">SOLD: 49 East 126th Street, last asking $2,250,000</p>
      <div style="display:flex; align-items:center; gap:16px; color:#F0D9A8; font-size:12.5px; font-weight:700">
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 88</span>
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 19</span>
      </div>
     </div>
    </a>
    <a href="https://www.instagram.com/p/DaQ7iNZicGp/" target="_blank" rel="noopener" style="position:relative; display:block; aspect-ratio:1/1; border-radius:16px; overflow:hidden; background:#0F1729; group">
     <img src="/instagram/ig-6.jpg" alt="Instagram post" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover" width="1080" height="1350">
     
     <div class="ig-ov" style="position:absolute; inset:0; padding:20px; display:flex; flex-direction:column; justify-content:flex-end; background:linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%); opacity:0; transition:opacity .35s ease">
      <p style="font-size:13.5px; line-height:1.5; color:#F9F6E6; margin:0 0 12px; font-weight:500; text-wrap:pretty">How to create $2,000,000+ in equity buying a brownstone</p>
      <div style="display:flex; align-items:center; gap:16px; color:#F0D9A8; font-size:12.5px; font-weight:700">
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 67</span>
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 5</span>
      </div>
     </div>
    </a>
    <a href="https://www.instagram.com/p/DaLXUDZkbRu/" target="_blank" rel="noopener" style="position:relative; display:block; aspect-ratio:1/1; border-radius:16px; overflow:hidden; background:#0F1729; group">
     <img src="/instagram/ig-7.jpg" alt="Instagram post" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover" width="1080" height="1350">
     
     <div class="ig-ov" style="position:absolute; inset:0; padding:20px; display:flex; flex-direction:column; justify-content:flex-end; background:linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%); opacity:0; transition:opacity .35s ease">
      <p style="font-size:13.5px; line-height:1.5; color:#F9F6E6; margin:0 0 12px; font-weight:500; text-wrap:pretty">SOLD: 265 West 139th Street, a Strivers’ Row landmark</p>
      <div style="display:flex; align-items:center; gap:16px; color:#F0D9A8; font-size:12.5px; font-weight:700">
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 169</span>
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 16</span>
      </div>
     </div>
    </a>
    <a href="https://www.instagram.com/reel/DY0PDihu1pt/" target="_blank" rel="noopener" style="position:relative; display:block; aspect-ratio:1/1; border-radius:16px; overflow:hidden; background:#0F1729; group">
     <img src="/instagram/ig-8.jpg" alt="Instagram post" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover" width="1080" height="1350">
     <span style="position:absolute; top:14px; right:14px; width:34px; height:34px; border-radius:100px; background:rgba(15,23,41,0.6); display:flex; align-items:center; justify-content:center"><svg width="14" height="14" viewBox="0 0 16 16" fill="#fff"><path d="M4 3l9 5-9 5z"></path></svg></span>
     <div class="ig-ov" style="position:absolute; inset:0; padding:20px; display:flex; flex-direction:column; justify-content:flex-end; background:linear-gradient(180deg, rgba(15,23,41,0) 34%, rgba(15,23,41,0.9) 100%); opacity:0; transition:opacity .35s ease">
      <p style="font-size:13.5px; line-height:1.5; color:#F9F6E6; margin:0 0 12px; font-weight:500; text-wrap:pretty">In Contract: 49 East 126th Street, Harlem brownstone</p>
      <div style="display:flex; align-items:center; gap:16px; color:#F0D9A8; font-size:12.5px; font-weight:700">
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path></svg> 58</span>
       <span style="display:flex; align-items:center; gap:5px"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path></svg> 10</span>
      </div>
     </div>
    </a>
   </div>
  </div>
 </section>

 <section data-screen-label="What’s included" style="background:#0F1729; padding:110px 64px">
  <div style="max-width:1440px; margin:0 auto">
   <div data-reveal="" style="max-width:820px">
    <div style="display:flex; align-items:center; gap:14px">
     <span style="width:34px; height:1px; background:#C98A2C; display:block"></span>
     <span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#F0D9A8">Included at no cost</span>
    </div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:46px; line-height:1.2; letter-spacing:-0.008em; color:#F9F6E6; margin:16px 0 0; text-wrap:pretty">What’s Included When Working With A Realtor</h2>
   </div>
   <div style="display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:24px; margin-top:56px">
    <div data-reveal="" style="display:flex; flex-direction:column; background:rgba(249,246,230,0.05); border:1px solid rgba(201,138,44,0.3); border-radius:16px; padding:36px 34px 34px; transition:transform .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); border-color:rgba(201,138,44,0.7)">
     <div style="width:96px; height:96px; border-radius:16px; background:rgba(201,138,44,0.12); display:flex; align-items:center; justify-content:center">
      <img src="https://assets.agentfire3.com/uploads/templates/home-2-2/5-200xAUTO.fit.png" alt="Closing Costs Savings" style="width:64px; height:64px; object-fit:cover; display:block">
     </div>
     <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:23px; color:#fff; line-height:1.3; margin-top:26px; margin:0">Closing Costs Savings</h3>
     <p style="font-size:16px; line-height:1.8; color:rgba(249,246,230,0.85); margin:12px 0 0; text-wrap:pretty">We’ll assess each house to see if it qualifies to save you thousands of dollars at closing.</p>
    </div>
    <div data-reveal="" style="display:flex; flex-direction:column; background:rgba(249,246,230,0.05); border:1px solid rgba(201,138,44,0.3); border-radius:16px; padding:36px 34px 34px; transition:transform .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); border-color:rgba(201,138,44,0.7)">
     <div style="width:96px; height:96px; border-radius:16px; background:rgba(201,138,44,0.12); display:flex; align-items:center; justify-content:center">
      <img src="https://assets.agentfire3.com/uploads/templates/home-2-2/4-200xAUTO.fit.png" alt="Zero Cost Service" style="width:64px; height:64px; object-fit:cover; display:block">
     </div>
     <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:23px; color:#fff; line-height:1.3; margin-top:26px; margin:0">Zero Cost Service</h3>
     <p style="font-size:16px; line-height:1.8; color:rgba(249,246,230,0.85); margin:12px 0 0; text-wrap:pretty">You’ll have an experienced team to rely on without any additional expenses.</p>
    </div>
    <div data-reveal="" style="display:flex; flex-direction:column; background:rgba(249,246,230,0.05); border:1px solid rgba(201,138,44,0.3); border-radius:16px; padding:36px 34px 34px; transition:transform .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); border-color:rgba(201,138,44,0.7)">
     <div style="width:96px; height:96px; border-radius:16px; background:rgba(201,138,44,0.12); display:flex; align-items:center; justify-content:center">
      <img src="https://assets.agentfire3.com/uploads/templates/home-2-2/7-200xAUTO.fit.png" alt="Pricing Analysis" style="width:64px; height:64px; object-fit:cover; display:block">
     </div>
     <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:23px; color:#fff; line-height:1.3; margin-top:26px; margin:0">Pricing Analysis</h3>
     <p style="font-size:16px; line-height:1.8; color:rgba(249,246,230,0.85); margin:12px 0 0; text-wrap:pretty">We’ll pull historical data and conduct a pricing analysis so you never overpay for real estate.</p>
    </div>
    <div data-reveal="" style="display:flex; flex-direction:column; background:rgba(249,246,230,0.05); border:1px solid rgba(201,138,44,0.3); border-radius:16px; padding:36px 34px 34px; transition:transform .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); border-color:rgba(201,138,44,0.7)">
     <div style="width:96px; height:96px; border-radius:16px; background:rgba(201,138,44,0.12); display:flex; align-items:center; justify-content:center">
      <img src="https://assets.agentfire3.com/uploads/templates/home-2-2/6-200xAUTO.fit.png" alt="Off Market Properties" style="width:64px; height:64px; object-fit:cover; display:block">
     </div>
     <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:23px; color:#fff; line-height:1.3; margin-top:26px; margin:0">Off Market Properties</h3>
     <p style="font-size:16px; line-height:1.8; color:rgba(249,246,230,0.85); margin:12px 0 0; text-wrap:pretty">A dedicated team regularly engages owners to find off-market opportunities that fit your needs.</p>
    </div>
   </div>
   <div data-reveal="" style="display:flex; justify-content:center; margin-top:56px">
    <a href="https://calendly.com/montfort" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; justify-content:center; background:#C98A2C; color:#0F1729; font-size:14.5px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; border-radius:100px; padding:19px 40px; min-height:56px" style-hover="background:#F0D9A8">Schedule Free Consultation</a>
   </div>
  </div>
 </section>

 <section data-screen-label="Listings" style="background:#F9F6E6; padding:120px 0">
  <div style="max-width:1440px; margin:0 auto; padding:0 64px">
   <div data-reveal="" style="display:flex; align-items:flex-end; justify-content:space-between; gap:40px">
    <div>
     <div style="display:flex; align-items:center; gap:14px">
      <span style="width:34px; height:1px; background:#C98A2C; display:block"></span>
      <span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">On the market</span>
     </div>
     <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:46px; line-height:1.2; letter-spacing:-0.008em; color:#0F1729; margin:16px 0 0; text-wrap:pretty">Current Realtor Listings</h2>
    </div>
    <div style="display:flex; align-items:center; gap:14px; flex:0 0 auto">
     <button id="listings-prev" onclick="var t=document.getElementById('listings-track'); t.scrollBy({left:(-1)*Math.min(t.clientWidth,760), behavior:'smooth'}); return false;" aria-label="Previous listings" style="width:52px; height:52px; border-radius:100px; border:1px solid #C98A2C; background:#F9F6E6; color:#113B5F; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .25s ease, color .25s ease" style-hover="background:#113B5F; color:#F9F6E6"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
     <button id="listings-next" onclick="var t=document.getElementById('listings-track'); t.scrollBy({left:(1)*Math.min(t.clientWidth,760), behavior:'smooth'}); return false;" aria-label="Next listings" style="width:52px; height:52px; border-radius:100px; border:1px solid #C98A2C; background:#F9F6E6; color:#113B5F; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .25s ease, color .25s ease" style-hover="background:#113B5F; color:#F9F6E6"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
    </div>
   </div>
  </div>
  <div id="listings-track" class="no-sb" style="display:flex; gap:24px; margin-top:48px; padding:6px 64px 10px; overflow-x:auto; scroll-snap-type:x mandatory; scroll-behavior:smooth">
    <a href="/523-west-121st-street-2/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2026/06/1a-Living-room-700x560.fit.jpg" alt="523 West 121st Street #2" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="467">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$799,000</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">523 West 121st Street #2</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">2 beds · 1 bath</div>
     </div>
    </a>
    <a href="/26-west-95th-street/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2026/04/26-West-95th-Street-700x560.fit.png" alt="26 West 95th Street" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="465">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$11,995,000</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">26 West 95th Street</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">1893 · 6,700 sqft · 5 stories</div>
     </div>
    </a>
    <a href="/124-west-131st-street-2/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2025/10/1-6-700x560.fit.png" alt="124 West 131st Street" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="472">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$3,495,000</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">124 West 131st Street</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">5 beds · 4.5 baths · 4,688 sqft</div>
     </div>
    </a>
    <a href="/14-west-121st-street/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2025/10/Listing-Photo-9h-14-West-121st-St-1-1-700x560.fit.jpg" alt="14 West 121st Street" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="373" height="560">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$2,999,999</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">14 West 121st Street</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">6 beds · 4.5 baths · 5,320 sqft</div>
     </div>
    </a>
    <a href="/475-west-144th-street/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2026/04/475-West-144th-Street-700x560.fit.png" alt="475 West 144th Street" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="464">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$2,249,999</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">475 West 144th Street</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">1901 · 4,608 sqft · 4 stories</div>
     </div>
    </a>
    <a href="/313-west-143rd-street-2a/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2025/10/Photo-1-Livingroom-313-West-143rd-St-2A-700x560.fit.jpg" alt="313 West 143rd Street #2A" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="467">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$1,250,000</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">313 West 143rd Street #2A</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">3 beds · 2 baths · 1,650 sqft</div>
     </div>
    </a>
    <a href="/542-cathedral-parkway/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/1-542-Catherdral-Parkway-700x560.fit.jpg" alt="542 Cathedral Parkway" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="467">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$4,950,000</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">542 Cathedral Parkway</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">1985 · 4,100 sqft · 4 stories</div>
     </div>
    </a>
    <a href="/544-west-148th-street/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/1-544-West-148th-Street-700x560.fit.jpg" alt="544 West 148th Street" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="467">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$2,699,000</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">544 West 148th Street</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">1910 · 3,536 sqft · 4 stories</div>
     </div>
    </a>
    <a href="/76-west-105th-street-thn/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/1-700x560.fit.png" alt="76 West 105th Street #THN" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="467">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$4,750,000</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">76 West 105th Street #THN</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">3 beds · 3+ baths · 4,232 sqft</div>
     </div>
    </a>
    <a href="/76-west-105th-street-ph/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/1-2-700x560.fit.jpg" alt="76 West 105th Street #PH" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="467">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$4,450,000</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">76 West 105th Street #PH</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">4 beds · 4 baths · 3,675 sqft</div>
     </div>
    </a>
    <a href="/2040-madison-avenue-4/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/1-2040-Madison-Ave-700x560.fit.jpg" alt="2040 Madison Avenue" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="467">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$2,250,000</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">2040 Madison Avenue</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">1899 · 3,240 sqft · 4 stories</div>
     </div>
    </a>
    <a href="/420-west-144th-street/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/1-420-W-144th-St-700x560.fit.jpg" alt="420 West 144th Street" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="467">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$3,199,000</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">420 West 144th Street</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">1920 · 3,615 sqft · 4 stories</div>
     </div>
    </a>
    <a href="/481-west-145th-street/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2025/03/1481w145-700x560.fit.jpg" alt="481 West 145th Street" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="467">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$2,550,000</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">481 West 145th Street</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">1926 · 3,666 sqft · 4 stories</div>
     </div>
    </a>
    <a href="/108-west-114th-street-4b/" target="_blank" rel="noopener" style="scroll-snap-align:start; flex:0 0 380px; display:flex; flex-direction:column; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease" style-hover="transform:translateY(-7px); box-shadow:0 30px 60px rgba(17,59,95,0.16)">
     <div style="position:relative; aspect-ratio:5/4; overflow:hidden; background:#E0D9B8">
      <img src="https://assets.agentfire3.com/uploads/sites/312/2024/09/108-West-114th-Street-4B-700x560.fit.png" alt="108 West 114th Street #4B" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.06)" width="700" height="467">
      <span style="position:absolute; top:16px; left:16px; background:rgba(15,23,41,0.92); color:#F9F6E6; font-size:16px; font-weight:800; letter-spacing:-0.01em; padding:8px 16px; border-radius:100px">$350,000</span>
     </div>
     <div style="padding:24px 26px 26px">
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; line-height:1.3; text-wrap:pretty; margin:0">108 West 114th Street #4B</h3>
      <div style="font-size:14px; color:#3B4C5E; margin-top:6px">New York, NY</div>
      <div style="display:flex; align-items:center; gap:9px; margin-top:16px; padding-top:15px; border-top:1px solid #E0D9B8; font-size:13.5px; font-weight:600; color:#113B5F">1 bed · 1 bath</div>
     </div>
    </a>
  </div>
  <div style="max-width:1440px; margin:0 auto; padding:0 64px">
   <div data-reveal="" style="display:flex; justify-content:center; margin-top:44px">
    <a href="/current-listings/" style="display:inline-flex; align-items:center; justify-content:center; background:#113B5F; color:#F9F6E6; font-size:14px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; border-radius:100px; padding:18px 40px; min-height:54px" style-hover="background:#C98A2C; color:#0F1729">See all listings</a>
   </div>
  </div>
 </section>

 <section data-screen-label="Resources" style="background:#F5EECB; padding:120px 64px; border-top:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto">
   <div data-reveal="" style="display:flex; align-items:flex-end; justify-content:space-between; gap:56px">
    <div style="max-width:760px">
     <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:46px; line-height:1.2; letter-spacing:-0.008em; color:#0F1729; margin:0; text-wrap:pretty">Recent News &amp; Realtor Advice</h2>
     <p style="font-size:17px; line-height:1.85; color:#3B4C5E; margin:16px 0 0">Stay in the loop on the latest events, news, &amp; happenings in and around our community!</p>
    </div>
    <a href="/blog/" style="font-size:13px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#113B5F; white-space:nowrap; border-bottom:2px solid #C98A2C; padding-bottom:5px" style-hover="border-bottom-color:#0F1729">All resources</a>
   </div>
   <div style="display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:44px; margin-top:56px; padding-top:52px; border-top:2px solid #0F1729">
    <a data-reveal="" href="/upper-west-side-townhouse-q2-2024-market-report/" style="display:flex; flex-direction:column; group">
     <div style="aspect-ratio:5/3; border-radius:16px; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/upper-west-side.png" alt="Upper West Side Townhouse Q2 2024 Market Report" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.05)" width="500" height="350"></div>
     <div style="font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#C98A2C; margin-top:22px">Market Report</div>
     <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:23px; line-height:1.32; color:#0F1729; margin-top:12px; text-wrap:pretty; margin:0">Upper West Side Townhouse Q2 2024 Market Report</h3>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">On the Upper West Side, we observed a distinct trend that diverges from the citywide patterns…</p>
     <div style="display:flex; align-items:center; gap:9px; margin-top:18px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Read article <span style="color:#C98A2C">→</span></div>
    </a>
    <a data-reveal="" href="/harlem-brownstone-q2-2024-market-report/" style="display:flex; flex-direction:column">
     <div style="aspect-ratio:5/3; border-radius:16px; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/harlem.png" alt="Harlem Brownstone Q2 2024 Market Report" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.05)" width="500" height="350"></div>
     <div style="font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#C98A2C; margin-top:22px">Market Report</div>
     <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:23px; line-height:1.32; color:#0F1729; margin-top:12px; text-wrap:pretty; margin:0">Harlem Brownstone Q2 2024 Market Report</h3>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">The Harlem brownstone market has seen an increase in sales activity since this time last year…</p>
     <div style="display:flex; align-items:center; gap:9px; margin-top:18px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Read article <span style="color:#C98A2C">→</span></div>
    </a>
    <a data-reveal="" href="/discover-your-dream-home-explore-apartments-for-sale-on-the-upper-west-side/" style="display:flex; flex-direction:column">
     <div style="aspect-ratio:5/3; border-radius:16px; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/chelsea.jpg" alt="Explore Apartments for Sale on the Upper West Side" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.05)" width="1000" height="700"></div>
     <div style="font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#C98A2C; margin-top:22px">Buyer Guide</div>
     <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:23px; line-height:1.32; color:#0F1729; margin-top:12px; text-wrap:pretty; margin:0">Discover Your Dream Home: Apartments for Sale on the Upper West Side</h3>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">Searching for your dream home in one of New York City’s most sought-after neighborhoods?…</p>
     <div style="display:flex; align-items:center; gap:9px; margin-top:18px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Read article <span style="color:#C98A2C">→</span></div>
    </a>
   </div>
  </div>
 </section>

 <section data-screen-label="Download" style="background:#113B5F; padding:100px 64px">
  <div style="max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:stretch">
   <div data-reveal="" style="display:flex; flex-direction:column; justify-content:center">
    <div style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#C98A2C">Free Download</div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:42px; line-height:1.22; letter-spacing:-0.008em; color:#F9F6E6; margin:16px 0 0; text-wrap:pretty">11 Costly Mistakes Made When Buying a Brownstone</h2>
    <p style="font-size:17px; line-height:1.7; color:rgba(249,246,230,0.78); margin:14px 0 0; max-width:600px; text-wrap:pretty">Educate yourself on these 11 costly mistakes, the difference between a successful purchase and a disastrous one.</p>
    <p style="font-size:17px; line-height:1.85; color:rgba(249,246,230,0.9); margin:14px 0 0; max-width:600px; text-wrap:pretty">
     Are you in the market for a <a href="/featured-brownstones-for-sale/harlem-brownstones/" style="color:#C98A2C">brownstone</a>? Taking the time to educate yourself on these 11 costly mistakes can make all the difference between a successful purchase and a disastrous one.
    </p>
    <div style="display:flex; flex-direction:column; gap:12px; margin-top:32px; max-width:460px">
     <input type="text" placeholder="Your name" style="background:rgba(249,246,230,0.1); border:1px solid rgba(201,138,44,0.45); border-radius:10px; padding:15px 16px; font-family:inherit; font-size:15.5px; color:#F9F6E6; min-height:52px">
     <input type="email" placeholder="Email address" style="background:rgba(249,246,230,0.1); border:1px solid rgba(201,138,44,0.45); border-radius:10px; padding:15px 16px; font-family:inherit; font-size:15.5px; color:#F9F6E6; min-height:52px">
     <a href="/" style="display:flex; align-items:center; justify-content:center; background:#C98A2C; color:#0F1729; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; font-size:15px; padding:17px 24px; min-height:54px" style-hover="background:#F9F6E6; color:#113B5F">Download the guide</a>
    </div>
   </div>
   <div data-reveal="" style="position:relative; border-radius:16px; overflow:hidden; border:1px solid rgba(201,138,44,0.55); box-shadow:0 30px 70px rgba(11,18,32,0.4); min-height:440px; background:#0B1220">
    <iframe title="Montfort Real Estate on Google Maps" src="https://www.google.com/maps?q=8+West+126th+Street,+New+York,+NY+10027&amp;output=embed" style="position:absolute; inset:0; width:100%; height:100%; border:0; filter:grayscale(1) contrast(0.92) brightness(0.92)" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(120deg, rgba(17,59,95,0.34) 0%, rgba(17,59,95,0) 46%), linear-gradient(0deg, rgba(11,18,32,0.55) 0%, rgba(11,18,32,0) 34%); mix-blend-mode:multiply"></div>
    <div style="position:absolute; left:24px; right:24px; bottom:24px; background:#F9F6E6; border-radius:16px; border-top:3px solid #C98A2C; padding:24px 26px; display:flex; align-items:center; justify-content:space-between; gap:24px; box-shadow:0 20px 44px rgba(11,18,32,0.35)">
     <div>
      <div style="font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#C98A2C">Visit our office</div>
      <h3 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; margin-top:8px; line-height:1.3; margin:0">8 West 126th Street</h3>
      <div style="font-size:14.5px; color:#3B4C5E; margin-top:3px">New York, NY 10027</div>
     </div>
     <a href="https://maps.google.com/?cid=11378470238102062088" target="_blank" rel="noopener" style="flex:0 0 auto; display:inline-flex; align-items:center; gap:9px; background:#113B5F; color:#F9F6E6; font-size:12px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; border-radius:100px; padding:14px 22px" style-hover="background:#C98A2C; color:#0F1729">Directions <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M3 8h9M8 3.5L12.5 8 8 12.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
    </div>
   </div>
  </div>
 </section>

 <footer style="background:#0B1220; padding:88px 64px 36px; border-top:3px solid #C98A2C">
  <div style="max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1.2fr 1fr 0.9fr auto; gap:56px; align-items:start">
   <div>
    <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.02em; color:#C98A2C">Realtor Services</div>
    <div style="display:flex; flex-direction:column; gap:11px; margin-top:20px; padding-top:18px; border-top:1px solid rgba(201,138,44,0.35)">
     <a href="/nyc-buyers-agent-service/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">NYC Buyer’s Agent</a>
     <a href="/nyc-listing-agent-service/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">NYC Listing Agent</a>
     <a href="/nyc-multifamily-real-estate-agent-service/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">NYC Multifamily Real Estate Agent</a>
     <a href="/home-valuation/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Home Valuation</a>
     <a href="/mortgage-calculator/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Mortgage Calculator</a>
    </div>
   </div>
   <div>
    <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.02em; color:#C98A2C">Neighborhoods</div>
    <div style="display:flex; flex-direction:column; gap:11px; margin-top:20px; padding-top:18px; border-top:1px solid rgba(201,138,44,0.35)">
     <a href="/harlem/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Harlem</a>
     <a href="/upper-east-side/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Upper East Side</a>
     <a href="/upper-west-side/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Upper West Side</a>
     <a href="/chelsea/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Chelsea</a>
     <a href="/downtown-brooklyn/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Downtown Brooklyn</a>
     <a href="/dumbo/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Dumbo</a>
     <a href="/brooklyn-heights/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Brooklyn Heights</a>
     <a href="/williamsburg/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Williamsburg</a>
     <a href="/bedford-stuyvesant/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Bedford-Stuyvesant</a>
     <a href="/crown-heights/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Crown Heights</a>
     <a href="/park-slope/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Park Slope</a>
    </div>
   </div>
   <div>
    <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.02em; color:#C98A2C">About</div>
    <div style="display:flex; flex-direction:column; gap:11px; margin-top:20px; padding-top:18px; border-top:1px solid rgba(201,138,44,0.35)">
     <a href="/stanley-montfort/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Stanley Montfort</a>
     <a href="https://calendly.com/montfort" target="_blank" rel="noopener" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Contact</a>
     <a href="/success-stories/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Success Stories</a>
     <a href="/blog/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Resources</a>
    </div>
   </div>
   <div style="display:flex; flex-direction:column; align-items:flex-end; gap:26px">
    <div style="display:flex; gap:12px">
    <a href="https://www.facebook.com/montfortrealestate" target="_blank" rel="noopener" aria-label="Facebook" style="width:44px; height:44px; border-radius:100px; background:#C98A2C; color:#0F1729; display:flex; align-items:center; justify-content:center; transition:background .25s ease, color .25s ease" style-hover="background:#F9F6E6; color:#113B5F"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5.5h-3c-2.2 0-3.8 1.7-3.8 3.9V11H7.5v3.5h2.7V22h3.6v-7.5h2.7l.5-3.5h-3.2V9.6c0-.4.3-.6.7-.6z"></path></svg></a>
    <a href="https://www.youtube.com/@montfortrealestate6984" target="_blank" rel="noopener" aria-label="YouTube" style="width:44px; height:44px; border-radius:100px; background:#C98A2C; color:#0F1729; display:flex; align-items:center; justify-content:center; transition:background .25s ease, color .25s ease" style-hover="background:#F9F6E6; color:#113B5F"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.3-3.8.3-3.8s0-2.5-.3-3.8zM10 15V9l5.2 3z"></path></svg></a>
    <a href="https://www.instagram.com/stanleymontfort/" target="_blank" rel="noopener" aria-label="Instagram" style="width:44px; height:44px; border-radius:100px; background:#C98A2C; color:#0F1729; display:flex; align-items:center; justify-content:center; transition:background .25s ease, color .25s ease" style-hover="background:#F9F6E6; color:#113B5F"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.9"></rect><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.9"></circle><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"></circle></svg></a>
    </div>
    <img src="/redesign-assets/rebny.png" alt="REBNY, Real Estate Board of New York" style="height:52px; width:auto; display:block; opacity:0.9" width="130" height="49">
   </div>
  </div>
  <div style="max-width:1440px; margin:64px auto 0; padding-top:44px; border-top:1px solid rgba(249,246,230,0.14); display:grid; grid-template-columns:1fr 1fr 1fr; gap:44px; align-items:center">
   <a href="/" style="display:block; justify-self:start">
    <img src="https://assets.agentfire3.com/uploads/sites/312/2026/07/Logo-Transparency-black.png" alt="Montfort Real Estate" style="height:72px; width:auto; display:block; filter:invert(1) brightness(2.2)">
   </a>
   <div style="justify-self:center; text-align:center; font-size:15px; line-height:1.7; color:rgba(249,246,230,0.8)">
    <div><span style="font-weight:700; color:#F9F6E6">Phone:</span> <a href="tel:646-970-1078" style="color:#C98A2C">1-646-970-1078</a></div>
    <div style="margin-top:8px"><span style="font-weight:700; color:#F9F6E6">Address:</span><br>8 West 126th Street, New York, NY 10027</div>
   </div>
   <div style="justify-self:end; text-align:right; font-size:15px; line-height:1.7">
    <span style="font-weight:700; color:#F9F6E6">Email:</span><br><a href="mailto:sm@montfortre.com" style="color:#C98A2C">sm@montfortre.com</a>
   </div>
  </div>
  <div style="max-width:1440px; margin:40px auto 0; text-align:center; font-size:13px; color:rgba(249,246,230,0.55)">
   <span style="display:inline-flex; align-items:center; gap:14px">
    <a href="/privacy-policy/" style="color:rgba(249,246,230,0.55)">Privacy Policy</a>
    <span style="color:rgba(249,246,230,0.3)">|</span>
    <a href="/sitemap/" style="color:rgba(249,246,230,0.55)">Sitemap</a>
   </span>
   <div style="margin-top:12px; color:rgba(249,246,230,0.4)">© 2026 Montfort Real Estate LLC. All rights reserved.</div>
  </div>
 </footer>
</div>

</main>

`;

export default function Home() {
  useStyleHover();
  useCarousels();
  return (
    <>
      <Seo title={TITLE} metas={METAS} links={LINKS} jsonLd={JSON_LD} />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}
