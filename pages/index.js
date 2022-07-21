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
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {ScrollToPlugin} from "gsap/dist/ScrollToPlugin";
import { gsap, Power3 } from "gsap";
import Scrollbar from "smooth-scrollbar";



export default function Home() {
 
  var options = {
    damping: 0.1,
  };

  let ScrollBar;
  // const Scroll = () => {
  //   useEffect(() => {
  //     Scrollbar.init(document.body, options);
  //   }, []);
  //   return null;
  // };

  useEffect(() => {


   ScrollBar = Scrollbar.init(document.body, options)
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);


    ScrollBar.setPosition(0, 0);
    ScrollBar.track.xAxis.element.remove();
    
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          ScrollBar.scrollTop = value;
        }
        return ScrollBar.scrollTop;
      }
    });
    
    ScrollBar.addListener(ScrollTrigger.update);
    

    gsap.fromTo("#home", {opacity: 0}, {opacity: 1, duration: 1});
    gsap.fromTo(
      ".how-section",
      {
        opacity: 0,
        y: 400,
        // scrollTrigger: {
        //   trigger: "#how-section",
        //   start: "top top",
        //   end: "bottom center",
        //   scrub: true,
        // }
      },
      {
        opacity: 1,
        duration: 3,
        ease: Power3.easeInOut,
        y: 0,
       
      } 
     
    );
  }, []);




  return (
    <div >
      <Head>
        <title>Project Forest</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* <ScrollBar /> */}
        {/* <div className="anime-section">  */}
        {/* How It Works Section */}
        <HowItWorks />

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
        {/* </div> */}
      </main>
    </div>
  );
}