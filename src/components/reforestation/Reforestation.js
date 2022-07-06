import Image from 'next/image';
import React from 'react'
import { getDataBySectionName } from "../../services/dataService";

const DataArr = getDataBySectionName("reforestation");

const Reforestation = () => {
  return (
    <div className=' text-textTitle bg-[#F0F0F0] py-16 lg:px-60 px-6 lg:px-60 px-6'>
       <h2 className='text-[40px] font-bold flex justify-center pb-10'>Reforestation: <span className='ml-2'>Need of the Hour</span></h2>
       <div className='flex w-full lg:flex-row flex-col  justify-center items-center lg:items-start'>
       {DataArr.map((e, i) => {
          return (
            <div key={i} className="flex flex-col w-[400px] h-[360px] lg:mx-4 lg:mb-0 mb-4 items-center bg-white p-4">
            <img src={e.image} className=""  />
            <p className=' pt-4 text-center text-[#666] text-opacity-70 text-base leading-5'>{e.text}</p>
            </div>
          );
        })}
       </div>
        
        </div>
  )
}

export default Reforestation