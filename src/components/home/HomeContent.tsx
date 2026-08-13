import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/home-hero.css";
import "../../styles/home-promises.css";
import "../../styles/home-hidden-cost.css";
import "../../styles/home-founder.css";
import "../../styles/home-areas.css";
import "../../styles/home-expect.css";
import "../../styles/home-plan.css";
import "../../styles/home-services.css";
import "../../styles/home-reviews.css";
import "../../styles/home-instagram.css";
import "../../styles/home-included.css";
import "../../styles/home-listings.css";
import "../../styles/home-download.css";

const HERO_HOODS = [
  ["/harlem/", "Harlem"],
  ["/upper-west-side/", "Upper West Side"],
  ["/chelsea/", "Chelsea"],
  ["/brooklyn-heights/", "Brooklyn Heights"],
  ["/williamsburg/", "Williamsburg"],
  ["/upper-east-side/", "Upper East Side"],
] as const;

const AREA_CARDS = [
  {
    href: "/harlem/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Harlem Realtor",
    w: 500,
    h: 350,
    boro: "Manhattan",
    title: "Harlem Realtor",
    blurb: "Historic brownstones, rich culture, and timeless Manhattan charm.",
  },
  {
    href: "/upper-west-side/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Upper West Side Realtor",
    w: 500,
    h: 350,
    boro: "Manhattan",
    title: "Upper West Side Realtor",
    blurb: "Elegant brownstones, cultural landmarks, and classic Manhattan living.",
  },
  {
    href: "/upper-east-side/",
    image: "/redesign-assets/hoods/upper-east-side.webp",
    alt: "Upper East Side Realtor",
    w: 500,
    h: 350,
    boro: "Manhattan",
    title: "Upper East Side Realtor",
    blurb: "Luxury residences, world-class culture, and timeless Upper Manhattan elegance.",
  },
  {
    href: "/chelsea/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "Chelsea Realtor",
    w: 1000,
    h: 700,
    boro: "Manhattan",
    title: "Chelsea Realtor",
    blurb: "Modern luxury, world-class art, and vibrant Manhattan living.",
  },
  {
    href: "/downtown-brooklyn/",
    image: "/redesign-assets/hoods/downtown-brooklyn.webp",
    alt: "Downtown Brooklyn Realtor",
    w: 1000,
    h: 700,
    boro: "Brooklyn",
    title: "Downtown Brooklyn Realtor",
    blurb: "Modern high-rises, unmatched transit access, and vibrant Brooklyn living.",
  },
  {
    href: "/dumbo/",
    image: "/redesign-assets/hoods/dumbo.webp",
    alt: "Dumbo Realtor",
    w: 1000,
    h: 700,
    boro: "Brooklyn",
    title: "Dumbo Realtor",
    blurb: "Waterfront views, luxury lofts, and iconic Brooklyn living.",
  },
  {
    href: "/brooklyn-heights/",
    image: "/redesign-assets/hoods/brooklyn-heights.webp",
    alt: "Brooklyn Heights Realtor",
    w: 1000,
    h: 700,
    boro: "Brooklyn",
    title: "Brooklyn Heights Realtor",
    blurb: "Historic brownstones, skyline views, and timeless Brooklyn charm",
  },
  {
    href: "/bedford-stuyvesant/",
    image: "/redesign-assets/hoods/bedford-stuyvesant.webp",
    alt: "Bedford stuyvesant Realtor",
    w: 1000,
    h: 700,
    boro: "Brooklyn",
    title: "Bedford stuyvesant Realtor",
    blurb: "Historic brownstones, rich culture, and authentic Brooklyn living.",
  },
  {
    href: "/williamsburg/",
    image: "/redesign-assets/hoods/williamsburg.webp",
    alt: "Williamsburg Realtor",
    w: 1000,
    h: 700,
    boro: "Brooklyn",
    title: "Williamsburg Realtor",
    blurb: "Waterfront living, creative energy, and modern Brooklyn luxury",
  },
  {
    href: "/crown-heights/",
    image: "/redesign-assets/hoods/crown-heights.webp",
    alt: "Crown Heights Realtor",
    w: 1000,
    h: 700,
    boro: "Brooklyn",
    title: "Crown Heights Realtor",
    blurb: "Historic brownstones, cultural diversity, and vibrant Brooklyn living",
  },
  {
    href: "/park-slope/",
    image: "/redesign-assets/hoods/park-slope.webp",
    alt: "Park Slope Realtor",
    w: 1000,
    h: 700,
    boro: "Brooklyn",
    title: "Park Slope Realtor",
    blurb: "Historic brownstones, tree-lined streets, and timeless Brooklyn living",
  },
] as const;

const PLAN_STEPS = [
  {
    n: "01",
    image: "/redesign-assets/plan/step1.webp",
    alt: "Realtor on a consultation call",
    title: "Schedule Free Consultation w/ Realtor",
    copy: "We'll listen to your requirements, give you an overview of the market/process and you can decide if we're a good fit",
  },
  {
    n: "02",
    image: "/redesign-assets/plan/step2.webp",
    alt: "Realtor showing a couple a home",
    title: "Realtor Will Get to Work",
    copy: "We'll curate on market and off market real estate showings for you that fit your criteria",
  },
  {
    n: "03",
    image: "/redesign-assets/plan/step3.webp",
    alt: "Couple celebrating their new home",
    title: "Enjoy your dream home",
    copy: "You'll live in your home without any worries",
  },
] as const;

const SERVICE_CARDS = [
  {
    href: "/nyc-buyers-agent-service/",
    image: "/redesign-assets/services/buyers-agent.webp",
    alt: "NYC Buyer's Agent materials on a desk",
    title: "NYC Buyer’s Agent",
    copy: "Expert representation to protect your interests, surface the right opportunities, and negotiate favorable terms in NYC’s most competitive market.",
  },
  {
    href: "/nyc-listing-agent-service/",
    image: "/redesign-assets/services/listing-agent.webp",
    alt: "NYC Listing Agent materials on a desk",
    title: "NYC Listing Agent",
    copy: "Strategic pricing, professional marketing, and skilled negotiation to maximize value across co-ops, condos, brownstones, and townhomes.",
  },
  {
    href: "/nyc-multifamily-real-estate-agent-service/",
    image: "/redesign-assets/services/multifamily.webp",
    alt: "NYC Multifamily Agent materials on a desk",
    title: "NYC Multifamily Agent",
    copy: "Guidance on 2–4 unit buildings, brownstone conversions, and value-add investments to build long-term wealth across the boroughs.",
  },
  {
    href: "/home-valuation/",
    image: "/redesign-assets/services/home-valuation.webp",
    alt: "NYC Free Home Valuation flyer and tablet",
    title: "NYC Free Home Valuation",
    copy: "Understand what your property is truly worth, beyond automated estimates, with expert, neighborhood-specific market insight.",
  },
  {
    href: "/mortgage-calculator/",
    image: "/redesign-assets/services/mortgage.webp",
    alt: "NYC Mortgage Calculator on a laptop",
    title: "NYC Mortgage Calculator",
    copy: "See your full monthly cost, maintenance, common charges, taxes, and closing costs, before you make an offer.",
  },
] as const;

const REVIEWS = [
  {
    href: "https://www.google.com/maps/contrib/107286042219082422872/reviews?hl=en",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjViSqMG3KN7oLq8R0QnIw-DaXDyjT90luYGecAIkSmU_hO3gSPc=s120-c-rp-mo",
    name: "Anika Nfr-Ka Ma’at Daniels",
    quote:
      "Stan is extremely knowledgeable and professional. He also has the utmost patience! He helped me sell my home and purchase a condo at the same time. My home had all types of special contingencies but he was able to find me a buyer and get me very close to the price I wanted. I was very specific in terms of the property that I wanted to buy and although it took some time, he was able to find me the…",
  },
  {
    href: "https://www.google.com/maps/contrib/108132066685824850224/reviews?hl=en",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjW2GJgbKFCs8CWRPaU68LmyIpJoffj2f9xx_ErBW95J1KmjMk0q=s120-c-rp-mo",
    name: "Davon Snipes",
    quote:
      "Stan has been an incredibly patient, knowledge, and professional broker. He understands the market, and has many relationships in the industry. He was thoughtful and gracious about responding to our feedback, and left no stone unturned in helping us to find the property of our dreams. And he continues to provide guidance and counsel post-closing. If you're looking for a brilliant real estate…",
  },
  {
    href: "https://www.google.com/maps/contrib/116771421068638089471/reviews?hl=en",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocJF8BS2Xi87Fcaj122YKs-p4jY3uuigUkyo_LFIR4JEbnbvbg=s120-c-rp-mo",
    name: "Perry Witmer",
    quote:
      "Stanley is amazing! No one knows the Harlem market better than him, and his deep expertise was a tremendous resource. He taught me along the way how to spot 'red flags' and talked me out of making an offer on a place that seemed amazing but had, upon his close inspection, evidence of poor workmanship and lots of cut corners. Other brokers remarked in private to me about both his expertise and his…",
  },
  {
    href: "https://www.google.com/maps/contrib/109328620676722096746/reviews?hl=en",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocJ_u11llTjoHDxUSwbwBOVjPqAEEYxXctnGw2ipJT0OmPkN0KAd=s120-c-rp-mo-ba12",
    name: "Corey A. Witmer",
    quote:
      "Stanley was the dream real estate agent we didn’t know we deserved! From the beginning he was attentive to our curiosity to help us figure out what type of property we wanted - and could afford. Throughout the process he was a calm and patient presence in our lives, offering us sincere and sage perspectives to keep us grounded while managing our expectations. Even with the ups and downs -…",
  },
  {
    href: "https://www.google.com/maps/contrib/100922205373403327263/reviews?hl=en",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjVd25nW1zHtfxUwKZuHN2Z62I2M2518k9vbRgSFDL7raRgZLhc=s120-c-rp-mo",
    name: "Seth Rabinowitz",
    quote:
      "We had a great experience working with Stanley. He taught us a lot about the specific market we were looking in, which enabled us to make a very good decision on purchase of a new home.",
  },
  {
    href: "https://www.google.com/maps/contrib/101694945511048714275/reviews?hl=en",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjX0xFjJe65Or_gH4pidKtMzlHLnwtjHpiu1DGAeEo9WZQTVlvKdzg=s120-c-rp-mo-ba12",
    name: "Angelina Darrisaw",
    quote:
      "Incredible experience. Very knowledgeable about the brownstone buying process and helped me understand the budget differences for condo vs brownstones. Walked away more informed as a result.",
  },
] as const;

const IG_POSTS = [
  {
    href: "https://www.instagram.com/p/DbZFQBTD4hS/",
    image: "/instagram/ig-1.webp",
    w: 640,
    h: 800,
    caption: "Just Listed: 904 Gates Avenue, Bedford-Stuyvesant",
    likes: "22",
    comments: "3",
  },
  {
    href: "https://www.instagram.com/p/DbWdWwVCUnb/",
    image: "/instagram/ig-2.webp",
    w: 1439,
    h: 959,
    caption: "A 4-unit Brooklyn property where the numbers really stand out",
    likes: "41",
    comments: "2",
  },
  {
    href: "https://www.instagram.com/p/DbHHdBzGiZ3/",
    image: "/instagram/ig-3.webp",
    w: 1439,
    h: 959,
    caption: "SOLD: 481 West 145th Street, last asking $2,550,000",
    likes: "70",
    comments: "11",
  },
  {
    href: "https://www.instagram.com/p/DalKzvTEWlq/",
    image: "/instagram/ig-4.webp",
    w: 720,
    h: 900,
    caption: "What if owning a brownstone cost less each month than renting?",
    likes: "65",
    comments: "9",
  },
  {
    href: "https://www.instagram.com/p/DadYwSGFTy_/",
    image: "/instagram/ig-5.webp",
    w: 720,
    h: 900,
    caption: "SOLD: 49 East 126th Street, last asking $2,250,000",
    likes: "88",
    comments: "19",
  },
  {
    href: "https://www.instagram.com/p/DaQ7iNZicGp/",
    image: "/instagram/ig-6.webp",
    w: 1080,
    h: 1350,
    caption: "How to create $2,000,000+ in equity buying a brownstone",
    likes: "67",
    comments: "5",
  },
  {
    href: "https://www.instagram.com/p/DaLXUDZkbRu/",
    image: "/instagram/ig-7.webp",
    w: 1080,
    h: 1350,
    caption: "SOLD: 265 West 139th Street, a Strivers’ Row landmark",
    likes: "169",
    comments: "16",
  },
  {
    href: "https://www.instagram.com/reel/DY0PDihu1pt/",
    image: "/instagram/ig-8.webp",
    w: 1080,
    h: 1350,
    caption: "In Contract: 49 East 126th Street, Harlem brownstone",
    likes: "58",
    comments: "10",
    reel: true,
  },
] as const;

const INCLUDED = [
  {
    image: "https://assets.agentfire3.com/uploads/templates/home-2-2/5-200xAUTO.fit.png",
    alt: "Closing Costs Savings",
    title: "Closing Costs Savings",
    copy: "We’ll assess each house to see if it qualifies to save you thousands of dollars at closing.",
  },
  {
    image: "https://assets.agentfire3.com/uploads/templates/home-2-2/4-200xAUTO.fit.png",
    alt: "Zero Cost Service",
    title: "Zero Cost Service",
    copy: "You’ll have an experienced team to rely on without any additional expenses.",
  },
  {
    image: "https://assets.agentfire3.com/uploads/templates/home-2-2/7-200xAUTO.fit.png",
    alt: "Pricing Analysis",
    title: "Pricing Analysis",
    copy: "We’ll pull historical data and conduct a pricing analysis so you never overpay for real estate.",
  },
  {
    image: "https://assets.agentfire3.com/uploads/templates/home-2-2/6-200xAUTO.fit.png",
    alt: "Off Market Properties",
    title: "Off Market Properties",
    copy: "A dedicated team regularly engages owners to find off-market opportunities that fit your needs.",
  },
] as const;

const LISTINGS = [
  {
    href: "/523-west-121st-street-2/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2026/06/1a-Living-room-700x560.fit.jpg",
    alt: "523 West 121st Street #2",
    w: 700,
    h: 467,
    price: "$799,000",
    title: "523 West 121st Street #2",
    meta: "2 beds · 1 bath",
  },
  {
    href: "/26-west-95th-street/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2026/04/26-West-95th-Street-700x560.fit.png",
    alt: "26 West 95th Street",
    w: 700,
    h: 465,
    price: "$11,995,000",
    title: "26 West 95th Street",
    meta: "1893 · 6,700 sqft · 5 stories",
  },
  {
    href: "/124-west-131st-street-2/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2025/10/1-6-700x560.fit.png",
    alt: "124 West 131st Street",
    w: 700,
    h: 472,
    price: "$3,495,000",
    title: "124 West 131st Street",
    meta: "5 beds · 4.5 baths · 4,688 sqft",
  },
  {
    href: "/14-west-121st-street/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2025/10/Listing-Photo-9h-14-West-121st-St-1-1-700x560.fit.jpg",
    alt: "14 West 121st Street",
    w: 373,
    h: 560,
    price: "$2,999,999",
    title: "14 West 121st Street",
    meta: "6 beds · 4.5 baths · 5,320 sqft",
  },
  {
    href: "/475-west-144th-street/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2026/04/475-West-144th-Street-700x560.fit.png",
    alt: "475 West 144th Street",
    w: 700,
    h: 464,
    price: "$2,249,999",
    title: "475 West 144th Street",
    meta: "1901 · 4,608 sqft · 4 stories",
  },
  {
    href: "/313-west-143rd-street-2a/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2025/10/Photo-1-Livingroom-313-West-143rd-St-2A-700x560.fit.jpg",
    alt: "313 West 143rd Street #2A",
    w: 700,
    h: 467,
    price: "$1,250,000",
    title: "313 West 143rd Street #2A",
    meta: "3 beds · 2 baths · 1,650 sqft",
  },
  {
    href: "/542-cathedral-parkway/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2024/09/1-542-Catherdral-Parkway-700x560.fit.jpg",
    alt: "542 Cathedral Parkway",
    w: 700,
    h: 467,
    price: "$4,950,000",
    title: "542 Cathedral Parkway",
    meta: "1985 · 4,100 sqft · 4 stories",
  },
  {
    href: "/544-west-148th-street/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2024/09/1-544-West-148th-Street-700x560.fit.jpg",
    alt: "544 West 148th Street",
    w: 700,
    h: 467,
    price: "$2,699,000",
    title: "544 West 148th Street",
    meta: "1910 · 3,536 sqft · 4 stories",
  },
  {
    href: "/76-west-105th-street-thn/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2024/09/1-700x560.fit.png",
    alt: "76 West 105th Street #THN",
    w: 700,
    h: 467,
    price: "$4,750,000",
    title: "76 West 105th Street #THN",
    meta: "3 beds · 3+ baths · 4,232 sqft",
  },
  {
    href: "/76-west-105th-street-ph/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2024/09/1-2-700x560.fit.jpg",
    alt: "76 West 105th Street #PH",
    w: 700,
    h: 467,
    price: "$4,450,000",
    title: "76 West 105th Street #PH",
    meta: "4 beds · 4 baths · 3,675 sqft",
  },
  {
    href: "/2040-madison-avenue-4/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2024/09/1-2040-Madison-Ave-700x560.fit.jpg",
    alt: "2040 Madison Avenue",
    w: 700,
    h: 467,
    price: "$2,250,000",
    title: "2040 Madison Avenue",
    meta: "1899 · 3,240 sqft · 4 stories",
  },
  {
    href: "/420-west-144th-street/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2024/09/1-420-W-144th-St-700x560.fit.jpg",
    alt: "420 West 144th Street",
    w: 700,
    h: 467,
    price: "$3,199,000",
    title: "420 West 144th Street",
    meta: "1920 · 3,615 sqft · 4 stories",
  },
  {
    href: "/481-west-145th-street/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2025/03/1481w145-700x560.fit.jpg",
    alt: "481 West 145th Street",
    w: 700,
    h: 467,
    price: "$2,550,000",
    title: "481 West 145th Street",
    meta: "1926 · 3,666 sqft · 4 stories",
  },
  {
    href: "/108-west-114th-street-4b/",
    image: "https://assets.agentfire3.com/uploads/sites/312/2024/09/108-West-114th-Street-4B-700x560.fit.png",
    alt: "108 West 114th Street #4B",
    w: 700,
    h: 467,
    price: "$350,000",
    title: "108 West 114th Street #4B",
    meta: "1 bed · 1 bath",
  },
] as const;

const LISTINGS_PREV_CLICK =
  "var t=document.getElementById('listings-track'); t.scrollBy({left:(-1)*Math.min(t.clientWidth,760), behavior:'smooth'}); return false;";
const LISTINGS_NEXT_CLICK =
  "var t=document.getElementById('listings-track'); t.scrollBy({left:(1)*Math.min(t.clientWidth,760), behavior:'smooth'}); return false;";

const REVIEW_PREV_CLICK =
  "var t=document.getElementById('review-track'); var w=t.clientWidth||1; var n=t.children.length; var cur=Math.round(t.scrollLeft/w); var i=((cur+(-1))%n+n)%n; t.scrollTo({left:i*w, behavior:'smooth'}); return false;";
const REVIEW_NEXT_CLICK =
  "var t=document.getElementById('review-track'); var w=t.clientWidth||1; var n=t.children.length; var cur=Math.round(t.scrollLeft/w); var i=((cur+(1))%n+n)%n; t.scrollTo({left:i*w, behavior:'smooth'}); return false;";
const REVIEW_DOT_CLICK =
  "var t=document.getElementById('review-track'); t.scrollTo({left:parseInt(this.getAttribute('data-i'))*t.clientWidth, behavior:'smooth'}); return false;";

export default function HomeContent() {
  return (
    <>
      <section className="home-hero" data-screen-label="Hero">
        <img
          className="home-hero-photo"
          src="https://assets.agentfire3.com/uploads/sites/312/2026/06/Brooklyn-Heights-Real-Estate.png"
          alt="Brooklyn Heights brownstone street"
          width="1536"
          height="1024"
        />
        <div className="home-hero-shade" />
        <div className="home-hero-shade home-hero-shade--top" />

        <div className="home-hero-inner">
          <div className="home-hero-col">
            <div className="home-hero-card">
              <div className="home-hero-eyebrow">Buyer representation at no cost to you</div>

              <h1>
                New York realtor buying assistance to <span className="home-hero-mark">avoid overpaying</span> for real
                estate
              </h1>

              <p className="home-hero-lead">
                We'll make sure you make a smart real estate purchase by saving money and avoid owning real estate with
                maintenance and violation issues.
              </p>

              <div className="home-hero-rule" />

              <div className="home-hero-actions">
                <a href="https://calendly.com/montfort" className="home-hero-book">
                  Book Now
                </a>
                <a href="tel:646-970-1078" className="home-hero-call">
                  646-970-1078
                </a>
              </div>
              <form
                className="lead-idx-form"
                {...{
                  onsubmit:
                    "event.preventDefault(); window.open('https://stanley.olridx.com/Search/'+this.searchtype.value,'_blank')",
                }}
              >
                <div className="home-hero-mls">
                  <div className="lif-dd">
                    <input type="hidden" name="searchtype" value="Sales" />
                    <button
                      type="button"
                      className="lif-btn"
                      aria-haspopup="listbox"
                      {...{
                        onclick:
                          "var l=this.parentNode.querySelector('.lif-list'); l.style.display=l.style.display==='block'?'none':'block'",
                      }}
                    >
                      <span className="lif-label">For Sale</span>
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path
                          d="M1 1.5l5 5 5-5"
                          stroke="#C98A2C"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="lif-list" role="listbox">
                      <div
                        role="option"
                        data-v="Sales"
                        className="lif-option"
                        {...{
                          onclick:
                            "var w=this.parentNode.parentNode; w.querySelector('input').value=this.getAttribute('data-v'); w.querySelector('.lif-label').textContent=this.textContent; this.parentNode.style.display='none'",
                        }}
                      >
                        For Sale
                      </div>
                      <div
                        role="option"
                        data-v="Rentals"
                        className="lif-option"
                        {...{
                          onclick:
                            "var w=this.parentNode.parentNode; w.querySelector('input').value=this.getAttribute('data-v'); w.querySelector('.lif-label').textContent=this.textContent; this.parentNode.style.display='none'",
                        }}
                      >
                        For Rent
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="home-hero-mls-go">
                    Search MLS Listings
                  </button>
                </div>
                <a href="/whats-my-home-worth/" className="home-hero-worth">
                  What&#8217;s my home worth? &#8594;
                </a>
              </form>

              <div className="home-hero-rule home-hero-rule--hoods" />

              <div className="home-hero-hoods-head">
                <span className="home-hero-hoods-label">Where we work</span>
                <a href="/neighborhoods/" className="home-hero-hoods-all">
                  All 10 neighborhoods →
                </a>
              </div>
              <div className="home-hero-marquee-wrap">
                <div className="home-hero-marquee">
                  {[...HERO_HOODS, ...HERO_HOODS].flatMap(([href, label], i) => [
                    <a key={`h-${href}-${i}`} href={href} className="home-hero-hood">
                      {label}
                    </a>,
                    <span key={`d-${href}-${i}`} className="home-hero-dot">
                      •
                    </span>,
                  ])}
                </div>
              </div>

              <a
                href="https://maps.google.com/?cid=11378470238102062088"
                target="_blank"
                rel="noopener"
                aria-label="Read verified Google reviews"
                className="home-hero-badge"
              >
                <div className="home-hero-badge-score">
                  <div className="home-hero-badge-row">
                    <img
                      src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                      alt="Google"
                    />
                    <span className="home-hero-badge-num">5.0</span>
                  </div>
                  <span className="home-hero-badge-caption">Verified Google reviews</span>
                </div>
                <div className="home-hero-badge-reviews">
                  <span className="home-hero-stars">★★★★★</span>
                  <span className="home-hero-reviews-copy">
                    Over <strong>57 reviews</strong>
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div></div>
        </div>
      </section>

      <section className="home-promises" data-screen-label="Buyer promises">
        <div className="home-promises-inner">
          {[
            "Smooth transaction with limited risk",
            "No pressure to over pay and buy within a certain time period",
            "A team of people that will be with you even after the transaction is complete",
          ].map((text) => (
            <div key={text} className="home-promises-item">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none">
                <circle cx="12" cy="12" r="11" fill="#C98A2C"></circle>
                <path
                  d="M7.4 12.3l3.1 3.1 6.1-6.6"
                  stroke="#0F1729"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-cost" data-screen-label="Hidden cost of buying alone">
        <div className="home-cost-orb home-cost-orb--tr" />
        <div className="home-cost-orb home-cost-orb--bl" />
        <div className="home-cost-inner">
          <div data-reveal="" className="home-cost-media">
            <img
              src="/redesign-assets/hidden-cost.webp"
              alt="Buyer overwhelmed at a desk"
              width="1100"
              height="787"
            />
            <div className="home-cost-chip">The cost of going alone</div>
          </div>
          <div className="home-cost-copy">
            <h2 data-reveal="">
              Are you aware of the <span className="home-cost-mark">hidden cost</span> of buying real estate without a
              realtor?
            </h2>
            <div className="home-cost-list">
              <div data-reveal="" className="home-cost-row">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
                  <path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9.5 21l1.6-5-2.6-1.4 3.2-4.1-.9 3.9 2.7 1.2-2.4 5.4" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p>
                  Buying <a href="/featured-brownstones-for-sale/" className="home-cost-link">real estate</a> then later
                  finding out it has <strong>structural issues</strong>
                </p>
              </div>
              <div data-reveal="" className="home-cost-row">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
                  <path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M8 15.5h8M12 11.5v8" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="m5.5 5.5 13 13" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
                <p>
                  Buying <a href="/featured-brownstones-for-sale/" className="home-cost-link">real estate</a> then finding
                  out you <strong>can't renovate it</strong>
                </p>
              </div>
              <div data-reveal="" className="home-cost-row">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
                  <rect x="4" y="3.5" width="14" height="17" rx="1.5" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></rect>
                  <path d="M7.5 8h7M7.5 11.5h7M7.5 15h4" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <circle cx="17.5" cy="17.5" r="4" fill="#0F1729" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                  <path d="M17.5 15.6v3.8M15.9 17.5h3.2" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p>
                  Buying a <a href="/featured-brownstones-for-sale/" className="home-cost-link">real estate</a> then finding
                  out that you <strong>inherited some bills</strong>
                </p>
              </div>
              <div data-reveal="" className="home-cost-row">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
                  <circle cx="12" cy="12" r="8.5" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                  <path d="M14.5 9.2c-.6-.8-1.6-1.2-2.7-1.2-1.6 0-2.7.8-2.7 2s1 1.7 2.8 2.1c1.9.4 3 .9 3 2.2s-1.2 2.1-2.9 2.1c-1.3 0-2.4-.5-3-1.4M12 6.2v11.6" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p>
                  Purchasing a <a href="/featured-brownstones-for-sale/" className="home-cost-link">real estate</a> with the{" "}
                  <strong>wrong type of loan</strong>
                </p>
              </div>
              <div data-reveal="" className="home-cost-row">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
                  <path d="M3.5 19.5h17" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="m5 15.5 4-3.5 3.5 2.5 6.5-6" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M15.5 8.5H19v3.5" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="m4.5 5 15 15" stroke="#C98A2C" strokeWidth="1.5" strokeLinecap="round"></path>
                </svg>
                <p>
                  Overpaying for <a href="/featured-brownstones-for-sale/" className="home-cost-link">real estate</a> and{" "}
                  <strong>not getting any appreciation</strong>
                </p>
              </div>
            </div>
            <div data-reveal="" className="home-cost-foot">
              <p>
                We'll make sure you make a <strong>smart purchase</strong> by saving money and avoid owning{" "}
                <a href="/featured-brownstones-for-sale/" className="home-cost-link">real estate</a> that will{" "}
                <strong>give you a headache</strong>.
              </p>
              <a href="https://calendly.com/montfort" className="home-cost-cta">
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-founder" data-screen-label="Founder">
        <div className="home-founder-inner">
          <div data-reveal="" className="home-founder-copy">
            <div className="home-founder-kicker">
              <span className="home-founder-kicker-line" />
              <span className="home-founder-kicker-label">Who you work with</span>
            </div>
            <h2>Stanley Montfort</h2>
            <p className="home-founder-lede">
              I'm a realtor that helps people make smart{" "}
              <a href="/featured-brownstones-for-sale/" className="home-founder-estate">
                real estate
              </a>{" "}
              purchases.
            </p>
            <p className="home-founder-body">
              We understand the{" "}
              <strong>
                stress of purchasing{" "}
                <a href="/featured-brownstones-for-sale/" className="home-founder-estate">
                  real estate
                </a>
              </strong>
              , the time it takes to{" "}
              <strong>
                find the{" "}
                <a href="/featured-brownstones-for-sale/" className="home-founder-estate">
                  real estate
                </a>
              </strong>{" "}
              and then after making a large purchase your life is disrupted with{" "}
              <strong>hidden maintenance costs</strong>, violation issues, and being harassed by the city.
            </p>
            <p className="home-founder-body">
              Since the start of the pandemic we have facilitated over a <strong>BILLION dollars</strong> of{" "}
              <a href="/featured-brownstones-for-sale/" className="home-founder-estate">
                real estate
              </a>{" "}
              transactions. Because of our experience <strong>we know the exact steps</strong> to make your purchase go
              smoothly and we can <strong>do it for you also</strong>.
            </p>
            <div className="home-founder-stats">
              <div className="home-founder-stat home-founder-stat--first">
                <div className="home-founder-stat-num">$1B+</div>
                <div className="home-founder-stat-label">Transactions facilitated since 2020</div>
              </div>
              <div className="home-founder-stat home-founder-stat--rule">
                <div className="home-founder-stat-num">11</div>
                <div className="home-founder-stat-label">Manhattan and Brooklyn neighborhoods</div>
              </div>
              <div className="home-founder-stat home-founder-stat--rule">
                <div className="home-founder-stat-num">$0</div>
                <div className="home-founder-stat-label">Cost to buyers for representation</div>
              </div>
            </div>
            <div className="home-founder-actions">
              <a href="https://calendly.com/montfort" className="home-founder-cta">
                Schedule a Free Consultation
              </a>
              <a href="/stanley-montfort/" className="home-founder-more">
                More about Stanley →
              </a>
            </div>
          </div>
          <div data-reveal="" className="home-founder-portrait">
            <div className="home-founder-ring" />
            <div className="home-founder-dot home-founder-dot--gold" />
            <div className="home-founder-dot home-founder-dot--navy" />
            <div className="home-founder-photo">
              <img
                src="/redesign-assets/stanley-portrait.webp"
                alt="Portrait of Stanley Montfort"
                width="3277"
                height="4096"
              />
            </div>
            <div className="home-founder-creds">
              <div>
                <div className="home-founder-cred-kicker">Credential</div>
                <div className="home-founder-cred-value">Licensed NYC Broker</div>
              </div>
              <div className="home-founder-cred-split" />
              <div>
                <div className="home-founder-cred-kicker">Affiliation</div>
                <div className="home-founder-cred-value">REBNY Member Firm</div>
              </div>
            </div>
            <a href="/stanley-montfort/" className="founder-more-m">
              More about Stanley →
            </a>
          </div>
        </div>
      </section>

      <section className="home-areas" data-screen-label="Service areas">
        <div className="home-areas-inner">
          <div data-reveal="" className="home-areas-head">
            <div className="home-areas-kicker">Manhattan &amp; Brooklyn</div>
            <h2>Featured Realtor Service Areas</h2>
            <span className="home-areas-rule" />
          </div>
          <div className="home-areas-grid">
            {AREA_CARDS.map((card) => (
              <a key={card.href} data-reveal="" href={card.href} className="home-areas-card">
                <img src={card.image} alt={card.alt} width={card.w} height={card.h} />
                <div className="home-areas-veil" />
                <div className="home-areas-boro">{card.boro}</div>
                <div className="home-areas-copy">
                  <h3>{card.title}</h3>
                  <div className="home-areas-blurb">{card.blurb}</div>
                  <div className="home-areas-explore">
                    Explore <span>→</span>
                  </div>
                </div>
              </a>
            ))}
            <a data-reveal="" href="/neighborhoods/" className="home-areas-cta">
              <div>
                <div className="home-areas-cta-kicker">All eleven areas</div>
                <h3>Not sure which neighborhood fits you?</h3>
                <div className="home-areas-cta-blurb">
                  Compare every area we cover with local market data, or ask on a twenty-minute call.
                </div>
              </div>
              <div className="home-areas-cta-go">Browse all →</div>
            </a>
          </div>
        </div>
      </section>

      <section className="home-expect" data-screen-label="Client expectations">
        <div className="home-expect-inner">
          <div data-reveal="" className="home-expect-intro">
            <div className="home-expect-kicker">
              <span className="home-expect-kicker-line" />
              <span className="home-expect-kicker-label">What you get</span>
            </div>
            <h2>What can our clients expect from working with a realtor?</h2>
          </div>
          <div className="home-expect-grid">
            <div data-reveal="" className="home-expect-col home-expect-col--first">
              <div className="home-expect-media">
                <img
                  className="home-expect-img--220"
                  src="/redesign-assets/expect/offmarket.webp"
                  alt="On and off market real estate search"
                  width="250"
                  height="250"
                />
              </div>
              <div className="home-expect-divider" />
              <h3>
                Identify On &amp;{" "}
                <strong>
                  Off Market{" "}
                  <a href="/advice-for-buyers-looking-to-purchase-brownstones/" className="home-expect-link">
                    Real Estate
                  </a>
                </strong>
              </h3>
              <p>
                With our efficient{" "}
                <a href="/co-ownership-advantages-and-disadvantages-in-nyc/" className="home-expect-link">
                  real estate
                </a>{" "}
                searching process we'll provide you with weekly updates of both on and off market real estate to not waste
                your time seeing properties that do not fit your search criteria
              </p>
              <a href="/perfect-home-finder/" className="home-expect-more">
                Perfect home finder <span className="home-expect-more-arrow">→</span>
              </a>
            </div>
            <div data-reveal="" className="home-expect-col home-expect-col--mid">
              <div className="home-expect-media">
                <img
                  className="home-expect-img--231"
                  src="/redesign-assets/expect/troublesome.webp"
                  alt="Troublesome brownstone interior"
                  width="250"
                  height="250"
                />
              </div>
              <div className="home-expect-divider" />
              <h3>
                Avoid a{" "}
                <strong>
                  Troublesome{" "}
                  <a href="/advice-for-buyers-looking-to-purchase-brownstones/" className="home-expect-link">
                    Real Estate
                  </a>
                </strong>
              </h3>
              <p>
                With our <strong>real estate due diligence</strong> process you'll keep more money in your pocket and
                avoid costly mistakes
              </p>
              <a href="/whats-my-home-worth/" className="home-expect-more">
                What’s my home worth <span className="home-expect-more-arrow">→</span>
              </a>
            </div>
            <div data-reveal="" className="home-expect-col home-expect-col--last">
              <div className="home-expect-media">
                <img
                  className="home-expect-img--220"
                  src="/redesign-assets/expect/team.webp"
                  alt="Attorneys, contractors and inspectors"
                  width="250"
                  height="250"
                />
              </div>
              <div className="home-expect-divider" />
              <div className="home-expect-title">
                Get Access To The <strong>Best Attorneys</strong>, Contractors, and Inspectors{" "}
                <strong>In The Industry</strong>
              </div>
              <p>
                With our <strong>experienced team</strong>, you'll move through the <strong>transaction efficiently</strong>{" "}
                and will not go through the real estate <strong>purchasing process</strong> blind
              </p>
              <a href="/mortgage-calculator/" className="home-expect-more">
                Mortgage calculator <span className="home-expect-more-arrow">→</span>
              </a>
            </div>
          </div>
          <div data-reveal="" className="home-expect-foot">
            <h3>Twenty minutes on the phone tells you whether we are the right fit.</h3>
            <a href="https://calendly.com/montfort" className="home-expect-cta">
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>
      <section className="home-plan" data-screen-label="Buying plan">
        <div className="home-plan-inner">
          <div data-reveal="" className="home-plan-head">
            <div>
              <div className="home-plan-kicker">
                <span className="home-plan-kicker-line" />
                <span className="home-plan-kicker-label">How it works</span>
              </div>
              <h2>Efficient Realtor Buying Plan</h2>
            </div>
            <a href="https://calendly.com/montfort" className="home-plan-cta">
              Schedule a Free Consultation
            </a>
          </div>
          <div className="home-plan-grid">
            {PLAN_STEPS.map((step) => (
              <div data-reveal="" key={step.n} className="home-plan-step">
                <div className="home-plan-photo">
                  <img src={step.image} alt={step.alt} width="3000" height="2000" />
                </div>
                <div className="home-plan-title">
                  <span className="home-plan-num">{step.n}</span>
                  <span className="home-plan-name">{step.title}</span>
                </div>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-svcs" data-screen-label="Services">
        <div className="home-svcs-inner">
          <div data-reveal="" className="home-svcs-head">
            <h2>Offered Realtor Services</h2>
            <p>
              Whether you are looking for realtors in{" "}
              <a href="/featured-brownstones-for-sale/manhattan/west-harlem/" className="home-svcs-inline">
                Harlem
              </a>
              , Upper Westside, or other parts of NYC our dedicated, and highly qualified team of brokers is at your
              service to assist buyers like yourself with your real estate goals, whether purchasing or selling property.
            </p>
          </div>
          <div className="home-svcs-grid">
            {SERVICE_CARDS.map((card) => (
              <a key={card.href} data-reveal="" href={card.href} className="home-svcs-card">
                <div className="home-svcs-media">
                  <img src={card.image} alt={card.alt} width="550" height="450" />
                </div>
                <div className="home-svcs-body">
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                  <div className="home-svcs-more">
                    Learn more <span className="home-svcs-more-arrow">→</span>
                  </div>
                </div>
              </a>
            ))}
            <a
              data-reveal=""
              href="https://calendly.com/montfort"
              target="_blank"
              rel="noopener"
              className="home-svcs-cta"
            >
              <div>
                <div className="home-svcs-cta-kicker">Not sure where to start?</div>
                <h3>Let’s find the right service for you.</h3>
                <p>Twenty minutes on the phone is all it takes to map out your next move.</p>
              </div>
              <div className="home-svcs-cta-go">
                Book a consultation <span>→</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="home-rev" data-screen-label="Reviews">
        <div className="home-rev-inner">
          <div data-reveal="" className="home-rev-head">
            <div>
              <div className="home-rev-kicker">
                <span className="home-rev-kicker-line" />
                <span className="home-rev-kicker-label">What clients say</span>
              </div>
              <h2>Realtor Reviews</h2>
            </div>
            <div className="home-rev-score">
              <img
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                alt="Google"
              />
              <span className="home-rev-score-num">5.0</span>
              <div>
                <span className="home-rev-stars">★★★★★</span>
                <a href="/success-stories/" className="home-rev-all">
                  Read all reviews →
                </a>
              </div>
            </div>
          </div>
          <div className="home-rev-slider">
            <div id="review-track" className="no-sb">
              {REVIEWS.map((review) => (
                <a
                  key={review.href}
                  href={review.href}
                  target="_blank"
                  rel="noopener"
                  className="home-rev-slide"
                >
                  <div className="home-rev-author">
                    <img src={review.photo} alt={review.name} referrerPolicy="no-referrer" />
                    <div>
                      <h4>{review.name}</h4>
                      <div className="home-rev-posted">
                        <img
                          src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                          alt="Googleg Standard Color 128Dp"
                        />{" "}
                        Posted on Google
                      </div>
                    </div>
                    <span className="home-rev-slide-stars">★★★★★</span>
                  </div>
                  <div>
                    <span className="home-rev-quote-mark">“</span>
                    <p>{review.quote}</p>
                  </div>
                </a>
              ))}
            </div>
            <button
              id="review-prev"
              className="home-rev-nav"
              aria-label="Previous review"
              {...{ onclick: REVIEW_PREV_CLICK }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12.5 4.5L7 10l5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button
              id="review-next"
              className="home-rev-nav"
              aria-label="Next review"
              {...{ onclick: REVIEW_NEXT_CLICK }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 4.5L13 10l-5.5 5.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div id="review-dots">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                className="rev-dot"
                data-i={String(i)}
                aria-label={`Go to review ${i + 1}`}
                {...{ onclick: REVIEW_DOT_CLICK }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home-ig" data-screen-label="Instagram">
        <div className="home-ig-inner">
          <div data-reveal="" className="home-ig-head">
            <div className="home-ig-brand">
              <div className="home-ig-avatar-ring">
                <div className="home-ig-avatar">
                  <img
                    src="https://assets.agentfire3.com/uploads/sites/312/2021/11/Icon-Favicon-black.png"
                    alt="Montfort"
                  />
                </div>
              </div>
              <div>
                <div className="home-ig-handle">@stanleymontfort</div>
                <div className="home-ig-sub">Follow the latest listings, sales &amp; NYC market insight</div>
              </div>
            </div>
            <a
              href="https://www.instagram.com/stanleymontfort/"
              target="_blank"
              rel="noopener"
              className="home-ig-follow"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"></rect>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"></circle>
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"></circle>
              </svg>
              Follow
            </a>
          </div>
          <div className="home-ig-grid">
            {IG_POSTS.map((post) => (
              <a key={post.href} href={post.href} target="_blank" rel="noopener" className="home-ig-card">
                <img src={post.image} alt="Instagram post" width={post.w} height={post.h} />
                {"reel" in post && post.reel ? (
                  <span className="home-ig-play">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="#fff">
                      <path d="M4 3l9 5-9 5z"></path>
                    </svg>
                  </span>
                ) : null}
                <div className="ig-ov">
                  <p>{post.caption}</p>
                  <div className="home-ig-meta">
                    <span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21s-7.5-4.6-10-9.3C.5 8.6 2 5 5.3 5c2 0 3.4 1.1 4.7 2.8C11.3 6.1 12.7 5 14.7 5 18 5 19.5 8.6 18 11.7 15.5 16.4 12 21 12 21z"></path>
                      </svg>{" "}
                      {post.likes}
                    </span>
                    <span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3C6.5 3 2 6.6 2 11c0 2.5 1.4 4.7 3.6 6.2-.2 1.3-.9 2.6-1.9 3.6 1.7-.2 3.4-.8 4.8-1.8 1.1.3 2.3.5 3.5.5 5.5 0 10-3.6 10-8S17.5 3 12 3z"></path>
                      </svg>{" "}
                      {post.comments}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="home-inc" data-screen-label="What’s included">
        <div className="home-inc-inner">
          <div data-reveal="" className="home-inc-intro">
            <div className="home-inc-kicker">
              <span className="home-inc-kicker-line" />
              <span className="home-inc-kicker-label">Included at no cost</span>
            </div>
            <h2>What’s Included When Working With A Realtor</h2>
          </div>
          <div className="home-inc-grid">
            {INCLUDED.map((item) => (
              <div data-reveal="" className="home-inc-card" key={item.title}>
                <div className="home-inc-icon">
                  <img src={item.image} alt={item.alt} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
          <div data-reveal="" className="home-inc-foot">
            <a href="https://calendly.com/montfort" target="_blank" rel="noopener" className="home-inc-cta">
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section className="home-list" data-screen-label="Listings">
        <div className="home-list-rail">
          <div data-reveal="" className="home-list-head">
            <div>
              <div className="home-list-kicker">
                <span className="home-list-kicker-line" />
                <span className="home-list-kicker-label">On the market</span>
              </div>
              <h2>Current Realtor Listings</h2>
            </div>
            <div className="home-list-arrows">
              <button
                id="listings-prev"
                className="home-list-nav"
                aria-label="Previous listings"
                {...{ onclick: LISTINGS_PREV_CLICK }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              <button
                id="listings-next"
                className="home-list-nav"
                aria-label="Next listings"
                {...{ onclick: LISTINGS_NEXT_CLICK }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div id="listings-track" className="no-sb">
          {LISTINGS.map((listing) => (
            <a
              key={listing.href}
              href={listing.href}
              target="_blank"
              rel="noopener"
              className="home-list-card"
            >
              <div className="home-list-media">
                <img src={listing.image} alt={listing.alt} loading="lazy" width={listing.w} height={listing.h} />
                <span className="home-list-price">{listing.price}</span>
              </div>
              <div className="home-list-body">
                <h3>{listing.title}</h3>
                <div className="home-list-city">New York, NY</div>
                <div className="home-list-meta">{listing.meta}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="home-list-rail">
          <div data-reveal="" className="home-list-foot">
            <a href="/current-listings/" className="home-list-all">
              See all listings
            </a>
          </div>
        </div>
      </section>

      <ResourcesSection />

      <section className="home-dl" data-screen-label="Download">
        <div className="home-dl-inner">
          <div data-reveal="" className="home-dl-copy">
            <div className="home-dl-kicker">Free Download</div>
            <h2>11 Costly Mistakes Made When Buying a Brownstone</h2>
            <p className="home-dl-lead">
              Educate yourself on these 11 costly mistakes, the difference between a successful purchase and a disastrous one.
            </p>
            <p className="home-dl-body">
              Are you in the market for a{" "}
              <a href="/featured-brownstones-for-sale/harlem-brownstones/" className="home-dl-link">
                brownstone
              </a>
              ? Taking the time to educate yourself on these 11 costly mistakes can make all the difference between a successful purchase and a disastrous one.
            </p>
            <div className="home-dl-form">
              <input type="text" placeholder="Your name" className="home-dl-field" />
              <input type="email" placeholder="Email address" className="home-dl-field" />
              <a href="/" className="home-dl-submit">
                Download the guide
              </a>
            </div>
          </div>
          <div data-reveal="" className="home-dl-map">
            <iframe
              title="Montfort Real Estate on Google Maps"
              src="https://www.google.com/maps?q=8+West+126th+Street,+New+York,+NY+10027&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="home-dl-veil" />
            <div className="home-dl-visit">
              <div>
                <div className="home-dl-visit-kicker">Visit our office</div>
                <h3>8 West 126th Street</h3>
                <div className="home-dl-visit-city">New York, NY 10027</div>
              </div>
              <a
                href="https://maps.google.com/?cid=11378470238102062088"
                target="_blank"
                rel="noopener"
                className="home-dl-directions"
              >
                Directions{" "}
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h9M8 3.5L12.5 8 8 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
