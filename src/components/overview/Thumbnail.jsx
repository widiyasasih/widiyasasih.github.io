import React from 'react';
import { AiOutlineSwapLeft } from 'react-icons/ai';

const Thumbnail = () => {
  return (
    <>
      <div className='container__thumbnail'>
        <div className='nav-back hidden'>
          <a href='_blank'>
            <AiOutlineSwapLeft size={70} />
          </a>
        </div>
        <div className='thumbnail'>{/* <img src='' alt='Thumbnail' /> */}</div>
      </div>
    </>
  );
};

export default Thumbnail;
