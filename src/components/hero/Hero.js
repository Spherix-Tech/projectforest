import React from "react";
import ImageComponent from "../shared/ImageComponent";
import {
  DISCORD_LINK,
  TELEGRAM_LINK,
  TWITTER_LINK,
} from "../../utilities/constants";

const Hero = () => {
  return (
    <div
      className="flex lg:flex-row flex-col justify-between items-center lg:py-8 py-4 lg:px-60 px-6 "
      id="home"
    >
      <div className=" text-textTitle flex lg:gap-6 gap-4 flex-col lg:items-start items-center">
        <h2
          className="lg:text-[42px] text-[28px] font-bold text-center lg:text-left leading-9 lg:leading-10 whitespace-nowrap"
        >
          A Purpose Led Change <br></br> is coming to Web3
        </h2>

        <p className="leading-6 text-primary font-bold lg:text-left text-center lg:text-[16px] text-[14px] ">
          Earn while making a greener impact on the planet.<br></br>
          <span className="text-textDescription font-normal ">
            Become part of Project Forest’s aim of planting 1,000,000 trees
            across the world and be rewarded daily for the oxygen your plants
            produce.
          </span>
        </p>
        <div className="flex flex-row pt-6">
          <button className="btnPrimary lg:w-60 w-52 ">
            <a
              href="https://docs.google.com/document/d/1HTvGjbKl1Jd9OtIDGWLd-O7_5knuWz0A3VMTKLxTEJ8/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Whitepaper
            </a>
          </button>
          <button className="btnSecondary lg:w-60 w-52">
            Go To Marketplace
          </button>
        </div>

        <div className=" w-3/4 flex flex-row justify-center ">
          <a
            className=" flex flex-row items-center justify-center"
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <img src={"/assets/hero/telegram.svg"} className="mx-[8px]" />
          </a>
          <a
            className=" flex items-center justify-center"
            href={DISCORD_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <img src={"/assets/hero/discord.svg"} className="mx-[8px]" />
          </a>
          <a
            className=" flex flex-row items-center justify-center"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <img src={"/assets/hero/twitter.svg"} className="mx-[8px]" />
          </a>
        </div>
      </div>
      <div className="flex flex-col ">
        <ImageComponent src={"/assets/hero/main-nft.png"} className="" />
      </div>
    </div>
  );
};

export default Hero;
