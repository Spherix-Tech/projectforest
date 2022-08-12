import Head from "next/head";
import Navbar from "../../src/components/navbar/Navbar";
import Hero from "../../src/components/hero/Hero";
import Footer from "../../src/components/footer/Footer";
import HowItWorks from "../../src/components/how-it-works/HowItWorks";
import MailingList from "../../src/components/mailing-list/MailingList";
import Reforestation from "../../src/components/reforestation/Reforestation";
import NFTSlider from "../../src/components/NFT/NFTSlider";
import Roadmap from "../../src/components/roadmap/Roadmap";
import Token from "../../src/components/token/Token";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { gsap, Power3 } from "gsap";
import PageGradientTitle from "../../src/components/shared/PageGradientTitle";

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
      </Head>
      <main>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="full-page-bg-img">
              <Navbar />

              <div className="section-spacing relative">
                <PageGradientTitle title="About Us" className="uppercase" />
                <p className="page-description mt-4">
                  Project Forest was established with a simple but realistic
                  mission: to restore the Earth’s environment. At Project
                  Forest, we all come to work every day because we want to solve
                  the biggest crisis humanity has ever faced. We believe that
                  through Project Forest, we can reforest our planet and achieve
                  sustainability in the broader global environment and resolve
                  the climate crisis whilst incorporating the principles of
                  Web-3 technology amidst the widespread adoption of blockchain
                  technology.
                  <br />
                  <br />
                  To achieve this feat, we assembled a well-rounded team of
                  nature enthusiasts and environmentalists who could guide, take
                  charge and put together this project that introduces the
                  concept of environmentalism to the Web-3 space whilst securing
                  sustainability and carbon neutrality and simultaneously
                  rewards players for their time invested in enjoying the game.
                  <br />
                  <br />
                  Project Forest is a Web3 lifestyle app built from the ground
                  up with social-fi and game-fi elements. Each time a virtual
                  plant is minted as an NFT by a player in Project Forest, a
                  percentage of the proceeds is donated to one of our partnered
                  NGOs who will then use these proceeds to plant real-life trees
                  in areas that need reforestation measures. This enables users
                  to have a positive impact on the environment through the
                  NFT-enabled ecosystem of Project Forest.
                </p>

                <PageGradientTitle
                  title="Mission"
                  className="mt-[2rem] md:mt-[3rem] uppercase"
                />
                <p className="page-description mt-4">
                  Project Forest is a Web-3 project with an initiative to
                  reforest trees worldwide and improve the environment. Project
                  Forest aims to be the world’s first Grow2Earn NFT mobile game
                  that positively impacts Earth’s environment and be the
                  next-generation NFT project that introduces the concept of
                  De-Fi and Grow2Earn to the Web3 space.
                </p>

                <PageGradientTitle
                  title="Vision"
                  className="mt-[2rem] md:mt-[3rem] uppercase"
                />
                <p className="page-description mt-4">
                  We envision ourselves to be the pioneers that introduce
                  real-world ecological utility to the blockchain revolution by
                  bridging the gap between technology and environmentalism. We
                  see ourselves as the breakthrough to the Web-3 space that
                  introduces NFTs with real-world utilities which promote
                  reforestation and provide new and sustainable use cases with a
                  greater utility to the De-Fi space.
                </p>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
