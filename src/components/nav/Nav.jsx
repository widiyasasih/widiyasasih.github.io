import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './nav.css';
import { TbSmartHome } from 'react-icons/tb';
import { SiAboutdotme } from 'react-icons/si';
import { RiServiceLine } from 'react-icons/ri';
import { BiNetworkChart } from 'react-icons/bi';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('');

  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  return (
    <div className='nav__container'>
      <nav className='nav'>
        <Link
          to='/'
          onClick={() => setActiveNav('')}
          className={activeNav === '' ? 'active' : ''}
        >
          <TbSmartHome />
        </Link>
        <Link
          to='/about'
          onClick={() => setActiveNav('about')}
          className={activeNav === 'about' ? 'active' : ''}
        >
          <SiAboutdotme />
        </Link>
        <Link
          to='/skillset'
          onClick={() => setActiveNav('skillset')}
          className={activeNav === 'skillset' ? 'active' : ''}
        >
          <RiServiceLine />
        </Link>
        <Link
          to='/network'
          onClick={() => setActiveNav('network')}
          className={activeNav === 'network' ? 'active' : ''}
        >
          <BiNetworkChart />
        </Link>
        <Link
          to='/cv'
          onClick={() => setActiveNav('cv')}
          className={activeNav === 'cv' ? 'active' : ''}
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
