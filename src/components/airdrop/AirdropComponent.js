import { getDataBySectionName } from "../../services/dataService";
import ImageComponent from "../shared/ImageComponent";
import AirdropSlider from "./slider/AirdropSlider";
import StartShapedStages from "./star-shaped-stages/StartShapedStages";
import StepsCard from "./steps-card/StepsCard";
const DataArr = getDataBySectionName("nft");
const referralLink = "https://projectforest.io/sharjeel/jdbcd54544654";

function AirdropComponent() {
  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
  };

  return (
    <div className="w-full relative">
      <div className="">
        <div className="flex justify-center items-center">
          <div className="flex m-auto flex-col w-[70%] max-w-[800px] 2xl:max-w-[70%] justify-center items-center gap-[8px]">
            <div className="flex justify-center items-center ">
              <ImageComponent
                src={"/assets/airdrop/main-three-images.png"}
                className="w-[90%] max-w-[850px]"
              />
            </div>
          </div>
        </div>
        <div className="mixed-colored-bg h-[25px] lg:h-[135px] mt-[-50px] lg:mt-[-145px] 2xl:mt-[-165px]">
          <ImageComponent src={"/assets/airdrop/mixed-background.svg"} />
        </div>
        <div className="section-spacing bg-[#EDF1CF]">
          <div className="flex m-auto flex-col w-[85%] md:w-[70%] max-w-[800px] 2xl:max-w-[70%] justify-center items-center gap-[8px]">
            <div className="flex flex-col justify-center items-center gap-[8px]">
              <div>
                <h1 className="text-[#3A3A3C] font-bold text-[1rem] md:text-[3rem] 2xl:text-[3.5rem]">
                  Reforestation Starts Here
                </h1>
              </div>
              <div className="text-[#055555] text-center 2xl:max-w-[720px]">
                <p className="text-[0.5rem] md:text-[1.2rem] 2xl:text-[1.5rem]">
                  Project Forest’s first round of public beta is currently live.
                  Participate in the Project Forest beta for free and earn
                  exclusive NFT rewards and more. Get started by creating an
                  account on the website and downloading the app on your iOS or
                  Android devices.
                </p>
                <p className="my-[1rem] text-[0.5rem] md:text-[0.8rem] 2xl:text-[1rem] font-light">
                  Closed beta is limited to 1000 player slots only. The
                  activation code will be sent to your email after registration.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center flex-col md:flex-row mt-[2.5rem] gap-[1rem] md:gap-[2.5rem] 2xl:[3.5rem]">
            <StepsCard
              className="bg-[#82B764]"
              number={1}
              mainTitle="Invite Friends"
              description="Complete registration on Project Forest website and receive your activation code via email."
            />
            <StepsCard
              className="bg-[#5FB4B6]"
              number={2}
              mainTitle="Invite Friends"
              description="Complete registration on Project Forest website and receive your activation code via email."
            />
            <StepsCard
              className="bg-[#EA8EA2]"
              number={3}
              mainTitle="Invite Friends"
              description="Complete registration on Project Forest website and receive your activation code via email."
            />
          </div>

          <div className="flex flex-col py-[2.5rem] gap-8 justify-center items-center">
            <div className="text-[#434343] text-2xl font-semibold">
              SpotLight : Tree NFT’s
            </div>
            <AirdropSlider DataArr={DataArr} />
          </div>

          <div className="flex justify-center flex-col items-center">
            <div>
              <h2 className="text-[#434343] font-medium text-2xl text-center">
                Bonus: Invite Friends to Claim NFT’s
              </h2>
            </div>
            <div className="w-full flex my-[2.5rem] flex-col md:flex-row justify-start items-center gap-4 md:gap-8">
              <div className="text-[#434343] text-xl font-medium whitespace-nowrap">
                Referral Link
              </div>
              <div className="w-full bg-[#E3E9BD] px-4 py-2 inline-flex justify-between items-center">
                <div className="text-[#307F91] text-[10px] md:text-base">
                  {referralLink}
                </div>
                <div className="cursor-pointer" onClick={copyReferralLink}>
                  <ImageComponent
                    src={"/assets/airdrop/copy-icon.svg"}
                    className="h-[20px] md:max-h-[32px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block my-[2.5rem]">
            <StartShapedStages />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirdropComponent;
