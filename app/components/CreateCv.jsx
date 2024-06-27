"use client";
import React, { useState, useContext } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./Document";
import Card from "./Card";
import handleButton from "../utils/handleButton";
import Compotenze from "./Card/Compotenze";
import Language from "./Card/Language";
import { DatiContext } from "../context/DatiContext";
import Profile from "./Card/Profile";
import EsperienzeLavoro from "./Card/EsperienzeLavoro";
import Formazione from "./Card/Formazione";
import DatiPersonali from "./Card/DatiPersonali";

export default function Home() {
  
  // Dati states
  const {
    /*Dati personali */
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
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
  } = useContext(DatiContext);

  {
    /*OPTIONALS INPUT */
  }

  const [image, setImage] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="flex justify-center mx-auto  min-h-screen py-10  flex-row  lg:justify-between lg:ml-5  ">
          <div className="flex flex-col gap-10 lg:gap-5 mt-5   lg:w-5/12 lg:overflow-y-scroll">
          <form onSubmit={handleSubmit} className=" ">
          {/*Dati Personali */}
          <DatiPersonali
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            address={address}
            setAddress={setAddress}
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
          {<Profile 
          
          content={profileContent}
          setContent={setProfileContent}/>}

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
          />

          {/*Language button */}
          <Language
            dati={langDati}
            setDati={setLangDati}
            langFieldList={langFieldList}
            setLangFieldList={setLangFieldList}
          />



          <input type="file" onChange={(e) => setImage(e.target.files[0])} />

          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 mt-2 "
          >
            Generate CV
          </button>
      

          {isSubmitted && (
            <div className="justify-center flex items-center">
              <PDFDownloadLink
                document={
                  <MyDocument
                    name={name}
                    email={email}
                    phone={phone}
                  />
                }
                fileName="cv.pdf"
                className="mt-5 px-3 py-2 bg-green-500 rounded-xl text-white hover:bg-green-700 "
              >
                {({ blob, url, loading, error }) =>
                  loading ? "Loading document..." : "Download CV"
                }
              </PDFDownloadLink>
            </div>
          )}
        </form>

        </div>

        <div className=" lg:block hidden mx-auto    lg:w-7/12 p-5 lg:overflow-y-scroll">
          <Card
            name={name}
            email={email}
            phone={phone}
            address={address}
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

          />
        </div>
      </div>
    </>
  );
}
