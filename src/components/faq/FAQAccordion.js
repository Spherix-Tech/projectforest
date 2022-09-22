import React, { useState } from 'react';
import ImageComponent from '../shared/ImageComponent';

const FAQAccordion = ({
  question,
  answer,
  answer1,
  answer2,
  answer3,
  answer4,
  answer5,
  id,
  selectedItem,
  setSelectedItem,
}) => {
  const isActive = id === selectedItem;

  return (
    <div className='pt-2 w-full border-b-[1px] border-dashed border-b-[#666] border-opacity-50'>
      <div
        className={
          'flex flex-row w-full cursor-pointer justify-between bg-opacity-40 p-4 pl-0'
        }
        onClick={() => setSelectedItem(id)}
      >
        <div className='flex flex-row gap-3 items-center'>
          <ImageComponent
            src='/assets/dot-icon.png'
            alt='Project Forest'
            className='h-2'
          />

          <h2 className=' text-[15px] lg:text-[18px] text-textTitle font-medium'>
            {question}
          </h2>
        </div>
        <p className=' text-textTitle text-[25px]'>{isActive ? '-' : '+'}</p>
      </div>
      {isActive && (
        <div className=' flex flex-row justify-between py-4'>
          <div className=' pl-4 pr-8 lg:text-sm text-xs text-textTitle'>
           <p>{answer}</p>
           <p>{answer1}</p>
           <p>{answer2}</p>
           <p>{answer3}</p>
           <p>{answer4}</p>
           <p>{answer5}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;