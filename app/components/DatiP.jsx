import React, { useState } from "react";
import handleButton from "../utils/handleButton";

const DatiP = (props) => {
  // State to toggle optional fields
  const [showDatiPersonali, setShowDatiPersonali] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);


   const [profilePicture, setProfilePicture] = useState(null);

   const handleFileChange = (e) =>{
    setProfilePicture(e.target.files[0]);
   }
  const handleUpload = async (ev) => {
    ev.preventDefault();

    if(!profilePicture){
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    console.log(result)
  
  };
  return (
    <>
      {/*Dati Personali button */}
      {handleButton(showDatiPersonali, setShowDatiPersonali, "Dati Personali")}

      <div className="flex flex-col  gap-2  min-w-sm  ">
        {showDatiPersonali && (
          <>
            <div className=" flex flex-col gap-5 lg:flex-row lg:flex">

              <div className="flex flex-col bg-transparent border py-10 mt-2  rounded-md">
                <label className="flex flex-col justify-center gap-1 items-center  bg-transparent p-4 text-2xl text-gray-600 cursor-pointer ">
                  <input 
                  type="file" 
                  className="hidden"
                  onChange={handleUpload} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    />
                  </svg>
                  Carica una foto
                </label>
              </div>

              <div className="lg:flex lg:flex-col gap-2 ">
                <div className="lg:flex lg:flex-row gap-2">
                  <div className="flex flex-col">
                    <label htmlFor="name">Nome</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={props.name}
                      onChange={(e) => props.setName(e.target.value)}
                      className="mb-2 p-2 border bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="lastName">Cognome</label>
                    <input
                      type="text"
                      name="last name"
                      id="lastName"
                      value={props.lastName}
                      onChange={(e) => props.setLastName(e.target.value)}
                      className="mb-2 p-2 border bg-gray-100"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={props.email}
                    onChange={(e) => props.setEmail(e.target.value)}
                    className="mb-2 p-2 border bg-gray-100"
                  />
                </div>
              </div>
            </div>

            <label htmlFor="phone number">Telefono</label>
            <input
              type="tel"
              name="phone"
              id="phone number"
              value={props.phone}
              onChange={(e) => props.setPhone(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <label htmlFor="address">Indirizzo</label>
            <input
              type="text"
              name="address"
              id="address"
              value={props.address}
              onChange={(e) => props.setAddress(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <label htmlFor="postalCode">Codice Postale</label>
            <input
              type="text"
              name="postalCode"
              id="postal code"
              value={props.postalCode}
              onChange={(e) => props.setPostalCode(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <label htmlFor="city">Città</label>
            <input
              type="text"
              name="city"
              value={props.city}
              onChange={(e) => props.setCity(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <label htmlFor="dateofBirth">Data di Nascita</label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateofBirth"
              value={props.dateBirth}
              onChange={(e) => props.setDateBirth(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <label htmlFor="placeBirth">Luogo di Nascita</label>
            <input
              type="text"
              name="placeBirth"
              id="placeBirth"
              value={props.placeBirth}
              onChange={(e) => props.setPlaceBirth(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <label htmlFor="genere">Genere</label>
            <input
              type="text"
              name="genere"
              id="genere"
              value={props.genere}
              onChange={(e) => props.setGenere(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <label htmlFor="nationality">Nazionalità</label>
            <input
              type="text"
              name="nationality"
              id="nationality"
              value={props.nationality}
              onChange={(e) => props.setNationality(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <label htmlFor="civilStatus">Stato Civile</label>
            <input
              type="text"
              name="civilStatus"
              id="civilStatus"
              value={props.civilStatus}
              onChange={(e) => props.setCivilStatus(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            {/* Button to toggle optional fields */}
            {handleButton(
              showOptionalFields,
              setShowOptionalFields,
              "Optionals"
            )}

            {/* Optional input fields */}
            {showOptionalFields && (
              <>
                <label htmlFor="license">Patente di Guida</label>
                <input
                  type="text"
                  name="license"
                  id="license"
                  value={props.license}
                  onChange={(e) => props.setLicense(e.target.value)}
                  className="mb-2 p-2 border bg-gray-100"
                />

                <label htmlFor="website">Sito Web</label>
                <input
                  type="text"
                  name="website"
                  id="website"
                  value={props.website}
                  onChange={(e) => props.setWebsite(e.target.value)}
                  className="mb-2 p-2 border bg-gray-100"
                />

                <label htmlFor="linkin">Linkendln</label>
                <input
                  type="text"
                  name="linkin"
                  id="linkin"
                  value={props.linkin}
                  onChange={(e) => props.setLinkin(e.target.value)}
                  className="mb-2 p-2 border bg-gray-100"
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default DatiP;
