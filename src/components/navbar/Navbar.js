import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.png";
import { getDataBySectionName } from "../../services/dataService";

const DataArr = getDataBySectionName("navbar");

const Navbar = () => {
  return (
    <div className="w-full flex flex-row  justify-between items-center py-8 px-60">
      <div className="flex flex-row gap-2 text-primary">
        <Image alt="Project Forest Logo" src={logo}/>
        <h2 className="text-[36px] font-light">
          PROJECT <br></br>
          <span className="text-[50px] font-semibold">FOREST</span>
        </h2>
      </div>
      <div className="flex flex-row gap-8 text-textTitle text-base font-semibold">
        {DataArr.map((e, i) => {
          return (
            <a key={i} href={e.link} className="flex flex-col">
              <img src={e.icon_src} className="h-8 object-contain" />
              <h5>{e.name}</h5>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
