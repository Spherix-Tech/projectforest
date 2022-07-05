import Image from "next/image";
import React from "react";
import tree from "../../../public/assets/hero/hero.png";
import {
  DISCORD_LINK,
  TELEGRAM_LINK,
  TWITTER_LINK,
} from "../../utilities/constants";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between py-8">
      <div className=" text-textTitle w-2/4 flex gap-6 flex-col">
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
          <button className="btnPrimary w-60">Whitepaper</button>
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
        <Image
          src={tree}
          alt="Project forest tree"
          height={576}
          width={576}
        />
      </div>
    </div>
  );
};

export default Hero;
