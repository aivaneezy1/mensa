import React from "react";
import Image from "next/image";
import handleInputRange from "@/app/utils/handleInputRange";

const BlueDakiModel = (props) => {
  const handlePersonalData = (data, data2, data3, data4) => {
    return (
      <div className="flex-col justify-start">
        <div className="mt-5 flex gap-1 flex-col">
          <p className="font-medium break-all">
            {data} {data2}
          </p>
          <p className="break-all">{data3}</p>
        </div>
      </div>
    );
  };

  const handleCompAndLang = (data) => {
    return (
      <div>
        {data.map((post, index) => (
          <div 
          key={index}>
            <p className="font-medium text-center">{post.competenza}</p>
            <p className="text-gray-500 text-center">{post.livello}</p>
          </div>
        ))}
      </div>
    );
  };
  console.log("field", props.compFieldList)
  return (
    <div className="grid md:grid-cols-[2fr_3fr] p-10 h-screen">
      {/*LEFT SIDE DIV */}
      <div className="bg-blueDaki gap-5 flex flex-col justify-center items-center ">
        {props.selectedImage && (
          <div className="border border-orange-400 p-2 mt-5 ">
            <Image
              src={props.selectedImage}
              alt="pic"
              width={150}
              height={150}
            />
          </div>
        )}

        {/*Personal Data */}
        <div className="">
          <div className="">
            <h2 className="text-4xl whitespace-nowrap">Dati Personali</h2>
          </div>
          {/*Name and Lastname */}
          {(props.name || props.lastName) &&
            handlePersonalData(props.name, props.lastName)}

          {/*Email */}
          {props.email && handlePersonalData(props.email)}

          {/*Phone */}
          {props.phone && handlePersonalData(props.phone)}

          {/*Addrress, postalcoe and city */}
          {(props.address || props.postalCode || props.city) &&
            handlePersonalData(props.address, props.postalCode, props.city)}

          {/*Date of birth */}
          {props.dateBirth && handlePersonalData(props.dateBirth)}

          {/*Place of Birth */}
          {props.placeBirh && handlePersonalData(props.placeBirh)}

          {/*Genere */}
          {props.genere && handlePersonalData(props.genere)}

          {/*Nationality */}
          {props.nationality && handlePersonalData(props.nationality)}

          {/*Civil Status */}
          {props.civilStatus && handlePersonalData(props.civilStatus)}

          {/*Optionals */}
          {props.license && handlePersonalData(props.license)}
          {props.website && handlePersonalData(props.website)}
          {props.linkin && handlePersonalData(props.linkin)}
        </div>

        <hr className="border border-b border-orange-500 w-1/2 my-4" />

        {/*Competence */}
        <div className="flex flex-col justify-start  items-center">
          <h2 className="text-4xl mb-3">Compotenze</h2>
          {props.compDati ? (
            <>
              <p className="font-medium">{props.compDati}</p>
              <p className="text-gray-500">{handleInputRange(props.range)}</p>
            </>
          ) : (
             props.compFieldList.length > 0 && handleCompAndLang(props.compFieldList)
          )}
        </div>

        <hr className="border border-b border-orange-500 w-1/2 my-4" />

        {/*Lingue */}
       <div className="flex flex-col justify-start  items-center">
          <h2 className="text-4xl mb-3">Lingue</h2>
          {props.langDati ? (
            <>
              <p className="font-medium">{props.langDati}</p>
              <p className="text-gray-500">{handleInputRange(props.range)}</p>
            </>
          ) : (
             props.langFieldList.length > 0 && handleCompAndLang(props.langFieldList)
          )}
        </div>
          <hr className="border border-b border-orange-500 w-1/2 my-4" />
      </div>



      {/*RIGHT DIV */}
      <div className="ml-10 flex flex-col mt-10">
        {/*Name */}
        <div className="mb-2">
          <h2 className="text-5xl break-all">{props.name}</h2>
          <h2 className="text-5xl text-gray-500 mt-2 break-all">
            {props.lastName}
          </h2>
        </div>
        <hr className="border border-b border-orange-500 w-1/2 my-4" />

        {/*Profile */}
        <div className="mb-2">
          <h2 className="text-4xl mb-3">Profilo</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <hr className="border border-b border-orange-500 w-1/2 my-4" />

        {/*Istruzione */}
        <div className="mb-2">
          <h2 className="text-4xl mb-3">Istruzione</h2>
          <p className="font-bold">Bachelors of Science in Nursing</p>
          <p className="text-blue-500 font-semibold">2023 Gen- 2012 Nov</p>
          <p className="text-gray-500 font-semibold">
            Universita di Pisa | Pisa
          </p>

          <p className="mt-2">
            Relevant coursework: Anatomy and physiology, pharmacology, nursing
            ethics, and patient care management.{" "}
          </p>
        </div>

        <hr className="border border-b border-orange-500 w-1/2 my-4" />

        {/*Experience */}
        <div className="mb-2">
          <h2 className="text-4xl mb-3">Esperienze Lavorative</h2>
          <p className="font-bold">Bachelors of Science in Nursing</p>
          <p className="text-blue-500 font-semibold">2023 Gen- 2012 Nov</p>
          <p className="text-gray-500 font-semibold">
            Universita di Pisa | Pisa
          </p>

          <p className="mt-2">
            Relevant coursework: Anatomy and physiology, pharmacology, nursing
            ethics, and patient care management.{" "}
          </p>
        </div>

          <hr className="border border-b border-orange-500 w-1/2 my-4" />
      </div>
    </div>
  );
};

export default BlueDakiModel;
