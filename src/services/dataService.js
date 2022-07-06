import { getAllNavbarData } from "./data-files/navbarData";
import { getAllSocialsData } from "./data-files/socialsData";
import {getAllReforestationData} from './data-files/reforestationData'
import { getAllNftData } from "./data-files/NFTData";

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
    else if (sectionName === "nft") {
      DataArr = getAllNftData();
    }
    return DataArr;
  };