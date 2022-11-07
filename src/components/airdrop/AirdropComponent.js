import React, { useState } from "react";
import { getDataBySectionName } from "../../services/dataService";
import ImageComponent from "../shared/ImageComponent";
import AirdropSlider from "./slider/AirdropSlider";
import StepsCard from "./steps-card/StepsCard";
const DataArr = getDataBySectionName("nft");

function AirdropComponent() {
  return (
    <div className="w-full relative">
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[70%] max-w-[800px] justify-center items-center gap-[8px]">
          <div className="flex justify-center items-center">
            <ImageComponent
              src={"/assets/nft/nft-main.webp"}
              className="w-[70%] max-w-[800px]"
            />
          </div>
          <div>
            <h1 className="text-[#3A3A3C] font-bold text-[1rem] md:text-[3rem] 2xl:text-[3.5rem]">
              Reforestation Starts Here
            </h1>
          </div>
          <div className="text-[#055555] text-center">
            <p className="text-[0.5rem] md:text-[1.2rem] 2xl:text-[2.5rem]">
              Project Forest’s first round of public beta is currently live.
              Participate in the Project Forest beta for free and earn exclusive
              NFT rewards and more. Get started by creating an account on the
              website and downloading the app on your iOS or Android devices.
            </p>
            <p className="my-[1rem] text-[0.5rem] md:text-[0.8rem] 2xl:text-[1rem] font-light">
              Closed beta is limited to 1000 player slots only. The activation
              code will be sent to your email after registration.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center gap-[1rem] md:gap-[2.5rem] 2xl:[3.5rem]">
        <StepsCard
          className="bg-[#82B764]"
          number={1}
          mainTitle="Invite Friends"
          description="Complete registration on Project Forest website and receive your activation code via email."
        />
        <StepsCard
          className="bg-[#5FB4B6]"
          number={2}
          mainTitle="Invite Friends"
          description="Complete registration on Project Forest website and receive your activation code via email."
        />
        <StepsCard
          className="bg-[#EA8EA2]"
          number={3}
          mainTitle="Invite Friends"
          description="Complete registration on Project Forest website and receive your activation code via email."
        />
      </div>

      <div className="flex flex-col py-[3rem] gap-8 justify-center items-center">
        <div className="text-[#434343] text-xl font-semibold">
          SpotLight : Tree NFT’s
        </div>
        <AirdropSlider DataArr={DataArr} />
      </div>
    </div>
  );
}

export default AirdropComponent;
