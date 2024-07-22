"use client"
import React from "react";
import UserProfile from "../components/UserProfile/Profile";
import { Suspense } from "react";
import Image from "next/image";



const ProfilePage = () => {
  return (
    <div>
      <div>
        <h2 className="text-yellow-500 text-3xl mt-10 ml-10">Curriculum Profile</h2>
    

        <hr className="border-2 border-b border-gray-500 w-full mt-2" />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <UserProfile />
      </Suspense>
    </div>
  );
};

export default ProfilePage;
