import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import ImageComponent from "../shared/ImageComponent";

const MarketplaceNav = () => {
  const searchRef = useRef();
  const router = useRouter();

  return (
    <nav className="flex w-full justify-between p-2 px-4 items-center">
      <Link href="/">
        <div className=" md:w-80 cursor-pointer flex flex-row gap-2 text-[#434343] items-center">
          <ImageComponent
            alt="Project Forest Logo"
            src={"/assets/logo.webp"}
            className="h-[60px]"
          />
          <h2 className="text-[14px] leading-[1.3rem]">
            PROJECT <br></br>
            <span className="text-[22px] font-semibold">FOREST</span>
          </h2>
        </div>
      </Link>
      <div className="flex flex-row items-center md:w-full">
        <form
          className="md:mr-16 hidden mr-5 md:flex md:justify-start w-full md:py-1 rounded-md bg-white bg-opacity-50"
          onSubmit={(e) => {
            e.preventDefault();
            router.push({
              pathname: "/marketplace",
              query: { ...router.query, search: searchRef.current.value },
            });
          }}
        >
          <button
            type="submit"
            className="rounded-l-md px-4 hover:bg-slate-100 cursor-pointer"
          >
            <ImageComponent src="/assets/marketplace/search.svg" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="text-[14px] py-1 p-2 rounded-r-md w-4/5 outline-none bg-transparent placeholder:text-[14px] placeholder:font-light"
            ref={searchRef}
          />
        </form>
        <button className=" bg-[#bcedab] border border-[#d7dd87] md:py-2 py-1 px-10 rounded-md text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default MarketplaceNav;
 