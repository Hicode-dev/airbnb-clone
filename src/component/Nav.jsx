import React, { useState } from 'react'
import image1 from '../assets/images-removebg-preview.png'
import { FaSearch, FaUserCircle } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { FiMenu } from 'react-icons/fi'
import CarouselPage from './CarouselPage'
import Tabs from './Tabs'
import TabsSlider from './TabsSlider'
const Nav = ({hide,setHide}) => {
  const HandleSubmit = (e) => {
    e.stopPropagation();
    setHide(!hide)
    console.log(hide);
  }
  return (
<div className='bg-slate-50  shadow-lg  border-2 py-3'>
<div className='flex px-9 justify-between 
    '>
      <div className='hidden md:block'>
        <img src={image1} className="w-44" />
      </div>
      <div>
        <div onClick={(e)=>setHide(false)} >
     {
      !hide?
      <div className="mysearch border-2  justify-between rounded-full flex items-center py-3 px-4 shadow-lg" onClick= {HandleSubmit}>
      <button className="anywhere">Anywhere</button>
      <button className="anyweek">Any week</button>
      <button className="addguest">Add guests</button>
      <div className="search-case bg-red-500 rounded-full flex items-center justify-center  p-3">
        < FaSearch className='bg-red-500  text-white rounded-full ' />
      </div>
  
    </div> : <Tabs />
     }
        </div>

      </div>
    
      <div className="switch-to-hosting flex items-center gap-3">
        <h3>Switch to hosting</h3>
        <TbWorld size={25} />
        <div className='flex p-2 items-center rounded-full gap-2 bg-slate-200'>
          <FiMenu size={25} />
          <FaUserCircle size={25} />
        </div>
      </div>
      
    </div >
</div>
  )
}

export default Nav
