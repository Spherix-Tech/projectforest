import { getAllNavbarData } from "./data-files/navbarData";
import { getAllSocialsData } from "./data-files/socialsData";
import { getAllReforestationData } from "./data-files/reforestationData";
import { getAllNftData } from "./data-files/NFTData";
import { getAllRoadmapData } from "./data-files/roadmapData";

export const getDataBySectionName = (sectionName) => {
  let DataArr = [];
  if (sectionName === "socials") {
    DataArr = getAllSocialsData();
  } else if (sectionName === "navbar") {
    DataArr = getAllNavbarData();
  } else if (sectionName === "reforestation") {
    DataArr = getAllReforestationData();
  } else if (sectionName === "nft") {
    DataArr = getAllNftData();
  } else if (sectionName === "roadmap") {
    DataArr = getAllRoadmapData();
  }
  return DataArr;
};
