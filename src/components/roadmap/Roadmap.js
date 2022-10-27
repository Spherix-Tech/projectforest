import React from "react";
import Dynamic from "next/dynamic";
import MediaQuerySSR from "react-responsive";
import ImageComponent from "../shared/ImageComponent";
import { getDataBySectionName } from "../../services/dataService";

const MediaQuery = Dynamic(() => Promise.resolve(MediaQuerySSR), {
  ssr: true,
});

const DataArr = getDataBySectionName("roadmap");

const Roadmap = () => {
  return (
    <div className=" text-textDescription bg-[#2D1955] panel" id="roadmap">
      <h3 className="section-title pt-[3rem] text-white bg-[#2D1955] section-title-spacing px-[2rem] lg:px-[12rem]">
        Roadmap
      </h3>

      {/* Roadmap Large Screen */}
      <MediaQuery query="(min-width: 1024px)">
        <div className="w-full relative flex justify-center bg-[#2D1955] pb-[3rem]">
          <ImageComponent src={"/assets/roadmap/roadmap-halloween.webp"} />
        </div>
      </MediaQuery>

      {/* Roadmap Mobile & Tablet Screen */}
      <MediaQuery query="(max-width: 1023px)">
        <div className="px-6 py-8 bg-[#2D1955]">
          {DataArr.map((e, i) => {
            return (
              <div key={i} className="w-full flex flex-row justify-between">
                <div
                  className={`${e.bgColor} flex flex-col items-center justify-center text-white py-2 min-w-[5.5rem] xs:min-w-[7.5rem] min-h-[70px]`}
                >
                  <h3 className="text-base font-semibold">{e.month}</h3>
                  <p className="text-[13px] font-light">2022</p>
                </div>

                <ImageComponent
                  src={`/assets/roadmap/${e.image}.svg`}
                  alt="Project forest roadmap"
                  className="object-contain py-4"
                />

                <div className="flex flex-col w-2/4 justify-center text-[12px] text-white text-opacity-70 leading-4 pl-2">
                  <p>{e.text}</p>
                  <p>{e.text2}</p>
                  <p>{e.text3}</p>
                  <p>{e.text4}</p>
                </div>
              </div>
            );
          })}
        </div>
      </MediaQuery>
    </div>
  );
};

export default Roadmap;
