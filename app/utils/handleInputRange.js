import React from 'react'

export const handleInputRange = (value) => {
    
  switch (value) {
      case 1:
        return "Principiante";
      case 2:
        return "Elementare";
      case 3:
        return "Buono";
      case 4:
        return "Eccellente";
      case 5:
        return "Fluente";
      default:
        return "Choose";
    }
}

export default handleInputRange
