import React from "react";
function ImageComponent({ src, alt, className = "", onClick, loading = null }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      loading={loading}
    />
  );
}

export default ImageComponent;
