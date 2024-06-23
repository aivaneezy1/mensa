"use client";
import React, { useState } from "react";
import handleButton from "@/app/utils/handleButton";
import { RichTextEditor } from "../Editor";
const Formazione = () => {
  const [showFormazione, setShowFormazione] = useState(false);
   const [content, setContent] = useState("");
  return (
    <>
    {handleButton(showFormazione, setShowFormazione, "Formazione")}
      {showFormazione && (
        <>
        <div className="flex break-words h-auto w-full max-w-sm sm:max-w-lg mb-10 ">
        <RichTextEditor content={content} setContent={setContent}/>
        </div>
        </>
      )}
      
  
    </>
  );
};

export default Formazione;
