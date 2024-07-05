import React from "react";
import CardDaki from "../CardDisplay/CardDaki";
import { Component } from "../CardDisplay/Test";
const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-5  ">
        <div className=" sm:mt-5">
         <h2 className="text-4xl font-bold text-center">
          Create your curriculum in few minutes!
        </h2>
        <h2 className="text-2xl text-gray-500 mt-5 text-center ">
          Choose the best models for your curriculum
        </h2>
        </div>
     
      </div>

      {/* Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20 ml-5 mr-5  h-full min-h-screen mb-20">
          <div className="">
            <CardDaki />
          </div>
           <div className="">
            <CardDaki />
          </div>

           <div className="">
            <CardDaki />
          </div>




          
        </div>
    </>
  );
};

export default Hero;
