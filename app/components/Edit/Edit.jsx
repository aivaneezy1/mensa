"use client";
import React, { useState, useContext, useEffect } from "react";
import CircularIndeterminate from "@/app/utils/Loading";
import { DatiContext } from "@/app/context/DatiContext";
import { useSearchParams } from "next/navigation";
import CardOneModel from "../CardModels/CardOneModel";
import CardTwoModel from "../CardModels/CardTwoModel";
import CardThreeModel from "../CardModels/CardThreeModel";
import DatiPersonali from "../Card/DatiPersonali";
import Profile from "../Card/Profile";
import Formazione from "../Card/Formazione";
import EsperienzeLavoro from "../Card/EsperienzeLavoro";
import Compotenze from "../Card/Compotenze";
import Language from "../Card/Language";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Edit = (props) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  const { data: session, status } = useSession();
  const [userData, setUserData] = useState();
  const [editName, setEditName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editPostalCode, setEditPostalCode] = useState("");
  const [editCity, setEditCity] = useState("");
  const [editDateBirth, setEditDateBirth] = useState("");
  const [editPlaceBirth, setEditPlaceBirth] = useState("");
  const [editGender, setEditGender] = useState("");
  const [editCivilStatus, setEditCivilStatus] = useState("");
  const [editNationality, setEditNationality] = useState("");
  const [editLicense, setEditLicense] = useState("");
  const [editWebsite, setEditWebsite] = useState("");
  const [editLinkin, setEditLinkin] = useState("");

  /*Competenza and lingua */

  const {
    /*Dati personali */
    selectedImage,
    setSelectedImage,

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

    /*BackGround Color for cv */
    cardOneColor,
    cardTwoColor,
    cardThreeColor,
  } = useContext(DatiContext);

  useEffect(() => {
    setIsClient(true); // This will be true after component mounts on the client
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // passing the query paramter to the API call.
        const res = await fetch(`/api/edit/${id}`);
        if (!res.ok) {
          throw new Error("Failed to retrieve data");
        }
        const data = await res.json();
        setUserData(data);
        //console.log(userData.compAndLang.competenza)
      } catch (err) {
        console.error("Error in fetching data", err);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user.id && status == "authenticated") {
      fetchData();
    }
  }, [id, session]);

  // setting the data base on the user input
  useEffect(() => {
    if (userData) {
      setEditName(userData.datiPersonali.nome);
      setEditLastName(userData.datiPersonali.cognome);
      setEditEmail(userData.datiPersonali.email);
      setEditPhone(userData.datiPersonali.telefono);
      setEditAddress(userData.datiPersonali.indirizzo);
      setEditPostalCode(userData.datiPersonali.codicePostale);
      setEditCity(userData.datiPersonali.city);
      setEditDateBirth(userData.datiPersonali.dataNascita);
      setEditPlaceBirth(userData.datiPersonali.luogoNascita);
      setEditGender(userData.datiPersonali.gender);
      setEditCivilStatus(userData.datiPersonali.statoCivili);
      setEditNationality(userData.datiPersonali.nationality);
      setEditLicense(userData.datiPersonali.patente);
      setEditWebsite(userData.datiPersonali.sitoWeb);
      setEditLinkin(userData.datiPersonali.linkin);
      setCompFieldList(userData.compAndLang.competenza);
      setLangFieldList(userData.compAndLang.lingua);
      setFormDataFieldList(userData.bgProfessional.istruzioneData);
      setExprDataFieldList(userData.bgProfessional.esperienzeData);
    }
  }, [userData]); // This effect runs when userData changes

  // Function to remove HTML tags from a string
  const stripHtmlTags = (str) => str.replace(/<[^>]+>/g, "");

  const cleanedIstruzioneData = formDataFieldList.map((item) => ({
    ...item,

    content: stripHtmlTags(item.content),
  }));

  const cleanedEsperienzeData = exprDataFieldList.map((item) => ({
    ...item,
    content: stripHtmlTags(item.content),
  }));
  // Updating data of the database
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const updatedData = {
      cardModel: {
        model: userData?.cardModel.model,
        color:
          userData?.cardModel.model === "CardOne"
            ? cardOneColor
            : userData?.cardModel.model === "CardTwo"
            ? cardTwoColor
            : cardThreeColor,
      },
      datiPersonali: {
        image: selectedImage,
        nome: editName,
        cognome: editLastName,
        email: editEmail,
        telefono: editPhone,
        indirizzo: editAddress,
        codicePostale: editPostalCode,
        city: editCity,
        dataNascita: editDateBirth,
        luogoNascita: editPlaceBirth,
        gender: editGender,
        nationality: editNationality,
        statoCivili: editCivilStatus,
        patente: editLicense,
        sitoWeb: editWebsite,
        linkin: editLinkin,
      },
      compAndLang: {
        competenza: compFieldList,
        lingua: langFieldList,
      },

      profile: {
        data: profileContent.replace(/<[^>]+>/g, ""),
      },
      bgProfessional: {
        istruzioneData: cleanedIstruzioneData,
        esperienzeData: cleanedEsperienzeData,
      },
    };
    try {
      const res = await fetch(`/api/edit/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        const data = await res.json();
        router.push(`/profile?id=${session.user.id}`);
        console.log("updated data", data);
      } else {
        throw new Error("Failed to update data");
      }
    } catch (err) {
      console.error("Error updating data:", err);
    }
  };

  return (
    <div className="flex justify-center mx-auto  min-h-screen py-10  h-screen flex-row  lg:justify-between lg:ml-5">
      {/*Left Side div */}

      <div className="flex flex-col  gap-10 lg:gap-10 mt-5 lg:w-5/12 lg:overflow-y-scroll h-sm">
        <form className="flex flex-col h-sm" onSubmit={handleSubmit}>
          <DatiPersonali
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            name={editName}
            setName={setEditName}
            lastName={editLastName}
            setLastName={setEditLastName}
            email={editEmail}
            setEmail={setEditEmail}
            phone={editPhone}
            setPhone={setEditPhone}
            address={editAddress}
            setAddress={setEditAddress}
            postalCode={editPostalCode}
            setPostalCode={setEditPostalCode}
            city={editCity}
            setCity={setEditCity}
            dateBirth={editDateBirth}
            setDateBirth={setEditDateBirth}
            placeBirth={editPlaceBirth}
            setPlaceBirth={setEditPlaceBirth}
            genere={editGender}
            setGenere={setEditGender}
            civilStatus={editCivilStatus}
            setCivilStatus={setEditCivilStatus}
            nationality={editNationality}
            setNationality={setEditNationality}
            license={editLicense}
            setLicense={setEditLicense}
            website={editWebsite}
            setWebsite={setEditWebsite}
            linkin={editLinkin}
            setLinkin={setEditLinkin}
          />

          <Profile content={profileContent} setContent={setProfileContent} />

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
            className=" px-8 py-4 bg-green-500 text-white rounded-xl hover:bg-green-700 mt-10 w-full bottom-0"
          >
            Edit Cv
          </button>
        </form>
      </div>

      {/*Right Side div */}
      <div className="lg:block hidden mx-auto  h-screen min-h-screen lg:w-7/12 p-5 lg:overflow-y-scroll ">
        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <div>
              <CircularIndeterminate />
            </div>
          </div>
        ) : (
          <>
            {userData?.cardModel.model === "CardOne" && (
              <CardOneModel
                selectedImage={selectedImage}
                cardColors={cardOneColor}
                name={editName}
                lastName={editLastName}
                email={editEmail}
                phone={editPhone}
                address={editAddress}
                postalCode={editPostalCode}
                city={editCity}
                dateBirth={editDateBirth}
                placeBirth={editPlaceBirth}
                genere={editGender}
                nationality={editNationality}
                civilStatus={editCivilStatus}
                license={editLicense}
                website={editWebsite}
                linkin={editLinkin}
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
            {userData?.cardModel.model === "CardTwo" && (
              <CardTwoModel
                selectedImage={selectedImage}
                cardColors={cardTwoColor}
                name={editName}
                lastName={editLastName}
                email={editEmail}
                phone={editPhone}
                address={editAddress}
                postalCode={editPostalCode}
                city={editCity}
                dateBirth={editDateBirth}
                placeBirth={editPlaceBirth}
                genere={editGender}
                nationality={editNationality}
                civilStatus={editCivilStatus}
                license={editLicense}
                website={editWebsite}
                linkin={editLinkin}
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
            {userData?.cardModel.model === "CardThree" && (
              <CardThreeModel
                selectedImage={selectedImage}
                cardColors={cardThreeColor}
                name={editName}
                lastName={editLastName}
                email={editEmail}
                phone={editPhone}
                address={editAddress}
                postalCode={editPostalCode}
                city={editCity}
                dateBirth={editDateBirth}
                placeBirth={editPlaceBirth}
                genere={editGender}
                nationality={editNationality}
                civilStatus={editCivilStatus}
                license={editLicense}
                website={editWebsite}
                linkin={editLinkin}
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
          </>
        )}
      </div>
    </div>
  );
};

export default Edit;
