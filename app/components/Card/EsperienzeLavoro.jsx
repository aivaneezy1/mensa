"use client"
import React,{useState} from 'react'
import handleButton from '@/app/utils/handleButton'
const EsperienzeLavoro = () => {
  const [showEsperienza, setShowEsperienza] = useState(false);
  return (
    <div>
      {handleButton(showEsperienza, setShowEsperienza, "Esperienze lavorative")}
    </div>
  )
}

export default EsperienzeLavoro
