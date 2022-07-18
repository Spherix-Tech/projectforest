import Head from "next/head";
import Navbar from "../src/components/navbar/Navbar";
import Hero from "../src/components/hero/Hero";
import Footer from "../src/components/footer/Footer";
import HowItWorks from "../src/components/how-it-works/HowItWorks";
import MailingList from "../src/components/mailing-list/MailingList";
import Reforestation from "../src/components/reforestation/Reforestation";
import NFTSlider from "../src/components/NFT/NFTSlider";
import Roadmap from "../src/components/roadmap/Roadmap";
import Token from "../src/components/token/Token";
import ImageComponent from "../src/components/shared/ImageComponent";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
import Scrollbar from "smooth-scrollbar";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  //  ScrollTrigger.scrollerProxy("body", {
  //    scrollTop(value) {
  //      if (arguments.length) {
  //        bodyScrollBar.scrollTop = value;
  //      }
  //      return bodyScrollBar.scrollTop;
  //    }
  //  })

  var options = {
    damping: 0.07,
  };
  const Scroll = () => {
    useEffect(() => {
      Scrollbar.init(document.body, options);
    }, []);
    return null;
  };
  return (
    <div>
      <Head>
        <title>Project Forest</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="scrolling">
        <Navbar />
        <Scroll />
        <div data-aos="fade-up">
          {/* Hero Section */}
          <Hero />

          {/* How It Works Section */}
          <ImageComponent src={"/assets/trees-bg.png"} />
          <HowItWorks />
        </div>

        {/* NFT Slider Section */}
        <NFTSlider />

        {/* Token Section */}
        <Token />

        {/* Roadmap Section */}
        <Roadmap />

        {/* Reforestation Section */}
        <Reforestation />

        {/* Newsletter Section */}
        <MailingList />

        <Footer />
      </main>
    </div>
  );
}
