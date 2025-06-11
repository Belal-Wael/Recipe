import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Asidebar from '../Asidebar/Asidebar';


export default function Layout() {
 

    const [Counter,SetCounter]=useState(0);

    useEffect(()=>{

    } , [])

   let [isOpen , setIsOpen]=useState(true);

  return <>
  <div className=" overflow-hidden md:ml-64 min-h-screen">
    <div className=''> 
     <Asidebar isOpen={isOpen}/>
      
    </div>
    
    <div className= 'p-4 overflow-hidden  min-h-screen bg-[#f4f2ee]' onClick={()=>{
  if (!isOpen) {
    setIsOpen(true);
  }
}}>
      <div className="container md:py-8 md:px-4 ">
           <button onClick={()=>setIsOpen(!isOpen)} type="button" className="md:hidden  inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 mb-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
           <span className="sr-only">Open main menu</span>
           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
           </svg>
         </button>
        <Outlet></Outlet>
      </div>
    </div>
    <Footer/>
  </div>

  </>
}
