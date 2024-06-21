import React, { useState } from "react";
import handleButton from "@/app/utils/handleButton";
import CompAndEdit from "../CompAndEdit";

const Compotenze = (props) => {
  return (
    <CompAndEdit
      dati={props.dati}
      setDati={props.setDati}
      fieldList={props.compFieldList}
      setFieldList={props.setCompFieldList} 
      field={"Competenzaa"}
    />
  );
};

export default Compotenze;
