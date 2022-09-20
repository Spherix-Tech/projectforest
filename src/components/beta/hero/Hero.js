import React from "react";
import ImageComponent from "../../shared/ImageComponent";

const Hero = () => {
  return (
    <div className="relative max-h-[100vh] overflow-hidden flex flex-col gap-4 md:gap-7 items-center text-center px-8">
      <div className="pointer-events-none absolute top-0 bottom-0 w-full h-full custom-gradient z-100" />
      <h4 className=" text-2xl md:text-6xl text-[#3A3A3C] font-bold">
        Your Journey Starts Here!
      </h4>
      <p className=" text-primaryBlue text-base md:text-xl  ">
      Project Forest&apos;s closed beta is almost here. <br className="md:block hidden"></br> Be the first to experience Project Forest&apos;s &apos;grow-to-earn&apos; app and earn exclusive rewards for your participation.
      </p>
     <a href="#claim">
      <button className="md:w-64 w-44 py-4 btnBeta">
        <p>Register for Beta</p>
      </button>
      </a>

      <div className="flex justify-center">
        <ImageComponent
          src={"/assets/gameplay-new.png"}
          className="lg:w-[50%] w-full"
        />
      </div>

      <ImageComponent
        src={"/assets/beta/hero/left-tree.png"}
        className="absolute left-0 top-24 h-[700px] z-50 lg:block hidden"
      />
      <ImageComponent
        src={"/assets/beta/hero/right-tree.png"}
        className="absolute right-0 top-24 h-[700px] z-50 hidden lg:block"
      />
    </div>
  );
};

export default Hero;
