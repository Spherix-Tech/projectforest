import React from "react";
import ContentCard from "./ContentCard";
import ImageComponent from "../shared/ImageComponent";


const HowItWorks = ({reference}) => {


  return (
    <div
      className="bg-primary lg:px-60 px-6 how-section"
      id="how-it-works" ref={reference} 
    >
      <h3 className=" lg:text-[44px] text-[30px] font-semibold py-8 text-white">
        How it works
      </h3>
      <div className="w-full flex flex-col">
        <div className="flex lg:flex-row flex-col-reverse justify-between ">
          <div className="container-how">
            <ImageComponent
              src={"/assets/how-it-works/plant.png"}
              alt="plant"
              className="lg:pl-6 lg:h-unset h-[250px] object-contain  mt-5 lg:mt-0"
            />
          </div>
          <ContentCard
            polygon="polygon-1.svg"
            title="Plant"
            subtitle="your virtual tree"
            description="Purchase or Redeem your Virtual NFT Tree. Plant it in the app — Have it planted in the real world through our partner NGOs"
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-between ">
          <ContentCard
            polygon="polygon-2.svg"
            title="Nurture"
            subtitle="it daily"
            description="Water your virtual NFT tree every day to keep it healthy and producing oxygen."
          />
          <div className="container-how">
            <ImageComponent
              src={"/assets/how-it-works/nurture.png"}
              alt="plant"
              className="lg:pr-10 h-[250px] lg:h-unset object-contain  mt-5 lg:mt-0"
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-between ">
          <div className="container-how">
            <ImageComponent
              src={"/assets/how-it-works/earn.png"}
              alt="plant"
              className="lg:pl-6 h-[250px] lg:h-unset object-contain mt-5 lg:mt-0"
            />
          </div>
          <ContentCard
            polygon="polygon-3.svg"
            title="Earn"
            subtitle="O2 tokens"
            description="Collect the oxygen that your plant generates in the form of O2 tokens regularly."
          />
        </div>
        <div className="flex lg:flex-row flex-col justify-between pb-6 lg:pb-20 ">
          <ContentCard
            polygon="polygon-4.svg"
            title="Upgrade"
            subtitle="your tree NFT"
            description="Use the O2 token to purchase fertilizers that upgrade your existing tree or purchase new trees to create your own virtual NFT forest."
          />
          <div className="container-how flex flex-col justify-center items-center w-full">
            <ImageComponent
              src={"/assets/how-it-works/upgrade.png"}
              alt="plant"
              className="lg:pl-32  lg:h-[350px] h-[250px] object-contain  mt-5 lg:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;