import React from 'react';
import { Link } from 'react-router-dom';
import { CgMenuRight } from 'react-icons/cg';
import images from '../assets/Asset';
import SideNav from './SideNav';
import './navbar.css';

const NavBar = () => {
  return (
    <nav>
      <div className='container nav__container'>
        <div className='nav__top'>
          <Link to='/' className='logo'>
            <img src={images[`logo-ws.svg`]} alt='Logo' />
          </Link>
          <button className='nav__toggle-btn'>
            <CgMenuRight size={24} />
          </button>
        </div>
        <SideNav />
      </div>
    </nav>
  );
};

export default NavBar;
