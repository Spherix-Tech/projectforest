import React from "react";
import ImageComponent from "../shared/ImageComponent";
import { getDataBySectionName } from "../../services/dataService";

const DataArr = getDataBySectionName("roadmap");

const Roadmap = () => {
  return (
    <div className=" text-textDescription py-10 bg-[#F2F2F2]" id="roadmap">
      <h3 className=" text-textTitle text-[40px] font-bold lg:px-60 px-6">Roadmap</h3>
      <div className="w-full relative flex justify-center">
      <ImageComponent src={"/assets/roadmap/roadmap-1.png"} className="mt-16 mb-5"/>
    
      {/* {DataArr.map((e, i) => {
          return (
            <div key={i} className={`${e.textPosition} absolute w-[180px] `} >
            <p className='text-[12px] text-textDescription text-opacity-70'>{e.text}</p>
            </div>
          );
        })} */}
        </div>
    
    </div>
  );
};

export default Roadmap;
