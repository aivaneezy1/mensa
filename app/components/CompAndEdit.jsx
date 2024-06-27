"use client";
import React, { useContext, useState } from "react";
import handleButton from "@/app/utils/handleButton";
import { DatiContext } from "../context/DatiContext";

const CompAndEdit = (props) => {
  const [showField, setShowField] = useState(false);
  const [range, setRange] = useState(0);
  const [rangeEdit, setRangeEdit] = useState(0);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    competenza: "",
    livello: 0,
    setRange: 0,
  });

  const handleInputRange = (value) => {
    switch (value) {
      case 1:
        return "Principiante";
      case 2:
        return "Elementare";
      case 3:
        return "Buono";
      case 4:
        return "Eccellente";
      case 5:
        return "Fluente";
      default:
        return "Choose";
    }
  };

  const addPost = () => {
    props.setFieldList([
      ...props.fieldList,
      { competenza: props.dati, livello: handleInputRange(range) },
    ]);
    props.setDati("");
    setRange(0);
    setShowField(!showField);
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
      {handleButton(showField, setShowField, props.field)}
      {showField && (
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
                className="mb-2 p-2 border bg-gray-100 sm:w-1/2 w-full mt-2"
              />
            </div>

            <div className="flex flex-row gap-2 mx-2">
              <input
                type="range"
                min="0"
                max="5"
                id="range"
                value={range}
                onChange={(e) => setRange(parseInt(e.target.value))}
                className=" range-input sm:w-1/4 w-full"
              />
              <label htmlFor="range">{handleInputRange(range)}</label>
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
        <div className="flex flex-col gap-5 break-words w-full max-w-sm sm:max-w-lg text-gray-800 overflow-hidden">
          {props.fieldList.map((item, index) => (
            <div key={index} className="mb-2">
              {editIndex === index ? (
                <div className="flex flex-col items-start w-full">
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
                      className="mb-2 p-2 border bg-gray-100 sm:w-1/2  w-full mt-2"
                    />
                  </div>

                  <div className="flex items-center w-full">
                    <input
                      type="range"
                      id="edit"
                      min="0"
                      max="5"
                      value={editData.livello}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          livello: parseInt(e.target.value),
                        })
                      }
                      className="sm:w-1/4   w-full"
                    />
                    <label className="ml-2 text-center" htmlFor="edit">
                      {handleInputRange(rangeEdit)}
                    </label>
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
