"use client";
import React, { useState, useContext,useEffect } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";
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
            <p className="font-medium text-xs break-words whitespace-normal text-center">
              {post.competenza}
            </p>
            <p className="text-gray-500 text-xs break-words whitespace-normal text-center">
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
              <p className="text-xs text-blue-500 whitespace-nowrap font-semibold text-sm">
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
    "#F5F5F5",
    "#EEE8AA",
    "#FAFAD2",
    "#FFF5EE",
    "#E6E6FA ",
  ];
  return (
    <div
      className="grid grid-cols-2  sm:p-2 max-w-screen-sm mx-auto shadow-md relative h-screen h-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LEFT SIDE DIV */}
      <div
        className={`gap-2  flex flex-col justify-start items-center mt-5  max-w-xs shadow-md border h-full`}
        style={{ backgroundColor: props.cardColors }}
      >
        {props.selectedImage && (
          <div className=" mt-2">
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
            {hasPersonalData && (
              <hr className="border border-b border-blue-500 w-1/2 my-1  mt-2" />
            )}
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

        {hasPersonalData && (
          <hr className="border border-b border-blue-500 w-1/6 my-1" />
        )}

        {/* Competence */}
        <div className="flex flex-col justify-start items-center">
         <div>
          <h2 className="text-s font-bold">Competenze</h2>
         </div>
          <div>
          {props.compFieldList.length > 0 && compAndLang(props.compFieldList)}
          </div>
        </div>

        {props.compFieldList.length > 0 && (
          <hr className="border border-b border-blue-500 w-1/6 my-1" />
        )}

        {/* Languages */}
        <div className="flex flex-col justify-start items-center">
          <div>
          <h2 className="text-s font-bold">Lingue</h2>
          </div>
          <div>
          {props.langFieldList.length > 0 && compAndLang(props.langFieldList)}
          </div>
        </div>

        {props.compFieldList.length > 0 && (
          <hr className="border border-b border-blue-500 w-1/6 my-1" />
        )}
      </div>

      {/* RIGHT DIV */}
      <div className="flex flex-col mt-2 ml-2 mb-2 max-w-xs h-full">
        {/* Name */}
        <div className="mb-1 mt-5  ">
          <h2 className="text-sm font-semibold">{props.name}</h2>
          <h2 className="text-sm text-gray-500 mt-1 font-semibold">
            {props.lastName}
          </h2>
        </div>

        {(props.name || props.lastName) && (
          <hr className="border border-b border-blue-500 w-1/2 my-1" />
        )}

        {/* Profile */}
        <div className="mb-1">
          <h2 className="text-s font-bold">Profilo</h2>
          {handleProfile(props.profileContent)}
        </div>

        {props.profileContent && (
          <hr className="border border-b border-blue-500 w-1/2 my-1" />
        )}



        {/* Istruzione */}
        <div className="mb-1">
          <h2 className="text-s font-bold">Istruzione</h2>
         {props.formDataFieldList.length > 0 &&
            handleBgData(props.formDataFieldList)}
        </div>

        {(props.formDataFieldList.length  || props.langFieldList.length > 0) && (
          <hr className="border border-b border-blue-500 w-1/2 my-1" />
        )}

        {/* Experience */}
        <div className="mb-1">
          <h2 className="mb-1 text-s font-bold">Esperienze</h2>
          {props.exprDataFieldList.length > 0 &&
            handleBgData(props.exprDataFieldList)}
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
