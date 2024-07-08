import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";

export const RichTextEditor = (props) => {
  const modules = {
    toolbar: [
      [{ header: [false] }], 
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "font",
  ];

  return (
    <div className="w-full">
      <h2 className="font-semibold mb-2 mt-5 text-medium">Description</h2>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={props.content}
        onChange={(value) => props.setContent(value)}
        style={{ minHeight: "400px" }} // Adjust minHeight as needed
        className="react-quill break-words whitespace-pre-wrap sm:w-full h-48 mb-10 mr-10 rounded-md w-100"
      />
    </div>
  );
};
