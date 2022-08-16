import React from 'react';
import Thumbnail from './Thumbnail';
import More from './More';
import './overview.css';
import images from '../asset/Asset';

const Overview = () => {
  return (
    <div className='overview__container'>
      <header>
        <div className='left-header'>
          <div className='logo'>
            <img src={images[`logo-ws.svg`]} alt='Logo' />
          </div>
        </div>
        <Thumbnail />
      </header>
      <More />
    </div>
  );
};

export default Overview;
