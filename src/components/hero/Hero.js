import React from "react";
import ImageComponent from '../shared/ImageComponent'
import {
  DISCORD_LINK,
  TELEGRAM_LINK,
  TWITTER_LINK,
} from "../../utilities/constants";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center py-8 lg:px-60 px-6 " id="home">
      <div className=" text-textTitle lg:w-2/4 w-full flex gap-6 flex-col">
        <h2 className="text-[44px] font-bold">
          A Purpose Led Change <br></br> is coming to Web3
        </h2>
        
        <p className="leading-6 text-primary font-bold ">
          Earn while making a greener impact on the planet.<br></br>
          <span className="text-textDescription font-normal ">
            Become part of Project Forest’s aim of planting 1,000,000 trees
            across the world and be rewarded daily for the oxygen your plants
            produce.
          </span>
        </p>
        <div className="flex flex-row pt-6">
          <button className="btnPrimary w-60">
            <a href="https://docs.google.com/document/d/1HTvGjbKl1Jd9OtIDGWLd-O7_5knuWz0A3VMTKLxTEJ8/edit?usp=sharing"
                        target="_blank"
                        rel="noreferrer">Whitepaper</a></button>
          <button className="btnSecondary w-60">Go To Marketplace</button>
        </div>
        <div>
          <div className="w-3/4 flex flex-row justify-center pt-2">
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
      </div>
      <div className="flex flex-col">
       <ImageComponent src={"/assets/hero/main-plant.png"} className="" />
      </div>
    </div>
  );
};

export default Hero;
