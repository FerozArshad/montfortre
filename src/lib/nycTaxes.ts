/** NYC mansion tax — residential purchases at/above $1M (2019 progressive brackets on full price). */
export function calculateMansionTax(purchasePrice: number): number {
  if (purchasePrice < 1_000_000) return 0;

  const brackets: { upTo: number; rate: number }[] = [
    { upTo: 2_000_000, rate: 0.01 },
    { upTo: 3_000_000, rate: 0.0125 },
    { upTo: 5_000_000, rate: 0.015 },
    { upTo: 10_000_000, rate: 0.0225 },
    { upTo: 15_000_000, rate: 0.0325 },
    { upTo: 20_000_000, rate: 0.035 },
    { upTo: 25_000_000, rate: 0.0375 },
    { upTo: Infinity, rate: 0.039 },
  ];

  for (const bracket of brackets) {
    if (purchasePrice <= bracket.upTo) {
      return purchasePrice * bracket.rate;
    }
  }

  return purchasePrice * 0.039;
}

export function mansionTaxEffectiveRate(purchasePrice: number): number {
  if (purchasePrice <= 0) return 0;
  return (calculateMansionTax(purchasePrice) / purchasePrice) * 100;
}

function isResidential1to3(propertyType: string): boolean {
  return propertyType === "condo" || propertyType === "coop" || propertyType === "1-3-family";
}

/** NYC seller transfer tax — residential 1%/1.425%; 4+/commercial uses 1.425%/2.625%. */
export function nycTransferTaxOnly(salePrice: number, propertyType = "condo"): number {
  const residential = isResidential1to3(propertyType);
  if (residential) {
    return salePrice * (salePrice <= 500_000 ? 0.01 : 0.01425);
  }
  // Hauseit: commercial / 4+ family
  return salePrice * (salePrice <= 500_000 ? 0.01425 : 0.02625);
}

/**
 * NYS seller transfer tax.
 * Hauseit rounds the taxable base up to the next $500 before applying the rate.
 */
export function nyStateTransferTaxOnly(salePrice: number, propertyType: string): number {
  const rounded = Math.ceil(salePrice / 500) * 500;
  const residential = isResidential1to3(propertyType);
  const rate = residential
    ? salePrice >= 3_000_000
      ? 0.0065
      : 0.004
    : salePrice >= 2_000_000
      ? 0.0065
      : 0.004;
  return rounded * rate;
}

/** NYC + NYS seller transfer taxes. */
export function calculateSellerTransferTaxes(salePrice: number, propertyType: string): number {
  return nycTransferTaxOnly(salePrice, propertyType) + nyStateTransferTaxOnly(salePrice, propertyType);
}

/** NYC mortgage recording tax on new loan amount. */
export function calculateMortgageRecordingTax(loanAmount: number): number {
  if (loanAmount <= 0) return 0;
  const rate = loanAmount < 500_000 ? 0.018 : 0.01925;
  return loanAmount * rate;
}

/** Owner's title insurance — simplified NYC residential estimate (~0.45%). */
export function estimateOwnerTitleInsurance(purchasePrice: number): number {
  return purchasePrice * 0.0045;
}

/** Lender's title policy — simplified (~0.15% of loan). */
export function estimateLenderTitleInsurance(loanAmount: number): number {
  return loanAmount * 0.0015;
}
