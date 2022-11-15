import React, { useState, useEffect } from "react";
import ImageComponent from "../shared/ImageComponent";

const MobileContentCard = ({
  boldTitle,
  normalTitle,
  imageName,
  description,
  index,
  onDateSelection,
  activeStatus,
}) => {
  const [isActive, setIsActive] = useState(activeStatus);
  const selectDate = (selectedObjTitle) => {
    setIsActive(!isActive);
    onDateSelection(selectedObjTitle);
  };
  useEffect(() => {
    setIsActive(activeStatus);
  }, [activeStatus]);
  return (
    <div className="w-full py-1">
      <div
        className={
          "flex flex-row w-full justify-between bg-[#f9ffbc30] rounded-xl px-4 py-[0.6rem] gap-[0.7rem] "
        }
        onClick={() => selectDate(boldTitle + normalTitle)}
      >
        <div className="flex-col flex">
          {/* Numbring circle */}
          <div className="min-w-[31px] text-white h-[31px] rounded-full font-bold border-2 z-10 border-[#1D3C34] flex justify-center items-center bg-[#1D3C34]">
            <div className="mt-[10%]">{index + 1}</div>
          </div>
        </div>

        <div className="flex flex-row items-center w-[90%] text-[#1D3C34] justify-between">
          <p
            className={
              isActive ? "font-extrabold text-[16px]" : "font-bold text-[14px]"
            }
          >
            {boldTitle}
            {normalTitle}
          </p>
          <ImageComponent
            src={
              isActive
                ? "assets/how-it-works/arrow-up-icon.svg"
                : "assets/how-it-works/arrow-down-icon.svg"
            }
            alt="arrow icon"
            className="h-[13px]"
          />
        </div>
      </div>
      {/* {isActive && ( */}
      <div
        className={
          "flex flex-row justify-between pt-4 " +
          (isActive ? " block" : " hidden")
        }
      >
        <div className="px-4 py-2 w-full">
          <p className="text-textTitle pb-2 font-medium text-sm">
            {description}
          </p>
          <div className="flex justify-center items-center">
            <ImageComponent
              src={"/assets/how-it-works/" + imageName}
              alt="Grow to earn"
              className={"w-[260px] lg:h-[500px]"}
              loading={"eager"}
            />
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default MobileContentCard;
