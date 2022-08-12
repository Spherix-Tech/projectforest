import React, { useState } from "react";
import ImageComponent from "../shared/ImageComponent";

const FAQAccordion = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    
    <div className="w-full py-1 border-b-[1px] border-dashed border-b-[#666] border-opacity-50">
      <div
        className={
          "flex flex-row w-full cursor-pointer justify-between bg-opacity-40 p-4 pl-0"
        }
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex flex-row gap-3 items-center">
          <ImageComponent
            src="/assets/dot-icon.png"
            alt="Project Forest"
            className="h-2"
          />
          <h2 className=" text-[15px] lg:text-[18px] text-textTitle">
            {question}
          </h2>
        </div>
        <p className=" text-textTitle text-[25px]">{isActive ? "-" : "+"}</p>
      </div>
      {isActive && (
        <div className=" flex flex-row justify-between py-4">
          <div className=" pl-4 pr-8 text-xs text-textTitle">{answer}</div>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;

