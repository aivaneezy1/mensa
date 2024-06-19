import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const InvoicePDF  = dynamic(() =>import("./Document"),{
    ssr:false,
})

const PdfView = () => {
 const [client, setClient] = useState(false);

  useEffect(() =>{
        setClient(true);
    },[])
  return (
    <div>
      <InvoicePDF/>
    </div>
  )
}

export default PdfView
