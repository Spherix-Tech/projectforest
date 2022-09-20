import React from "react";
import ClaimBetaCard from "../../shared/ClaimBetaCard";
import ImageComponent from "../../shared/ImageComponent";
import { DISCORD_LINK, TWITTER_LINK } from '../../../utilities/constants';
import Link from "next/link";

const ClaimBeta = () => {
  return (
    <div className="py-10 text-center flex flex-col items-center gap-5 relative  w-full" id="claim">
      <h2 className="text-xl md:text-4xl font-semibold text-labelTextColor -mb-4 md:-mb-2 md:pt-16 pt-3 ">
        Claim Your Beta Invite
      </h2>
      <p className="md:w-[60%] w-full text-labelTextColor text-opacity-80 md:text-lg text-sm ">
      Complete steps 1 & 2 below to and get a chance to receive an official invitation to Project Forest&apos;s closed beta on the 27th of September. Register now, there are only 1000 slots available for the closed beta. Shortlisted participants shall receive their invitation via email once both steps once both steps are completed.      
      </p>
      <h2 className="text-xl md:text-4xl font-semibold text-labelTextColor -mb-5 md:-mb-2 pt-5 md:pt-12">
        Step 1
      </h2>
      <p className=" w-full text-labelTextColor text-opacity-80 md:text-lg text-sm ">
        Register on the Project Forest website & connect your MetaMask wallet.
      </p>
      <Link href="/signup"> 
      <button className="flex md:gap-4 gap-2 justify-center items-center w-full md:w-3/4 md:py-6 py-5 btnBeta   ">
        <p>Register & Connect</p>
        <ImageComponent src="/assets/wallet/metamask.svg" />
        <p>MetaMask</p>
      </button>
      </Link>
      <h2 className="text-xl md:text-4xl font-semibold text-labelTextColor -mb-5 md:-mb-2 md:pt-12">
        Step 2
      </h2>
      <p className="w-full text-labelTextColor text-opacity-80 md:text-lg text-sm ">
      Complete any 1 of the 3 Beta Quests to be invited to our closed beta
      </p>
      <div className="md:w-3/4 w-full pb-4">
        <ClaimBetaCard
          title="Project Forest Beta Quest #1"
          text="Invite 3 people to Discord"
          social="discord.svg"
          href= {DISCORD_LINK}
        />
        <p className="text-labelTextColor font-bold md:py-6 py-3 md:text-lg text-sm">OR</p>
        <ClaimBetaCard
          title="Project Forest Beta Quest #2"
          text="Reach level 5 on Discord"
          social="discord.svg"
          href= {DISCORD_LINK}
        />
        <p className="text-labelTextColor font-bold md:py-6 py-3 md:text-lg text-sm">OR</p>
        <ClaimBetaCard
          title="Project Forest Beta Quest #3"
          text="Retweet 3 of Project Forest’s Tweets on Twitter"
          social="twitter.svg"
          href={TWITTER_LINK}
        />
      </div>
    </div>
  );
};

export default ClaimBeta;
