"use client"
import React, { useState } from 'react'
import handleButton from '@/app/utils/handleButton'
import { RichTextEditor } from '../Editor'

const Profile = () => {
   const [showProfile, setShowProfile] = useState(false);
   const [content, setContent] = useState("");
   const [data,setData] = useState("")

   

   return (
    <>
      {handleButton(showProfile, setShowProfile, "Profile")}
      {showProfile && (
        <>
          <div className="flex flex-col break-words w-full max-w-sm sm:max-w-lg  mb-10">   
          <h2 className='font-semibold'>Formazione</h2>
          <input
          type="text"
          name="data"
          placeholder='Formazione'
          value={data}
          onChange={(ev) => setData(ev.target.value)}
          className='mb-2 p-2 border'/>
            
            <RichTextEditor content={content} setContent={setContent}/>
         
          </div>
        </>
      )}
    </>
  )
}

export default Profile
