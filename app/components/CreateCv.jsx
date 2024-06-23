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

export default function Home() {
  // Dati states
  const {
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
    compDati,
    setCompDati,
    langDati,
    setLangDati,
    compFieldList,
    setCompFieldList,
    langFieldList,
    setLangFieldList,
  } = useContext(DatiContext);

  {
    /*OPTIONALS INPUT */
  }
  const [license, setLicense] = useState("");
  const [website, setWebsite] = useState("");
  const [linkin, setLinkin] = useState("");

  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [image, setImage] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to toggle optional fields
  const [showDatiPersonali, setShowDatiPersonali] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="flex justify-start flex-row mt-10 ml-5">
        <form onSubmit={handleSubmit} className="flex flex-col mt-5">
          {/*Dati Personali button */}
          {handleButton(
            showDatiPersonali,
            setShowDatiPersonali,
            "Dati Personali"
          )}
          {showDatiPersonali && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-2 p-2 border "
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2 p-2 border"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mb-2 p-2 border"
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mb-2 p-2 border"
              />

              <input
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth"
                value={dateBirth}
                onChange={(e) => setDateBirth(e.target.value)}
                className="mb-2 p-2 border"
              />

              <input
                type="text"
                name="placeBirth"
                placeholder="Place of Birth"
                value={placeBirth}
                onChange={(e) => setPlaceBirth(e.target.value)}
                className="mb-2 p-2 border"
              />

              <input
                type="text"
                name="genere"
                placeholder="Genere"
                value={genere}
                onChange={(e) => setGenere(e.target.value)}
                className="mb-2 p-2 border"
              />

              <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="mb-2 p-2 border"
              />

              <input
                type="text"
                name="civilStatus"
                placeholder="Civil Status"
                value={civilStatus}
                onChange={(e) => setCivilStatus(e.target.value)}
                className="mb-2 p-2 border"
              />

              {/* Button to toggle optional fields */}
              {handleButton(
                showOptionalFields,
                setShowOptionalFields,
                "Optionals"
              )}

              {/* Optional input fields */}
              {showOptionalFields && (
                <>
                  <input
                    type="text"
                    name="license"
                    placeholder="License"
                    value={license}
                    onChange={(e) => setLicense(e.target.value)}
                    className="mb-2 p-2 border"
                  />

                  <input
                    type="text"
                    name="website"
                    placeholder="Website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="mb-2 p-2 border"
                  />

                  <input
                    type="text"
                    name="linkin"
                    placeholder="LinkedIn"
                    value={linkin}
                    onChange={(e) => setLinkin(e.target.value)}
                    className="mb-2 p-2 border"
                  />
                </>
              )}
            </>
          )}

          {/*Profile */}
          {<Profile/>}

          {/*Formazione */}
          {<Formazione/>}

          {/*Esperienza lavorativa */}
          {<EsperienzeLavoro/>}

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

          <textarea
            name="education"
            placeholder="Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="mb-2 p-2 border"
          />
          <textarea
            name="experience"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="mb-2 p-2 border"
          />
          <textarea
            name="skills"
            placeholder="Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="mb-2 p-2 border"
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
                    education={education}
                    experience={experience}
                    skills={skills}
                    images={image}
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

        <div className=" sm:block hidden mx-auto  mt-10">
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
           
          />
        </div>
      </div>
    </>
  );
}
