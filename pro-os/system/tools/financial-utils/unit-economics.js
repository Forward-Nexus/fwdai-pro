/**
 * Unit Economics Calculator
 * Calculate key SaaS and business metrics
 */

/**
 * Calculate comprehensive unit economics
 * @param {Object} params - Business parameters
 * @param {number} params.monthlyRevenue - Monthly recurring revenue
 * @param {number} params.activeCustomers - Number of active customers
 * @param {number} params.churnRate - Monthly churn rate (0-1, e.g. 0.05 = 5%)
 * @param {number} params.acquisitionCost - Customer acquisition cost (CAC)
 * @param {number} params.grossMargin - Gross margin percentage (0-1, e.g. 0.70 = 70%)
 * @returns {Object} Comprehensive unit economics metrics
 */
export function calculateUnitEconomics(params) {
  const {
    monthlyRevenue,
    activeCustomers,
    churnRate,
    acquisitionCost,
    grossMargin = 0.70
  } = params;
  
  // Calculate ARPU (Average Revenue Per User)
  const arpu = monthlyRevenue / activeCustomers;
  
  // Calculate LTV (Lifetime Value)
  // LTV = ARPU × Gross Margin / Churn Rate
  const ltv = (arpu * grossMargin) / churnRate;
  
  // Calculate LTV:CAC ratio
  const ltvCacRatio = ltv / acquisitionCost;
  
  // Calculate payback period (months)
  const paybackPeriod = acquisitionCost / (arpu * grossMargin);
  
  // Calculate customer lifetime (months)
  const customerLifetime = 1 / churnRate;
  
  // Calculate annual churn
  const annualChurn = 1 - Math.pow(1 - churnRate, 12);
  
  return {
    arpu: Math.round(arpu * 100) / 100,
    ltv: Math.round(ltv * 100) / 100,
    cac: acquisitionCost,
    ltvCacRatio: Math.round(ltvCacRatio * 100) / 100,
    paybackPeriod: Math.round(paybackPeriod * 10) / 10,
    customerLifetime: Math.round(customerLifetime * 10) / 10,
    monthlyChurn: Math.round(churnRate * 1000) / 10, // percentage
    annualChurn: Math.round(annualChurn * 1000) / 10, // percentage
    grossMargin: Math.round(grossMargin * 1000) / 10, // percentage
    
    // Health indicators
    isHealthy: ltvCacRatio >= 3 && paybackPeriod <= 12,
    warnings: getWarnings(ltvCacRatio, paybackPeriod, churnRate)
  };
}

/**
 * Calculate ARR (Annual Recurring Revenue)
 * @param {number} mrr - Monthly Recurring Revenue
 * @returns {number} Annual Recurring Revenue
 */
export function calculateARR(mrr) {
  return mrr * 12;
}

/**
 * Calculate MRR (Monthly Recurring Revenue) from customers
 * @param {Array} customers - Array of customer objects with revenue property
 * @returns {number} Total MRR
 */
export function calculateMRR(customers) {
  return customers.reduce((total, customer) => total + customer.revenue, 0);
}

/**
 * Calculate Net Revenue Retention (NRR)
 * @param {Object} params
 * @param {number} params.startingMRR - MRR at start of period
 * @param {number} params.endingMRR - MRR at end of period (from same cohort)
 * @param {number} params.expansion - Revenue expansion from existing customers
 * @returns {number} NRR as decimal (e.g. 1.15 = 115%)
 */
export function calculateNRR(params) {
  const { startingMRR, endingMRR, expansion } = params;
  return (endingMRR + expansion) / startingMRR;
}

/**
 * Calculate Gross Revenue Retention (GRR)
 * @param {Object} params
 * @param {number} params.startingMRR - MRR at start of period
 * @param {number} params.retained - MRR retained (no expansion)
 * @returns {number} GRR as decimal (e.g. 0.92 = 92%)
 */
export function calculateGRR(params) {
  const { startingMRR, retained } = params;
  return retained / startingMRR;
}

/**
 * Calculate Quick Ratio (growth efficiency)
 * @param {Object} params
 * @param {number} params.newMRR - New MRR added
 * @param {number} params.expansionMRR - Expansion MRR
 * @param {number} params.churnedMRR - Churned MRR
 * @param {number} params.contractionMRR - Contraction MRR
 * @returns {number} Quick ratio
 */
export function calculateQuickRatio(params) {
  const { newMRR, expansionMRR, churnedMRR, contractionMRR } = params;
  const growth = newMRR + expansionMRR;
  const loss = churnedMRR + contractionMRR;
  return growth / loss;
}

/**
 * Calculate Burn Multiple (capital efficiency)
 * @param {number} burnRate - Monthly burn rate
 * @param {number} netNewARR - Net new ARR added
 * @returns {number} Burn multiple (lower is better)
 */
export function calculateBurnMultiple(burnRate, netNewARR) {
  return (burnRate * 12) / netNewARR;
}

/**
 * Calculate Runway
 * @param {number} cashBalance - Current cash balance
 * @param {number} monthlyBurn - Monthly burn rate
 * @returns {number} Months of runway
 */
export function calculateRunway(cashBalance, monthlyBurn) {
  return cashBalance / monthlyBurn;
}

/**
 * Get health warnings based on metrics
 * @private
 */
function getWarnings(ltvCacRatio, paybackPeriod, churnRate) {
  const warnings = [];
  
  if (ltvCacRatio < 3) {
    warnings.push('LTV:CAC ratio below 3x - unit economics may not be sustainable');
  }
  
  if (paybackPeriod > 12) {
    warnings.push('Payback period over 12 months - high capital requirement');
  }
  
  if (churnRate > 0.05) {
    warnings.push('Monthly churn above 5% - focus on retention');
  }
  
  return warnings;
}

// Example usage (commented out):
// const metrics = calculateUnitEconomics({
//   monthlyRevenue: 50000,
//   activeCustomers: 500,
//   churnRate: 0.03,  // 3% monthly churn
//   acquisitionCost: 150,
//   grossMargin: 0.75
// });
//
// console.log(`ARPU: $${metrics.arpu}`);
// console.log(`LTV: $${metrics.ltv}`);
// console.log(`LTV:CAC: ${metrics.ltvCacRatio}x`);
// console.log(`Payback: ${metrics.paybackPeriod} months`);
// console.log(`Healthy: ${metrics.isHealthy ? 'Yes' : 'No'}`);

