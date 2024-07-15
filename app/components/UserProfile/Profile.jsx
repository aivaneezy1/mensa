"use client";

import UserCardOne from "../UserCardDisplay/UserCardOne";
import UserCardTwo from "../UserCardDisplay/UserCardTwo";
import UserCardThree from "../UserCardDisplay/UserCardThree";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const UserProfile = () => {
  // Getting the query paramater
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // passing the query paramter to the API call.
        const res = await fetch(`/api/post/${id}`);
        if (!res.ok) {
          throw new Error("Failed to retrieve data");
        }
        const data = await res.json();
        setUserData(data);
        console.log("data", data)
      } catch (err) {
        console.error("Error in fetching data", err);
      }
    };

    if (session?.user.id && status == "authenticated") {
      fetchData();
    }
  }, [id, session]);

  return (
    <div className="flex justify-center items-center mt-10 gap-5 h-sm ml-5 mr-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {userData && userData.map((user, index) => (
          <div key={index}>
            <h2>{user.cardModel.model}</h2>
            {user.cardModel.model === "CardOne" ?  <UserCardOne userData={user} /> : "" }
             {user.cardModel.model === "CardTwo" ?  <UserCardTwo userData={user} /> : "" }
             {user.cardModel.model === "CardThree" ?  <UserCardThree userData={user} /> : "" }
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;