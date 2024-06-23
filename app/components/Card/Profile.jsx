"use client";
import React, { useState, useEffect } from "react";
import handleButton from "@/app/utils/handleButton";
import { RichTextEditor } from "../Editor";

const Profile = (props) => {
  const [showProfile, setShowProfile] = useState(false);
  const [content, setContent] = useState("");
  const [data, setData] = useState("");
  const [istitute, setIstitute] = useState("");
  const [city, setCity] = useState("");
  const [dataInizio, setDataInizio] = useState("");
  const [dataInizioAnno, setDataInizioAnno] = useState("")
  const [dataFine, setDataFine] = useState("");
  const [dataFineAnno, setDataFineAnno] = useState("")

  const [years, setYears] = useState([]);

  useEffect(() => {
    // Function to generate years from current year to 1950
    const generateYears = () => {
      const currentYear = new Date().getFullYear();
      const yearsArray = [];
      for (let year = currentYear; year >= 1950; year--) {
        yearsArray.push(year);
      }
      return yearsArray;
    };

    // Set state with generated years on component mount
    setYears(generateYears());
  }, []);

  return (
    <>
      {handleButton(showProfile, setShowProfile, "Profile")}
      {showProfile && (
        <>
          <div className="flex flex-col gap-5 break-words w-full max-w-sm sm:max-w-lg  mb-5  text-gray-800 ">
            <h2 className="font-semibold text-medium">Formazione</h2>
            <input
              type="text"
              name="data"
              placeholder="Formazione"
              value={data}
              onChange={(ev) => setData(ev.target.value)}
              className="mb-2 p-2 border bg-gray-100 rounded-md"
              
            />

            <div className="flex  gap-5">
              <div className="flex flex-col">
                <h2 className="font-semibold text-medium">Istituto</h2>
                <input
                  type="text"
                  name="data"
                  placeholder="Formazione"
                  value={istitute}
                  onChange={(ev) => setIstitute(ev.target.value)}
                  className="mb-2 p-2 border bg-gray-100 rounded-md"
                />
              </div>

              <div className="flex flex-col ">
                <h2 className="font-semibold text-medium">Citta'</h2>
                <input
                  type="text"
                  name="data"
                  placeholder="Citta'"
                  value={city}
                  onChange={(ev) => setCity(ev.target.value)}
                  className="mb-2 p-2 border bg-gray-100 rounded-md"
                />
              </div>
            </div>

              {/**DATA INIZIO */}
            <div className="flex flex-row  justify-start items-center gap-10 sm:gap-20">

              <div className="flex flex-col gap-2">
              <label for="startMonth" className="font-semibold text-medium">Start Date</label>
              <select
               className=" py-2 px-4 ml-r rounded-xl bg-gray-100"
                id="startMonth"
                name="startMonth"
                value={dataInizio}
                onChange={(e) => setDataInizio(e.target.value)}
                
                
              >
                <option className="bg-white text-gray-800" value=""> Month</option>
                <option className="bg-white text-gray-800" value="01">January</option>
                <option className="bg-white text-gray-800" value="02">February</option>
                <option className="bg-white text-gray-800" value="03">March</option>
                <option className="bg-white text-gray-800" value="04">April</option>
                <option className="bg-white text-gray-800" value="05">May</option>
                <option className="bg-white text-gray-800" value="06">June</option>
                <option className="bg-white text-gray-800" value="07">July</option>
                <option className="bg-white text-gray-800" value="08">August</option>
                <option className="bg-white text-gray-800" value="09">September</option>
                <option className="bg-white text-gray-800" value="10">October</option>
                <option className="bg-white text-gray-800" value="11">November</option>
                <option className="bg-white text-gray-800" value="12">December</option>
              </select>

               
              <select 
              className="py-2 px-4 ml-r rounded-md bg-gray-100" 
              id="year" 
              name="year" 
              value={dataInizioAnno}
              onChange={(e) =>setDataInizioAnno(e.target.value)}
              >
                {years.map((year) => (
                  <option 
                  key={year} 
                  value={year}
                  className="bg-white text-gray-800" >
                    {year}
                  </option>
                ))}
              </select>
              </div>


              {/**DATA FINE */}
              <div className="flex flex-col gap-2">
              <label for="startMonth" className="font-semibold text-medium">End Date</label>
              <select
               className=" py-2 px-4 ml-l rounded-md bg-gray-100"
                id="startMonth"
                name="startMonth"
                value={dataFine}
                onChange={(e) =>setDataFine(e.target.value)}
             
              >
                <option className="bg-white text-gray-800" value=""> Month</option>
                <option className="bg-white text-gray-800" value="01">January</option>
                <option className="bg-white text-gray-800" value="02">February</option>
                <option className="bg-white text-gray-800" value="03">March</option>
                <option className="bg-white text-gray-800" value="04">April</option>
                <option className="bg-white text-gray-800" value="05">May</option>
                <option className="bg-white text-gray-800" value="06">June</option>
                <option className="bg-white text-gray-800" value="07">July</option>
                <option className="bg-white text-gray-800" value="08">August</option>
                <option className="bg-white text-gray-800" value="09">September</option>
                <option className="bg-white text-gray-800" value="10">October</option>
                <option className="bg-white text-gray-800" value="11">November</option>
                <option className="bg-white text-gray-800" value="12">December</option>
              </select>

              <select 
              className="py-2 px-4 ml-l rounded-md bg-gray-100" 
              id="year" 
              name="year" 
              value={dataFineAnno}
              onChange={(e) =>setDataFine(e.target.value)}
              >
                {years.map((year) => (
                  <option 
                  key={year} 
                  value={year}
                  className="bg-white text-gray-800" >
                    {year}
                  </option>
                ))}
              </select>
              </div>

           
            </div>

            <RichTextEditor content={content} setContent={setContent} />
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
