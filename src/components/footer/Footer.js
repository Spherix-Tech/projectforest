import React from "react";
import FooterLinks from "./footer-items/FooterLinks";
import Socials from "./footer-items/Socials";
import ImageComponent from "../shared/ImageComponent";

const Footer = () => {
  return (
    <div className="w-full h-unset z-10 flex flex-col bg-footerBgColor py-10 lg:px-36 px-6 footer-section">
      <div className="w-full lg:pb-8 pb-0 m-auto flex flex-row ">
        <div className="lg:w-2/4 w-full flex flex-col items-center lg:items-start">
          <div className="flex flex-row gap-2 items-center">
            <ImageComponent
              alt="Project Forest Logo"
              src="/assets/logo.png"
              className="h-[80px] lg:h-[100px]"
            />
            <h2 className="lg:text-[35px] text-[24px] font-light text-white lg:leading-9 leading-7">
              PROJECT <br></br>
              <span className="lg:text-[48px] text-[33px] font-semibold">
                FOREST
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <Socials />
          </div>
        </div>
        <div className="lg:w-2/4 hidden lg:flex flex-col  cursor-pointer pl-6">
          <FooterLinks />
        </div>
      </div>
      <div className="w-full pt-6 flex flex-col items-center justify-center">
        <h5 className=" font-light cursor-pointer lg:text-lg text-sm text-white text-opacity-60">
          All Rights Reserved 2021. By Project Forest
        </h5>
      </div>
    </div>
  );
};

export default Footer;
