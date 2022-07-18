import React from "react";
import ImageComponent from '../shared/ImageComponent'

const Token = () => {
  return (
    <div className="w-full text-textTitle lg:px-60 px-6 py-12 panel" id="token">
      <h3 className="lg:text-[35px] text-[30px] font-bold">Making an impact that you can count</h3>
<div className="flex lg:flex-row flex-col-reverse lg:justify-between items-center">
  <div className="flex flex-col lg:w-3/4 w-full py-6">
      <h3 className=" text-[#6FDE49] font-bold py-1 text-[20px]">Primary Token: LEAF</h3>
      <p className="text-[#919191] leading-5 pb-4">
        LEAF is the primary token of the Project Forest ecosystem and shall also
        act as the governance token for the project. Participants and players of
        Project Forest will be able to earn LEAF through their Tree NFT once it
        fulfills certain level conditions and through other in-app events and
        scenarios. Players can spend the LEAF token to mint new NFT Trees and
        create a virtual Forest.
      </p>

      <h3 className="text-[#59D0FF] font-bold py-1 text-[20px]">Utility Token: O2</h3>
      <p className="text-[#919191] leading-5">
        O2 or (Oxygen) is the secondary token of the Project Forest ecosystem
        and acts as the utility token in its environment. NFT Trees and larger
        Forests generate O2 on a regular basis as long as they are watered.
        Players can spend O2 to purchase consumables that help to grow and
        upgrade the level of their Tree NFTs.
      </p>
      </div>
      <div className=" mt-10 lg:mt-0">
        <ImageComponent src="/assets/token/token.png"
                alt="Project Forest Token" className="lg:flex hidden"/>
        <ImageComponent src="/assets/token/token-mobile.png"
                alt="Project Forest Token mobile" className=" lg:hidden flex w-96"/>
      </div>
      </div>
    </div>
  );
};

export default Token;