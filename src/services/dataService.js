import { getAllSocialsData } from "./data-files/socialsData";

export const getDataBySectionName = (sectionName) => {
    console.log(sectionName);
    let DataArr = [];
    if (sectionName === "socials") {
      DataArr = getAllSocialsData();
    // } else if (sectionName === "navbar") {
    //   DataArr = ();
    // } else if (sectionName === "footer") {
    //   DataArr = getAllStonesSlidesData();
    }
    return DataArr;
  };