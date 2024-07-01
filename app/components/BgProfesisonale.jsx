import React, { useState, useEffect } from "react";
import { RichTextEditor } from "./Editor";

import handleButton from "../utils/handleButton";
const BgProfesisonale = (props) => {
  const [showProfile, setShowProfile] = useState(false);
  const [editindex, setEditIndex] = useState(null);
  /*Time State */
  const [years, setYears] = useState([]);

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

  const addPost = () => {
    props.setDataFieldList([
      ...props.dataFieldList,
      {
        data: props.data,
        istitute: props.istitute,
        city: props.city,
        dataInizio: props.dataInizio,
        dataInizioAnno: props.dataInizioAnno,
        dataFine: props.dataFine,
        dataFineAnno: props.dataFineAnno,
        content: props.content,
      },
    ]);
    resetForm();
    setShowProfile(!showProfile);
  };

  const resetForm = () => {
    props.setData("");
    props.setIstitute("");
    props.setCity("");
    props.setDataInizio("");
    props.setDataInizioAnno("");
    props.setDataFine("");
    props.setDataFineAnno("");
    props.setContent("");
  };

  const editPost = (index) => {
    const updatedList = props.dataFieldList.map((item, i) =>
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
    props.setDataFieldList(updatedList);
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

  const deletePost = (index) => {
    const newList = props.dataFieldList.filter((_, i) => i !== index);
    props.setDataFieldList(newList);
    setEditIndex(null);
  };

  useEffect(() => {
    // Function to generate years from current year to 1950
    const generateYears = () => {
      const currentYear = new Date().getFullYear();
      const yearsArray = [];
      for (let year = currentYear; year >= 1950; year--) {
        yearsArray.push(year);
        ``;
      }
      return yearsArray;
    };

    // Set state with generated years on component mount
    setYears(generateYears());
  }, []);

  console.log("Field", props.dataFieldList);
  return (
    <>
      {handleButton(showProfile, setShowProfile, props.field)}
      {showProfile && (
        <>
          {/*Data */}
          <div className="flex flex-col gap-5 break-words w-full max-w-sm sm:max-w-lg text-gray-800 overflow-hidden">
            <h2 className="font-semibold text-medium">{props.role}</h2>
            <input
              type="text"
              name="data"
              value={props.data}
              onChange={(ev) => props.setData(ev.target.value)}
              className="mb-2 p-2 border bg-gray-100 rounded-md"
            />

            {/*Istute o Azienda */}
            <div className="flex flex-row gap-5 items-center">
              <div className="flex flex-col">
                <h2 className="font-semibold text-medium">{props.company}</h2>
                <input
                  type="text"
                  name="data"
                  value={props.istitute}
                  onChange={(ev) => props.setIstitute(ev.target.value)}
                  className="mb-2 p-2 border bg-gray-100 rounded-md"
                />
              </div>

              {/*Citta */}
              <div className="flex flex-col  ">
                <h2 className="font-semibold text-medium">Citta'</h2>
                <input
                  type="text"
                  name="data"
                  placeholder="Citta'"
                  value={props.city}
                  onChange={(ev) => props.setCity(ev.target.value)}
                  className="mb-2 p-2 border bg-gray-100 rounded-md mr-5"
                />
              </div>
            </div>

            {/**DATE INIZIO */}
            <div className="flex flex-row  justify-between sm:justify-start items-center gap-10 sm:gap-20">
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
                  value={props.dataInizio}
                  onChange={(e) => props.setDataInizio(e.target.value)}
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
                {/**DATE INIZIO Anno */}
                <select
                  className="py-2 px-4 ml-r rounded-md bg-gray-100"
                  id="year"
                  name="year"
                  value={props.dataInizioAnno}
                  onChange={(e) => {
                    props.setDataInizioAnno(e.target.value);
                  }}
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
                  value={props.dataFine}
                  onChange={(e) => props.setDataFine(e.target.value)}
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
                  value={props.dataFineAnno}
                  onChange={(e) => {
                    props.setDataFineAnno(e.target.value);
                  }}
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

            <RichTextEditor
              content={props.content}
              setContent={props.setContent}
            />

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

      {props.dataFieldList.length > 0 && (
        <>
          <div className="flex flex-col gap-5 break-words w-full max-w-sm sm:max-w-lg text-gray-800 overflow-hidden">
            {props.dataFieldList.map((item, index) => (
              <div key={index} className="w-full">
                {editindex === index ? (
                  <div>
                    {/* Role */}
                    <h2 className="font-semibold text-medium">{props.role}</h2>
                    <div>
                      <input
                        type="text"
                        name="data"
                        value={editData.data}
                        onChange={(e) =>
                          setEditData({ ...editData, data: e.target.value })
                        }
                        className="mb-2 p-2 border bg-gray-100 w-full mt-2 rounded-md"
                      />
                    </div>

                    {/* Institute and City */}
                    <div className="flex flex-row gap-5 justify-start items-center">
                      <div className="flex flex-col">
                        <h2 className="font-semibold text-medium">
                          {props.company}
                        </h2>
                        <input
                          type="text"
                          name="istituto"
                          value={editData.istitute}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              istitute: e.target.value,
                            })
                          }
                          className="mb-2 p-2 border bg-gray-100 rounded-md w-full"
                        />
                      </div>

                      <div className="flex flex-col">
                        <h2 className="font-semibold text-medium">Citta'</h2>
                        <input
                          type="text"
                          name="data"
                          placeholder="Citta'"
                          value={editData.city}
                          onChange={(e) =>
                            setEditData({ ...editData, city: e.target.value })
                          }
                          className="mb-2 p-2 border bg-gray-100 rounded-md w-full"
                        />
                      </div>
                    </div>

                    {/**DATE INIZIO */}
                    <div className="flex flex-row  justify-between sm:justify-start items-center gap-10 sm:gap-20">
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
                          {props.dataFieldList.length > 0 ? (
                            props.dataFieldList.map((item, index) => (
                              <option className="bg-white text-gray-800">
                                {item.dataInizio}
                              </option>
                            ))
                          ) : (
                            <option className="bg-white text-gray-800" value="">
                              Months
                            </option>
                          )}

                          <option
                            className="bg-white text-gray-800"
                            value="gen"
                          >
                            January
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="feb"
                          >
                            February
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="mar"
                          >
                            March
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="apr"
                          >
                            April
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="mag"
                          >
                            May
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="giu"
                          >
                            June
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="lug"
                          >
                            July
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="ago"
                          >
                            August
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="set"
                          >
                            September
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="ott"
                          >
                            October
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="nov"
                          >
                            November
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="dec"
                          >
                            December
                          </option>
                        </select>
                        {/**DATE INIZIO Anno */}
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
                          value={editData.dataFine}
                          onChange={(e) =>
                            setEditData({
                              ...editData,
                              dataFine: e.target.value,
                            })
                          }
                        >
                            {props.dataFieldList.length > 0 ? (
                            props.dataFieldList.map((item, index) => (
                              <option className="bg-white text-gray-800">
                                {item.dataFine}
                              </option>
                            ))
                          ) : (
                            <option className="bg-white text-gray-800" value="">
                              Months
                            </option>
                          )}

                          <option
                            className="bg-white text-gray-800"
                            value="gen"
                          >
                            January
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="feb"
                          >
                            February
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="mar"
                          >
                            March
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="apr"
                          >
                            April
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="mag"
                          >
                            May
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="giu"
                          >
                            June
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="lug"
                          >
                            July
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="ago"
                          >
                            August
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="set"
                          >
                            September
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="ott"
                          >
                            October
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="nov"
                          >
                            November
                          </option>
                          <option
                            className="bg-white text-gray-800"
                            value="dec"
                          >
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

                    {/* Rich Text Editor */}
                    <div className="flex flex-col gap-10">
                      <div>
                        <RichTextEditor
                          content={editData.content}
                          setContent={(content) =>
                            setEditData({ ...editData, content })
                          }
                        />
                      </div>

                      {/* Save Button */}
                      <div className="flex justify-end items-center gap-2">
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={(e) => setEditIndex(null)}
                        >
                          Cancel
                        </button>
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
                  <div className="flex flex-col gap-5 max-w-sm overflow-hidden">
                    {/* Display Mode */}
                    <div className="flex justify-between items-center border border-gray-500 border-solid py-2 py-5 gap-5 my-5 rounded-md">
                      <div className="flex flex-col gap-2 ml-4 w-3/4">
                        <h2 className="font-semibold text-2xl">{item.data}</h2>
                        <h2 className="text-gray-500">
                          {item.istitute}, {item.city}
                        </h2>
                      </div>

                      {/* Edit and Delete Buttons */}
                      <div className="flex gap-5">
                        <button
                          onClick={() => deletePost(index)}
                          className="text-red-500 hover:text-red-700"
                        >
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
                              content: item.content,
                            });
                          }}
                        >
                          Edit
                        </button>
                      </div>
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

export default BgProfesisonale;
