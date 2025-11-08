/**
 * PDF Writer Utility
 * Generate PDF documents from content
 */

import fs from 'fs/promises';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

/**
 * Create a simple PDF from text content
 * @param {Object} options - PDF options
 * @param {string} options.title - Document title
 * @param {string} options.content - Text content
 * @param {string} options.output - Output file path
 * @returns {Promise<void>}
 */
export async function createPDF(options) {
  const { title, content, output } = options;
  
  try {
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    
    let page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 12;
    const titleFontSize = 18;
    const margin = 50;
    const lineHeight = fontSize * 1.5;
    
    let yPosition = height - margin;
    
    // Add title
    if (title) {
      page.drawText(title, {
        x: margin,
        y: yPosition,
        size: titleFontSize,
        font: boldFont,
        color: rgb(0, 0, 0)
      });
      yPosition -= titleFontSize * 2;
    }
    
    // Add content (split into lines to fit page width)
    const maxWidth = width - (margin * 2);
    const lines = wrapText(content, font, fontSize, maxWidth);
    
    for (const line of lines) {
      // Add new page if needed
      if (yPosition < margin) {
        page = pdfDoc.addPage();
        yPosition = height - margin;
      }
      
      page.drawText(line, {
        x: margin,
        y: yPosition,
        size: fontSize,
        font: font,
        color: rgb(0, 0, 0)
      });
      
      yPosition -= lineHeight;
    }
    
    const pdfBytes = await pdfDoc.save();
    await fs.writeFile(output, pdfBytes);
    
  } catch (error) {
    throw new Error(`Failed to create PDF: ${error.message}`);
  }
}

/**
 * Create a PDF from structured sections
 * @param {Object} options - PDF options
 * @param {string} options.title - Document title
 * @param {Array} options.sections - Array of {heading, content} objects
 * @param {string} options.output - Output file path
 * @returns {Promise<void>}
 */
export async function createStructuredPDF(options) {
  const { title, sections, output } = options;
  
  try {
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    
    let page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 12;
    const headingSize = 14;
    const titleSize = 20;
    const margin = 50;
    const lineHeight = fontSize * 1.5;
    const maxWidth = width - (margin * 2);
    
    let yPosition = height - margin;
    
    // Add title
    if (title) {
      page.drawText(title, {
        x: margin,
        y: yPosition,
        size: titleSize,
        font: boldFont,
        color: rgb(0, 0, 0)
      });
      yPosition -= titleSize * 2.5;
    }
    
    // Add sections
    for (const section of sections) {
      // Check if new page needed
      if (yPosition < margin + 100) {
        page = pdfDoc.addPage();
        yPosition = height - margin;
      }
      
      // Add section heading
      if (section.heading) {
        page.drawText(section.heading, {
          x: margin,
          y: yPosition,
          size: headingSize,
          font: boldFont,
          color: rgb(0, 0, 0)
        });
        yPosition -= headingSize * 2;
      }
      
      // Add section content
      const lines = wrapText(section.content, font, fontSize, maxWidth);
      
      for (const line of lines) {
        if (yPosition < margin) {
          page = pdfDoc.addPage();
          yPosition = height - margin;
        }
        
        page.drawText(line, {
          x: margin,
          y: yPosition,
          size: fontSize,
          font: font,
          color: rgb(0, 0, 0)
        });
        
        yPosition -= lineHeight;
      }
      
      yPosition -= lineHeight; // Extra space between sections
    }
    
    const pdfBytes = await pdfDoc.save();
    await fs.writeFile(output, pdfBytes);
    
  } catch (error) {
    throw new Error(`Failed to create structured PDF: ${error.message}`);
  }
}

/**
 * Helper function to wrap text to fit within specified width
 * @private
 */
function wrapText(text, font, fontSize, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';
  
  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testWidth = font.widthOfTextAtSize(testLine, fontSize);
    
    if (testWidth > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  return lines;
}

// Example usage (commented out):
// await createPDF({
//   title: 'Business Plan',
//   content: 'This is the content of the business plan...',
//   output: 'business-plan.pdf'
// });

// await createStructuredPDF({
//   title: 'Business Plan',
//   sections: [
//     { heading: 'Executive Summary', content: 'Our company...' },
//     { heading: 'Market Analysis', content: 'The market...' }
//   ],
//   output: 'business-plan.pdf'
// });

