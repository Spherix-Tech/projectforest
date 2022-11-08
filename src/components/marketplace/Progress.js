import React from "react";

const Progress = ({
  leading,
  trailing,
  current,
  max,
  color = "#f5d77b",
  hideMax = false,
}) => {
  const percentage = (current / max) * 100;
  return (
    <div className="flex items-center gap-8">
      <h6 className="flex md:w-[10%] text-[15px]">{trailing}</h6>
      <div className="text-center bg-[#e6e6e6] relative flex-grow md:flex md:w-[75%] items-center justify-center rounded-sm z-20">
        <div
          className="absolute top-0 left-0 h-full rounded-sm -z-10"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
        <p className="text-xs font-light">
          {current}
          {hideMax ? "" : `/${max}`}
        </p>
      </div>
      {leading}
    </div>
  );
};

export default Progress;
