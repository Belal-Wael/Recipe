import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo-BfNap0Pe.png'

export default function Asidebar({isOpen}) {
 

    const [Counter,SetCounter]=useState(0);

    useEffect(()=>{

    } , [])
    
  return <>
     
     <div className={` fixed top-0 left-0 bottom-0 z-50 w-64 h-screen px-5 bg-white   flex-col items-center py-5  transition-transform duration-300 md:translate-x-0 ${isOpen ? '-translate-x-full' : 'flex'} md:flex`} >
        <img src={logo} alt="" width={250} />
        <ul className='py-4 text-black w-full'>
          <li className='py-2 px-7 bg-[#f29724]  hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all mb-6 rounded-xl text-lg shadow-lg shadow-orange-300 font-semibold text-white'>Meals</li>
          <li className='py-2 px-7  text-lg mb-6 border border-1 rounded-xl border-gray-400 shadow-lg'>Ingredients</li>
          <li className='py-2 px-7  text-lg mb-6 border border-1 rounded-xl border-gray-400 shadow-lg'>Area</li>
        </ul>
     </div>
  </>
}


