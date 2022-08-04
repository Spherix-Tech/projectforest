import React from "react";
import { getDataBySectionName } from "../../../services/dataService";
import ImageComponent from "../../shared/ImageComponent";

const DataArr = getDataBySectionName("socials");

const Socials = () => {
  return (
    <div className="w-full flex flex-row pt-8">
      {DataArr.map(({ icon, href }, i) => (
        <div key={i} className="mr-2">
          <a href={href} target="_blank" rel="noreferrer">
            <ImageComponent alt="ankots" src={icon} className="" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
