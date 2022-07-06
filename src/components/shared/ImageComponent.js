import React from "react";
function ImageComponent({ src, alt, className = "", onClick }) {
  return <img src={src} alt={alt} className={className} onClick={onClick} />;
}

export default ImageComponent;