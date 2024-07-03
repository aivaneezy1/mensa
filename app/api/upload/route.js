import path from "path";
import fs from "fs/promises";
import formidable from "formidable";

const readFile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/images");
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + "_" + path.originalFileName;
    };
  }
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle multipart/form-data
  },
};

export default async function POST(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  try {
    // Ensure the directory exists or create it
    await fs.mkdir(path.join(process.cwd(), "/public/images"), { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') {
      res.status(500).json({ error: "Failed to create directory" });
      return;
    }
  }

  // Read file using formidable and save locally
  try {
    await readFile(req, true);
    res.status(200).json({ done: "ok" });
  } catch (err) {
    res.status(500).json({ error: "Failed to process file upload" });
  }
}
