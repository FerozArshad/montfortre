import Seo from "../components/Seo";
import useStyleHover from "../hooks/useStyleHover";

const TITLE = "Harlem | Montfort Real Estate";
const METAS = [
  {
    "name": "description",
    "content": "Explore Harlem real estate including brownstones, condos, co-ops, and luxury homes for sale. Discover the Harlem lifestyle, investment opportunities, and NYC living with Montfort Real Estate."
  },
  {
    "name": "twitter:card",
    "content": "summary_large_image"
  },
  {
    "name": "twitter:title",
    "content": "Harlem | Montfort Real Estate"
  },
  {
    "name": "twitter:description",
    "content": "Explore Harlem real estate including brownstones, condos, co-ops, and luxury homes for sale. Discover the Harlem lifestyle, investment opportunities, and NYC living with Montfort Real Estate."
  },
  {
    "name": "twitter:image",
    "content": "https://assets.agentfire3.com/uploads/sites/312/2021/06/harlem.png"
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
    "content": "Harlem | Montfort Real Estate"
  },
  {
    "property": "og:description",
    "content": "Explore Harlem real estate including brownstones, condos, co-ops, and luxury homes for sale. Discover the Harlem lifestyle, investment opportunities, and NYC living with Montfort Real Estate."
  },
  {
    "property": "og:url",
    "content": "https://montfortre.com/harlem/"
  },
  {
    "property": "og:site_name",
    "content": "Montfort Real Estate"
  },
  {
    "property": "og:image",
    "content": "https://assets.agentfire3.com/uploads/sites/312/2021/06/harlem.png"
  },
  {
    "property": "og:image:width",
    "content": "767"
  },
  {
    "property": "og:image:height",
    "content": "539"
  },
  {
    "property": "article:publisher",
    "content": "https://www.facebook.com/montfortrealestate"
  }
];
const LINKS = [
  {
    "rel": "canonical",
    "href": "https://montfortre.com/harlem/"
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
  "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@id\":\"https://montfortre.com/\",\"name\":\"Home\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@id\":\"https://montfortre.com/harlem/\",\"name\":\"Harlem\"}}]}",
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



 <section data-screen-label="Harlem hero" style="position:relative; background:#F5EECB; border-bottom:1px solid #E0D9B8; overflow:hidden; padding:80px 64px 90px">
  <div style="position:absolute; top:-150px; right:-160px; width:560px; height:560px; border-radius:50%; border:1px solid rgba(201,138,44,0.2)"></div>
  <div style="position:relative; z-index:2; max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1.02fr 0.98fr; gap:72px; align-items:center">
   <div data-reveal="">
    <div style="display:inline-flex; align-items:center; gap:10px; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#8A7B4E"><a href="/neighborhoods/" style="color:#8A7B4E">Neighborhoods</a> <span style="opacity:.5">/</span> <span style="color:#C98A2C">Manhattan</span></div>
    <h1 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:62px; line-height:1.04; letter-spacing:-0.02em; color:#0F1729; margin:18px 0 0; text-wrap:pretty">Harlem Realtor</h1>
    <p style="font-size:19px; line-height:1.7; color:#3B4C5E; margin:22px 0 0; max-width:560px; text-wrap:pretty">One of New York City's most vibrant, historically rich neighborhoods, where classic brownstones, pre-war buildings, and new developments meet a world-famous arts and culture scene.</p>
    <div style="display:flex; flex-wrap:wrap; gap:14px; margin-top:34px">
     <a href="https://calendly.com/montfort" style="display:inline-flex; align-items:center; justify-content:center; background:#113B5F; color:#F9F6E6; font-size:15px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; padding:18px 34px; min-height:56px" style-hover="background:#C98A2C; color:#0F1729">Book Now</a>
     <a href="tel:646-970-1078" style="display:inline-flex; align-items:center; justify-content:center; border:2px solid #113B5F; color:#113B5F; font-size:15px; font-weight:800; letter-spacing:0.03em; border-radius:100px; padding:16px 30px; min-height:56px" style-hover="background:#113B5F; color:#F9F6E6">(646) 970-1078</a>
    </div>
    <div style="margin-top:38px; padding-top:26px; border-top:1px solid #D9CFA6">
     <div style="font-size:11.5px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#8A7B4E">Explore Harlem</div>
     <div style="display:flex; flex-wrap:wrap; gap:14px 32px; margin-top:16px">
      <a href="/harlem/" style="font-size:15.5px; font-weight:600; color:#0F1729" style-hover="color:#C98A2C">Featured listings</a><a href="/harlem/" style="font-size:15.5px; font-weight:600; color:#0F1729" style-hover="color:#C98A2C">Market report</a><a href="/harlem/" style="font-size:15.5px; font-weight:600; color:#0F1729" style-hover="color:#C98A2C">Around the area</a><a href="/harlem/" style="font-size:15.5px; font-weight:600; color:#0F1729" style-hover="color:#C98A2C">Local advice</a>
     </div>
    </div>
   </div>
   <div data-reveal="" style="position:relative">
    <div style="position:relative; border-radius:16px; overflow:hidden; aspect-ratio:5/4; background:#E0D9B8; border:6px solid #FFFFFF; box-shadow:0 40px 90px rgba(17,59,95,0.28)">
     <img src="/redesign-assets/hoods/harlem.png" alt="Harlem brownstones" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
    </div>
    <div style="position:absolute; right:-14px; bottom:-22px; display:inline-flex; align-items:center; gap:18px; background:#FFFFFF; border:1px solid rgba(201,138,44,0.55); border-radius:16px; box-shadow:0 22px 48px rgba(17,59,95,0.28); padding:18px 26px; white-space:nowrap">
     <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" style="flex:0 0 auto; width:50px; height:50px; display:block">
     <div style="display:flex; flex-direction:column; gap:4px">
      <span style="font-size:19px; font-weight:700; line-height:1; letter-spacing:-0.01em; color:#0F1729">Google Rating</span>
      <div style="display:flex; align-items:center; gap:9px"><span style="font-size:23px; font-weight:700; line-height:1; color:#C98A2C">5.0</span><span style="color:#F5A623; font-size:19px; letter-spacing:0.08em; line-height:1">★★★★★</span></div>
      <span style="font-size:14px; line-height:1.3; color:#0F1729">Over <strong style="font-weight:700">57 Reviews</strong></span>
     </div>
    </div>
   </div>
  </div>
 </section>

 <section data-screen-label="Harlem stats" style="background:#0F1729; padding:56px 64px">
  <div style="max-width:1440px; margin:0 auto; display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:0">
   <div data-reveal="" style="padding:12px 40px; border-right:1px solid rgba(201,138,44,0.28); padding-left:0;"><div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:40px; line-height:1; color:#C98A2C">338,411</div><div style="font-size:14px; letter-spacing:0.02em; color:rgba(249,246,230,0.82); margin-top:12px">Residents</div></div><div data-reveal="" style="padding:12px 40px; border-right:1px solid rgba(201,138,44,0.28); "><div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:40px; line-height:1; color:#C98A2C">18%</div><div style="font-size:14px; letter-spacing:0.02em; color:rgba(249,246,230,0.82); margin-top:12px">Homeowners</div></div><div data-reveal="" style="padding:12px 40px; border-right:1px solid rgba(201,138,44,0.28); "><div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:40px; line-height:1; color:#C98A2C">39</div><div style="font-size:14px; letter-spacing:0.02em; color:rgba(249,246,230,0.82); margin-top:12px">Average age</div></div><div data-reveal="" style="padding:12px 40px; "><div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:40px; line-height:1; color:#C98A2C">$659K</div><div style="font-size:14px; letter-spacing:0.02em; color:rgba(249,246,230,0.82); margin-top:12px">Avg. sold price · 30 days</div></div>
  </div>
 </section>

 <section data-screen-label="About Harlem" style="background:#F9F6E6; padding:110px 64px; border-bottom:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1.1fr 0.9fr; gap:80px; align-items:center">
   <div data-reveal="">
    <div style="display:flex; align-items:center; gap:14px"><span style="width:34px; height:1px; background:#C98A2C; display:block"></span><span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">The neighborhood</span></div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; line-height:1.2; letter-spacing:-0.01em; color:#0F1729; margin:16px 0 0; text-wrap:pretty">Living in Harlem</h2>
    <p style="font-size:17px; line-height:1.85; color:#3B4C5E; margin:22px 0 0; text-wrap:pretty">Located in Upper Manhattan and known for its deep cultural roots and iconic role in the Harlem Renaissance, the area blends historic charm with modern energy. Tree-lined streets are filled with classic brownstones, pre-war buildings, and a growing number of new developments.</p>
    <p style="font-size:17px; line-height:1.85; color:#3B4C5E; margin:16px 0 0; text-wrap:pretty">Home to world-renowned landmarks such as the Apollo Theater and Studio Museum, Harlem features an excellent selection of restaurants, cafes, and local shops. Residents enjoy convenient access to Central Park, Marcus Garvey Park, and multiple subway lines, a unique blend of tradition and opportunity.</p>
   </div>
   <div data-reveal="" style="position:relative; border-radius:16px; overflow:hidden; aspect-ratio:4/5; background:#E0D9B8; box-shadow:0 30px 70px rgba(17,59,95,0.18)">
    <img src="/redesign-assets/hoods/harlem.png" alt="Harlem street" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
   </div>
  </div>
 </section>

 <section data-screen-label="Harlem property types" style="background:#F5EECB; padding:110px 64px; border-bottom:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto">
   <div data-reveal="" style="text-align:center; max-width:760px; margin:0 auto">
    <div style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">What we help you buy</div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; line-height:1.2; letter-spacing:-0.01em; color:#0F1729; margin:16px 0 0; text-wrap:pretty">Harlem property types</h2>
    <span style="display:block; width:76px; height:3px; background:#C98A2C; margin:24px auto 0"></span>
   </div>
   <div style="display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:24px; margin-top:56px">
    <a data-reveal="" href="/featured-brownstones-for-sale/harlem-brownstones/" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
     <div style="aspect-ratio:7/5; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/harlem-brownstones.png" alt="Harlem Brownstones" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
     <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:26px 26px 24px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:21px; line-height:1.3; color:#0F1729; text-wrap:pretty">Harlem Brownstones</div>
      <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Historic architecture, timeless charm, and classic Harlem living.</p>
      <div style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F">Explore <span style="color:#C98A2C">→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/buying-a-condo-in-nyc/" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
     <div style="aspect-ratio:7/5; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/harlem-condos.png" alt="Harlem Condos" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
     <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:26px 26px 24px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:21px; line-height:1.3; color:#0F1729; text-wrap:pretty">Harlem Condos</div>
      <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Modern amenities, urban convenience, and vibrant Harlem living.</p>
      <div style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F">Explore <span style="color:#C98A2C">→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/buying-sro-in-nyc/" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
     <div style="aspect-ratio:7/5; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/harlem-sros.png" alt="Harlem SROs" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
     <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:26px 26px 24px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:21px; line-height:1.3; color:#0F1729; text-wrap:pretty">Harlem SROs</div>
      <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Affordable housing, investment potential, and unique opportunities.</p>
      <div style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F">Explore <span style="color:#C98A2C">→</span></div>
     </div>
    </a>
    <a data-reveal="" href="/co-ownership-buying-in-nyc/" style="display:flex; flex-direction:column; background:#F9F6E6; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; transition:transform .4s ease, box-shadow .4s ease, border-color .4s ease" style-hover="transform:translateY(-6px); box-shadow:0 26px 54px rgba(17,59,95,0.14); border-color:#C98A2C">
     <div style="aspect-ratio:7/5; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/hoods/harlem-coownership.png" alt="Harlem Co-Ownership" loading="lazy" style="display:block; width:100%; height:100%; object-fit:cover"></div>
     <div style="display:flex; flex-direction:column; flex:1 1 auto; padding:26px 26px 24px">
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:21px; line-height:1.3; color:#0F1729; text-wrap:pretty">Harlem Co-Ownership</div>
      <p style="font-size:15px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; flex:1 1 auto; text-wrap:pretty">Shared ownership, lower costs, and greater buying power.</p>
      <div style="display:flex; align-items:center; gap:8px; margin-top:22px; font-size:11.5px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; color:#113B5F">Explore <span style="color:#C98A2C">→</span></div>
     </div>
    </a>
   </div>
  </div>
 </section>

 <section data-screen-label="Featured listings" style="background:#fff; padding:100px 64px; border-bottom:1px solid #E0D9B8">
  <div style="max-width:1000px; margin:0 auto; text-align:center">
   <div data-reveal="">
    <div style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">On the market</div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; line-height:1.2; letter-spacing:-0.01em; color:#0F1729; margin:16px 0 0; text-wrap:pretty">Featured Harlem listings</h2>
    <p style="font-size:18px; line-height:1.8; color:#3B4C5E; margin:22px 0 0; text-wrap:pretty">In the beautiful area of Harlem reside <strong style="font-weight:700; color:#0F1729">338,411 people</strong>, where 18% are homeowners. With an average age of 39, residents are well established, with many growing families. Over the past 30 days roughly <strong style="font-weight:700; color:#0F1729">17 homes</strong> have sold at an average price of <strong style="font-weight:700; color:#0F1729">$659,263</strong>, down $49,637 from the previous period.</p>
    <div style="display:flex; justify-content:center; margin-top:34px">
     <a href="/idx/listings/harlem/" style="display:inline-flex; align-items:center; justify-content:center; background:#113B5F; color:#F9F6E6; font-size:14px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; border-radius:100px; padding:18px 40px; min-height:54px" style-hover="background:#C98A2C; color:#0F1729">View Harlem listings</a>
    </div>
   </div>
  </div>
 </section>

 <section data-screen-label="Market report" style="background:#0F1729; padding:100px 64px">
  <div style="max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center">
   <div data-reveal="">
    <div style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#C98A2C">Harlem market report</div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:40px; line-height:1.2; letter-spacing:-0.01em; color:#F9F6E6; margin:16px 0 0; text-wrap:pretty">Want the full market report for Harlem?</h2>
    <p style="font-size:17px; line-height:1.8; color:rgba(249,246,230,0.85); margin:18px 0 0; max-width:560px; text-wrap:pretty">Enter your info below for instant access to the area's latest market report, complete with sales and demographic trends, so you have everything you need to make the best decisions for your home goals.</p>
    <div style="display:flex; flex-direction:column; gap:12px; margin-top:32px; max-width:520px">
     <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px">
      <input type="text" placeholder="First name" style="background:rgba(249,246,230,0.1); border:1px solid rgba(201,138,44,0.45); border-radius:10px; padding:15px 16px; font-family:inherit; font-size:15.5px; color:#F9F6E6; min-height:52px">
      <input type="text" placeholder="Last name" style="background:rgba(249,246,230,0.1); border:1px solid rgba(201,138,44,0.45); border-radius:10px; padding:15px 16px; font-family:inherit; font-size:15.5px; color:#F9F6E6; min-height:52px">
     </div>
     <input type="email" placeholder="Email address" style="background:rgba(249,246,230,0.1); border:1px solid rgba(201,138,44,0.45); border-radius:10px; padding:15px 16px; font-family:inherit; font-size:15.5px; color:#F9F6E6; min-height:52px">
     <input type="text" placeholder="City" style="background:rgba(249,246,230,0.1); border:1px solid rgba(201,138,44,0.45); border-radius:10px; padding:15px 16px; font-family:inherit; font-size:15.5px; color:#F9F6E6; min-height:52px">
     <a href="https://calendly.com/montfort" style="display:flex; align-items:center; justify-content:center; background:#C98A2C; color:#0F1729; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; font-size:15px; padding:17px 24px; min-height:54px" style-hover="background:#F9F6E6; color:#113B5F">Submit</a>
    </div>
   </div>
   <div data-reveal="" style="position:relative; border-radius:16px; overflow:hidden; aspect-ratio:4/3; background:#0B1220; border:1px solid rgba(201,138,44,0.4); box-shadow:0 30px 70px rgba(0,0,0,0.4)">
    <img src="/redesign-assets/hoods/harlem.png" alt="Harlem market" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.5; display:block">
    <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; gap:8px; background:linear-gradient(180deg, rgba(15,23,41,0.3), rgba(15,23,41,0.65))">
     <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:34px; letter-spacing:-0.01em; color:#F9F6E6">Harlem</div>
     <div style="font-size:12px; font-weight:700; letter-spacing:0.22em; text-transform:uppercase; color:#C98A2C">Market Report</div>
    </div>
   </div>
  </div>
 </section>

 <section data-screen-label="Schools" style="background:#F9F6E6; padding:90px 64px; border-bottom:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; gap:40px; flex-wrap:wrap">
   <div data-reveal="">
    <div style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">For families</div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:38px; line-height:1.2; letter-spacing:-0.01em; color:#0F1729; margin:14px 0 0; text-wrap:pretty">Schools in the area</h2>
    <p style="font-size:16px; line-height:1.7; color:#3B4C5E; margin:12px 0 0; max-width:520px">Explore preschools, elementary, middle, and high schools near Harlem, complete with ratings and contact info.</p>
    <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:22px">
     <span style="font-size:12.5px; font-weight:700; letter-spacing:0.04em; color:#113B5F; background:#F5EECB; border:1px solid #E0D9B8; border-radius:100px; padding:10px 18px">Preschool</span><span style="font-size:12.5px; font-weight:700; letter-spacing:0.04em; color:#113B5F; background:#F5EECB; border:1px solid #E0D9B8; border-radius:100px; padding:10px 18px">Elementary</span><span style="font-size:12.5px; font-weight:700; letter-spacing:0.04em; color:#113B5F; background:#F5EECB; border:1px solid #E0D9B8; border-radius:100px; padding:10px 18px">Middle school</span><span style="font-size:12.5px; font-weight:700; letter-spacing:0.04em; color:#113B5F; background:#F5EECB; border:1px solid #E0D9B8; border-radius:100px; padding:10px 18px">High school</span>
    </div>
   </div>
   <a data-reveal="" href="/harlem/#top-schools" style="flex:0 0 auto; display:inline-flex; align-items:center; justify-content:center; border:2px solid #113B5F; color:#113B5F; font-size:14px; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; border-radius:100px; padding:16px 32px; min-height:54px" style-hover="background:#113B5F; color:#F9F6E6">Search schools</a>
  </div>
 </section>

 <section data-screen-label="Around the area" style="background:#F5EECB; padding:110px 64px; border-bottom:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto">
   <div data-reveal="" style="display:flex; align-items:flex-end; justify-content:space-between; gap:40px; flex-wrap:wrap">
    <div style="max-width:640px">
     <div style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">Around the area</div>
     <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; line-height:1.2; letter-spacing:-0.01em; color:#0F1729; margin:14px 0 0; text-wrap:pretty">Top-rated spots in &amp; near Harlem</h2>
     <p style="font-size:16px; line-height:1.7; color:#3B4C5E; margin:12px 0 0">Browse the top-rated businesses Harlem has to offer, pulled from Yelp.</p>
    </div>
    <div style="display:flex; align-items:center; gap:12px; flex:0 0 auto">
     <button id="area-prev" aria-label="Previous" style="width:52px; height:52px; border-radius:100px; border:1px solid #C98A2C; background:#F9F6E6; color:#113B5F; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .25s ease, color .25s ease" style-hover="background:#113B5F; color:#F9F6E6"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
     <button id="area-next" aria-label="Next" style="width:52px; height:52px; border-radius:100px; border:1px solid #C98A2C; background:#F9F6E6; color:#113B5F; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background .25s ease, color .25s ease" style-hover="background:#113B5F; color:#F9F6E6"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
    </div>
   </div>
   <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:26px"><button type="button" class="area-chip" data-cat="dine" style="font-size:12.5px; font-weight:700; letter-spacing:0.04em; border-radius:100px; padding:9px 20px; cursor:pointer; transition:background .2s ease, color .2s ease, border-color .2s ease; color:#3B4C5E; background:#F9F6E6; border:1px solid #E0D9B8;">Dine</button><button type="button" class="area-chip" data-cat="shop" style="font-size:12.5px; font-weight:700; letter-spacing:0.04em; border-radius:100px; padding:9px 20px; cursor:pointer; transition:background .2s ease, color .2s ease, border-color .2s ease; color:#0F1729; background:#C98A2C; border:1px solid #C98A2C;">Shop</button></div>
   <div id="area-track-shop" class="area-track no-sb" style="display:flex; gap:22px; margin-top:34px; overflow-x:auto; scroll-snap-type:x mandatory; scroll-behavior:smooth; padding:4px">
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/tj-maxx-columbus-village" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:#0B1220; box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <img src="https://s3-media0.fl.yelpcdn.com/bphoto/mkNZJbYk0NkpVlJztaob4Q/l.jpg" alt="TJ Maxx" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
       <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,23,41,0) 40%, rgba(15,23,41,0.9) 100%)"></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:16px 18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:15px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">TJ Maxx</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:8px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:60.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">78 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/tj-maxx-columbus-village" data-name="TJ Maxx" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/ridge-hill-yonkers" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:#0B1220; box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <img src="https://s3-media0.fl.yelpcdn.com/bphoto/nfTVuNBiQcK6y51LjpkjHQ/l.jpg" alt="Ridge Hill" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
       <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,23,41,0) 40%, rgba(15,23,41,0.9) 100%)"></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:16px 18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:15px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Ridge Hill</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:8px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:50.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">224 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/ridge-hill-yonkers" data-name="Ridge Hill" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/unique-boutique-third-avenue-new-york" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:#0B1220; box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <img src="https://s3-media0.fl.yelpcdn.com/bphoto/TWcqcVMgkWermK6tTvGyBQ/l.jpg" alt="Unique Boutique Third Avenue" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
       <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,23,41,0) 40%, rgba(15,23,41,0.9) 100%)"></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:16px 18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:15px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Unique Boutique Third Avenue</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:8px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:90.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">44 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/unique-boutique-third-avenue-new-york" data-name="Unique Boutique Third Avenue" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/the-westchester-white-plains" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:#0B1220; box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <img src="https://s3-media0.fl.yelpcdn.com/bphoto/J6okgYAWaGyqQX2Am813eQ/l.jpg" alt="The Westchester" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
       <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,23,41,0) 40%, rgba(15,23,41,0.9) 100%)"></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:16px 18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:15px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">The Westchester</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:8px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:70.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">192 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/the-westchester-white-plains" data-name="The Westchester" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/chelsea-flea-market-new-york-2" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:#0B1220; box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <img src="https://s3-media0.fl.yelpcdn.com/bphoto/F784pclJAsG96PxQoDgs9Q/l.jpg" alt="Chelsea Flea Market" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
       <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,23,41,0) 40%, rgba(15,23,41,0.9) 100%)"></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:16px 18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:15px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Chelsea Flea Market</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:8px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:60.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">55 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/chelsea-flea-market-new-york-2" data-name="Chelsea Flea Market" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/homegoods-new-york-2" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:#0B1220; box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <img src="https://s3-media0.fl.yelpcdn.com/bphoto/XzK9nvaCUoiGGKW0BIKrgg/l.jpg" alt="HomeGoods" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
       <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,23,41,0) 40%, rgba(15,23,41,0.9) 100%)"></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:16px 18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:15px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">HomeGoods</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:8px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:70.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">111 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/homegoods-new-york-2" data-name="HomeGoods" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/pinstripe-collectible-bronx" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:#0B1220; box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <img src="https://s3-media0.fl.yelpcdn.com/bphoto/DRO77kIGK-x47UxqyFDIkQ/l.jpg" alt="Pinstripe Collectible" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
       <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,23,41,0) 40%, rgba(15,23,41,0.9) 100%)"></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:16px 18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:15px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Pinstripe Collectible</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:8px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:100.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">4 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/pinstripe-collectible-bronx" data-name="Pinstripe Collectible" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/city-place-edgewater" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:#0B1220; box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <img src="https://s3-media0.fl.yelpcdn.com/bphoto/YjzB1-Ph-dcSdGCtRD4siQ/l.jpg" alt="City Place" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
       <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,23,41,0) 40%, rgba(15,23,41,0.9) 100%)"></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:16px 18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:15px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">City Place</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:8px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:80.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">10 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/city-place-edgewater" data-name="City Place" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/eglance-bookstore-flushing" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:#0B1220; box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <img src="https://s3-media0.fl.yelpcdn.com/bphoto/DBkjvkItdfi84gObNnatxg/l.jpg" alt="Eglance Bookstore" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
       <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,23,41,0) 40%, rgba(15,23,41,0.9) 100%)"></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:16px 18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:15px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Eglance Bookstore</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:8px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:90.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">10 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/eglance-bookstore-flushing" data-name="Eglance Bookstore" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/pier-village-long-branch" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:#0B1220; box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <img src="https://s3-media0.fl.yelpcdn.com/bphoto/E5cGGCi9mmmVVChTT8ggGw/l.jpg" alt="Pier Village" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
       <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(15,23,41,0) 40%, rgba(15,23,41,0.9) 100%)"></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:16px 18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:15px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Pier Village</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:8px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:60.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">82 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/pier-village-long-branch" data-name="Pier Village" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
   </div>
   <div id="area-track-dine" class="area-track no-sb" style="display:none; gap:22px; margin-top:34px; overflow-x:auto; scroll-snap-type:x mandatory; scroll-behavior:smooth; padding:4px">
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/greedy-pot-new-york" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:linear-gradient(135deg,#113B5F 0%,#0B1220 100%); box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <div style="position:absolute; top:16px; right:18px; color:rgba(201,138,44,0.85)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v4M9.5 3v4M4.5 3v4a2 2 0 0 0 2 2M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Greedy Pot</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:10px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:90.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">79 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/greedy-pot-new-york" data-name="Greedy Pot" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/indomable-coffee-new-york-2" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:linear-gradient(135deg,#113B5F 0%,#0B1220 100%); box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <div style="position:absolute; top:16px; right:18px; color:rgba(201,138,44,0.85)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v4M9.5 3v4M4.5 3v4a2 2 0 0 0 2 2M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Indomable Coffee</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:10px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:100.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">40 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/indomable-coffee-new-york-2" data-name="Indomable Coffee" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/lechonera-la-isla-new-york-2" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:linear-gradient(135deg,#113B5F 0%,#0B1220 100%); box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <div style="position:absolute; top:16px; right:18px; color:rgba(201,138,44,0.85)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v4M9.5 3v4M4.5 3v4a2 2 0 0 0 2 2M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Lechonera La Isla</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:10px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:90.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">125 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/lechonera-la-isla-new-york-2" data-name="Lechonera La Isla" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/harlemite-peruvian-cuisine-new-york-2" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:linear-gradient(135deg,#113B5F 0%,#0B1220 100%); box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <div style="position:absolute; top:16px; right:18px; color:rgba(201,138,44,0.85)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v4M9.5 3v4M4.5 3v4a2 2 0 0 0 2 2M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Harlemite Peruvian Cuisine</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:10px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:90.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">161 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/harlemite-peruvian-cuisine-new-york-2" data-name="Harlemite Peruvian Cuisine" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/piccola-cucina-uptown-new-york" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:linear-gradient(135deg,#113B5F 0%,#0B1220 100%); box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <div style="position:absolute; top:16px; right:18px; color:rgba(201,138,44,0.85)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v4M9.5 3v4M4.5 3v4a2 2 0 0 0 2 2M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Piccola Cucina Uptown</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:10px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:90.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">628 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/piccola-cucina-uptown-new-york" data-name="Piccola Cucina Uptown" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/maisonetta-bronx" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:linear-gradient(135deg,#113B5F 0%,#0B1220 100%); box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <div style="position:absolute; top:16px; right:18px; color:rgba(201,138,44,0.85)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v4M9.5 3v4M4.5 3v4a2 2 0 0 0 2 2M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Maisonetta</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:10px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:90.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">111 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/maisonetta-bronx" data-name="Maisonetta" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/cocotazo-new-york" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:linear-gradient(135deg,#113B5F 0%,#0B1220 100%); box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <div style="position:absolute; top:16px; right:18px; color:rgba(201,138,44,0.85)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v4M9.5 3v4M4.5 3v4a2 2 0 0 0 2 2M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Cocotazo</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:10px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:90.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">92 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/cocotazo-new-york" data-name="Cocotazo" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/el-patio-de-fela-new-york" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:linear-gradient(135deg,#113B5F 0%,#0B1220 100%); box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <div style="position:absolute; top:16px; right:18px; color:rgba(201,138,44,0.85)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v4M9.5 3v4M4.5 3v4a2 2 0 0 0 2 2M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">El Patio de Fela</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:10px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:90.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">17 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/el-patio-de-fela-new-york" data-name="El Patio de Fela" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/nobody-told-me-new-york" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:linear-gradient(135deg,#113B5F 0%,#0B1220 100%); box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <div style="position:absolute; top:16px; right:18px; color:rgba(201,138,44,0.85)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v4M9.5 3v4M4.5 3v4a2 2 0 0 0 2 2M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">Nobody Told Me</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:10px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:90.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">311 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/nobody-told-me-new-york" data-name="Nobody Told Me" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
     </div>
     <div style="scroll-snap-align:start; flex:0 0 300px; display:flex; flex-direction:column">
      <a href="https://www.yelp.com/biz/the-eighty-six-new-york" target="_blank" rel="noopener nofollow" style="position:relative; display:block; aspect-ratio:4/3; border-radius:16px; overflow:hidden; background:linear-gradient(135deg,#113B5F 0%,#0B1220 100%); box-shadow:0 20px 44px rgba(0,0,0,0.35)">
       <div style="position:absolute; top:16px; right:18px; color:rgba(201,138,44,0.85)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M7 3v7a2 2 0 0 0 2 2v9M7 3v4M9.5 3v4M4.5 3v4a2 2 0 0 0 2 2M17 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
       <div style="position:absolute; left:0; right:0; bottom:0; padding:18px">
        <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:16px; letter-spacing:0.03em; text-transform:uppercase; color:#fff; line-height:1.25; text-wrap:pretty">The Eighty Six</div>
        <div style="display:flex; align-items:center; gap:9px; margin-top:10px"><span style="position:relative; display:inline-block; color:rgba(255,255,255,0.35); font-size:15px; letter-spacing:2px; line-height:1">★★★★★<span style="position:absolute; left:0; top:0; overflow:hidden; white-space:nowrap; color:#F5A623; width:100.0%">★★★★★</span></span><span style="font-size:12.5px; font-weight:700; color:rgba(255,255,255,0.9)">24 reviews</span></div>
       </div>
      </a><button type="button" class="area-share" data-url="https://www.yelp.com/biz/the-eighty-six-new-york" data-name="The Eighty Six" style="margin-top:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; background:transparent; border:1px solid #E0D9B8; color:#113B5F; font-size:11px; font-weight:800; letter-spacing:0.14em; text-transform:uppercase; border-radius:100px; padding:11px 16px; cursor:pointer; transition:background .2s ease, color .2s ease" style-hover="background:#113B5F; color:#F9F6E6; border-color:#113B5F"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3v12M12 3l-4 4M12 3l4 4M5 12v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>Share</button>
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

export default function Harlem() {
  useStyleHover();
  return (
    <>
      <Seo title={TITLE} metas={METAS} links={LINKS} jsonLd={JSON_LD} />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}
