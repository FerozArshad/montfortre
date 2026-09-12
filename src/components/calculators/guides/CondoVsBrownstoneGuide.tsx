import { FaqAccordion, FaqItem } from "../../shared/FaqAccordion";

export function CondoVsBrownstoneIntro() {
  return (
    <>
      <p className="calc-intro-kicker">Condo vs. brownstone</p>
      <h2>What if the more expensive property actually costs you less each month?</h2>
      <p>
        A condo and a brownstone can have dramatically different ownership economics. With a 2–4 unit property, rent
        from the additional apartments can help pay your mortgage while you build equity in the entire building—not
        just a single apartment. Enter your numbers below to compare true monthly cost and long-term equity.
      </p>
    </>
  );
}

export function CondoVsBrownstoneGuide() {
  return (
    <>
      <div data-reveal="">
        <h2>Don&apos;t Compare Purchase Price. Compare What You Actually Pay.</h2>
        <div className="tf-guide-rule" />
        <p>
          List price alone can be misleading. A brownstone may cost more up front, yet after collecting net rent from
          the other units your <strong>effective monthly housing cost</strong> can be lower than a condo with high
          common charges. Conversely, weak rents or heavy operating costs can favor the condo. The calculator on this
          page is built to surface that tradeoff clearly.
        </p>

        <h2>Why NYC Buyers Often Overlook the Brownstone Option</h2>
        <div className="calc-insight-grid calc-insight-grid--4">
          <article className="calc-insight-card">
            <h3>Rental Income</h3>
            <p>
              Your tenants help offset mortgage principal, interest, property taxes, building insurance, and operating
              expenses.
            </p>
          </article>
          <article className="calc-insight-card">
            <h3>Larger Asset</h3>
            <p>
              Instead of building equity in a single apartment, you own the entire building, land, and lot—creating a
              larger base for appreciation.
            </p>
          </article>
          <article className="calc-insight-card">
            <h3>Appreciation</h3>
            <p>
              When the property appreciates, that growth compounds on the total value of the multi-family structure,
              not just one unit.
            </p>
          </article>
          <article className="calc-insight-card">
            <h3>More Control</h3>
            <p>
              There are generally no condo common charges or condo-board restrictions controlling your monthly budget
              the way co-ops and condos often do.
            </p>
          </article>
        </div>

        <h2>What the Side-by-Side Comparison Shows</h2>
        <p>
          <strong>True monthly cost:</strong> For the condo, add mortgage P&amp;I, taxes, common charges / HOA,
          insurance, and a maintenance reserve. For the brownstone, add P&amp;I, taxes, building insurance, maintenance
          reserve, and owner-paid utilities—then subtract net rental income after vacancy.
        </p>
        <p>
          <strong>Long-term equity:</strong> Switch the horizon between 5 and 10 years to compare projected property
          value, remaining mortgage, principal paid down, appreciation, cumulative net rent (brownstone), and owner
          equity. A higher monthly payment can still win if it builds substantially more equity over time.
        </p>
        <p>
          <strong>Rental leverage:</strong> The tenant-coverage percentage estimates how much of the brownstone&apos;s
          carrying costs rent can offset. Even partial coverage changes the affordability conversation versus a condo
          where you pay 100% of carrying costs yourself.
        </p>

        <h2>How to Use These Numbers</h2>
        <ul>
          <li>Match purchase prices and down payments to neighborhoods you are actually considering.</li>
          <li>Be conservative on rents and include a vacancy allowance.</li>
          <li>Raise brownstone maintenance reserves if the building needs work—1% of value per year is a common starting point.</li>
          <li>
            If the condo wins on monthly cost, test higher brownstone rents or a larger down payment to see whether the
            long-term wealth gap closes.
          </li>
        </ul>

        <h2>Want Brownstones Where the Numbers Actually Work?</h2>
        <p>
          We specialize in helping NYC buyers identify 2–4 unit townhouses where rental income can meaningfully offset
          the true cost of ownership. Share your calculator assumptions and we will help you find properties that fit
          the math—not just the listing photos.
        </p>
        <p>
          <a href="https://calendly.com/montfort" className="tf-guide-link">
            Book a strategy call
          </a>{" "}
          or{" "}
          <a href="/harlem-brownstones-for-sale/" className="tf-guide-link">
            see available brownstones
          </a>
          .
        </p>

        <h2>Condo vs. Brownstone FAQ</h2>
        <FaqAccordion>
          <FaqItem question="Can a more expensive brownstone cost less per month than a condo?">
            <p>
              Yes. If net rent from the other units is strong enough, effective out-of-pocket cost can undercut a condo
              with high common charges—even when the brownstone&apos;s purchase price is higher.
            </p>
          </FaqItem>
          <FaqItem question="What costs does the condo side include?">
            <p>
              Mortgage principal &amp; interest, property taxes, common charges / HOA, homeowners insurance, and an
              annual maintenance reserve percentage converted to a monthly amount.
            </p>
          </FaqItem>
          <FaqItem question="What costs does the brownstone side include?">
            <p>
              Mortgage P&amp;I, taxes, building insurance, maintenance reserve, owner-paid utilities, then an offset
              for net rental income after vacancy. Closing costs and appreciation assumptions feed the equity
              projection.
            </p>
          </FaqItem>
          <FaqItem question="Is this investment advice?">
            <p>
              No. Results are educational estimates based on the assumptions you enter. Actual financing, rents,
              expenses, appreciation, and tax treatment vary. Consult mortgage, legal, tax, and financial professionals
              before buying.
            </p>
          </FaqItem>
        </FaqAccordion>

        <p className="calc-guide-disclaimer">
          This calculator is provided for educational and illustrative purposes only. Results are estimates based on
          the assumptions entered and are not a guarantee of future performance, property appreciation, rental income,
          financing terms, operating expenses, or investment returns.
        </p>
      </div>
    </>
  );
}
