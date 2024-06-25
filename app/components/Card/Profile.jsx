"use client";
import React, { useState } from "react";
import handleButton from "@/app/utils/handleButton";
import { RichTextEditor } from "../Editor";

const Profile = (props) => {
  const [showProfile, setShowProfile] = useState(false);
   const [content, setContent] = useState("");
  return (
    <>
    {handleButton(showProfile, setShowProfile, "Profile")}
      {showProfile && (
        <>
        <div className="flex break-words h-auto w-full max-w-sm sm:max-w-lg mb-10 ">
        <RichTextEditor content={content} setContent={setContent}/>
        </div>
        </>
      )}
      
  
    </>
  );
};

export default Profile;
