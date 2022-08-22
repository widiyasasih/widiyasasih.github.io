import React from 'react';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TbSmartHome } from 'react-icons/tb';
import { SiAboutdotme } from 'react-icons/si';
import { RiServiceLine } from 'react-icons/ri';
import { BiNetworkChart } from 'react-icons/bi';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import './nav.css';

const Nav = () => {
  // const [activeNav, setActiveNav] = useState('');

  // const getLocation = (r) => (activeNav === r ? 'active' : '');

  return (
    <div className='nav__container'>
      <nav className='nav'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <TbSmartHome />
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <SiAboutdotme />
        </NavLink>
        <NavLink
          to='/experience'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <RiServiceLine />
        </NavLink>
        <NavLink
          to='/network'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <BiNetworkChart />
        </NavLink>
        <NavLink
          to='/cv'
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <AiOutlineCloudDownload />
        </NavLink>
      </nav>
      {/* <h2 className='title hidden'>/ Carrot Project</h2> */}
      {/* <h2 className='title'>/ Branding </h2> */}
    </div>
  );
};

export default Nav;
