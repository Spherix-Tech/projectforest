import React from "react";
import ImageComponent from "../shared/ImageComponent";

const LifeProgress = ({ current }) => {
  const left = current > 98 ? current - 2 : current;
  return (
    <div className="flex items-center w-full gap-2 relative my-6">
      <div className="text-center bg-[#f5d77b] relative flex-grow rounded-sm z-20 py-1">
        <p className="text-xs font-light">Growth</p>
        <p className="text-xs font-light -right-2 -bottom-4 absolute">30</p>
      </div>
      <div className="text-center bg-[#f5d77b] relative flex-grow rounded-sm z-20 py-1">
        <p className="text-xs font-light">Nature</p>
        <p className="text-xs font-light -right-2 -bottom-4 absolute">70</p>
      </div>
      <div className="text-center bg-[#f5d77b] relative flex-grow rounded-sm z-20 py-1">
        <p className="text-xs font-light">Senile</p>
        <p className="text-xs font-light -right-2 -bottom-4 absolute">100</p>
      </div>
      <div
        className="absolute -top-6 z-50 flex flex-col"
        style={{
          left: `${left}%`,
        }}
      >
        <p>{current}</p>
        <ImageComponent
          src="/assets/marketplace/level-orange.svg"
          className={`rotate-180 ${current > 9 ? null : "-translate-x-1"} `}
        />
      </div>
    </div>
  );
};

export default LifeProgress;
