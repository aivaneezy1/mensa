"use client";
import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./Document";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [image,setImage] = useState(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex justify-between items-center flex-row mt-10 ml-5">
      <form onSubmit={handleSubmit} className="flex flex-col mt-5">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) =>setName(e.target.value)}
          className="mb-2 p-2 border"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
          className="mb-2 p-2 border"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) =>setPhone(e.target.value)}
          className="mb-2 p-2 border"
        />
        <textarea
          name="education"
          placeholder="Education"
          value={education}
          onChange={(e) =>setEducation(e.target.value)}
          className="mb-2 p-2 border"
        />
        <textarea
          name="experience"
          placeholder="Experience"
          value={experience}
          onChange={(e) =>setExperience(e.target.value)}
          className="mb-2 p-2 border"
        />
        <textarea
          name="skills"
          placeholder="Skills"
          value={skills}
          onChange={(e) =>setSkills(e.target.value)}
          className="mb-2 p-2 border"
        />
        <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}/>
     
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-700 mt-2 ">
          Generate CV
        </button>
       
      </form>
      {isSubmitted && (
        <div className="flex justify-center items-center ">
        <PDFDownloadLink
          document={<MyDocument
          name={name}
          email={email}
          phone={phone}
          education={education}
          experience={experience}
          skills={skills}
          images={image}

          />}
          fileName="cv.pdf"
          className="mt-5 px-3 py-2 bg-green-500 rounded-xl text-white hover:bg-green-700 "
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download CV"
          }
        </PDFDownloadLink>
        </div>
      )}

    <div>
     
    </div>

      


    </div>
  );
}
