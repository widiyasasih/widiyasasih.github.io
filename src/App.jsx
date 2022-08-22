import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { links } from './data';
import Overview from './components/overview/Overview';
import Nav from './components/nav/Nav';
import Content from './components/content/Content';
import images from '../src/components/asset/Asset';

const App = () => {
  const [isNavShowing, setNavShowing] = useState(false);

  return (
    <>
      <section className='float-top-bar'>
        <div className='logo'>
          <Link to='/'>
            <img src={images[`logo-ws.svg`]} alt='Logo' />
          </Link>
        </div>
        <div className='top-bar-btn'>
          <button onClick={() => setNavShowing(!isNavShowing)}>
            {isNavShowing ? <CgClose size={24} /> : <CgMenuRight size={24} />}
          </button>
        </div>
        <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
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
