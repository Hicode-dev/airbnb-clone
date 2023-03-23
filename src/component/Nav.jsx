import React from 'react'
import image1 from '../assets/images-removebg-preview.png'
import {FaSearch,FaUserCircle} from 'react-icons/fa'
import {TbWorld} from 'react-icons/tb'
import {FiMenu} from 'react-icons/fi'
const Nav = () => {
  return (
    <div className='bg-slate-50 flex px-9 justify-between border-2 items-center shadow-lg
    '>
      <div className='hidden md:block'>
        <img src={image1} className="w-44"   />
        </div>
          <div>
             <div className="search bg-slate-200 px-5 flex items-center gap-4 rounded-full border">
              <input type="text" className='bg-slate-200  outline-none py-3 rounded-full w-[220px] md:w-[400px]' />
              <FaSearch/>
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
  )
}

export default Nav
