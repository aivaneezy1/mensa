import React, { useState } from "react";
import DatiP from "../DatiP";
const DatiPersonali = (props) => {
  return (
    <div>
      <DatiP
        name={props.name}
        setName={props.setName}
        email={props.mail}
        setEmail={props.setEmail}
        phone={props.phone}
        setPhone={props.setPhone}
        address={props.address}
        setAddress={props.setAddress}
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
