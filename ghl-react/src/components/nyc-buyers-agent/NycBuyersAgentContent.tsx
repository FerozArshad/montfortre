import ContactSection from "../shared/ContactSection";
import PromisesBar from "../shared/PromisesBar";
import ResourcesSection from "../shared/ResourcesSection";
import "../../styles/two-family-page.css";
import "../../styles/nyc-buyers-agent-page.css";


const RELATED_SERVICES = [
  {
    href: "/buying-a-condo-in-nyc/",
    image: "/redesign-assets/services/buying-a-condo-nyc.png",
    alt: "Buying a condo NYC",
    title: "Buying a Condo in NYC",
    copy: "Expert guidance, market insights, and strategic representation for condo buyers",
  },
  {
    href: "/buying-a-brownstone-in-nyc/",
    image: "/redesign-assets/services/buying-a-brownstone-nyc.png",
    alt: "Buying a Brownstone NYC",
    title: "Buying a Brownstone in NYC",
    copy: "Expert guidance for buying iconic NYC brownstones.",
  },
  {
    href: "/buying-sro-in-nyc/",
    image: "/redesign-assets/services/buying-sro-nyc.png",
    alt: "SRO For Sale",
    title: "Buying SRO in NYC",
    copy: "Affordable housing, investment value, and specialized NYC expertise",
  },
  {
    href: "/co-ownership-buying-in-nyc/",
    image: "/redesign-assets/services/co-ownership-buying-nyc.png",
    alt: "Coownership buying",
    title: "Co-Ownership Buying in NYC",
    copy: "Shared ownership, lower costs, and greater buying power.",
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

export default function NycBuyersAgentContent() {
  return (
    <>
      <section className="tf-hero" data-screen-label="Service hero">
        <div className="tf-hero-ring" />
        <div className="tf-hero-inner">
          <div data-reveal="">
            <h1>NYC Buyer&apos;s Realtor Services — Expert Representation for Every Purchase</h1>
            <p className="tf-hero-lead">
              We&apos;ll help you make a <strong>confident real estate purchase</strong> by identifying hidden risks,
              negotiating favorable terms, and ensuring <strong>you buy the right property</strong> at the right price.
            </p>
            <div className="tf-hero-ctas">
              <a href="tel:+1-646-970-1078" className="tf-hero-tel">
                Call 1-(646)-970-1078
              </a>
              <a href="https://calendly.com/montfort" className="tf-hero-book">
                Schedule A Consultation
              </a>
            </div>
          </div>
          <div className="tf-hero-media" data-reveal="">
            <div className="tf-hero-frame">
              <img src="/redesign-assets/services/nyc-buyers-agent.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <PromisesBar variant="light" screenLabel="Client promises" />

      <section className="tf-guide" data-screen-label="Guide">
        <div className="tf-guide-inner">
          <div data-reveal="">
            <h1>Expert Buyer&apos;s Agent: Real Estate Representation for Home Buyers in NYC</h1>
            <div className="tf-guide-rule" />
            <h2>
              Professional Guidance for <a href="/" className="tf-guide-link">Buying a Home in NYC</a>
            </h2>
            <p>
              A buyer’s agent is a licensed real estate pro who works exclusively for you, getting you the best deal
              possible in this crazy NYC market. Unlike a listing agent (commonly referred to as a seller&apos;s agent)
              – who owes their loyalty to the seller – your dedicated buyer’s agent will fight for you every step of the
              way. They’re like an insurance policy for your home buying dreams, providing exclusive and loyal
              representation to ensure your interests are always prioritized.
            </p>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/nyc-buyers-agent-article-1.jpg"
                alt="Real estate professionals reviewing NYC property data and market analytics on a laptop during a client meeting in a modern office"
                loading="lazy"
              />
            </div>
            <p>
              NYC has all sorts of unique challenges: co-op boards that can make or break a deal, competitive markets
              where one little mistake can cost you, and neighbourhoods that change overnight. With an experienced agent
              on your side, you get the benefit of their expert knowledge, market savvy, and a ton of useful
              connections. The agent represents your best interests at every stage, with legal and ethical obligations
              to advocate solely for you throughout the transaction.
            </p>
            <p>
              Co-ops are no joke – with rules, regulations and hoops to jump through. Condos can be just as tricky –
              with surprise special assessments or tricky association rules. Brownstones, meanwhile, often come with
              headaches like unresolved building violations or stubborn tenants. A good buyer’s agent knows how to
              navigate all of these potential pitfalls, so you can buy with confidence.
            </p>
            <p>
              <a href="/harlem-brownstone-q2-2024-market-report/" className="tf-guide-link">
                NYC real estate values can shift overnight
              </a>{" "}
              – making local expertise essential. And let’s not forget the bidding wars and complex contingencies that
              come with buying in this city. Having an experienced agent can make all the difference in securing the
              right home and navigating the NYC market successfully.
            </p>
            <p>
              <strong>CTA Button: Book Your Buyer Consult Today and Get the Home You Want!</strong>
            </p>
            <h2>Why You Need a Buyer’s Agent in NYC</h2>
            <p>
              Most people buying a home in New York City know that doing it alone is a serious disadvantage. With nearly
              9 out of 10 buyers nationwide working with an agent,the number in NYC is probably even higher due to the
              city’s complex regulations and super-high transaction values, as reflected in current{" "}
              <a href="https://www.zillow.com/research/" className="tf-guide-link">
                New York real estate market data
              </a>
              .
            </p>
            <p>
              The home buying process involves multiple steps and professionals—including mortgage brokers, inspectors,
              attorneys, and real estate agents—making expert guidance absolutely essential.
            </p>
            <p>So what do you get when you work with a buyer’s agent?</p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />
                <strong>Market Smarts:</strong> Deep knowledge of neighbourhood trends, fair market value and
                property-specific factors like common charges and co-op financial health.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Negotiating Power:</strong> Skilled advocacy backed by strong negotiation skills to negotiate
                favorable terms, potentially saving you tens of thousands on the purchase price and securing the best
                deal conditions.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Access to All the Good Stuff:</strong>
                <a href="/current-listings/" className="tf-guide-link">
                  Full MLS access, plus connections to off-market properties
                </a>{" "}
                that never appear on public listings. A good agent will help you find properties efficiently, guide you
                to the right property that matches your needs and budget, and get you access to real-time listings.
                They’ll also hook you up with their extensive network of industry pros—so you can get trusted
                recommendations and streamline the process.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Paperwork Wizardry:</strong> Handling complex purchase contracts, coordinating with real estate
                lawyers, and making sure you meet every single legal requirement.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Cost Saving Strategies:</strong> Experienced buyer’s agents know how to save you money—not just
                on the purchase price. They can help you negotiate seller credits to offset closing costs, structure
                deals to maximize financial benefits and even get you a better mortgage deal by handling CEMA
                transactions. These strategies can add up to a serious cost savings.
              </li>
            </ul>
            <p>
              Working with a pro ensures your interests stay top priority from your first showing to closing day, with
              your buyer’s agent serving as your trusted advisor throughout the journey.
            </p>
            <h2>
              <a
                href="/the-ultimate-guide-to-finding-the-perfect-upper-west-side-real-estate-agent/"
                className="tf-guide-link"
              >
                What to Look for in a NYC Buyer’s Agent
              </a>
            </h2>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/nyc-buyers-agent-article-2.jpg"
                alt="NYC real estate investment planning with house model, architectural plans, and financial savings concept for property buyers"
                loading="lazy"
              />
            </div>
            <p>
              Choosing the right buyer’s agent is a super important step in the home buying process—especially in a
              market as complex as NYC. It’s crucial to select an experienced buyer&apos;s agent with a proven track
              record in successful real estate transactions, particularly within your target neighborhoods, building
              types, or price ranges. You want someone who knows this city inside and out—who’s familiar with co-ops,
              condos, brownstones, neighborhood trends, and off-market properties, and understands{" "}
              <a href="https://dos.ny.gov/" className="tf-guide-link">
                NYC property regulations and co-op rules
              </a>
              . The best agents will give you personalized service—answering your questions, providing strategic advice,
              and getting to know you as a buyer.
            </p>
            <p>
              Look for someone who’s only working for you—not both the buyer and the seller in the same deal. While dual
              agency is legal in NYC with the proper disclosure, it can offer a streamlined experience by having one
              agent familiar with both sides of the transaction. Especially in off-market deals, dual agency is more
              common—because the property isn’t on the public listings. Understanding this dynamic helps you make
              informed decisions about your representation—and ensures your best interests are protected at every stage.
              You want someone with a track record, good communication skills, and a solid reputation for integrity.
              Before committing to a buyer&apos;s agent, it&apos;s advisable to interview them to ensure they&apos;re a
              good fit for your needs, including their communication style and availability. Their local expertise and
              deep knowledge will help you find the best homes, and navigate the complexities of co-op rules, condo
              regulations, and brownstone headaches.
            </p>
            <p>
              Many experienced buyer&apos;s agents have a strong network and can connect you with other professionals
              and other real estate professionals, such as mortgage brokers, attorneys, inspectors, and movers, to help
              streamline your transaction and provide comprehensive support.
            </p>
            <p>
              In the end, the right buyer’s agent is like your own personal home buying advisor—guiding you through the
              process with dedication, professionalism, and a whole lot of TLC.
            </p>
            <h2>Finding and Hiring a Trustworthy NYC Buyer’s Agent</h2>
            <p>
              Finding the right agent can be the difference between a smooth &amp; stressful home buying journey.{" "}
              <a href="/harlem-realtor/" className="tf-guide-link">
                Start by asking friends, family or past clients
              </a>{" "}
              for recommendations - these people have firsthand experience of working with agents who really know the
              New York City market inside out. Doing some online research can also be a great way to find out which
              agents have the skills and local knowledge to help you get the best deal on your dream home.
            </p>
            <p>
              When you start interviewing potential agents, ask them for their experience with properties that are
              similar to what you’re after. You’ll also want to ask about their approach to the buying process, and how
              they charge—including how the buyer&apos;s agent commission works. Agent&apos;s compensation can be
              structured as a flat fee or a percentage of the purchase price, and it&apos;s important to understand
              these details before signing an agreement. The buyer&apos;s agent commission is negotiable and should be
              discussed upfront, including who is responsible for paying it—whether it&apos;s covered by the seller, the
              buyer, or split in another way. An honest agent will be more than happy to go over their fee structure
              with you and make sure you know exactly what you’re getting for your money. Transparency about costs is
              key, so you can budget properly and avoid any nasty surprises down the line. And make sure they’ll put
              everything in writing—a clear, signed agreement that outlines their duties to you as their client is a
              must.
            </p>
            <p>
              A great agent will help you figure out a fair price for the property, negotiate a good deal, and be there
              every step of the way to make the whole home buying process as painless as possible. With the right agent
              on your side, you’ll feel confident and in control—and you’ll be able to find the perfect home without
              getting bogged down in all the complexities of the New York real estate market.
            </p>
            <h2>Stanley Montfort’s Buyer’s Agent Services</h2>
            <h3>First-Time Home Buyers</h3>
            <p>
              Buying a home in New York City is a whole different ball game compared to anywhere else - especially for
              first-time buyers. You need to understand the difference between co-ops and condos, what the board
              approval process is like, and all the other local rules and regulations that can catch you out. Stanley
              Montfort explains in simple terms how these work, and points out the special loan programs that can make
              owning a home in NYC more affordable. That includes first-time buyer assistance programs, down payment
              help,{" "}
              <a href="/mortgage-calculator/" className="tf-guide-link">
                and mortgages that are tailored to local buyers
              </a>
              .
            </p>
            <h3>Investment Property Buyers</h3>
            <p>
              For people who are looking to make money from their property through rental income or by flipping houses,
              Stanley Montfort offers a different level of expertise. He&apos;ll give you detailed analysis of the
              potential return on investment, including cap rates, vacancy rates, and trends in the local market,
              especially when reviewing broader{" "}
              <a href="https://www.redfin.com/news/" className="tf-guide-link">
                New York City housing market trends.
              </a>
            </p>
            <h3>Co-Ownership Buyers</h3>
            <p>
              <a href="/co-ownership-advantages-and-disadvantages-in-nyc/" className="tf-guide-link">
                Co-owning a property is a complex business
              </a>
              - you&apos;ll need someone with the knowledge and expertise to make it work for you. Stanley can help you
              set up a co-ownership agreement, find financing options, and come up with a strategy for getting out if
              things don’t work out.
            </p>
            <hr />
            <h2>Stanley Montfort’s Top 10 Buyer’s Agent Services</h2>
            <ol className="tf-olist">
              <li>
                <strong>property search and identification:</strong> We’ll do a custom search of all properties that
                match your specific needs in the local market, including exclusive access to the multiple listing
                service (MLS) for the most current and comprehensive listings.
              </li>
              <li>
                <strong>market analysis and comps:</strong> we’ll give you a detailed analysis of fair market value so
                you can make informed decisions about every offer
              </li>
              <li>
                <strong>showing coordination:</strong> we’ll schedule private viewings at a time that suits you and be
                there to help you view each property
              </li>
              <li>
                <strong>offer strategy and submission:</strong> We’ll put together a competitive offer that takes into
                account the current market conditions and what the seller is likely to do
              </li>
              <li>
                <strong>contract negotiation:</strong> We’ll negotiate the sale price, any conditions and terms on your
                behalf to ensure you get the best deal
              </li>
              <li>
                <strong>inspection management:</strong> We’ll coordinate the home inspectors and make sure you understand
                any issues that come up
              </li>
              <li>
                <strong>mortgage and financing support:</strong> we can introduce you to trusted lenders who know the
                local market and can help you get the best deal based on current{" "}
                <a href="https://www.bankrate.com/mortgages/" className="tf-guide-link">
                  mortgage rates in New York City
                </a>
              </li>
              <li>
                <strong>co-op board package preparation:</strong> We’ll help you compile, audit, and present a complete
                board package—including detailed financial statements, tax returns, and reference letters—to ensure a
                smooth approval process.
              </li>
              <li>
                <strong>closing coordination:</strong> we’ll take care of the final walk-through, all the communications
                with the title company and make sure everything goes smoothly on the day of closing
              </li>
              <li>
                <strong>post-purchase support:</strong> and even after you’ve closed on the property we’ll still be there
                to help you with any questions or issues that come up
              </li>
            </ol>
            <div className="tf-fig">
              <img
                src="/redesign-assets/services/nyc-buyers-agent-article-3.jpg"
                alt="NYC mortgage concept with real estate agent holding house model and calculating home loan costs on a calculator"
                loading="lazy"
              />
            </div>
            <h2>Stanley Montfort’s Buyer Representation Process</h2>
            <h3>Step 1: Initial Consultation</h3>
            <p>
              Stanley will talk you through your home buying goals &amp; budget and find out which neighborhoods in NYC
              are the best fit for you. You&apos;ll get a clear rundown of the current market conditions, he&apos;ll
              explain exactly how he works and establish a written agreement outlining all the services he&apos;ll
              provide for you - a bit of paperwork, but completely necessary to protect both you and the agent.
            </p>
            <h3>Step 2: Property Search and Showings</h3>
            <p>
              With a clear idea of what you’re after, Stanley will create a custom search and arrange private showings
              tailored to your schedule and preferences. During these exclusive tours, he’ll give you the lowdown on
              each property, its strengths and its weaknesses.
            </p>
            <h3>Step 3: Offer Preparation and Negotiation</h3>
            <p>
              Using all the market analysis at his fingertips, Stanley will come up with a solid offer strategy that’s
              designed to get you the best deal. He’ll be the one making all the offers and negotiations on your behalf,
              handling any counter-offers and fighting for the best terms - price, closing date, conditions - to make
              sure you get the best possible deal.### Step 4: Due Diligence and Inspection
            </p>
            <p>
              Once the offer is accepted, Stanley will guide you through the due diligence phase - the usually frenetic
              process of wrapping up all those loose ends. During this time, he&apos;ll be working closely with your
              real estate attorney to review documents, examine title reports, and even coordinating professional home
              inspections to uncover any hidden downsides. Due diligence is all about making sure you have all your
              ducks in a row, and its requirements can vary depending on the type of property you&apos;re after:
            </p>
            <ul className="tf-list">
              <li>
                <span className="tf-dot" />
                <strong>Condos:</strong> When it comes to condos, Stanley will be poring over the condo association&apos;s
                financials, meeting minutes, and rules to make sure the building is well-managed and in good financial
                shape. He&apos;ll also arrange for inspections that cover everything from the unit&apos;s condition to
                the common areas and amenities.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Co-ops:</strong> Buying a co-op is a bit more complicated, since you&apos;ll need to dig into
                the co-op board&apos;s financial health, proprietary lease terms, and house rules. Stanley will be with
                you every step of the way, helping you put together a comprehensive package the co-op board needs in
                order to approve your application. That package includes financial documents, personal references, and
                getting you ready for some interviews. Co-op inspections usually focus on the unit&apos;s condition and
                any building-wide issues.
              </li>
              <li>
                <span className="tf-dot" />
                <strong>Brownstones:</strong> With brownstones and other single-family homes, the due diligence process
                is even more in-depth. Stanley will arrange for comprehensive home inspections, figure out if the
                property is a landmark, assess any potential renovation or repair needs, and even check on the status of
                any tenants. He&apos;ll also go over the overall condition of the building - including any outstanding
                violations or planned assessments - and make sure that all the title searches are clear of any liens or
                encumbrances.
              </li>
            </ul>
            <p>
              Throughout this whole process, Stanley will be with you every step of the way, making sure you have all
              the information you need to make an informed decision and address any concerns before moving forward.
            </p>
            <h3>Step 5: Contract to Closing</h3>
            <p>
              From the moment you sign the contract to the final closing, Stanley is the one who&apos;s got everything
              under control. He&apos;ll take care of inspection coordination, make sure the appraisal goes smoothly, get
              your financing in order - and that&apos;s just the beginning. He&apos;ll also be arranging for other
              vendors to have access to the property, and keeping everything moving along at a good pace. On top of all
              that, he&apos;ll be working closely with real estate attorneys and other pros to make sure nothing slips
              through the cracks.
            </p>
            <hr />
            <h2>Client Success Stories</h2>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  <em>
                    “Stan was great - really knowledgeable about different areas and always available when we needed to
                    reach him. He’s honest, transparent, and made our buying process super easy. We&apos;d definitely
                    work with him again.”
                  </em>
                </strong>
              </p>
              <p>
                <strong>
                  <em>– Christine S., Investment Buyer</em>
                </strong>
              </p>
            </blockquote>
            <blockquote className="tf-quote">
              <p>
                <strong>
                  <em>
                    “Stanley was an absolutely tremendous resource on our journey - showed us loads of properties till
                    we got a feel for what we were looking for. Through Stanley, we got a good handle on what was good
                    and bad, what you can expect at what price, and what to look out for. Stanley was a steady guiding
                    hand especially when we started narrowing down our list to the one we ended up finding. We still
                    turn to Stanley as a resource due to his vast network of contacts - he’s still a high-leverage
                    resource as we enjoy our brownstone, and still is a high leverage resource during our journey to our
                    brownstone.
                  </em>
                </strong>
              </p>
              <p>
                <strong>
                  <em>Thanks Stanley!!!</em>
                </strong>
              </p>
              <p>
                <strong>
                  <em>– Syed A., First Time Home Buyer</em>
                </strong>
              </p>
            </blockquote>
            <hr />
            <h2>Frequently Asked Questions</h2>
            <h3>How much does a buyer’s agent cost anyway?</h3>
            <p>
              Following that August 17th NAR settlement, buyer’s agent commission structures changed pretty
              dramatically. Previously, sellers would typically pay 5-6% total commission - split between the listing
              agent and buyer’s agent. Now compensation offers are no longer required in RLS entries, and buyers have to
              have a written agreement with their agent which spells out the fee structure before they can look at
              homes.
            </p>
            <p>
              Well, currently the buyer’s agent commission is usually around 2.5-3% of the purchase price, though
              that&apos;s negotiable. Sometimes the home seller offers compensation, sometimes the buyer has to pay
              their agent directly, and sometimes they negotiate credits. From Stanley&apos;s experience, 99% of sellers
              in NYC are still offering a buy side commission. So buyers rarely have to worry about paying this fee
              themselves. What you really want to do is discuss your agent&apos;s compensation upfront - so you can
              budget accurately for all your closing costs.
            </p>
            <h3>How is a buyer’s agent different from a listing agent?</h3>
            <p>
              A listing agent—the seller&apos;s agent or sales agent—is representing the home seller, and is focused on
              getting them the highest possible sale price. In contrast your buyer’s agent owes you fiduciary duty under
              New York Real Property Law, which means they have to be loyal to you, keep your business confidential,
              give you full disclosure of any material facts, and exercise reasonable care. This is a big deal - it&apos;s
              a serious commitment to putting your needs first.
            </p>
            <p>
              Dual agency—where one agent is representing both parties in the same transaction—is legal in New York, but
              it does create some conflicts of interest. While it can work out in some cases, especially when accessing
              off market deals that aren&apos;t available otherwise - many buyers still prefer to work with a dedicated
              agent who is legally bound to only represent their interests.
            </p>
            <h3>Do you really need a buyer’s agent for NYC real estate?</h3>
            <p>
              Absolutely many buyers who try to work directly with selling agents discover they&apos;re in a tough spot
              from the word go. A listing agent&apos;s number one job is to get the best possible deal for the seller -
              and that means you&apos;re not getting the kind of help you really need. Without someone on your side,
              you&apos;re flying blind, with no one to turn to when you&apos;re trying to figure out if the place
              you&apos;re looking at is worth the price tag - or if there are some major issues lurking that you need to
              know about. Plus you&apos;re missing out on someone to help you craft an offer that&apos;s competitive and
              likely to get accepted - and then of course there&apos;s all the paperwork and red tape of dealing with
              the co-op board.
            </p>
            <p>
              For anyone new to the game - first time buyer or seasoned pro who&apos;s not familiar with the quirks of
              New York&apos;s market - an experienced buyer&apos;s agent can be a lifesaver. They&apos;ve seen it all
              and can give you advice that&apos;s worked for their clients before. And it&apos;s pretty common for
              people to find themselves working with the same agent again and again, especially in a market as tough as
              New York&apos;s.
            </p>
            <hr />
            <h2>Get Started with Your NYC Home Search Now</h2>
            <h3>Get The Personal Touch from Stanley Montfort - Your Buyer&apos;s Agent</h3>
            <p>
              Whether you&apos;re new to the Upper West Side, looking to buy a bunch of multi-families in Brooklyn or
              just plain glad to be moving to Manhattan and need a co-op, finding your perfect home can be a bit of a
              nightmare. You need someone who knows the ropes to guide you.
            </p>
            <p>
              Stanley Montfort - that&apos;s me - has a deep understanding of what makes New York City tick. I know all
              the ins and outs of each neighborhood - and all the little things that can make or break a sale. You
              won&apos;t get lost in a sea of clients with me - I focus on you and your search, so you get the home you
              really want.
            </p>
            <div className="tf-cta-card">
              <div className="tf-cta-actions">
                <a href="tel:+1-646-970-1078" className="tf-cta-tel">
                  Call 1-(646)-970-1078
                </a>
                <a href="https://calendly.com/montfort" className="tf-cta-book">
                  Schedule A Consultation
                </a>
              </div>
              <div className="tf-cta-meta">
                8 West 126th Street, New York NY 10027 ·{" "}
                <a href="mailto:sm@montfortre.com" className="tf-cta-mail">
                  sm@montfortre.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-related" data-screen-label="Related buyer services">
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
        title="Recent News & Realtor Advice"
        subtitle="Stay in the loop on the latest events, news, & happenings in and around our community!"
        showCategory={false}
        showCta={false}
        articles={NEWS_ARTICLES}
      />
      <ContactSection />
    </>
  );
}
