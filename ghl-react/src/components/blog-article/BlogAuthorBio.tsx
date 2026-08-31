export default function BlogAuthorBio() {
  return (
    <div className="bsg-author">
      <div className="bsg-author-kicker">About the Author</div>
      <div className="bsg-author-grid">
        <div className="bsg-author-photo">
          <img src="/redesign-assets/stanley-portrait.webp" alt="Stanley Montfort" />
        </div>
        <div>
          <div className="bsg-author-name">
            Stanley Montfort<span className="bsg-author-role">, Real Estate Advisor®</span>
          </div>
          <div className="bsg-author-copy">
            <p>
              Since the start of the pandemic, Stanley Montfort has played a crucial role in facilitating over one
              billion dollars worth of brownstone sales in New York City. He is a recognized expert in the city's
              brownstone and townhouse market, with extensive experience in both sell-side and buy-side transactions,
              thanks to his military and law background.
            </p>
            <p>
              Stanley honed his real estate skills in the Harlem townhouse market and assisted in numerous
              co-ownership transactions, including more complicated deals
              involving SROs, seller financing, and negotiating with tenants, always leaving all parties satisfied.
            </p>
            <p>
              With a vibrant, diversified career spanning the legal, banking, and technology industries, Stanley brings
              a wealth of experience to help clients achieve their real estate objectives. He applies innovative
              marketing, strategic thinking, and utmost professionalism and integrity to every deal. A savvy negotiator
              with strong analytical skills, he has navigated even the most challenging deals to deliver the desired
              results.
            </p>
            <p>
              Moreover, Stanley provides a personalized, engaging experience marked by complete transparency,
              data-driven financial decisions, and honest conversations. He earns his clients' trust and is committed to
              ensuring their needs are fully understood and resolved without compromise.
            </p>
            <p>
              Originally from New Jersey, Stanley is a graduate of Fordham University, where he earned his JD and a
              Master's in International Political Economy and Development. Stanley is the no-brainer choice to help you
              achieve your real estate goals.
            </p>
          </div>
          <div className="bsg-author-social">
            <a
              href="https://www.facebook.com/montfortrealestate"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="bsg-author-icon"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 9h3V5.5h-3c-2.2 0-3.8 1.7-3.8 3.9V11H7.5v3.5h2.7V22h3.6v-7.5h2.7l.5-3.5h-3.2V9.6c0-.4.3-.6.7-.6z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/stanleymontfort/"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="bsg-author-icon"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.9" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.9" />
                <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/stanley-p-montfort-b3675548/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              className="bsg-author-icon"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.5 8.5v10H3.3v-10h3.2zM4.9 3.5a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7zM20.7 18.5h-3.2v-5.2c0-1.4-.5-2.3-1.7-2.3-.9 0-1.5.6-1.7 1.2-.1.2-.1.5-.1.8v5.5H10.7s.04-9 0-10h3.2v1.4c.4-.7 1.2-1.6 3-1.6 2.2 0 3.8 1.4 3.8 4.5v5.7z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@montfortrealestate6984"
              target="_blank"
              rel="noopener"
              aria-label="YouTube"
              className="bsg-author-icon"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.3-3.8.3-3.8s0-2.5-.3-3.8zM10 15V9l5.2 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
