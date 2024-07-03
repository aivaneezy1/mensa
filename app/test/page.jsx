import React from 'react'
import BlueDakiModel from '../components/CardModels/BlueDaki'

const page = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-1/2 bg-blue-500 flex flex-col'>
        test
      </div>

      <div className='w-1/2'>
        <BlueDakiModel/>
      </div>
    </div>
  )
}

export default page
