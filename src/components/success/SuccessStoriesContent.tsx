import ContactSection from "../shared/ContactSection";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/success-page.css";

const GOOGLE_MARK =
  "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png";

const TESTIMONIALS = [
  {
    initials: "KS",
    name: "Kristen Scheyder",
    href: "https://www.google.com/maps/contrib/106383080176387870829/reviews?hl=en",
    date: "Jul 2026 · View on Google",
    quote:
      "Stanley was great to work with. He worked with our schedule, took the time to understand our priorities, showed us a range of properties in different areas that could suit our needs and helped us strategize our approach. He was also a great resource in helping us find local connections for inspections, repairs, etc. We look forward to staying in touch with him and will definitely recommend him.",
  },
  {
    initials: "AD",
    name: "Angelina Darrisaw",
    href: "https://www.google.com/maps/contrib/101694945511048714275/reviews?hl=en",
    date: "Jul 2026 · View on Google",
    quote:
      "Incredible experience. Very knowledgeable about the brownstone buying process and helped me understand the budget differences for condo vs brownstones. Walked away more informed as a result.",
  },
  {
    initials: "SR",
    name: "Stephie Rowe",
    href: "https://www.google.com/maps/contrib/112594200448090017399/reviews?hl=en",
    date: "Jul 2026 · View on Google",
    quote: "Great Service",
  },
  {
    initials: "SC",
    name: "Sandrine Charles",
    href: "https://www.google.com/maps/contrib/111964719774825390259/reviews?hl=en",
    date: "Jun 2026 · View on Google",
    quote: "Thank you for a streamlined process from start to finish ensuring the right place was found and secured without haste!",
  },
  {
    initials: "SR",
    name: "Seth Rabinowitz",
    href: "https://www.google.com/maps/contrib/100922205373403327263/reviews?hl=en",
    date: "Jun 2026 · View on Google",
    quote:
      "We had a great experience working with Stanley. He taught us a lot about the specific market we were looking in, which enabled us to make a very good decision on purchase of a new home.",
  },
  {
    initials: "CA",
    name: "Corey A. Witmer",
    href: "https://www.google.com/maps/contrib/109328620676722096746/reviews?hl=en",
    date: "Apr 2026 · View on Google",
    quote:
      "Stanley was the dream real estate agent we didn't know we deserved! From the beginning he was attentive to help us figure out what type of property we wanted, and could afford. Throughout the process he was a calm and patient presence, offering sincere and sage perspectives to keep us grounded. Ultimately we landed a unicorn of a property for below market price for the block. I'd highly recommend him for future homebuyers.",
  },
  {
    initials: "PW",
    name: "Perry Witmer",
    href: "https://www.google.com/maps/contrib/116771421068638089471/reviews?hl=en",
    date: "Apr 2026 · View on Google",
    quote:
      "Stanley is amazing! No one knows the Harlem market better than him, and his deep expertise was a tremendous resource. He taught me how to spot 'red flags' and talked me out of an offer on a place that had evidence of poor workmanship. He always knew exactly what a property was worth, regardless of the listing price. Responsive, thorough, and gave excellent advice at every step. So grateful to have worked with him!",
  },
  {
    initials: "DS",
    name: "Davon Snipes",
    href: "https://www.google.com/maps/contrib/108132066685824850224/reviews?hl=en",
    date: "Mar 2026 · View on Google",
    quote:
      "Stan has been an incredibly patient, knowledgeable, and professional broker. He understands the market and has many relationships in the industry. He was thoughtful and gracious about responding to our feedback, and left no stone unturned in helping us find the property of our dreams. And he continues to provide guidance post-closing. Look no further!",
  },
  {
    initials: "AN",
    name: "Anika Nfr-Ka Ma’at Daniels",
    href: "https://www.google.com/maps/contrib/107286042219082422872/reviews?hl=en",
    date: "Jan 2026 · View on Google",
    quote:
      "Stan is extremely knowledgeable and professional. He also has the utmost patience! He helped me sell my home and purchase a condo at the same time. My home had all types of special contingencies but he found me a buyer very close to the price I wanted. Stan works extremely hard and is always accessible. I would give him more stars if I could. Highly recommend.",
  },
] as const;

export default function SuccessStoriesContent() {
  return (
    <div>
      <section className="succ-hero" data-screen-label="Success hero">
        <img className="succ-hero-photo" src="/redesign-assets/hoods/harlem.webp" alt="Harlem" aria-hidden="true" />
        <div className="succ-hero-shade" />
        <div className="succ-hero-ring" />
        <div className="succ-hero-inner">
          <div className="succ-hero-kicker">
            <span className="succ-hero-kicker-line" />
            <span className="succ-hero-kicker-label">Client Reviews</span>
            <span className="succ-hero-kicker-line" />
          </div>
          <h1>Success stories</h1>
          <p className="succ-hero-lead">
            Real reviews from New York buyers and sellers who trusted Stanley Montfort with one of the biggest decisions of their lives.
          </p>
          <a
            href="https://maps.google.com/?cid=11378470238102062088"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read verified Google reviews"
            className="succ-google"
          >
            <div className="succ-google-score">
              <div className="succ-google-score-row">
                <img src={GOOGLE_MARK} alt="Google" />
                <span className="succ-google-num">5.0</span>
              </div>
              <span className="succ-google-label">Verified Google reviews</span>
            </div>
            <div className="succ-google-meta">
              <span className="succ-google-stars">★★★★★</span>
              <span className="succ-google-count">
                Over <strong>57 reviews</strong>
              </span>
            </div>
          </a>
          <div className="succ-hero-ctas">
            <a href="https://calendly.com/montfort" target="_blank" rel="noopener noreferrer" className="succ-hero-book">
              Book a consultation{" "}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h9M8 3.5L12.5 8 8 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="tel:+1-646-970-1078" className="succ-hero-tel">
              Call (646) 970-1078
            </a>
          </div>
        </div>
      </section>

      <section className="succ-list" data-screen-label="Testimonials">
        <div className="success-masonry">
          {TESTIMONIALS.map((item) => (
            <div key={item.href} data-reveal="" className="succ-card">
              <div className="succ-card-head">
                <span className="succ-card-quote">{'\u201C'}</span>
                <span className="succ-card-stars">★★★★★</span>
              </div>
              <p>{item.quote}</p>
              <div className="succ-card-author">
                <div className="succ-card-initials">{item.initials}</div>
                <div className="succ-card-who">
                  <div className="succ-card-name">{item.name}</div>
                  <div className="succ-card-google">
                    <img src={GOOGLE_MARK} alt="Google" />
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="succ-card-date">
                      {item.date}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ResourcesSection />
      <ContactSection />
    </div>
  );
}
