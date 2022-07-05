import Image from "next/image";
import React from "react";
import FooterLinks from "./footer-items/FooterLinks";
import Socials from "./footer-items/Socials";
import logo from "../../../public/assets/footer/logo-footer.svg";
import Newsletter from "./footer-items/Newsletter";

const Footer = () => {
  return (
    <div className="w-full h-unset z-10 flex flex-col items-center justify-start bg-footerBgColor py-10 px-36">
      <div className="w-full lg:pb-8 pb-0 m-auto flex-wrap flex flex-row items-start">
        <div className="lg:w-1/4 w-full flex flex-col">
          <div className="flex flex-row gap-2">
            <Image alt="Project Forest Logo" src={logo} />
            <h2 className="text-[35px] font-light">
              PROJECT <br></br>
              <span className="text-[48px] font-semibold">FOREST</span>
            </h2>
          </div>
          <Socials />
        </div>
        <div className="lg:w-2/4 flex-wrap hidden lg:flex flex-col items-start justify-center cursor-pointer pl-6">
          <FooterLinks />
        </div>
        <div className="lg:w-1/4 hidden lg:flex flex-col items-start justify-start">
          <Newsletter />
        </div>
      </div>
      <div className="w-full pt-6 flex flex-col items-center justify-center">
        <h5 className=" font-light cursor-pointer text-xl">
          All Rights Reserved 2021. By Project Forest
        </h5>
      </div>
    </div>
  );
};

export default Footer;
