"use client"
import React, { useState } from "react";
import CardDaki from "../CardDisplay/CardDaki";

const Hero = () => {
  const [cardColors, setCardColors] = useState(['']); // Initial colors for each card

 

  const handleColorChange = (index, color) => {
    const updatedColors = [...cardColors];
    updatedColors[index] = color;
    setCardColors(updatedColors);
  };



  return (
    <>
      <div className="flex justify-center items-center flex-col mt-5">
        <div className="sm:mt-5">
          <h2 className="text-4xl font-bold text-center">
            Create your curriculum in few minutes!
          </h2>
          <h2 className="text-2xl text-gray-500 mt-5 text-center">
            Choose the best models for your curriculum
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-20 ml-5 mr-5 h-full min-h-screen mb-20">
        {cardColors.map((color, index) => (
          <div key={index}>
            <CardDaki
              index={index}
              selectedColor={color}
              handleColorChange={handleColorChange}
            />
            <div className="flex justify-center items-center mt-2">
            <button className="rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white">Usa Questa Modello</button>
            </div>
          </div>
          
        ))}
    
      </div>
    </>
  );
};

export default Hero;