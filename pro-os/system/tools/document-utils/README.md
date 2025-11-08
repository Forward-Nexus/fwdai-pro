# Document Processing Utilities

**Purpose:** Helper functions for reading, writing, and converting documents

**Available by default in all FWD PRO projects** - No additional installation needed!

---

## 📄 Available Tools

### PDF Operations
- `pdf-reader.js` - Read and extract text from PDFs
- `pdf-writer.js` - Generate PDFs from markdown or content

### Word Documents
- `word-reader.js` - Convert Word docs to markdown
- `word-writer.js` - Generate Word documents

### Excel Spreadsheets
- `excel-handler.js` - Read and write Excel files

### General
- `template-filler.js` - Fill document templates with data

---

## 🚀 Usage

### Reading a PDF

```javascript
import { readPDF } from './.fwdpro/pro-os/system/tools/document-utils/pdf-reader.js';

const text = await readPDF('path/to/document.pdf');
console.log(text);
```

### Creating a Word Document

```javascript
import { createWordDoc } from './.fwdpro/pro-os/system/tools/document-utils/word-writer.js';

await createWordDoc({
  title: 'Business Plan',
  sections: [
    { heading: 'Executive Summary', content: '...' },
    { heading: 'Market Analysis', content: '...' }
  ],
  output: 'business-plan.docx'
});
```

### Converting Word to Markdown

```javascript
import { wordToMarkdown } from './.fwdpro/pro-os/system/tools/document-utils/word-reader.js';

const markdown = await wordToMarkdown('contract.docx');
// AI can now read and analyze the content
```

### Reading Excel Data

```javascript
import { readExcel } from './.fwdpro/pro-os/system/tools/document-utils/excel-handler.js';

const data = await readExcel('financials.xlsx', 'Sheet1');
console.log(data); // Array of rows
```

---

## 💡 How Experts Use These

### Ada (Implementation)
```
User: "Read this PDF contract and summarize it"
Ada: *uses pdf-reader.js, analyzes, summarizes*

User: "Generate a Word doc from this markdown spec"
Ada: *uses word-writer.js, creates professional document*
```

### Elle (Legal)
```
User: "Review this contract PDF for risks"
Elle: *uses pdf-reader.js, analyzes legal terms, flags issues*

User: "Generate a verified complaint in Word format"
Elle: *uses word-writer.js, creates formatted legal document*
```

### Lyna (External Strategy)
```
User: "Convert this pitch deck to PDF for printing"
Lyna: *uses pdf-writer.js, generates print-ready PDF*

User: "Extract financial data from this Excel file"
Lyna: *uses excel-handler.js, analyzes data*
```

---

## 🔧 Implementation Details

These utilities are thin wrappers around industry-standard libraries:
- **pdf-lib** & **pdf-parse** - PDF handling
- **mammoth** & **docx** - Word document processing
- **xlsx** - Excel file handling

All are maintained, well-documented, and battle-tested.

---

## 📚 Learn More

For detailed usage examples, see the individual utility files in this directory.

For expert-specific workflows, see:
- `pro-os/system/patterns/expert-tech.md` (Ada, Denny)
- `pro-os/system/patterns/expert-legal.md` (Elle)
- `pro-os/system/patterns/expert-content.md` (Lyna, Benji)

