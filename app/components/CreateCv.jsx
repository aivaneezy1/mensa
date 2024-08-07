"use client";
import React, { useState, useContext, useEffect, useRef } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { DatiContext } from "../context/DatiContext";
import BasicAlerts from "../utils/Successful";
import DeleteAlert from "../utils/Delete";
import { useSession } from "next-auth/react";

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

import ModalDownloadDocument from "./ModalDownloadDocument";
import { useRouter } from "next/navigation";
import CvAlerts from "../utils/CreatePostSuccess";
import CircularIndeterminate from "../utils/Loading";
export default function Home() {
  const {
    /*Dati personali */
    selectedImage,
    setSelectedImage,
    fileName,
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

  // Timer for the generate cv button
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const cooldownTime = 5000; //120000; // 2 minutes in milliseconds

  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { data: session, status } = useSession();

  const [cvState, setCvState] = useState(false);

  // Edit  state
  useEffect(() => {
    if (editState) {
      const timer = setTimeout(() => {
        setEditState(false);
      }, 3000); // 2000 milliseconds = 2 seconds

      return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts or editState changes
    }
  }, [editState, setEditState]);

  // Delete state
  useEffect(() => {
    if (deleteState) {
      const timer = setTimeout(() => {
        setDeleteState(false);
      }, 3000); // 2000 milliseconds = 2 seconds

      return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts or editState changes
    }
  }, [deleteState, setDeleteState]);

  // Cv created state

  // Delete state
  useEffect(() => {
    if (cvState) {
      const timer = setTimeout(() => {
        setCvState(false);
      }, 3000); // 2000 milliseconds = 2 seconds

      return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts or editState changes
    }
  }, [cvState, setCvState]);

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

  // handle API post
  const handleCreatePost = async (e) => {
    // Determine which card is selected
    let selectedCard = "";
    let color = "";
    if (cardOneSelected) {
      selectedCard = "CardOne";
      color = cardOneColor;
    } else if (cardTwoSelected) {
      selectedCard = "CardTwo";
      color = cardTwoColor;
    } else if (cardThreeSelected) {
      selectedCard = "CardThree";
      color = cardThreeColor;
    }

    compFieldList.map((item) => ({
      competenza: item.competenza,
      livello: item.livello,
    }));

    try {
      // Upload the image to S3 and get the URL
      let imageUrl = "";
      if (selectedImage) {
        const form = new FormData();
        form.append("file", fileName);

        const res = await fetch("/api/s3-upload", {
          method: "POST",
          body: form,
        });

        const data = await res.json();
        if (res.ok) {
          imageUrl = data.url;
        } else {
          console.error("Failed to upload image to S3");
          return;
        }
      }
      const res = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          postOwner: {
            userId: session?.user.id,
          },

          cardModel: {
            model: selectedCard,
            color: color,
          },

          datiPersonali: {
            image: imageUrl,
            nome: name,
            cognome: lastName,
            email: email,
            telefono: phone,
            indirizzo: address,
            codicePostale: postalCode,
            city: city,
            dataNascita: dateBirth,
            luogoNascita: placeBirth,
            gender: genere,
            nationality: nationality,
            statoCivili: civilStatus,
            patente: license,
            sitoWeb: website,
            linkin: linkin,
          },

          compAndLang: {
            //  Extract all competenza and livello from compFieldList
            competenza: compFieldList.map((item) => ({
              competenza: item.competenza,
              livello: item.livello,
            })),
            // // Extract all competenza and livello from langFieldList
            lingua: langFieldList.map((item) => ({
              competenza: item.competenza,
              livello: item.livello,
            })),
          },

          profile: {
            data: profileContent.replace(/<[^>]+>/g, ""),
          },

          bgProfessional: {
            //Istruzione
            istruzioneData: formDataFieldList.map((item) => ({
              data: item.data,
              istitute: item.istitute,
              city: item.city,
              dataInizio: item.dataInizio,
              dataInizioAnno: item.dataInizioAnno,
              dataFine: item.dataFine,
              dataFineAnno: item.dataFineAnno,
              content: item.content.replace(/<[^>]+>/g, ""),
            })),

            // Esperienze lavortive
            esperienzeData: exprDataFieldList.map((item) => ({
              data: item.data,
              istitute: item.istitute,
              city: item.city,
              dataInizio: item.dataInizio,
              dataInizioAnno: item.dataInizioAnno,
              dataFine: item.dataFine,
              dataFineAnno: item.dataFineAnno,
              content: item.content.replace(/<[^>]+>/g, ""),
            })),
          },
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setCvState(true);
      } else {
        console.error("Failed to create post");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Handle button click
  const handleButtonClick = (e) => {
    e.preventDefault();

    if (!isButtonDisabled) {
      // Your form submit logic here
      handleCreatePost();

      // Disable button and start cooldown timer
      setIsButtonDisabled(true);
      setTimeLeft(cooldownTime);

      // Start the countdown
      const interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            setIsButtonDisabled(false);
            return 0;
          }
          return prev - 1000; // Decrement by 1 second
        });
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      // Clean up interval on component unmount
      clearInterval();
    };
  }, []);

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
        {/*Left right div */}
        <div className="flex flex-col gap-10 lg:gap-10 mt-5 lg:w-5/12 lg:overflow-y-scroll">
          <form onSubmit={handleButtonClick}>
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

            {session && status == "authenticated" ? (
              <button
                type="submit"
                className=" px-8 py-4 bg-blue-500 text-white rounded-xl hover:bg-blue-700 mt-10 w-full bottom-0"
                disabled={isButtonDisabled}
              >
                {isButtonDisabled
                  ? `Please wait ${Math.ceil(timeLeft / 1000)}s`
                  : "Generate CV"}
              </button>
            ) : (
              ""
            )}
          </form>


          {/*CV created alert */}
          {cvState && (
            <div className="absolute top-20 right-50">
              <CvAlerts />
            </div>
          )}

          {!session && status != "authenticated" && (
              <ModalDownloadDocument />
          )}

          {isSubmitted && session && status == "authenticated" && (
            <div className="justify-center flex items-center">
              {isClient && selectedDocument && (
                <div>
                  <PDFDownloadLink
                    document={selectedDocument}
                    fileName="cv.pdf"
                    className="mt-5 px-8 py-4 bg-green-500 rounded-xl text-white hover:bg-green-700 w-full text-center"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? "Loading document..." : "Download CV"
                    }
                  </PDFDownloadLink>
                </div>
              )}
            </div>
          )}
        </div>

        {/*Left right div */}
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
