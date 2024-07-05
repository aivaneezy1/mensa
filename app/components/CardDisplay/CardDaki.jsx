"use client"
import React, {useState} from "react";
import Image from "next/image";
const CardDaki = (props) => {
  const [isHovered, setIsHovered] = useState(false);


  // white,pink, greenish,bl
  const colors = ["#FFFFFF", "#ffcccc", "#ccffcc", "#F5F5DC", "#ccccff", "#FFDAB9"]; // Example colors
  return (
    <div
      className="grid grid-cols-2  sm:p-2 max-w-screen-sm mx-auto shadow-md relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

    >
      {/* LEFT SIDE DIV */}
      <div className={`gap-2 flex flex-col justify-center items-center max-w-xs`} style={{ backgroundColor: props.selectedColor }}>
        <div className="border border-orange-400 p-0.5 mt-2">
          <Image src="/randon.jpg" alt="pic" width={60} height={60} />
        </div>

        {/* Personal Data */}
        <div className="">
          <div>
            <h2 className="text-xs font-bold">Personal Dati</h2>
          </div>
          <div className="mt-2 flex gap-0.5 flex-col justify-start">
            <p className="font-medium text-xs">Aivaneezy Enguio</p>
            <p className="font-medium text-xs">aivaneezy@gmail.com</p>
            <p className="font-medium text-xs">324621299</p>
            <p className="font-medium text-xs">25-06-199</p>
            <p className="font-medium text-xs">Spain</p>
            <p className="font-medium text-xs">Los Pollos Hermanos</p>
            <p className="font-medium text-xs">Male</p>
            <p className="font-medium text-xs">African</p>
            <p className="font-medium text-xs">Single</p>
            <p className="font-medium text-xs">A2 A3</p>
            <p className="font-medium text-xs">https://daki123.com</p>
            <p className="font-medium text-xs">aivaneezy@gmail.com</p>
          </div>
        </div>

        <hr className="border border-b border-orange-500 w-1/6 my-1" />

        {/* Competence */}
        <div className="flex flex-col justify-start items-center">
          <h2 className="text-xs font-bold">Compotenza</h2>
          <p className="font-medium text-xs">Tirocinante</p>
          <p className="text-gray-500 text-xs">Eccelente</p>
        </div>

        <hr className="border border-b border-orange-500 w-1/6 my-1" />

        {/* Languages */}
        <div className="flex flex-col justify-start items-center">
          <h2 className="text-xs font-bold">Lingue</h2>
          <p className="font-medium text-xs">Tirocinante</p>
          <p className="text-gray-500 text-xs">Eccelente</p>
        </div>

        <hr className="border border-b border-orange-500 w-1/6 my-1" />
      </div>

      {/* RIGHT DIV */}
      <div className="flex flex-col mt-2 ml-2 mb-2 max-w-xs">
        {/* Name */}
        <div className="mb-1">
          <h2 className="text-xs font-semibold">Aivan Jim</h2>
          <h2 className="text-xs text-gray-500 mt-1 font-semibold">Enguio</h2>
        </div>

        <hr className="border border-b border-orange-500 w-1/2 my-1" />

        {/* Profile */}
        <div className="mb-1">
          <h2 className="text-xs font-bold">Profile</h2>
          <p className="text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>

        <hr className="border border-b border-orange-500 w-1/2 my-1" />

        {/* Istruzione */}
        <div className="mb-1">
          <h2 className="text-xs font-bold">Istruzione</h2>
          <p className="font-bold text-xs">Bachelors of Science in Nursing</p>
          <p className="text-blue-500 font-semibold text-xs">
            2023 Gen- 2012 Nov
          </p>
          <p className="text-gray-500 font-semibold text-xs">
            Universita di Pisa | Pisa
          </p>
          <p className="mt-1 text-xs">
            Relevant coursework: Anatomy and physiology, pharmacology, nursing
            ethics, and patient care management.
          </p>
        </div>

        <hr className="border border-b border-orange-500 w-1/2 my-1" />

        {/* Experience */}
        <div className="mb-1">
          <h2 className="mb-1 text-xs font-bold">Experience</h2>
          <p className="font-bold text-xs">Bachelors of Science in Nursing</p>
          <p className="text-blue-500 font-semibold text-xs">
            2023 Gen- 2012 Nov
          </p>
          <p className="text-gray-500 font-semibold text-xs">
            Universita di Pisa | Pisa
          </p>
          <p className="mt-1 text-xs">
            Relevant coursework: Anatomy and physiology, pharmacology, nursing
            ethics, and patient care management.
          </p>
        </div>
      </div>

      {/* Color selection menu */}
      {isHovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="bg-white border border-2 rounded-lg flex px-4 py-2 shadow-lg">
            {colors.map((color, idx) => (
              <div
                key={idx}
                className="w-6 h-6 rounded-full  cursor-pointer border mr-1"
                style={{ backgroundColor: color }}
                onClick={() => props.handleColorChange(props.index, color)}
              />
            ))}
          </div>
        </div>
      )}

      
    </div>
  );
};

export default CardDaki;
