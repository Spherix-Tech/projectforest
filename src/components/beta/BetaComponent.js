import React from 'react';
import Hero from './hero/Hero';
import Benefits from './benefits/benefits';
import Timeline from './timeline/Timeline';
import ImageComponent from '../shared/ImageComponent';

function BetaComponent() {
  return (
    <div className='w-full relative'>
      <Hero />
      <div className='bg-[#f3f1cb] w-full section-spacing'>
        <Benefits />
        <Timeline />
      </div>
      <ImageComponent
        src={'/assets/beta/timeline/left-tree.png'}
        className='absolute left-0 bottom-16 h-[400px] z-50 lg:block md:hidden xs:hidden sm:hidden'
      />
      <ImageComponent
        src={'/assets/beta/timeline/right-tree.png'}
        className='absolute right-0 bottom-16 h-[400px] z-50 md:hidden xs:hidden sm:hidden lg:block'
      />
    </div>
  );
}

export default BetaComponent;
