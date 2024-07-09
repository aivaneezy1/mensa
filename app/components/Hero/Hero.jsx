"use client";
import React, { useContext, useState } from "react";
import CardOneDisplay from "../CardDisplay/CardOneDisplay";
import CardTwoDisplay from "../CardDisplay/CardTwoDisplay";
import CardThreeDisplay from "../CardDisplay/CardThreeDisplay";
import { DatiContext } from "@/app/context/DatiContext";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  const {
     cardOneColor, setCardOneColor,
     cardTwoColor, setCardTwoColor,
     cardThreeColor, setCardThreeColor,
  } = useContext(DatiContext);

  const handleColorCardOne = (color) => {
    setCardOneColor(color);
  };

  const handleColorCardTwo = (color) => {
    setCardTwoColor(color)
  };

  const handleColorCardThree = (color) => {
    setCardThreeColor(color);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-5">
        <div className="sm:mt-5">
          <h2 className="text-4xl font-bold text-center">
            Crea il tuo curriculum in pochi minuti e scaricalo gratuitamente!
          </h2>
          <h2 className="text-2xl text-gray-500 mt-5 text-center">
            Scegli tra i migliori modelli e personalizza i colori con facilità
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 ml-5 mr-5  min-h-screen mb-20">
        <div className="flex flex-col h-full">
          <CardOneDisplay
            selectedColor={ cardOneColor}
            handleColorChange={handleColorCardOne}
            className="flex-1"
          />
          <div className="flex justify-center items-center mt-2">
            <Link href="/create-cv">
              <button className="rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white">
                Usa Questa Modello
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <CardTwoDisplay
            selectedColor={ cardTwoColor}
            handleColorChange={handleColorCardTwo}
            className="flex-1"
          />
          <div className="flex justify-center items-center mt-2">
            <Link href="/create-cv">
              <button className="rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white">
                Usa Questa Modello
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <CardThreeDisplay
            selectedColor={cardThreeColor}
            handleColorChange={handleColorCardThree}
            className="flex-1"
          />
          <div className="flex justify-center items-center mt-2">
            <Link href="/create-cv">
              <button className="rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white">
                Usa Questa Modello
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
