"use client";
import React, { useState } from "react";
import Image from "next/image";
import UserCardThreeZoomed from "./UserCardThreeZoomed";
const UserCardThree = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const datiPersonali = (image, dati, dati2, dati3, dati4) => {
    return (
      <div className="flex flex-row gap-2  items-center  w-sm ">
        <div className="">{image}</div>
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
      className={`grid grid-cols-2  sm:p-2 min-w-sm h-auto mx-auto shadow-md relative h-full ${
        isHovered ? "bg-gray-100 " : ""
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
      {/* LEFT SIDE DIV */}
      <div
        className={`gap-2 flex flex-col justify-start items-center mt-5 max-w-xs bg-gray-100 border-r border-gray-500 border-md border-solid`}
      >
        <div className="">
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/35af6a41332353.57a1ce913e889.jpg"
            alt="profile"
            width={60}
            height={60}
            className="rounded-sm mt-10 "
          />
        </div>

        {/* Personal Data */}
        <div className="flex justify-start flex-col ">
          <div>
            <h2
              className="text-s  font-bold  border-b border-gray-500 border-solid text-center"
              style={{ color: props.selectedColor }}
            >
              Dati Personali
            </h2>
          </div>
          {/*Name and Lastname */}
          <div className="mt-2 flex gap-0.5 flex-col justify-start items-start ">
            {datiPersonali(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-1 h-1"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>,
              "Mario",
              "Rossi"
            )}
            {/*Email */}
            {datiPersonali(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-1 h-1"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>,
              "mario.rossi@gmail.com"
            )}
            {/*Phone number */}
            {datiPersonali(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-1 h-1"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>,
              "324621299"
            )}

            {/*Address */}
            {datiPersonali(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="w-1 h-1"
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>,
              "Via delle Rose 123, ",
              "56124",
              "Pisa"
            )}

            {/*Date of birth */}
            {datiPersonali(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-1 h-1"
              >
                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" />
              </svg>,
              "04-02-2001"
            )}
            {/*Place of birth */}
            {datiPersonali(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-1 h-1"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>,
              "Italia"
            )}

            {/*Gender */}
            {datiPersonali(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-1 h-1"
              >
                <path d="M176 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM352 176c0 86.3-62.1 158.1-144 173.1V384h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H208v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H112c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V349.1C62.1 334.1 0 262.3 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176zM271.9 360.6c19.3-10.1 36.9-23.1 52.1-38.4c20 18.5 46.7 29.8 76.1 29.8c61.9 0 112-50.1 112-112s-50.1-112-112-112c-7.2 0-14.3 .7-21.1 2c-4.9-21.5-13-41.7-24-60.2C369.3 66 384.4 64 400 64c37 0 71.4 11.4 99.8 31l20.6-20.6L487 41c-6.9-6.9-8.9-17.2-5.2-26.2S494.3 0 504 0H616c13.3 0 24 10.7 24 24V136c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L545 140.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176c-50.5 0-96-21.3-128.1-55.4z" />
              </svg>,
              "Maschio"
            )}

            {/*Nazionalita' */}
            {datiPersonali(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-1 h-1"
              >
                <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z" />
              </svg>,
              "Italiano"
            )}

            {/*Civil Status */}
            {datiPersonali(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="w-1 h-1"
              >
                <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
              </svg>,
              "Studente"
            )}

            {/*License */}
            {datiPersonali(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-1 h-1"
              >
                <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
              </svg>,
              "A1, A2, B"
            )}

            {/*Website */}
            {datiPersonali(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-1 h-1"
              >
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
              </svg>,
              "www.mario-rossi.com"
            )}
            {/*Linkdn */}
            {datiPersonali(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-1 h-1"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>,
              "linkedin.com/in/mariorossi"
            )}
          </div>
        </div>

        {/* Competence */}
        <div className="flex flex-col justify-start items-center">
          <h2
            className="text-xxs  font-bold border-b border-gray-500 border-solid w-auto "
            style={{ color: props.selectedColor }}
          >
            Competenza
          </h2>
          <p className="font-medium text-xxs">Sicurezza Informatica</p>
          <p className="text-gray-500 text-xxs">Eccelente</p>

          <p className="font-medium text-xxs">Sviluppo Software</p>
          <p className="text-gray-500 text-xxs">Buono</p>
        </div>

        {/* Languages */}
        <div className="flex flex-col justify-start items-center">
          <h2
            className="text-xxs  font-bold border-b border-gray-500 border-solid "
            style={{ color: props.selectedColor }}
          >
            Lingue
          </h2>
          <p className="font-medium text-xxs">Inglese</p>
          <p className="text-gray-500 text-xxs">Eccelente</p>
          <p className="font-medium text-xxs">Italiano</p>
          <p className="text-gray-500 text-xxs">Fluente</p>
          <p className="font-medium text-xxs">Spagnolo</p>
          <p className="text-gray-500 text-xxs">Elementare</p>
        </div>
      </div>

      {/* RIGHT DIV */}
      <div className="flex flex-col mt-2 ml-2 mb-2 max-w-xs mt-5">
        {/* Name */}

        {/* Profile */}
        <div className="mb-1">
          <h2
            className="text-xxs  font-bold border-b border-gray-500 border-solid "
            style={{ color: props.selectedColor }}
          >
            Profilo
          </h2>
          <p className="text-xxs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>

        {/* Istruzione */}
        <div className="mb-1">
          <h2
            className="text-xxs font-bold border-b border-gray-500 border-solid "
            style={{ color: props.selectedColor }}
          >
            Istruzione
          </h2>
          <p className="font-bold text-xxs mt-2">
            Laurea Magistrale in Informatica
          </p>
          <p className="text-gray-500 font-semibold text-xxs">
            2023 Gen- 2012 Nov
          </p>
          <p className="text-gray-500 font-semibold text-xxs">
            Universita di Pisa | Pisa
          </p>
          <p className="mt-1 text-xxs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s.
          </p>

          <p className="font-bold text-xxs mt-2">
            Diploma di Maturità Scientifica
          </p>
          <p className="text-gray-500 font-semibold text-xxs">
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

        {/* Experience */}
        <div className="mb-1">
          <h2
            className="mb-1 text-xxs  font-bold border-b border-gray-500 border-solid  "
            style={{ color: props.selectedColor }}
          >
            Esperienze
          </h2>
          <p className="font-bold text-xxs">Senior IT Consultant</p>
          <p className="text-gray-500 font-semibold text-xxs">
            2023 Gen- 2012 Nov
          </p>
          <p className="text-gray-500 font-semibold text-xxs">
            Universita di Pisa | Pisa
          </p>
          <p className="mt-1 text-xxs">
            Gestione progetti IT complessi per clienti aziendali, inclusa la
            pianificazione, ll&#39;implementazione e il monitoraggio delle
            soluzioni informatiche.
          </p>
        </div>
      </div>

      {/* Color selection menu */}
      {isHovered && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10">
          <div className="rounded-lg flex flex-col items-center">
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mb-2 hover:bg-blue-600 transition">
              Modifica
            </button>
            <button className="bg-green-500 text-white rounded-lg px-4 py-2 mb-2 hover:bg-green-600 transition">
              Scarica
            </button>
            <button className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition">
              Delete
            </button>
          </div>
        </div>
      )}

       {/* Modal for zoomed content */}
      <UserCardThreeZoomed isZoomed={ isZoomed} setIsZoomed={setIsZoomed}/>
    </div>
  );
};

export default UserCardThree;
