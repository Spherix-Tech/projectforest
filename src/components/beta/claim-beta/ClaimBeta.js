import React from "react";
import ClaimBetaCard from "../../shared/ClaimBetaCard";
import ImageComponent from "../../shared/ImageComponent";
import { DISCORD_LINK, TWITTER_LINK } from '../../../utilities/constants';
import Link from "next/link";

const ClaimBeta = () => {
  return (
    <div className="py-10 text-center flex flex-col items-center gap-5 relative  w-full">
      <h2 className="text-xl md:text-4xl font-semibold text-labelTextColor -mb-4 md:-mb-2 md:pt-16 pt-3 ">
        Claim Your Closed Beta Invite
      </h2>
      <p className="md:w-[60%] w-full text-labelTextColor text-opacity-80 md:text-lg text-sm ">
      Complete the steps below to receive an exclusive invitation to test Project Forest’s closed beta on the 28th of September. Register now to receive 1 out of a limited 1000 beta keys to be distributed. Steps 1 & 2 are both mandatory, however Step 2 can be completed in any 1 of 3 different ways. Please ensure that the same address is used during the completion of both the steps.
      </p>
      <h2 className="text-xl md:text-4xl font-semibold text-labelTextColor -mb-5 md:-mb-2 pt-5 md:pt-12">
        Step 1
      </h2>
      <p className=" w-full text-labelTextColor text-opacity-80 md:text-lg text-sm ">
        Register on the Project Forest website & connect your MetaMask wallet.
      </p>
      <Link href="/signup"> 
      <button className="flex md:gap-4 gap-2 justify-center items-center rounded-2xl md:py-6 py-5 text-labelTextColor text-sm md:text-xl  font-semibold bg-[#C3CA84] w-full md:w-3/4 border-2 border-white shadow-[inset_0_-1px_16px_rgba(0,0,0,0.3)]  ">
        <p>Register & Connect</p>
        <ImageComponent src="/assets/wallet/metamask.svg" />
        <p>MetaMask</p>
      </button>
      </Link>
      <h2 className="text-xl md:text-4xl font-semibold text-labelTextColor -mb-5 md:-mb-2 md:pt-12">
        Step 2
      </h2>
      <p className="w-full text-labelTextColor text-opacity-80 md:text-lg text-sm ">
        Complete any of these 3 Quests to join our closed beta whitelist.
      </p>
      <div className="md:w-3/4 w-full pb-4">
        <ClaimBetaCard
          title="Beta Quest #1"
          text="Invite 3 people to Discord"
          social="discord.svg"
          href= {DISCORD_LINK}
        />
        <p className="text-labelTextColor font-bold md:py-6 py-3 md:text-lg text-sm">OR</p>
        <ClaimBetaCard
          title="Beta Quest #2"
          text="Reach level 5 on Discord"
          social="discord.svg"
          href= {DISCORD_LINK}
        />
        <p className="text-labelTextColor font-bold md:py-6 py-3 md:text-lg text-sm">OR</p>
        <ClaimBetaCard
          title="Beta Quest #3"
          text="Retweet 3 of Project Forest’s Tweets on Twitter"
          social="twitter.svg"
          href={TWITTER_LINK}
        />
      </div>
    </div>
  );
};

export default ClaimBeta;
