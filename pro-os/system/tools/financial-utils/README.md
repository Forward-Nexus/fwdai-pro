# Financial & Accounting Utilities

**Purpose:** Helper functions for financial modeling, budgeting, and accounting

**Perfect for:** Investor reporting, financial projections, budget tracking, P&L statements

---

## 📊 Available Tools

### Financial Modeling
- `financial-projections.js` - Build 5-year financial models
- `budget-tracker.js` - Track budgets vs actuals
- `unit-economics.js` - Calculate LTV, CAC, margins, etc.

### Accounting
- `pl-statement.js` - Generate P&L statements
- `cash-flow.js` - Cash flow projections
- `expense-tracker.js` - Track and categorize expenses

### Investor Metrics
- `investor-metrics.js` - ARR, MRR, churn, retention, runway
- `cap-table.js` - Simple cap table calculator
- `valuation.js` - Basic valuation calculations

---

## 🚀 Quick Examples

### Financial Projections

```javascript
import { createProjection } from './.fwdpro/pro-os/system/tools/financial-utils/financial-projections.js';

const projection = createProjection({
  startingRevenue: 10000,
  monthlyGrowthRate: 0.15, // 15%
  years: 5,
  costs: {
    cogs: 0.30,  // 30% of revenue
    marketing: 0.25,
    operations: 0.20
  }
});

// Returns detailed 5-year projection
```

### Unit Economics

```javascript
import { calculateUnitEconomics } from './.fwdpro/pro-os/system/tools/financial-utils/unit-economics.js';

const metrics = calculateUnitEconomics({
  monthlyRevenue: 50000,
  activeCustomers: 500,
  churnRate: 0.05,
  acquisitionCost: 150
});

console.log(metrics.ltvCacRatio); // LTV:CAC ratio
console.log(metrics.paybackPeriod); // Months to payback
```

### P&L Statement

```javascript
import { generatePL } from './.fwdpro/pro-os/system/tools/financial-utils/pl-statement.js';
import { writeExcel } from './.fwdpro/pro-os/system/tools/document-utils/excel-handler.js';

const pl = generatePL({
  revenue: [10000, 15000, 22000], // Q1, Q2, Q3
  cogs: [3000, 4500, 6600],
  expenses: {
    marketing: [2500, 3750, 5500],
    salaries: [5000, 5000, 5000],
    operations: [1000, 1500, 2000]
  }
});

// Export to Excel
await writeExcel(pl, 'pl-statement.xlsx');
```

---

## 💼 How Experts Use These

### Lyna (External Strategy)
```
User: "Create financial projections for our pitch deck"
Lyna: *uses financial-projections.js, generates 5-year model*
      *exports to Excel for investors*
      *creates visualizations for pitch deck*
```

### Genna (Strategy)
```
User: "Should we expand to new market?"
Genna: *uses unit-economics.js to model new market*
       *calculates break-even and payback*
       *provides strategic recommendation*
```

### Benji (Internal Growth)
```
User: "Track our marketing budget"
Benji: *uses budget-tracker.js*
       *compares actual vs budget*
       *flags overspend areas*
```

---

## 📈 Common Workflows

### Investor Financial Pack

```javascript
// 1. Generate 5-year projections
const projections = await createProjection({ /* ... */ });

// 2. Calculate key metrics
const metrics = await calculateInvestorMetrics({ /* ... */ });

// 3. Create P&L
const pl = await generatePL({ /* ... */ });

// 4. Export everything to Excel
await writeExcel(projections, 'financial-projections.xlsx');
await writeExcel(pl, 'pl-statement.xlsx');

// 5. Generate PDF summary
await createPDF({
  title: 'Financial Summary',
  sections: [
    { heading: 'Projections', content: '...' },
    { heading: 'Unit Economics', content: '...' }
  ],
  output: 'financial-summary.pdf'
});
```

---

## 🔧 Integration with Document Tools

Financial utils work seamlessly with document processing:

```javascript
// Calculate financials
const data = calculateFinancials();

// Export to Excel
await writeExcel(data, 'financials.xlsx');

// Generate Word report
await createWordDoc({
  title: 'Financial Report',
  sections: formatForWord(data),
  output: 'report.docx'
});

// Create PDF for investors
await createStructuredPDF({
  title: 'Financial Projections',
  sections: formatForPDF(data),
  output: 'projections.pdf'
});
```

---

## 📚 Learn More

For detailed usage, see individual utility files in this directory.

For investor-specific workflows, see:
- `pro-os/system/patterns/expert-strategy.md` (Lyna, Genna)
- `pro-os/system/patterns/expert-content.md` (Investor materials)

