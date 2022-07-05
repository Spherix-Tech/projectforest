import React from "react";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <div className=" w-full flex flex-row leading-10 text-[#969696]">
      <div className=" w-2/4 flex flex-col items-start">
        <Link href="/home">
          <h5>Home</h5>
        </Link>
        <Link href="/nft">
          <h5>NFT</h5>
        </Link>
        <Link href="/how-it-works">
          <h5>How It Works?</h5>
        </Link>
        <Link href="/roadmap">
          <h5>Roadmap</h5>
        </Link>
      </div>

      <div className=" w-2/4 flex flex-col items-start">
        <Link href="/faq">
          <h5>FAQ</h5>
        </Link>
        <a href="" target="_blank" rel="noreferrer">
          <h5>Whitepaper</h5>
        </a>
        <h5>Marketplace</h5>
      </div>
    </div>
  );
};

export default FooterLinks;
