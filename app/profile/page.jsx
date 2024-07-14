import React from "react";
import UserProfile from "../components/UserProfile/Profile";
const ProfilePage = () => {
  return (
    <div>
      <div>
        <h2 className="text-yellow-500 text-3xl mt-10 ml-10">Curriculum</h2>

        <hr className="border-2 border-b border-gray-500 w-full mt-2" />
      </div>
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
