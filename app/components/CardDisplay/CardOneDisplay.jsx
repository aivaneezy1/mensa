"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { DatiContext } from "@/app/context/DatiContext";

const CardOneDisplay = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const datiPersonali = (dati, dati2, dati3, dati4) => {
    return (
      <div className="flex flex-row gap-2  items-center  w-sm ">
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

  const colors = [
    "#FFFFFF",
    "#F5F5F5",
    "#EEE8AA",
    "#FAFAD2",
    "#FFF5EE",
    "#E6E6FA ",
  ];
  return (
    <div
      className="grid grid-cols-2  sm:p-2 max-w-screen-sm mx-auto shadow-md relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LEFT SIDE DIV */}
      <div
        className={`gap-2  flex flex-col justify-start items-center mt-5  max-w-xs shadow-md border`}
        style={{ backgroundColor: props.selectedColor }}
      >
        <div className=" mt-2">
          <Image
            src="/images/randon.jpg"
            alt="pic"
            width={60}
            height={60}
            className="h-auto w-auto"
          />
        </div>

        {/* Personal Data */}
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-s font-bold">Dati Personali</h2>
            <hr className="border border-b border-blue-500 w-1/2 my-1  mt-2" />
          </div>
          <div className="mt-2 flex gap-0.5 flex-col justify-start">
            {/*Name */}
            {datiPersonali("Mario", "Rossi")}
            {/*Email */}
            {datiPersonali("mario.rossi@gmail.com")}
            {/*Phone Number */}
            {datiPersonali("324621299")}
            {/*Address */}
            {datiPersonali("Via delle Rose 123, ", "56124", "Pisa")}
            {/*Date of birth */}
            {datiPersonali("04-02-2001")}
            {/*Place of birth */}
            {datiPersonali("Italia")}
            {/*Gender */}
            {datiPersonali("Maschio")}
            {/*Nazionalita' */}
            {datiPersonali("Italiano")}
            {/*Civil Status */}
            {datiPersonali("Studente")}
            {/*Licnese */}
            {datiPersonali("A1,A2,B")}
            {/*WEbsite */}
            {datiPersonali("www.mario-rossi.com")}
            {/*Linkin */}
            {datiPersonali("linkedin.com/in/mariorossi")}
          </div>
        </div>

        <hr className="border border-b border-blue-500 w-1/6 my-1" />

        {/* Competence */}
        <div className="flex flex-col justify-start items-center">
          <h2 className="text-s font-bold">Competenze</h2>
          <p className="font-medium text-xs">Sicurezza Informatica</p>
          <p className="text-gray-500 text-xs">Eccelente</p>

          <p className="font-medium text-xs">Sviluppo Software</p>
          <p className="text-gray-500 text-xs">Buono</p>
        </div>

        <hr className="border border-b border-blue-500 w-1/6 my-1" />

        {/* Languages */}
        <div className="flex flex-col justify-start items-center">
          <h2 className="text-s font-bold">Lingue</h2>
          <p className="font-medium text-xs">Inglese</p>
          <p className="text-gray-500 text-xs">Eccelente</p>
          <p className="font-medium text-xs">Italiano</p>
          <p className="text-gray-500 text-xs">Fluente</p>
          <p className="font-medium text-xs">Spagnolo</p>
          <p className="text-gray-500 text-xs">Elementare</p>
        </div>

        <hr className="border border-b border-blue-500 w-1/6 my-1" />
      </div>

      {/* RIGHT DIV */}
      <div className="flex flex-col mt-2 ml-2 mb-2 max-w-xs">
        {/* Name */}
        <div className="mb-1 mt-5  ">
          <h2 className="text-xs font-semibold">Mario</h2>
          <h2 className="text-xs text-gray-500 mt-1 font-semibold">Rossi</h2>
        </div>

        <hr className="border border-b border-blue-500 w-1/2 my-1" />

        {/* Profile */}
        <div className="mb-1">
          <h2 className="text-s font-bold">Profilo</h2>
          <p className="text-xs">
             Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum this long but without
            any apostrtophe
          </p>
        </div>

        <hr className="border border-b border-blue-500 w-1/2 my-1" />

        {/* Istruzione */}
        <div className="mb-1">
          <h2 className="text-s font-bold">Istruzione</h2>
          <p className="font-bold text-xs mt-2">
            Laurea Magistrale in Informatica
          </p>
          <p className="text-blue-500 font-semibold text-xs">
            2023 Gen- 2012 Nov
          </p>
          <p className="text-gray-500 font-semibold text-xs">
            Universita di Pisa | Pisa
          </p>
          <p className="mt-1 text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>

          <p className="font-bold text-xs mt-2">
            Diploma di Maturità Scientifica
          </p>
          <p className="text-blue-500 font-semibold text-xs">
            2023 Gen- 2012 Nov
          </p>
          <p className="text-gray-500 font-semibold text-xs">
            Liceo Scientifico | Pisa
          </p>
          <p className="mt-1 text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <hr className="border border-b border-blue-500 w-1/2 my-1" />

        {/* Experience */}
        <div className="mb-1">
          <h2 className="mb-1 text-s font-bold">Esperienze</h2>
          <p className="font-bold text-xs">Senior IT Consultant</p>
          <p className="text-blue-500 font-semibold text-xs">
            2023 Gen- 2012 Nov
          </p>
          <p className="text-gray-500 font-semibold text-xs">
            Universita di Pisa | Pisa
          </p>
          <p className="mt-1 text-xs">
            Gestione progetti IT complessi per clienti aziendali, inclusa la
            pianificazione, l&#39;implementazione e il monitoraggio delle
            soluzioni informatiche.
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
                onClick={() => props.handleColorChange(color)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardOneDisplay;
