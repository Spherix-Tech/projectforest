import Link from "next/link";
import React from "react";
import { getDataBySectionName } from "../../services/dataService";
import ImageComponent from "../shared/ImageComponent";

const DataArr = getDataBySectionName("reforestation");

const Reforestation = () => {
  return (
    <div className=" text-textTitle section-spacing panel">
      <div className="flex flex-col section-title-spacing justify-start items-start">
        <div className="section-title">Reforestation</div>
        <div className="section-sub-title">Need of the Hour</div>
      </div>
      <div className="flex w-full lg:flex-row flex-col justify-between items-center lg:items-start">
        {DataArr.map((e, i) => {
          return (
            <div
              key={i}
              className={
                "flex flex-1 relative flex-col w-full sm:max-w-[650px] h-[15rem] lg:h-[20rem] xl:h-[22rem] 2xl:h-[26rem] gap-1 md:gap-2 lg:mb-0 mb-4 items-center bg-white p-4 pb-6 md:p-8 lg:p-4 " +
                (i == DataArr.length ? "lg:mr-0" : "lg:mr-4")
              }
            >
              <div className="w-full">
                <ImageComponent src={e.image} className="w-full" />
              </div>
              <div className="text-black font-bold text-[15px] text-start pt-2 w-full md:text-[17px]">
                {e.headingText}
              </div>
              <div className="text-[#666666] w-full text-start font-light text-[13px] text-opacity-70">
                {e.text}
              </div>
              <a href={e.learnMoreLink}  target="_blank" rel="noreferrer">
                <div className="cursor-pointer inline-flex absolute flex-row justify-end bottom-[3%] 2xl:bottom-[2%] right-[3.5%] w-full items-center gap-2 text-xs text-end underline text-[#8DABFD]">
                  <div>Learn more</div>
                  <div>
                    <ImageComponent
                      src="/assets/learn-more-icon.png"
                      alt="Learn More"
                      className="w-[13px]"
                    />
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reforestation;
