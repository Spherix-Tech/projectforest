import React from "react";
import {getDataBySectionName} from '../../../services/dataService'

const DataArr = getDataBySectionName("socials");

const Socials = () => {
  return (
    <div className="w-full flex flex-row pt-8">
      {DataArr.map(({ icon, href, key }) => (
        <div key={key} className="mr-2">
          <a href={href} target="_blank" rel="noreferrer">
            <img alt="ankots" src={icon} className="" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
