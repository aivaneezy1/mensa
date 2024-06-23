import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";


export const RichTextEditor = (props) => {
  const modules = {
    toolbar: [
      [{font:[]}],
      [{ header: [1, 2,3, false] }],
      ["bold", "italic", "underline",],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ color: ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff"] }], 
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "color", // Added color

     "font"
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
        className="react-quill break-words whitespace-pre-wrap sm:w-full h-48 mb-10 mr-10 "
      />
    </div>
  );
};
