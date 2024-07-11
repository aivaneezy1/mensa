"use client";
import React, { createContext, useState, useEffect } from "react";

export const DatiContext = createContext({});

// Getting value to the localStorage
const getLocalStorageItem = (key) => {
  const savedValue = localStorage.getItem(key);
  return savedValue !== null ? savedValue : "";
};

const DatiContextProvider = ({ children }) => {
  /*Show button */
  const [showProfile, setShowProfile] = useState(null);

  /* Dati Personali */
  const [selectedImage, setSelectedImage] = useState(null);

  const [name, setName] = useState(getLocalStorageItem("name"));

  const [lastName, setLastName] = useState(getLocalStorageItem("lastName"));
  const [email, setEmail] = useState(getLocalStorageItem("email"));
  const [phone, setPhone] = useState(getLocalStorageItem("phone"));
  const [address, setAddress] = useState(getLocalStorageItem("address"));
  const [postalCode, setPostalCode] = useState(
    getLocalStorageItem("postalCode")
  );
  const [city, setCity] = useState(getLocalStorageItem("city"));
  const [dateBirth, setDateBirth] = useState(getLocalStorageItem("dateBirth"));
  const [placeBirth, setPlaceBirth] = useState(
    getLocalStorageItem("placeBirth")
  );
  const [genere, setGenere] = useState(getLocalStorageItem("gender"));
  const [civilStatus, setCivilStatus] = useState(
    getLocalStorageItem("civilStatus")
  );
  const [nationality, setNationality] = useState(
    getLocalStorageItem("nationality")
  );
  const [license, setLicense] = useState(getLocalStorageItem("license"));
  const [website, setWebsite] = useState(getLocalStorageItem("website"));
  const [linkin, setLinkin] = useState(getLocalStorageItem("linkin"));

  /*Profile */
  const [profileContent, setProfileContent] = useState("");

  /*Competenze and edit field */
  const [compDati, setCompDati] = useState("");
  const [langDati, setLangDati] = useState("");
  const [compFieldList, setCompFieldList] = useState([]);
  const [langFieldList, setLangFieldList] = useState([]);
  // slider range
  const [range, setRange] = useState(0);

  /*background professional field */
  /*FormField */
  const [formDati, setFormDati] = useState("");
  const [formOrg, setFormOrg] = useState("");
  const [formCity, setFormCity] = useState("");
  const [formDateInizio, setFormDateInizio] = useState("");
  const [formDateInizioAnno, setFormDateInizioAnno] = useState("");
  const [formDateFine, setFormDateFine] = useState("");
  const [formDateFineAnno, setFormDateFineAnno] = useState("");
  const [formDataFieldList, setFormDataFieldList] = useState([]);
  const [formContent, setFormContent] = useState("");

  /*Experience Field */
  const [expDati, setExpDati] = useState("");
  const [expOrg, setExpOrg] = useState("");
  const [expCity, setExpCity] = useState("");

  const [exprDateInizo, setExprDateInizio] = useState("");
  const [exprDateInizioAnno, setExprDateInizioAnno] = useState("");

  const [exprDateFine, setExprDateFine] = useState("");
  const [exprDateFineAnno, setExprDateFineAnno] = useState("");

  const [exprDataFieldList, setExprDataFieldList] = useState([]);
  const [exprContent, setExprContent] = useState("");

  /*Edit and delete state for the Bg prof component */
  const [editState, setEditState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);

  /*Background color */
  const [cardOneColor, setCardOneColor] = useState("");
  const [cardTwoColor, setCardTwoColor] = useState("");
  const [cardThreeColor, setCardThreeColor] = useState("");

  /*Card model choices */
  const [cardOneSelected, setCardOneSelected] = useState(false);
  const [cardTwoSelected, setCardTwoSelected] = useState(false);
  const [cardThreeSelected, setCardThreeSelected] = useState(false);
  return (
    <DatiContext.Provider
      value={{
        showProfile,
        setShowProfile,

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
        license,
        setLicense,
        website,
        setWebsite,
        linkin,
        setLinkin,

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

        /*Profile Dati */
        profileContent,
        setProfileContent,

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

        /*Card Model choices */
        cardOneSelected,
        setCardOneSelected,
        cardTwoSelected,
        setCardTwoSelected,
        cardThreeSelected,
        setCardThreeSelected,
      }}
    >
      {children}
    </DatiContext.Provider>
  );
};

export default DatiContextProvider;
