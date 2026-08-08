import Seo from "../components/Seo";
import useStyleHover from "../hooks/useStyleHover";

const TITLE = "Stanley Montfort | Montfort Real Estate";
const METAS = [
  {
    "name": "description",
    "content": "Meet Stanley Montfort, NYC real estate expert specializing in brownstones and townhouses with over $1B in sales and proven results."
  },
  {
    "name": "twitter:card",
    "content": "summary_large_image"
  },
  {
    "name": "twitter:title",
    "content": "Stanley Montfort | Montfort Real Estate"
  },
  {
    "name": "twitter:description",
    "content": "Meet Stanley Montfort, NYC real estate expert specializing in brownstones and townhouses with over $1B in sales and proven results."
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
    "content": "Stanley Montfort | Montfort Real Estate"
  },
  {
    "property": "og:description",
    "content": "Meet Stanley Montfort, NYC real estate expert specializing in brownstones and townhouses with over $1B in sales and proven results."
  },
  {
    "property": "og:url",
    "content": "https://montfortre.com/stanley-montfort/"
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
    "href": "https://montfortre.com/stanley-montfort/"
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
  "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@id\":\"https://montfortre.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@id\":\"https://montfortre.com/stanley-montfort/\",\"name\":\"Stanley Montfort\"}}]}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"RealEstateAgent\",\"@id\":\"https://montfortre.com/#real-estate-agent\",\"name\":\"Montfort Real Estate\",\"description\":\"NYC's brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication \\u2014 from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.\",\"url\":\"https://montfortre.com\",\"email\":\"sm@montfortre.com\",\"telephone\":\"1-646-970-1078\",\"faxNumber\":\"\",\"priceRange\":\"\",\"image\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"New York\",\"addressRegion\":\"NY\",\"postalCode\":\"10027\",\"streetAddress\":\"8 West 126th Street\"},\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\",\"https://www.instagram.com/stanleymontfort/\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"Customer Service\",\"email\":\"sm@montfortre.com\",\"telephone\":\"646-970-1078\"}}"
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
  /* Stats strip: compact 2x2 grid instead of a tall stack */
  div[style*="repeat(4,minmax(0,1fr))"][style*="gap:40px"] { grid-template-columns:repeat(2,1fr) !important; gap:28px 16px !important; }
  div[style*="repeat(4,minmax(0,1fr))"][style*="gap:40px"] > div { border-left:none !important; padding-left:0 !important; text-align:center !important; }
  div[style*="repeat(4,minmax(0,1fr))"][style*="gap:40px"] [style*="font-size:40px"] { font-size:26px !important; }
  div[style*="repeat(4,minmax(0,1fr))"][style*="gap:40px"] [style*="font-size:14px"] { font-size:12px !important; margin-top:7px !important; }
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
  /* Hero CTAs: Schedule a Call + Click to Email stay on one row */
  [style*="flex-wrap:wrap; gap:14px; margin-top:36px"] {
    flex-wrap:nowrap !important;
    gap:8px !important;
  }
  [style*="flex-wrap:wrap; gap:14px; margin-top:36px"] > a {
    flex:1 1 0 !important;
    min-width:0 !important;
    justify-content:center !important;
    white-space:nowrap !important;
    font-size:11px !important;
    letter-spacing:0.03em !important;
    padding:12px 8px !important;
    min-height:46px !important;
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


 <section data-screen-label="Stanley hero" style="position:relative; background:#0F1729; overflow:hidden; padding:100px 64px 112px">
  <div style="position:absolute; top:-140px; right:-160px; width:620px; height:620px; border-radius:50%; border:1px solid rgba(201,138,44,0.16)"></div>
  <div style="position:absolute; bottom:-180px; left:-140px; width:520px; height:520px; border-radius:50%; border:1px solid rgba(201,138,44,0.1)"></div>
  <div style="position:relative; z-index:2; max-width:1440px; margin:0 auto; display:grid; grid-template-columns:0.95fr 1.05fr; gap:80px; align-items:center">
   <div data-reveal="" style="position:relative; justify-self:center; padding:34px 34px 0; width:100%; max-width:440px; order:0">
    <div style="position:absolute; inset:0 0 60px; border:1px solid rgba(201,138,44,0.5); border-radius:50%"></div>
    <div style="position:absolute; right:8px; top:26px; width:14px; height:14px; border-radius:50%; background:#C98A2C"></div>
    <div style="position:relative; overflow:hidden; border-radius:50%; aspect-ratio:1/1; background:#E0D9B8; border:6px solid rgba(249,246,230,0.9); box-shadow:0 40px 90px rgba(0,0,0,0.42)">
     <img src="/redesign-assets/stanley-montfort-bio.jpg" alt="Stanley Montfort" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center 20%; display:block">
    </div>
    <div style="position:absolute; left:-6px; bottom:12px; background:#F9F6E6; border-radius:14px; border-top:3px solid #C98A2C; padding:16px 22px; box-shadow:0 24px 50px rgba(0,0,0,0.4)">
     <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:26px; line-height:1; color:#0F1729">$1B+</div>
     <div style="font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#8A7B4E; margin-top:5px">In Brownstone Sales</div>
    </div>
   </div>
   <div data-reveal="">
    <div style="display:flex; align-items:center; gap:14px">
     <span style="width:34px; height:1px; background:#C98A2C; display:block"></span>
     <span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#F0D9A8">Real Estate Advisor&reg;</span>
    </div>
    <h1 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:60px; line-height:1.06; letter-spacing:-0.018em; color:#F9F6E6; margin:22px 0 0; text-wrap:pretty">Stanley Montfort</h1>
    <p style="font-size:19px; line-height:1.75; color:rgba(249,246,230,0.85); margin:24px 0 0; max-width:560px; text-wrap:pretty">NYC's brownstone and townhouse specialist, blending a background in law and the military with the market instinct to close even the most complex deals, and keep every party satisfied.</p>
    <div style="display:flex; flex-wrap:wrap; gap:14px; margin-top:36px">
     <a href="https://calendly.com/montfort" style="display:inline-flex; align-items:center; justify-content:center; gap:10px; background:#C98A2C; color:#0F1729; font-size:14.5px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; padding:18px 32px; min-height:56px" style-hover="background:#F9F6E6; color:#113B5F">Schedule a Call</a>
     <a href="mailto:sm@montfortre.com" style="display:inline-flex; align-items:center; justify-content:center; gap:10px; border:2px solid rgba(240,217,168,0.55); color:#F9F6E6; font-size:14.5px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; padding:16px 32px; min-height:56px" style-hover="background:#F9F6E6; color:#113B5F; border-color:#F9F6E6">Click to Email</a>
    </div>
    <div style="display:flex; flex-wrap:wrap; align-items:center; gap:28px; margin-top:34px; padding-top:26px; border-top:1px solid rgba(201,138,44,0.28)">
     <a href="tel:9084146006" style="display:flex; align-items:center; gap:11px; color:#F9F6E6" style-hover="color:#C98A2C"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><span style="font-size:16px; font-weight:700">(908) 414-6006</span></a>
     <a href="mailto:sm@montfortre.com" style="display:flex; align-items:center; gap:11px; color:#F9F6E6" style-hover="color:#C98A2C"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M2 6l10 7 10-7"></path></svg><span style="font-size:16px; font-weight:700">sm@montfortre.com</span></a>
    </div>
   </div>
  </div>
 </section>

 <section data-screen-label="Stats" style="background:#F5EECB; border-top:1px solid #E0D9B8; border-bottom:1px solid #E0D9B8; padding:56px 64px">
  <div style="max-width:1440px; margin:0 auto; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:40px">
    <div data-reveal="">
     <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:40px; line-height:1; letter-spacing:-0.02em; color:#0F1729">$1B+</div>
     <div style="font-size:14px; line-height:1.5; color:#3B4C5E; margin-top:10px; text-wrap:pretty">In brownstone &amp; townhouse sales facilitated</div>
    </div>
    <div data-reveal="" style="border-left:1px solid #D9CFA6; padding-left:40px">
     <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:40px; line-height:1; letter-spacing:-0.02em; color:#0F1729">Serhant</div>
     <div style="font-size:14px; line-height:1.5; color:#3B4C5E; margin-top:10px; text-wrap:pretty">One of New York's most renowned brokerages</div>
    </div>
    <div data-reveal="" style="border-left:1px solid #D9CFA6; padding-left:40px">
     <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:40px; line-height:1; letter-spacing:-0.02em; color:#0F1729">JD</div>
     <div style="font-size:14px; line-height:1.5; color:#3B4C5E; margin-top:10px; text-wrap:pretty">Fordham University, with a Master's in IPED</div>
    </div>
    <div data-reveal="" style="border-left:1px solid #D9CFA6; padding-left:40px">
     <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:40px; line-height:1; letter-spacing:-0.02em; color:#0F1729">Harlem</div>
     <div style="font-size:14px; line-height:1.5; color:#3B4C5E; margin-top:10px; text-wrap:pretty">Established the townhouse market at Leslie J. Garfield</div>
    </div>
  </div>
 </section>

 <section data-screen-label="A little about me" style="background:#F9F6E6; padding:120px 64px">
  <div data-reveal="" style="max-width:960px; margin:0 auto; text-align:center">
   <div style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">In his words</div>
   <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; line-height:1.2; letter-spacing:-0.01em; color:#0F1729; margin:16px 0 0; text-wrap:pretty">A little about me</h2>
   <span style="display:block; width:76px; height:3px; background:#C98A2C; margin:24px auto 0"></span>
   <p style="font-size:19px; line-height:1.8; color:#3B4C5E; margin:28px 0 0; text-wrap:pretty">Since the start of the pandemic, I've played a crucial role in facilitating over one billion dollars worth of brownstone sales in New York City. I'm a recognized expert in the city's brownstone and townhouse market, with extensive experience on both the sell side and buy side, thanks to a background rooted in the military and law.</p>
   <p style="font-size:19px; line-height:1.8; color:#3B4C5E; margin:22px 0 0; text-wrap:pretty">I honed my skills at Leslie J. Garfield, where I established myself in the Harlem townhouse market and assisted in numerous co-ownership transactions, including more complicated deals involving SROs, seller financing, and negotiating with tenants, always leaving every party satisfied.</p>
  </div>
 </section>

 <section data-screen-label="Story" style="background:#fff; padding:120px 64px; border-top:1px solid #E0D9B8; border-bottom:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1.15fr 0.85fr; gap:80px; align-items:start">
   <div data-reveal="">
    <div style="display:flex; align-items:center; gap:14px">
     <span style="width:34px; height:1px; background:#C98A2C; display:block"></span>
     <span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">How it started</span>
    </div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; line-height:1.2; letter-spacing:-0.01em; color:#0F1729; margin:16px 0 0; text-wrap:pretty">How Stanley Montfort got started</h2>
    <div style="margin-top:28px; display:flex; flex-direction:column; gap:20px; max-width:680px">
     <p style="font-size:17px; line-height:1.85; color:#3B4C5E; margin:0; text-wrap:pretty">Stanley Montfort is a dynamic, accomplished real estate professional whose expertise and passion for the industry have made him a standout in New York City. With a background in <strong style="font-weight:700; color:#0F1729">law and the military</strong>, he has made his mark in the city's competitive brownstone and townhouse market, playing a pivotal role in over <strong style="font-weight:700; color:#0F1729">one billion dollars</strong> worth of sales.</p>
     <p style="font-size:17px; line-height:1.85; color:#3B4C5E; margin:0; text-wrap:pretty">At <strong style="font-weight:700; color:#0F1729">Leslie J. Garfield</strong>, he established himself as an expert in the Harlem townhouse market, renowned for navigating even the most complex co-ownership transactions with ease, working with SROs, negotiating with tenants, and securing seller financing while keeping every party satisfied.</p>
     <p style="font-size:17px; line-height:1.85; color:#3B4C5E; margin:0; text-wrap:pretty">Now at <strong style="font-weight:700; color:#0F1729">Serhant</strong>, one of New York's most renowned brokerages, Stanley has expanded his expertise to condos, co-ops, and new developments while maintaining a stronghold on the townhouse and brownstone market.</p>
     <p style="font-size:17px; line-height:1.85; color:#3B4C5E; margin:0; text-wrap:pretty">What sets Stanley apart is his ability to merge creativity with precision. Deep marketing knowledge, strategic thinking, and impeccable analytical skills let him tackle the most challenging deals with confidence and positive outcomes for everyone involved.</p>
     <p style="font-size:17px; line-height:1.85; color:#3B4C5E; margin:0; text-wrap:pretty">More than a successful professional, he is known for a genuinely personalized approach, complete transparency, data-driven decisions, and honest conversations tailored to each client's needs.</p>
     <p style="font-size:17px; line-height:1.85; color:#3B4C5E; margin:0; text-wrap:pretty">Originally from New Jersey, Stanley is a graduate of <strong style="font-weight:700; color:#0F1729">Fordham University</strong>, where he earned his JD and a Master's in International Political Economy and Development.</p>
    </div>
   </div>
   <div data-reveal="" style="position:sticky; top:110px">
    <div style="position:relative; border-radius:16px; overflow:hidden; background:#E0D9B8; box-shadow:0 30px 70px rgba(17,59,95,0.18); aspect-ratio:4/5">
     <img src="/redesign-assets/stanley-portrait.png" alt="Stanley Montfort" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center 10%; display:block">
    </div>
   </div>
  </div>
 </section>

 <section data-screen-label="Connect" style="background:#0F1729; padding:120px 64px; position:relative; overflow:hidden">
  <div style="position:absolute; top:-160px; left:-140px; width:560px; height:560px; border-radius:50%; border:1px solid rgba(201,138,44,0.12)"></div>
  <div style="position:relative; z-index:2; max-width:1440px; margin:0 auto; display:grid; grid-template-columns:0.9fr 1.1fr; gap:80px; align-items:center">
   <div data-reveal="">
    <div style="display:flex; align-items:center; gap:14px">
     <span style="width:34px; height:1px; background:#C98A2C; display:block"></span>
     <span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#F0D9A8">Let's connect</span>
    </div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; line-height:1.16; letter-spacing:-0.01em; color:#F9F6E6; margin:18px 0 0; text-wrap:pretty">Reach out any way you like</h2>
    <p style="font-size:18px; line-height:1.8; color:rgba(249,246,230,0.82); margin:22px 0 0; max-width:460px; text-wrap:pretty">Ready to buy, sell, or just talk through the market? Book a call, send an email, or follow along, I answer personally.</p>
    <div style="display:flex; flex-wrap:wrap; gap:14px; margin-top:34px">
     <a href="https://calendly.com/montfort" style="display:inline-flex; align-items:center; justify-content:center; background:#C98A2C; color:#0F1729; font-size:14.5px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; padding:18px 32px; min-height:56px" style-hover="background:#F9F6E6; color:#113B5F">Schedule a Call</a>
    </div>
   </div>
   <div data-reveal="" style="display:grid; grid-template-columns:1fr 1fr; gap:16px">
    <a href="tel:9084146006" style="display:flex; flex-direction:column; gap:14px; background:rgba(249,246,230,0.05); border:1px solid rgba(201,138,44,0.3); border-radius:16px; padding:26px" style-hover="border-color:#C98A2C; background:rgba(249,246,230,0.09)">
     <span style="width:46px; height:46px; border-radius:12px; background:#C98A2C; display:flex; align-items:center; justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
     <span><span style="display:block; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Call or text</span><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; color:#F9F6E6; margin-top:6px">(908) 414-6006</span></span>
    </a>
    <a href="mailto:sm@montfortre.com" style="display:flex; flex-direction:column; gap:14px; background:rgba(249,246,230,0.05); border:1px solid rgba(201,138,44,0.3); border-radius:16px; padding:26px" style-hover="border-color:#C98A2C; background:rgba(249,246,230,0.09)">
     <span style="width:46px; height:46px; border-radius:12px; background:#C98A2C; display:flex; align-items:center; justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0F1729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M2 6l10 7 10-7"></path></svg></span>
     <span><span style="display:block; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Email</span><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; color:#F9F6E6; margin-top:6px">sm@montfortre.com</span></span>
    </a>
    <a href="https://www.instagram.com/uptownbrownstones/" target="_blank" rel="noopener" style="display:flex; flex-direction:column; gap:14px; background:rgba(249,246,230,0.05); border:1px solid rgba(201,138,44,0.3); border-radius:16px; padding:26px" style-hover="border-color:#C98A2C; background:rgba(249,246,230,0.09)">
     <span style="width:46px; height:46px; border-radius:12px; background:#C98A2C; display:flex; align-items:center; justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#0F1729" stroke-width="1.9"/><circle cx="12" cy="12" r="4" stroke="#0F1729" stroke-width="1.9"/><circle cx="17.5" cy="6.5" r="1.3" fill="#0F1729"/></svg></span>
     <span><span style="display:block; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Instagram</span><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; color:#F9F6E6; margin-top:6px">@uptownbrownstones</span></span>
    </a>
    <a href="https://www.linkedin.com/in/stanley-p-montfort-b3675548/" target="_blank" rel="noopener" style="display:flex; flex-direction:column; gap:14px; background:rgba(249,246,230,0.05); border:1px solid rgba(201,138,44,0.3); border-radius:16px; padding:26px" style-hover="border-color:#C98A2C; background:rgba(249,246,230,0.09)">
     <span style="width:46px; height:46px; border-radius:12px; background:#C98A2C; display:flex; align-items:center; justify-content:center"><svg width="22" height="22" viewBox="0 0 24 24" fill="#0F1729"><path d="M6.5 8.5v10H3.3v-10h3.2zM4.9 3.5a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7zM20.7 18.5h-3.2v-5.2c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8v5.5H10.7s.04-9 0-10h3.2v1.4c.4-.7 1.2-1.6 3-1.6 2.2 0 3.8 1.4 3.8 4.5v5.7z"/></svg></span>
     <span><span style="display:block; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">LinkedIn</span><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; color:#F9F6E6; margin-top:6px">Stanley P. Montfort</span></span>
    </a>
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
     <div style="aspect-ratio:5/3; border-radius:16px; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/upper-west-side.png" alt="Upper West Side Townhouse Q2 2024 Market Report" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.05)"></div>
     <div style="font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#C98A2C; margin-top:22px">Market Report</div>
     <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:23px; line-height:1.32; color:#0F1729; margin-top:12px; text-wrap:pretty">Upper West Side Townhouse Q2 2024 Market Report</div>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">On the Upper West Side, we observed a distinct trend that diverges from the citywide patterns…</p>
     <div style="display:flex; align-items:center; gap:9px; margin-top:18px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Read article <span style="color:#C98A2C">→</span></div>
    </a>
    <a data-reveal="" href="/harlem-brownstone-q2-2024-market-report/" style="display:flex; flex-direction:column">
     <div style="aspect-ratio:5/3; border-radius:16px; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/harlem.png" alt="Harlem Brownstone Q2 2024 Market Report" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.05)"></div>
     <div style="font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#C98A2C; margin-top:22px">Market Report</div>
     <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:23px; line-height:1.32; color:#0F1729; margin-top:12px; text-wrap:pretty">Harlem Brownstone Q2 2024 Market Report</div>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">The Harlem brownstone market has seen an increase in sales activity since this time last year…</p>
     <div style="display:flex; align-items:center; gap:9px; margin-top:18px; font-size:12px; font-weight:800; letter-spacing:0.12em; text-transform:uppercase; color:#113B5F">Read article <span style="color:#C98A2C">→</span></div>
    </a>
    <a data-reveal="" href="/discover-your-dream-home-explore-apartments-for-sale-on-the-upper-west-side/" style="display:flex; flex-direction:column">
     <div style="aspect-ratio:5/3; border-radius:16px; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/chelsea.jpg" alt="Explore Apartments for Sale on the Upper West Side" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.05)"></div>
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
    <a href="https://www.facebook.com/montfortrealestate" target="_blank" rel="noopener" aria-label="Facebook" style="width:44px; height:44px; border-radius:100px; background:#C98A2C; color:#0F1729; display:flex; align-items:center; justify-content:center; transition:background .25s ease, color .25s ease" style-hover="background:#F9F6E6; color:#113B5F"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5.5h-3c-2.2 0-3.8 1.7-3.8 3.9V11H7.5v3.5h2.7V22h3.6v-7.5h2.7l.5-3.5h-3.2V9.6c0-.4.3-.6.7-.6z"/></svg></a>
    <a href="https://www.youtube.com/@montfortrealestate6984" target="_blank" rel="noopener" aria-label="YouTube" style="width:44px; height:44px; border-radius:100px; background:#C98A2C; color:#0F1729; display:flex; align-items:center; justify-content:center; transition:background .25s ease, color .25s ease" style-hover="background:#F9F6E6; color:#113B5F"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.3-3.8.3-3.8s0-2.5-.3-3.8zM10 15V9l5.2 3z"/></svg></a>
    <a href="https://www.instagram.com/stanleymontfort/" target="_blank" rel="noopener" aria-label="Instagram" style="width:44px; height:44px; border-radius:100px; background:#C98A2C; color:#0F1729; display:flex; align-items:center; justify-content:center; transition:background .25s ease, color .25s ease" style-hover="background:#F9F6E6; color:#113B5F"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.9"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.9"/><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"/></svg></a>
    </div>
    <img src="/redesign-assets/rebny.png" alt="REBNY, Real Estate Board of New York" style="height:52px; width:auto; display:block; opacity:0.9">
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

export default function StanleyMontfort() {
  useStyleHover();
  return (
    <>
      <Seo title={TITLE} metas={METAS} links={LINKS} jsonLd={JSON_LD} />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}
