"use client";
import React, { createContext, useState } from "react";

export const DatiContext = createContext({});

const DatiContextProvider = ({ children }) => {
  /*Show button */
  const [showProfile, setShowProfile] = useState(null);

  /*Dati Personali */
  const [selectedImage, setSelectedImage] = useState(null);

  const [name, setName] = useState(() => {
    const savedValue = localStorage.getItem("name");
    return savedValue !== null ? savedValue : "";
  });
  const [lastName, setLastName] = useState(() => {
    const savedValue = localStorage.getItem("lastName");
    return savedValue !== null ? savedValue : "";
  });

    const [email, setEmail] = useState(() => {
    const savedValue = localStorage.getItem("email");
    return savedValue !== null ? savedValue : "";
  });
 
  const [phone, setPhone] = useState(() => {
    const savedValue = localStorage.getItem("phone");
    return savedValue !== null ? savedValue : "";
  });
  const [address, setAddress] = useState(() => {
    const savedValue = localStorage.getItem("address");
    return savedValue !== null ? savedValue : "";
  });
  const [postalCode, setPostalCode] = useState(() => {
    const savedValue = localStorage.getItem("postalCode");
    return savedValue !== null ? savedValue : "";
  });
  const [city, setCity] = useState(() => {
    const savedValue = localStorage.getItem("city");
    return savedValue !== null ? savedValue : "";
  });
  const [dateBirth, setDateBirth] = useState(() => {
    const savedValue = localStorage.getItem("dateBirth");
    return savedValue !== null ? savedValue : "";
  });
  const [placeBirth, setPlaceBirth] = useState(() => {
    const savedValue = localStorage.getItem("placeBirth");
    return savedValue !== null ? savedValue : "";
  });
  const [genere, setGenere] = useState(() => {
    const savedValue = localStorage.getItem("gender");
    return savedValue !== null ? savedValue : "";
  });
  const [civilStatus, setCivilStatus] = useState(() => {
    const savedValue = localStorage.getItem("civilStatus");
    return savedValue !== null ? savedValue : "";
  });
  const [nationality, setNationality] = useState(() => {
    const savedValue = localStorage.getItem("nationality");
    return savedValue !== null ? savedValue : "";
  });

  /*Optionals for dati personali */
  const [license, setLicense] = useState(() => {
    const savedValue = localStorage.getItem("license");
    return savedValue !== null ? savedValue : "";
  });
  const [website, setWebsite] = useState(() => {
    const savedValue = localStorage.getItem("website");
    return savedValue !== null ? savedValue : "";
  });
  const [linkin, setLinkin] = useState(() => {
    const savedValue = localStorage.getItem("linkin");
    return savedValue !== null ? savedValue : "";
  });

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
