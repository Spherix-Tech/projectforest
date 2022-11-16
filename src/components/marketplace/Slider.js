import React from "react";

import ReactSlider from "react-slider";
import ImageComponent from "../shared/ImageComponent";

const Slider = ({ min, max, onChange, value }) => {
  return (
    <div className="bg-white rounded-md p-2 pb-7 mb-4 ">
      <div className="flex justify-between items-center">
        <h1 className="text-xs">{min}</h1>
        <h1 className="text-xs">{max}</h1>
      </div>
      <ReactSlider
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        renderThumb={(props, state) => (
          <div {...props} className="flex flex-col items-center translate-y-2">
            <ImageComponent
              src="/assets/marketplace/level.svg"
              className={``}
            />
            <p className="text-xs">{state.valueNow}</p>
          </div>
        )}
      />
    </div>
  );
};

export default Slider;
 