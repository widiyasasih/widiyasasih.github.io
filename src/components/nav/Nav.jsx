import React from 'react';
import './nav.css';
import { TbSmartHome } from 'react-icons/tb';
import { SiAboutdotme } from 'react-icons/si';
import { RiServiceLine } from 'react-icons/ri';
import { BiNetworkChart } from 'react-icons/bi';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const Nav = () => {
  return (
    <div className='nav__container'>
      <nav className='nav'>
        <li className='menus'>
          <ol>
            <a href='#home'>
              <TbSmartHome />
            </a>
          </ol>
          <ol>
            <a href='#about'>
              <SiAboutdotme />
            </a>
          </ol>
          <ol>
            <a href='#work'>
              <RiServiceLine />
            </a>
          </ol>
          <ol>
            <a href='#network'>
              <BiNetworkChart />
            </a>
          </ol>
          <ol>
            <a href='#download' download>
              <AiOutlineCloudDownload />
            </a>
          </ol>
        </li>
      </nav>
      {/* <h2 className='title hidden'>/ Carrot Project</h2> */}
      {/* <h2 className='title'>/ Branding </h2> */}
    </div>
  );
};

export default Nav;
