import React from "react";
import ImageComponent from "../../shared/ImageComponent";
import { getAllBetaStepsData } from "../../../services/data-files/BetaStepsData";

const betaSteps = getAllBetaStepsData();

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center 2xl:pt-10 relative md:pb-10 pb-6">
      <ImageComponent
        src="/assets/beta/timeline/arrow.svg"
        className="absolute lg:-top-24 -top-[90px] lg:-right-30 right-5 lg:rotate-0 h-24 lg:h-36 z-[100]"
      />
      <h2 className="text-xl md:text-4xl font-semibold text-labelTextColor -mb-4 md:-mb-2 pt-3 py-10 ">
        Steps to join Closed Beta
      </h2>
      <div className="flex flex-row flex-wrap lg:flex-nowrap lg:flex-row gap-4 justify-center">
        {betaSteps.map((e, i) => {
          return (
            <div
              key={i}
              className={`${e.bgColor} flex flex-col text-white px-4 w-[280px] lg:w-[280px]  rounded-3xl min-h-[320px] `}
            >
              <div className="">
                <ImageComponent
                  src={"/assets/beta/get-started/" + e.number}
                  className="object-contain h-[160px] -mt-8"
                />
              </div>
              <ImageComponent
                src={"/assets/beta/get-started/" + e.icon}
                className="object-contain h-[100px] -mt-20"
              />
              <p className=" md:text-2xl text-xl font-semibold">{e.title}</p>
              <p className="font-light py-2 text-sm min-h-[100px]">{e.text}</p>
              {e.linkAvailable === true ? (
                <a href={e.link} target={e.target} rel="noreferrer">
                  <div className="flex flex-row gap-2 items-center justify-center pb-2 hover:underline">
                    <p className="">{e.subText}</p>
                    <ImageComponent
                      src={"/assets/beta/get-started/" + e.subIcon}
                      className="object-contain"
                    />
                  </div>
                </a>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <p className="md:w-[60%] w-full text-[#A0A0A0] text-[12px] leading-4 md:text-sm  text-center pt-4">
        For more information, refer to the step-by-step registration tutorial by{" "}
        <a
          href="https://medium.com/project-forest/closed-beta-registrations-resume-6d2bad46c672"
          target="_blank"
          rel="noreferrer"
          className="pointer text-footerBgColor underline"
        >
          clicking here
        </a>
        !
      </p>
    </div>
  );
};

export default GetStarted;
