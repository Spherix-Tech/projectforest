import React, { useState, useMemo } from "react";
import ImageComponent from "../shared/ImageComponent";
import ContentCard from "./ContentCard";

const GameplayHowItWorks = ({ howItWorksItemsList }) => {
  // const [selectedItemObj, setSelectedItemObj] = useState(
  //   howItWorksItemsList[0]
  // );
  const changeSelectedItem = (selectedItem) => {
    // setSelectedItemObj(selectedItem);
  };
  // const memoisedSelectedItemObj = useMemo(() => {
  //   return selectedItemObj;
  // }, [selectedItemObj]);
  return (
    <div className="how-section" id="how-it-works">
      <div
        className="py-[2rem] md:py-[4rem] lg:pt-[3rem] lg:pb-[6rem]"
        id="how-it"
      >
        {/* Start Desktop How it works */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-[1rem] md:gap-[8rem]">
          <div className="flex-1">
            <div className="flex flex-col justify-start items-center">
              {/* Three images */}
              <div>
                <ImageComponent
                  src={"/assets/how-it-works/gameplay-combined-img.png"}
                  alt="Grow to earn"
                  className="max-h-[450px] md:max-h-[700px]"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex-1 relative">
            {/* <div className="absolute left-4 h-[124%] xs:h-[118%]  md:h-[94%!important] mt-[2.8rem]"> */}
            <div className="absolute left-4 h-[94%] mt-[2.8rem]">
              <ImageComponent
                src={"/assets/how-it-works/straight-dashed-img.svg"}
                className="h-[inherit]"
              />
            </div>
            {howItWorksItemsList &&
              howItWorksItemsList?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={
                      "flex justify-start gap-[1.5rem] sm:gap-[2rem] items-center h-auto sm:h-[65px] lg:h-[90px] " +
                      (index == 0 || index == howItWorksItemsList.length - 1
                        ? ""
                        : " my-8 ")
                    }
                  >
                    {/* Numbring circle */}
                    <div className="min-w-[35px] text-white h-[35px] rounded-full font-bold border-2 z-10 border-[#1D3C34] flex justify-center items-center bg-[#1D3C34]">
                      <div className="mt-[10%]">{index + 1}</div>
                    </div>
                    {/* Details Card */}
                    <div>
                      <ContentCard
                        item={item}
                        isActiveCard={false}
                        onItemSelection={changeSelectedItem}
                        clickable={false}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {/* End Desktop How it works */}
      </div>
    </div>
  );
};

export default GameplayHowItWorks;
