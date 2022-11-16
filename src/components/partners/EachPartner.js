import React from "react";
import ImageComponent from "../shared/ImageComponent";

function EachPartner({ imageName }) {
  return (
    <ImageComponent
      src={"/assets/partners/" + imageName}
      className={
        imageName == "future-trees.webp"
          ? " w-[8.2rem]  md:w-[11rem]"
          : " w-[13rem]  md:w-[16rem]"
      }
    />
  );
}

export default EachPartner;
