import React from "react";
import Hero from "./hero/Hero";
import Benefits from "./benefits/benefits";
import Timeline from "./timeline/Timeline";
import ImageComponent from "../shared/ImageComponent";

function BetaComponent() {
  return (
    <div className="">
      <Hero />
      {/* <ImageComponent
        src={"/assets/beta/hero/left-tree.png"}
        className="absolute left-0 top-44 h-[700px]"
      />
        <ImageComponent
        src={"/assets/beta/hero/right-tree.png"}
        className="absolute right-0 top-44 h-[700px]"
      /> */}
      <Benefits />
      <Timeline />
    </div>
  );
}

export default BetaComponent;
