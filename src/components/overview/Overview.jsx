import React from 'react';
import { Link } from 'react-router-dom';
import Thumbnail from './Thumbnail';
import Footer from './Footer';
import './overview.css';
import images from '../asset/Asset';

const Overview = () => {
  return (
    <div className='overview__container'>
      <header>
        <div className='left-header'>
          <div className='logo'>
            <Link to='/'>
              <img src={images[`logo-ws.svg`]} alt='Logo' />
            </Link>
          </div>
        </div>
        <Thumbnail />
      </header>
      <Footer />
    </div>
  );
};

export default Overview;
