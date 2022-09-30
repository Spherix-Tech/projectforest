import React from "react";
import ImageComponent from "./ImageComponent";

function ClaimBetaCard({ title, text, social, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className=" flex items-center bg-black hover:bg-[#363333]  font-semibold justify-between rounded-2xl md:py-5 py-4 border-2 border-white ">
        <div className="flex flex-row items-center w-[80%]">
          <ImageComponent
            src="assets/beta/claim/quest-icon.svg"
            className="h-12 md:px-6 px-4"
          />
          <div className="flex flex-col items-start text-left">
            <h2 className="text-[#CAFF04] md:text-xl text-[13px] pb-2">
              {title}
            </h2>
            <p className=" text-[11px] md:text-base text-white">{text}</p>
          </div>
        </div>

        <ImageComponent
          src={"assets/beta/claim/" + social}
          alt="icon"
          className="md:h-12 h-10 md:px-6 px-4"
        />
      </div>
    </a>
  );
}

export default ClaimBetaCard;
