import Image from "next/image";
import React from "react";
import nurture from "../../../public/assets/how-it-works/nurture.png";
import earn from "../../../public/assets/how-it-works/earn.png";
import upgrade from "../../../public/assets/how-it-works/upgrade.png";
import ContentCard from "./ContentCard";
import ImageComponent from "../shared/ImageComponent";

const HowItWorks = () => {
  return (
    <div className="bg-primary lg:px-60 px-6" id="how-it-works">
      <h2 className=" lg:text-[44px] text-[30px] font-bold py-8">How it works</h2>
      <div className="w-full flex flex-col">
        <div className="flex lg:flex-row flex-col-reverse justify-between">
          <ImageComponent
            src={"/assets/how-it-works/plant.png"}
            alt="plant"
            className="w-[236px] h-[280px] object-contain "
          />
          <ContentCard
            polygon= "polygon-1.svg"
            title="Plant"
            subtitle="your virtual tree"
            description="Purchase or Redeem your Virtual NFT Tree. Plant it in the app — Have it planted in the real world through our partner NGOs"
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-between ">
          <ContentCard
           polygon= "polygon-2.svg"
            title="Nurture"
            subtitle="it daily"
            description="Water your virtual NFT tree every day to keep it healthy and producing oxygen."
          />
          <Image
            src={nurture}
            alt="plant"
            width={"540px"}
            height={"370px"}
            objectFit={"contain"}
          />
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-between ">
          <Image
            src={earn}
            alt="plant"
            width={"288px"}
            height={"296px"}
            objectFit={"contain"}
          />
          <ContentCard
          polygon= "polygon-3.svg"
            title="Earn"
            subtitle="O2 tokens"
            description="Collect the oxygen that your plant generates in the form of O2 tokens regularly."
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-between pb-6 lg:pb-6 ">
          <ContentCard
           polygon= "polygon-4.svg"
            title="Upgrade"
            subtitle="your tree NFT"
            description="Use the O2 token to purchase fertilizers that upgrade your existing tree or purchase new trees to create your own virtual NFT forest."
          />
          <Image
            src={upgrade}
            alt="plant"
            width={"568px"}
            height={"468px"}
            objectFit={"contain"}
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
