import React from 'react';
import Overview from './components/overview/Overview';
import Nav from './components/nav/Nav';
import Content from './components/content/Content';
import images from '../src/components/asset/Asset';
import { CgMenuRight } from 'react-icons/cg';

const App = () => {
  return (
    <>
      <section className='float-top-bar'>
        <div className='logo'>
          <img src={images[`logo-ws.svg`]} alt='Logo' />
        </div>
        <div className='top-bar-menu'>
          <a href='_blank'>
            <CgMenuRight size={24} />
          </a>
        </div>
      </section>
      <Overview />
      <Nav />
      <Content />
    </>
  );
};

export default App;
