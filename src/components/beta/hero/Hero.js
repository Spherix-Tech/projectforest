import React from "react";
import ImageComponent from "../../shared/ImageComponent";
import { DISCORD_LINK } from "../../../utilities/constants";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-7 items-center text-center">
      <h4 className=" text-2xl md:text-6xl text-[#3A3A3C] font-bold">
        Your Journey Starts Here!
      </h4>
      <p className=" text-primaryBlue text-base md:text-xl  ">
        Project Forest’s closed beta will be launching shortly.<br></br>
        Be the first one to experience Grow-to-Earn and earn free NFTs.
      </p>
      <div className="flex flex-row pt-1 gap-4">
        <button className="btnPrimary cursor-pointer lg:w-56 w-40 mr-0 flex items-center">
          <ImageComponent
            src={"/assets/wallet/metamask.svg"}
            className="mr-[12px]"
          />
          <p>Connect</p>
        </button>
        <a
          href={DISCORD_LINK}
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
        >
          <button className="cursor-pointer btnSecondary  lg:w-56 w-40 mr-0">
            Discord
          </button>
        </a>
      </div>
      <div>
        <ImageComponent src={"/assets/beta/hero/hero.png"} className="" />
      </div>
    </div>
  );
};

export default Hero;
