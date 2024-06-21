"use client"
import React, { useContext, useState } from 'react';
import handleButton from "@/app/utils/handleButton";
import { DatiContext } from "../context/DatiContext";
const CompAndEdit = (props) => {
  const [addField, setAddField] = useState(false);
  const [showField, setShowField] = useState(false);
  const [range, setRange] = useState(0);

 

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

  const addCompetenza = () => {
    props.setFieldList([...props.fieldList, { competenza: props.dati, range }]);
    props.setDati("");
    setRange(0);
   setShowField(!showField)
  };

  const deleteCompetenza = (index) => {
    const newList = props.fieldList.filter((_, i) => i !== index);
    props.setFieldList(newList);
  };

  return (
    <>
      {handleButton(showField, setShowField, props.field)}
      {showField && (
        <>
          <div className="flex flex-col border border-gray-500 border-solid p-5">
            <div>
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
                className="mb-2 p-2 border bg-gray-100 w-full mt-2"
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
                className="w-md"
              />
              <label htmlFor="range">
                {handleInputRange(range)}
              </label>
            </div>

            <div className="flex justify-end items-center gap-2 w-sm mt-5">

              <button
                onClick={addCompetenza}
                className="px-5 py-1 bg-blue-500 text-white rounded-2xl hover:bg-blue-400"
              >
                Add
              </button>
            </div>
          </div>
        </>
      )}

      {/* Showing the competenze list */}
      {props.fieldList.length > 0 && (
        <div className="border border-gray-500 border-solid p-5 mb-5 mt-2">
          {props.fieldList.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-bold">{item.competenza ? item.competenza : `[${props.field}]`}</h2>
                <h2 className="text-gray-500">{handleInputRange(item.range)}</h2>
              </div>
              <button
                onClick={() => deleteCompetenza(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
          {props.fieldList.length > 0 && (
           <div
           onClick={() => setShowField(!showField)}>
            {handleButton(addField, setAddField, `Add ${props.field}`)}
           </div>
          )} 
     
    </>
  );
}

export default CompAndEdit;
