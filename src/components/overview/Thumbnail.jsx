import React from 'react';
import { AiOutlineSwapLeft } from 'react-icons/ai';
import images from '../asset/Asset';

const Thumbnail = () => {
  return (
    <>
      <div className='thumbnail__container'>
        <div className='title-wrapper'>
          <div className='title'>
            <h5 className='title-cat'>Epic</h5>
            <h1 className='title-name'>Portfolio</h1>
          </div>
        </div>
        <div className='thumbnail-wrapper'>
          <div className='nav-back hidden'>
            <a href='_blank' className='btn-back'>
              <AiOutlineSwapLeft className='icon' size={24} />
              Back
            </a>
          </div>
          <div className='thumbnail'>
            <img src={images[`scribble.jpg`]} alt='Scribble' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Thumbnail;
