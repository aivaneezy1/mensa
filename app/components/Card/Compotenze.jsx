import React, {useState} from "react";
import handleButton from "@/app/utils/handleButton";

const Compotenze = () => {
  const [competenza, setCompetenza] = useState("");
  const [showCompotenze, setShowCompotenze] = useState(false);
  const [compotenzeField, setCompotenzeField] = useState(false);
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

  return (
    <>
      {handleButton(showCompotenze, setShowCompotenze, "Competenze")}
      {showCompotenze && (
        <>
          <div className=" flex flex-col border border-gray-500 border-solid p-5">
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
                  setCompetenza("");
                  setRange(0);
                  setCompotenzeField(!compotenzeField);
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
                  setCompotenzeField(!compotenzeField);
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
    </>
  );
};

export default Compotenze;
