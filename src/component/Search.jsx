import React from 'react'
import {FaSearch}  from 'react-icons/fa'
const Search = () => {
  return (
    <div>
      <input type="text" className='bg-slate-200 outline-none border-none  py-3  rounded-full w-[220px] md:w-[400px]' />
            <FaSearch />
    </div>
  )
}

export default Search
