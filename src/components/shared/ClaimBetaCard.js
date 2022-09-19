import React from "react";
import ImageComponent from "./ImageComponent";

function ClaimBetaCard({ title, text, social, href }) {
  return (
    <div className=" flex items-center bg-black font-semibold justify-between rounded-2xl md:py-5 py-4 border-2 border-white ">
        <div className="flex flex-row items-center">
      <ImageComponent src="assets/beta/claim/quest-icon.svg" className="h-12 md:px-6 px-4" />
      <div className="flex flex-col items-start">
        <h2 className="text-[#CAFF04] md:text-xl text-[15px] pb-2">{title}</h2>
        <p className="text-left text-[12px] md:text-base text-white">{text}</p>
      </div>
      </div>
      <a href={href} target="_blank" rel="noreferrer">
      <ImageComponent
        src={"assets/beta/claim/" + social}
        alt="icon"
        className="md:h-12 h-10 md:px-6 px-4"
      />
      </a>
    </div>
  );
}

export default ClaimBetaCard;
