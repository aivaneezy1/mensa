import React, { useState } from "react";
import Image from "next/image";
import { Modal, Box, Typography } from "@mui/material";

const UserCardOneZoomed = (props) => {
  const datiPersonaliZoomed = (dati, dati2, dati3, dati4) => {
    return (
      <div className="flex flex-row gap-2 items-center w-sm">
        <div className="font-medium text-xs">
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
  return (
    <Modal
      open={props.isZoomed}
      onClose={() => props.setIsZoomed(false)}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Typography id="modal-title" variant="h4" component="h2" gutterBottom>
          Mario Rossi
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2, fontSize: "1.2rem" }}>
          <div className="grid grid-cols-2  sm:p-2 max-w-screen h-auto mx-auto shadow-md relative h-full">
            {/* LEFT SIDE DIV */}
            <div
              className={`gap-2  flex flex-col justify-start items-center mt-5  shadow-md border`}
              style={{ backgroundColor: props.selectedColor }}
            >
              <div className=" mt-2">
                <Image
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/35af6a41332353.57a1ce913e889.jpg"
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
                  {datiPersonaliZoomed("Mario", "Rossi")}
                  {/*Email */}
                  {datiPersonaliZoomed("mario.rossi@gmail.com")}
                  {/*Phone Number */}
                  {datiPersonaliZoomed("324621299")}
                  {/*Address */}
                  {datiPersonaliZoomed("Via delle Rose 123, ", "56124", "Pisa")}
                  {/*Date of birth */}
                  {datiPersonaliZoomed("04-02-2001")}
                  {/*Place of birth */}
                  {datiPersonaliZoomed("Italia")}
                  {/*Gender */}
                  {datiPersonaliZoomed("Maschio")}
                  {/*Nazionalita' */}
                  {datiPersonaliZoomed("Italiano")}
                  {/*Civil Status */}
                  {datiPersonaliZoomed("Studente")}
                  {/*Licnese */}
                  {datiPersonaliZoomed("A1,A2,B")}
                  {/*WEbsite */}
                  {datiPersonaliZoomed("www.mario-rossi.com")}
                  {/*Linkin */}
                  {datiPersonaliZoomed("linkedin.com/in/mariorossi")}
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
                <h2 className="text-xs text-gray-500 mt-1 font-semibold">
                  Rossi
                </h2>
              </div>

              <hr className="border border-b border-blue-500 w-1/2 my-1" />

              {/* Profile */}
              <div className="mb-1">
                <h2 className="text-s font-bold">Profilo</h2>
                <p className="text-xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum this
                  long but without any apostrtophe
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s.
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
                  Gestione progetti IT complessi per clienti aziendali, inclusa
                  la pianificazione, l&#39;implementazione e il monitoraggio
                  delle soluzioni informatiche.
                </p>
              </div>
            </div>

            {/* Color selection menu */}
          </div>
        </Typography>
      </Box>
    </Modal>
  );
};

export default UserCardOneZoomed;
