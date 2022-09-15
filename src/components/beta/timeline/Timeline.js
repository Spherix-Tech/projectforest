import React from 'react';
import ImageComponent from '../../shared/ImageComponent';

const Timeline = () => {
  return (
    <div className='py-10 text-center flex flex-col items-center gap-5 relative  w-full'>
      <h2 className='text-xl md:text-4xl font-semibold text-labelTextColor'>
        Project Forest Launch Timeline
      </h2>
      <p className='md:w-1/2 w-full text-labelTextColor text-opacity-80 md:text-lg text-base '>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry’s standard dummy
      </p>
    </div>
  );
};

export default Timeline;