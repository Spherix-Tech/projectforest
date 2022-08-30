import React from "react";
import ImageComponent from './ImageComponent';
//status can be SUCCESS /  FAILED and title, image etc will be changed accordingly
const StatusCard = ({ success }) => {
  return (
    <div className='md:min-h-[400px] w-[100%]'>
      <div className='bg-white bg-opacity-60 flex flex-col items-center rounded-xl md:h-[300px] '>
        <div className='flex flex-col justify-center w-full h-full items-center gap-2 pt-4'>
          {success ? (
            <ImageComponent
              src='/assets/wallet/confirm-icon.svg'
              className='h-10 mb-3'
              alt='confirm icon'
            />
          ) : (
            <ImageComponent
              src='/assets/wallet/fail-icon.svg'
              className='h-10 mb-3'
              alt='fail icon'
            />
          )}
          {success ? (
            <p className='md:text-lg pb-8 md:pb-0'>Registration Successfully</p>
          ) : (
            <p className='md:text-lg pb-8 md:pb-0'>Registration Failed</p>
          )}
        </div>
      </div>
    </div>
  );
};


export default StatusCard;
