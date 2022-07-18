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
    <div className=" text-textDescription py-10 bg-[#F2F2F2] panel" id="roadmap">
      <h3 className=" text-textTitle text-[40px] font-bold lg:px-60 px-6">
        Roadmap
      </h3>

      {/* Roadmap Large Screen */}
      <MediaQuery query="(min-width: 1024px)">
        <div className="w-full relative flex justify-center">
          <ImageComponent
            src={"/assets/roadmap/roadmap.png"}
            className="mt-16 mb-5"
          />
        </div>
      </MediaQuery>

      {/* Roadmap Mobile & Tablet Screen */}
      <MediaQuery query="(max-width: 1023px)">
        <div className="px-6 py-8">
          {DataArr.map((e, i) => {
            return (
              <div key={i} className="w-full flex flex-row justify-between">
                <div
                  className={`${e.bgColor} flex flex-col items-center justify-center text-white py-2 w-1/4 min-h-[70px]`}
                >
                  <h3 className="text-base font-semibold">{e.month}</h3>
                  <p className="text-[13px] font-light">2022</p>
                </div>

                <ImageComponent
                  src={`/assets/roadmap/${e.image}.png`}
                  alt="Project forest roadmap"
                  className="object-contain py-4"
                />

                <div className="flex flex-col w-2/4 justify-center text-[12px] text-textDescription text-opacity-70 leading-4">
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