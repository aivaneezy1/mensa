"use client";
import React, { useState,useContext } from "react";

import { RichTextEditor } from "../Editor";
import { DatiContext } from "@/app/context/DatiContext";
import HandleButton from "@/app/utils/handleButton";

const Profile = (props) => {

  const {showProfile} = useContext(DatiContext)

 
  return (
    <>
  
    <HandleButton showSection={"Profile"} field={"Profile"}/>
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
