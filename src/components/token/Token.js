import React from "react";
import ImageComponent from "../shared/ImageComponent";

// const hoverAnimation = () => {
//   const t1 = gsap.timeline({ defaults: { ease: 'power1.out' } });
//   t1.to('#animate-image', { rotateZ: 5, duration: 0.1 });
//   t1.to('#animate-image', { rotateZ: -5, duration: 0.1 });
//   t1.to('#animate-image', { rotateZ: 5, duration: 0.1 });
//   t1.to('#animate-image', { rotateZ: -5, duration: 0.1 });
//   t1.to('#animate-image', { rotateZ: 0, duration: 0.1 });
// };

const Token = () => {
  return (
    <div
      className="w-full text-textTitle section-spacing py-12 panel"
      id="token"
    >
      <h3 className="section-title w-full lg:w-[55%] 2xl:w-[55%]">
        Making an impact that you can count
      </h3>
      <div className="flex lg:flex-row flex-col-reverse gap-0 md:gap-[4rem] lg:justify-between items-center">
        <div className="flex flex-col w-full lg:w-[55%] 2xl:w-[55%] py-6">
          <h3 className=" text-[#6FDE49] font-bold py-1 text-[20px]">
            Primary Token: LEAF
          </h3>
          <p className="text-[#919191] leading-5 pb-4">
            LEAF is the primary token of the Project Forest ecosystem and shall
            also act as the governance token for the project. Participants and
            players of Project Forest will be able to earn LEAF tokens through
            their Tree NFTs once they fulfill certain level conditions and
            through other in-app events and scenarios. Players can spend their
            LEAF tokens to mint new Tree NFTs and create a virtual forest.
          </p>

          <h3 className="text-[#59D0FF] font-bold py-1 text-[20px]">
            Utility Token: O2
          </h3>
          <p className="text-[#919191] leading-5">
            O2 (Oxygen) is the secondary token of the Project Forest ecosystem
            and acts as the utility token for the project. Tree NFTs and bigger
            forests generate O2 on a regular basis as long as they are watered.
            Players can spend O2 to purchase consumables that help to grow and
            upgrade the level of their Tree NFTs.
          </p>
        </div>
        <div className=" mt-10 lg:mt-0">
          <ImageComponent
            src="/assets/token/token.png"
            alt="Project Forest Token"
            className="w-[18rem] md:w-[25rem] lg:w-[30rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Token;
