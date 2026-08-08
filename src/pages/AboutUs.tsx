import Seo from "../components/Seo";
import useStyleHover from "../hooks/useStyleHover";

const TITLE = "About Us | Montfort Real Estate";
const METAS = [
  {
    "name": "twitter:card",
    "content": "summary_large_image"
  },
  {
    "name": "twitter:title",
    "content": "About Us | Montfort Real Estate"
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
    "content": "About Us | Montfort Real Estate"
  },
  {
    "property": "og:url",
    "content": "https://montfortre.com/about-us/"
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
    "href": "https://montfortre.com/about-us/"
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
  "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@id\":\"https://montfortre.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@id\":\"https://montfortre.com/about-us/\",\"name\":\"About Us\"}}]}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"RealEstateAgent\",\"@id\":\"https://montfortre.com/#real-estate-agent\",\"name\":\"Montfort Real Estate\",\"description\":\"NYC's brownstone and townhouse specialists with nearly a decade of experience serving Harlem, the Upper West Side and Brooklyn. We represent buyers and sellers with equal dedication \\u2014 from first-time brownstone purchases to multifamily investment acquisitions, with condos and co-ops as part of our full-service offering. Our edge: block-by-block neighborhood expertise, exclusive off-market property access and a vetted network of trusted inspectors, attorneys and contractors. Buying a brownstone in Harlem, Crown Heights or Bed-Stuy? Selling a townhouse on the Upper West Side or in Brooklyn Heights? Our white-glove concierge approach delivers a seamless experience from first conversation to closing day. Call (646) 970-1078.\",\"url\":\"https://montfortre.com\",\"email\":\"sm@montfortre.com\",\"telephone\":\"1-646-970-1078\",\"faxNumber\":\"\",\"priceRange\":\"\",\"image\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"logo\":\"https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png\",\"address\":{\"@type\":\"PostalAddress\",\"addressLocality\":\"New York\",\"addressRegion\":\"NY\",\"postalCode\":\"10027\",\"streetAddress\":\"8 West 126th Street\"},\"sameAs\":[\"https://www.facebook.com/montfortrealestate\",\"https://www.linkedin.com/in/stanley-p-montfort-b3675548/\",\"https://www.youtube.com/@montfortrealestate6984\",\"https://www.instagram.com/stanleymontfort/\"],\"contactPoint\":{\"@type\":\"ContactPoint\",\"contactType\":\"Customer Service\",\"email\":\"sm@montfortre.com\",\"telephone\":\"646-970-1078\"}}",
  "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"About Us\",\"description\":\"Meet Stanley Montfort \\u2014 Trusted NYC Real Estate Advisor with Over 20 Years of Experience Whether you&#039;re buying your first home, investing in a brownstone, or selling a valuable property, Stanley Montfort provides the expertise, market insight, and personalized guidance needed to make informed decisions and achieve the best possible outcome Call 1-(646)-970-1078 Schedule A Consultation \\u2713SMOOTH TRANSACTIONWith limited risk\",\"inLanguage\":\"en-US\",\"datePublished\":\"2026-05-08T13:08:36+00:00\",\"dateModified\":\"2026-07-08T10:31:26+00:00\",\"isPartOf\":{\"@type\":\"WebSite\",\"name\":\"Montfort Real Estate\",\"url\":\"https://montfortre.com/\"}}"
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
</style>



<div style="min-width:1440px; background:#F9F6E6; overflow-x:hidden">

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
    <a href="/about-us/" style="color:#0F1729; padding:8px 0">About</a>
    <div class="mnav-item" style="position:relative">
     <a href="/blog/" class="mnav-top" style="display:flex; align-items:center; gap:7px; color:#0F1729; padding:8px 0">Resources
      <svg class="mnav-chev" width="11" height="11" viewBox="0 0 12 12" fill="none" style="display:block"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
     </a>
     <div class="mnav-drop" style="position:absolute; top:calc(100% + 18px); left:-24px; width:240px; background:#fff; border:1px solid #EAE1BE; border-top:3px solid #C98A2C; box-shadow:0 30px 70px rgba(17,59,95,0.22); border-radius:16px; padding:14px; display:flex; flex-direction:column; gap:2px">
      <a href="/about-us/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">About Us</a>
      <a href="/stanley-montfort/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Stanley Montfort</a>
      <a href="/contact/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Contact</a>
     </div>
    </div>
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


 <section data-screen-label="About hero" style="position:relative; background:#0F1729; overflow:hidden; padding:100px 64px 112px">
  <img src="/redesign-assets/hoods/harlem.png" alt="" aria-hidden="true" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.14; display:block">
  <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,23,41,0.72) 0%, rgba(15,23,41,0.95) 62%)"></div>
  <div style="position:absolute; top:-140px; right:-160px; width:620px; height:620px; border-radius:50%; border:1px solid rgba(201,138,44,0.16)"></div>
  <div style="position:relative; z-index:2; max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1.05fr 0.95fr; gap:80px; align-items:center">
   <div data-reveal="">
    <div style="display:flex; align-items:center; gap:14px">
     <span style="width:34px; height:1px; background:#C98A2C; display:block"></span>
     <span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#F0D9A8">About Montfort Real Estate</span>
    </div>
    <h1 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:52px; line-height:1.12; letter-spacing:-0.014em; color:#F9F6E6; margin:22px 0 0; text-wrap:pretty">Meet Stanley Montfort, trusted NYC real estate advisor with <span style="color:#C98A2C">20+ years</span> of experience</h1>
    <p style="font-size:19px; line-height:1.75; color:rgba(249,246,230,0.85); margin:26px 0 0; max-width:600px; text-wrap:pretty">Whether you're buying your first home, investing in a brownstone, or selling a valuable property, Stanley provides the expertise, market insight, and personalized guidance needed to make informed decisions and achieve the best possible outcome.</p>
    <div style="display:flex; flex-wrap:wrap; gap:14px; margin-top:36px">
     <a href="tel:646-970-1078" style="display:inline-flex; align-items:center; justify-content:center; background:#C98A2C; color:#0F1729; font-size:14.5px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; padding:18px 32px; min-height:56px" style-hover="background:#F9F6E6; color:#113B5F">Call 1-646-970-1078</a>
     <a href="https://calendly.com/montfort" style="display:inline-flex; align-items:center; justify-content:center; border:2px solid rgba(240,217,168,0.55); color:#F9F6E6; font-size:14.5px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; padding:16px 32px; min-height:56px" style-hover="background:#F9F6E6; color:#113B5F; border-color:#F9F6E6">Schedule a Consultation</a>
    </div>
   </div>
   <div data-reveal="" style="position:relative; justify-self:center; padding:30px 30px 0; width:100%; max-width:440px">
    <div style="position:absolute; inset:0 0 58px; border:1px solid rgba(201,138,44,0.5); border-radius:50%"></div>
    <div style="position:absolute; left:2px; top:18px; width:16px; height:16px; border-radius:50%; background:#C98A2C"></div>
    <div style="position:relative; overflow:hidden; border-radius:50%; aspect-ratio:1/1; background:#E0D9B8; border:6px solid rgba(249,246,230,0.9); box-shadow:0 40px 90px rgba(0,0,0,0.42)">
     <img src="/redesign-assets/stanley-portrait.png" alt="Stanley Montfort" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center 12%; display:block">
    </div>
   </div>
  </div>
 </section>

 <section data-screen-label="Client promises" style="background:#F5EECB; border-top:1px solid #E0D9B8; border-bottom:1px solid #E0D9B8; padding:36px 64px">
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

 <section data-screen-label="Approach" style="background:#F9F6E6; padding:120px 64px">
  <div data-reveal="" style="max-width:960px; margin:0 auto; text-align:center">
   <div style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">Our approach</div>
   <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; line-height:1.2; letter-spacing:-0.01em; color:#0F1729; margin:16px 0 0; text-wrap:pretty">Expert guidance for every NYC real estate decision</h2>
   <span style="display:block; width:76px; height:3px; background:#C98A2C; margin:24px auto 0"></span>
   <p style="font-size:19px; line-height:1.8; color:#3B4C5E; margin:28px 0 0; text-wrap:pretty">Whether you're purchasing your first home, financing a brownstone, investing in multifamily properties, or preparing to sell, Stanley provides the market expertise and strategic guidance needed to navigate New York City's competitive landscape, helping clients make informed decisions, avoid costly mistakes, and achieve the best possible outcome for their unique situation.</p>
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

 <section data-screen-label="Neighborhoods" style="background:#F5EECB; padding:120px 64px; border-bottom:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto">
   <div data-reveal="" style="text-align:center; max-width:820px; margin:0 auto">
    <div style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">Where we work</div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; line-height:1.2; letter-spacing:-0.01em; color:#0F1729; margin:16px 0 0; text-wrap:pretty">Proudly serving NYC's most desirable neighborhoods</h2>
    <p style="font-size:17px; line-height:1.8; color:#3B4C5E; margin:18px 0 0; text-wrap:pretty">From the historic brownstones of Harlem and Brooklyn Heights to the luxury residences of the Upper East Side and Chelsea, our local expertise helps you understand each neighborhood's character, market trends, and opportunities.</p>
    <span style="display:block; width:76px; height:3px; background:#C98A2C; margin:24px auto 0"></span>
   </div>
   <div style="display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:24px; margin-top:60px">
    <a data-reveal="" href="/harlem/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/harlem.png" alt="Harlem Realtor" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Manhattan</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty">Harlem Realtor</div>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Historic brownstones, rich culture, and timeless Manhattan charm.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/upper-west-side/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/upper-west-side.png" alt="Upper West Side Realtor" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Manhattan</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty">Upper West Side Realtor</div>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Elegant brownstones, cultural landmarks, and classic Manhattan living.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/upper-east-side/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/upper-east-side.png" alt="Upper East Side Realtor" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Manhattan</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty">Upper East Side Realtor</div>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Luxury residences, world-class culture, and timeless Upper Manhattan elegance.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/chelsea/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/chelsea.jpg" alt="Chelsea Realtor" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Manhattan</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty">Chelsea Realtor</div>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Modern luxury, world-class art, and vibrant Manhattan living.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/downtown-brooklyn/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/downtown-brooklyn.jpg" alt="Downtown Brooklyn Realtor" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty">Downtown Brooklyn Realtor</div>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Modern high-rises, unmatched transit access, and vibrant Brooklyn living.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/dumbo/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/dumbo.jpg" alt="DUMBO Realtor" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty">DUMBO Realtor</div>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Cobblestone streets, waterfront views, and the iconic Brooklyn skyline.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/brooklyn-heights/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/brooklyn-heights.jpg" alt="Brooklyn Heights Realtor" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty">Brooklyn Heights Realtor</div>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Landmark brownstones, promenade views, and quiet Brooklyn elegance.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/williamsburg/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/williamsburg.jpg" alt="Williamsburg Realtor" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty">Williamsburg Realtor</div>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Creative energy, waterfront lofts, and vibrant Brooklyn culture.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/bedford-stuyvesant/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/bedford-stuyvesant.jpg" alt="Bedford-Stuyvesant Realtor" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty">Bedford-Stuyvesant Realtor</div>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Classic brownstones, tree-lined blocks, and rich Brooklyn heritage.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/crown-heights/" style="position:relative; display:block; height:480px; overflow:hidden; border-radius:16px; background:#0F1729; transition:transform 0.4s ease, box-shadow 0.4s ease" style-hover="transform:translateY(-8px); box-shadow:0 34px 70px rgba(15,23,41,0.32)">
     <img src="/redesign-assets/hoods/crown-heights.jpg" alt="Crown Heights Realtor" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block; transition:transform 1.1s cubic-bezier(0.22,0.61,0.36,1)" style-hover="transform:scale(1.07)">
     <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(15,23,41,0.34) 0%, rgba(15,23,41,0) 26%, rgba(15,23,41,0.62) 62%, rgba(15,23,41,0.95) 100%)"></div>
     <div style="position:absolute; top:20px; left:20px; font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#F0D9A8; background:rgba(15,23,41,0.8); padding:7px 13px; border-radius:100px">Brooklyn</div>
     <div style="position:absolute; left:0; right:0; bottom:0; padding:28px 26px 26px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:27px; line-height:1.25; color:#fff; text-wrap:pretty">Crown Heights Realtor</div>
      <div style="font-size:15px; line-height:1.65; color:rgba(255,255,255,0.88); margin-top:11px; max-width:330px">Historic homes, cultural diversity, and dynamic Brooklyn living.</div>
      <div style="display:flex; align-items:center; gap:10px; margin-top:20px; padding-top:15px; border-top:1px solid rgba(201,138,44,0.6); font-size:11.5px; font-weight:800; letter-spacing:0.16em; text-transform:uppercase; color:#F0D9A8">Explore <span>→</span></div>
     </div>
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
     <a href="/contact/" style="color:rgba(249,246,230,0.78); font-size:15px; line-height:1.5" style-hover="color:#C98A2C">Contact</a>
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

export default function AboutUs() {
  useStyleHover();
  return (
    <>
      <Seo title={TITLE} metas={METAS} links={LINKS} jsonLd={JSON_LD} />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}
