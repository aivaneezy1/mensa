"use client";
import React, { useState, useEffect } from "react";
import handleButton from "@/app/utils/handleButton";
import { RichTextEditor } from "../Editor";

const Profile = (props) => {
  const [showProfile, setShowProfile] = useState(false);
  const [data, setData] = useState("");
  const [istitute, setIstitute] = useState("");
  const [city, setCity] = useState("");
  const [dataInizio, setDataInizio] = useState("");
  const [dataInizioAnno, setDataInizioAnno] = useState("");
  const [dataFine, setDataFine] = useState("");
  const [dataFineAnno, setDataFineAnno] = useState("");
  const [dataFieldList, setDataFieldList] = useState([]);

  {
    /*Time State */
  }
  const [years, setYears] = useState([]);

  {
    /*Editor State */
  }
  const [content, setContent] = useState("");

  /* Edit State*/
  const [editData, setEditData] = useState({
    data: "",
    istitute: "",
    city: "",
    dataInizio: "",
    dataInizioAnno: "",
    dataFine: "",
    dataFineAnno: "",
    content: "",
  });
  const [editindex, setEditIndex] = useState(null);

 
 const addPost = () => {
    setDataFieldList([
      ...dataFieldList,
      {
        data: data,
        istitute: istitute,
        city: city,
        dataInizio: dataInizio,
        dataInizioAnno: dataInizioAnno,
        dataFine: dataFine,
        dataFineAnno: dataFineAnno,
        content: content,
      },
    ]);
    resetForm();
    setShowProfile(!showProfile)
  };

  const resetForm = () => {
    setData("");
    setIstitute("");
    setCity("");
    setDataInizio("");
    setDataInizioAnno("");
    setDataFine("");
    setDataFineAnno("");
    setContent("");
  };

  const editPost = (index) => {
    const updatedList = dataFieldList.map((item, i) =>
      i === index
        ? {
            data: editData.data,
            istitute: editData.istitute,
            city: editData.city,
            dataInizio: editData.dataInizio,
            dataInizioAnno: editData.dataInizioAnno,
            dataFine: editData.dataFine,
            dataFineAnno: editData.dataFineAnno,
            content: editData.content,
          }
        : item
    );
    setDataFieldList(updatedList);
    setEditIndex(null);
    resetEditData();
  };

  const resetEditData = () => {
    setEditData({
      data: "",
      istitute: "",
      city: "",
      dataInizio: "",
      dataInizioAnno: "",
      dataFine: "",
      dataFineAnno: "",
      content: "",
    });
  };



  const deletePost = (index) =>{
    const newList  = dataFieldList.filter((_,i) => i !== index)
    setDataFieldList(newList)
    setEditIndex(null);
  }

  

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
          {/*Data */}
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

            {/*Istute o Azienda */}
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

              {/*Citta */}
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

            {/**DATE INIZIO */}
            <div className="flex flex-row  justify-start items-center gap-10 sm:gap-20">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="startMonth"
                  className="font-semibold text-medium"
                >
                  Start Date
                </label>
                <select
                  className=" py-2 px-4 ml-r rounded-xl bg-gray-100"
                  id="startMonth"
                  name="startMonth"
                  value={dataInizio}
                  onChange={(e) => setDataInizio(e.target.value)}
                >
                  <option className="bg-white text-gray-800" value="">
                    {" "}
                    Month
                  </option>
                  <option className="bg-white text-gray-800" value="gen">
                    January
                  </option>
                  <option className="bg-white text-gray-800" value="feb">
                    February
                  </option>
                  <option className="bg-white text-gray-800" value="mar">
                    March
                  </option>
                  <option className="bg-white text-gray-800" value="apr">
                    April
                  </option>
                  <option className="bg-white text-gray-800" value="mag">
                    May
                  </option>
                  <option className="bg-white text-gray-800" value="giu">
                    June
                  </option>
                  <option className="bg-white text-gray-800" value="lug">
                    July
                  </option>
                  <option className="bg-white text-gray-800" value="ago">
                    August
                  </option>
                  <option className="bg-white text-gray-800" value="set">
                    September
                  </option>
                  <option className="bg-white text-gray-800" value="ott">
                    October
                  </option>
                  <option className="bg-white text-gray-800" value="nov">
                    November
                  </option>
                  <option className="bg-white text-gray-800" value="dec">
                    December
                  </option>
                </select>
                {/**DATE INIZIO Anoo */}
                <select
                  className="py-2 px-4 ml-r rounded-md bg-gray-100"
                  id="year"
                  name="year"
                  value={dataInizioAnno}
                  onChange={(e) => setDataInizioAnno(e.target.value)}
                >
                  {years.map((year) => (
                    <option
                      key={year}
                      value={year}
                      className="bg-white text-gray-800"
                    >
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/**DATE Fine */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="startMonth"
                  className="font-semibold text-medium"
                >
                  End Date
                </label>
                <select
                  className=" py-2 px-4 ml-l rounded-md bg-gray-100"
                  id="startMonth"
                  name="startMonth"
                  value={dataFine}
                  onChange={(e) => setDataFine(e.target.value)}
                >
                  <option className="bg-white text-gray-800" value="">
                    {" "}
                    Month
                  </option>
                    <option className="bg-white text-gray-800" value="gen">
                    January
                  </option>
                  <option className="bg-white text-gray-800" value="feb">
                    February
                  </option>
                  <option className="bg-white text-gray-800" value="mar">
                    March
                  </option>
                  <option className="bg-white text-gray-800" value="apr">
                    April
                  </option>
                  <option className="bg-white text-gray-800" value="mag">
                    May
                  </option>
                  <option className="bg-white text-gray-800" value="giu">
                    June
                  </option>
                  <option className="bg-white text-gray-800" value="lug">
                    July
                  </option>
                  <option className="bg-white text-gray-800" value="ago">
                    August
                  </option>
                  <option className="bg-white text-gray-800" value="set">
                    September
                  </option>
                  <option className="bg-white text-gray-800" value="ott">
                    October
                  </option>
                  <option className="bg-white text-gray-800" value="nov">
                    November
                  </option>
                  <option className="bg-white text-gray-800" value="dec">
                    December
                  </option>
                </select>

                {/**DATE Fine ANNO */}
                <select
                  className="py-2 px-4 ml-l rounded-md bg-gray-100"
                  id="year"
                  name="year"
                  value={dataFineAnno}
                  onChange={(e) => setDataFineAnno(e.target.value)}
                >
                  {years.map((year) => (
                    <option
                      key={year}
                      value={year}
                      className="bg-white text-gray-800"
                    >
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <RichTextEditor content={content} setContent={setContent} />

            <div className="flex justify-end items-center gap-2 mt-5 w-sm ">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={(e) => setShowProfile(!showProfile)}
              >
                Cancel
              </button>

              <button
                className="px-5 py-1 bg-blue-500 text-white rounded-2xl hover:bg-blue-400 mr-5
            "
                onClick={addPost}
              >
                Add
              </button>
            </div>
          </div>
        </>
      )}

      {dataFieldList.length > 0 && (
        <>
          <div className="flex flex-col gap-5 break-words w-full max-w-sm sm:max-w-lg  mb-5  text-gray-800">
            {dataFieldList.map((item, index) => (
              <div key={index}>
                {editindex === index ? (
                  <div>
                    {/*Data */}
                    <div>
                      <input
                        type="text"
                        name="data"
                        value={editData.data}
                        onChange={(e) =>
                          setEditData({ ...editData, data: e.target.value })
                        }
                        className="mb-2 p-2 border bg-gray-100 w-full mt-2"
                      />
                    </div>

                    {/*Istitute */}
                    <div>
                      <input
                        type="text"
                        name="istituto"
                        value={editData.istitute}
                        onChange={(e) =>
                          setEditData({ ...editData, istitute: e.target.value })
                        }
                        className="mb-2 p-2 border bg-gray-100 w-full mt-2"
                      />
                    </div>

                    {/*Date */}
                    <div className="flex flex-row  justify-start items-center gap-10 sm:gap-20">
                      {/*Date Inizio */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="startMonth"
                          className="font-semibold text-medium"
                        >
                          Start Date
                        </label>
                        <select
                          className=" py-2 px-4 ml-r rounded-xl bg-gray-100"
                          id="startMonth"
                          name="startMonth"
                          value={editData.dataInizio}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              dataInizio: e.target.value,
                            })
                          }
                        >
                          <option className="bg-white text-gray-800" value="">
                            {" "}
                            Month
                          </option>
                          <option className="bg-white text-gray-800" value="01">
                            January
                          </option>
                          <option className="bg-white text-gray-800" value="02">
                            February
                          </option>
                          <option className="bg-white text-gray-800" value="03">
                            March
                          </option>
                          <option className="bg-white text-gray-800" value="04">
                            April
                          </option>
                          <option className="bg-white text-gray-800" value="05">
                            May
                          </option>
                          <option className="bg-white text-gray-800" value="06">
                            June
                          </option>
                          <option className="bg-white text-gray-800" value="07">
                            July
                          </option>
                          <option className="bg-white text-gray-800" value="08">
                            August
                          </option>
                          <option className="bg-white text-gray-800" value="09">
                            September
                          </option>
                          <option className="bg-white text-gray-800" value="10">
                            October
                          </option>
                          <option className="bg-white text-gray-800" value="11">
                            November
                          </option>
                          <option className="bg-white text-gray-800" value="12">
                            December
                          </option>
                        </select>

                        {/*Date Inizio Anno */}
                        <select
                          className="py-2 px-4 ml-r rounded-md bg-gray-100"
                          id="year"
                          name="year"
                          value={editData.dataInizioAnno}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              dataInizioAnno: e.target.value,
                            })
                          }
                        >
                          {years.map((year) => (
                            <option
                              key={year}
                              value={year}
                              className="bg-white text-gray-800"
                            >
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/*Date Fine */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="startMonth"
                          className="font-semibold text-medium"
                        >
                          End Date
                        </label>
                        <select
                          className=" py-2 px-4 ml-l rounded-md bg-gray-100"
                          id="startMonth"
                          name="startMonth"
                          value={editData.dataFine}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              dataFine: e.target.value,
                            })
                          }
                        >
                          <option className="bg-white text-gray-800" value="">
                            {" "}
                            Month
                          </option>
                          <option className="bg-white text-gray-800" value="01">
                            January
                          </option>
                          <option className="bg-white text-gray-800" value="02">
                            February
                          </option>
                          <option className="bg-white text-gray-800" value="03">
                            March
                          </option>
                          <option className="bg-white text-gray-800" value="04">
                            April
                          </option>
                          <option className="bg-white text-gray-800" value="05">
                            May
                          </option>
                          <option className="bg-white text-gray-800" value="06">
                            June
                          </option>
                          <option className="bg-white text-gray-800" value="07">
                            July
                          </option>
                          <option className="bg-white text-gray-800" value="08">
                            August
                          </option>
                          <option className="bg-white text-gray-800" value="09">
                            September
                          </option>
                          <option className="bg-white text-gray-800" value="10">
                            October
                          </option>
                          <option className="bg-white text-gray-800" value="11">
                            November
                          </option>
                          <option className="bg-white text-gray-800" value="12">
                            December
                          </option>
                        </select>

                        {/**DATE Fine ANNO */}
                        <select
                          className="py-2 px-4 ml-l rounded-md bg-gray-100"
                          id="year"
                          name="year"
                          value={editData.dataFineAnno}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              dataFineAnno: e.target.value,
                            })
                          }
                        >
                          {years.map((year) => (
                            <option
                              key={year}
                              value={year}
                              className="bg-white text-gray-800"
                            >
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/*Editor */}
                     <div className="flex flex-col gap-10">
                      <div>
                       <RichTextEditor
                        content={editData.content}
                        setContent={(content) =>
                        setEditData({ ...editData, content })
                        }
                      />
                      </div>

                      <div className="flex justify-end  items-center gap-2">
                      <button
                        onClick={() => editPost(index)}
                        className="px-5 py-1 bg-green-500 text-white rounded-2xl hover:bg-green-400"
                      >
                        Save
                      </button>
                    </div>
                     </div>

                  
                  </div>
                ) : (
                  <div className="flex flex-col gap-5 w-full ">
                    <div
                      key={index}
                      className="flex justify-between items-center border border-gray-500 border-solid py-2 py-5 gap-5 mt-5"
                    >
                      <div className="flex flex-col gap-2  ml-4">
                        <h2 className="font-semibold text-2xl ">{item.data}</h2>
                        <h2 className="text-gray-500 ">
                          {item.istitute}, {item.city}
                        </h2>
                        <h2>Date inizio: {item.dataInizio}</h2>
                        <h2>Date inizio anno: {item.dataInizioAnno}</h2>
                       
                      </div>

                       <button 
                      onClick={() => deletePost(index)}
                      className="text-red-500 hover:text-red-700">
                        Delete
                      </button>

                      <button
                        className="mr-5 text-blue-500 hover:text-blue-700"
                        onClick={() => {
                          setEditIndex(index);
                          setEditData({
                            data: item.data,
                            istitute: item.istitute,
                            city: item.city,
                            dataInizio: item.dataInizio,
                            dataInizioAnno: item.dataInizioAnno,
                            dataFine: item.dataFine,
                            dataFineAnno: item.dataFineAnno,
                            content: item.content,
                          });
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
