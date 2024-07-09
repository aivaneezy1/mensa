"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { DatiContext } from "@/app/context/DatiContext";

const CardOneModel = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  let currentYear = new Date().getFullYear();
  const { setCardOneColor } = useContext(DatiContext);
     const hasPersonalData =
    props.selectedImage ||
    props.name ||
    props.email ||
    props.phone ||
    props.address ||
    props.dateBirth ||
    props.placeBirth ||
    props.genere ||
    props.nationality ||
    props.civilStatus ||
    props.license ||
    props.website ||
    props.linkin;

  const handleChangeColor = (color) => {
    setCardOneColor(color);
  };

  const datiPersonali = (dati, dati2, dati3, dati4) => {
    return (
      <div className="flex flex-row gap-2  items-center  w-sm ">
        <div className=" font-medium text-xs">
          <p className="font-medium text-xs break-words whitespace-normal">
            {dati} {dati2}
          </p>
          <p className="font-medium text-xs break-words whitespace-normal">
            {dati3} {dati4}
          </p>
        </div>
      </div>
    );
  };

  const compAndLang = (data) => {
    return (
      <>
        {data.map((post, index) => (
          <div key={index}>
            <p className="font-medium text-xs break-words whitespace-normal">
              {post.competenza}
            </p>
            <p className="text-gray-500 text-xs break-words whitespace-normal">
              {post.livello}
            </p>
          </div>
        ))}
      </>
    );
  };

  const handleProfile = (data) => {
    // Configure DOMPurify to allow specific tags
    const cleanHTML = DOMPurify.sanitize(data);
    console.log("clean", cleanHTML);
    return (
      <>
        {data ? (
          <div className="mt-2 break-all whitespace-pre-line">
            <div
              className="break-words text-xs"
              dangerouslySetInnerHTML={{ __html: cleanHTML }}
            />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  const handleBgData = (data) => {
    return (
      <>
        {data.length > 0 &&
          data.map((post, index) => (
            <div key={index} className="flex flex-col  ">
              <p className=" text-xs break-words font-bold  whitespace-normal mt-2">
                {post.data}
              </p>
              <p className="text-xs text-gray-500 whitespace-nowrap font-semibold text-sm">
                {post.dataInizioAnno ? post.dataInizioAnno : currentYear}{" "}
                {post.dataInizio} -{" "}
                {post.dataFineAnno ? post.dataFineAnno : currentYear}{" "}
                {post.dataFine}
              </p>
              {(post.istitute || post.city) && (
                <p className="text-gray-500 whitespace-nowrap font-semibold text-xs">
                  {post.istitute} | {post.city}
                </p>
              )}
              <div className="mt-2 break-all whitespace-pre-line text-sm">
                <div
                  className="break-words text-xs"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.content),
                  }}
                />
              </div>
            </div>
          ))}
      </>
    );
  };

  const colors = [
    "#FFFFFF",
    "#ffcccc",
    "#ccffcc",
    "#F5F5DC",
    "#ccccff",
    "#FFDAB9",
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
        style={{ backgroundColor: props.cardColors }}
      >
        {props.selectedImage && (
          <div className="border border-orange-400 p-2 mt-2">
            <Image
              src={props.selectedImage}
              alt="pic"
              width={150}
              height={150}
              className="rounded-sm"
            />
          </div>
        )}

        {/* Personal Data */}
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-s font-bold">Dati Personali</h2>
            {hasPersonalData && (<hr className="border border-b border-orange-500 w-1/2 my-1  mt-2" />)}
          </div>
          <div className="mt-2 flex gap-0.5 flex-col justify-start">
            {/*Name */}
            {(props.name || props.lastName) &&
              datiPersonali(props.name, props.lastName)}

            {/*Email */}
            {props.email && datiPersonali(props.email)}
            {/*Phone Number */}
            {props.phone && datiPersonali(props.phone)}
            {/*Address */}
            {(props.address || props.postalCode || props.city) && (
              <>{datiPersonali(props.address, props.postalCode, props.city)}</>
            )}
            {/*Date of birth */}
            {props.dateBirth && <>{datiPersonali(props.dateBirth)}</>}
            {/*Place of birth */}
            {props.placeBirth && <>{datiPersonali(props.placeBirth)}</>}
            {/*Gender */}
            {props.genere && <>{datiPersonali(props.genere)}</>}
            {/*Nazionalita' */}
            {props.nationality && <>{datiPersonali(props.nationality)}</>}
            {/*Civil Status */}
            {/*Civil Status */}
            {props.civilStatus && <>{datiPersonali(props.civilStatus)}</>}
            {/*Licnese */}
            {props.license && <>{datiPersonali(props.license)}</>}
            {/*WEbsite */}
            {props.website && <>{datiPersonali(props.website)}</>}
            {/*Linkin */}
            {props.linkin && <>{datiPersonali(props.linkin)}</>}
          </div>
        </div>

       {hasPersonalData && ( <hr className="border border-b border-orange-500 w-1/6 my-1" />)}

        {/* Competence */}
        <div className="flex flex-col justify-start items-center">
          <h2 className="text-s font-bold">Competenze</h2>
          <p className="font-medium text-xs">Sicurezza Informatica</p>
          <p className="text-gray-500 text-xs">Eccelente</p>

          <p className="font-medium text-xs">Sviluppo Software</p>
          <p className="text-gray-500 text-xs">Buono</p>
        </div>

        <hr className="border border-b border-orange-500 w-1/6 my-1" />

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

        <hr className="border border-b border-orange-500 w-1/6 my-1" />
      </div>

      {/* RIGHT DIV */}
      <div className="flex flex-col mt-2 ml-2 mb-2 max-w-xs">
        {/* Name */}
        <div className="mb-1 mt-5  ">
          <h2 className="text-xs font-semibold">Mario</h2>
          <h2 className="text-xs text-gray-500 mt-1 font-semibold">Rossi</h2>
        </div>

        <hr className="border border-b border-orange-500 w-1/2 my-1" />

        {/* Profile */}
        <div className="mb-1">
          <h2 className="text-xs font-bold">Profilo</h2>
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
            industry. Lorem Ipsum has been the industry's standard dummy text
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
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <hr className="border border-b border-orange-500 w-1/2 my-1" />

        {/* Experience */}
        <div className="mb-1">
          <h2 className="mb-1 text-xs font-bold">Esperienze</h2>
          <p className="font-bold text-xs">Senior IT Consultant</p>
          <p className="text-blue-500 font-semibold text-xs">
            2023 Gen- 2012 Nov
          </p>
          <p className="text-gray-500 font-semibold text-xs">
            Universita di Pisa | Pisa
          </p>
          <p className="mt-1 text-xs">
            Gestione progetti IT complessi per clienti aziendali, inclusa la
            pianificazione, l'implementazione e il monitoraggio delle soluzioni
            informatiche.
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
                onClick={() => handleChangeColor(color)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CardOneModel;
