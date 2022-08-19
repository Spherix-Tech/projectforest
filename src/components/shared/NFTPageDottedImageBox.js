import React from "react";
function NFTPageDottedImageBox({ src, alt, className = "", onClick }) {
  return (
    <div
      className={
        className +
        " flex justify-center items-center border-dashed border border-[#707070]"
      }
    >
      <di>
        <img src={src} alt={alt} className={className} onClick={onClick} />
      </di>
    </div>
  );
}

export default NFTPageDottedImageBox;
