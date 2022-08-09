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
import { getDataBySectionName } from "../../src/services/dataService";
const DataArr = getDataBySectionName("nft");

export default function FAQ() {
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

              {/* NFT Slider Section */}
              <NFTSlider DataArr={DataArr} />

              {/* Newsletter Section */}
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
