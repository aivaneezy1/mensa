// app/middleware.js
import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";


// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const uploadFolder = path.resolve(path.dirname(__filename), "../public");

// Set up storage with Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder); // Use the specified upload folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename
  },
});

// Middleware to handle file uploads
const upload = multer({ storage: storage });


export const uploadMiddleware = upload.single('file'); // Single file upload



export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle multipart/form-data
  },
};