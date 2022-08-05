import React from "react";
import ImageComponent from "../shared/ImageComponent";
import {
  DISCORD_LINK,
  MEDIUM_LINK,
  TWITTER_LINK,
} from "../../utilities/constants";

const Hero = () => {
  return (
    <div
      className="flex navscreen:flex-row flex-col-reverse justify-between items-center lg:py-8 py-4 section-spacing hero-sec"
      id="home"
    >
      <div className=" lg:w-2/4 text-textTitle flex lg:gap-6 gap-4 flex-col navscreen:items-start items-center">
        <h3 className="navscreen:text-[42px] text-[30px] font-bold text-center navscreen:text-left leading-9 navscreen:leading-10 navscreen:whitespace-nowrap">
          A Purpose Led Change <br></br> is Coming to Web3
        </h3>

        <p className="leading-6 text-primaryBlue font-bold navscreen:text-left text-center navscreen:text-[16px] text-[14px] px-6 navscreen:px-0 ">
          Earn while making a greener impact on the planet.<br></br>
          <span className="text-textDescription font-normal ">
            Become part of Project Forest’s aim of planting 1,000,000 trees
            across the world and be rewarded daily for the oxygen your plants
            produce.
          </span>
        </p>
        <div className="flex flex-row pt-1 navscreen:items-start gap-4 ">
          <button className="disabled btnPrimary lg:w-60 w-44 mr-0">
            <a
              href="https://docs.google.com/document/d/1HTvGjbKl1Jd9OtIDGWLd-O7_5knuWz0A3VMTKLxTEJ8/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Litepaper
            </a>
          </button>
          <button className="disbaled cursor-default btnSecondary lg:w-60 w-44 mr-0">
            Mint Now
          </button>
        </div>

        <div className="w-full flex flex-row justify-center 2xl:-ml-[6.5rem] ">
          <a
            className=" flex flex-row items-center justify-center"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <ImageComponent
              src={"/assets/hero/twitter.svg"}
              className="mx-[8px]"
            />
          </a>
          <a
            className=" flex flex-row items-center justify-center"
            href={DISCORD_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <ImageComponent
              src={"/assets/hero/discord.svg"}
              className="mx-[8px]"
            />
          </a>
          <a
            className=" flex items-center justify-center"
            href={MEDIUM_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <ImageComponent
              src={"/assets/hero/medium.svg"}
              className="mx-[8px]"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <ImageComponent
          src={"/assets/hero/main-nft.png"}
          className=" lg:w-[418px] w-[318] lg:h-[540px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default Hero;
