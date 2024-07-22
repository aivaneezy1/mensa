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

  const compAndLang = (data) => {
    return (
      <>
        {data.map((post, index) => (
          <div key={index}>
            <p className="font-semibold text-xs break-words whitespace-normal text-center">
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

  const bgProfessional = (data) => {
    return (
      <>
        {data.length > 0 &&
          data.map((post, index) => (
            <div key={index}>
              <p className="text-xs break-words font-bold  whitespace-normal mt-2">
                {post.data}
              </p>
              <p className="text-xs text-blue-500 whitespace-nowrap font-semibold text-sm">
                {post.dataInizioAnno} {post.dataInizio} - {post.dataFineAnno}{" "}
                {post.dataFine}
              </p>
              <p className="text-gray-500 whitespace-nowrap font-semibold text-xs">
                {post.istitute} | {post.city}
              </p>
              <p className="mt-1 text-sm">{post.content}</p>
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
          <div className="grid grid-cols-2  sm:p-2 max-w-screen-sm  mx-auto shadow-md relative h-full">
            {/* LEFT SIDE DIV */}
            <div
              className={`gap-2  flex flex-col justify-start items-center mt-5  shadow-md border`}
              style={{ backgroundColor: props.color }}
            >
              <div className=" mt-2">
              {props.image && (
                <Image
                  src={props.image}
                  alt="pic"
                  width={60}
                  height={60}
                  className="h-auto w-auto"
                />
              )}
                
              </div>

              {/* Personal Data */}
              <div className="">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-s font-bold">Dati Personali</h2>
                  <hr className="border border-b border-blue-500 w-1/2 my-1  mt-2" />
                </div>
                <div className="mt-2 flex gap-0.5 flex-col justify-start">
                  {/*Name */}
                  {(props.nome || props.cognome) &&
                    datiPersonaliZoomed(props.nome, props.cognome)}

                  {/*Email */}
                  {props.email && datiPersonaliZoomed(props.email)}

                  {/*Phone Number */}
                  {props.telefono && datiPersonaliZoomed(props.telefono)}

                  {/*Address */}
                  {(props.address || props.codicePostale || props.city) &&
                    datiPersonaliZoomed(
                      props.address,
                      props.codicePostale,
                      props.city
                    )}

                  {/*Date of birth */}
                  {props.dataNascita && datiPersonaliZoomed(props.dataNascita)}
                  {/*Place of birth */}
                  {props.luogoNascita && datiPersonaliZoomed("Italia")}

                  {/*Gender */}
                  {props.gender && datiPersonaliZoomed(props.gender)}

                  {/*Nazionalita' */}
                  {props.nationality && datiPersonaliZoomed(props.nationality)}

                  {/*Civil Status */}
                  {props.statoCivili && datiPersonaliZoomed(props.statoCivili)}

                  {/*Licnese */}
                  {props.patente && datiPersonaliZoomed(props.patente)}

                  {/*WEbsite */}
                  {props.website && datiPersonaliZoomed(props.website)}

                  {/*Linkin */}
                  {props.linkin && datiPersonaliZoomed(props.linkin)}
                </div>
              </div>

              <hr className="border border-b border-blue-500 w-1/6 my-1" />

              {/* Competence */}
              <div className="flex flex-col justify-start items-center">
                <h2 className="text-s font-bold">Competenze</h2>
                {props.competenza.length > 0 && compAndLang(props.competenza)}
              </div>

              <hr className="border border-b border-blue-500 w-1/6 my-1" />

              {/* Languages */}
              <div className="flex flex-col justify-start items-center">
                <h2 className="text-s font-bold">Lingue</h2>
                {props.lingua.length > 0 && compAndLang(props.lingua)}
              </div>

              <hr className="border border-b border-blue-500 w-1/6 my-1" />
            </div>

            {/* RIGHT DIV */}
            <div className="flex flex-col mt-2 ml-2 mb-2 max-w-xs">
              {/* Name */}
              <div className="mb-1 mt-5  ">
                <h2 className="text-xs font-semibold">{props.nome}</h2>
                <h2 className="text-xs text-gray-500 mt-1 font-semibold">
                  {props.cognome}
                </h2>
              </div>

              <hr className="border border-b border-blue-500 w-1/2 my-1" />

              {/* Profile */}
              <div className="mb-1">
                <h2 className="text-s font-bold">Profilo</h2>
                <p className="text-xs">{props.profile}</p>
              </div>

              <hr className="border border-b border-blue-500 w-1/2 my-1" />

              {/* Istruzione */}
              <div className="mb-1">
                <h2 className="text-s font-bold">Istruzione</h2>
                {props.istruzioneData.length > 0 &&
                  bgProfessional(props.istruzioneData)}
              </div>

              <hr className="border border-b border-blue-500 w-1/2 my-1" />

              {/* Experience */}
              <div className="mb-1">
                <h2 className="mb-1 text-s font-bold">Esperienze</h2>
                {props.esperienzeData.length > 0 &&
                  bgProfessional(props.esperienzeData)}
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
