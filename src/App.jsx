import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Overview from './components/overview/Overview';
import Nav from './components/nav/Nav';
import Content from './components/content/Content';
import images from '../src/components/asset/Asset';
import { CgMenuRight } from 'react-icons/cg';
import { links } from './data';

const App = () => {
  const menu = document.querySelector('.nav-links');
  const openNavMenu = document.querySelector('#open-nav-btn');
  const closeNavMenu = document.querySelector('');

  return (
    <>
      <section className='float-top-bar'>
        <div className='logo'>
          <Link to='/'>
            <img src={images[`logo-ws.svg`]} alt='Logo' />
          </Link>
        </div>
        <div className='top-bar-btn'>
          <a id='open-nav-btn' href='#home' onclick={openTopNav}>
            <CgMenuRight size={24} />
          </a>
        </div>
        <ul className='nav-links'>
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
      </section>
      <Nav />
      <Overview />
      <Content />
    </>
  );
};

export default App;
