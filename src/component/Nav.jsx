import React, { useState } from 'react'
import image1 from '../assets/images-removebg-preview.png'
import { FaSearch, FaUserCircle } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { FiMenu } from 'react-icons/fi'
import CarouselPage from './CarouselPage'
const Nav = () => {
  const [hide, setHide] = useState(false)
  const HandleSubmit = () => {
    setHide(!hide)
    console.log(hide);
  }
  return (
<div className='bg-slate-50  shadow-lg  border-2 py-5'>
<div className='flex px-9 justify-between items-center
    '>
      <div className='hidden md:block'>
        <img src={image1} className="w-44" />
      </div>
      <div>
        <div onClick={HandleSubmit}>
          <div className="mysearch border-2 rounded-full flex items-center py-3 px-4 shadow-lg">
            <button className="anywhere">Anywhere</button>
            <button className="anyweek">Any week</button>
            <button className="addguest">Add guests</button>
            <div className="search-case bg-red-500 rounded-full p-3">
              < FaSearch className='bg-red-500  text-white rounded-full ' />
            </div>
          </div>
        </div>

      </div>
    
      <div className="switch-to-hosting flex gap-3 items-center">
        <h3>Switch to hosting</h3>
        <TbWorld size={25} />
        <div className='flex p-2 items-center rounded-full gap-2 bg-slate-200'>
          <FiMenu size={25} />
          <FaUserCircle size={25} />
        </div>
      </div>
      
    </div>
    <div className='flex justify-center'>
                <CarouselPage />

    </div>
</div>
  )
}

export default Nav
