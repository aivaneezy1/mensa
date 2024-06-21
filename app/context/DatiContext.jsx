"use client";
import React, { createContext, useState } from "react";

export const DatiContext = createContext({});

const DatiContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [placeBirth, setPlaceBirth] = useState("");
  const [genere, setGenere] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [nationality, setNationality] = useState("");

  /*Competenze and edit field */
  const [compDati, setCompDati] = useState("");
  const [langDati, setLangDati] = useState("");
  const[compFieldList, setCompFieldList] = useState([]);
   const[langFieldList, setLangFieldList] = useState([]);

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
        setAdress,
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
        compDati, 
        setCompDati,
        langDati, 
        setLangDati,
        compFieldList, 
        setCompFieldList,
        langFieldList, 
        setLangFieldList,
      }}
    >
      {children}
    </DatiContext.Provider>
  );
};

export default DatiContextProvider;
