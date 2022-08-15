import React from "react";
import ImageComponent from "../shared/ImageComponent";

function EachPartner({ imageName }) {
  return (
    <ImageComponent
      src={"/assets/partners/" + imageName}
      className={
        imageName == "future-trees.png"
          ? " w-[8.2rem] h-[3rem] md:h-[4rem] md:w-[11rem]"
          : " w-[13rem] h-[2.3rem] xl:h-[3rem] md:w-[16rem]"
      }
    />
  );
}

export default EachPartner;
