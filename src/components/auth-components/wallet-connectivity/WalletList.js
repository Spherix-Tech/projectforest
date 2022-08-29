import React from "react";
import { getAllWalletListData } from "../../../services/data-files/WalletListData";
import ImageComponent from "../../shared/ImageComponent";

const walletData = getAllWalletListData();

function WalletList() {
  return (
    <div className="flex flex-col items-center">
      <div className="font-semibold text-[14px] md:text-[17px] lg:text-[24px] text-center lg:leading-8 leading-5 sm:pb-6 pb-3 px-6">
        Connect with one of our available wallet Providers or create a new one.
      </div>
      <div className=" bg-white bg-opacity-70 rounded-2xl cursor-pointer w-[70%]">
        {walletData.map((e, i) => {
          return (
            <div
              key={i}
              className="flex flex-row items-center sm:py-4 py-3 px-8 border-b-2"
            >
              <ImageComponent
                src={"/assets/wallet/" + e.icon}
                className=""
                alt={e.name}
              />

              <p className="px-2">{e.name}</p>
              <p className="flex justify-end w-full text-[10px] text-[#6D706F]">
                {e.text}
              </p>
            </div>
          );
        })}
        <p className="w-full text-center py-3 sm:py-4 text-sm">Show more options</p>
      </div>
    </div>
  );
}

export default WalletList;
