import React, { useState } from "react";
import handleButton from "../utils/handleButton";
import Upload from "./Upload";
const DatiP = (props) => {
  // State to toggle optional fields
  const [showDatiPersonali, setShowDatiPersonali] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);


  
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState("")

  
  return (  
    <>
      {/*Dati Personali button */}
      {handleButton(showDatiPersonali, setShowDatiPersonali, "Dati Personali")}

      <div className="flex flex-col  gap-2  min-w-sm  ">
        {showDatiPersonali && (
          <>
            <div className=" flex flex-col gap-5 lg:flex-row lg:flex">


                {/*Upload Component */}
                <Upload 
                selectedImage={selectedImage} 
                setSelectedImage={setSelectedImage}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}/>

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
