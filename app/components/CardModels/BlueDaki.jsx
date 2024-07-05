import React from "react";
import Image from "next/image";
import handleInputRange from "@/app/utils/handleInputRange";
import DOMPurify from 'dompurify';
const BlueDakiModel = (props) => {
  let currentYear = new Date().getFullYear();

  const nl2br = (str) => {
    if (!str) return null;
    return str.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index !== str.split("\n").length - 1 && <br />}
      </span>
    ));
  };

  const handlePersonalData = (data, data2, data3, data4) => {
    return (
      <div className="flex-col justify-start">
        <div className="mt-5 flex gap-1 flex-col">
          <p className="font-medium break-all">
            {data} {data2}
          </p>
          <p className="break-all text-gray-500">{data3}</p>
        </div>
      </div>
    );
  };

  const handleCompAndLang = (data) => {
    return (
      <div>
        {data.map((post, index) => (
          <div key={index}>
            <p className="font-medium text-center">{post.competenza}</p>
            <p className="text-gray-500 text-center">{post.livello}</p>
          </div>
        ))}
      </div>
    );
  };

  const handleProfile = (data) => {
    return (
      <div className="mt-2 break-all whitespace-pre-line">
        <div
          className="break-words"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data )}}
        />
      </div>
    );
  };

  const handleBgData = (data) => {
    return (
      <div>
        {data.length > 0 &&
          data.map((post, index) => (
            <div key={index}>
              <p className="font-bold">{post.data}</p>
              <p className="text-blue-500 font-semibold whitespace-nowrap">
                {post.dataInizioAnno ? post.dataInizioAnno : currentYear}{" "}
                {post.dataInizio} -{" "}
                {post.dataFineAnno ? post.dataFineAnno : currentYear}{" "}
                {post.dataFine}
              </p>
              {(post.istitute || post.city) && (
                <p className="text-gray-500 font-semibold whitespace-nowrap">
                  {post.istitute} | {post.city}
                </p>
              )}
              <div className="mt-2 break-all whitespace-pre-line">
                <div
                  className="break-words"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
                />
              </div>
            </div>
          ))}
      </div>
    );
  };

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
            <h2 className="text-4xl whitespace-nowrap">Dati </h2>
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
            props.compFieldList.length > 0 &&
            handleCompAndLang(props.compFieldList)
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
            props.langFieldList.length > 0 &&
            handleCompAndLang(props.langFieldList)
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
          <p>{handleProfile(props.profileContent)}</p>
        </div>
        <hr className="border border-b border-orange-500 w-1/2 my-4" />

        {/*Istruzione */}
        <div className="mb-2">
          <h2 className="text-4xl mb-3">Istruzione</h2>
          {handleBgData(props.formDataFieldList)}
        </div>

        <hr className="border border-b border-orange-500 w-1/2 my-4" />

        {/*Experience */}
        <div className="mb-2">
          <h2 className="text-4xl mb-3">Esperienze </h2>
          {handleBgData(props.exprDataFieldList)}
        </div>

        <hr className="border border-b border-orange-500 w-1/2 my-4" />
      </div>
    </div>
  );
};

export default BlueDakiModel;
