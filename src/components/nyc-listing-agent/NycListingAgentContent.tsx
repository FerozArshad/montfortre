import ContactSection from "../shared/ContactSection";
import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/two-family-page.css";
import "../../styles/nyc-listing-agent-page.css";
import { FaqAccordion, FaqItem } from "../shared/FaqAccordion";
import HeroGoogleRating from "../shared/HeroGoogleRating";


const RELATED_SERVICES = [
  {
    href: "/selling-brownstones-in-nyc/",
    image: "/redesign-assets/services/selling-brownstones-nyc.png",
    alt: "Selling Brownstones NYC",
    title: "Selling brownstones in NYC",
    copy: "Historic value, expert marketing, and premium buyer demand",
  },
  {
    href: "/selling-condos-in-nyc/",
    image: "/redesign-assets/services/selling-condos-nyc.png",
    alt: "Selling condos NYC",
    title: "Selling condos in NYC",
    copy: "Strategic pricing, qualified buyers, and maximum market exposure",
  },
  {
    href: "/selling-co-ops-in-nyc/",
    image: "/redesign-assets/services/selling-co-ops-in-nyc.png",
    alt: "Selling Co-ops in NYC",
    title: "Selling co-ops in NYC",
    copy: "Board expertise, targeted marketing, and seamless transactions",
  },
  {
    href: "/selling-sros-in-nyc/",
    image: "/redesign-assets/services/selling-sros-in-nyc-card.png",
    alt: "Selling SROS in Nyc",
    title: "Selling SROs in NYC",
    copy: "Regulatory expertise, investor connections, and maximum property value",
  },
  {
    href: "/selling-probate-properties-in-nyc/",
    image: "/redesign-assets/services/selling-probate-properties-in-nyc.png",
    alt: "Selling Probate Properties in NYC",
    title: "Selling probate properties in NYC",
    copy: "Compassionate guidance, legal coordination, and stress-free property sales",
  },
] as const;

const NEWS_ARTICLES = [
  {
    href: "/upper-west-side-townhouse-q2-2024-market-report/",
    image: "/redesign-assets/hoods/upper-west-side.webp",
    alt: "Upper West Side Townhouse Q2 2024 Market Report",
    title: "Upper West Side Townhouse Q2 2024 Market Report",
    excerpt:
      "On the Upper West Side, we observed a distinct trend that diverges from the citywide patterns. Speci…",
  },
  {
    href: "/harlem-brownstone-q2-2024-market-report/",
    image: "/redesign-assets/hoods/harlem.webp",
    alt: "Harlem Brownstone Q2 2024 Market Report",
    title: "Harlem Brownstone Q2 2024 Market Report",
    excerpt: "The Harlem brownstone market has seen an increase in sales activity since this time last year. In Q2…",
  },
  {
    href: "/discover-your-dream-home-explore-apartments-for-sale-on-the-upper-west-side/",
    image: "/redesign-assets/hoods/chelsea.webp",
    alt: "Discover Your Dream Home: Explore Apartments for Sale on the Upper West Side",
    title: "Discover Your Dream Home: Explore Apartments for Sale on the Upper West Side",
    excerpt:
      "Are you searching for your dream home in one of New York City’s most sought-after neighborhoods? Loo…",
  },
] as const;

export default function NycListingAgentContent() {
  return (
    <>
      <section className="tf-hero" data-screen-label="Service hero">
        <div className="tf-hero-ring" />
        <div className="tf-hero-inner">
          <div data-reveal="">
            <h2>NYC Listing Realtor Services — Maximize Your Home&apos;s Value and Sell with Confidence</h2>
            <p className="tf-hero-lead">
              We&apos;ll help you sell your NYC property for <strong>the highest possible price</strong> while
              minimizing stress, avoiding costly mistakes, and managing every detail from
              <strong> listing to closing</strong>.
            </p>
            <div className="tf-hero-ctas">
              <a href="tel:+16469701078" className="tf-hero-tel">
                Call 1-(646)-970-1078
              </a>
              <a href="https://calendly.com/montfort" className="tf-hero-book">
                Schedule A Consultation
              </a>
            </div>
          </div>
          <div className="tf-hero-media" data-reveal="">
            <div className="tf-hero-frame">
              <img src="/redesign-assets/services/nyc-listing-agent.png" alt="" />
            </div>
            <HeroGoogleRating prefix="tf" />
          </div>
        </div>
      </section>

      <PromisesBar variant="light" screenLabel="Client promises" />

      <section className="tf-guide" data-screen-label="Guide">
        <div className="tf-guide-inner">
          <div data-reveal="">
            <h1>Expert NYC Listing Agent Services from Stanley Montfort</h1>
            <div className="tf-guide-rule" />
            <h2>Top Notch Home Selling Services from a Seasoned NYC Real Estate Pro</h2>
            <p>
              Selling your home for the absolute best price takes some serious know-how - namely, coming up with a smart
              pricing strategy, targeting the right buyers and negotiating like a pro. That&apos;s what Stanley
              Montfort, a seasoned &amp; fully licensed{" "}
              <a href="/harlem-realtor/" className="tf-guide-link">
                real estate listing agent
              </a>{" "}
              brings to the table. When you&apos;re getting ready to put your home on the market you need to do your
              research - and think carefully about who would make the best fit for you. Whether you&apos;re selling a
              Manhattan co-op or a Brooklyn multi-family brownstone Stanley Montfort has the expertise to turn a
              complicated sale into a slick, streamlined process that has your best interests at heart.
            </p>
            <p>
              Stanley Montfort has a deep understanding of the local market, years of business experience and a proven
              track record in the real estate business, He handles the legwork so you can focus on the next chapter of
              your life. He&apos;s got a 100% guarantee to get you the best possible price for your property and -
              better still - he&apos;ll handle all the negotiations on your behalf. And remember: getting the price of
              your home wrong is a major gamble - price it too low and you&apos;ll be leaving money on the table, price
              it too high and you&apos;ll put off buyers who are on the hunt for a bargain. Did you know that 63% of
              sellers only contact one agent, according to recent{" "}
              <a href="https://www.nar.realtor/research-and-statistics" className="tf-guide-link">
                U.S. home seller statistics
              </a>{" "}
              before choosing their listing agent, but that&apos;s a mistake - by contacting a few agents you can find
              the one who&apos;s really going to get you the result you need.
            </p>
            <p>
              <strong>CTA Button: Schedule a Free Market Analysis with Stanley Today!</strong>
            </p>
            <h2>The Importance of a Listing Agent</h2>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/nyc-listing-agent-article-1.png"
                alt="Real estate listing agent presenting home marketing strategy to sellers during property listing consultation"
                loading="lazy"
              />
            </div>
            <p>
              Working with a seller&apos;s agent isn&apos;t just a nice-to-have - it&apos;s essential for getting the
              best possible outcome in today&apos;s cutthroat market. While a buyer&apos;s agent represents the buyer
              and takes care of viewings and paperwork, your agent - namely the seller&apos;s agent or listing agent -
              is in charge of promoting your home, pricing it correctly, and negotiating the sale. They&apos;re your
              main point of contact for all of the above - and the key to getting the best possible price.
            </p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />
                <strong>Market Insider:</strong> Stanley Montfort knows the NYC market inside out, with a deep know-how
                of property prices, local trends and the types of homes that do best in different locations.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Professional Marketing:</strong> With access to the RLS and a comprehensive marketing strategy,
                Stanley Montfort will put your home in front of serious buyers across multiple platforms. You&apos;ll
                get professional photos, video tours, and targeted online campaigns that will get buyers knocking on
                your door in no time.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Negotiation Expert:</strong> This is the part of the job that many people don&apos;t think
                about, but Stanley Montfort is a master at negotiation - he&apos;ll make sure you get the best possible
                deal on your sale.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Time-Saving:</strong> From managing viewings to handling paperwork, Stanley Montfort will take
                care of everything so you can focus on more important things. No more missed calls, scheduling conflicts
                or paperwork errors - and with his guidance you&apos;ll make sure that you&apos;re signing all the right
                documents at the right time.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Networking:</strong> With connections with other agents, vendors, and industry professionals,
                Stanley Montfort can get your property in front of the right buyers faster. His relationships with other
                agents, stagers, photographers, and lawyers make the entire process run smoothly.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Legal Stuff:</strong> Stanley Montfort has got your back when it comes to the paperwork - from
                contracts to other necessary documents he&apos;ll make sure everything is taken care of.
              </li>
            </ul>
            <p>
              With a professional real estate team on your side, you can count on a smooth, successful sale that puts
              more money in your pocket.
            </p>
            <h2>Finding the Right Agent</h2>
            <p>
              Choosing the right agent is the biggest decision you&apos;ll make when selling your home - and the right
              agent can make all the difference. Not only should they have years of experience in real estate, but they
              should also know the local market inside out. So what should you look for in an agent? Look for one who is
              a member of the{" "}
              <a href="https://www.nar.realtor/membership" className="tf-guide-link">
                National Association of Realtors membership standards
              </a>{" "}
              - that shows that they&apos;re committed to doing things the right way and staying on top of their game.
              And with years of experience under their belt, they&apos;ll be able to guide you through every step of the
              process - from pricing and marketing to negotiations and closing.
            </p>
            <hr />
            <h2>
              Agent Qualifications &amp; Experience - What You Need to KnowWhen Trying to Figure Out Which Real Estate
              Agent to Hire
            </h2>
            <p>
              When getting ready to sell your home, it&apos;s a good idea to have a close look at the qualifications and
              track record of the real estate agent you&apos;re thinking of hiring. The first thing you want to make
              sure of is that your agent is properly licensed and a member of the National Association of Realtors -
              that way you know they&apos;re going to be following all the industry standards. Don&apos;t just take
              their word for it either - dig in and find out how many homes they&apos;ve sold in the area, and what
              their average sale-to-list price ratio has been. An experienced agent will have a whole arsenal of tips
              for staging, pricing and marketing your home - and they&apos;ll probably have a network of contacts and
              professionals at their disposal to get your property as much exposure as possible. If you pick a realtor
              with a proven track record of success, you&apos;ll significantly up your chances of closing a deal and
              getting the best possible price.
            </p>
            <hr />
            <h2>Our Listing Services</h2>
            <h3>Residential Home Sales</h3>
            <p>
              Stanley Montfort creates a custom plan to get your home sold - whether it&apos;s a co-op, condo or single
              or multi-family townhouse in New York City or the surrounding areas. Every type of home needs a special
              approach:
            </p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />
                <strong>Co-ops:</strong> About 75% of NYC&apos;s housing is made up of co-ops - which come with a pretty
                tough board approval process. Stanley&apos;s been through this many times before, and can guide sellers
                through all the complex requirements of co-op board approval - he can even help navigate the board&apos;s
                requirements and create a comprehensive package for potential buyers.\
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Condos:</strong> Stanley can help out with both buying and selling - especially when it comes to
                getting through the requirements of condo boards or associations. He&apos;s got a talent for
                highlighting the benefits and investment potential of condo ownership.\
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Townhomes &amp; Brownstones:</strong> Show off their unique architectural features, outdoor
                space, income potential and appeal to buyers searching for{" "}
                <a href="/harlem-brownstones-for-sale/" className="tf-guide-link">
                  Harlem brownstones for sale
                </a>
              </li>
            </ul>
            <p>Stanley tailors his approach to what makes your property unique and who you&apos;re trying to sell to.</p>
            <h3>Luxury Property Marketing</h3>
            <p>
              When it comes to high-end properties, you need a high-end game plan. Stanley Montfort brings his A-game
              with premium marketing strategies that include:
            </p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />
                Professional photography - including twilight shots and drone footage\
              </li>
              <li>
                <span className="tf-dot" />
                Cinematic video tours and 3D virtual walkthroughs\
              </li>
              <li>
                <span className="tf-dot" />
                Exclusive access to his luxury buyer network and all the market expertise that comes with it\
              </li>
              <li>
                <span className="tf-dot" />
                An international reach for clients with discerning tastes\
              </li>
              <li>
                <span className="tf-dot" />
                Concierge level service from start to finish
              </li>
            </ul>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/nyc-listing-agent-article-2.jpg"
                alt="NYC skyline with residential buildings and Manhattan high-rise apartments in New York City"
                loading="lazy"
              />
            </div>
            <h2>Our Top 10 NYC Listing Agent Specialties</h2>
            <ol className="tf-olist">
              <li>
                <strong>Comparative Market Analysis:</strong> Accurate pricing based on recent sales data and condition
                adjustments - the foundation of a good sale. A CMA can help you avoid the risk of overpricing or
                underpricing your home, which could cost you a small fortune.
              </li>
              <li>
                <strong>Professional Photography &amp; Video:</strong> High-quality images that really make your home
                stand out - and generate maximum buyer interest
              </li>
              <li>
                <strong>RLS Listing Management:</strong> We expose your home to as many potential buyers as possible
                through all the major real estate websites and relevant platforms. Typically, we split the commission
                with the buyer&apos;s agent, but that can be negotiated in advance.
              </li>
              <li>
                <strong>Home Staging Consultation:</strong> Expert advice to enhance your home&apos;s appeal. The stats
                show that homes that are staged for sale sell for 7-9% above list price on average, based on{" "}
                <a
                  href="https://www.nar.realtor/research-and-statistics/research-reports/profile-of-home-staging"
                  className="tf-guide-link"
                >
                  home staging impact on sale price
                </a>{" "}
                research - and they tend to sell a lot faster too
              </li>
              <li>
                <strong>Open House Coordination:</strong> We work with you to schedule and promote your open house to
                get as many people through the door as possible - and to create a sense of urgency
              </li>
              <li>
                <strong>Buyer Pre-qualification:</strong> We verify the financing of potential buyers before accepting
                offers. This is especially important for co-ops. Listing agents pre-screen potential buyers to prevent
                failed deals - which can be a real time-waster
              </li>
              <li>
                <strong>Contract Negotiation:</strong> We work hard to secure the best possible terms - and the highest
                sale price - through skilled deal-making that protects your interests
              </li>
              <li>
                <strong>Market Timing Strategy:</strong> We time the listing of your home for the best possible results
                - taking into account seasonal trends, inventory and interest rates
              </li>
              <li>
                <strong>Legal Documentation:</strong> We take care of all the required paperwork - including
                disclosures, contracts and regulatory compliance. And we work closely with attorneys to make sure
                everything runs smoothly.
              </li>
              <li>
                <strong>Closing Coordination:</strong> We handle the transaction all the way through to the end,
                coordinating with attorneys, title companies and all parties involved to make sure everything goes
                smoothly
              </li>
            </ol>
            <h2>Local Market Knowledge</h2>
            <p>
              There&apos;s no substitute for a real estate agent with close knowledge of your local market. Agents who
              know the neighborhood like the back of their hand can accurately price your home by analyzing similar
              properties and current market trends. This expertise lets them identify and attract the most qualified
              potential buyers, helping your home stand out in a competitive market. A well-informed agent will keep you
              up-to-date on recent sales, buyer demand and neighborhood dynamics - helping you make informed decisions
              every step of the way. At the end of the day, local market knowledge is what gets your house priced right
              and sells for the best possible price.
            </p>
            <hr />
            <h2>Guarantees and Performance</h2>
            <p>
              When hiring a real estate agent, it&apos;s important to understand their performance standards and what
              you can expect throughout the process. A top-notch agent will provide a clear marketing plan outlining how
              they intend to get your property seen, handle showings, and negotiate with potential buyers. Instead of
              guarantees or flexible contracts, focus on their client reviews, references, and track record as reliable
              indicators of their effectiveness. Communication is key, and a good agent will keep you informed and
              involved throughout the selling process.
            </p>
            <hr />
            <h2>Red Flags and New Opportunities</h2>
            <p>
              As you start looking at real estate agents, keep an ear out for any red flags and be open to new
              opportunities. Warning signs include agents who are unresponsive, a bit too pushy or have a bad rep among
              past clients. On the other hand, the right agent will have a deep knowledge of the market, a big network
              of potential buyers and creative marketing ideas tailored to your property. Take the time to do some
              research, read what past clients have to say and compare the different agents approaches. By staying
              informed and open to new ideas, you can look after your interests, get the best possible price for your
              property and find a successful sale with the right agent by your side.
            </p>
            <h2>Our Home Selling Process</h2>
            <h3>Step 1: NYC Property Evaluation</h3>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/nyc-listing-agent-article-3.png"
                alt="Real estate agent reviewing property valuation checklist with home photos and market comparables for accurate home appraisal"
                loading="lazy"
              />
            </div>
            <p>
              The process starts with Stanley Montfort giving your property the once over to determine the best possible
              listing price. This involves:
            </p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />A close look at what similar homes have sold for in your area recently
              </li>
              <li>
                <span className="tf-dot" />A check on how many homes are on the market and what buyers are looking for
              </li>
              <li>
                <span className="tf-dot" />A look at the condition of your property and some thoughts on how you can
                make it shine
              </li>
              <li>
                <span className="tf-dot" />A chat about your timeline, goals and what you need to get out of selling
                your property, including reviewing your{" "}
                <a href="/whats-my-home-worth/" className="tf-guide-link">
                  home value in NYC
                </a>{" "}
                before setting a final listing strategy
              </li>
            </ul>
            <p>
              Stanley does a thorough market analysis to get a feel for current market conditions and comes up with a
              pricing strategy thatll ensure your property attracts the right buyers from the get-go, minimising the
              risk of getting lowball offers from investors.
            </p>
            <h3>Step 2: Marketing Strategy Development</h3>
            <p>Next up, Stanley will develop a marketing plan thatll really showcase your property to the right people:</p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />We use professional grade photography and video production to make your
                property shine
              </li>
              <li>
                <span className="tf-dot" />Well help with staging - either a consultation or a full staging service - to
                make your property look its best
              </li>
              <li>
                <span className="tf-dot" />We write a top-notch listing description that highlights the best bits of
                your property
              </li>
              <li>
                <span className="tf-dot" />We choose the right marketing channels to reach the buyers who are looking
                for a property like yours
              </li>
            </ul>
            <h3>Step 3: Active Marketing and Showings</h3>
            <p>Once weve agreed on a price, Stanley and the team get to work on promoting your property:</p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />We list your property and share the listing across a range of platforms
              </li>
              <li>
                <span className="tf-dot" />We conduct open houses and arrange viewings with potential buyers
              </li>
              <li>
                <span className="tf-dot" />We keep your property looking fresh and attractive with targeted marketing
                strategies
              </li>
            </ul>
            <p>Your property will be live and attracting buyers in no time:</p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />We get your property listed on the RLS and run a top-notch marketing campaign
                across multiple platforms
              </li>
              <li>
                <span className="tf-dot" />We coordinate viewings and open houses with the right buyers
              </li>
              <li>
                <span className="tf-dot" />We keep you in the loop on how the market is responding to your property
              </li>
            </ul>
            <h3>Step 4: Offer Management and Closing</h3>
            <p>Stanley will guide you through the final stages of the sale:</p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />Well negotiate the terms of any offers you receive
              </li>
              <li>
                <span className="tf-dot" />Were on top of any inspections, appraisals and other conditions that come up
              </li>
              <li>
                <span className="tf-dot" />We work with your lawyer, lender and title company to make sure everything
                runs smoothly
              </li>
              <li>
                <span className="tf-dot" />We see the sale through to a successful close, following best practices in
                the{" "}
                <a href="https://dos.ny.gov/real-estate-broker" className="tf-guide-link">
                  real estate closing process in New York
                </a>
              </li>
            </ul>
            <hr />
            <h2>Client Success Stories</h2>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  We tried a few different realtors before we met Stan and none of them really knew the townhouse market
                  like he did. He brought in more potential buyers than all the other agents combined and got the sale
                  sorted. Stan is a total pro and a real leader in his field - I wouldn&apos;t hesitate to recommend
                  him.
                </strong>
              </p>
              <p>
                <strong>– Barry G, Brownstone owner</strong>
              </p>
            </blockquote>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  Stanley sold my townhouse in a tough market, he was a total pro from start to finish - extremely
                  professional and very hard working. He kept me in the loop on everything and gave me plenty of notice
                  for viewings. I&apos;m glad we went with him
                </strong>
              </p>
              <p>
                <strong>– Joseph W, Townhouse owner</strong>
              </p>
            </blockquote>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  Stanley is just the best, he made sure my listing got a lot of foot traffic and that the viewings were
                  of high quality. We had a few bumps in the road but he just kept on going - in the end we got the sale
                  and I would definitely use him again
                </strong>
              </p>
              <p>
                <strong>– Eboni W, Condo owner</strong>
              </p>
              <p>
                Explore more real results through our{" "}
                <a href="/success-stories/" className="tf-guide-link">
                  <strong>NYC real estate success stories.</strong>
                </a>
              </p>
            </blockquote>
            <hr />
            <h2>Frequently Asked Questions</h2>
            <FaqAccordion>
              <FaqItem question={<>How much commission do listing agents charge?</>}>
              <p>
                Typically, listing agent commission can range up to 6% of the sale price, which is usually split between
                the listing agent and the buyers agent. Commission is negotiable and reflects the range of services
                provided - from professional marketing to expert negotiation and transaction management. Stanley is
                upfront about costs and the value you get at every price point.
              </p>
              </FaqItem>
              <FaqItem question={<>How long does it take to sell a home?</>}>
              <p>
                The time it takes for a house to sell can vary wildly depending on market conditions, what kind of
                property its a and how you&apos;ve priced it. Generally homes that are staged to sell do better than those
                that aren&apos;t - we see condos in top shape going under contract in a little under a month and closing
                up to 2 months later, while brownstones the take longer to sell - you&apos;re looking at 30-60 days to
                accept an offer and then another 45-60 days to actually close. And then there are the properties that just
                aren&apos;t priced right - those tend to hang around a lot longer. Stanley Montfort is going to be able to
                give you a pretty good idea of what you should expect in your neighborhood - he stays on top of the local
                data, so he can give you some solid numbers.
              </p>
              </FaqItem>
              <FaqItem question={<>Do you actually offer staging services?</>}>
              <p>
                Actually yes we do - but we do it a bit differently than most real estate agents. While Stanley Montfort
                wont be staging your house himself, he has some personal recommendations for people and companies that
                he&apos;s worked with before that can help get your place looking it&apos;s absolute best. We also connect
                you with a trusted list of pre-screened vendors who can make sure your home looks as attractive to
                potential buyers as possible. In the end, that&apos;s going to help you sell your house for more money -
                and staging can actually yield an extra 5-15% on top of your asking price - it&apos;s a pretty solid
                investment if you ask me.
              </p>
              </FaqItem>
            </FaqAccordion>
            <hr />
            <h2>Get In Touch with Stanley Montfort</h2>
            <h3>Ready to Sell Your Property</h3>
            <p>
              You want to get top dollar for your house - we get it. Stanley Montfort has the local knowledge, the
              marketing muscle and the negotiation skills to get you the results that truly matter.
            </p>
            <div className="tf-cta-card">
              <p>
                <strong>Phone:</strong> 1-646-970-1078{" "}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:sm@montfortre.com" className="tf-cta-mail">
                  sm@montfortre.com
                </a>{" "}
              </p>
              <p>
                <strong>Address:</strong> 8 West 126th Street, New York NY 10027
              </p>
              <p>
                *Scheduling a no-strings-attached consultation and market analysis is as easy as picking up the phone.
                Stanley will give it to you straight - no sugarcoating - just some honest to goodness real estate advice
                from someone who knows his stuff.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-related" data-screen-label="Related listing services">
        <div className="tf-related-inner">
          <div className="tf-related-head" data-reveal="">
            <h2>Our Complete NYC Buyer’s Agent Service</h2>
          </div>
          <div className="tf-related-grid">
            {RELATED_SERVICES.map((item) => (
              <a key={item.href} data-reveal="" href={item.href} className="tf-related-card">
                <h2>{item.title}</h2>
                <img src={item.image} alt={item.alt} loading="lazy" />
                <p>{item.copy}</p>
                <span className="tf-related-more">Learn More</span>
              </a>
            ))}
          </div>
        </div>
      </section>

<ResourcesSection
        title="Featured NYC Home Buying Resources"
        subtitle="Explore expert guides, neighborhood insights, market reports, and buyer-focused resources designed to help you navigate the New York City real estate market with confidence."
        showCategory={false}
        showCta={false}
        articles={NEWS_ARTICLES}
      />
      <ContactSection />
    </>
  );
}
