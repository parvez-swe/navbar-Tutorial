import React from 'react';
import {MdMenu,MdClose} from 'react-icons/md';
import { useState } from 'react';
export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const NavToggleHandler =()=>{
    setShowNav(!showNav);
  }
  return (
    <div className="Navbar bg-red-500 flex flex-row justify-between h-16 items-center pl-2">
      <h1 className='text-xl font-bold  text-white uppercase'>My portfolio</h1>
      <div className='text-white' >
        <ul className={`${!showNav?'-translate-x-[100%]':'translate-x-0'} md:translate-x-0 flex flex-col md:flex-row absolute md:relative top-16 md:top-0 w-[100%] justify-center2 md:justify-between items-center left-0 bg-black md:bg-inherit`} >
          <li className="px-2 uppercase hover:text-slate-300 cursor-pointer">Home</li>
          <li className="px-2 uppercase hover:text-slate-300 cursor-pointer">Contact</li>
          <li className="px-2 uppercase hover:text-slate-300 cursor-pointer">About us</li>
          <li className="px-2 uppercase hover:text-slate-300 cursor-pointer">Blog</li>
        </ul>
        <div className='md:hidden'>
        {
         !showNav? <MdMenu onClick={NavToggleHandler} className='text-2xl cursor-pointer' />:
        <MdClose onClick={NavToggleHandler} className='text-2xl cursor-pointer'/>
        }
        </div>
      </div>
    </div>
  );
}
