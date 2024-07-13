"use client";
import React, { useContext, useState, useEffect } from "react";
import CardOneDisplay from "../CardDisplay/CardOneDisplay";
import CardTwoDisplay from "../CardDisplay/CardTwoDisplay";
import CardThreeDisplay from "../CardDisplay/CardThreeDisplay";
import { DatiContext } from "@/app/context/DatiContext";
import Link from "next/link";
import Image from "next/image";
import CircularIndeterminate from "@/app/utils/Loading";
const Hero = () => {
  const {
    cardOneColor,
    setCardOneColor,
    cardTwoColor,
    setCardTwoColor,
    cardThreeColor,
    setCardThreeColor,
    cardOneSelected,
    setCardOneSelected,
    cardTwoSelected,
    setCardTwoSelected,
    cardThreeSelected,
    setCardThreeSelected,
  } = useContext(DatiContext);

  const [isLoadingCardOne, setIsLoadingCardOne] = useState(true);
  const [isLoadingCardTwo, setIsLoadingCardTwo] = useState(true);
  const [isLoadingCardThree, setIsLoadingCardThree] = useState(true);

  // Simulate loading with useEffect for demonstration
  useEffect(() => {
    setTimeout(() => setIsLoadingCardOne(false), 1000);
    setTimeout(() => setIsLoadingCardTwo(false), 1500);
    setTimeout(() => setIsLoadingCardThree(false), 2000);
  }, []);

  const handleColorCardOne = (color) => {
    setCardOneColor(color);
  };

  const handleColorCardTwo = (color) => {
    setCardTwoColor(color);
  };

  const handleColorCardThree = (color) => {
    setCardThreeColor(color);
  };

  const handleCardChoice = (card, event) => {
    if (event.button === 0) {
      // Left-click
      if (card === "cardOne") {
        setCardOneSelected(!cardOneSelected);
        setCardTwoSelected(false);
        setCardThreeSelected(false);
      } else if (card === "cardTwo") {
        setCardTwoSelected(!cardTwoSelected);
        setCardOneSelected(false);
        setCardThreeSelected(false);
      } else if (card === "cardThree") {
        setCardThreeSelected(!cardThreeSelected);
        setCardOneSelected(false);
        setCardTwoSelected(false);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 ml-5 mr-5 min-h-screen mb-20">
      <div className="flex flex-col h-full">
        {isLoadingCardOne ? (
          <CircularIndeterminate />
        ) : (
          <>
            <CardOneDisplay
              selectedColor={cardOneColor}
              handleColorChange={handleColorCardOne}
              className="flex-1"
            />
            <div className="flex justify-center items-center mt-2">
              <Link href="/create-cv">
                <button
                  className="rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white"
                  onMouseDown={(event) => handleCardChoice("cardOne", event)}
                >
                  Usa Questa Modello
                </button>
              </Link>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col h-full">
        {isLoadingCardTwo ? (
          <CircularIndeterminate />
        ) : (
          <>
            <CardTwoDisplay
              selectedColor={cardTwoColor}
              handleColorChange={handleColorCardTwo}
              className="flex-1"
            />
            <div className="flex justify-center items-center mt-2">
              <Link href="/create-cv">
                <button
                  className="rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white"
                  onMouseDown={(event) => handleCardChoice("cardTwo", event)}
                >
                  Usa Questa Modello
                </button>
              </Link>
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col h-full">
        {isLoadingCardThree ? (
          <CircularIndeterminate />
        ) : (
          <>
            <CardThreeDisplay
              selectedColor={cardThreeColor}
              handleColorChange={handleColorCardThree}
              className="flex-1"
            />
            <div className="flex justify-center items-center mt-2">
              <Link href="/create-cv">
                <button
                  className="rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white"
                  onMouseDown={(event) => handleCardChoice("cardThree", event)}
                >
                  Usa Questa Modello
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
