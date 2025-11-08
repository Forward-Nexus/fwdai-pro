/**
 * Word Document Writer Utility
 * Generate Word documents from content
 */

import fs from 'fs/promises';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';

/**
 * Create a Word document from sections
 * @param {Object} options - Document options
 * @param {string} options.title - Document title
 * @param {Array} options.sections - Array of {heading, content} objects
 * @param {string} options.output - Output file path
 * @returns {Promise<void>}
 */
export async function createWordDoc(options) {
  const { title, sections, output } = options;
  
  try {
    const children = [];
    
    // Add title
    if (title) {
      children.push(
        new Paragraph({
          text: title,
          heading: HeadingLevel.TITLE,
          spacing: { after: 400 }
        })
      );
    }
    
    // Add sections
    for (const section of sections) {
      // Add heading
      if (section.heading) {
        children.push(
          new Paragraph({
            text: section.heading,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 240, after: 120 }
          })
        );
      }
      
      // Add content paragraphs
      const paragraphs = section.content.split('\n\n');
      for (const para of paragraphs) {
        if (para.trim()) {
          children.push(
            new Paragraph({
              children: [new TextRun(para.trim())],
              spacing: { after: 200 }
            })
          );
        }
      }
    }
    
    const doc = new Document({
      sections: [{
        properties: {},
        children
      }]
    });
    
    const buffer = await Packer.toBuffer(doc);
    await fs.writeFile(output, buffer);
    
  } catch (error) {
    throw new Error(`Failed to create Word document: ${error.message}`);
  }
}

/**
 * Create a simple Word document from markdown-like text
 * @param {string} content - Content with markdown-style headers
 * @param {string} output - Output file path
 * @returns {Promise<void>}
 */
export async function markdownToWord(content, output) {
  try {
    const lines = content.split('\n');
    const children = [];
    
    for (const line of lines) {
      if (line.startsWith('# ')) {
        // H1
        children.push(
          new Paragraph({
            text: line.substring(2),
            heading: HeadingLevel.HEADING_1
          })
        );
      } else if (line.startsWith('## ')) {
        // H2
        children.push(
          new Paragraph({
            text: line.substring(3),
            heading: HeadingLevel.HEADING_2
          })
        );
      } else if (line.startsWith('### ')) {
        // H3
        children.push(
          new Paragraph({
            text: line.substring(4),
            heading: HeadingLevel.HEADING_3
          })
        );
      } else if (line.trim()) {
        // Regular paragraph
        children.push(
          new Paragraph({
            children: [new TextRun(line)],
            spacing: { after: 120 }
          })
        );
      }
    }
    
    const doc = new Document({
      sections: [{
        properties: {},
        children
      }]
    });
    
    const buffer = await Packer.toBuffer(doc);
    await fs.writeFile(output, buffer);
    
  } catch (error) {
    throw new Error(`Failed to convert markdown to Word: ${error.message}`);
  }
}

// Example usage (commented out):
// await createWordDoc({
//   title: 'Business Plan',
//   sections: [
//     { heading: 'Executive Summary', content: 'Our company...' },
//     { heading: 'Market Analysis', content: 'The market...' }
//   ],
//   output: 'business-plan.docx'
// });

// await markdownToWord(`
// # Title
// ## Section 1
// Content here...
// ## Section 2
// More content...
// `, 'output.docx');

