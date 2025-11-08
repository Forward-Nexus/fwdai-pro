/**
 * Excel Handler Utility
 * Read and write Excel files
 */

import fs from 'fs/promises';
import XLSX from 'xlsx';

/**
 * Read data from an Excel file
 * @param {string} filePath - Path to Excel file
 * @param {string} sheetName - Name of sheet to read (optional, defaults to first sheet)
 * @returns {Promise<Array>} Array of row objects
 */
export async function readExcel(filePath, sheetName = null) {
  try {
    const buffer = await fs.readFile(filePath);
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    
    const sheet = sheetName 
      ? workbook.Sheets[sheetName]
      : workbook.Sheets[workbook.SheetNames[0]];
    
    if (!sheet) {
      throw new Error(`Sheet "${sheetName || workbook.SheetNames[0]}" not found`);
    }
    
    const data = XLSX.utils.sheet_to_json(sheet);
    return data;
    
  } catch (error) {
    throw new Error(`Failed to read Excel file: ${error.message}`);
  }
}

/**
 * Write data to an Excel file
 * @param {Array} data - Array of row objects
 * @param {string} output - Output file path
 * @param {string} sheetName - Sheet name (optional, defaults to "Sheet1")
 * @returns {Promise<void>}
 */
export async function writeExcel(data, output, sheetName = 'Sheet1') {
  try {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    await fs.writeFile(output, buffer);
    
  } catch (error) {
    throw new Error(`Failed to write Excel file: ${error.message}`);
  }
}

/**
 * Get list of sheet names in an Excel file
 * @param {string} filePath - Path to Excel file
 * @returns {Promise<Array<string>>} Array of sheet names
 */
export async function getSheetNames(filePath) {
  try {
    const buffer = await fs.readFile(filePath);
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    return workbook.SheetNames;
    
  } catch (error) {
    throw new Error(`Failed to read Excel file: ${error.message}`);
  }
}

/**
 * Convert Excel to CSV
 * @param {string} filePath - Path to Excel file
 * @param {string} output - Output CSV file path
 * @param {string} sheetName - Sheet name (optional, defaults to first sheet)
 * @returns {Promise<void>}
 */
export async function excelToCSV(filePath, output, sheetName = null) {
  try {
    const buffer = await fs.readFile(filePath);
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    
    const sheet = sheetName 
      ? workbook.Sheets[sheetName]
      : workbook.Sheets[workbook.SheetNames[0]];
    
    if (!sheet) {
      throw new Error(`Sheet "${sheetName || workbook.SheetNames[0]}" not found`);
    }
    
    const csv = XLSX.utils.sheet_to_csv(sheet);
    await fs.writeFile(output, csv, 'utf8');
    
  } catch (error) {
    throw new Error(`Failed to convert Excel to CSV: ${error.message}`);
  }
}

/**
 * Read Excel file and return as array of arrays (raw data)
 * @param {string} filePath - Path to Excel file
 * @param {string} sheetName - Sheet name (optional, defaults to first sheet)
 * @returns {Promise<Array<Array>>} 2D array of cell values
 */
export async function readExcelRaw(filePath, sheetName = null) {
  try {
    const buffer = await fs.readFile(filePath);
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    
    const sheet = sheetName 
      ? workbook.Sheets[sheetName]
      : workbook.Sheets[workbook.SheetNames[0]];
    
    if (!sheet) {
      throw new Error(`Sheet "${sheetName || workbook.SheetNames[0]}" not found`);
    }
    
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    return data;
    
  } catch (error) {
    throw new Error(`Failed to read Excel file: ${error.message}`);
  }
}

// Example usage (commented out):
// const data = await readExcel('financials.xlsx', 'Q4 2024');
// console.log(data); // [{ column1: 'value', column2: 'value' }, ...]

// await writeExcel([
//   { name: 'John', age: 30, city: 'NYC' },
//   { name: 'Jane', age: 25, city: 'SF' }
// ], 'output.xlsx', 'People');

// const sheets = await getSheetNames('workbook.xlsx');
// console.log(sheets); // ['Sheet1', 'Sheet2', 'Sheet3']

// await excelToCSV('data.xlsx', 'data.csv', 'Sheet1');

