import React from "react";
import ImageComponent from "../shared/ImageComponent";

function EachPartner({ imageName }) {
  return (
    <ImageComponent
      src={"/assets/partners/" + imageName}
      className="w-[12rem] h-[4rem] md:w-[16rem] md:h-[5.5rem]"
    />
  );
}

export default EachPartner;
