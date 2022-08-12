import React from "react";
import ImageComponent from "../shared/ImageComponent";

function EachPartner({ imageName }) {
  return (
    <ImageComponent
      src={"/assets/partners/" + imageName}
      className={
        imageName == "future-trees.png"
          ? " w-[10rem] h-[3.5rem] md:h-[4.5rem] md:w-[13rem]"
          : " w-[14rem] h-[2.7rem] md:w-[18rem]"
      }
    />
  );
}

export default EachPartner;
