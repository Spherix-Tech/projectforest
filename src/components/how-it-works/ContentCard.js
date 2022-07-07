
import React from "react";

const ContentCard = ({ title, subtitle, description, polygon }) => {
  return (
    <div className="flex flex-col justify-center lg:w-2/4 w-full">
      <div className="flex flex-row items-center gap-2">
        <img src={"/assets/how-it-works/" + polygon} className="h-9" />

        <h2 className="text-[35px] font-bold whitespace-nowrap">
          {title} <span className="font-light">{subtitle}</span>
        </h2>
      </div>
      <p className="text-sm py-4 text-[#ACACAC] lg:w-3/4 w-full">{description}</p>
    </div>
  );
};

export default ContentCard;
