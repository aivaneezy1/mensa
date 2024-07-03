"use client";
import React, { useState } from "react";
import handleButton from "@/app/utils/handleButton";
import { RichTextEditor } from "../Editor";
import BgProfesisonale from "../BgProfesisonale";
const Formazione = (props) => {
  return (
    <div>
      <BgProfesisonale
        data={props.formDati}
        setData={props.setFormDati}
        istitute={props.formOrg}
         setIstitute={props.setFormOrg}
        city={props.formCity}
        setCity={props.setFormCity}

        dataInizio={props.formDateInizio}
        setDataInizio={props.setFormDateInizio}
        
         dataInizioAnno={props.formDateInizioAnno}
        setDataInizioAnno={props.setFormDateInizioAnno}

         dataFine={props.formDateFine}
        setDataFine={props.setFormDateFine}

        dataFineAnno={props.formDateFineAnno}
       setDataFineAnno={props.setFormDateFineAnno}

        dataFieldList={props.formDataFieldList}
       setDataFieldList={props.setFormDataFieldList}
        content={props.formContent}
        setContent={props.setFormContent}
        field={"Istruzione"}
        role={"Istruzione"}
        company={"Istituto"}
      />
    </div>
  );
};

export default Formazione;
