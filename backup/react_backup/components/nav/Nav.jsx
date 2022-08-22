import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';
import { TbSmartHome } from 'react-icons/tb';
import { SiAboutdotme } from 'react-icons/si';
import { RiServiceLine } from 'react-icons/ri';
import { BiNetworkChart } from 'react-icons/bi';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const test = () => {
  const useLocationPath = 'Hai';
  console.log(useLocationPath);
};

const Nav = () => {
  const [activeNav, setActiveNav] = useState('');

  const getLocation = (r) => (activeNav === r ? 'active' : '');

  // const checkLocation = () => if ((location.pathname === TRUE) && (activeNav === location.pathname)) {

  // }
  // const test = () => {
  //   const location = useLocation();
  //   console.log(location);
  // };

  // this.props.location.pathname;
  test();

  return (
    <div className='nav__container'>
      <nav className='nav'>
        <Link
          to='/'
          onClick={() => setActiveNav('')}
          className={getLocation('')}
        >
          <TbSmartHome />
        </Link>
        <Link
          to='/about'
          onClick={() => setActiveNav('about')}
          className={getLocation('about')}
        >
          <SiAboutdotme />
        </Link>
        <Link
          to='/skillset'
          onClick={() => setActiveNav('skillset')}
          className={getLocation('skillset')}
        >
          <RiServiceLine />
        </Link>
        <Link
          to='/network'
          onClick={() => setActiveNav('network')}
          className={getLocation('network')}
        >
          <BiNetworkChart />
        </Link>
        <Link
          to='/cv'
          onClick={() => setActiveNav('cv')}
          className={getLocation('cv')}
        >
          <AiOutlineCloudDownload />
        </Link>
      </nav>
      {/* <h2 className='title hidden'>/ Carrot Project</h2> */}
      {/* <h2 className='title'>/ Branding </h2> */}
    </div>
  );
};

export default Nav;
