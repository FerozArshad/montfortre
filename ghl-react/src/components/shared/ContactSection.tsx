import "../../styles/contact-section.css";

export default function ContactSection() {
  return (
    <section className="contact-section" data-screen-label="Contact">
      <div className="contact-inner">
        <div data-reveal="" className="contact-copy">
          <div className="contact-kicker">Get in touch</div>
          <h2>Contact Montfort Real Estate</h2>
          <div className="contact-form">
            <div className="contact-names">
              <input type="text" placeholder="First name" className="contact-field" />
              <input type="text" placeholder="Last name" className="contact-field" />
            </div>
            <input type="email" placeholder="Email address" className="contact-field" />
            <textarea placeholder="Comments, questions?" rows={4} className="contact-field contact-field--area" />
            <a href="https://calendly.com/montfort" className="contact-submit">
              Submit
            </a>
          </div>
        </div>
        <div data-reveal="" className="contact-map">
          <iframe
            title="Montfort Real Estate on Google Maps"
            src="https://www.google.com/maps?q=8+West+126th+Street,+New+York,+NY+10027&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="contact-map-veil" />
          <div className="contact-visit">
            <div>
              <div className="contact-visit-kicker">Visit our office</div>
              <div className="contact-visit-street">8 West 126th Street</div>
              <div className="contact-visit-city">New York, NY 10027</div>
            </div>
            <a
              href="https://maps.google.com/?cid=11378470238102062088"
              target="_blank"
              rel="noopener"
              className="contact-directions"
            >
              Directions{" "}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h9M8 3.5L12.5 8 8 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
