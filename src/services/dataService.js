import { getAllNavbarData } from "./data-files/navbarData";
import { getAllSocialsData } from "./data-files/socialsData";
import {getAllReforestationData} from './data-files/reforestationData'

export const getDataBySectionName = (sectionName) => {
    console.log(sectionName);
    let DataArr = [];
    if (sectionName === "socials") {
      DataArr = getAllSocialsData();
    } else if (sectionName === "navbar") {
      DataArr = getAllNavbarData();
    }
    else if (sectionName === "reforestation") {
      DataArr = getAllReforestationData();
    }
    return DataArr;
  };