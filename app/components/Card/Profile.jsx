"use client";
import React, { useState,useContext } from "react";
import handleButton from "@/app/utils/handleButton";
import { RichTextEditor } from "../Editor";
import { DatiContext } from "@/app/context/DatiContext";
const Profile = (props) => {

  const {showProfile} = useContext(DatiContext)

 
  return (
    <>
    {handleButton("Profile","Profile")}
      {showProfile === "Profile" && (
        <>
        <div className="flex break-words h-auto w-full max-w-sm sm:max-w-lg mb-10  ">
        <RichTextEditor content={props.content} setContent={props.setContent}/>
        </div>
        </>
      )}
      
  
    </>
  );
};

export default Profile;
