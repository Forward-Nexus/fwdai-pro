# Document Processing Pattern

**Purpose:** How experts read, write, and process documents (PDF, Word, Excel)  
**Used by:** All experts (especially Ada, Elle, Lyna)

---

## Overview

FWD PRO includes document processing tools out-of-the-box. Experts can:
- Read PDFs and extract text
- Convert Word docs to markdown
- Generate Word documents from content
- Read/write Excel spreadsheets
- Create PDFs from content

**No additional installation needed** - these tools are included with FWD PRO.

---

## When to Use Document Tools

### Common Scenarios:

**Elle (Legal):**
- Read contract PDFs and analyze terms
- Generate legal documents in Word format
- Fill out form templates

**Lyna (External Strategy):**
- Convert pitch decks to PDF for printing
- Extract financial data from Excel
- Read investor materials

**Ada (Implementation):**
- Process uploaded documents
- Generate reports in various formats
- Data extraction and transformation

**Denny (Systems Architect):**
- Read technical specs from PDFs
- Generate architecture documents

---

## Available Tools

### 📄 PDF Operations

```javascript
import { readPDF, getPDFInfo } from './.fwdpro/pro-os/system/tools/document-utils/pdf-reader.js';
import { createPDF, createStructuredPDF } from './.fwdpro/pro-os/system/tools/document-utils/pdf-writer.js';

// Read PDF
const text = await readPDF('contract.pdf');

// Get PDF info
const info = await getPDFInfo('contract.pdf');
console.log(`${info.pages} pages`);

// Create PDF
await createStructuredPDF({
  title: 'Business Plan',
  sections: [
    { heading: 'Executive Summary', content: '...' },
    { heading: 'Market Analysis', content: '...' }
  ],
  output: 'business-plan.pdf'
});
```

### 📝 Word Documents

```javascript
import { wordToMarkdown, wordToText } from './.fwdpro/pro-os/system/tools/document-utils/word-reader.js';
import { createWordDoc, markdownToWord } from './.fwdpro/pro-os/system/tools/document-utils/word-writer.js';

// Read Word doc
const markdown = await wordToMarkdown('contract.docx');

// Create Word doc
await createWordDoc({
  title: 'Legal Brief',
  sections: [
    { heading: 'Background', content: '...' },
    { heading: 'Analysis', content: '...' }
  ],
  output: 'brief.docx'
});

// Convert markdown to Word
await markdownToWord(markdownContent, 'output.docx');
```

### 📊 Excel Spreadsheets

```javascript
import { readExcel, writeExcel, excelToCSV } from './.fwdpro/pro-os/system/tools/document-utils/excel-handler.js';

// Read Excel
const data = await readExcel('financials.xlsx', 'Q4 2024');
// Returns: [{ column1: 'value', column2: 'value' }, ...]

// Write Excel
await writeExcel([
  { name: 'John', revenue: 50000 },
  { name: 'Jane', revenue: 75000 }
], 'report.xlsx', 'Sales');

// Convert to CSV
await excelToCSV('data.xlsx', 'data.csv');
```

---

## Expert Workflows

### Elle: Legal Document Review

**User:** "Review this contract PDF for risks"

**Elle's workflow:**
1. Use `readPDF()` to extract text
2. Analyze legal terms and clauses
3. Identify risks and flag issues
4. Generate response in Word format using `createWordDoc()`

```javascript
const contractText = await readPDF('client-contract.pdf');
// Elle analyzes the contract text...
await createWordDoc({
  title: 'Contract Review Memorandum',
  sections: [
    { heading: 'Summary', content: '...' },
    { heading: 'Identified Risks', content: '...' },
    { heading: 'Recommendations', content: '...' }
  ],
  output: 'contract-review.docx'
});
```

### Lyna: Investor Materials

**User:** "Convert this pitch deck to PDF for printing"

**Lyna's workflow:**
1. Read markdown pitch deck content
2. Use `createStructuredPDF()` to generate print-ready PDF
3. Save to documents folder

```javascript
await createStructuredPDF({
  title: 'ODAT Investor Pitch',
  sections: pitchDeckSections,
  output: '.fwdpro/documents/investor/pitch-deck.pdf'
});
```

### Ada: Data Processing

**User:** "Extract data from this Excel file and summarize it"

**Ada's workflow:**
1. Use `readExcel()` to load data
2. Process and analyze
3. Generate summary report

```javascript
const financials = await readExcel('Q4-financials.xlsx', 'Summary');
// Process data...
const summary = analyzeFinancials(financials);
// Generate report...
```

---

## Best Practices

### ✅ DO:

- **Use document tools when user uploads/references documents**
- **Generate professional output formats** (Word for business docs, PDF for final versions)
- **Extract text from PDFs before analysis** (don't try to "read" binary PDFs directly)
- **Convert Word docs to markdown for AI processing** (easier to work with)
- **Use Excel for structured data** (financial projections, tables, datasets)
- **Save generated documents to appropriate folders** (`.fwdpro/documents/`)

### ❌ DON'T:

- **Don't try to read binary files without tools** (use the utilities!)
- **Don't generate documents in chat** (use actual file generation)
- **Don't forget to handle errors** (file not found, corrupt files, etc.)
- **Don't overwrite source files** (save to new files)

---

## Document Organization

**Where to save generated documents:**

```
.fwdpro/documents/
  legal/              ← Elle's documents
    contracts/
    memorandums/
    briefs/
  
  investor/           ← Lyna's documents
    pitch-decks/
    business-plans/
    reports/
  
  technical/          ← Denny's documents
    specs/
    architecture/
  
  reports/            ← Analysis reports
    financial/
    market-research/
```

---

## Error Handling

Always wrap document operations in try-catch:

```javascript
try {
  const text = await readPDF('contract.pdf');
  // Process...
} catch (error) {
  console.error('Failed to read PDF:', error.message);
  // Inform user, suggest alternatives
}
```

---

## Common Patterns

### Pattern 1: Read → Analyze → Generate

```javascript
// Read source document
const sourceText = await readPDF('input.pdf');

// Analyze
const analysis = analyzeContent(sourceText);

// Generate output
await createWordDoc({
  title: 'Analysis Report',
  sections: analysis.sections,
  output: 'report.docx'
});
```

### Pattern 2: Convert Format

```javascript
// Word → Markdown → Process → PDF
const markdown = await wordToMarkdown('draft.docx');
const processed = processMarkdown(markdown);
await createPDF({
  title: 'Final Document',
  content: processed,
  output: 'final.pdf'
});
```

### Pattern 3: Data Extraction

```javascript
// Excel → Process → New Excel
const data = await readExcel('raw-data.xlsx');
const processed = processData(data);
await writeExcel(processed, 'processed-data.xlsx');
```

---

## Reference

**Tool locations:**
- `pro-os/system/tools/document-utils/`

**Documentation:**
- `pro-os/system/tools/document-utils/README.md`

**Libraries used:**
- pdf-lib, pdf-parse (PDF)
- mammoth, docx (Word)
- xlsx (Excel)

---

**Remember:** Document processing is available out-of-the-box. Just import and use!

