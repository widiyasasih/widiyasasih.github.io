import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <div className='nav__container'>
      <nav className='nav'>
        <li className='menus'>
          <ol>
            <a href='_blank'>About</a>
          </ol>
          <ol>
            <a href='#about'>Services</a>
          </ol>
          <ol>
            <a href='#about'>Network</a>
          </ol>
        </li>
      </nav>
      <h2 className='title hidden'>/ Carrot Project</h2>
      {/* <h2 className='title'>/ Branding </h2> */}
    </div>
  );
};

export default Nav;
