import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { getDataBySectionName } from "../../services/dataService";
import { NavbarMenuItems } from "./Menu";

const DataArr = getDataBySectionName("navbar");

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div
      className="w-full flex flex-row  justify-between items-center py-8 lg:px-60 px-8"
    >
      <div className="flex flex-row gap-2 text-primary "   onClick={() => setToggleMenu(false)}>
        <Image alt="Project Forest Logo" src={logo} />
        <h2 className="text-[36px] font-light">
          PROJECT <br></br>
          <span className="text-[50px] font-semibold">FOREST</span>
        </h2>
      </div>
      <div className="lg:flex flex-row text-textTitle text-base font-semibold hidden ">
        {DataArr.map((e, i) => {
          return (
            <a key={i} href={e.link} className="flex flex-col px-3">
              <img src={e.icon_src} className="h-8 object-contain" />
              <h5 className=" whitespace-nowrap">{e.name}</h5>
            </a>
          );
        })}
      </div>
      <div className="lg:hidden flex">
        {toggleMenu ? (
          <RiCloseLine
            color="#3A3A3C"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#3A3A3C"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="menu-container">
            <div className="w-full px-4">
              <NavbarMenuItems
                classname="w-full h-max flex-col flex items-start  text-left whitespace-nowrap"
                items={DataArr}
                onClick={() => setToggleMenu(false)}
              />
              <Image alt="Project Forest Logo" src={logo} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
