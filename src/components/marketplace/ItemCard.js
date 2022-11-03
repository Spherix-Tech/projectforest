import React, { useState } from "react";
import ImageComponent from "../shared/ImageComponent";
import LifeProgress from "./LifeProgress";
import Progress from "./Progress";

const ItemCard = ({
  id,
  title,
  mint,
  age,
  level,
  src,
  price,
  area,
  o2Output,
  upgrade,
  withered,
  rating,
  rarity,
  show = false,
}) => {
  const [showDetails, setShowDetails] = useState(show);
  return (
    <div className="flex flex-col gap-[2px] mb-2">
      <div className="flex items-center flex-col bg-[#f8fcfa] p-3 rounded-md">
        <h2>{title}</h2>
        <ImageComponent
          src={src}
          className="h-28 cursor-pointer"
          onClick={() => setShowDetails((prev) => !prev)}
        />
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
          {price}
        </button>
      </div>
      {showDetails && (
        <>
          <div
            className="fixed w-screen h-screen top-0 z-100 left-0 cursor-pointer"
            onClick={() => setShowDetails((prev) => !prev)}
          />
          <div className="absolute top-0 left-0 py-6 px-4 w-full h-full max-h-screen rounded-md z-10000 bg-[#ffffff]">
            <h1 className="text-xl font-semibold">{title}</h1>
            <div className="flex w-full h-full md:flex-row flex-col">
              <div className="flex flex-col md:w-1/5 w-full">
                <div className="grid grid-cols-3 gap-4 text-xs text-center font-light mt-6">
                  <p className="bg-[#e1e1e1] rounded-md py-1">{area}</p>
                  <p className="bg-[#e1e1e1] rounded-md py-1">{rarity}</p>
                  <p className="bg-[#e1e1e1] rounded-md py-1">{rarity}</p>
                </div>
                <ImageComponent src={src} />
              </div>
              <div className="flex px-4 flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Attributes</h2>
                    <h3 className="text-xs bg-[#eaeaea] py-1 px-3 font-light rounded-md">
                      Rating: {rating}
                    </h3>
                  </div>
                  <div className="flex flex-col py-6 px-8 my-4 bg-[#f7f7f7] rounded-sm gap-6">
                    <Progress
                      trailing="Lv.1"
                      leading={<h6>Lv.30</h6>}
                      current={1}
                      max={30}
                    />
                    <Progress
                      trailing="Mint"
                      leading={<h6>Seeds</h6>}
                      current={0}
                      max={2}
                    />
                    <LifeProgress current={0} />
                  </div>
                  <div className="flex flex-col py-6 px-8 my-4 bg-[#f7f7f7] rounded-sm gap-6">
                    <Progress
                      trailing="O2 Output"
                      leading={
                        <button className="bg-[#bcedab] border border-[#d7dd87] text-sm px-4 rounded-md">
                          More
                        </button>
                      }
                      current={0}
                      color="#84c4ce"
                      max={25}
                      hideMax
                    />
                    <Progress
                      trailing="Upgrade"
                      leading={
                        <button className="bg-[#bcedab] border border-[#d7dd87] text-sm px-4 rounded-md">
                          More
                        </button>
                      }
                      current={500}
                      color="#84c4ce"
                      max={600}
                      hideMax
                    />
                    <Progress
                      trailing="Withered"
                      leading={
                        <button className="bg-[#bcedab] border border-[#d7dd87] text-sm px-4 rounded-md">
                          More
                        </button>
                      }
                      current={119}
                      max={600}
                      color="#84c4ce"
                      hideMax
                    />
                  </div>
                </div>
                <button className="bg-[#f5d77b] hover:bg-[#e4c76f] flex items-center justify-center w-full py-2 rounded-md mb-10">
                  <ImageComponent
                    src="/assets/hero/o2.svg"
                    className="h-7 mr-3 rounded-full"
                  />
                  {price}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemCard;
