import React,{useState} from "react";
import handleButton from "../utils/handleButton";
const DatiP = (props) => {
  // State to toggle optional fields
  const [showDatiPersonali, setShowDatiPersonali] = useState(false);
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  return (
    <>
      {/*Dati Personali button */}
      {handleButton(showDatiPersonali, setShowDatiPersonali, "Dati Personali")}

      <div className="flex flex-col mt-5 gap-2 nax-w-sm min-w-sm">
        {showDatiPersonali && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={props.phone}
              onChange={(e) => props.setPhone(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={props.address}
              onChange={(e) => props.setAddress(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <input
              type="date"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value={props.dateBirth}
              onChange={(e) => props.setDateBirth(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <input
              type="text"
              name="placeBirth"
              placeholder="Place of Birth"
              value={props.placeBirth}
              onChange={(e) => props.setPlaceBirth(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <input
              type="text"
              name="genere"
              placeholder="Genere"
              value={props.genere}
              onChange={(e) => props.setGenere(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <input
              type="text"
              name="nationality"
              placeholder="Nationality"
              value={props.nationality}
              onChange={(e) => props.setNationality(e.target.value)}
              className="mb-2 p-2 border bg-gray-100"
            />

            <input
              type="text"
              name="civilStatus"
              placeholder="Civil Status"
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
                <input
                  type="text"
                  name="license"
                  placeholder="License"
                  value={props.license}
                  onChange={(e) => props.setLicense(e.target.value)}
                  className="mb-2 p-2 border bg-gray-100"
                />

                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  value={props.website}
                  onChange={(e) => props.setWebsite(e.target.value)}
                  className="mb-2 p-2 border bg-gray-100"
                />

                <input
                  type="text"
                  name="linkin"
                  placeholder="LinkedIn"
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
