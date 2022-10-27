import React from "react";
import ImageComponent from "../shared/ImageComponent";
import {
  DISCORD_LINK,
  LITEPAPER_LINK,
  MEDIUM_LINK,
  TELEGRAM_LINK,
  TWITTER_LINK,
} from "../../utilities/constants";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="flex navscreen:flex-row flex-col-reverse justify-between items-center lg:py-8 py-4 section-spacing hero-sec"
      id="home"
    >
      <div className=" lg:w-2/4 text-white flex lg:gap-6 gap-4 flex-col navscreen:items-start items-center">
        <h3 className="navscreen:text-[42px] text-[30px] font-bold text-center navscreen:text-left leading-9 navscreen:leading-10 navscreen:whitespace-nowrap">
          A Purpose-Led Change <br></br> is Coming to Web3
        </h3>

        <p className="leading-6 text-white font-bold navscreen:text-left text-center navscreen:text-[16px] text-[14px] px-6 navscreen:px-0 ">
          Earn while making a greener impact on the planet.<br></br>
          <span className="text-white font-normal ">
            Project Forest is a collection of sustainability-focused NFTs that
            let you make a positive impact on the environment through a unique
            Grow-to-Earn experience. Each time an NFT is minted in Project
            Forest, a portion of the proceeds are donated to NGOs to fund
            reforestation measures across the world.
          </span>
        </p>
        <div className="flex flex-col  gap-4 ">
          <div className="flex flex-row pt-1 gap-4 ">
            <Link href="/beta" className="cursor-pointer" rel="noreferrer">
              <button className="btnPrimary lg:w-60 w-40 mr-0">
                JOIN BETA!
              </button>
            </Link>
            <a
              href={LITEPAPER_LINK}
              target="_blank"
              className="cursor-pointer"
              rel="noreferrer"
            >
              <button className=" btnSecondary lg:w-60 w-40 mr-0">
                LITEPAPER
              </button>
            </a>
          </div>
          <div className="w-full flex flex-row justify-center">
            <a
              className=" flex flex-row items-center justify-center"
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <ImageComponent
                src={"/assets/hero/halloween/twitter.svg"}
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
                src={"/assets/hero/halloween/discord.svg"}
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
                src={"/assets/hero/halloween/medium.svg"}
                className="mx-[8px]"
              />
            </a>
            <a
              className=" flex items-center justify-center"
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <ImageComponent
                src={"/assets/hero/halloween/telegram.svg"}
                className="mx-[8px]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <ImageComponent
          src={"/assets/hero/halloween/halloween-tree.webp"}
          className=" lg:w-[418px] lg:h-[540px] h-[380px] w-[310px]"
        />
      </div>
    </div>
  );
};

export default Hero;
