import React from 'react'
import Image from 'next/image'
const page = () => {
   return (
    <div className='grid md:grid-cols-[2fr_3fr] p-10 h-screen'>


    {/*LEFT SIDE DIV */}
    <div className='bg-blueDaki gap-5 flex flex-col justify-center items-center'>

    <div className='border border-orange-400 p-2 mt-5'>
    <Image src="/randon.jpg" alt="pic" width={150} height={150}/>
    </div>

    {/*Personal Data */}
    <div className=''>
    <div> <h2 className='text-4xl '>Personal Dati</h2></div>
    <div className='mt-5 flex gap-2 flex-col justify-start'>
    <p className='font-medium'>Aivaneezy Enguio</p>
    <p className='font-medium'>aivaneezy@gmail.com</p>
    <p className='font-medium'>324621299</p>
    <p className='font-medium'>25-06-199</p>
    <p className='font-medium'>Spain</p>
    <p className='font-medium'>Los Pollos Hermanos</p>
    <p className='font-medium'>Male</p>
    <p className='font-medium'>African</p>
    <p className='font-medium'>Single</p>
    <p className='font-medium'>A2 A3</p>
    <p className='font-medium'>https://daki123.com</p>
    <p className='font-medium'>aivaneezy@gmail.com</p>
    </div>
    </div>
    
     <hr className='border border-b border-orange-500 w-1/2 my-4'/>

    {/*Competence */}
    <div className='flex flex-col justify-start  items-center'>
    <h2 className='text-4xl mb-3'>Compotenza</h2>
     <p className='font-medium'>Tirocinante</p>
    <p className='text-gray-500'>Eccelente</p>
    </div>

     <hr className='border border-b border-orange-500 w-1/2 my-4'/>
     {/*Competence */}
    <div  className='flex flex-col  justify-start items-center'>
    <h2 className='text-4xl mb-3'>Lingue</h2>
    <p className='font-medium'>Tirocinante</p>
    <p className='text-gray-500'>Eccelente</p>
    </div>


     <hr className='border border-b border-orange-500 w-1/2 my-4'/>
     {/*Competence */}
    <div  className='flex flex-col  justify-start items-center'>
    <h2 className='text-4xl mb-3'>Lingue</h2>
    <p className='font-medium'>Tirocinante</p>
    <p className='text-gray-500'>Eccelente</p>
    </div>


   

    </div>

    {/*RIGHT DIV */}
    <div className='ml-10 flex flex-col mt-10'>

    {/*Name */}
    <div className='mb-2'>
    <h2 className='text-5xl'>Aivan Jim</h2>
    <h2 className='text-5xl text-gray-500 mt-2'>Enguio</h2>
    </div>
     <hr className='border border-b border-orange-500 w-1/2 my-4'/>

    {/*Profile */}
    <div className='mb-2' >
    <h2 className='text-4xl mb-3'>Profile</h2>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </p>
    </div>
   <hr className='border border-b border-orange-500 w-1/2 my-4'/>


    {/*Istruzione */}
    <div className='mb-2'>
    <h2 className='text-4xl mb-3'>Istruzione</h2>
    <p className='font-bold'>Bachelors of Science in Nursing</p>
    <p className='text-blue-500 font-semibold'>2023 Gen- 2012 Nov</p>
    <p className='text-gray-500 font-semibold'>Universita di Pisa | Pisa</p>
  
    <p className='mt-2'>Relevant coursework: Anatomy and physiology, pharmacology, nursing ethics, and patient care management. </p>
    </div>

      <hr className='border border-b border-orange-500 w-1/2 my-4'/>
 
    {/*Experience */}
    <div className='mb-2'>
    <h2 className='text-4xl mb-3'>Experience</h2>
    <p className='font-bold'>Bachelors of Science in Nursing</p>
    <p className='text-blue-500 font-semibold'>2023 Gen- 2012 Nov</p>
    <p className='text-gray-500 font-semibold'>Universita di Pisa | Pisa</p>
  
    <p className='mt-2'>Relevant coursework: Anatomy and physiology, pharmacology, nursing ethics, and patient care management. </p>
    </div>





    </div>
      
    </div>
  )
}

export default page
