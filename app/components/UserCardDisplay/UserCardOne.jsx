"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import UserCardOneZoomed from "./UserCardOneZoomed";
import Link from "next/link";
import { DatiContext } from "@/app/context/DatiContext";
import CardOneDocument from "../Documents/CardOneDocument";
import { PDFDownloadLink } from "@react-pdf/renderer";

const UserCardOne = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const datiPersonali = (dati, dati2, dati3, dati4) => {
    return (
      <div className="flex flex-row gap-2 items-center w-sm">
        <div className="font-medium text-xxs">
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

  const compAndLang = (data) => {
    return (
      <>
        {data.map((post, index) => (
          <div key={index}>
            <p className="font-medium text-xxs text-center">
              {post.competenza}
            </p>
            <p className="text-gray-500 text-xxs text-center">{post.livello}</p>
          </div>
        ))}
      </>
    );
  };

  const bgProfessional = (data) => {
    return (
      <>
        {data.length > 0 &&
          data.map((post, index) => (
            <div key={index}>
              <p className="font-bold text-xxs mt-2">{post.data}</p>
              <p className="text-blue-500 font-semibold text-xxs">
                {post.dataInizioAnno} {post.dataInizio} - {post.dataFineAnno}{" "}
                {post.dataFine}
              </p>
              <p className="text-gray-500 font-semibold text-xxs">
                {post.istitute} | {post.city}
              </p>
              <p className="mt-1 text-xxs">{post.content}</p>
            </div>
          ))}
      </>
    );
  };

  // Document One
  const handleDownloadDocument = () => {
    return (
      <CardOneDocument
        cardColors={props.userData.cardModel.color}
        selectedImage={props.userData.datiPersonali.image}
        name={props.userData.datiPersonali.nome}
        lastName={props.userData.datiPersonali.cognome}
        email={props.userData.datiPersonali.email}
        phone={props.userData.datiPersonali.telefono}
        address={props.userData.datiPersonali.indirizzo}
        postalCode={props.userData.datiPersonali.codicePostale}
        city={props.userData.datiPersonali.city}
        dateBirth={props.userData.datiPersonali.dataNascita}
        placeBirth={props.userData.datiPersonali.luogoNascita}
        genere={props.userData.datiPersonali.gender}
        civilStatus={props.userData.datiPersonali.statoCivili}
        nationality={props.userData.datiPersonali.nationality}
        license={props.userData.datiPersonali.patente}
        website={props.userData.datiPersonali.sitoWeb}
        linkin={props.userData.datiPersonali.linkin}
        compFieldList={props.userData.compAndLang.competenza}
        langFieldList={props.userData.compAndLang.lingua}
        profileContent={props.userData.profile?.data}
        formDataFieldList={props.userData.bgProfessional.istruzioneData}
        exprDataFieldList={props.userData.bgProfessional.esperienzeData}
      />
    );
  };

  return (
    <div
      className={`grid grid-cols-2  sm:p-2 min-w-sm h-auto mx-auto shadow-md relative h-full ${
        isHovered ? "bg-gray-100 0" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-2 right-2 cursor-pointer z-20">
        <button onClick={() => setIsZoomed(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-6 h-6"
          >
            <path
              fill="#63E6BE"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </button>
      </div>

      {/* Left side div */}
      <div
        className={`gap-2 flex flex-col justify-start items-center mt-5   max-w-xs shadow-md border`}
        style={{ backgroundColor: props.userData.cardModel.color }}
      >
        <div className="mt-2">
          <Image
            src={
              props.userData.datiPersonali.image
                ? props.userData.datiPersonali.image
                : ""
            }
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
            <hr className="border border-b border-blue-500 w-1/2 my-1 mt-2" />
          </div>
          <div className="mt-2 flex gap-0.5 flex-col justify-start">
            {(props.userData.datiPersonali.nome ||
              props.userData.datiPersonali.cognome) &&
              datiPersonali(
                props.userData.datiPersonali.nome,
                props.userData.datiPersonali.cognome
              )}
            {/* Email */}
            {props.userData.datiPersonali.email &&
              datiPersonali(props.userData.datiPersonali.email)}

            {/* Phone Number */}
            {props.userData.datiPersonali.telefono &&
              datiPersonali(props.userData.datiPersonali.telefono)}

            {/* Address */}
            {(props.userData.datiPersonali.indirizzo ||
              props.userData.datiPersonali.codicePostale ||
              props.userData.datiPersonali.city) &&
              datiPersonali(
                props.userData.datiPersonali.indirizzo,
                props.userData.datiPersonali.codicePostale,
                props.userData.datiPersonali.city
              )}

            {/* Date of birth */}
            {props.userData.datiPersonali.dataNascita &&
              datiPersonali(props.userData.datiPersonali.dataNascita)}

            {/* Place of birth */}
            {props.userData.datiPersonali.luogoNascita &&
              datiPersonali(props.userData.datiPersonali.luogoNascita)}

            {/* Gender */}
            {props.userData.datiPersonali.gender &&
              datiPersonali(props.userData.datiPersonali.gender)}

            {/* Nazionalita' */}
            {props.userData.datiPersonali.nationality &&
              datiPersonali(props.userData.datiPersonali.nationality)}

            {/* Civil Status */}
            {props.userData.datiPersonali.statoCivili &&
              datiPersonali(props.userData.datiPersonali.statoCivili)}

            {/* Licnese */}
            {props.userData.datiPersonali.patente &&
              datiPersonali(props.userData.datiPersonali.patente)}

            {/* WEbsite */}
            {props.userData.datiPersonali.sitoWeb &&
              datiPersonali(props.userData.datiPersonali.sitoWeb)}

            {/* Linkin */}
            {props.userData.datiPersonali.linkin &&
              datiPersonali(props.userData.datiPersonali.linkin)}
          </div>
        </div>

        <hr className="border border-b border-blue-500 w-1/6 my-1" />

        {/* Competence */}
        <div className="flex flex-col justify-start items-center">
          <h2 className="text-title font-bold">Competenze</h2>
          {props.userData.compAndLang.competenza.length > 0 &&
            compAndLang(props.userData.compAndLang.competenza)}
        </div>

        <hr className="border border-b border-blue-500 w-1/6 my-1" />

        {/* Languages */}
        <div className="flex flex-col justify-start items-center">
          <h2 className="text-title font-bold">Lingue</h2>
          {props.userData.compAndLang.lingua.length > 0 &&
            compAndLang(props.userData.compAndLang.lingua)}
        </div>

        <hr className="border border-b border-blue-500 w-1/6 my-1" />
      </div>

      {/* RIGHT DIV */}
      <div className="flex flex-col mt-2 ml-2 mb-2 max-w-xs mt-5">
        {/* Name */}
        <div className="mb-1 mt-5">
          <h2 className="text-xxs font-semibold">
            {props.userData.datiPersonali.nome}
          </h2>
          <h2 className="text-xxs text-gray-500 mt-1 font-semibold">
            {props.userData.datiPersonali.cognome}
          </h2>
        </div>

        <hr className="border border-b border-blue-500 w-1/2 my-1" />

        {/* Profile */}
        <div className="mb-1">
          <h2 className="text-title font-bold">Profilo</h2>
          <p className="text-xxs">{props.userData.profile?.data}</p>
        </div>

        <hr className="border border-b border-blue-500 w-1/2 my-1" />

        {/* Istruzione */}
        <div className="mb-1">
          <h2 className="text-title font-bold">Istruzione</h2>
          {props.userData.bgProfessional.istruzioneData.length > 0 &&
            bgProfessional(props.userData.bgProfessional.istruzioneData)}
        </div>

        <hr className="border border-b border-blue-500 w-1/2 my-1" />

        {/* Experience */}
        <div className="mb-1">
          <h2 className="mb-1 text-title font-bold">Esperienze</h2>
          {props.userData.bgProfessional.esperienzeData.length > 0 &&
            bgProfessional(props.userData.bgProfessional.esperienzeData)}
        </div>
      </div>

      {isHovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10">
          <div className="rounded-lg flex flex-col items-center">
            <Link href={`/edit?id=${props.postId}`}>
              <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mb-2 hover:bg-blue-600 transition">
                Modifica
              </button>
            </Link>

            {/*Download button */}
            <PDFDownloadLink
              document={
                <CardOneDocument
                  cardColors={props.userData.cardModel.color}
                  selectedImage={props.userData.datiPersonali.image}
                  name={props.userData.datiPersonali.nome}
                  lastName={props.userData.datiPersonali.cognome}
                  email={props.userData.datiPersonali.email}
                  phone={props.userData.datiPersonali.telefono}
                  address={props.userData.datiPersonali.indirizzo}
                  postalCode={props.userData.datiPersonali.codicePostale}
                  city={props.userData.datiPersonali.city}
                  dateBirth={props.userData.datiPersonali.dataNascita}
                  placeBirth={props.userData.datiPersonali.luogoNascita}
                  genere={props.userData.datiPersonali.gender}
                  civilStatus={props.userData.datiPersonali.statoCivili}
                  nationality={props.userData.datiPersonali.nationality}
                  license={props.userData.datiPersonali.patente}
                  website={props.userData.datiPersonali.sitoWeb}
                  linkin={props.userData.datiPersonali.linkin}
                  compFieldList={props.userData.compAndLang.competenza}
                  langFieldList={props.userData.compAndLang.lingua}
                  profileContent={props.userData.profile?.data}
                  formDataFieldList={
                    props.userData.bgProfessional.istruzioneData
                  }
                  exprDataFieldList={
                    props.userData.bgProfessional.esperienzeData
                  }
                />
              }
              fileName="cv.pdf"
              className="bg-green-500 text-white rounded-lg px-4 py-2 mb-2 hover:bg-green-600 transition"
            >
              {({ blob, url, loading, error }) =>
                loading ? "Loading document..." : "Download CV"
              }
            </PDFDownloadLink>

            <button
              onClick={() => props.handleDelete(props.postId)}
              className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {/* Modal for zoomed content */}
      <UserCardOneZoomed
        color={props.userData.cardModel.color}
        image={
          props.userData.datiPersonali.image
            ? props.userData.datiPersonali.image
            : ""
        }
        nome={props.userData.datiPersonali.nome}
        cognome={props.userData.datiPersonali.cognome}
        email={props.userData.datiPersonali.email}
        telefono={props.userData.datiPersonali.telefono}
        address={props.userData.datiPersonali.indirizzo}
        codicePostale={props.userData.datiPersonali.codicePostale}
        city={props.userData.datiPersonali.city}
        dataNascita={props.userData.datiPersonali.dataNascita}
        luogoNascita={props.userData.datiPersonali.luogoNascita}
        gender={props.userData.datiPersonali.gender}
        nationality={props.userData.datiPersonali.nationality}
        statoCivili={props.userData.datiPersonali.statoCivili}
        patente={props.userData.datiPersonali.patente}
        website={props.userData.datiPersonali.sitoWeb}
        linkin={props.userData.datiPersonali.linkin}
        competenza={props.userData.compAndLang.competenza}
        lingua={props.userData.compAndLang.lingua}
        profile={props.userData.profile?.data}
        istruzioneData={props.userData.bgProfessional.istruzioneData}
        esperienzeData={props.userData.bgProfessional.esperienzeData}
        isZoomed={isZoomed}
        setIsZoomed={setIsZoomed}
      />
    </div>
  );
};

export default UserCardOne;
