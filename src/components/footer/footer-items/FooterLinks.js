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
        <a href="https://docs.google.com/document/d/1HTvGjbKl1Jd9OtIDGWLd-O7_5knuWz0A3VMTKLxTEJ8/edit?usp=sharing"
              target="_blank"
              rel="noreferrer">
          <h5>Whitepaper</h5>
        </a>
        <h5>Marketplace</h5>
      </div>
    </div>
  );
};

export default FooterLinks;
