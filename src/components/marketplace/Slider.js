import React from "react";

const Slider = ({ min, max, onChange, value }) => {
  return (
    <div className="bg-white rounded-md p-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xs">{min}</h1>
        <h1 className="text-xs">{max}</h1>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        className="slider w-full"
        onChange={onChange}
      />
    </div>
  );
};

export default Slider;
