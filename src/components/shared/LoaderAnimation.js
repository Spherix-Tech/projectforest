import React from "react";
import ImageComponent from "./ImageComponent";

const LoaderAnimation = ({ message }) => {
  return (
    <div className="loader text-white bg-[#1b1919d6]">
      <div className="flex flex-col justify-center items-center gap-4 mt-[-5rem] lg:mt-[-10rem]">
        <div>
          <ImageComponent src={"/assets/loader/colored-loader.gif"} />
        </div>
        {message && (
          <div className="text-[20px] whitespace-nowrap font-semibold">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoaderAnimation;
