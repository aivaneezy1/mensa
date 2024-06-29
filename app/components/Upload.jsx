import React, { useState, useEffect } from "react";
import Image from "next/image";
const Upload = (props) => {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      props.setSelectedImage(imageUrl);
    }
  };

    
  useEffect(() =>{

  },[])


  return (
    <div>
      <div className="flex flex-col bg-transparent border py-10 mt-2 rounded-md">
        <label className="flex flex-col justify-center gap-1 items-center bg-transparent p-4 text-2xl text-gray-600 cursor-pointer ">
          {props.selectedImage ? (
            <Image
              className="w-full h-auto  object-cover"
              src={props.selectedImage}
              alt="p"
              width={150}
              height={150}
            />
          ) : (
            <>
              <input
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                />
              </svg>
              Carica una foto
            </>
          )}
        </label>
      </div>
    </div>
  );
};

export default Upload;
