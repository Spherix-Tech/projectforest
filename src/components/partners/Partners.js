import { useState } from "react";
import { getAllPartners } from "../../services/data-files/PartnersData";
import EachPartner from "./EachPartner";

function Partners() {
  const [partnersData] = useState(getAllPartners());

  return (
    <div className="bg-[#FFFFFF] section-spacing">
      <div className="flex flex-col justify-start items-start">
        <div>
          <h2 className="section-title section-title-spacing">Partners</h2>
        </div>
        <div className="grid grid-cols-2 w-full items-center place-items-start lg:grid-cols-4 gap-[1.8rem] lg:gap-[4rem]">
          {partnersData &&
            partnersData.map((partnerObj) => {
              return (
                <div key={partnerObj.name}>
                  {" "}
                  <EachPartner imageName={partnerObj.defaultImageName} />{" "}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Partners;
