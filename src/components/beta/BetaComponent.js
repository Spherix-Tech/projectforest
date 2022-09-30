import React from 'react';
import Hero from './hero/Hero';
import Benefits from './benefits/benefits';
import ClaimBeta from './claim-beta/ClaimBeta';
import ImageComponent from '../shared/ImageComponent';
import Timeline from './timeline/Timeline';
import GetStarted from './get-started/GetStarted';

function BetaComponent() {
  return (
    <div className='w-full relative'>
      <Hero />
      <div className='bg-[#f3f1cb] w-full section-spacing'>
        {/* <GetStarted /> */}
        <Timeline />
        {/* <ClaimBeta /> */}
        <Benefits />
      </div>
      <ImageComponent
        src={'/assets/beta/claim/left-tree.webp'}
        className='absolute left-0 2xl:bottom-[1000px] bottom-[1250px] h-[400px] z-50 lg:block hidden'
      />
      <ImageComponent
        src={'/assets/beta/claim/right-tree.webp'}
        className='absolute right-0 2xl:bottom-[1000px] bottom-[1250px] h-[400px] z-50 hidden lg:block'
      />

    </div>
  );
}

export default BetaComponent;
