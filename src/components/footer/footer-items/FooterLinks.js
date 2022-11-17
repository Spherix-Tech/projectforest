import React from "react";
import {
  LITEPAPER_LINK,
  PRIVACY_POLICY_LINK,
} from "../../../utilities/constants";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className=" w-full flex flex-row justify-end leading-10 text-[#969696]">
      <div className=" w-2/4 flex flex-col items-end">
        <a href="#home">
          <p>Home</p>
        </a>
        <a href="#nft">
          <p>NFT</p>
        </a>
        <a href="#how-it-works">
          <p>How It Works?</p>
        </a>
        <a href="#roadmap">
          <p>Roadmap</p>
        </a>
        <Link href="/privacy-policy">
          <a target="_blank" className="cursor-pointer" rel="noreferrer">
            <p>Privacy Policy</p>
          </a>
        </Link>
      </div>

      <div className=" w-2/4 flex flex-col items-end">
        <a href="#token">
          <p>Token</p>
        </a>
        <a
          href={LITEPAPER_LINK}
          target="_blank"
          className="cursor-pointer"
          rel="noreferrer"
        >
          <p>Litepaper</p>
        </a>
        <p className="cursor-default">Marketplace</p>
        <Link href="/faq">
          <p>FAQs</p>
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
