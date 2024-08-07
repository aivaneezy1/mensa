"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useContext, useState } from "react";

import { DatiContext } from "../context/DatiContext";
import handleInputRange from "../utils/handleInputRange";
import HandleButton from "@/app/utils/handleButton";

const CompAndEdit = (props) => {
  const { showProfile, setShowProfile } = useContext(DatiContext);
 
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    competenza: "",
    livello: 0,
    setRange: 0,
  });



  const addPost = () => {
    props.setFieldList([
      ...props.fieldList,
      { competenza: props.dati, livello: handleInputRange(props.range) },
    ]);
    props.setDati("");
    props.setRange(0);
    setShowProfile(null);
  };

  const editPost = (index) => {
    const updatedList = props.fieldList.map((item, i) =>
      i === index
        ? {
            competenza: editData.competenza,
            livello: handleInputRange(editData.livello),
          }
        : item
    );
    props.setFieldList(updatedList);
    setEditIndex(null);
    setEditData({ competenza: "", livello: 0 });
  };

  const deletePost = (index) => {
    const newList = props.fieldList.filter((_, i) => i !== index);
    props.setFieldList(newList);
  };

  return (
    <>
     
      <HandleButton showSection={props.field} field={props.field}/>
      {showProfile === props.field && (
        <>
          <div className="flex flex-col p-5">
            <div className="flex flex-col">
              <label htmlFor="competenze" className="text-gray-500 text-2xl">
                {props.field}
              </label>
              <input
                type="text"
                id="competenze"
                name="competenza"
                value={props.dati}
                placeholder={props.field}
                onChange={(e) => props.setDati(e.target.value)}
                className=" flex flex-grow mb-2 p-2 border bg-gray-100 lg:w-1/2 w-full mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-row gap-2 mx-2">
              <Box sx={{ width: 270 }}>
                <Slider
                  id="range"
                  value={props.range}
                  color="primary"
                  min={0}
                  max={5}
                  step={1}
                  onChange={(e, value) => props.setRange(value)}
                />
                <label htmlFor="range">{handleInputRange(props.range)}</label>
              </Box>
            </div>

            <div className="flex justify-end items-center gap-2 w-full mt-5">
              <button
                onClick={(e) => setShowField(!showField)}
                className="text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={addPost}
                className="px-5 py-1 bg-blue-500 text-white rounded-2xl hover:bg-blue-400"
              >
                Add
              </button>
            </div>
          </div>
        </>
      )}

      {props.fieldList.length > 0 && (
        <div className="flex flex-col gap-5 break-words w-full  text-gray-800 overflow-hidden">
          {props.fieldList.map((item, index) => (
            <div key={index} className="mb-2">
              {editIndex === index ? (
                <div className="flex flex-col p-5 w-full">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="competenze"
                      className="text-gray-500 text-2xl"
                    >
                      {props.field}
                    </label>
                    <input
                      type="text"
                      value={editData.competenza}
                      onChange={(e) =>
                        setEditData({ ...editData, competenza: e.target.value })
                      }
                      className="mb-2 p-2 border bg-gray-100 lg:w-1/2  w-full mt-2"
                    />
                  </div>

                  <div className="flex flex-row gap-2 mx-2">
                    <Box sx={{ width: 270 }}>
                      <Slider
                        id="edit"
                        value={editData.livello}
                        color="primary"
                        min={0}
                        max={5}
                        step={1}
                        onChange={(e,value) =>
                          setEditData({
                            ...editData,
                            livello: value,
                          })
                        }
                      />
                      <label htmlFor="edit">
                        {handleInputRange(editData.livello)}
                      </label>
                    </Box>
                  </div>

                  <div className="flex justify-end gap-2 w-full mt-5">
                    <button
                      onClick={() => editPost(index)}
                      className="px-5 py-1 bg-green-500 text-white rounded-2xl hover:bg-green-400"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center max-w-sm border border-gray-500 border-solid p-5 rounded-md">
                  <div className="">
                    <h2 className="font-semibold text-2xl break-words whitespace-normal">
                      {item.competenza ? item.competenza : `[${props.field}]`}
                    </h2>
                    <h2 className="text-gray-500">{item.livello}</h2>
                  </div>

                  <div className="flex gap-5">
                    <button
                      onClick={() => deletePost(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        setEditIndex(index);
                        setEditData({
                          competenza: item.competenza,
                          livello: item.livello,
                        });
                      }}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CompAndEdit;
