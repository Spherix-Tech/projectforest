import React from "react";
function NFTPageDottedImageBox({ src, alt, title, className = "", onClick }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={
          className +
          " flex justify-center items-center rounded-[20px] border-dashed border border-[#70707082] w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] xl:w-[260px] xl:h-[260px] p-[1rem]"
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
        <p className="text-labelTextColor font-normal text-sm">{title}</p>
      </div>
    </div>
  );
}

export default NFTPageDottedImageBox;
