import Seo from "../components/Seo";
import useStyleHover from "../hooks/useStyleHover";

const TITLE = "Neighborhoods | Montfort Real Estate";
const METAS = [
  {
    "name": "description",
    "content": "Explore NYC neighborhoods across Manhattan and Brooklyn. Compare lifestyle, pricing, architecture, and real estate opportunities with Montfort Real Estate."
  },
  {
    "property": "og:locale",
    "content": "en_US"
  },
  {
    "property": "og:type",
    "content": "article"
  },
  {
    "property": "og:title",
    "content": "Neighborhoods | Montfort Real Estate"
  },
  {
    "property": "og:description",
    "content": "Explore NYC neighborhoods across Manhattan and Brooklyn. Compare lifestyle, pricing, architecture, and real estate opportunities with Montfort Real Estate."
  },
  {
    "property": "og:url",
    "content": "https://montfortre.com/neighborhoods/"
  },
  {
    "property": "og:site_name",
    "content": "Montfort Real Estate"
  },
  {
    "name": "twitter:card",
    "content": "summary_large_image"
  },
  {
    "name": "twitter:description",
    "content": "Explore NYC neighborhoods across Manhattan and Brooklyn. Compare lifestyle, pricing, architecture, and real estate opportunities with Montfort Real Estate."
  },
  {
    "name": "twitter:title",
    "content": "Neighborhoods | Montfort Real Estate"
  }
];
const LINKS = [
  {
    "rel": "canonical",
    "href": "https://montfortre.com/neighborhoods/"
  }
];
const JSON_LD = [
  "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"url\":\"https://montfortre.com/\",\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.instagram.com/stanleymontfort/\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\"],\"@id\":\"https://montfortre.com/#organization\",\"name\":\"Montfort Real Estate\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2022/10/Logo-Transparency-black.png\"}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@id\":\"https://montfortre.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@id\":\"https://montfortre.com/neighborhoods/\",\"name\":\"Neighborhoods\"}}]}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"RealEstateAgent\",\"@id\":\"https://montfortre.com/#real-estate-agent\",\"name\":\"Montfort Real Estate\",\"description\":\"NYC's brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication \\u2014 from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.\",\"url\":\"https://montfortre.com\",\"email\":\"sm@montfortre.com\",\"telephone\":\"1-646-970-1078\",\"faxNumber\":\"\",\"priceRange\":\"\",\"image\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"New York\",\"addressRegion\":\"NY\",\"postalCode\":\"10027\",\"streetAddress\":\"8 West 126th Street\"},\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\",\"https://www.instagram.com/stanleymontfort/\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"Customer Service\",\"email\":\"sm@montfortre.com\",\"telephone\":\"646-970-1078\"}}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Neighborhoods\",\"description\":\"NYC Neighborhoods \\u2014 Expert Local Insights for Buyers, Sellers &amp; Investors We&#039;ll help you find the right NYC neighborhood based on your lifestyle, budget, and long-term goals\\u2014so you can buy with confidence and avoid costly mistakes Call 1-(646)-970-1078 Schedule A Constulation \\u2713SMOOTH TRANSACTIONWith limited risk throughout the buying process.\\u2713NO PRESSURENo pressure to overpay or purchase within a specific timeframe.\\u2713ONGOING SUPPORTA\",\"inLanguage\":\"en-US\",\"datePublished\":\"2026-05-06T06:25:53+00:00\",\"dateModified\":\"2026-08-05T20:43:34+00:00\",\"isPartOf\":{\"@type\":\"WebSite\",\"name\":\"Montfort Real Estate\",\"url\":\"https://montfortre.com/\"}}"
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
<section style="background:#0F1729; padding:64px 64px 56px">
 <div style="max-width:1440px; margin:0 auto">
  <div style="font-size:11.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#C98A2C">Featured realtor service areas</div>
  <h1 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; color:#F9F6E6; margin:14px 0 10px">NYC Neighborhoods — Expert Local Insights for Buyers, Sellers & Investors</h1>
  <p style="color:rgba(249,246,230,0.75); font-size:16.5px; margin:0; max-width:680px">Explore the Manhattan and Brooklyn neighborhoods where we help buyers and sellers every day.</p>
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
</div>`;

export default function Neighborhoods() {
  useStyleHover();
  return (
    <>
      <Seo title={TITLE} metas={METAS} links={LINKS} jsonLd={JSON_LD} />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}
