"use client"
import React,{useState} from 'react'
import handleButton from '@/app/utils/handleButton'
import BgProfesisonale from '../BgProfesisonale'
const EsperienzeLavoro = (props) => {
  
  return (
    <div>
      <BgProfesisonale
        data={props.expDati}
        setData={props.setExpDati}
        istitute={props.expOrg}
        setIstitute={props.setExpOrg}
        city={props.expCity}
        setCity={props.setExpCity}

        dataInizio={props.exprDateInizo}
        setDataInizio={props.setExprDateInizio}
        dataInizioAnno={props.exprDateInizioAnno}
        setDataInizioAnno={props.setExprDateInizioAnno}

        dataFine={props.exprDateFine}
       setDataFine={props.setExprDateFine}
        dataFineAnno={props.exprDateFineAnno}
        setDataFineAnno={props.setExprDateFineAnno}

        dataFieldList={props.exprDataFieldList}
        setDataFieldList={props.setExprDataFieldList}


        content={props.exprContent}
        setContent={props.setExprContent}
        field={"Esperienze lavorative"}
        role={"Posizione"}
        company={"Azienda"}/>
        
    </div>
  )
}

export default EsperienzeLavoro
