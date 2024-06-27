"use client";
import React, { useState } from "react";
import handleButton from "@/app/utils/handleButton";
import { RichTextEditor } from "../Editor";

const Profile = (props) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
    {handleButton(showProfile, setShowProfile, "Profile")}
      {showProfile && (
        <>
        <div className="flex break-words h-auto w-full max-w-sm sm:max-w-lg mb-10 ">
        <RichTextEditor content={props.content} setContent={props.setContent}/>
        </div>
        </>
      )}
      
  
    </>
  );
};

export default Profile;
