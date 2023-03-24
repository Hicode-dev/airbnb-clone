import React from 'react'
import image1 from '../assets/images-removebg-preview.png'
import { FaSearch, FaUserCircle } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'
import { addDays, format, isWeekend } from 'date-fns'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Nav = () => {
  const [search, setSearch] = useState('')
  console.log(search);
  const [state, setState] = useState({
    selection1: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection1'
    },
    selection2: {
      startDate: addDays(new Date(), 1),
      endDate: addDays(new Date(), 7),
      key: 'selection2'
    }
  });


  const customDayContent = (day) => {
    let extraDot = null;
    if (isWeekend(day)) {
      extraDot = (
        <div
          style={{
            height: "5px",
            width: "5px",
            borderRadius: "100%",
            background: "orange",
            position: "absolute",
            top: 2,
            right: 2,
          }}
        />
      );
    }
  }
  return (
    <div className='bg-slate-50 shadow-lg'>
      <div className='  flex px-9 items-center justify-between border-2  
    '> 




      <div className='hidden md:block'>
        <img src={image1} className="w-44" />
      </div>
      <div>
        <div className="search bg-slate-200 px-5 flex items-center gap-4 rounded-full ">
          <input type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)} className='bg-slate-200 border-none outline-none py-3 rounded-full w-[220px]' />
          <FaSearch />
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
    <DateRangePicker className='flex justify-center items-center'
        onChange={item => setState({ ...state, ...item })}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
    
        ranges={[state.selection1]}
        direction="horizontal"
        dayContentRenderer={customDayContent}
        ariaLabels={{
          dateInput: {
            selection1: { startDate: "start date input of selction 1", endDate: "end date input of selction 1" },
           
          },
          monthPicker: "month picker",
          yearPicker: "year picker",
          prevButton: "previous month button",
          nextButton: "next month button",
        }}
      />;
    </div>
  )
}



export default Nav
