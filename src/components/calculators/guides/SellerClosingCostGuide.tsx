import { FaqAccordion, FaqItem } from "../../shared/FaqAccordion";

export function SellerClosingCostIntro() {
  return (
    <>
      <p className="calc-intro-kicker">NYC sale costs</p>
      <h2>See your net proceeds before you list</h2>
      <p>
        Seller closing costs in NYC typically run about <strong>8% to 10%</strong> of the sale price—often higher for
        co-ops when a flip tax applies. The largest items are usually broker commission and combined NYC + NYS transfer
        taxes. Use the calculator to estimate commission, transfer taxes, attorney fees, flip tax, and building fees so
        you know what you may net at closing.
      </p>
    </>
  );
}

export function SellerClosingCostGuide() {
  return (
    <>
      <div data-reveal="">
        <h2>NYC Seller Closing Costs Explained</h2>
        <div className="tf-guide-rule" />
        <p>
          When you sell, closing costs come out of your sale proceeds. Beyond broker commission, sellers typically pay
          NYC and New York State transfer taxes, seller&apos;s attorney fees, any building flip tax, move-out fees, and
          loan payoff / recording items if a mortgage is being satisfied.
        </p>

        <h2>Broker Commission</h2>
        <p>
          The typical NYC brokerage commission is about <strong>5%–6%</strong> of the sale price and is usually split
          between the listing agent and the buyer&apos;s agent. Sellers generally sign an exclusive listing that sets a
          fixed commission at closing. Buyer agents represent a large share of NYC purchasers, so the buyer-side offer
          in the MLS can influence showing activity—discuss strategy with your listing agent rather than cutting
          blindly.
        </p>

        <h2>NYC Transfer Tax</h2>
        <p>
          NYC transfer tax is typically <strong>1%</strong> on sales under $500k and <strong>1.425%</strong> on sales
          of $500k or more. Higher rates can apply to commercial deals and multifamily buildings with 4+ units. Together
          with New York State transfer tax, combined city + state transfer taxes are usually the second-largest seller
          cost after commission.
        </p>

        <h2>New York State Transfer Tax</h2>
        <p>
          NYS transfer tax is generally <strong>0.4%</strong> below $3 million and <strong>0.65%</strong> at $3 million
          or more (the higher rate can kick in at $2 million for commercial / 4+ unit residential). Before the 2019 tax
          law changes, NYS transfer tax was a flat 0.4%. Combined NYC + NYS transfer taxes commonly fall in the{" "}
          <strong>1.4%–2.075%</strong> range depending on price and property type.
        </p>

        <h2>Seller&apos;s Attorney Fee</h2>
        <p>
          Expect about <strong>$3,000–$4,000</strong> for a typical sale, and up to ~$5,000 for complex or new
          construction matters. Fees are usually collected at closing and appear on the closing statement.
        </p>

        <h2>Co-op Flip Tax</h2>
        <p>
          Many co-ops charge sellers a <strong>flip tax</strong>—sometimes a percentage of the sale price, sometimes a
          percentage of profit, and sometimes a dollar amount per share. Confirm the building&apos;s formula early; it
          can materially change your net. Condos rarely charge a flip tax of this type.
        </p>

        <h2>Move-Out Fees, Managing Agent &amp; Loan Payoff</h2>
        <p>
          Buildings often charge a refundable move-out deposit and a non-refundable move-out fee (sometimes waived if
          the unit is already vacant). Managing agents may also charge a closing / transfer fee when processing the
          board package or closing. If you have a mortgage, budget for bank loan satisfaction and recording fees—usually
          small fixed amounts—and deed / ACRIS filing fees on transferable properties.
        </p>

        <h2>Ways to Protect Your Net Proceeds</h2>
        <ul>
          <li>
            <strong>Price and commission strategy</strong>—negotiate listing terms thoughtfully; buyer-agent
            compensation still affects market exposure.
          </li>
          <li>
            <strong>Know the flip tax early</strong> if you own a co-op so net proceeds are realistic before you list.
          </li>
          <li>
            <strong>Purchase CEMA</strong>—when selling a financed condo or house, a CEMA with a financing buyer can
            sometimes reduce the buyer&apos;s Mortgage Recording Tax and improve deal economics.
          </li>
          <li>
            <strong>Investors:</strong> ask your tax counsel whether a 1031 exchange (like-kind exchange) is
            appropriate to defer capital gains—this calculator does not model tax on gain.
          </li>
        </ul>

        <h2>Seller Closing Cost FAQ</h2>
        <FaqAccordion>
          <FaqItem question="How much are seller closing costs in NYC?">
            <p>
              Typically <strong>8%–10%</strong> of the sale price, including roughly 5%–6% broker commission, combined
              NYC &amp; NYS transfer taxes of about 1.4%–2.075%, attorney fees, flip tax if any, and building /
              miscellaneous fees. Co-ops with flip taxes often land on the higher end.
            </p>
          </FaqItem>
          <FaqItem question="What is the typical real estate commission in NYC?">
            <p>
              About <strong>5%–6%</strong> of the sale price, usually split between listing and buyer agents. Exact
              terms are set in your listing agreement.
            </p>
          </FaqItem>
          <FaqItem question="What are NYC and NYS transfer taxes?">
            <p>
              Separate city and state taxes paid by the seller on most transfers. NYC is commonly 1% under $500k and
              1.425% at $500k+; NYS is commonly 0.4% under $3M and 0.65% at $3M+ (with commercial / 4+ unit nuances).
            </p>
          </FaqItem>
          <FaqItem question="Can I reduce seller closing costs?">
            <p>
              You can negotiate listing terms, confirm flip-tax exposure before listing, and explore Purchase CEMA when
              a financing buyer is purchasing a condo or house with an existing loan. Avoid cutting buyer-agent
              compensation without understanding the impact on showings and offers.
            </p>
          </FaqItem>
          <FaqItem question="Do co-ops cost more to sell than condos?">
            <p>
              Often yes, because of flip taxes and additional co-op transfer paperwork/fees—even when transfer taxes and
              commissions are similar.
            </p>
          </FaqItem>
        </FaqAccordion>

        <p className="calc-guide-disclaimer">
          Estimates only. Transfer taxes, flip taxes, commissions, and building fees vary by property and contract.
          Confirm numbers with your attorney and listing agreement before you rely on a net sheet.
        </p>
      </div>
    </>
  );
}
