import React from "react";
function GameplayImageCard({
  src,
  alt,
  containerClassName = "",
  fullHeightImage = false,
  levelValue = null,
}) {
  return (
    <div
      className={
        "flex justify-center flex-col items-center border-[13px] border-[#F6F4D6] rounded-[15%] bg-[#DED897] "
      }
    >
      <div
        className={
          "flex justify-center flex-col items-center " + containerClassName
        }
      >
        <img
          src={src}
          alt={alt}
          className={fullHeightImage ? " h-full w-full" : " h-[60%]"}
        />
      </div>

      {levelValue && (
        <p className="text-[#666666] font-normal pb-4 text-[20px]">
          {levelValue}
        </p>
      )}
    </div>
  );
}

export default GameplayImageCard;
