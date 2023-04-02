import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {FiCoffee} from 'react-icons/fi'
import {GiCornerFlag,GiPalmTree,GiVikingLonghouse,GiFamilyHouse,GiSpookyHouse,GiIsland } from 'react-icons/gi'
import {IoKeySharp,IoFlameOutline} from 'react-icons/io5'
import {TbPool,TbChefHat} from 'react-icons/tb'
import {BsImageAlt} from 'react-icons/bs'
import {RiGhost2Fill} from 'react-icons/ri'
import {MdWarehouse} from 'react-icons/md'
import {HiOutlineHomeModern} from 'react-icons/hi2'
export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        <div className='my-4'>
                <Box sx={{ maxWidth: { xs: 500, sm: 1200 }, bgcolor: '' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        textColor='red'
      >
        <Tab label={< FiCoffee size={20}/> }   />
        <Tab label={<GiCornerFlag size={24}/>} />
        <Tab label={<IoKeySharp size={24} />} />
        <Tab label={<TbPool size={24} />} />
        <Tab label={<BsImageAlt />} />
        <Tab label={<GiPalmTree size={24} />} />
        <Tab label={<GiVikingLonghouse size={24}/>} />
        <Tab label={<GiSpookyHouse size={24} /> }  className="wqwqwq"/>
        <Tab label={<RiGhost2Fill size={24} />}/>
        <Tab label={<GiFamilyHouse size={24} />} />
        <Tab label={<TbChefHat size={24} />} />
        <Tab label={<MdWarehouse size={24} />} />
        <Tab label={<GiIsland size={24} />} />
        <Tab label={<HiOutlineHomeModern size={24} />}/>
        <Tab label={< IoFlameOutline size={24} />} />
        <Tab label={< FiCoffee size={20}/> }   />
        <Tab label={<GiCornerFlag size={24}/>} />
        <Tab label={<IoKeySharp size={24} />} />
        <Tab label={<TbPool size={24} />} />
        <Tab label={<BsImageAlt />} />
        <Tab label={<GiPalmTree size={24} />} />
        <Tab label={<GiVikingLonghouse size={24}/>} />
        <Tab label={<GiSpookyHouse size={24} /> }  className="wqwqwq"/>
        <Tab label={<RiGhost2Fill size={24} />}/>
        <Tab label={<GiFamilyHouse size={24} />} />
        <Tab label={<TbChefHat size={24} />} />
        <Tab label={<MdWarehouse size={24} />} />
        <Tab label={<GiIsland size={24} />} />
        <Tab label={<HiOutlineHomeModern size={24} />}/>
        <Tab label={< IoFlameOutline size={24} />} />
      
      </Tabs>
    </Box>
        </div>
  );
}
