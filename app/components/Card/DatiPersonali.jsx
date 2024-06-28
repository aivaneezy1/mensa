import React, { useState } from "react";
import DatiP from "../DatiP";
const DatiPersonali = (props) => {
  return (
    <div>
      <DatiP
        profilePicture={props.profilePicture}
        setProfilePicture={props.setProfilePicture}
        name={props.name}
        setName={props.setName}
        email={props.mail}
        setEmail={props.setEmail}
        lastName={props.lastName}
        setLastName={props.setLastName}
        phone={props.phone}
        setPhone={props.setPhone}
        address={props.address}
        setAddress={props.setAddress}
        postalCode={props.postalCode}
        setPostalCode={props.setPostalCode}
        city={props.city}
        setCity={props.setCity}
        dateBirth={props.dateBirth}
        setDateBirth={props.setDateBirth}
        placeBirth={props.placeBirth}
        setPlaceBirth={props.setPlaceBirth}
        genere={props.genere}
        setGenere={props.setGenere}
        civilStatus={props.civilStatus}
        setCivilStatus={props.setCivilStatus}
        nationality={props.nationality}
        setNationality={props.setNationality}
        license={props.license}
        setLicense={props.setLicense}
        website={props.website}
        setWebsite={props.setWebsite}
        linkin={props.linkin}
        setLinkin={props.setLinkin}
      />
    </div>
  );
};

export default DatiPersonali;
