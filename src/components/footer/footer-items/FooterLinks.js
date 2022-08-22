import React from "react";

const FooterLinks = () => {
  return (
    <div className=" w-full flex flex-row justify-end leading-10 text-[#969696]">
      <div className=" w-2/4 flex flex-col items-end">
        <a href="#home">
          <h5>Home</h5>
        </a>
        <a href="#nft">
          <h5>NFT</h5>
        </a>
        <a href="#how-it-works">
          <h5>How It Works?</h5>
        </a>
        <a href="#roadmap">
          <h5>Roadmap</h5>
        </a>
      </div>

      <div className=" w-2/4 flex flex-col items-end">
        <a href="#token">
          <h5>Token</h5>
        </a>
        <a target="_blank" className="cursor-default" rel="noreferrer">
          <h5>Litepaper</h5>
        </a>
        <h5>Marketplace</h5>
      </div>
    </div>
  );
};

export default FooterLinks;
