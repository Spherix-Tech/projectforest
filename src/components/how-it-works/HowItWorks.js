import React, { useState, useMemo } from "react";
import ContentCard from "./ContentCard";
import ImageComponent from "../shared/ImageComponent";

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
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-[1rem] md:gap-[8rem]">
          <div className="xl:flex-1">
            <div className="flex flex-col justify-start items-center">
              <div className="w-full text-start">
                <p className="section-sub-title">Introducing</p>
                <br />
                <h1 className="section-title section-title-spacing">
                  GROW-to-EARN
                </h1>
              </div>
              {/* Three images */}
              <div>
                <ImageComponent
                  src={
                    "/assets/how-it-works/" + memoisedSelectedItemObj?.imageName
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
          <div className="w-full xl:flex-1 relative overflow-y-scroll md:overflow-hidden max-h-[350px] md:max-h-[none]">
            {/* <div className="absolute left-4 h-[124%] xs:h-[118%]  md:h-[94%!important] mt-[2.8rem]"> */}
            <div className="absolute left-4 h-[538px] xs:h-[475px] sm:h-[460px!important]  md:h-[94%!important] mt-[2.8rem]">
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
        {/* <div className="w-full flex flex-col">
          <div className="flex lg:flex-row flex-col-reverse justify-between ">
            <div className="container-how">
              <ImageComponent
                src={"/assets/how-it-works/plant.png"}
                alt="plant"
                className="lg:pl-6 lg:h-unset h-[250px] object-contain  mt-5 lg:mt-0"
              />
            </div>
            <ContentCard
              polygon="polygon-1.svg"
              title="Plant"
              subtitle="your virtual tree"
              description="Purchase or Redeem your Virtual NFT Tree. Plant it in the app — Have it planted in the real world through our partner NGOs"
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-between ">
            <ContentCard
              polygon="polygon-2.svg"
              title="Nurture"
              subtitle="it daily"
              description="Water your virtual NFT tree every day to keep it healthy and producing oxygen."
            />
            <div className="container-how">
              <ImageComponent
                src={"/assets/how-it-works/nurture.png"}
                alt="plant"
                className="lg:pr-10 h-[250px] lg:h-unset object-contain  mt-5 lg:mt-0"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col-reverse justify-between ">
            <div className="container-how">
              <ImageComponent
                src={"/assets/how-it-works/earn.png"}
                alt="plant"
                className="lg:pl-6 h-[250px] lg:h-unset object-contain mt-5 lg:mt-0"
              />
            </div>
            <ContentCard
              polygon="polygon-3.svg"
              title="Earn"
              subtitle="O2 tokens"
              description="Collect the oxygen that your plant generates in the form of O2 tokens regularly."
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-between pb-6 lg:pb-20 ">
            <ContentCard
              polygon="polygon-4.svg"
              title="Upgrade"
              subtitle="your tree NFT"
              description="Use the O2 token to purchase fertilizers that upgrade your existing tree or purchase new trees to create your own virtual NFT forest."
            />
            <div className="container-how flex flex-col justify-center items-center w-full">
              <ImageComponent
                src={"/assets/how-it-works/upgrade.png"}
                alt="plant"
                className="lg:pl-32  lg:h-[350px] h-[250px] object-contain  mt-5 lg:mt-0"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HowItWorks;
