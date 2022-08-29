import React from 'react';
import ImageComponent from '../../shared/ImageComponent';

function WalletConnectionStatus({ value, status }) {
  return (
    <div className='md:min-h-[400px] w-[100%]'>
      <div className='font-semibold text-[18px] lg:text-[24px] text-center pb-5'>
        Connect Wallet
      </div>
      <div className='bg-white bg-opacity-60 flex flex-col items-center rounded-xl md:h-[300px] '>
        <div className='py-8 flex flex-col justify-center gap-2'>
          <ImageComponent
            src={`/assets/wallet/${value.icon}`}
            className=' h-14 md:h-16'
            alt='wallet'
          />
          <p>{value.name}</p>
        </div>
        <div className=' flex flex-col justify-center gap-2'>
          {status ? (
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
          {status ? (
            <p className='md:text-lg pb-8 md:pb-0'>Connected Successfully</p>
          ) : (
            <p className='md:text-lg pb-8 md:pb-0'>Connection Failed</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WalletConnectionStatus;