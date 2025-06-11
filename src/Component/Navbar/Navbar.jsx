import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


export default function Navbar() {
 

    const [Counter,SetCounter]=useState(0);

    useEffect(()=>{

    } , [])

    

  return <>
     <h1 className='text-4xl font-bold  bg-gradient-to-r from-[#F29724]  via-[#ca1023c4] to-[#c90519]  bg-clip-text text-transparent '>Learn, Cook, Eat Your Food</h1>
     <ul className="flex flex-wrap  mt-8 font-medium">
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/'}>All</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/BreakFast'}>BreakFast</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/Chicken'}>Chicken</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/Dessert'}>Dessert</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/Goat'}>Goat</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/Lamb'}>Lamb</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/Miscellaneous'}>Miscellaneous</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/Pasta'}>Pasta</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/Pork'}>Pork</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/Seafood'}>Seafood</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/Side'}>Side</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/Starter'}>Starter</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/Vegan'}>Vegan</NavLink> </li>
      <li className="me-6 mb-4"><NavLink className="px-4 text-gray-500 py-2 border  border-gray-400 hover:shadow-xl shadow inline-block rounded-full hover:bg-gray-50 transition-all duration-300 hover:text-gray-600" to={'/Home/Vegetarian'}>Vegetarian</NavLink> </li>
     </ul>

  </>
}

