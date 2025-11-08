/**
 * Word Document Reader Utility
 * Convert Word documents to markdown
 */

import fs from 'fs/promises';
import mammoth from 'mammoth';

/**
 * Convert Word document to markdown
 * @param {string} filePath - Path to Word document (.docx)
 * @returns {Promise<string>} Markdown content
 */
export async function wordToMarkdown(filePath) {
  try {
    const buffer = await fs.readFile(filePath);
    const result = await mammoth.convertToMarkdown({ buffer });
    
    if (result.messages.length > 0) {
      console.warn('Conversion warnings:', result.messages);
    }
    
    return result.value;
  } catch (error) {
    throw new Error(`Failed to read Word document: ${error.message}`);
  }
}

/**
 * Convert Word document to plain text
 * @param {string} filePath - Path to Word document (.docx)
 * @returns {Promise<string>} Plain text content
 */
export async function wordToText(filePath) {
  try {
    const buffer = await fs.readFile(filePath);
    const result = await mammoth.extractRawText({ buffer });
    
    return result.value;
  } catch (error) {
    throw new Error(`Failed to extract text from Word document: ${error.message}`);
  }
}

/**
 * Convert Word document to HTML
 * @param {string} filePath - Path to Word document (.docx)
 * @returns {Promise<string>} HTML content
 */
export async function wordToHTML(filePath) {
  try {
    const buffer = await fs.readFile(filePath);
    const result = await mammoth.convertToHtml({ buffer });
    
    if (result.messages.length > 0) {
      console.warn('Conversion warnings:', result.messages);
    }
    
    return result.value;
  } catch (error) {
    throw new Error(`Failed to convert Word document to HTML: ${error.message}`);
  }
}

// Example usage (commented out):
// const markdown = await wordToMarkdown('business-plan.docx');
// const text = await wordToText('contract.docx');
// const html = await wordToHTML('proposal.docx');

