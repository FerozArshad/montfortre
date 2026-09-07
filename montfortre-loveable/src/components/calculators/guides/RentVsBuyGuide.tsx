import { FaqAccordion, FaqItem } from "../../shared/FaqAccordion";

export function RentVsBuyIntro() {
  return (
    <>
      <p className="calc-intro-kicker">Rent vs. own</p>
      <h2>What does a 2–4 unit brownstone really cost after rent?</h2>
      <p>
        Owning a multi-unit NYC brownstone is not the same as renting a similar apartment. Tenant rent from the other
        units can offset a large share of your mortgage, taxes, insurance, and utilities—sometimes bringing your{" "}
        <strong>net out-of-pocket cost</strong> close to (or below) what you pay in rent today. Enter your numbers
        below to compare.
      </p>
    </>
  );
}

export function RentVsBuyGuide() {
  return (
    <>
      <div data-reveal="">
        <h2>How This Rent vs. Buy Calculator Works</h2>
        <div className="tf-guide-rule" />
        <p>
          The tool estimates your <strong>gross monthly carrying cost</strong> (mortgage principal &amp; interest,
          taxes, insurance, water, and common utilities), subtracts <strong>net rental income</strong> from the other
          apartments, and compares that net ownership cost to your current rent. It also shows illustrative Year-1
          rental-related tax deductions so you can see how ownership might look after a theoretical tax benefit.
        </p>

        <div className="calc-insight-grid">
          <article className="calc-insight-card">
            <h3>Net monthly cost</h3>
            <p>
              Your estimated out-of-pocket housing cost after collecting rent from the additional units—not the sticker
              mortgage payment alone.
            </p>
          </article>
          <article className="calc-insight-card">
            <h3>Rental income offset</h3>
            <p>
              Monthly cash flow from tenant apartments that can help pay principal, interest, taxes, insurance, and
              shared building costs.
            </p>
          </article>
          <article className="calc-insight-card">
            <h3>Year-1 tax deductions</h3>
            <p>
              Illustrative rental-portion deductions such as mortgage interest, property taxes, insurance, utilities,
              and straight-line depreciation (27.5 years for residential rental property).
            </p>
          </article>
        </div>

        <h2>Why 2–4 Unit Brownstones Change the Rent-vs-Buy Math</h2>
        <p>
          With a conventional condo or rental apartment, you pay 100% of housing costs yourself. With an owner-occupied
          2–4 family brownstone, renters help carry the building while you build equity in the entire structure and
          land—not just a single unit. That is why many NYC buyers discover that a higher purchase price can still
          produce a competitive monthly cost of living.
        </p>
        <ul>
          <li>
            <strong>First-time buyers:</strong> Purchasing a 3–4 unit property under $2M may open financing options
            with as little as about <strong>10% down</strong> in some programs—confirm eligibility with a lender.
          </li>
          <li>
            <strong>Rental-use percentage:</strong> Tax deductions are allocated to the rental portion of the building
            (for example ~67% on a 3-unit with one owner unit). The calculator lets you set that allocation.
          </li>
          <li>
            <strong>Land vs. building:</strong> Depreciation applies to the building, not land. A common default land
            allocation is about <strong>20%</strong>; your CPA may refine this with an appraisal.
          </li>
        </ul>

        <h2>Reading the Comparison</h2>
        <p>
          Focus on <strong>net cost to own vs. current rent</strong>, then glance at the illustrative after-tax
          ownership cost. The tax value figure applies your marginal bracket to estimated Year-1 rental deductions—it
          is <em>not</em> a guarantee of refunds or reduced withholding. Passive activity rules, personal vs. rental
          use, basis, and cost segregation can all change the real outcome.
        </p>

        <h2>Want a Brownstone That Works With Your Numbers?</h2>
        <p>
          Stanley Montfort specializes in helping NYC buyers evaluate 2–4 unit townhouses based on true net cost after
          rental income—not just list price. If the calculator shows ownership is close to your rent, the next step is
          finding buildings where the rents, condition, and financing actually support that outcome.
        </p>
        <p>
          <a href="https://calendly.com/montfort" className="tf-guide-link">
            Book a brownstone strategy call
          </a>{" "}
          or{" "}
          <a href="/harlem-brownstones-for-sale/" className="tf-guide-link">
            browse available brownstones
          </a>
          .
        </p>

        <h2>Rent vs. Buy FAQ</h2>
        <FaqAccordion>
          <FaqItem question="Does rental income always make buying cheaper than renting?">
            <p>
              No. It depends on purchase price, rate, down payment, taxes, insurance, vacancy, and achievable rents. The
              calculator shows when ownership&apos;s net out-of-pocket is lower, similar, or higher than your current
              rent.
            </p>
          </FaqItem>
          <FaqItem question="Are the tax savings guaranteed?">
            <p>
              No. Tax figures are educational estimates only. Actual deductions depend on how the IRS treats your
              rental activity, land allocation, personal use, and your overall tax return. Consult a CPA before relying
              on after-tax numbers.
            </p>
          </FaqItem>
          <FaqItem question="What down payment do I need for a 2–4 unit brownstone?">
            <p>
              Many buyers plan on 20%, but some first-time buyer programs for 3–4 unit homes under certain price caps
              may allow roughly 10% down. Lender guidelines, reserves, and debt-to-income still apply.
            </p>
          </FaqItem>
          <FaqItem question="Should I include vacancy in my rent assumptions?">
            <p>
              Yes. Even strong buildings have turnover. Building a modest vacancy allowance (for example 5%) keeps the
              net-cost estimate more realistic.
            </p>
          </FaqItem>
        </FaqAccordion>

        <p className="calc-guide-disclaimer">
          <strong>Tax disclaimer:</strong> Educational and illustrative only—not tax, legal, or mortgage advice.
          Results depend on basis, land allocation, rental vs. personal use, and passive activity rules. Standard
          residential rental depreciation assumptions are used; no cost segregation.{" "}
          <strong>General disclaimer:</strong> Estimates only; not a guarantee of performance, financing, tax
          treatment, or rental income.
        </p>
      </div>
    </>
  );
}
