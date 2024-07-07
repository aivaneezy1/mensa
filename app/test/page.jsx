import React from 'react'
import BlueDakiModel from '../components/CardModels/BlueDaki'
import CardMarilyn from '../components/CardDisplay/CardMarilyn'
const page = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-1/2 bg-blue-500 flex flex-col'>
        test
      </div>

      <div className='w-1/2'>
        <CardMarilyn/>
         </div>
    </div>
  )
}

export default page
