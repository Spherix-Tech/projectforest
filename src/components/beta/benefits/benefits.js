import React from "react";
import ImageComponent from "../../shared/ImageComponent";
import { getAllBenefitsData } from "../../../services/data-files/BenefitsData";

const benefitsData = getAllBenefitsData();

const benefits = () => {
  return (
    <div className="mt-20 relative w-full flex flex-col md:flex-row justify-between nav-hero-section-bg rounded-[2rem] md:p-12 p-8 py-18 shadow-xl">
      <ImageComponent
        src="/assets/beta/benefits/arrow.png"
        className="absolute lg:-top-32 lg:-left-24 lg:rotate-0 -top-36 left-0 h-32 lg:h-40 "
      />
      <div className="md:w-[50%]  flex flex-col justify-center items-center md:items-start md:gap-10 gap-5 md:pl-6 md:pt-4 text-center md:text-left">
        <h2 className=" text-labelTextColor text-xl md:text-3xl font-semibold ">
          Closed Beta Rewards
        </h2>
        <p className="text-labelTextColor text-opacity-80 md:text-lg text-base">
          Take the first steps toward a more sustainable future with Project
          Forest’s closed beta. Register and participate to get a first look at
          the project and earn a variety of rewards including NFTs, project
          tokens and priority during future launches.
        </p>
        {/* <button className='cursor-pointer btnSecondary h-12  lg:w-56 w-40 mb-8 md:mb-0'>
          Read More
        </button> */}
      </div>
      <div className="md:w-[40%] w-full flex flex-col gap-4 pt-4 md:pt-0">
        {benefitsData.map((e, i) => {
          return (
            <div
              key={i}
              className="w-full flex flex-col md:flex-row items-center rounded-3xl bg-[#C2C983] bg-opacity-30 px-4 py-6 gap-4 shadow-[0_2px_0px_0px_rgba(0,0,0,0.2)]"
            >
              <ImageComponent
                src={`/assets/beta/benefits/${e.image}.svg`}
                alt="Project forest Benefits"
                className="object-contain w-12 h-10"
              />
              <div className="flex flex-col items-center text-center md:text-left md:items-start w-[90%]">
                <h2 className="text-lg text-labelTextColor font-semibold pb-1">
                  {e.title}
                </h2>
                <p className="text-labelTextColor text-opacity-80 text-base">
                  {e.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default benefits;
