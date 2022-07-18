import React from 'react'
import { getDataBySectionName } from "../../services/dataService";

const DataArr = getDataBySectionName("reforestation");

const Reforestation = () => {
  return (
    <div className=' text-textTitle bg-[#F0F0F0] lg:py-16 py-10 lg:px-60 px-6 panel'>
       <h3 className='lg:text-[40px] text-[30px] font-bold flex lg:justify-center justify-start pb-10 '>Reforestation: <br className='lg:hidden'></br>Need of the Hour</h3>
       <div className='flex w-full lg:flex-row flex-col  justify-center items-center lg:items-start'>
       {DataArr.map((e, i) => {
          return (
            <div key={i} className="flex flex-col w-[400px] h-[360px]  lg:mx-4 lg:mb-0 mb-4 items-center bg-white p-4">
            <img src={e.image} className=""  />
            <p className=' pt-4 text-center text-[#666] text-opacity-70 lg:text-[16px] text-sm'>{e.text}</p>
            </div>
          );
        })}
       </div>
        
        </div>
  )
}

export default Reforestation