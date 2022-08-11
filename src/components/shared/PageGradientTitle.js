import React from "react";
function PageGradientTitle({ title, className = "" }) {
  return <h2 className={"title-gradient " + className}>{title}</h2>;
}

export default PageGradientTitle;
