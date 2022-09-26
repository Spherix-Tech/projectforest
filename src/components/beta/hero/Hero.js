import React from "react";
import ImageComponent from "../../shared/ImageComponent";

const Hero = () => {
  return (
    <div className="relative max-h-[100vh] overflow-hidden flex flex-col gap-4 md:gap-7 items-center text-center px-8">
      <div className="pointer-events-none absolute top-0 bottom-0 w-full h-full custom-gradient z-100" />
      <h4 className=" text-2xl md:text-6xl text-[#3A3A3C] font-bold">
        Reforestation Starts Here
      </h4>
      <p className="  w-full md:w-3/4 lg:w-2/4 text-primaryBlue text-base md:text-xl ">
        Project Forest’s closed beta is now live! Be the first to experience
        Project Forest’s‘Grow-to-Earn’ app and earn exclusive rewards for your
        participation. Let’s rebuild the Earth’s environment one branch at a
        time.
      </p>
      <a href="#claim">
        <button className="md:w-64 w-44 py-4 btnBeta">
          <p>Play Beta Now</p>
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
