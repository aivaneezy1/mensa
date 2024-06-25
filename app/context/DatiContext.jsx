"use client";
import React, { createContext, useState } from "react";

export const DatiContext = createContext({});

const DatiContextProvider = ({ children }) => {
  /*Dati Personali */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [placeBirth, setPlaceBirth] = useState("");
  const [genere, setGenere] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [nationality, setNationality] = useState("");

  /*Optionals for dati personali */
   const [license, setLicense] = useState("");
  const [website, setWebsite] = useState("");
  const [linkin, setLinkin] = useState("");

  /*Competenze and edit field */
  const [compDati, setCompDati] = useState("");
  const [langDati, setLangDati] = useState("");
  const [compFieldList, setCompFieldList] = useState([]);
  const [langFieldList, setLangFieldList] = useState([]);

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
