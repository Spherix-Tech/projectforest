import React from "react";
import ImageComponent from "../../shared/ImageComponent";

const Hero = () => {
  return (
    <div className="relative max-h-[100vh] overflow-hidden flex flex-col gap-4 md:gap-7 items-center text-center px-8">
      <div className="pointer-events-none absolute top-0 bottom-0 w-full h-full custom-gradient z-100" />
      <h4 className=" text-2xl md:text-6xl text-[#3A3A3C] font-bold">
        Reforestation Is Here
      </h4>
      <p className="  w-full md:w-3/4 lg:w-2/4 text-primaryBlue text-base md:text-xl ">
        Project Forest&apos;s closed beta is now live. Be the first to
        experience the Grow-to-Earn app and earn exclusive rewards.
        Pre-registrations for the closed beta have concluded, and beta invites
        have been sent out. Players that wish to be a part of the closed beta
        can stay tuned for updates in the coming days.<br></br>
        <br></br> Let&apos;s rebuild the Earth&apos;s environment one branch at
        a time.
      </p>
      <div className="flex flex-row gap-3">
        <div>
          <a href="">
            <button className=" btnBeta bg-[#C3CA84]">
              <p>Download Beta (APK) </p>
            </button>
          </a>
          <p className="pt-2 text-[#A0A0A0] text-xs">For mobile phones only</p>
        </div>
        <a href="">
          <button className=" btnBeta bg-transparent">
            <p>Get Activation Code</p>
          </button>
          <p className="pt-2 text-[#A0A0A0] text-xs">
            Complete gleam to receive code
          </p>
        </a>
      </div>
      <div className="flex justify-center">
        <ImageComponent src={"/assets/gameplay.webp"} className=" w-full" />
      </div>

      <ImageComponent
        src={"/assets/beta/hero/left-tree.webp"}
        className="absolute left-0 top-24 h-[700px] z-50 lg:block hidden"
      />
      <ImageComponent
        src={"/assets/beta/hero/right-tree.webp"}
        className="absolute right-0 top-24 h-[700px] z-50 hidden lg:block"
      />
    </div>
  );
};

export default Hero;
