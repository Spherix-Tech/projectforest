import React, { useState, useMemo } from "react";
import ContentCard from "./ContentCard";
import ImageComponent from "../shared/ImageComponent";
import MobileHowItWorks from "./MobileHowItWorks";

const HowItWorks = ({ howItWorksItemsList, haveRoundedPoints = false }) => {
  const [selectedItemObj, setSelectedItemObj] = useState(
    howItWorksItemsList[0]
  );
  const changeSelectedItem = (selectedItem) => {
    setSelectedItemObj(selectedItem);
  };
  const memoisedSelectedItemObj = useMemo(() => {
    return selectedItemObj;
  }, [selectedItemObj]);
  return (
    <div className="how-section" id="how-it-works">
      <div
        className="how-section-bg py-[2rem] md:py-[4rem] lg:pt-[3rem] lg:pb-[6rem] section-spacing "
        id="how-it"
      >
        <div className="w-full text-start">
          <p className="section-sub-title">Introducing</p>
          <br />
          <h1 className="section-title section-title-spacing pb-[2rem]">
            GROW-to-EARN
          </h1>
        </div>
        {/* Start Mobile How it works */}
        <div className="block lg:hidden">
          <MobileHowItWorks howItWorksItemsList={howItWorksItemsList} />
        </div>
        {/* End Mobile How it works */}

        {/* Start Desktop How it works */}
        <div className="hidden lg:block">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-[1rem] md:gap-[8rem]">
            <div className="xl:flex-1">
              <div className="flex flex-col justify-start items-center">
                {/* Three images */}
                <div>
                  <ImageComponent
                    src={
                      "/assets/how-it-works/" +
                      memoisedSelectedItemObj?.imageName
                    }
                    alt="Grow to earn"
                    className={
                      "w-[260px] lg:h-[500px] " +
                      (memoisedSelectedItemObj.normalTitle == "a Virtual Forest"
                        ? " lg:w-[430px] "
                        : " lg:w-[360px]")
                    }
                  />
                </div>
              </div>
            </div>
            <div className="w-full xl:flex-1 relative overflow-y-scroll md:overflow-hidden max-h-[350px] md:max-h-[none] pt-[1rem]">
              {/* <div className="absolute left-4 h-[124%] xs:h-[118%]  md:h-[94%!important] mt-[2.8rem]"> */}
              <div className="absolute left-4 h-[538px] xs:h-[475px] sm:h-[460px!important]  md:h-[92%!important] mt-[2.8rem]">
                {haveRoundedPoints ? (
                  <ImageComponent
                    src={"/assets/how-it-works/rounded-dashed-img.svg"}
                    className="hidden lg:block h-[inherit]"
                  />
                ) : (
                  <ImageComponent
                    src={"/assets/how-it-works/straight-dashed-img.svg"}
                    className="h-[inherit]"
                  />
                )}
                <ImageComponent
                  src={"/assets/how-it-works/straight-dashed-img.svg"}
                  className="block lg:hidden h-[inherit]"
                />
              </div>
              {howItWorksItemsList &&
                howItWorksItemsList?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        "flex justify-start gap-[1.5rem] sm:gap-[2rem] items-center h-auto sm:h-[80px] " +
                        (haveRoundedPoints ? item.roundedMarginClasses : "") +
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
                          isActiveCard={
                            memoisedSelectedItemObj?.normalTitle ==
                            item.normalTitle
                              ? true
                              : false
                          }
                          onItemSelection={changeSelectedItem}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* End Desktop How it works */}
      </div>
    </div>
  );
};

export default HowItWorks;
