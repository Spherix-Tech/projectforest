import React from "react";
import ImageComponent from "../shared/ImageComponent";

const ItemCard = ({
  id,
  title,
  mint,
  age,
  level,
  src,
  area,
  o2Output,
  upgrade,
  withered,
  rating,
  rarity,
}) => {
  return (
    <div className="flex flex-col gap-[2px] mb-2">
      <div className="flex items-center flex-col bg-[#f8fcfa] p-3 rounded-md">
        <h2>{title}</h2>
        <ImageComponent src={src} className="h-28" />
        <p className="text-sm mb-3">ID: {id}</p>
        <div className="grid grid-cols-3 gap-4 w-full text-center text-xs text-[#404040]">
          <p className="bg-[#dcdfdd] rounded-md py-1">Mint {mint}</p>
          <p className="bg-[#dcdfdd] rounded-md py-1">Age {age}</p>
          <p className="bg-[#dcdfdd] rounded-md py-1">Lv. {level}</p>
        </div>
      </div>
      <div className="flex items-center flex-col bg-[#f8fcfa] p-3 rounded-md">
        <button className="bg-[#f5d77b] hover:bg-[#e4c76f] flex items-center justify-center w-full py-2 rounded-md">
          <ImageComponent
            src="/assets/hero/o2.svg"
            className="h-7 mr-3 rounded-full"
          />
          500000
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
