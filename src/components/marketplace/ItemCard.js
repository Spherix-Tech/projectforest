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
    <div className="flex flex-col gap-[2px] mb-2 text-[#3A3A3C]">
      <div className="flex items-center flex-col bg-[#f8fcfa] p-3 rounded-md">
        <h2 className="font-medium">{title}</h2>
        <ImageComponent
          src={src}
          className="h-28 cursor-pointer"
          onClick={() => setShowDetails((prev) => !prev)}
        />
        <p className="text-sm mb-3">ID: {id}</p>
        <div className="grid grid-cols-3 gap-4 w-full text-center text-xs text-[#404040]">
          <p className="bg-[#dcdfdd] rounded-md py-1 px-2">Mint {mint}</p>
          <p className="bg-[#dcdfdd] rounded-md py-1 px-2">Age {age}</p>
          <p className="bg-[#dcdfdd] rounded-md py-1 px-2">Lv. {level}</p>
        </div>
      </div>
      <div className="flex items-center flex-col bg-[#f8fcfa] p-3 rounded-md">
        <button className="bg-[#f5d77b] hover:bg-[#e4c76f] font-medium flex items-center justify-center w-full py-2 rounded-md">
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
          <div className="full-page-bg-img absolute top-0 left-0 py-6 px-4 w-full h-full z-10000">
            <button
              className="flex mb-4 items-center gap-1 font-semibold text-[#3A3A3C] -mt-[4px]"
              onClick={() => setShowDetails((prev) => !prev)}
            >
              <ImageComponent
                src="/assets/marketplace/back.svg"
                className="h-4"
              />
              Back
            </button>
            <div className="bg-[#ffffff] py-6 px-4 rounded-md">
              <h1 className="text-3xl font-semibold pb-4">{title}</h1>
              <div className="flex w-full h-full md:flex-row flex-col">
                <div className="flex flex-col md:w-2/5 w-full">
                  <div className="grid grid-cols-3 gap-4 text-xs text-center font-light mt-6">
                    <p className="bg-[#e1e1e1] rounded-md py-2">{area}</p>
                    <p className="bg-[#e1e1e1] rounded-md py-2">{rarity}</p>
                    <p className="bg-[#e1e1e1] rounded-md py-2">{rarity}</p>
                  </div>
                  <ImageComponent src={src} />
                </div>
                <div className="flex px-4 flex-col flex-grow -mt-[23px]">
                  <div className="flex justify-between items-center">
                    <h2 className="text-[17px] -mb-2 font-semibold">
                      Attributes
                    </h2>
                    <h3 className="text-xs bg-[#eaeaea] py-2 px-4 font-light rounded-md">
                      Rating: {rating}
                    </h3>
                  </div>
                  <div className="flex flex-col py-6 px-8 my-4 bg-[#f7f7f7] rounded-sm gap-6">
                    <Progress
                      trailing="Lv.1"
                      leading={
                        <h6 className="md:w-[10%] text-[15px]">Lv.30</h6>
                      }
                      current={1}
                      max={30}
                    />
                    <Progress
                      trailing="Mint"
                      leading={
                        <h6 className="md:w-[10%] text-[15px]">Seeds</h6>
                      }
                      current={0}
                      max={2}
                    />
                    <LifeProgress current={0} />
                  </div>
                  <div className="flex flex-col py-6 px-8 my-4 bg-[#f7f7f7] rounded-sm gap-6">
                    <Progress
                      trailing="O2 Output"
                      leading={
                        <button className="bg-[#bcedab] md:w-[10%] border border-[#d7dd87] py-[2px] text-xs rounded-md">
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
                        <button className="bg-[#bcedab] md:w-[10%] border border-[#d7dd87] py-[2px] text-xs  rounded-md">
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
                        <button className="bg-[#bcedab] md:w-[10%] border border-[#d7dd87] py-[2px] text-xs rounded-md">
                          More
                        </button>
                      }
                      current={119}
                      max={600}
                      color="#84c4ce"
                      hideMax
                    />
                  </div>
                  <button className="bg-[#f5d77b] hover:bg-[#e4c76f]  md:text-2xl font-medium flex items-center justify-center w-full py-2 my-5 rounded-md mb-10">
                    <ImageComponent
                      src="/assets/hero/o2.svg"
                      className="h-7 mr-3 rounded-full"
                    />
                    {price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemCard;
