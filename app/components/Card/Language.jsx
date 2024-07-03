import React from 'react'
import CompAndEdit from "../CompAndEdit";
const Language = (props) => {
  return (
    <div>
      <CompAndEdit
      dati={props.dati}
      setDati={props.setDati}
      fieldList={props.langFieldList}
      setFieldList={props.setLangFieldList}
      field={"Languages"}
      range={props.range}
      setRange={props.setRange}/>
      
    </div>
  )
}

export default Language
