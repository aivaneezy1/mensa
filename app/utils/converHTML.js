// utils/convertDocxToHtml.js
import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';

export const convertDocxToHtml = async (filePath) => {
    
  try {
    const docxPath = path.resolve(filePath);
    const buffer = fs.readFileSync(docxPath);
    const result = await mammoth.convertToHtml({ buffer });
    console.log(result.value); // Log the HTML content to the server console
    return result.value; // Return the HTML content
  } catch (error) {
    console.error('Error converting DOCX to HTML:', error);
    throw error; // Throw the error to handle it elsewhere
  }
};


