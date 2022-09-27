import React from "react";
import { getAllTimelineData } from "../../../services/data-files/TimelineData";
import ImageComponent from "../../shared/ImageComponent";

const timelineData = getAllTimelineData();

const Timeline = () => {
  return (
    <div className="flex  flex-col items-center text-center">
      <h2 className="text-xl md:text-4xl font-semibold text-labelTextColor -mb-4 md:-mb-2 pt-3 py-6 ">
        Launch Phase Timeline
      </h2>
      <p className="md:w-[60%] w-full text-labelTextColor text-opacity-80 md:text-lg text-sm ">
        We have accomplished most of our major development milestones, with the
        release date of Project Forest just around the corner. Currently, the
        devs are busy perfecting the Project Forest application, making sure
        every sapling is getting enough care and every branch is getting enough
        sun. The timeline below illustrates the Project Forest Launch Timeline –
        the closed beta is now live, followed by the NFT Reveal, Open Public
        Beta, and finally the official launch of Project Forest.
      </p>
      <div className="flex flex-row gap-6 pt-10 ">
        {timelineData.map((e, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-center items-center text-labelTextColor  max-w-[200px] "
            >
              <div className={`${e.status === true ? 'bg-[#C2C982]' : 'bg-white'} m-2 bg-white w-[100px] h-[100px] rounded-full flex justify-center items-center font-semibold shadow-xl ring-white ring-[1px] relative z-100`}>
                {e.phase}
                   <div className={`${e.desktopBorder} border border-dashed border-[#434343] border-opacity-20 absolute m-auto top-[50%] z-0`}></div>
                
              </div>

              {e.status === true ? (
                <div className="flex flex-col h-[60px]">
                    <div className="flex flex-row gap-[5px]">
                  <ImageComponent src="/assets/beta/timeline/check.svg" className="-mb-3" />
                  <p className=" font-semibold pt-4 italic text-[14px]">{e.title}</p>
                  </div>
                  <p className="text-[12px] pt-2 text-opacity-70 text-labelTextColor">{e.text}</p>
                </div>
              ) : (
                  <div className="h-[60px]">
                <p className=" font-semibold pt-4 italic text-[14px]">{e.title}</p>
                <p className="text-[12px] pt-2 text-opacity-70 text-labelTextColor">{e.text}</p>
                </div>
              )}

             
              <ImageComponent src={"/assets/beta/timeline/" + e.image } className="py-6 object-contain" />
            </div>
          );
        })}
      </div>
      {/* <div className="border border-dashed border-[#434343] border-opacity-20 w-[50%] absolute top-[70%] z-0"></div> */}
    </div>
  );
};

export default Timeline;
