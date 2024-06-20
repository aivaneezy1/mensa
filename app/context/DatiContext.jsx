"use client"
import React, { createContext, useState } from "react";

export const DatiContext = createContext({});

const DatiContextProvider = ({ children }) => {
    const [name, setName] = useState("");
    
    return(
    
        <DatiContext.Provider
        value={{
            name,
            setName
        }}>
        {children}
        
        </DatiContext.Provider>
   
    )
};

export default DatiContextProvider;
