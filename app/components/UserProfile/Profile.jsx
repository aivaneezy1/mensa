"use client";

import UserCardOne from "../UserCardDisplay/UserCardOne";
import UserCardTwo from "../UserCardDisplay/UserCardTwo";
import UserCardThree from "../UserCardDisplay/UserCardThree";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import CircularIndeterminate from "@/app/utils/Loading";

const UserProfile = () => {
  // Getting the query paramater
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [postDelete, setPostDelete] = useState(false);

  // GET API
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
      
      } catch (err) {
        console.error("Error in fetching data", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (session?.user.id && status == "authenticated") {
      fetchData();
    }
  }, [id, session]);


  
  //DELETE API
   const handleDelete = async (id) =>{
    try{
      const res = await fetch(`/api/delete/${id}`,{
        method: "DELETE"
      })
      setUserData(userData.filter(post => post._id !== id))
      setPostDelete(true);
    }catch(err){
        console.error("Error deleting post", err);
    }
  }



  return (
    <div className="flex justify-center items-center mt-10 gap-5 h-sm ml-5 mr-5">
      {isLoading && (
        <div>
          <CircularIndeterminate />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userData &&
          userData.map((post, index) => (
            <div key={index}>
            <h2>card {post.cardModel.model }</h2>
              {/*Passing the  userData, postId of the db and model type as props */}
              {post.cardModel.model === "CardOne" ? (
                <UserCardOne
                  userData={post}
                  setUserData={setUserData}
                  postId={post._id}
                  cardModel={post.cardModel.model}
                  handleDelete={handleDelete}
                />
              ) : (
                ""
              )}
               {/*Passing the  userData, postId of the db and model type as props */}
              {post.cardModel.model === "CardTwo" ? (
                <UserCardTwo
                  userData={post}
                  postId={post._id}
                  cardModel={post.cardModel.model}
                 handleDelete={handleDelete}
                />
              ) : (
                ""
              )}
               {/*Passing the  userData, postId of the db and model type as props */}
              {post.cardModel.model === "CardThree" ? (
                <UserCardThree
                  userData={post}
                  postId={post._id}
                  cardModel={post.cardModel.model}
                  handleDelete={handleDelete}
                />
              ) : (
                ""
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserProfile;
