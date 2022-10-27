import React from "react";
import ImageComponent from "../../shared/ImageComponent";
import { getAllBenefitsData } from "../../../services/data-files/BenefitsData";

const benefitsData = getAllBenefitsData();

const benefits = () => {
  return (
    <div className="mt-20 relative w-full flex flex-col lg:flex-row justify-between bg-gradient-to-b from-[#47356C] to-[#702461] rounded-[2rem] lg:p-12 p-8 py-18 shadow-xl text-white">
      <ImageComponent
        src="/assets/beta/benefits/arrow.png"
        className="absolute lg:-top-32 lg:-left-24 lg:rotate-0 -top-28 left-0 h-24 lg:h-36 "
      />
      <div className="lg:w-[50%]  flex flex-col lg:items-start lg:gap-10 gap-5 lg:pt-4 text-center lg:text-left">
        <ImageComponent
          src={"assets/beta/benefits/rewards.webp"}
          alt="Project Forest"
          className="-mt-4 2xl:h-[400px] self-center"
        />
        <h2 className=" text-xl md:text-4xl font-semibold">
          Closed Beta Rewards
        </h2>
        <p className=" text-opacity-80 lg:text-lg text-base">
          Take the first steps toward a more sustainable future with Project
          Forest’s closed beta. Register and participate to get a first look at
          the project and earn a variety of rewards including NFTs, project
          tokens and priority during future launches.
        </p>
        <p className="text-white text-opacity-70 text-[12px] leading-4 md:text-sm">
          To learn more about earning NFT airdrops during the beta, {""}
          <a
            href="https://medium.com/project-forest/its-raining-nfts-5c91aa69a0e4"
            target="_blank"
            rel="noreferrer"
            className="pointer text-[#C2C982] underline"
          >
            click here
          </a>
          !
        </p>
        {/* <button className='cursor-pointer btnSecondary h-12  lg:w-56 w-40 mb-8 lg:mb-0'>
          Read More
        </button> */}
      </div>
      <div className="lg:w-[40%] w-full justify-between flex flex-col gap-4 pt-4 lg:pt-0">
        {benefitsData.map((e, i) => {
          return (
            <div
              key={i}
              className="w-full min-h-[200px] flex flex-col lg:flex-row items-center rounded-3xl bg-[#C2C983] bg-opacity-30 px-4 py-6 gap-4 shadow-[0_2px_0px_0px_rgba(0,0,0,0.2)]"
            >
              <ImageComponent
                src={`/assets/beta/benefits/${e.image}.svg`}
                alt="Project forest Benefits"
                className="object-contain w-12 h-10"
              />
              <div className="flex flex-col items-center text-center lg:text-left lg:items-start w-[90%]">
                <h2 className="text-lg  font-semibold pb-1">{e.title}</h2>
                <p className=" text-opacity-80 text-base">{e.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default benefits;
