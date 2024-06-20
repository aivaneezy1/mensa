"use client";
import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./Document";
import Card from "./Card";
import handleButton from "../utils/handleButton";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [placeBirth, setPlaceBirth] = useState("");
  const [genere, setGenere] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [nationality, setNationality] = useState("");

  {
    /*OPTIONALS INPUT */
  }
  const [license, setLicense] = useState("");
  const [website, setWebsite] = useState("");
  const [linkin, setLinkin] = useState("");

  {
    /*Competenze */
  }
  const [competenza, setCompetenza] = useState("");

  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [image, setImage] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to toggle optional fields
  const [showDatiPersonali, setShowDatiPersonali] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [showCompotenze, setShowCompotenze] = useState(false);
  const [compotenzeField, setCompotenzeField] = useState(false)


  // State for input range
  const [range, setRange] = useState(0);
  const handleInputRange = (value) => {
    switch (value) {
      case 1:
        return "Principiente";
      case 2:
        return "Elementare";
      case 3:
        return "Buono";
      case 4:
        return "Eccelente";
      case 5:
        return "Fluente";
    }
  };

 

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
                onChange={(e) => setAdress(e.target.value)}
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

          {/*Compotenze button */}
          {handleButton(showCompotenze, setShowCompotenze, "Competenze")}
          {showCompotenze && (
            <>
              <div className="  flex flex-col border border-gray-500 border-solid p-5">
                <div className="">
                  <label for="competenze" className="text-gray-500 text-2xl">
                    Competenze
                  </label>
                  <input
                    type="text"
                    id="competenze"
                    name="competenza"
                    value={competenza}
                    placeholder="Competenza"
                    onChange={(e) => setCompetenza(e.target.value)}
                    className="mb-2 p-2 border bg-gray-100 w-full mt-2"
                  />
                </div>

                <div className="flex flex-row gap-2 mx-2">
                  <input
                    type="range"
                    min="0"
                    max="5"
                    id="volume"
                    value={range}
                    onChange={(e) => setRange(parseInt(e.target.value))}
                    className="w-md"
                  />
                  <label for="volume">
                    {range === 0 ? "Choose" : handleInputRange(range)}
                  </label>
                </div>

                <div className=" flex justify-between items-center gap-2 w-sm mt-5">
                   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trash ml-auto cursor-pointer border rounded-2xl border-solid hover:border-blue-500 hover:bg-blue-50 "
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#9e9e9e"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    onClick={() => {
                    setCompetenza('');
                    setRange(0);
                    setCompotenzeField(!compotenzeField)
                    setShowCompotenze(!showCompotenze);
                 
                }}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
             
                  <button 
                  onClick={() => {
                    setShowCompotenze(!showCompotenze);
                    setCompotenzeField(!compotenzeField)
                    }}
                  className="px-5 py-1 bg-blue-500 text-white rounded-2xl hover:bg-blue-400"
                  >
                    Done
                  </button>
                </div>
              </div>

            
            </>
          )}

          {/*Showing the competenze */}
            {compotenzeField && (
              <>
              <div className="border border-gray-500 border-solid p-5 mb-5 mt-2">
              <h2 className="text-bold">{competenza}</h2>
              <h2 className="text-gray-500">{handleInputRange(range)}</h2>  
            </div>
              </>
            )}






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
          />
        </div>
      </div>
    </>
  );
}
