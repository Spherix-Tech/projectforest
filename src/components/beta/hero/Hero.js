import React from 'react';
import ImageComponent from '../../shared/ImageComponent';
import { DISCORD_LINK } from '../../../utilities/constants';
import Link from "next/link";

const Hero = () => {
  return (
    <div className='relative max-h-[100vh] overflow-hidden flex flex-col gap-4 md:gap-7 items-center text-center px-8'>
      <div className='pointer-events-none absolute top-0 bottom-0 w-full h-full custom-gradient z-100' />
      <h4 className=' text-2xl md:text-6xl text-[#3A3A3C] font-bold'>
        Your Journey Starts Here!
      </h4>
      <p className=' text-primaryBlue text-base md:text-xl  '>
        Project Forest’s closed beta will be launching shortly.<br></br>
        Be the first one to experience Grow-to-Earn and earn free NFTs.
      </p>
      <div className='flex flex-row pt-1 gap-4'>
        <Link href="/signup"> 
        <button className='btnPrimary cursor-pointer lg:w-56 w-40 mr-0'>
          <p>Register</p>
        </button>
        </Link>
        <a
          href={DISCORD_LINK}
          target='_blank'
          className='cursor-pointer'
          rel='noreferrer'
        >
          <a href='#claim'>
          <button className='cursor-pointer btnSecondary  lg:w-56 w-40 mr-0'>
            Learn More
          </button>
          </a>
        </a>
      </div>
      <div className='flex justify-center'>
        <ImageComponent src={'/assets/gameplay-new.png'} className='lg:w-[50%] w-full' />
      </div>
      <ImageComponent
        src={'/assets/beta/hero/left-tree.png'}
        className='absolute left-0 top-24 h-[700px] z-50 lg:block hidden'
      />
      <ImageComponent
        src={'/assets/beta/hero/right-tree.png'}
        className='absolute right-0 top-24 h-[700px] z-50 hidden lg:block'
      />
    </div>
  );
};

export default Hero;

