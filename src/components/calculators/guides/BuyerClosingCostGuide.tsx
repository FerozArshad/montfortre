import { FaqAccordion, FaqItem } from "../../shared/FaqAccordion";

/** Educational framing above the buyer closing-cost calculator */
export function BuyerClosingCostIntro() {
  return (
    <>
      <p className="calc-intro-kicker">NYC purchase costs</p>
      <h2>Estimate what you&apos;ll need beyond the down payment</h2>
      <p>
        Buyer closing costs in NYC typically run about <strong>1.5% to 6%</strong> of the purchase price. Costs are
        usually higher for condos than co-ops, and highest for new construction (sponsor) units—especially when you
        financing. Use the calculator below to model mansion tax, title insurance, mortgage recording tax, attorney fees,
        and building fees for your scenario.
      </p>
    </>
  );
}

/** Long-form tips + FAQ below the buyer closing-cost calculator */
export function BuyerClosingCostGuide() {
  return (
    <>
      <div data-reveal="">
        <h2>NYC Buyer Closing Costs Explained</h2>
        <div className="tf-guide-rule" />
        <p>
          Closing costs are the fees and taxes due at or before closing, separate from your down payment. In New York
          City, the largest line items for financed purchases are often the{" "}
          <strong>Mortgage Recording Tax</strong> and—when the price is $1 million or more—the{" "}
          <strong>mansion tax</strong>. Title insurance, attorney fees, and building application/move-in fees add up
          quickly as well.
        </p>
        <p>
          Rough rule of thumb when financing: about <strong>4%</strong> for condos and houses, about{" "}
          <strong>2%</strong> for co-ops, and <strong>6% or more</strong> for new developments. All-cash purchases
          usually cost less because mortgage-related taxes and lender fees drop out.
        </p>

        <h2>Mansion Tax</h2>
        <p>
          The NYC mansion tax is a progressive buyer tax of <strong>1% to 3.9%</strong> on residential purchases of{" "}
          <strong>$1 million or more</strong>. There are eight brackets—the lowest 1% rate applies from $1M to under
          $2M; the highest 3.9% rate applies at $25M+. Before the 2019 update, the mansion tax was a flat 1% on every
          $1M+ purchase.
        </p>

        <h2>Title Insurance</h2>
        <p>
          Title insurance protects against defects or claims unknown when the title search was done—for example, a
          prior owner later asserting a chain-of-title error. Buyers typically purchase an{" "}
          <strong>owner&apos;s policy</strong> (based on purchase price / equity) and, when financing, a{" "}
          <strong>lender&apos;s policy</strong> (based on the loan amount). A Market Value Rider can step coverage up
          as the property appreciates.
        </p>

        <h2>Buyer&apos;s Attorney Fee</h2>
        <p>
          Typical NYC purchase counsel fees run about <strong>$3,000–$4,000</strong>, and can reach ~$5,000 for complex
          or new-construction deals. Fees are usually paid at closing (sometimes partly upfront). Rates vary with
          complexity—always confirm the engagement letter before you are in contract.
        </p>

        <h2>New Construction / Sponsor Units</h2>
        <p>
          Buying a sponsor (new development) unit is often longer, more expensive, and more complex than a resale. It
          is customary for the buyer to cover the <strong>seller&apos;s attorney fee</strong> plus{" "}
          <strong>NYC and NYS transfer taxes</strong>—the reverse of a typical private resale. Sponsor closing costs
          are negotiable, and the offering plan controls what you are buying.
        </p>

        <h2>Board Application, Move-In Fees &amp; Deposits</h2>
        <p>
          Most condos and co-ops charge a non-refundable <strong>board application fee</strong> (often $300–$700) plus
          a refundable move-in deposit and a non-refundable move-in fee. Exact amounts are in the building&apos;s
          purchase/resale application. Application fees are almost never refunded if a co-op board rejects you—budget
          for that risk.
        </p>

        <h2>Mortgage Recording Tax (MRT)</h2>
        <p>
          NYC Mortgage Recording Tax is often the single largest buyer closing cost when you finance:{" "}
          <strong>1.8%</strong> on loans under $500k and <strong>1.925%</strong> on loans of $500k or more, based on
          the <em>new</em> loan amount. A larger down payment reduces MRT. In some condo/house sales you may also
          explore a <strong>Purchase CEMA</strong> with the seller to lower the taxable new-loan amount.
        </p>
        <p>
          Other financing fees commonly include an application fee (~$500–$1,000, sometimes waived for preferred banking
          clients), appraisal (~$750), mortgage recording fee (~$200), and the bank&apos;s attorney fee.
        </p>

        <h2>Co-op Buyer Requirements &amp; Timeline</h2>
        <p>
          Typical co-op expectations include about <strong>20% down</strong>, a debt-to-income ratio in the{" "}
          <strong>25–35%</strong> range, and <strong>1–2 years</strong> of post-closing liquidity. From in-contract to
          closing, many co-op deals take about <strong>two to three months</strong>, though board package quality and
          financing can shorten or stretch that window.
        </p>

        <h2>Ways to Reduce Buyer Closing Costs</h2>
        <ul>
          <li>
            <strong>Increase your down payment</strong> to shrink Mortgage Recording Tax and lender-side fees.
          </li>
          <li>
            <strong>Compare cash vs. financing</strong>—cash removes MRT and most lender costs (but still carries
            mansion tax and attorney/title items when they apply).
          </li>
          <li>
            <strong>Ask about Purchase CEMA</strong> when buying a financed condo or house from a seller with an
            existing mortgage.
          </li>
          <li>
            <strong>Negotiate sponsor closing costs</strong> on new construction—transfer taxes and seller counsel are
            not always non-negotiable.
          </li>
          <li>
            <strong>Shop attorney and title quotes</strong> early; flat fees vary with deal complexity.
          </li>
        </ul>

        <h2>Buyer Closing Cost FAQ</h2>
        <FaqAccordion>
          <FaqItem question="How much are buyer closing costs in NYC?">
            <p>
              When financing, plan on roughly <strong>4%</strong> for condos and houses, about <strong>2%</strong> for
              co-ops, and <strong>6% or more</strong> for new developments. All-cash purchases are often lower because
              mortgage recording tax and lender fees do not apply. Use the calculator on this page for a line-item
              estimate.
            </p>
          </FaqItem>
          <FaqItem question="What is the NYC mansion tax?">
            <p>
              A progressive buyer tax of 1%–3.9% on residential purchases of $1 million or more. The rate steps up
              across eight brackets as price increases.
            </p>
          </FaqItem>
          <FaqItem question="What is Mortgage Recording Tax?">
            <p>
              A tax on new mortgage loans recorded in NYC: 1.8% under $500k and 1.925% at $500k+. It is based on the
              loan amount, so larger down payments reduce the tax.
            </p>
          </FaqItem>
          <FaqItem question="Are condo closing costs higher than co-op?">
            <p>
              Often yes. Condos typically require owner&apos;s and lender&apos;s title insurance and mortgage recording
              tax when financed. Co-ops may avoid some of those line items but still have attorney fees, board fees,
              and move-in costs.
            </p>
          </FaqItem>
          <FaqItem question="Can I reduce my buyer closing costs?">
            <p>
              Yes—larger down payments, cash purchases, Purchase CEMA negotiations, shopping attorney/title fees, and
              negotiating sponsor costs on new construction can all help. Stanley Montfort can walk you through which
              levers apply to your property type and financing.
            </p>
          </FaqItem>
        </FaqAccordion>

        <p className="calc-guide-disclaimer">
          This calculator and guide are for educational purposes only. Actual closing costs depend on your contract,
          lender, building, borough, and counsel. Confirm figures with your attorney and lender before closing.
        </p>
      </div>
    </>
  );
}
