import React from "react";
import ImageComponent from "../shared/ImageComponent";
import { getDataBySectionName } from "../../services/dataService";

const DataArr = getDataBySectionName("roadmap");

const Roadmap = () => {
  return (
    <div className=" text-textDescription lg:px-60 px-6 py-20" id="roadmap">
      <h2 className=" text-textTitle text-[40px] font-bold">Road<span className="font-normal">map</span></h2>
      <div className="w-full relative flex justify-center">
      <ImageComponent src={"/assets/roadmap/roadmap.png"} className="mt-16"/>
      <h2 className="text-primary text-[50px] font-bold absolute bottom-12 ">2022-<span className="font-normal">2023</span></h2>
    
      {DataArr.map((e, i) => {
          return (
            <div key={i} className={`${e.textPosition} absolute w-[180px] `} >
            <p className='text-[12px] text-textDescription text-opacity-70'>{e.text}</p>
            </div>
          );
        })}
        </div>
    
    </div>
  );
};

export default Roadmap;
