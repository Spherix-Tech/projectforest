import React, { useState } from "react";
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { getDataBySectionName } from "../../services/dataService";
import { NavbarMenuItems } from "./Menu";
import ImageComponent from "../shared/ImageComponent";
import Link from "next/link";

const DataArr = getDataBySectionName("navbar");

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="w-full flex flex-row  justify-between items-center py-8 section-spacing">
      <Link href="/">
        <div
          className="cursor-pointer flex flex-row gap-2 text-primaryBlue items-center "
          onClick={() => setToggleMenu(false)}
        >
          <ImageComponent
            alt="Project Forest Logo"
            src={"/assets/logo.png"}
            className="h-[66px] lg:h-[100px]"
          />
          <h2 className="lg:text-[26px] text-[18px] lg:leading-[2rem] leading-6">
            PROJECT <br></br>
            <span className="lg:text-[37px] text-[25px] font-semibold">
              FOREST
            </span>
          </h2>
        </div>
      </Link>

      {/* Desktop/ Laptop Nav Items */}
      <div className="navscreen:flex flex-row text-textTitle font-semibold hidden ">
        {DataArr.map((e, i) => {
          return (
            <a
              key={i}
              href={e.link}
              className="flex items-center flex-col mx-2 px-3 hover:text-primary text-sm"
            >
              <div className="h-[50px] flex items-end w-[45px] justify-center">
                <ImageComponent
                  src={e.icon_src}
                  className="h-8 icon-hover object-contain mb-1 "
                />
              </div>
              <h5 className=" whitespace-nowrap">{e.name}</h5>
            </a>
          );
        })}
      </div>

      {/* Mobile Nav Menu */}
      <div className="navscreen:hidden flex">
        {toggleMenu ? (
          <RiCloseLine
            color="#3A3A3C"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenuFill
            color="#3A3A3C"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="menu-container">
            <div className="w-full px-4">
              <ImageComponent
                alt="Project Forest Logo"
                className="h-[66px] lg:h-[100px]"
                src={"/assets/logo.png"}
              />
              <NavbarMenuItems
                classname="w-full h-max flex-col flex items-start  text-left whitespace-nowrap"
                items={DataArr}
                onClick={() => setToggleMenu(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
