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

export default function AboutUs() {
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

              <div className="section-spacing relative">
                <h1>
                  <PageGradientTitle title="About Us" className="uppercase" />
                </h1>
                <p className="page-description mt-4">
                  Project Forest was established with a simple but realistic
                  mission of restoring the Earth&apos;s environment while
                  rewarding users with a unique gameplay experience as well as
                  incentives for investing their time to use the app. To
                  accomplish this mission, we required a team of self-driven and
                  sophisticated individuals who would work toward realizing our
                  dream of a sustainable planet by incorporating technological
                  innovations. In order to achieve this, the founding team took
                  aboard individuals who were not only talented but also
                  believed in the true potential of Project Forest&apos;s
                  vision.
                </p>
                <p className="page-description mt-4">
                  Through the adoption of Web3 principles in Project Forest, we
                  believe we can reforest our planet and achieve sustainability
                  in the broader global environment while working toward
                  tackling the climate crisis.
                </p>

                <div className="flex justify-between items-center flex-col-reverse md:flex-row mt-[2rem] md:mt-[5rem] md:gap-[4rem] gap-[2rem] ">
                  <div className=" bg-[#434343] bg-opacity-10 rounded-2xl mt-6 md:mt-0">
                    <ImageComponent
                      src="/assets/about-us/mission.png"
                      className="w-full h-[255px]"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center md:justify-start items-center md:items-start">
                    <div className="w-full ">
                      <h2>
                        <PageGradientTitle
                          title="Mission"
                          className="uppercase"
                        />
                      </h2>
                    </div>
                    <p className="page-description mt-4">
                      We aim to tackle the climate crisis and address the
                      energy-consumption concerns surrounding blockchain
                      technology by introducing a unique Game-Fi model titled
                      &apos;Grow2Earn&apos; that incentivizes and facilitates
                      crowdsourced reforestation efforts through in-app
                      activities.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center flex-col md:flex-row mt-[2rem] md:mt-[5rem] md:gap-[4rem] gap-[2rem] ">
                  <div className="flex-1 flex flex-col justify-center md:justify-start items-center md:items-start">
                    <div className="w-full ">
                      <h3>
                        <PageGradientTitle
                          title="Vision"
                          className="uppercase"
                        />
                      </h3>
                    </div>
                    <p className="page-description mt-4">
                      “To be the pioneers that introduce real-world ecological
                      utility to the blockchain revolution by bridging the gap
                      between technology and environmentalism.”
                    </p>
                    <p className="page-description mt-4">
                      This reflects our ambition to be the breakthrough in Web3
                      technology that introduces sustainable NFTs with
                      eco-friendly utilities. These NFTs will provide new and
                      sustainable use cases to the De-Fi space whilst promoting
                      our commitment to improve the environment through
                      reforestation.
                    </p>
                  </div>
                  <div className=" bg-[#434343] bg-opacity-10 rounded-2xl">
                    <ImageComponent
                      src="/assets/about-us/vision.png"
                      className="w-full h-[255px]"
                    />
                  </div>
                </div>
                {/* <div className="border-dashed h-[10px] border-t-[2px] md:mt-16 mt-12 border-[#434343] border-opacity-10"></div> */}
                {/* <Team /> */}
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
