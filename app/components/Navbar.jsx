import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-start items-center bg-primary gap-5 p-2  shadow-md ' >
    
        <div className='mr-auto'>
         <h2 className='text-white text-2xl font-bold'>Logo</h2>
        </div>


        <div className='ml-auto'>
      <Link href="/sign">
      <h2 className='text-white font-semibold'>Log in</h2>
   
      </Link>
         </div>

      <div className=''>
      <Link href="create-cv">
      <button className='rounded-xl px-10 py-2 bg-green-500 font-semibold hover:bg-green-700 hover:text-white'>Create CV</button>
     
      </Link>
       </div>
    </div>
  )
}

export default Navbar
