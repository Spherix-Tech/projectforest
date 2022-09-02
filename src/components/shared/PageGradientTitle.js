import React from "react";
function PageGradientTitle({ title, className = "" }) {
  return <h2 className={"title-gradient uppercase " + className}>{title}</h2>;
}

export default PageGradientTitle;
