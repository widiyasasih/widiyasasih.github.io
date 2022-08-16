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
          <div className='title-wrapper'>
            <div className='title'>
              <h5 className='title-cat'>Most Epic</h5>
              <h1 className='title-name'>Portfolio</h1>
            </div>
          </div>
        </div>
        <Thumbnail />
      </header>
      <More />
    </div>
  );
};

export default Overview;
