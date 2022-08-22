import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './content.css';
import Skillset from './Skillset';
import Network from './Network';
import CV from './CV';

const Content = () => {
  return (
    <div className='container content__container'>
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skillset' element={<Skillset />} />
          <Route path='/network' element={<Network />} />
          <Route path='/cv' element={<CV />} />
        </Routes>
      </div>
    </div>
  );
};

export default Content;
