import Link from "next/link";
import { useEffect, useMemo } from "react";

import ImageComponent from "./ImageComponent";

const PopupA = ({ open, onClose }) => {
  const active = useMemo(() => open, [open]);
  useEffect(() => {
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [active]);

  return (
    active && (
      <div className="h-max md:w-[750px] w-full fixed m-auto top-[25%] md:left-[5%] lg:left-[25%] px-3">
        <div
          onClick={onClose}
          className="bg-[#000000] h-full w-full bg-opacity-70 fixed top-0 left-0 z-50"
        />
        <div className="flex bg-transparent z-100 relative">
          <div className="w-1/2 hidden md:block">
            <ImageComponent
              src="/assets/pop-up-img.webp"
              className="w-full h-full"
            />
          </div>
          <div className="h-full w-full md:w-1/2 bg-gradient-to-b from-[#D9F0EC] to-[#EEF1D1] text-textTitle text-center md:text-left rounded-r-2xl rounded-l-2xl md:rounded-r-2xl md:rounded-l-none px-6  py-6 overflow-scroll">
            {/* {children} */}
            <h1 className="font-bold text-3xl py-4 ">
              Join the Project Forest closed beta
            </h1>
            <p className="text-sm">
              Project Forest&apos;s first round of public testing is currently
              live. Participate in the closed beta for free to get daily chances
              to{" "}
              <span className="font-semibold">win valuable NFT airdrops</span>{" "}
              and receive <span className="font-semibold">10 O2 tokens</span> at
              the end of the testing phase.
            </p>
            <br></br>
            <p className="text-sm pb-6">
              The total slots for closed beta are limited to{" "}
              <span className="font-semibold">1000</span>. Create an account on
              the website and download the beta app to get started now!
            </p>
            <Link href="/beta" className="cursor-pointer" rel="noreferrer">
              <button className="   btnBeta bg-[#C3CA84] text-lg py-2 rounded-xl w-full hover:bg-[#A2AA5F] my-4">
                Get Started
              </button>
            </Link>
          </div>
          <ImageComponent
            src="/assets/x-icon.svg"
            className="absolute top-4 right-4 h-3  cursor-pointer  object-contain"
            onClick={onClose}
          />
        </div>
      </div>
    )
  );
};

export default PopupA;
