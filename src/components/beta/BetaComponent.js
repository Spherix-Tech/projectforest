import React, { useState } from "react";
import Hero from "./hero/Hero";
import Benefits from "./benefits/benefits";
import ClaimBeta from "./claim-beta/ClaimBeta";
import ImageComponent from "../shared/ImageComponent";
import Timeline from "./timeline/Timeline";
import GetStarted from "./get-started/GetStarted";
import PopupB from "../shared/PopupB";
import Link from "next/link";

function BetaComponent() {
  const [popup1Open, setPopup1Open] = useState(false);

  return (
    <div className="w-full relative">
      <Hero showPopup={() => setPopup1Open((prev) => !prev)} />
      <div className="bg-[#f3f1cb] w-full section-spacing">
        <GetStarted />
        <Timeline />
        {/* <ClaimBeta /> */}
        <Benefits />
      </div>
      <ImageComponent
        src={"/assets/beta/claim/left-tree.webp"}
        className="absolute left-0 2xl:bottom-[1000px] bottom-[1250px] h-[400px] z-50 lg:block hidden"
      />
      <ImageComponent
        src={"/assets/beta/claim/right-tree.webp"}
        className="absolute right-0 2xl:bottom-[1000px] bottom-[1250px] h-[400px] z-50 hidden lg:block"
      />
      <PopupB open={popup1Open} onClose={() => setPopup1Open((prev) => !prev)}>
        <div className="flex items-end py-2 relative">
          <div className="flex flex-col">
            <div className="flex gap-2 mb-3 items-center">
              <ImageComponent
                src="/assets/mail-icon.svg"
                className="object-contain h-6"
              />
              <h1 className="text-xl font-semibold pl-1">
                Account already exists!
              </h1>
            </div>
            <p className="w-[95%] text-sm">
              Forester, it seems you already have a Project Forest account.
              Please download the beta app and log in with your account details
              to start playing.
            </p>
          </div>
          <Link href="/beta" className="cursor-pointer" rel="noreferrer">
            <ImageComponent
              src="/assets/x-icon.svg"
              className="absolute top-0 right-0 h-3  cursor-pointer  object-contain"
              onClick={() => setPopup1Open(!popup1Open)}
            />
          </Link>
        </div>
      </PopupB>
    </div>
  );
}

export default BetaComponent;
