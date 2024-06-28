import { NextResponse } from "next/server";
import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const uploadFolder = path.resolve(path.dirname(__filename), "../public");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder); // Use the specified upload folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename
  },
});

const uploadMiddleware = multer({ storage: storage }).single("file"); // Use single file upload middleware

export const POST = async (req, res) => {
  try {
    uploadMiddleware(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        console.error("Multer error:", err);
        return NextResponse.json(res, { error: "Failed to upload file." }, 500);
      } else if (err) {
        console.error("Unknown error:", err);
        return NextResponse.json(res, { error: "Unknown error occurred." }, 500);
      }

      // Log the uploaded file details
      console.log("Uploaded file:", req.file);

      // File successfully uploaded
      return NextResponse.json(res, {
        message: "File uploaded successfully.",
        filename: req.file.originalname, // Sending only the filename
      });
    });
  } catch (err) {
    console.error("Catch block error:", err);
    return NextResponse.json(res, { error: "Failed to upload file." }, 500);
  }
};
