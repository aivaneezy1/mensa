// pages/upload.js
"use client";
import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
  if (!file) return;

  const formData = new FormData();
  formData.append("file", file);
  console.log("file",formData.get("file")); // Check if file is correctly appended

  try {
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div>
      <h1>Upload a file</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
