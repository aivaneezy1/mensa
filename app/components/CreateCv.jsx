"use client";
import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./Document";
import Card from "./Card";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address,setAdress] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [placeBirth, setPlaceBirth] = useState("")
  const [genere, setGenere] = useState("")
  const [civilStatus, setCivilStatus] = useState("");
  const [nationality, setNationality ] = useState("")

  {/*OPTIONALS INPUT */}
  const [license, setLicense] = useState("");
  const [website, setWebsite] = useState("");
  const [linkin, setLinkin] = useState("");

  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [image, setImage] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);
  // State to toggle optional fields
  const [showOptionalFields, setShowOptionalFields] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-start flex-row mt-10 ml-5">
      <form onSubmit={handleSubmit} className="flex flex-col mt-5">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2 p-2 border"
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
        onChange={(e) =>setAdress(e.target.value)}
        className="mb-2 p-2 border"/>



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
        onChange={(e) =>setPlaceBirth(e.target.value)}
        className="mb-2 p-2 border"/>


         <input
        type="text"
        name="genere"
        placeholder="Genere"
        value={genere}
        onChange={(e) =>setGenere(e.target.value)}
        className="mb-2 p-2 border"/>


        <input
        type="text"
        name="nationality"
        placeholder="Nationality"
        value={nationality}
        onChange={(e) =>setNationality(e.target.value)}
        className="mb-2 p-2 border"/>


        <input
        type="text"
        name="civilStatus"
        placeholder="Civil Status"
        value={civilStatus}
        onChange={(e) =>setCivilStatus(e.target.value)}
        className="mb-2 p-2 border"/>


        {/* Button to toggle optional fields */}
        <div className="flex items-center justify-between">
          <button
          type="button"
          onClick={() => setShowOptionalFields(!showOptionalFields)}
          className="border border-solid p-2 rounded-2xl mb-2 w-32 flex items-center justify-center"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

          Optionals
        </button>
        </div>

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
     
      <div className=" mx-auto  mt-10" >
       <Card name={name}
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
  );
}
