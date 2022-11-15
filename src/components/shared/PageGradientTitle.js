import React from "react";
function PageGradientTitle({ title, className = "" }) {
  return <p className={"title-gradient uppercase " + className}>{title}</p>;
}

export default PageGradientTitle;
