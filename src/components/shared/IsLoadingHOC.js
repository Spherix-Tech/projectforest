import React, { useState } from "react";
import LoaderAnimation from "./LoaderAnimation";
export const IsLoadingHOC = (WrappedComponent, loadingMessage) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(false);
    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };
    console.log("isLoading", isLoading);
    return (
      <>
        {isLoading && <LoaderAnimation message={loadingMessage} />}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  }
  return HOC;
};

export default IsLoadingHOC;
