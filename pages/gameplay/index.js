import Head from "next/head";
import Navbar from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/Footer";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { gsap, Power3 } from "gsap";
import PageGradientTitle from "../../src/components/shared/PageGradientTitle";
import ImageComponent from "../../src/components/shared/ImageComponent";
import { getHowItWorksData } from "../../src/services/data-files/howItWorksData";
import GameplayHowItWorks from "../../src/components/how-it-works/GameplayHowItWorks";
import GameplayImageCard from "../../src/components/shared/GameplayImageCard";
const howItWorksItemsList = getHowItWorksData("homepage");

export default function Gameplay() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    // let smoother = ScrollSmoother.create({
    //   wrapper: '#smooth-wrapper',
    //   content: '#smooth-content',
    //   smooth: 2,
    //   smoothTouch: 0.1,

    // });

    gsap.fromTo("#home", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".how-section",
      {
        opacity: 0,
        y: 500,
      },
      {
        opacity: 1,
        duration: 3,
        ease: Power3.easeInOut,
        y: 0,
        // scrollTrigger: {
        //   trigger: "#how-it",
        //   start: "top top",
        //   end: "bottom center",
        //   scrub: true,
        // }
      }
    );
  }, []);

  return (
    <div>
      <Head>
        <title>Project Forest</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <title>Sustainability-Focused Grow to Earn NFTs | Project Forest</title>
        <meta
          name="title"
          content="Sustainability-Focused Grow to Earn NFTs | Project Forest"
        />
        <meta
          name="description"
          content="Project Forest is a collection of sustainability-focused NFTs that let you make a positive impact on the environment through its grow to earn web3 app."
        />
        <meta
          property="og:image"
          content="https://ankots-public-assets.s3.ap-southeast-1.amazonaws.com/project-forest-meta-image.webp"
          key="ogimage"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://projectforest.io/" />
        <meta
          property="og:title"
          content="Sustainability-Focused Grow to Earn NFTs | Project Forest"
        />
        <meta
          property="og:description"
          content="Project Forest is a collection of sustainability-focused NFTs that let you make a positive impact on the environment through its grow to earn web3 app."
        />

        <meta
          property="twitter:image"
          content="https://ankots-public-assets.s3.ap-southeast-1.amazonaws.com/project-forest-meta-image.png?v1"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://projectforest.io/" />
        <meta
          property="twitter:title"
          content="Sustainability-Focused Grow to Earn NFTs | Project Forest"
        />
        <meta
          property="twitter:description"
          content="Project Forest is a collection of sustainability-focused NFTs that let you make a positive impact on the environment through its grow to earn web3 app."
        />
      </Head>
      <main>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="full-page-bg-img">
              <Navbar />
              <div className="section-spacing">
                {/* Start Head section */}
                <div className="block md:hidden">
                  <PageGradientTitle
                    title={"GROW-to-EARN"}
                    className="uppercase"
                  />
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                  <div>
                    <PageGradientTitle
                      title={"GROW-to-EARN"}
                      className="hidden md:block uppercase"
                    />
                    <div className="">
                      <p className="page-description text-center md:text-left w-full md:w-[75%] 2xl:w-[50%]">
                        Project Forest is the first NFT project to introduce the
                        concept of GROW-to-EARN (G2E). As you nurture your
                        virtual tree, it grows in levels and naturally produces
                        more oxygen, subsequently yielding greater O2 tokens for
                        you to earn. After it reaches a certain level, you can
                        earn special LEAF tokens that are highly valuable and
                        can be used to purchase other Tree NFTs.
                        <br />
                      </p>
                    </div>
                  </div>

                  <div className="my-[2rem] md:py-0">
                    <ImageComponent
                      src={"assets/gameplay-mobile.png"}
                      alt="Gameplay"
                      className="min-w-[310px] h-[300px] sm:h-auto sm:min-w-[440px] md:min-w-[430px] lg:min-w-[470px] 2xl:min-w-[520px]"
                    />
                  </div>
                </div>
                {/* End Head Section */}
                <div className="my-[2rem] md:py-0">
                  <PageGradientTitle
                    title={"How it works"}
                    className="uppercase"
                  />
                </div>

                <GameplayHowItWorks howItWorksItemsList={howItWorksItemsList} />
                {/* Token Rewards Section */}
                <div className="py-[2rem] md:py-0">
                  <PageGradientTitle
                    title={"Token rewards"}
                    className="uppercase"
                  />
                </div>

                <div className="flex justify-between items-center flex-col md:flex-row mt-[2rem] md:mt-[5rem] 2xl:px-[6rem] gap-[2rem]">
                  <div className="flex-1 flex justify-start">
                    <GameplayImageCard
                      src={"assets/gameplay/oxygen-img.svg"}
                      fullHeightImage={false}
                      containerClassName="w-[280px] h-[255px] md:w-[375px] md:h-[350px] xl:w-[400px] xl:h-[375px]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center md:justify-start items-center md:items-start">
                    <div className="text-[#59D0FF] font-bold py-2 text-[20px]">
                      Utility Token: O2
                    </div>
                    <div className="page-description text-center md:text-start my-[1rem]">
                      O2 (Oxygen) is the secondary token of the Project Forest
                      ecosystem and acts as the utility token for the project.
                      Tree NFTs and bigger forests generate O2 on a regular
                      basis as long as they are watered. Players can spend O2 to
                      purchase consumables that help to grow and upgrade the
                      level of their Tree NFTs.
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center flex-col-reverse md:flex-row mt-[2rem] md:mt-[5rem] 2xl:px-[6rem] gap-[2rem]">
                  <div className="flex-1 flex flex-col justify-center md:justify-start items-center md:items-start">
                    <div className="text-[#6FDE49] font-bold py-1 text-[20px]">
                      Primary Token: LEAF
                    </div>
                    <div className="page-description text-center md:text-start my-[1rem]">
                      LEAF is the primary token of the Project Forest ecosystem
                      and shall also act as the governance token for the
                      project. Participants and players of Project Forest will
                      be able to earn LEAF through their Tree NFT once they
                      fulfill certain level conditions and through other in-app
                      events and scenarios. Players can spend their LEAF token
                      to mint new Tree NFTs and create a virtual Forest.
                    </div>
                  </div>
                  <div className="flex-1 flex justify-end">
                    <GameplayImageCard
                      src={"assets/gameplay/leaf-img.svg"}
                      fullHeightImage={false}
                      containerClassName="w-[280px] h-[255px] md:w-[375px] md:h-[350px] xl:w-[400px] xl:h-[375px]"
                    />
                  </div>
                </div>
                <div className="my-[2rem] md:py-0">
                  <PageGradientTitle
                    title={"Token PRODUCTION"}
                    className="uppercase my-[2rem] lg:mb-[5rem]"
                  />
                </div>

                <div className="flex justify-center items-center flex-col md:flex-row gap-[2rem] lg:gap-[10rem]">
                  <div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-[#666666] font-bold pb-4 text-[20px]">
                        Normal Mode
                      </div>
                    </div>
                    <div>
                      <GameplayImageCard
                        src={"assets/gameplay/oxygen-tree-img.svg"}
                        fullHeightImage={true}
                        containerClassName="w-[300px] h-[360px] md:w-[330px] md:h-[395px]"
                        levelValue={"Produce O2 Token"}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="text-[#666666] font-bold pb-4 text-[20px]">
                        Special Events
                      </div>
                    </div>
                    <div>
                      <GameplayImageCard
                        src={"assets/gameplay/leaf-tree-img.svg"}
                        fullHeightImage={true}
                        containerClassName="w-[300px] h-[360px] md:w-[330px] md:h-[395px]"
                        levelValue={"Produce LEAF Token"}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
