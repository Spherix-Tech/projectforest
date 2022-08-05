import { useState, useEffect } from "react";

const ContentCard = ({ item, isActiveCard, onItemSelection }) => {
  const [selectedStatus, setSelectedStatus] = useState(isActiveCard);
  const selectCardItem = (cardItem) => {
    onItemSelection(cardItem);
    setSelectedStatus(!isActiveCard);
  };
  useEffect(() => {
    setSelectedStatus(isActiveCard);
  }, [isActiveCard]);
  return (
    <div
      className={
        "flex cursor-pointer flex-col justify-start items-start text-textTitle " +
        (selectedStatus ? " activeCard" : "")
      }
      onClick={() => selectCardItem(item)}
    >
      <div>
        <h1 className="font-bold text-[14px] lg:text-[20px] ">
          {item.boldTitle}
          <span className="text-[14px] lg:text-[19px] font-light">
            {item.normalTitle}
          </span>
        </h1>
      </div>
      <div className="font-light text-[14px] pt-2">{item.description}</div>
    </div>
  );
};

export default ContentCard;
