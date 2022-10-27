import React from "react";
function NFTPageDottedImageBox({ src, alt, title, className = "", onClick }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={
          className +
          " flex justify-center items-center p-[0.5rem] sm:p-[1rem] rounded-[20px] border-dashed border border-white border-opacity-30 w-[105px] h-[105px] xs:w-[115px] xs:h-[115px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[200px] 2xl:w-[250px] 2xl:h-[250px] bg-white bg-opacity-10"
        }
      >
        <div className="h-full">
          <img
            src={src}
            alt={alt}
            className={className + " h-full"}
            onClick={onClick}
          />
        </div>
      </div>
      <div className="mt-3">
        <p className="text-white text-center font-normal text-xs md:text-sm">
          {title}
        </p>
      </div>
    </div>
  );
}

export default NFTPageDottedImageBox;
