"use client"
import React, {useState} from "react";
import Image from "next/image";
const UserCardOne = () => {
  const [isHovered, setIsHovered] = useState(false);
  const datiPersonali = (dati, dati2, dati3, dati4) => {
    return (
      <div className="flex flex-row gap-2  items-center  w-sm ">
        <div className=" font-medium text-xxs">
          <p className="font-medium text-xxs">
            {dati} {dati2}
          </p>
          <p className="font-medium text-xxs">
            {dati3} {dati4}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`grid grid-cols-2  sm:p-2 max-w-screen-sm mx-auto shadow-md relative h-full ${isHovered ? "bg-gray-100" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/*Left side div */}
      <div
        className={`gap-2  flex flex-col justify-start items-center mt-5  max-w-xs shadow-md border`}
      >
        <div className=" mt-2">
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/35af6a41332353.57a1ce913e889.jpg"
            alt="pic"
            width={20}
            height={20}
            className="h-auto w-auto"
          />
        </div>

        {/* Personal Data */}
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-title font-bold">Dati Personali</h2>
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
          <h2 className="text-title font-bold">Competenze</h2>
          <p className="font-medium text-xxs">Sicurezza Informatica</p>
          <p className="text-gray-500 text-xxs">Eccelente</p>

          <p className="font-medium text-xxs">Sviluppo Software</p>
          <p className="text-gray-500 text-xxs">Buono</p>
        </div>

        <hr className="border border-b border-blue-500 w-1/6 my-1" />

        {/* Languages */}
        <div className="flex flex-col justify-start items-center">
          <h2 className="text-title font-bold">Lingue</h2>
          <p className="font-medium text-xxs">Inglese</p>
          <p className="text-gray-500 text-xxs">Eccelente</p>
          <p className="font-medium text-xxs">Italiano</p>
          <p className="text-gray-500 text-xxs">Fluente</p>
          <p className="font-medium text-xxs">Spagnolo</p>
          <p className="text-gray-500 text-xxs">Elementare</p>
        </div>

        <hr className="border border-b border-blue-500 w-1/6 my-1" />
      </div>

      {/* RIGHT DIV */}
      <div className="flex flex-col mt-2 ml-2 mb-2 max-w-xs">
        {/* Name */}
        <div className="mb-1 mt-5  ">
          <h2 className="text-xxs font-semibold">Mario</h2>
          <h2 className="text-xxs text-gray-500 mt-1 font-semibold">Rossi</h2>
        </div>

        <hr className="border border-b border-blue-500 w-1/2 my-1" />

        {/* Profile */}
        <div className="mb-1">
          <h2 className="text-title font-bold">Profilo</h2>
          <p className="text-xxs">
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
          <h2 className="text-title font-bold">Istruzione</h2>
          <p className="font-bold text-xxs mt-2">
            Laurea Magistrale in Informatica
          </p>
          <p className="text-blue-500 font-semibold text-xxs">
            2023 Gen- 2012 Nov
          </p>
          <p className="text-gray-500 font-semibold text-xxs">
            Universita di Pisa | Pisa
          </p>
          <p className="mt-1 text-xxs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>

          <p className="font-bold text-xxs mt-2">
            Diploma di Maturità Scientifica
          </p>
          <p className="text-blue-500 font-semibold text-xxs">
            2023 Gen- 2012 Nov
          </p>
          <p className="text-gray-500 font-semibold text-xxs">
            Liceo Scientifico | Pisa
          </p>
          <p className="mt-1 text-xxs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <hr className="border border-b border-blue-500 w-1/2 my-1" />

        {/* Experience */}
        <div className="mb-1">
          <h2 className="mb-1 text-title font-bold">Esperienze</h2>
          <p className="font-bold text-xxs">Senior IT Consultant</p>
          <p className="text-blue-500 font-semibold text-xxs">
            2023 Gen- 2012 Nov
          </p>
          <p className="text-gray-500 font-semibold text-xxs">
            Universita di Pisa | Pisa
          </p>
          <p className="mt-1 text-xxs">
            Gestione progetti IT complessi per clienti aziendali, inclusa la
            pianificazione, l&#39;implementazione e il monitoraggio delle
            soluzioni informatiche.
          </p>
        </div>
      </div>

      {isHovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
          <div className="bg-white border border-2 rounded-lg flex px-4 py-2 shadow-lg">
            Modfica
          </div>
          <div>
          Scarica
          </div>
          <div>
          Delete
          </div>
        </div>
      )}
    </div>

    
  );
};

export default UserCardOne;
