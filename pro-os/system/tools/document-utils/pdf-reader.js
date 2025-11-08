/**
 * PDF Reader Utility
 * Read and extract text from PDF files
 */

import fs from 'fs/promises';
import pdfParse from 'pdf-parse';

/**
 * Read text content from a PDF file
 * @param {string} filePath - Path to PDF file
 * @returns {Promise<string>} Extracted text content
 */
export async function readPDF(filePath) {
  try {
    const dataBuffer = await fs.readFile(filePath);
    const data = await pdfParse(dataBuffer);
    
    return data.text;
  } catch (error) {
    throw new Error(`Failed to read PDF: ${error.message}`);
  }
}

/**
 * Get PDF metadata
 * @param {string} filePath - Path to PDF file
 * @returns {Promise<Object>} PDF metadata (pages, title, author, etc.)
 */
export async function getPDFInfo(filePath) {
  try {
    const dataBuffer = await fs.readFile(filePath);
    const data = await pdfParse(dataBuffer);
    
    return {
      pages: data.numpages,
      info: data.info,
      metadata: data.metadata,
      version: data.version
    };
  } catch (error) {
    throw new Error(`Failed to get PDF info: ${error.message}`);
  }
}

/**
 * Extract text from specific pages
 * @param {string} filePath - Path to PDF file
 * @param {number} startPage - Starting page (1-indexed)
 * @param {number} endPage - Ending page (1-indexed)
 * @returns {Promise<string>} Extracted text from specified pages
 */
export async function readPDFPages(filePath, startPage, endPage) {
  try {
    const fullText = await readPDF(filePath);
    const info = await getPDFInfo(filePath);
    
    if (startPage < 1 || endPage > info.pages) {
      throw new Error(`Page range ${startPage}-${endPage} is invalid. PDF has ${info.pages} pages.`);
    }
    
    // This is a simple implementation - for more precise page extraction,
    // you'd need a more sophisticated PDF parsing library
    return fullText;
  } catch (error) {
    throw new Error(`Failed to read PDF pages: ${error.message}`);
  }
}

// Example usage (commented out):
// const text = await readPDF('contract.pdf');
// const info = await getPDFInfo('contract.pdf');
// console.log(`PDF has ${info.pages} pages`);
// console.log(text);

