import React, { useState, useMemo } from "react";
import MobileContentCard from "./MobileContentCard";

const MobileHowItWorks = ({ howItWorksItemsList }) => {
  const [selectedTitle, setselectedTitle] = useState(
    howItWorksItemsList[0].boldTitle + howItWorksItemsList[0].normalTitle
  );
  const onDateSelection = (selectedObjTitle) => {
    setselectedTitle(selectedObjTitle);
  };

  const memoisedSelectedTitle = useMemo(() => {
    return selectedTitle;
  }, [selectedTitle]);

  return (
    <div>
      {howItWorksItemsList.map(
        ({ boldTitle, normalTitle, imageName, description }, index) => {
          return (
            <div key={normalTitle}>
              <MobileContentCard
                index={index}
                activeStatus={
                  boldTitle + normalTitle == memoisedSelectedTitle
                    ? true
                    : false
                }
                boldTitle={boldTitle}
                normalTitle={normalTitle}
                imageName={imageName}
                description={description}
                onDateSelection={onDateSelection}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default MobileHowItWorks;
