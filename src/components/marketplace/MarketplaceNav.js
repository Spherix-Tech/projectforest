import Link from "next/link";
import React from "react";
import ImageComponent from "../shared/ImageComponent";

const MarketplaceNav = () => {
  return (
    <nav className="flex w-full justify-between p-2 items-center">
      <Link href="/">
        <div className="w-72 cursor-pointer flex flex-row gap-2 text-primaryBlue items-center ">
          <ImageComponent
            alt="Project Forest Logo"
            src={"/assets/logo.webp"}
            className="h-[23px] lg:h-[60px]"
          />
          <h2 className="lg:text-[12px] text-[8px] lg:leading-[1.3rem] leading-3">
            PROJECT <br></br>
            <span className="lg:text-[22px] text-[11px] font-semibold">
              FOREST
            </span>
          </h2>
        </div>
      </Link>
      <div className="flex flex-row items-center mr-7 w-full">
        <div className="mr-16 flex justify-end flex-grow rounded-md">
          <ImageComponent
            src="/assets/marketplace/search.svg"
            className="rounded-l-md bg-white px-2 pl-3"
          />
          <input
            type="text"
            placeholder="Search"
            className="py-1 p-2 rounded-r-md w-4/5"
          />
        </div>
        <button className="border-stone-300 bg-[#bcedab] py-2 px-10 rounded-md text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default MarketplaceNav;
