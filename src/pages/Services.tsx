import Seo from "../components/Seo";
import useStyleHover from "../hooks/useStyleHover";

const TITLE = "Services | Montfort Real Estate";
const METAS = [
  {
    "name": "description",
    "content": "Explore Montfort Real Estate\u2019s luxury real estate services in NYC, including buyer representation, home selling strategies, property investment guidance, multifamily real estate, co-ops, condos, and townhomes across Manhattan and Brooklyn."
  },
  {
    "name": "twitter:card",
    "content": "summary_large_image"
  },
  {
    "name": "twitter:title",
    "content": "Services | Montfort Real Estate"
  },
  {
    "name": "twitter:description",
    "content": "Explore Montfort Real Estate\u2019s luxury real estate services in NYC, including buyer representation, home selling strategies, property investment guidance, multifamily real estate, co-ops, condos, and townhomes across Manhattan and Brooklyn."
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
    "content": "Services | Montfort Real Estate"
  },
  {
    "property": "og:description",
    "content": "Explore Montfort Real Estate\u2019s luxury real estate services in NYC, including buyer representation, home selling strategies, property investment guidance, multifamily real estate, co-ops, condos, and townhomes across Manhattan and Brooklyn."
  },
  {
    "property": "og:url",
    "content": "https://montfortre.com/services/"
  },
  {
    "property": "og:site_name",
    "content": "Montfort Real Estate"
  },
  {
    "property": "article:publisher",
    "content": "https://www.facebook.com/montfortrealestate"
  }
];
const LINKS = [
  {
    "rel": "canonical",
    "href": "https://montfortre.com/services/"
  },
  {
    "rel": "icon",
    "href": "../../assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black-32x32.max.png",
    "sizes": "32x32"
  },
  {
    "rel": "icon",
    "href": "../../assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black-192x192.max.png",
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
  "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"url\":\"https://montfortre.com/\",\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.instagram.com/stanleymontfort/\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\"],\"@id\":\"https://montfortre.com/#organization\",\"name\":\"Montfort Real Estate\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2022/10/Logo-Transparency-black.png\"}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@id\":\"https://montfortre.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@id\":\"https://montfortre.com/services/\",\"name\":\"Services\"}}]}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"RealEstateAgent\",\"@id\":\"https://montfortre.com/#real-estate-agent\",\"name\":\"Montfort Real Estate\",\"description\":\"NYC's brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication \\u2014 from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.\",\"url\":\"https://montfortre.com\",\"email\":\"sm@montfortre.com\",\"telephone\":\"1-646-970-1078\",\"faxNumber\":\"\",\"priceRange\":\"\",\"image\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"New York\",\"addressRegion\":\"NY\",\"postalCode\":\"10027\",\"streetAddress\":\"8 West 126th Street\"},\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\",\"https://www.instagram.com/stanleymontfort/\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"Customer Service\",\"email\":\"sm@montfortre.com\",\"telephone\":\"646-970-1078\"}}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Services\",\"description\":\"NYC Realtor Services \\u2014 Expert Representation for Buyers, Sellers &amp; Investors Whether you&#039;re buying or selling, our team helps you avoid costly mistakes, negotiate with confidence, and achieve the best possible outcome for your real estate goals. Call 1-(646)-970-1078 Schedule a Consultation \\u2713SMOOTH TRANSACTIONWith limited risk throughout the buying process.\\u2713NO PRESSURENo pressure to overpay or purchase within a specific timeframe.\\u2713ONGOING\",\"inLanguage\":\"en-US\",\"datePublished\":\"2026-04-27T11:08:42+00:00\",\"dateModified\":\"2026-08-01T13:30:23+00:00\",\"isPartOf\":{\"@type\":\"WebSite\",\"name\":\"Montfort Real Estate\",\"url\":\"https://montfortre.com/\"}}"
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
  [style*="grid-template-columns:1.05fr 0.95fr"], [style*="grid-template-columns:1.15fr 0.85fr"],
  [style*="grid-template-columns:1.02fr 0.98fr"], [style*="grid-template-columns:1.1fr 0.9fr"],
  [style*="grid-template-columns:0.95fr 1.05fr"], [style*="grid-template-columns:0.9fr 1.1fr"],
  [style*="grid-template-columns:240px minmax(0,1fr)"] { grid-template-columns:1fr !important; gap:40px !important; }
  [style*="grid-template-columns:repeat(3,minmax(0,1fr))"],
  [style*="grid-template-columns:repeat(4,minmax(0,1fr))"] { grid-template-columns:repeat(2,minmax(0,1fr)) !important; }
  [style*="grid-template-columns:1.2fr 1fr 0.9fr auto"] { grid-template-columns:1fr 1fr !important; }
  [style*="font-size:62px"] { font-size:44px !important; }
  [style*="font-size:60px"] { font-size:43px !important; }
  [style*="font-size:58px"] { font-size:42px !important; }
  [style*="font-size:56px"] { font-size:40px !important; }
  [style*="font-size:54px"] { font-size:42px !important; }
  [style*="font-size:52px"] { font-size:38px !important; }
  [style*="font-size:46px"] { font-size:36px !important; }
  [style*="font-size:44px"] { font-size:35px !important; }
  [style*="font-size:42px"] { font-size:34px !important; }
 }
 @media (max-width:768px) {
  [style*="px 64px"] { padding-left:20px !important; padding-right:20px !important; }
  section[style*="padding:130px"], section[style*="padding:120px"], section[style*="padding:110px"],
  section[style*="padding:100px"], section[style*="padding:96px"], section[style*="padding:92px"],
  section[style*="padding:90px"], section[style*="padding:88px"],
  section[style*="padding:80px"] { padding-top:56px !important; padding-bottom:56px !important; }
  footer[style*="padding:88px"] { padding-top:56px !important; }
  [style*="grid-template-columns:repeat(3,minmax(0,1fr))"],
  [style*="grid-template-columns:repeat(4,minmax(0,1fr))"] { grid-template-columns:1fr !important; gap:24px !important; }
  [style*="grid-template-columns:auto auto auto"],
  [style*="grid-template-columns:1.2fr 1fr 0.9fr auto"],
  [style*="grid-template-columns:1fr 1fr"],
  [style*="grid-template-columns:300px 1fr"],
  [style*="grid-template-columns:120px 1fr"],
  [style*="grid-template-columns:1fr 1fr 1fr"] { grid-template-columns:1fr !important; }
  [style*="font-size:62px"] { font-size:32px !important; }
  [style*="font-size:60px"] { font-size:31px !important; }
  [style*="font-size:58px"] { font-size:31px !important; }
  [style*="font-size:56px"] { font-size:30px !important; }
  [style*="font-size:54px"] { font-size:32px !important; }
  [style*="font-size:52px"] { font-size:30px !important; }
  [style*="font-size:46px"] { font-size:29px !important; }
  [style*="font-size:44px"] { font-size:28px !important; }
  [style*="font-size:42px"] { font-size:27px !important; }
  [style*="font-size:40px"] { font-size:30px !important; }
  [style*="font-size:38px"] { font-size:26px !important; }
  [style*="font-size:34px"] { font-size:25px !important; }
  [style*="font-size:32px"] { font-size:24px !important; }
  [style*="font-size:30px"] { font-size:24px !important; }
  [style*="font-size:27px"] { font-size:20px !important; }
  [style*="font-size:26px"] { font-size:21px !important; }
  [style*="font-size:24px"] { font-size:19px !important; }
  div[style*="white-space:nowrap"] { white-space:normal !important; }
  div[style*="display:flex; gap:12px"] { flex-wrap:wrap !important; }
  div[style*="justify-content:space-between"] { flex-wrap:wrap !important; }
  [style*="padding:56px 60px"] { padding:28px 20px !important; gap:24px !important; }
  [style*="flex-direction:column"][style*="align-items:flex-end"] { align-items:flex-start !important; }
  footer [style*="justify-self:center"], footer [style*="justify-self:end"] { justify-self:start !important; text-align:left !important; }
  [style*="left:24px; right:24px"] { left:12px !important; right:12px !important; }
  /* Hero CTAs: Book Now + phone on one row */
  [style*="flex-wrap:wrap; gap:14px; margin-top:34px"] {
    flex-wrap:nowrap !important;
    gap:8px !important;
    width:100% !important;
  }
  [style*="flex-wrap:wrap; gap:14px; margin-top:34px"] > a {
    flex:1 1 0 !important;
    min-width:0 !important;
    justify-content:center !important;
    white-space:nowrap !important;
    font-size:12px !important;
    letter-spacing:0.03em !important;
    padding:14px 10px !important;
    min-height:48px !important;
  }
  /* Neighborhoods: 2 columns on mobile (override 1-col collapse) */
  [style*="grid-template-columns:repeat(3,minmax(0,1fr))"][style*="gap:14px 40px"] {
    grid-template-columns:1fr 1fr !important;
    gap:10px 14px !important;
  }
  [style*="grid-template-columns:repeat(3,minmax(0,1fr))"][style*="gap:14px 40px"] > a {
    font-size:13px !important;
    line-height:1.35 !important;
  }
  /* Free Download card: stack icon above copy so text isn't cramped */
  a[href*="11-costly-mistakes"] {
    flex-direction:column !important;
    align-items:flex-start !important;
    gap:14px !important;
    padding:18px 18px !important;
    max-width:100% !important;
  }
  a[href*="11-costly-mistakes"] [style*="font-size:19px"] {
    font-size:17px !important;
  }
  a[href*="11-costly-mistakes"] [style*="font-size:14px"] {
    font-size:13.5px !important;
  }
 }
 @media (max-width:480px) {
  [style*="font-size:62px"] { font-size:28px !important; }
  [style*="font-size:60px"] { font-size:28px !important; }
  [style*="font-size:58px"] { font-size:27px !important; }
  [style*="font-size:56px"] { font-size:27px !important; }
  [style*="font-size:54px"] { font-size:28px !important; }
  [style*="font-size:52px"] { font-size:26px !important; }
  [style*="font-size:46px"] { font-size:26px !important; }
  [style*="padding:56px 60px"] { padding:24px 16px !important; }
  [style*="flex:0 0 300px"] { flex:0 0 260px !important; }
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



 <section data-screen-label="Services hero" style="position:relative; background:#F5EECB; border-bottom:1px solid #E0D9B8; overflow:hidden; padding:88px 64px 96px">
  <div style="position:absolute; top:-150px; right:-160px; width:560px; height:560px; border-radius:50%; border:1px solid rgba(201,138,44,0.2)"></div>
  <div style="position:relative; z-index:2; max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1.02fr 0.98fr; gap:72px; align-items:center">
   <div data-reveal="">
    <div style="display:flex; align-items:center; gap:14px">
     <span style="width:34px; height:1px; background:#C98A2C; display:block"></span>
     <span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">Montfort Real Estate</span>
    </div>
    <h1 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:62px; line-height:1.06; letter-spacing:-0.02em; color:#0F1729; margin:20px 0 0; text-wrap:pretty">NYC Realtor Services</h1>
    <p style="font-size:19px; line-height:1.7; color:#3B4C5E; margin:22px 0 0; max-width:560px; text-wrap:pretty">Whether you're <strong style="font-weight:700; color:#0F1729">buying</strong> or <strong style="font-weight:700; color:#0F1729">selling</strong>, our team helps you avoid costly mistakes, negotiate with confidence, and achieve the best possible outcome for your real estate goals.</p>
    <div style="display:flex; flex-wrap:wrap; gap:14px; margin-top:34px">
     <a href="https://calendly.com/montfort" style="display:inline-flex; align-items:center; justify-content:center; background:#113B5F; color:#F9F6E6; font-size:15px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; padding:18px 34px; min-height:56px" style-hover="background:#C98A2C; color:#0F1729">Book Now</a>
     <a href="tel:646-970-1078" style="display:inline-flex; align-items:center; justify-content:center; border:2px solid #113B5F; color:#113B5F; font-size:15px; font-weight:800; letter-spacing:0.03em; border-radius:100px; padding:16px 30px; min-height:56px" style-hover="background:#113B5F; color:#F9F6E6">(646) 970-1078</a>
    </div>
    <div style="margin-top:38px; padding-top:26px; border-top:1px solid #D9CFA6">
     <div style="font-size:11.5px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#8A7B4E">Serving NYC's top neighborhoods</div>
     <div style="display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px 40px; margin-top:18px">
      <a href="/park-slope/" style="font-size:15.5px; font-weight:600; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Park Slope Realtor</a><a href="/bedford-stuyvesant/" style="font-size:15.5px; font-weight:600; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Bedford Stuyvesant Realtor</a><a href="/brooklyn-heights/" style="font-size:15.5px; font-weight:600; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Brooklyn Heights Realtor</a><a href="/dumbo/" style="font-size:15.5px; font-weight:600; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Dumbo Realtor</a><a href="/downtown-brooklyn/" style="font-size:15.5px; font-weight:600; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Downtown Brooklyn Realtor</a><a href="/chelsea/" style="font-size:15.5px; font-weight:600; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Chelsea Realtor</a><a href="/upper-east-side/" style="font-size:15.5px; font-weight:600; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Upper East Side Realtor</a><a href="/upper-west-side/" style="font-size:15.5px; font-weight:600; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Upper West Side Realtor</a><a href="/crown-heights/" style="font-size:15.5px; font-weight:600; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Crown Heights Realtor</a><a href="/williamsburg/" style="font-size:15.5px; font-weight:600; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Williamsburg Realtor</a><a href="/harlem/" style="font-size:15.5px; font-weight:600; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Harlem Realtor</a>
     </div>
    </div>
   </div>
   <div data-reveal="" style="position:relative">
    <div style="position:relative; border-radius:16px; overflow:hidden; aspect-ratio:5/4; background:#E0D9B8; border:6px solid #FFFFFF; box-shadow:0 40px 90px rgba(17,59,95,0.28)">
     <img src="/redesign-assets/hoods/upper-west-side.webp" alt="NYC brownstone real estate" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
    </div>
    <div style="position:absolute; right:-14px; bottom:-22px; display:inline-flex; align-items:center; gap:18px; background:#FFFFFF; border:1px solid rgba(201,138,44,0.55); border-radius:16px; box-shadow:0 22px 48px rgba(17,59,95,0.28); padding:18px 26px; white-space:nowrap">
     <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" style="flex:0 0 auto; width:50px; height:50px; display:block">
     <div style="display:flex; flex-direction:column; gap:4px">
      <span style="font-size:19px; font-weight:700; line-height:1; letter-spacing:-0.01em; color:#0F1729">Google Rating</span>
      <div style="display:flex; align-items:center; gap:9px">
       <span style="font-size:23px; font-weight:700; line-height:1; color:#C98A2C">5.0</span>
       <span style="color:#F5A623; font-size:19px; letter-spacing:0.08em; line-height:1">★★★★★</span>
      </div>
      <span style="font-size:14px; line-height:1.3; color:#0F1729">Over <strong style="font-weight:700">57 Reviews</strong></span>
     </div>
    </div>
   </div>
  </div>
 </section>

 <section data-screen-label="Client promises" style="background:#F9F6E6; border-bottom:1px solid #E0D9B8; padding:36px 64px">
  <div style="max-width:1440px; margin:0 auto; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:48px">
    <div data-reveal="" style="display:flex; align-items:flex-start; gap:18px">
     <span style="flex:0 0 auto; width:46px; height:46px; border-radius:100px; background:#C98A2C; display:flex; align-items:center; justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 12.5l3.5 3.5L18 7.5" stroke="#0F1729" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
     <div>
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:18px; letter-spacing:0.02em; text-transform:uppercase; color:#0F1729">Smooth Transaction</div>
      <p style="font-size:16px; line-height:1.65; color:#3B4C5E; margin:8px 0 0; text-wrap:pretty">With limited risk throughout the buying process.</p>
     </div>
    </div>
    <div data-reveal="" style="display:flex; align-items:flex-start; gap:18px">
     <span style="flex:0 0 auto; width:46px; height:46px; border-radius:100px; background:#C98A2C; display:flex; align-items:center; justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 12.5l3.5 3.5L18 7.5" stroke="#0F1729" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
     <div>
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:18px; letter-spacing:0.02em; text-transform:uppercase; color:#0F1729">No Pressure</div>
      <p style="font-size:16px; line-height:1.65; color:#3B4C5E; margin:8px 0 0; text-wrap:pretty">No pressure to overpay or purchase within a specific timeframe.</p>
     </div>
    </div>
    <div data-reveal="" style="display:flex; align-items:flex-start; gap:18px">
     <span style="flex:0 0 auto; width:46px; height:46px; border-radius:100px; background:#C98A2C; display:flex; align-items:center; justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M6 12.5l3.5 3.5L18 7.5" stroke="#0F1729" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
     <div>
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:18px; letter-spacing:0.02em; text-transform:uppercase; color:#0F1729">Ongoing Support</div>
      <p style="font-size:16px; line-height:1.65; color:#3B4C5E; margin:8px 0 0; text-wrap:pretty">A dedicated team that stays available even after the deal closes.</p>
     </div>
    </div>
  </div>
 </section>

 <section data-screen-label="Services" style="background:#fff; padding:120px 64px; border-bottom:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto">
   <div data-reveal="" style="max-width:860px">
    <div style="display:flex; align-items:center; gap:14px">
     <span style="width:34px; height:1px; background:#C98A2C; display:block"></span>
     <span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">What we offer</span>
    </div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; line-height:1.18; letter-spacing:-0.01em; color:#0F1729; margin:16px 0 0; text-wrap:pretty">Expertise across every NYC transaction</h2>
    <p style="font-size:17px; line-height:1.85; color:#3B4C5E; margin:18px 0 0; text-wrap:pretty">From buyer and listing representation to investment advisory and valuation, we help clients make confident real estate decisions throughout New York City. Browse our specialized services below or call <strong style="font-weight:700; color:#0F1729">1-646-970-1078</strong> to discuss your goals.</p>
   </div>
   <div style="margin-top:60px">
   <div data-reveal="" style="">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap">
     <div style="display:flex; align-items:center; gap:24px">
      <div style="flex:0 0 auto; width:96px; height:96px; border-radius:16px; overflow:hidden; border:1px solid #E0D9B8; box-shadow:0 16px 34px rgba(17,59,95,0.12)"><img src="/redesign-assets/services/buyers-agent.webp" alt="NYC Buyer’s Agent" style="width:100%; height:100%; object-fit:cover; display:block"></div>
      <div>
       <div style="font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#C98A2C">Buy</div>
       <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:34px; line-height:1.16; letter-spacing:-0.01em; color:#0F1729; margin:10px 0 0; text-wrap:pretty">NYC Buyer’s Agent</h2>
      </div>
     </div>
     <a href="/nyc-buyers-agent-service/" style="font-size:12.5px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#113B5F; white-space:nowrap; border-bottom:2px solid #C98A2C; padding-bottom:5px" style-hover="border-bottom-color:#0F1729">View overview →</a>
    </div>
    <div style="display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:22px; margin-top:34px">
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/slots/svc-buying-a-condo-in-nyc.webp" alt="svc buying a condo in nyc" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/buying-a-condo-in-nyc/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Buying a Condo in NYC</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Expert guidance, market insights, and strategic representation for condo buyers.</p>
       <a href="/buying-a-condo-in-nyc/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/slots/svc-buying-a-brownstone-in-nyc.webp" alt="svc buying a brownstone in nyc" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/buying-a-brownstone-in-nyc/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Buying a Brownstone in NYC</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Expert guidance for buying iconic NYC brownstones.</p>
       <a href="/buying-a-brownstone-in-nyc/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/buying-sro-in-nyc.webp" alt="Buying an SRO in NYC" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/buying-sro-in-nyc/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Buying an SRO in NYC</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Affordable housing, investment value, and specialized NYC expertise.</p>
       <a href="/buying-sro-in-nyc/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/slots/svc-co-ownership-buying-in-nyc.webp" alt="svc co ownership buying in nyc" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/co-ownership-buying-in-nyc/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Co-Ownership Buying in NYC</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Shared ownership, lower costs, and greater buying power.</p>
       <a href="/co-ownership-buying-in-nyc/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
    </div>
   </div>
   <div data-reveal="" style="margin-top:72px; padding-top:60px; border-top:1px solid #E0D9B8">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap">
     <div style="display:flex; align-items:center; gap:24px">
      <div style="flex:0 0 auto; width:96px; height:96px; border-radius:16px; overflow:hidden; border:1px solid #E0D9B8; box-shadow:0 16px 34px rgba(17,59,95,0.12)"><img src="/redesign-assets/services/listing-agent.webp" alt="NYC Listing Agent" style="width:100%; height:100%; object-fit:cover; display:block"></div>
      <div>
       <div style="font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#C98A2C">Sell</div>
       <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:34px; line-height:1.16; letter-spacing:-0.01em; color:#0F1729; margin:10px 0 0; text-wrap:pretty">NYC Listing Agent</h2>
      </div>
     </div>
     <a href="/nyc-listing-agent-service/" style="font-size:12.5px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#113B5F; white-space:nowrap; border-bottom:2px solid #C98A2C; padding-bottom:5px" style-hover="border-bottom-color:#0F1729">View overview →</a>
    </div>
    <div style="display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:22px; margin-top:34px">
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/slots/svc-selling-brownstones-in-nyc.webp" alt="svc selling brownstones in nyc" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/selling-brownstones-in-nyc/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Selling Brownstones in NYC</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Historic value, expert marketing, and premium buyer demand.</p>
       <a href="/selling-brownstones-in-nyc/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/slots/svc-selling-condos-in-nyc.webp" alt="svc selling condos in nyc" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/selling-condos-in-nyc/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Selling Condos in NYC</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Strategic pricing, qualified buyers, and maximum market exposure.</p>
       <a href="/selling-condos-in-nyc/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/slots/svc-selling-co-ops-in-nyc.webp" alt="svc selling co ops in nyc" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/selling-co-ops-in-nyc/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Selling Co-ops in NYC</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Board expertise, targeted marketing, and seamless transactions.</p>
       <a href="/selling-co-ops-in-nyc/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/selling-sros-in-nyc.webp" alt="Selling SROs in NYC" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/selling-sros-in-nyc/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Selling SROs in NYC</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Regulatory expertise, investor connections, and maximum property value.</p>
       <a href="/selling-sros-in-nyc/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/slots/svc-selling-probate-properties-in-nyc.webp" alt="svc selling probate properties in nyc" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/selling-probate-properties-in-nyc/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">Selling Probate Properties in NYC</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Compassionate guidance, legal coordination, and stress-free sales.</p>
       <a href="/selling-probate-properties-in-nyc/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
    </div>
   </div>
   <div data-reveal="" style="margin-top:72px; padding-top:60px; border-top:1px solid #E0D9B8">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap">
     <div style="display:flex; align-items:center; gap:24px">
      <div style="flex:0 0 auto; width:96px; height:96px; border-radius:16px; overflow:hidden; border:1px solid #E0D9B8; box-shadow:0 16px 34px rgba(17,59,95,0.12)"><img src="/redesign-assets/services/multifamily.webp" alt="NYC Multifamily Real Estate Agent" style="width:100%; height:100%; object-fit:cover; display:block"></div>
      <div>
       <div style="font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#C98A2C">Invest</div>
       <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:34px; line-height:1.16; letter-spacing:-0.01em; color:#0F1729; margin:10px 0 0; text-wrap:pretty">NYC Multifamily Real Estate Agent</h2>
      </div>
     </div>
     <a href="/nyc-multifamily-real-estate-agent-service/" style="font-size:12.5px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#113B5F; white-space:nowrap; border-bottom:2px solid #C98A2C; padding-bottom:5px" style-hover="border-bottom-color:#0F1729">View overview →</a>
    </div>
    <div style="display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:22px; margin-top:34px">
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/2-family-house-for-sale-nyc.webp" alt="2-Family House for Sale NYC" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/2-family-house-for-sale-nyc/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">2-Family House for Sale NYC</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Rental income potential, flexible living, and smart investing.</p>
       <a href="/2-family-house-for-sale-nyc/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/3-family-house-for-sale-nyc.webp" alt="3-Family House for Sale NYC" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/3-family-house-for-sale-nyc/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">3-Family House for Sale NYC</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Multiple income streams, long-term growth, and NYC opportunity.</p>
       <a href="/3-family-house-for-sale-nyc/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/4-family-house-for-sale-nyc.webp" alt="4-Family House for Sale NYC" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/4-family-house-for-sale-nyc/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">4-Family House for Sale NYC</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Maximum cash flow, strong returns, and multifamily ownership.</p>
       <a href="/4-family-house-for-sale-nyc/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
    </div>
   </div>
   <div data-reveal="" style="margin-top:72px; padding-top:60px; border-top:1px solid #E0D9B8">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap">
     <div style="display:flex; align-items:center; gap:24px">
      <div style="flex:0 0 auto; width:96px; height:96px; border-radius:16px; overflow:hidden; border:1px solid #E0D9B8; box-shadow:0 16px 34px rgba(17,59,95,0.12)"><img src="/redesign-assets/services/home-valuation.webp" alt="NYC Free Home Valuation" style="width:100%; height:100%; object-fit:cover; display:block"></div>
      <div>
       <div style="font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#C98A2C">Value</div>
       <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:34px; line-height:1.16; letter-spacing:-0.01em; color:#0F1729; margin:10px 0 0; text-wrap:pretty">NYC Free Home Valuation</h2>
      </div>
     </div>
     <a href="/home-valuation/" style="font-size:12.5px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#113B5F; white-space:nowrap; border-bottom:2px solid #C98A2C; padding-bottom:5px" style-hover="border-bottom-color:#0F1729">View overview →</a>
    </div>
    <div style="display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:22px; margin-top:34px">
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/nyc-condo-free-home-valuation.webp" alt="NYC Condo Free Home Valuation" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/nyc-condo-free-home-valuation/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">NYC Condo Free Home Valuation</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Accurate pricing insights, market expertise, and condo valuation guidance.</p>
       <a href="/nyc-condo-free-home-valuation/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/slots/svc-nyc-co-op-free-home-valuation.webp" alt="svc nyc co op free home valuation" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/nyc-co-op-free-home-valuation/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">NYC Co-op Free Home Valuation</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Board-aware pricing, market insights, and co-op valuation expertise.</p>
       <a href="/nyc-co-op-free-home-valuation/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/nyc-brownstone-free-home-valuation.webp" alt="NYC Brownstone Free Home Valuation" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/nyc-brownstone-free-home-valuation/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">NYC Brownstone Free Home Valuation</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Historic property expertise, market analysis, and accurate valuation.</p>
       <a href="/nyc-brownstone-free-home-valuation/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/nyc-sro-free-home-valuation.webp" alt="NYC SRO Free Home Valuation" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/nyc-sro-free-home-valuation/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">NYC SRO Free Home Valuation</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Regulatory expertise, investment analysis, and accurate property valuation.</p>
       <a href="/nyc-sro-free-home-valuation/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
    </div>
   </div>
   <div data-reveal="" style="margin-top:72px; padding-top:60px; border-top:1px solid #E0D9B8">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap">
     <div style="display:flex; align-items:center; gap:24px">
      <div style="flex:0 0 auto; width:96px; height:96px; border-radius:16px; overflow:hidden; border:1px solid #E0D9B8; box-shadow:0 16px 34px rgba(17,59,95,0.12)"><img src="/redesign-assets/services/mortgage.webp" alt="NYC Mortgage Calculator" style="width:100%; height:100%; object-fit:cover; display:block"></div>
      <div>
       <div style="font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#C98A2C">Finance</div>
       <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:34px; line-height:1.16; letter-spacing:-0.01em; color:#0F1729; margin:10px 0 0; text-wrap:pretty">NYC Mortgage Calculator</h2>
      </div>
     </div>
     <a href="/mortgage-calculator/" style="font-size:12.5px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#113B5F; white-space:nowrap; border-bottom:2px solid #C98A2C; padding-bottom:5px" style-hover="border-bottom-color:#0F1729">View overview →</a>
    </div>
    <div style="display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:22px; margin-top:34px">
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/slots/svc-nyc-brownstone-mortgages.webp" alt="svc nyc brownstone mortgages" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/nyc-brownstone-mortgages/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">NYC Brownstone Mortgages</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Historic property financing, flexible loan options, and expert support.</p>
       <a href="/nyc-brownstone-mortgages/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/nyc-sro-mortgages.webp" alt="NYC SRO Mortgages" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/nyc-sro-mortgages/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">NYC SRO Mortgages</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Specialized financing, investment opportunities, and expert guidance.</p>
       <a href="/nyc-sro-mortgages/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/nyc-first-time-home-buyer-mortages.webp" alt="NYC First-Time Home Buyer Mortgages" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="/nyc-first-time-home-buyer-mortages/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">NYC First-Time Home Buyer Mortgages</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Flexible financing, lower down payments, and homeownership opportunities.</p>
       <a href="/nyc-first-time-home-buyer-mortages/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
    </div>
   </div>
   <div data-reveal="" style="margin-top:72px; padding-top:60px; border-top:1px solid #E0D9B8">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap">
     <div style="display:flex; align-items:center; gap:24px">
      <div style="flex:0 0 auto; width:96px; height:96px; border-radius:16px; overflow:hidden; border:1px solid #E0D9B8; box-shadow:0 16px 34px rgba(17,59,95,0.12); background:#113B5F; display:flex; align-items:center; justify-content:center"><svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#F0D9A8" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="8" y1="10" x2="9" y2="10"></line><line x1="12" y1="10" x2="13" y2="10"></line><line x1="16" y1="10" x2="16" y2="10"></line><line x1="8" y1="14" x2="9" y2="14"></line><line x1="12" y1="14" x2="13" y2="14"></line><line x1="16" y1="14" x2="16" y2="18"></line><line x1="8" y1="18" x2="9" y2="18"></line><line x1="12" y1="18" x2="13" y2="18"></line></svg></div>
      <div>
       <div style="font-size:11px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#C98A2C">Finance</div>
       <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:34px; line-height:1.16; letter-spacing:-0.01em; color:#0F1729; margin:10px 0 0; text-wrap:pretty">NYC Brownstone Calculators</h2>
      </div>
     </div>
     <a href="https://montfortre.com/calculators/" style="font-size:12.5px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; color:#113B5F; white-space:nowrap; border-bottom:2px solid #C98A2C; padding-bottom:5px" style-hover="border-bottom-color:#0F1729">View overview →</a>
    </div>
    <div style="display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:22px; margin-top:34px">
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/mortgage.webp" alt="NYC Brownstone Buyer Closing Cost Calculator" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="https://montfortre.com/nyc-brownstone-buyer-closing-cost-calculator/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">NYC Brownstone Buyer Closing Cost Calculator</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Estimate your total closing costs as a buyer, from taxes to attorney fees.</p>
       <a href="https://montfortre.com/nyc-brownstone-buyer-closing-cost-calculator/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/buyers-agent.webp" alt="NYC Rent vs Buy Brownstone Calculator" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="https://montfortre.com/nyc-rent-vs-buy-brownstone-calculator/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">NYC Rent vs Buy Brownstone Calculator</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Compare the long-term cost of renting versus owning a Brownstone.</p>
       <a href="https://montfortre.com/nyc-rent-vs-buy-brownstone-calculator/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
     <div data-reveal="" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
      <div style="aspect-ratio:16/10; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/services/home-valuation.webp" alt="NYC Brownstone Seller Closing Cost Calculator" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
      <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:24px 26px 26px">
       <a href="https://montfortre.com/nyc-brownstone-seller-closing-cost-calculator/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.3; color:#0F1729; text-wrap:pretty" style-hover="color:#C98A2C">NYC Brownstone Seller Closing Cost Calculator</a>
       <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Project your net proceeds after commissions, transfer taxes, and fees.</p>
       <a href="https://montfortre.com/nyc-brownstone-seller-closing-cost-calculator/" style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F" style-hover="color:#C98A2C">Learn more <span style="color:#C98A2C">→</span></a>
      </div>
     </div>
    </div>
   </div>
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
     <div style="aspect-ratio:5/3; border-radius:16px; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/upper-west-side.webp" alt="Upper West Side Townhouse Q2 2024 Market Report" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.05)"></div>
     <div style="font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#C98A2C; margin-top:22px">Market Report</div>
     <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:23px; line-height:1.32; color:#0F1729; margin-top:12px; text-wrap:pretty">Upper West Side Townhouse Q2 2024 Market Report</div>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">On the Upper West Side, we observed a distinct trend that diverges from the citywide patterns…</p>
     <div style="display:flex; align-items:center; gap:9px; margin-top:18px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Read article <span style="color:#C98A2C">→</span></div>
    </a>
    <a data-reveal="" href="/harlem-brownstone-q2-2024-market-report/" style="display:flex; flex-direction:column">
     <div style="aspect-ratio:5/3; border-radius:16px; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/harlem.webp" alt="Harlem Brownstone Q2 2024 Market Report" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.05)"></div>
     <div style="font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#C98A2C; margin-top:22px">Market Report</div>
     <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:23px; line-height:1.32; color:#0F1729; margin-top:12px; text-wrap:pretty">Harlem Brownstone Q2 2024 Market Report</div>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">The Harlem brownstone market has seen an increase in sales activity since this time last year…</p>
     <div style="display:flex; align-items:center; gap:9px; margin-top:18px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Read article <span style="color:#C98A2C">→</span></div>
    </a>
    <a data-reveal="" href="/discover-your-dream-home-explore-apartments-for-sale-on-the-upper-west-side/" style="display:flex; flex-direction:column">
     <div style="aspect-ratio:5/3; border-radius:16px; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/chelsea.webp" alt="Explore Apartments for Sale on the Upper West Side" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.05)"></div>
     <div style="font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#C98A2C; margin-top:22px">Buyer Guide</div>
     <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:23px; line-height:1.32; color:#0F1729; margin-top:12px; text-wrap:pretty">Discover Your Dream Home: Apartments for Sale on the Upper West Side</div>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">Searching for your dream home in one of New York City’s most sought-after neighborhoods?…</p>
     <div style="display:flex; align-items:center; gap:9px; margin-top:18px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Read article <span style="color:#C98A2C">→</span></div>
    </a>
   </div>
  </div>
 </section>

 <section data-screen-label="Contact" style="background:#113B5F; padding:100px 64px">
  <div style="max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:stretch">
   <div data-reveal="" style="display:flex; flex-direction:column; justify-content:center">
    <div style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#C98A2C">Get in touch</div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:42px; line-height:1.22; letter-spacing:-0.008em; color:#F9F6E6; margin:16px 0 0; text-wrap:pretty">Contact Montfort Real Estate</h2>
    <div style="display:flex; flex-direction:column; gap:12px; margin-top:32px; max-width:520px">
     <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px">
      <input type="text" placeholder="First name" style="background:rgba(249,246,230,0.1); border:1px solid rgba(201,138,44,0.45); border-radius:10px; padding:15px 16px; font-family:inherit; font-size:15.5px; color:#F9F6E6; min-height:52px">
      <input type="text" placeholder="Last name" style="background:rgba(249,246,230,0.1); border:1px solid rgba(201,138,44,0.45); border-radius:10px; padding:15px 16px; font-family:inherit; font-size:15.5px; color:#F9F6E6; min-height:52px">
     </div>
     <input type="email" placeholder="Email address" style="background:rgba(249,246,230,0.1); border:1px solid rgba(201,138,44,0.45); border-radius:10px; padding:15px 16px; font-family:inherit; font-size:15.5px; color:#F9F6E6; min-height:52px">
     <textarea placeholder="Comments, questions?" rows="4" style="background:rgba(249,246,230,0.1); border:1px solid rgba(201,138,44,0.45); border-radius:10px; padding:15px 16px; font-family:inherit; font-size:15.5px; color:#F9F6E6; resize:vertical"></textarea>
     <a href="https://calendly.com/montfort" style="display:flex; align-items:center; justify-content:center; background:#C98A2C; color:#0F1729; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; font-size:15px; padding:17px 24px; min-height:54px" style-hover="background:#F9F6E6; color:#113B5F">Submit</a>
    </div>
    <a href="/redesign-assets/11-costly-mistakes-brownstone.pdf" download="" style="display:flex; align-items:center; gap:20px; margin-top:32px; max-width:520px; background:rgba(249,246,230,0.06); border:1px solid rgba(201,138,44,0.45); border-radius:16px; padding:22px 24px; text-decoration:none; transition:background .3s ease, border-color .3s ease" style-hover="background:rgba(249,246,230,0.1); border-color:#C98A2C">
     <span style="flex:0 0 auto; width:52px; height:52px; border-radius:12px; background:#C98A2C; display:flex; align-items:center; justify-content:center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F1729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></span>
     <span style="display:flex; flex-direction:column; gap:5px">
      <span style="font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#C98A2C">Free Download</span>
      <span style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; line-height:1.28; color:#F9F6E6; text-wrap:pretty">11 Costly Mistakes Made When Buying a Brownstone</span>
      <span style="font-size:14px; line-height:1.6; color:rgba(249,246,230,0.72); text-wrap:pretty">Educate yourself on these 11 costly mistakes, the difference between a successful purchase and a disastrous one.</span>
     </span>
    </a>
   </div>
   <div data-reveal="" style="position:relative; border-radius:16px; overflow:hidden; border:1px solid rgba(201,138,44,0.55); box-shadow:0 30px 70px rgba(11,18,32,0.4); min-height:440px; background:#0B1220">
    <iframe title="Montfort Real Estate on Google Maps" src="https://www.google.com/maps?q=8+West+126th+Street,+New+York,+NY+10027&output=embed" style="position:absolute; inset:0; width:100%; height:100%; border:0; filter:grayscale(1) contrast(0.92) brightness(0.92)" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(120deg, rgba(17,59,95,0.34) 0%, rgba(17,59,95,0) 46%), linear-gradient(0deg, rgba(11,18,32,0.55) 0%, rgba(11,18,32,0) 34%); mix-blend-mode:multiply"></div>
    <div style="position:absolute; left:24px; right:24px; bottom:24px; background:#F9F6E6; border-radius:16px; border-top:3px solid #C98A2C; padding:24px 26px; display:flex; align-items:center; justify-content:space-between; gap:24px; box-shadow:0 20px 44px rgba(11,18,32,0.35)">
     <div>
      <div style="font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#C98A2C">Visit our office</div>
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; margin-top:8px; line-height:1.3">8 West 126th Street</div>
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
     <a href="/harlem/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Harlem Realtor</a>
     <a href="/upper-east-side/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Upper East Side Realtor</a>
     <a href="/upper-west-side/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Upper West Side Realtor</a>
     <a href="/chelsea/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Chelsea Realtor</a>
     <a href="/downtown-brooklyn/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Downtown Brooklyn Realtor</a>
     <a href="/dumbo/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Dumbo Realtor</a>
     <a href="/brooklyn-heights/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Brooklyn Heights Realtor</a>
     <a href="/williamsburg/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Williamsburg Realtor</a>
     <a href="/bedford-stuyvesant/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Bedford-Stuyvesant</a>
     <a href="/crown-heights/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Crown Heights Realtor</a>
     <a href="/park-slope/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Park Slope Realtor</a>
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
    <a href="https://www.facebook.com/montfortrealestate" target="_blank" rel="noopener" aria-label="Facebook" style="width:44px; height:44px; border-radius:100px; background:#C98A2C; color:#0F1729; display:flex; align-items:center; justify-content:center; transition:background .25s ease, color .25s ease" style-hover="background:#F9F6E6; color:#113B5F"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5.5h-3c-2.2 0-3.8 1.7-3.8 3.9V11H7.5v3.5h2.7V22h3.6v-7.5h2.7l.5-3.5h-3.2V9.6c0-.4.3-.6.7-.6z"/></svg></a>
    <a href="https://www.youtube.com/@montfortrealestate6984" target="_blank" rel="noopener" aria-label="YouTube" style="width:44px; height:44px; border-radius:100px; background:#C98A2C; color:#0F1729; display:flex; align-items:center; justify-content:center; transition:background .25s ease, color .25s ease" style-hover="background:#F9F6E6; color:#113B5F"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.3-3.8.3-3.8s0-2.5-.3-3.8zM10 15V9l5.2 3z"/></svg></a>
    <a href="https://www.instagram.com/stanleymontfort/" target="_blank" rel="noopener" aria-label="Instagram" style="width:44px; height:44px; border-radius:100px; background:#C98A2C; color:#0F1729; display:flex; align-items:center; justify-content:center; transition:background .25s ease, color .25s ease" style-hover="background:#F9F6E6; color:#113B5F"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.9"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.9"/><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"/></svg></a>
    </div>
    <img src="/redesign-assets/rebny.webp" alt="REBNY, Real Estate Board of New York" style="height:52px; width:auto; display:block; opacity:0.9">
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


`;

export default function Services() {
  useStyleHover();
  return (
    <>
      <Seo title={TITLE} metas={METAS} links={LINKS} jsonLd={JSON_LD} />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}
