import React from 'react';
import Hero from './hero/Hero';
import Benefits from './benefits/benefits';
import ClaimBeta from './claim-beta/ClaimBeta';
import ImageComponent from '../shared/ImageComponent';

function BetaComponent() {
  return (
    <div className='w-full relative'>
      <Hero />
      <div className='bg-[#f3f1cb] w-full section-spacing'>
      
        <ClaimBeta />
        <Benefits />
      </div>
      <ImageComponent
        src={'/assets/beta/claim/left-tree.png'}
        className='absolute left-0 bottom-[700px] h-[400px] z-50 lg:block hidden'
      />
      <ImageComponent
        src={'/assets/beta/claim/right-tree.png'}
        className='absolute right-0 bottom-[700px] h-[400px] z-50 hidden lg:block'
      />
       {/* <ImageComponent
        src={'/assets/beta/claim/claim-bg.png'}
        className='absolute left-9 bottom-[350px] h-[800px] z-50 hidden lg:block w-full'
      /> */}

    </div>
  );
}

export default BetaComponent;
