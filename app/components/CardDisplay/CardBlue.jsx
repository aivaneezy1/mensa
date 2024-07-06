"use client";
import React, { useState } from "react";
import Image from "next/image";
const CardBlue = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const datiPersonali = (image, dati, dati2, dati3, dati4) => {
    return (
      <div className="flex flex-row gap-2  items-center  w-sm ">
        <div className="">{image}</div>
        <div className=" font-medium text-xs">
          <p className="font-medium text-xs">
            {dati} {dati2}
          </p>
          <p className="font-medium text-xs">
            {dati3} {dati4}
          </p>
        </div>
      </div>
    );
  };

  // white,pink, greenish,bl
  const colors = [
    "#FFFFFF",
    "#ffcccc",
    "#ccffcc",
    "#F5F5DC",
    "#ccccff",
    "#FFDAB9",
  ]; // Example colors
  return (
    <div
      className="grid grid-cols-2  sm:p-2 max-w-screen-sm mx-auto shadow-md relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LEFT SIDE DIV */}
      <div
        className={`gap-2 flex flex-col justify-start items-center mt-5 max-w-xs bg-gray-100 border-r border-gray-500 border-md border-solid`}
        style={{ backgroundColor: props.selectedColor }}
      >
        <div className="  mt-2">
          <Image
            src="/randon.jpg"
            alt="pic"
            width={60}
            height={60}
            className="rounded-full border bg-white"
          />
        </div>

        {/* Personal Data */}
        <div className="flex justify-start flex-col">
          <div>
            <h2 className="text-xs font-bold  border-b border-gray-500 border-solid text-center">Personal Dati</h2>
          </div>
          {/*Name and Lastname */}
          <div className="mt-2 flex gap-0.5 flex-col justify-start items-start ">
            {datiPersonali(
              <svg 
              xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 448 512"
               className="w-3 h-3">
                <path
                  fill="#74C0FC"
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                />
              </svg>,
              "Aivan Jim",
              "Enguio"
            )}
            {/*Email */}
            {datiPersonali(
                <svg 
                xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512"
                 className="w-3 h-3">
                  <path
                    fill="#74C0FC"
                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                  />
                </svg>,
                "aivaneezy@gmail.com"
              )}
            {/*Phone number */}
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
      <div className="flex flex-col mt-2 ml-2 mb-2 max-w-xs mt-5">
        {/* Name */}
      

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

export default CardBlue;
