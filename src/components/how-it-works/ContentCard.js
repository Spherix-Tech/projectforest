
import React from "react";

const ContentCard = ({ title, subtitle, description, polygon }) => {
  return (
    <div className="flex flex-col justify-center lg:w-2/4 w-full pt-6 lg:pt-0">
      <div className="flex flex-row items-center gap-2">
        <img src={"/assets/how-it-works/" + polygon} className="h-9" />

        <h2 className="lg:text-[35px] text-[25px] font-bold whitespace-nowrap">
          {title} <span className="font-medium">{subtitle}</span>
        </h2>
      </div>
      <p className="text-sm py-4 text-[#ACACAC] lg:w-3/4 w-full px-12 lg:px-0">{description}</p>
    </div>
  );
};

export default ContentCard;
