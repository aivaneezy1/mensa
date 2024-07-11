"use client";
import React, { useState, useContext, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { DatiContext } from "../context/DatiContext";
import BasicAlerts from "../utils/Successful";
import DeleteAlert from "../utils/Delete";

{
  /*Components */
}
import Compotenze from "./Card/Compotenze";
import Language from "./Card/Language";
import Profile from "./Card/Profile";
import EsperienzeLavoro from "./Card/EsperienzeLavoro";
import Formazione from "./Card/Formazione";
import DatiPersonali from "./Card/DatiPersonali";

{
  /*Document */
}
import CardOneDocument from "./Documents/CardOneDocument";
import CardTwoDocument from "./Documents/CardTwoDocument";
import CardThreeDocument from "./Documents/CardThreeDocument";
{
  /*CARD */
}

import CardOneModel from "./CardModels/CardOneModel";
import CardThreeModel from "./CardModels/CardThreeModel";
import CardTwoModel from "./CardModels/CardTwoModel";
import CardChoices from "./CardChoices";

export default function Home() {
  // Dati states
  const {
    /*Dati personali */
    selectedImage,
    setSelectedImage,
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    postalCode,
    setPostalCode,
    city,
    setCity,
    dateBirth,
    setDateBirth,
    placeBirth,
    setPlaceBirth,
    genere,
    setGenere,
    civilStatus,
    setCivilStatus,
    nationality,
    setNationality,
    /*Optionals for dati personali */
    license,
    setLicense,
    website,
    setWebsite,
    linkin,
    setLinkin,

    /*Profile */
    profileContent,
    setProfileContent,

    /*Lingue e Compotenze */
    compDati,
    setCompDati,
    langDati,
    setLangDati,
    compFieldList,
    setCompFieldList,
    langFieldList,
    setLangFieldList,
    range,
    setRange,

    /*Formazione Dati */
    formDati,
    setFormDati,
    formOrg,
    setFormOrg,
    formCity,
    setFormCity,
    formDateInizio,
    setFormDateInizio,
    formDateInizioAnno,
    setFormDateInizioAnno,
    formDateFine,
    setFormDateFine,
    formDateFineAnno,
    setFormDateFineAnno,
    formDataFieldList,
    setFormDataFieldList,
    formContent,
    setFormContent,

    /*Experience Dati */
    expDati,
    setExpDati,
    expOrg,
    setExpOrg,
    expCity,
    setExpCity,
    exprDateInizo,
    setExprDateInizio,
    exprDateInizioAnno,
    setExprDateInizioAnno,
    exprDateFine,
    setExprDateFine,
    exprDateFineAnno,
    setExprDateFineAnno,
    exprDataFieldList,
    setExprDataFieldList,
    exprContent,
    setExprContent,

    /*Edit and Delete State for BG component */
    editState,
    setEditState,
    deleteState,
    setDeleteState,

    /*BackGround Color */
    cardOneColor,
    setCardOneColor,
    cardTwoColor,
    setCardTwoColor,
    cardThreeColor,
    setCardThreeColor,

    /*Model Choices */
    cardOneSelected,
    cardTwoSelected,
    cardThreeSelected,
  } = useContext(DatiContext);

  {
    /*OPTIONALS INPUT */
  }

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Edit and Delete state
  useEffect(() => {
    if (editState) {
      const timer = setTimeout(() => {
        setEditState(false);
      }, 3000); // 2000 milliseconds = 2 seconds

      return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts or editState changes
    }
  }, [editState, setEditState]);

  // Edit and Delete state
  useEffect(() => {
    if (deleteState) {
      const timer = setTimeout(() => {
        setDeleteState(false);
      }, 3000); // 2000 milliseconds = 2 seconds

      return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts or editState changes
    }
  }, [deleteState, setDeleteState]);

  /*Document rendering */

  const [isClient, setIsClient] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    setIsClient(true); // This will be true after component mounts on the client
  }, []);

  useEffect(() => {
    const handleSelectedDocument = () => {
      if (cardOneSelected) {
        return (
          <CardOneDocument
            cardColors={cardOneColor}
            selectedImage={selectedImage}
            name={name}
            lastName={lastName}
            email={email}
            phone={phone}
            address={address}
            postalCode={postalCode}
            city={city}
            dateBirth={dateBirth}
            placeBirth={placeBirth}
            genere={genere}
            civilStatus={civilStatus}
            nationality={nationality}
            license={license}
            website={website}
            linkin={linkin}
            compFieldList={compFieldList}
            langFieldList={langFieldList}
            profileContent={profileContent}
            formDataFieldList={formDataFieldList}
            exprDataFieldList={exprDataFieldList}
          />
        );
      } else if (cardTwoSelected) {
        return (
          <CardTwoDocument
            cardColors={cardTwoColor}
            selectedImage={selectedImage}
            name={name}
            lastName={lastName}
            email={email}
            phone={phone}
            address={address}
            postalCode={postalCode}
            city={city}
            dateBirth={dateBirth}
            placeBirth={placeBirth}
            genere={genere}
            civilStatus={civilStatus}
            nationality={nationality}
            license={license}
            website={website}
            linkin={linkin}
            compFieldList={compFieldList}
            langFieldList={langFieldList}
            profileContent={profileContent}
            formDataFieldList={formDataFieldList}
            exprDataFieldList={exprDataFieldList}
          />
        );
      } else if (cardThreeSelected) {
        return (
          <CardThreeDocument
            cardColors={cardThreeColor}
            selectedImage={selectedImage}
            name={name}
            lastName={lastName}
            email={email}
            phone={phone}
            address={address}
            postalCode={postalCode}
            city={city}
            dateBirth={dateBirth}
            placeBirth={placeBirth}
            genere={genere}
            civilStatus={civilStatus}
            nationality={nationality}
            license={license}
            website={website}
            linkin={linkin}
            compFieldList={compFieldList}
            langFieldList={langFieldList}
            profileContent={profileContent}
            formDataFieldList={formDataFieldList}
            exprDataFieldList={exprDataFieldList}
          />
        );
      }
    };

    // Set the selected document
    if (cardOneSelected || cardTwoSelected || cardThreeSelected) {
      setSelectedDocument(handleSelectedDocument());
    }
  }, [
    cardOneSelected,
    cardTwoSelected,
    cardThreeSelected,
    cardOneColor,
    cardTwoColor,
    cardThreeColor,
    selectedImage,
    name,
    lastName,
    email,
    phone,
    address,
    postalCode,
    city,
    dateBirth,
    placeBirth,
    genere,
    civilStatus,
    nationality,
    license,
    website,
    linkin,
    compFieldList,
    langFieldList,
    profileContent,
    formDataFieldList,
    exprDataFieldList,
  ]);


  return (
    <>
      <div className="flex justify-center mx-auto  min-h-screen py-10  h-screen flex-row  lg:justify-between lg:ml-5  ">
        {editState && (
          <div className="absolute top-20 right-50">
            <BasicAlerts />
          </div>
        )}

        {deleteState && (
          <div className="absolute top-20 right-50">
            <DeleteAlert />
          </div>
        )}
        <div className="flex flex-col gap-10 lg:gap-10 mt-5 lg:w-5/12 lg:overflow-y-scroll">
          <form onSubmit={handleSubmit} className=" ">
            {/*Dati Personali */}
            <DatiPersonali
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              name={name}
              setName={setName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              address={address}
              setAddress={setAddress}
              postalCode={postalCode}
              setPostalCode={setPostalCode}
              city={city}
              setCity={setCity}
              dateBirth={dateBirth}
              setDateBirth={setDateBirth}
              placeBirth={placeBirth}
              setPlaceBirth={setPlaceBirth}
              genere={genere}
              setGenere={setGenere}
              civilStatus={civilStatus}
              setCivilStatus={setCivilStatus}
              nationality={nationality}
              setNationality={setNationality}
              license={license}
              setLicense={setLicense}
              website={website}
              setWebsite={setWebsite}
              linkin={linkin}
              setLinkin={setLinkin}
            />

            {/*Profile */}
            {
              <Profile
                content={profileContent}
                setContent={setProfileContent}
              />
            }

            {/*Formazione */}
            {
              <Formazione
                formDati={formDati}
                setFormDati={setFormDati}
                formOrg={formOrg}
                setFormOrg={setFormOrg}
                formCity={formCity}
                setFormCity={setFormCity}
                formDateInizio={formDateInizio}
                setFormDateInizio={setFormDateInizio}
                formDateInizioAnno={formDateInizioAnno}
                setFormDateInizioAnno={setFormDateInizioAnno}
                formDateFine={formDateFine}
                setFormDateFine={setFormDateFine}
                formDateFineAnno={formDateFineAnno}
                setFormDateFineAnno={setFormDateFineAnno}
                formDataFieldList={formDataFieldList}
                setFormDataFieldList={setFormDataFieldList}
                formContent={formContent}
                setFormContent={setFormContent}
              />
            }

            {/*Esperienza lavorativa */}
            {
              <EsperienzeLavoro
                expDati={expDati}
                setExpDati={setExpDati}
                expOrg={expOrg}
                setExpOrg={setExpOrg}
                expCity={expCity}
                setExpCity={setExpCity}
                exprDateInizo={exprDateInizo}
                setExprDateInizio={setExprDateInizio}
                exprDateInizioAnno={exprDateInizioAnno}
                setExprDateInizioAnno={setExprDateInizioAnno}
                exprDateFine={exprDateFine}
                setExprDateFine={setExprDateFine}
                exprDateFineAnno={exprDateFineAnno}
                setExprDateFineAnno={setExprDateFineAnno}
                exprDataFieldList={exprDataFieldList}
                setExprDataFieldList={setExprDataFieldList}
                exprContent={exprContent}
                setExprContent={setExprContent}
              />
            }

            {/*Compotenze button */}
            <Compotenze
              dati={compDati}
              setDati={setCompDati}
              compFieldList={compFieldList}
              setCompFieldList={setCompFieldList}
              range={range}
              setRange={setRange}
            />

            {/*Language button */}
            <Language
              dati={langDati}
              setDati={setLangDati}
              langFieldList={langFieldList}
              setLangFieldList={setLangFieldList}
              range={range}
              setRange={setRange}
            />

            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 mt-10 "
            >
              Generate CV
            </button>

            {isSubmitted && (
              <div className="justify-center flex items-center">
                {isClient && selectedDocument && (
                  <PDFDownloadLink
                    document={selectedDocument}
                    fileName="cv.pdf"
                    className="mt-5 px-3 py-2 bg-green-500 rounded-xl text-white hover:bg-green-700 "
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? "Loading document..." : "Download CV"
                    }
                  </PDFDownloadLink>
                )}
              </div>
            )}
          </form>
        </div>

        {/*Left side div */}
        <div className=" lg:block hidden mx-auto  h-screen min-h-screen lg:w-7/12 p-5 lg:overflow-y-scroll ">
          {cardOneSelected && (
            <CardOneModel
              selectedImage={selectedImage}
              cardColors={cardOneColor}
              name={name}
              lastName={lastName}
              email={email}
              phone={phone}
              address={address}
              postalCode={postalCode}
              city={city}
              dateBirth={dateBirth}
              placeBirth={placeBirth}
              genere={genere}
              nationality={nationality}
              civilStatus={civilStatus}
              license={license}
              website={website}
              linkin={linkin}
              compDati={compDati}
              langDati={langDati}
              compFieldList={compFieldList}
              langFieldList={langFieldList}
              profileContent={profileContent}
              formDataFieldList={formDataFieldList}
              exprDataFieldList={exprDataFieldList}
              range={range}
            />
          )}

          {cardTwoSelected && (
            <CardTwoModel
              selectedImage={selectedImage}
              cardColors={cardTwoColor}
              name={name}
              lastName={lastName}
              email={email}
              phone={phone}
              address={address}
              postalCode={postalCode}
              city={city}
              dateBirth={dateBirth}
              placeBirth={placeBirth}
              genere={genere}
              nationality={nationality}
              civilStatus={civilStatus}
              license={license}
              website={website}
              linkin={linkin}
              compDati={compDati}
              langDati={langDati}
              compFieldList={compFieldList}
              langFieldList={langFieldList}
              profileContent={profileContent}
              formDataFieldList={formDataFieldList}
              exprDataFieldList={exprDataFieldList}
              range={range}
            />
          )}

          {cardThreeSelected && (
            <CardThreeModel
              cardColors={cardThreeColor}
              setCardColors={setCardThreeColor}
              selectedImage={selectedImage}
              name={name}
              lastName={lastName}
              email={email}
              phone={phone}
              address={address}
              postalCode={postalCode}
              city={city}
              dateBirth={dateBirth}
              placeBirth={placeBirth}
              genere={genere}
              nationality={nationality}
              civilStatus={civilStatus}
              license={license}
              website={website}
              linkin={linkin}
              compDati={compDati}
              langDati={langDati}
              compFieldList={compFieldList}
              langFieldList={langFieldList}
              profileContent={profileContent}
              formDataFieldList={formDataFieldList}
              exprDataFieldList={exprDataFieldList}
              range={range}
            />
          )}

          {/*Default card to choice if user didnt select any card at the home page */}
          {!cardOneSelected && !cardTwoSelected && !cardThreeSelected && (
            <CardChoices />
          )}
        </div>
      </div>
    </>
  );
}
