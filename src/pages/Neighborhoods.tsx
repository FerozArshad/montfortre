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

const HTML = `<style>/* latin-ext */
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("28e47ed6-a0aa-421c-b883-15ab64bc3f18") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("e1f75b36-4702-4d40-aef2-3ff4c92e5a5d") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("28e47ed6-a0aa-421c-b883-15ab64bc3f18") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("e1f75b36-4702-4d40-aef2-3ff4c92e5a5d") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("28e47ed6-a0aa-421c-b883-15ab64bc3f18") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("e1f75b36-4702-4d40-aef2-3ff4c92e5a5d") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("bb98095e-e754-46b5-a1b1-bc44d59f9f20") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("92695c0e-caf7-4c52-bdc3-f12161af4b2f") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("66c1fa1b-128c-4f3f-a112-cbad724db48c") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("bb98095e-e754-46b5-a1b1-bc44d59f9f20") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("92695c0e-caf7-4c52-bdc3-f12161af4b2f") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("66c1fa1b-128c-4f3f-a112-cbad724db48c") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("bb98095e-e754-46b5-a1b1-bc44d59f9f20") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("92695c0e-caf7-4c52-bdc3-f12161af4b2f") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("66c1fa1b-128c-4f3f-a112-cbad724db48c") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("bb98095e-e754-46b5-a1b1-bc44d59f9f20") format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("92695c0e-caf7-4c52-bdc3-f12161af4b2f") format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("66c1fa1b-128c-4f3f-a112-cbad724db48c") format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

 @media (max-width:1024px) {
  [style*="px 64px"] { padding-left:32px !important; padding-right:32px !important; }
  [style*="grid-template-columns:1.05fr 0.95fr"], [style*="grid-template-columns:0.95fr 1.05fr"],
  [style*="grid-template-columns:1.02fr 0.98fr"], [style*="grid-template-columns:0.85fr 1.15fr"],
  [style*="grid-template-columns:1.2fr 1fr 0.9fr auto"] { grid-template-columns:1fr !important; gap:40px !important; }
  [style*="grid-template-columns:repeat(3,minmax(0,1fr))"],
  [style*="grid-template-columns:1fr 1fr 1fr"] { grid-template-columns:repeat(2,minmax(0,1fr)) !important; }
  h1[style*="font-size:62px"] { font-size:44px !important; }
  h2[style*="font-size:44px"] { font-size:34px !important; }
  h2[style*="font-size:36px"] { font-size:29px !important; }
 }
 @media (max-width:768px) {
  [style*="px 64px"] { padding-left:20px !important; padding-right:20px !important; }
  [style*="grid-template-columns:1fr 1fr"], [style*="grid-template-columns:repeat(2,minmax(0,1fr))"],
  [style*="grid-template-columns:repeat(3,minmax(0,1fr))"], [style*="grid-template-columns:1fr 1fr 1fr"] { grid-template-columns:1fr !important; gap:24px !important; }
  h1[style*="font-size:62px"] { font-size:32px !important; }
  h2[style*="font-size:44px"] { font-size:28px !important; }
  h2[style*="font-size:36px"] { font-size:25px !important; }
  [style*="font-size:19px"] { font-size:16.5px !important; }
 }
 @media (max-width:480px) {
  h1[style*="font-size:62px"] { font-size:27px !important; }
 }
</style>
<style>
 body { margin:0; background:#F9F6E6; font-family:'DM Sans',system-ui,sans-serif; color:#0F1729; -webkit-font-smoothing:antialiased; }
 * { box-sizing:border-box; }
 a { color:#113B5F; text-decoration:none; }
 a:hover { color:#C98A2C; }
 input::placeholder, textarea::placeholder { color: rgba(249,246,230,0.62); }
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
 .hood-card { transition:transform .5s cubic-bezier(0.22,0.61,0.36,1), box-shadow .5s ease; }
 .hood-card:hover { transform:translateY(-4px); box-shadow:0 34px 70px rgba(17,59,95,0.22); }
 .hood-card:hover img { transform:scale(1.05); }
 .pt-row { transition:background .22s ease, padding-left .22s ease; }
 .pt-row:hover { background:rgba(201,138,44,0.1); padding-left:18px; }
 .pt-row:hover .pt-arrow { opacity:1; transform:translateX(0); }
 .pt-arrow { opacity:0; transform:translateX(-6px); transition:opacity .22s ease, transform .22s ease; }
</style>


<div style="width:100%; max-width:100%; background:#F9F6E6; overflow-x:hidden">

 <header style="position:sticky; top:0; z-index:90; background:#fff; box-shadow:0 1px 0 rgba(18,16,14,0.1)">
  <div style="max-width:1440px; margin:0 auto; padding:26px 64px; display:flex; align-items:center; gap:40px">
   <a href="/" style="display:flex; align-items:center; padding-right:32px; border-right:1px solid rgba(201,138,44,0.5)">
    <div role="img" aria-label="Montfort Real Estate" style="height:52px; aspect-ratio:3813/2662; background:#113B5F; -webkit-mask:url(&quot;96e47300-5509-46bc-8c4a-89c3dc587ebf&quot;) center/contain no-repeat; mask:url(&quot;96e47300-5509-46bc-8c4a-89c3dc587ebf&quot;) center/contain no-repeat"></div>
   </a>
   <nav style="display:flex; align-items:center; gap:30px; margin-left:auto; font-size:13px; font-weight:700; letter-spacing:0.11em; text-transform:uppercase">
    <div class="mnav-item" style="position:relative">
     <a href="/services/" class="mnav-top" style="display:flex; align-items:center; gap:7px; color:#0F1729; padding:8px 0">Services
      <svg class="mnav-chev" width="11" height="11" sc-camel-view-box="0 0 12 12" fill="none" style="display:block"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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
     <a href="/neighborhoods/" class="mnav-top" style="display:flex; align-items:center; gap:7px; color:#C98A2C; padding:8px 0">Neighborhoods
      <svg class="mnav-chev" width="11" height="11" sc-camel-view-box="0 0 12 12" fill="none" style="display:block"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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
      <a href="/neighborhoods/" class="mnav-link" style="grid-column:1 / -1; padding:15px 22px; margin-top:6px; border-top:1px solid #EAE1BE; color:#113B5F; font-size:11.5px; font-weight:800; letter-spacing:0.14em; display:flex; align-items:center; gap:9px">View all neighborhoods <svg class="mnav-arrow" width="16" height="12" sc-camel-view-box="0 0 16 12" fill="none" style="display:block"><path d="M1 6h13M9.5 1.5L14 6l-4.5 4.5" stroke="#C98A2C" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
     </div>
    </div>
    <a href="/success-stories/" style="color:#0F1729; padding:8px 0">Success Stories</a>
    <a href="/about-us/" style="color:#0F1729; padding:8px 0">About</a>
    <div class="mnav-item" style="position:relative">
     <a href="/blog/" class="mnav-top" style="display:flex; align-items:center; gap:7px; color:#0F1729; padding:8px 0">Resources
      <svg class="mnav-chev" width="11" height="11" sc-camel-view-box="0 0 12 12" fill="none" style="display:block"><path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>
     </a>
     <div class="mnav-drop" style="position:absolute; top:calc(100% + 18px); left:-24px; width:240px; background:#fff; border:1px solid #EAE1BE; border-top:3px solid #C98A2C; box-shadow:0 30px 70px rgba(17,59,95,0.22); border-radius:16px; padding:14px; display:flex; flex-direction:column; gap:2px">
      <a href="/about-us/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">About Us</a>
      <a href="/stanley-montfort/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Stanley Montfort</a>
      <a href="/contact/" class="mnav-link" style="padding:15px 22px; color:#0F1729; font-size:12.5px; letter-spacing:0.09em">Contact</a>
     </div>
    </div>
   </nav>
   <a href="tel:+1-646-970-1078" style="display:flex; align-items:center; gap:12px; text-decoration:none; color:#0F1729; transition:color 0.2s ease" style-hover="color:#C98A2C">
    <svg width="22" height="22" sc-camel-view-box="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:0 0 auto"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    <span style="display:flex; flex-direction:column; align-items:center; line-height:1.15">
     <span style="font-family:'Space Grotesk',system-ui,sans-serif; font-size:22px; font-weight:700; letter-spacing:-0.01em">(646) 970-1078</span>
     <span style="font-size:11px; font-weight:700; letter-spacing:0.14em; text-transform:uppercase; color:#3B4C5E; margin-top:2px">Mon-Sat 8AM-7PM</span>
    </span>
   </a>
  </div>
 </header>

 <section data-screen-label="Neighborhoods hero" style="position:relative; background:#F5EECB; border-bottom:1px solid #E0D9B8; overflow:hidden; padding:80px 64px 90px">
  <div style="position:absolute; top:-150px; right:-160px; width:560px; height:560px; border-radius:50%; border:1px solid rgba(201,138,44,0.2)"></div>
  <div style="position:relative; z-index:2; max-width:1440px; margin:0 auto; display:grid; grid-template-columns:1.02fr 0.98fr; gap:72px; align-items:center">
   <div data-reveal="">
    <div style="display:inline-flex; align-items:center; gap:10px; font-size:11px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#8A7B4E"><a href="/" style="color:#8A7B4E">Home</a> <span style="opacity:.5">/</span> <span style="color:#C98A2C">Neighborhoods</span></div>
    <h1 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:62px; line-height:1.04; letter-spacing:-0.02em; color:#0F1729; margin:18px 0 0; text-wrap:pretty">NYC Neighborhoods</h1>
    <p style="font-size:19px; line-height:1.7; color:#3B4C5E; margin:22px 0 0; max-width:560px; text-wrap:pretty">Expert local insight for buyers, sellers and investors. We’ll help you find the <strong style="font-weight:700; color:#0F1729">right NYC neighborhood</strong> based on your lifestyle, budget and long-term goals — so you can buy with confidence and avoid costly mistakes.</p>
    <div style="display:flex; flex-wrap:wrap; gap:14px; margin-top:34px">
     <a href="https://calendly.com/montfort" style="display:inline-flex; align-items:center; justify-content:center; background:#113B5F; color:#F9F6E6; font-size:15px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; padding:18px 34px; min-height:56px" style-hover="background:#C98A2C; color:#0F1729">Book Now</a>
     <a href="tel:646-970-1078" style="display:inline-flex; align-items:center; justify-content:center; border:2px solid #113B5F; color:#113B5F; font-size:15px; font-weight:800; letter-spacing:0.03em; border-radius:100px; padding:16px 30px; min-height:56px" style-hover="background:#113B5F; color:#F9F6E6">(646) 970-1078</a>
    </div>
    <div style="margin-top:38px; padding-top:26px; border-top:1px solid #D9CFA6">
     <div style="font-size:11.5px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; color:#8A7B4E">Explore by borough</div>
     <div style="display:flex; flex-wrap:wrap; gap:14px 32px; margin-top:16px">
      <a href="#manhattan" style="font-size:15.5px; font-weight:600; color:#0F1729" style-hover="color:#C98A2C">Manhattan · 4 neighborhoods</a><a href="#brooklyn" style="font-size:15.5px; font-weight:600; color:#0F1729" style-hover="color:#C98A2C">Brooklyn · 7 neighborhoods</a>
     </div>
    </div>
   </div>
   <div data-reveal="" style="position:relative">
    <div style="position:relative; border-radius:16px; overflow:hidden; aspect-ratio:5/4; background:#E0D9B8; border:6px solid #FFFFFF; box-shadow:0 40px 90px rgba(17,59,95,0.28)">
     <img src="/redesign-assets/nbhd/d86879d1.jpg" alt="New York City skyline from Brooklyn" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block">
    </div>
    <div style="position:absolute; right:-14px; bottom:-22px; display:inline-flex; align-items:center; gap:18px; background:#FFFFFF; border:1px solid rgba(201,138,44,0.55); border-radius:16px; box-shadow:0 22px 48px rgba(17,59,95,0.28); padding:18px 26px; white-space:nowrap">
     <svg width="50" height="50" sc-camel-view-box="0 0 48 48" style="flex:0 0 auto; display:block" role="img" aria-label="Google"><path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 2-1.6 5-4.5 7l-.1.3 6.5 5 .5.1c4.2-3.8 6.6-9.5 6.6-15.7"></path><path fill="#34A853" d="M24 46c5.9 0 10.9-1.9 14.5-5.3l-6.9-5.4c-1.8 1.3-4.3 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-.3.1-6.7 5.2-.1.3C8 41.6 15.4 46 24 46"></path><path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4v-.3l-6.8-5.3-.2.1A22 22 0 0 0 2 24c0 3.5.9 6.9 2.5 9.9z"></path><path fill="#EA4335" d="M24 10.5c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4.3 29.9 2 24 2 15.4 2 8 6.4 4.5 14.1l7 5.4c1.8-5.3 6.7-9 12.5-9"></path></svg>
     <div style="display:flex; flex-direction:column; gap:4px">
      <span style="font-size:19px; font-weight:700; line-height:1; letter-spacing:-0.01em; color:#0F1729">Google Rating</span>
      <div style="display:flex; align-items:center; gap:9px"><span style="font-size:23px; font-weight:700; line-height:1; color:#C98A2C">5.0</span><span style="color:#F5A623; font-size:19px; letter-spacing:0.08em; line-height:1">★★★★★</span></div>
      <span style="font-size:14px; line-height:1.3; color:#0F1729">Over <strong style="font-weight:700">57 Reviews</strong></span>
     </div>
    </div>
   </div>
  </div>
 </section>

 <section data-screen-label="Promises" style="position:relative; background:#0F1729; padding:52px 64px 56px; overflow:hidden">
  <div style="position:absolute; top:-220px; left:50%; transform:translateX(-50%); width:900px; height:900px; border-radius:50%; border:1px solid rgba(201,138,44,0.13)"></div>
  <div style="position:relative; z-index:2; max-width:1440px; margin:0 auto">
   <div style="display:flex; align-items:center; justify-content:center; gap:16px">
    <span style="width:40px; height:1px; background:rgba(201,138,44,0.6); display:block"></span>
    <span style="font-size:11.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#C98A2C">What working with us means</span>
    <span style="width:40px; height:1px; background:rgba(201,138,44,0.6); display:block"></span>
   </div>
   <div style="display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:0; margin-top:34px">
    <div data-reveal="" style="padding:0 48px 0 0; border-right:1px solid rgba(201,138,44,0.24)">
     <div style="display:flex; align-items:center; gap:18px">
      <span style="flex:0 0 auto; width:54px; height:54px; border-radius:100px; border:1px solid rgba(201,138,44,0.55); background:rgba(201,138,44,0.12); display:flex; align-items:center; justify-content:center">
       <svg width="24" height="24" sc-camel-view-box="0 0 24 24" fill="none" stroke="#C98A2C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="display:block"><path d="M20 6L9 17l-5-5"></path></svg>
      </span>
      <span style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.2; letter-spacing:0.06em; text-transform:uppercase; color:#F9F6E6">Smooth<br>Transaction</span>
     </div>
     <p style="font-size:16.5px; line-height:1.7; color:rgba(249,246,230,0.76); margin:16px 0 0; text-wrap:pretty">With limited risk throughout the buying process.</p>
    </div>
    <div data-reveal="" style="padding:0 48px; border-right:1px solid rgba(201,138,44,0.24)">
     <div style="display:flex; align-items:center; gap:18px">
      <span style="flex:0 0 auto; width:54px; height:54px; border-radius:100px; border:1px solid rgba(201,138,44,0.55); background:rgba(201,138,44,0.12); display:flex; align-items:center; justify-content:center">
       <svg width="24" height="24" sc-camel-view-box="0 0 24 24" fill="none" stroke="#C98A2C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="display:block"><path d="M20 6L9 17l-5-5"></path></svg>
      </span>
      <span style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.2; letter-spacing:0.06em; text-transform:uppercase; color:#F9F6E6">No<br>Pressure</span>
     </div>
     <p style="font-size:16.5px; line-height:1.7; color:rgba(249,246,230,0.76); margin:16px 0 0; text-wrap:pretty">No pressure to overpay or purchase within a specific timeframe.</p>
    </div>
    <div data-reveal="" style="padding:0 0 0 48px">
     <div style="display:flex; align-items:center; gap:18px">
      <span style="flex:0 0 auto; width:54px; height:54px; border-radius:100px; border:1px solid rgba(201,138,44,0.55); background:rgba(201,138,44,0.12); display:flex; align-items:center; justify-content:center">
       <svg width="24" height="24" sc-camel-view-box="0 0 24 24" fill="none" stroke="#C98A2C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="display:block"><path d="M20 6L9 17l-5-5"></path></svg>
      </span>
      <span style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; line-height:1.2; letter-spacing:0.06em; text-transform:uppercase; color:#F9F6E6">Ongoing<br>Support</span>
     </div>
     <p style="font-size:16.5px; line-height:1.7; color:rgba(249,246,230,0.76); margin:16px 0 0; text-wrap:pretty">A dedicated team that remains available even after the transaction is complete.</p>
    </div>
   </div>
  </div>
 </section>

 <section data-screen-label="Intro" style="background:#F9F6E6; padding:96px 64px; border-bottom:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto; display:grid; grid-template-columns:0.85fr 1.15fr; gap:80px; align-items:start">
   <div data-reveal="">
    <div style="display:flex; align-items:center; gap:14px"><span style="width:34px; height:1px; background:#C98A2C; display:block"></span><span style="font-size:11.5px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#3B4C5E">Neighborhood guides</span></div>
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:44px; line-height:1.16; letter-spacing:-0.014em; color:#0F1729; margin:18px 0 0; text-wrap:pretty">Explore NYC Neighborhoods with Confidence</h2>
   </div>
   <div data-reveal="">
    <p style="font-size:18px; line-height:1.85; color:#3B4C5E; margin:0; text-wrap:pretty">Finding the right neighborhood is just as important as finding the right property. Whether you’re searching for a historic Harlem brownstone, a luxury Upper East Side condo, or an investment opportunity in Brooklyn, our neighborhood guides provide local market insights, lifestyle information, pricing trends, and community highlights to help you make an informed decision.</p>
    <p style="font-size:18px; line-height:1.85; color:#3B4C5E; margin:18px 0 0; text-wrap:pretty">Browse NYC neighborhoods below, or call us at <a href="tel:646-970-1078" style="font-weight:700; color:#113B5F">1-646-970-1078</a> for personalized guidance from a local real estate expert.</p>
    <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:30px">
     <a href="#manhattan" style="display:inline-flex; align-items:center; gap:9px; background:#113B5F; color:#F9F6E6; font-size:12px; font-weight:800; letter-spacing:0.13em; text-transform:uppercase; border-radius:100px; padding:14px 24px" style-hover="background:#C98A2C; color:#0F1729">Manhattan · 4 neighborhoods</a>
     <a href="#brooklyn" style="display:inline-flex; align-items:center; gap:9px; border:1.5px solid #113B5F; color:#113B5F; font-size:12px; font-weight:800; letter-spacing:0.13em; text-transform:uppercase; border-radius:100px; padding:12.5px 24px" style-hover="background:#113B5F; color:#F9F6E6">Brooklyn · 7 neighborhoods</a>
    </div>
   </div>
  </div>
 </section>

 <section id="manhattan" data-screen-label="Manhattan" style="background:#F5EECB; padding:80px 64px 0; border-bottom:1px solid #E0D9B8">
  <div style="max-width:1440px; margin:0 auto; display:flex; align-items:baseline; gap:22px">
   <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:36px; letter-spacing:-0.045em; text-transform:uppercase; color:#0F1729; margin:0">Manhattan</h2>
   <span style="flex:1 1 auto; height:1px; background:#D9CFA6; display:block"></span>
   <span style="font-size:12px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#8A7B4E">Harlem · UWS · UES · Chelsea</span>
  </div>

  <div style="max-width:1440px; margin:0 auto; padding:64px 0 96px; display:flex; flex-direction:column; gap:72px">

   <div data-reveal="" style="display:grid; grid-template-columns:1.05fr 0.95fr; gap:64px; align-items:center">
    <div class="hood-card" style="border-radius:16px; overflow:hidden; aspect-ratio:16/11; background:#E0D9B8; border:6px solid #FFFFFF; box-shadow:0 26px 60px rgba(17,59,95,0.2)">
     <img src="/redesign-assets/nbhd/65438018.png" alt="Harlem brownstones" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)">
    </div>
    <div>
     <a href="/harlem/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:36px; line-height:1.1; letter-spacing:-0.045em; text-transform:uppercase; color:#0F1729; display:inline-block" style-hover="color:#C98A2C">Harlem Realtor</a>
     <p style="font-size:17px; line-height:1.8; color:#3B4C5E; margin:16px 0 0; max-width:520px; text-wrap:pretty">Historic architecture, world-famous culture, and one of Manhattan’s deepest brownstone markets.</p>
     <div style="display:flex; flex-direction:column; margin-top:28px; border-top:1px solid #D9CFA6">
      <a href="/harlem-brownstones/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Harlem Brownstones</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Historic architecture, timeless charm, and classic Harlem living</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/harlem-condos/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Harlem Condos</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Modern amenities, urban convenience, and vibrant Harlem living</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/harlem-sros/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Harlem SROs</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Affordable housing, investment potential, and unique opportunities</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/harlem-co-ownership/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Harlem Co-Ownership</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Shared ownership, lower costs, and greater buying power</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
     </div>
    </div>
   </div>

   <div data-reveal="" style="display:grid; grid-template-columns:0.95fr 1.05fr; gap:64px; align-items:center">
    <div>
     <a href="/upper-west-side/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:36px; line-height:1.1; letter-spacing:-0.045em; text-transform:uppercase; color:#0F1729; display:inline-block" style-hover="color:#C98A2C">Upper West Side Realtor</a>
     <p style="font-size:17px; line-height:1.8; color:#3B4C5E; margin:16px 0 0; max-width:520px; text-wrap:pretty">Pre-war grandeur between Central Park and Riverside, with townhouses, condos, and classic co-ops.</p>
     <div style="display:flex; flex-direction:column; margin-top:28px; border-top:1px solid #D9CFA6">
      <a href="/upper-west-side-townhouses/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Upper West Side Townhouses</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Elegant townhomes, historic charm, and classic Manhattan living</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/upper-west-side-condos/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Upper West Side Condos</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Modern luxury, premium amenities, and sophisticated city living</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/upper-west-side-co-ops-2/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Upper West Side Co-Ops</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Classic residences, strong communities, and timeless Manhattan appeal</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
     </div>
    </div>
    <div class="hood-card" style="border-radius:16px; overflow:hidden; aspect-ratio:16/11; background:#E0D9B8; border:6px solid #FFFFFF; box-shadow:0 26px 60px rgba(17,59,95,0.2)">
     <img src="/redesign-assets/nbhd/eadc74f3.png" alt="Upper West Side" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)">
    </div>
   </div>

   <div data-reveal="" style="display:grid; grid-template-columns:1.05fr 0.95fr; gap:64px; align-items:center">
    <div class="hood-card" style="border-radius:16px; overflow:hidden; aspect-ratio:16/11; background:#E0D9B8; border:6px solid #FFFFFF; box-shadow:0 26px 60px rgba(17,59,95,0.2)">
     <img src="/redesign-assets/nbhd/943207db.png" alt="Upper East Side" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)">
    </div>
    <div>
     <a href="/upper-east-side/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:36px; line-height:1.1; letter-spacing:-0.045em; text-transform:uppercase; color:#0F1729; display:inline-block" style-hover="color:#C98A2C">Upper East Side Realtor</a>
     <p style="font-size:17px; line-height:1.8; color:#3B4C5E; margin:16px 0 0; max-width:520px; text-wrap:pretty">Museum Mile, Carnegie Hill, and Lenox Hill — Manhattan’s most prestigious addresses.</p>
     <div style="display:flex; flex-direction:column; margin-top:28px; border-top:1px solid #D9CFA6">
      <a href="/upper-east-side-townhouses/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Upper East Side Townhouses</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Elegant townhomes, timeless charm, and prestigious Manhattan living</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/upper-east-side-condos/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Upper East Side Condos</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Luxury residences, premium amenities, and sophisticated city living</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/upper-east-side-co-ops/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Upper East Side Co-Ops</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Classic residences, refined communities, and timeless Upper East Side appeal</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
     </div>
    </div>
   </div>

   <div data-reveal="" style="display:grid; grid-template-columns:0.95fr 1.05fr; gap:64px; align-items:center">
    <div>
     <a href="/chelsea/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:36px; line-height:1.1; letter-spacing:-0.045em; text-transform:uppercase; color:#0F1729; display:inline-block" style-hover="color:#C98A2C">Chelsea Realtor</a>
     <p style="font-size:17px; line-height:1.8; color:#3B4C5E; margin:16px 0 0; max-width:520px; text-wrap:pretty">Galleries, the High Line, and a mix of landmarked townhouses and new-development condos.</p>
     <div style="display:flex; flex-direction:column; margin-top:28px; border-top:1px solid #D9CFA6">
      <a href="/chelsea-townhouses/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Chelsea Townhouses</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Historic townhomes, architectural charm, and stylish city living</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/chelsea-condos/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Chelsea Condos</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Modern luxury, premium amenities, and vibrant Manhattan living</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/chelsea-co-ops-2/" class="pt-row" style="display:flex; align-items:center; gap:18px; padding:18px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:19px; letter-spacing:-0.01em">Chelsea Co-Ops</span><span style="display:block; font-size:15px; color:#3B4C5E; margin-top:4px">Classic residences, strong communities, and timeless Chelsea appeal</span></span>
       <svg class="pt-arrow" width="20" height="14" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
     </div>
    </div>
    <div class="hood-card" style="border-radius:16px; overflow:hidden; aspect-ratio:16/11; background:#E0D9B8; border:6px solid #FFFFFF; box-shadow:0 26px 60px rgba(17,59,95,0.2)">
     <img src="/redesign-assets/nbhd/90c53c45.jpg" alt="Chelsea" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)">
    </div>
   </div>

  </div>
 </section>

 <section id="brooklyn" data-screen-label="Brooklyn" style="background:#F9F6E6; padding:80px 64px 0">
  <div style="max-width:1440px; margin:0 auto; display:flex; align-items:baseline; gap:22px">
   <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:36px; letter-spacing:-0.045em; text-transform:uppercase; color:#0F1729; margin:0">Brooklyn</h2>
   <span style="flex:1 1 auto; height:1px; background:#E0D9B8; display:block"></span>
   <span style="font-size:12px; font-weight:700; letter-spacing:0.16em; text-transform:uppercase; color:#8A7B4E">Seven neighborhoods</span>
  </div>

  <div style="max-width:1440px; margin:0 auto; padding:56px 0 40px; display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:44px">

   <div data-reveal="" class="hood-card" style="background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; display:flex; flex-direction:column">
    <div style="aspect-ratio:16/9; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/nbhd/0dd93ed5.jpg" alt="Downtown Brooklyn" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)"></div>
    <div style="padding:34px 34px 30px; display:flex; flex-direction:column; flex:1 1 auto">
     <a href="/downtown-brooklyn/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:26px; letter-spacing:-0.02em; text-transform:uppercase; color:#0F1729" style-hover="color:#C98A2C">Downtown Brooklyn Realtor</a>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">High-rise living at the borough’s transit and business core.</p>
     <div style="display:flex; flex-direction:column; margin-top:22px; border-top:1px solid #D9CFA6">
      <a href="/downtown-brooklyn-condos-2/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Downtown Brooklyn Condos</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Modern high-rises, premium amenities, and convenient city living</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/downstone-brooklyn-co-ops/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Downtown Brooklyn Co-Ops</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Established communities, great value, and classic Brooklyn living</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
     </div>
    </div>
   </div>

   <div data-reveal="" class="hood-card" style="background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; display:flex; flex-direction:column">
    <div style="aspect-ratio:16/9; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/nbhd/d86879d1.jpg" alt="Dumbo" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)"></div>
    <div style="padding:34px 34px 30px; display:flex; flex-direction:column; flex:1 1 auto">
     <a href="/dumbo/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:26px; letter-spacing:-0.02em; text-transform:uppercase; color:#0F1729" style-hover="color:#C98A2C">Dumbo Realtor</a>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">Converted warehouses, cobblestone streets, and the best skyline views in the city.</p>
     <div style="display:flex; flex-direction:column; margin-top:22px; border-top:1px solid #D9CFA6">
      <a href="/dumbo-condos/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Dumbo Condos</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Waterfront views, modern luxury, and iconic Brooklyn living</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/dumbo-co-ops-2/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Dumbo Co-Ops</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Historic character, vibrant communities, and lasting Brooklyn appeal</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
     </div>
    </div>
   </div>

   <div data-reveal="" class="hood-card" style="background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; display:flex; flex-direction:column">
    <div style="aspect-ratio:16/9; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/nbhd/745851cc.jpg" alt="Brooklyn Heights" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)"></div>
    <div style="padding:34px 34px 30px; display:flex; flex-direction:column; flex:1 1 auto">
     <a href="/brooklyn-heights/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:26px; letter-spacing:-0.02em; text-transform:uppercase; color:#0F1729" style-hover="color:#C98A2C">Brooklyn Heights Realtor</a>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">The city’s first landmarked district — the Promenade, and blocks of 19th-century townhouses.</p>
     <div style="display:flex; flex-direction:column; margin-top:22px; border-top:1px solid #D9CFA6">
      <a href="/brooklyn-heights-townhouses-2/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Brooklyn Heights Townhouses</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Historic brownstones, skyline views, and timeless Brooklyn charm</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/brooklyn-heights-condos-3/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Brooklyn Heights Condos</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Luxury residences, waterfront views, and sophisticated city living</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/brooklyn-heights-co-ops-3/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Brooklyn Heights Co-Ops</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Classic residences, strong communities, and enduring Brooklyn appeal</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
     </div>
    </div>
   </div>

   <div data-reveal="" class="hood-card" style="background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; display:flex; flex-direction:column">
    <div style="aspect-ratio:16/9; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/nbhd/66fdf193.jpg" alt="Bedford-Stuyvesant" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)"></div>
    <div style="padding:34px 34px 30px; display:flex; flex-direction:column; flex:1 1 auto">
     <a href="/bedford-stuyvesant/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:26px; letter-spacing:-0.02em; text-transform:uppercase; color:#0F1729" style-hover="color:#C98A2C">Bedford-Stuyvesant Realtor</a>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">One of the largest concentrations of intact brownstones anywhere in New York.</p>
     <div style="display:flex; flex-direction:column; margin-top:22px; border-top:1px solid #D9CFA6">
      <a href="/bedford-stuyvesant-brownstones-2/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Bedford-Stuyvesant Brownstones</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Historic brownstones, rich culture, and authentic Brooklyn living</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/bedford-stuyvesant/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Bedford-Stuyvesant Multifamily</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Two-, three-, and four-family houses with strong rental income</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
     </div>
    </div>
   </div>

   <div data-reveal="" class="hood-card" style="background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; display:flex; flex-direction:column">
    <div style="aspect-ratio:16/9; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/nbhd/f55c71f9.jpg" alt="Williamsburg" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)"></div>
    <div style="padding:34px 34px 30px; display:flex; flex-direction:column; flex:1 1 auto">
     <a href="/williamsburg/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:26px; letter-spacing:-0.02em; text-transform:uppercase; color:#0F1729" style-hover="color:#C98A2C">Williamsburg Realtor</a>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">Waterfront towers, converted lofts, and Brooklyn’s most in-demand nightlife and dining.</p>
     <div style="display:flex; flex-direction:column; margin-top:22px; border-top:1px solid #D9CFA6">
      <a href="/williamsburg/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Williamsburg Condos</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">New development, waterfront amenities, and strong resale demand</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/williamsburg/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Williamsburg Townhouses</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Row houses and conversions with rental upside</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
     </div>
    </div>
   </div>

   <div data-reveal="" class="hood-card" style="background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; display:flex; flex-direction:column">
    <div style="aspect-ratio:16/9; overflow:hidden; background:#E0D9B8"><img src="/redesign-assets/nbhd/b6c26a69.jpg" alt="Crown Heights" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)"></div>
    <div style="padding:34px 34px 30px; display:flex; flex-direction:column; flex:1 1 auto">
     <a href="/crown-heights/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:26px; letter-spacing:-0.02em; text-transform:uppercase; color:#0F1729" style-hover="color:#C98A2C">Crown Heights Realtor</a>
     <p style="font-size:16px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; text-wrap:pretty">Limestone row houses beside the Botanic Garden — still one of Brooklyn’s best values.</p>
     <div style="display:flex; flex-direction:column; margin-top:22px; border-top:1px solid #D9CFA6">
      <a href="/crown-heights/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Crown Heights Brownstones</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Limestone and brownstone row houses with original detail</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/crown-heights/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Crown Heights Multifamily</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Investment buildings with room to reposition</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
     </div>
    </div>
   </div>

   <div data-reveal="" class="hood-card" style="grid-column:1 / -1; background:#F5EECB; border:1px solid #E0D9B8; border-radius:16px; overflow:hidden; display:grid; grid-template-columns:1fr 1fr">
    <div style="overflow:hidden; background:#E0D9B8; min-height:320px"><img src="/redesign-assets/nbhd/69cc59cd.jpg" alt="Park Slope" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 1s cubic-bezier(0.22,0.61,0.36,1)"></div>
    <div style="padding:44px 44px 40px; display:flex; flex-direction:column; justify-content:center">
     <a href="/park-slope/" style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:30px; letter-spacing:-0.025em; text-transform:uppercase; color:#0F1729" style-hover="color:#C98A2C">Park Slope Realtor</a>
     <p style="font-size:16.5px; line-height:1.75; color:#3B4C5E; margin:12px 0 0; max-width:520px; text-wrap:pretty">Prospect Park at the door, celebrated schools, and some of the most sought-after row houses in Brooklyn.</p>
     <div style="display:flex; flex-direction:column; margin-top:24px; border-top:1px solid #D9CFA6; max-width:560px">
      <a href="/park-slope/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Park Slope Brownstones</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Landmarked row houses steps from Prospect Park</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
      <a href="/park-slope/" class="pt-row" style="display:flex; align-items:center; gap:16px; padding:16px 10px; border-bottom:1px solid #D9CFA6; border-radius:10px; color:#0F1729">
       <span style="flex:1 1 auto"><span style="display:block; font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:17px">Park Slope Co-Ops</span><span style="display:block; font-size:14.5px; color:#3B4C5E; margin-top:3px">Pre-war apartments with strong communities and steady value</span></span>
       <svg class="pt-arrow" width="18" height="13" sc-camel-view-box="0 0 20 14" fill="none" style="flex:0 0 auto"><path d="M1 7h16M12.5 1.5L18 7l-5.5 5.5" stroke="#C98A2C" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </a>
     </div>
    </div>
   </div>

  </div>
 </section>

 <section data-screen-label="Not sure CTA" style="background:#F9F6E6; padding:40px 64px 96px">
  <div data-reveal="" style="max-width:1440px; margin:0 auto; background:#0F1729; border-radius:16px; padding:56px 64px; display:flex; align-items:center; justify-content:space-between; gap:48px; flex-wrap:wrap">
   <div style="max-width:720px">
    <h2 style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:36px; line-height:1.2; letter-spacing:-0.02em; color:#F9F6E6; margin:0; text-wrap:pretty">Not sure which neighborhood fits?</h2>
    <p style="font-size:17.5px; line-height:1.7; color:rgba(249,246,230,0.82); margin:14px 0 0; text-wrap:pretty">Tell us your budget, commute, and long-term plan. We’ll shortlist the blocks worth your weekends — and the ones worth skipping.</p>
   </div>
   <div style="display:flex; gap:14px; flex-wrap:wrap">
    <a href="https://calendly.com/montfort" style="display:inline-flex; align-items:center; justify-content:center; background:#C98A2C; color:#0F1729; font-size:15px; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; padding:18px 34px; min-height:56px" style-hover="background:#F9F6E6; color:#113B5F">Book Now</a>
    <a href="tel:646-970-1078" style="display:inline-flex; align-items:center; justify-content:center; border:2px solid rgba(249,246,230,0.7); color:#F9F6E6; font-size:15px; font-weight:800; letter-spacing:0.03em; border-radius:100px; padding:16px 32px; min-height:56px" style-hover="background:#F9F6E6; color:#113B5F; border-color:#F9F6E6">(646) 970-1078</a>
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
     <textarea placeholder="Which neighborhoods are you considering?" rows="4" style="background:rgba(249,246,230,0.1); border:1px solid rgba(201,138,44,0.45); border-radius:10px; padding:15px 16px; font-family:inherit; font-size:15.5px; color:#F9F6E6; resize:vertical"></textarea>
     <a href="https://calendly.com/montfort" style="display:flex; align-items:center; justify-content:center; background:#C98A2C; color:#0F1729; font-weight:800; letter-spacing:0.05em; text-transform:uppercase; border-radius:100px; font-size:15px; padding:17px 24px; min-height:54px" style-hover="background:#F9F6E6; color:#113B5F">Submit</a>
    </div>
   </div>
   <div data-reveal="" style="position:relative; border-radius:16px; overflow:hidden; border:1px solid rgba(201,138,44,0.55); box-shadow:0 30px 70px rgba(11,18,32,0.4); min-height:440px; background:#0B1220">
    <iframe title="Montfort Real Estate on Google Maps" src="https://www.google.com/maps?q=8+West+126th+Street,+New+York,+NY+10027&amp;output=embed" style="position:absolute; inset:0; width:100%; height:100%; border:0; filter:grayscale(1) contrast(0.92) brightness(0.92)" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div style="position:absolute; inset:0; pointer-events:none; background:linear-gradient(120deg, rgba(17,59,95,0.34) 0%, rgba(17,59,95,0) 46%), linear-gradient(0deg, rgba(11,18,32,0.55) 0%, rgba(11,18,32,0) 34%); mix-blend-mode:multiply"></div>
    <div style="position:absolute; left:24px; right:24px; bottom:24px; background:#F9F6E6; border-radius:16px; border-top:3px solid #C98A2C; padding:24px 26px; display:flex; align-items:center; justify-content:space-between; gap:24px; box-shadow:0 20px 44px rgba(11,18,32,0.35)">
     <div>
      <div style="font-size:10.5px; font-weight:700; letter-spacing:0.2em; text-transform:uppercase; color:#C98A2C">Visit our office</div>
      <div style="font-family:'Space Grotesk',system-ui,sans-serif; font-weight:700; font-size:20px; color:#0F1729; margin-top:8px; line-height:1.3">8 West 126th Street</div>
      <div style="font-size:14.5px; color:#3B4C5E; margin-top:3px">New York, NY 10027</div>
     </div>
     <a href="https://maps.google.com/?cid=11378470238102062088" target="_blank" rel="noopener" style="flex:0 0 auto; display:inline-flex; align-items:center; gap:9px; background:#113B5F; color:#F9F6E6; font-size:12px; font-weight:800; letter-spacing:0.1em; text-transform:uppercase; border-radius:100px; padding:14px 22px" style-hover="background:#C98A2C; color:#0F1729">Directions <svg width="15" height="15" sc-camel-view-box="0 0 16 16" fill="none"><path d="M3 8h9M8 3.5L12.5 8 8 12.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
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
     <a href="https://www.facebook.com/montfortrealestate" target="_blank" rel="noopener" aria-label="Facebook" style="width:44px; height:44px; border-radius:100px; background:#C98A2C; color:#0F1729; display:flex; align-items:center; justify-content:center; transition:background .25s ease, color .25s ease" style-hover="background:#F9F6E6; color:#113B5F"><svg width="18" height="18" sc-camel-view-box="0 0 24 24" fill="currentColor"><path d="M14 9h3V5.5h-3c-2.2 0-3.8 1.7-3.8 3.9V11H7.5v3.5h2.7V22h3.6v-7.5h2.7l.5-3.5h-3.2V9.6c0-.4.3-.6.7-.6z"></path></svg></a>
     <a href="https://www.youtube.com/@montfortrealestate6984" target="_blank" rel="noopener" aria-label="YouTube" style="width:44px; height:44px; border-radius:100px; background:#C98A2C; color:#0F1729; display:flex; align-items:center; justify-content:center; transition:background .25s ease, color .25s ease" style-hover="background:#F9F6E6; color:#113B5F"><svg width="19" height="19" sc-camel-view-box="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.3-3.8.3-3.8s0-2.5-.3-3.8zM10 15V9l5.2 3z"></path></svg></a>
     <a href="https://www.instagram.com/stanleymontfort/" target="_blank" rel="noopener" aria-label="Instagram" style="width:44px; height:44px; border-radius:100px; background:#C98A2C; color:#0F1729; display:flex; align-items:center; justify-content:center; transition:background .25s ease, color .25s ease" style-hover="background:#F9F6E6; color:#113B5F"><svg width="18" height="18" sc-camel-view-box="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.9"></rect><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.9"></circle><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor"></circle></svg></a>
    </div>
    <img src="/redesign-assets/nbhd/7ed3b807.png" alt="REBNY, Real Estate Board of New York" style="height:52px; width:auto; display:block; opacity:0.9">
   </div>
  </div>
  <div style="max-width:1440px; margin:64px auto 0; padding-top:44px; border-top:1px solid rgba(249,246,230,0.14); display:grid; grid-template-columns:1fr 1fr 1fr; gap:44px; align-items:center">
   <a href="/" style="display:block; justify-self:start">
    <img src="/redesign-assets/nbhd/96e47300.png" alt="Montfort Real Estate" style="height:72px; width:auto; display:block; filter:invert(1) brightness(2.2)">
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

export default function Neighborhoods() {
  useStyleHover();
  return (
    <>
      <Seo title={TITLE} metas={METAS} links={LINKS} jsonLd={JSON_LD} />
      <div dangerouslySetInnerHTML={{ __html: HTML }} />
    </>
  );
}
