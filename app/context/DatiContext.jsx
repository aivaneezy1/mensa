"use client";
import React, { createContext, useState } from "react";

export const DatiContext = createContext({});

const DatiContextProvider = ({ children }) => {

  /*Show button */
  const [showProfile, setShowProfile] = useState(null);

  /*Dati Personali */
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("")
  const [dateBirth, setDateBirth] = useState("");
  const [placeBirth, setPlaceBirth] = useState("");
  const [genere, setGenere] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [nationality, setNationality] = useState("");

  /*Optionals for dati personali */
   const [license, setLicense] = useState("");
  const [website, setWebsite] = useState("");
  const [linkin, setLinkin] = useState("");


  /*Profile */
  const [profileContent, setProfileContent] = useState("")

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
  const [formContent, setFormContent] = useState("")

  /*Experience Field */
  const [expDati, setExpDati] = useState("");
  const [expOrg, setExpOrg] = useState("");
  const [expCity, setExpCity] = useState("");

  const [exprDateInizo, setExprDateInizio] = useState("");
  const [exprDateInizioAnno, setExprDateInizioAnno] = useState("");

  const [exprDateFine, setExprDateFine] = useState("");
  const [exprDateFineAnno, setExprDateFineAnno] = useState("");

  const [exprDataFieldList, setExprDataFieldList] = useState([]);
  const [exprContent, setExprContent] = useState("")

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
        license, setLicense,
        website, setWebsite,
        linkin, setLinkin,

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
      }}
    >
      {children}
    </DatiContext.Provider>
  );
};

export default DatiContextProvider;
