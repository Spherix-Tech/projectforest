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
import { getHowItWorksData } from "../src/services/data-files/howItWorksData";
import { getDataBySectionName } from "../src/services/dataService";
import Partners from "../src/components/partners/Partners";
const howItWorksItemsList = getHowItWorksData("homepage");
const DataArr = getDataBySectionName("nft");

export default function Home() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.registerPlugin(ScrollToPlugin);

  //   // let smoother = ScrollSmoother.create({
  //   //   wrapper: '#smooth-wrapper',
  //   //   content: '#smooth-content',
  //   //   smooth: 2,
  //   //   smoothTouch: 0.1,

  //   // });

  //   gsap.fromTo("#home", { opacity: 0 }, { opacity: 1, duration: 1 });
  //   gsap.fromTo(
  //     ".how-section-trees",
  //     {
  //       opacity: 0,
  //       y: 500,
  //     },
  //     {
  //       opacity: 1,
  //       duration: 3,
  //       ease: Power3.easeInOut,
  //       y: 0,
  //       // scrollTrigger: {
  //       //   trigger: "#how-section",
  //       //   start: "top top",
  //       //   end: "bottom center",
  //       //   scrub: true,
  //       // }
  //     }
  //   );
  //   gsap.fromTo(
  //     ".how-section",
  //     {
  //       opacity: 0,
  //       y: 500,
  //     },
  //     {
  //       opacity: 1,
  //       duration: 3,
  //       ease: Power3.easeInOut,
  //       y: 0,
  //       // scrollTrigger: {
  //       //   trigger: "#how-section",
  //       //   start: "top top",
  //       //   end: "bottom center",
  //       //   scrub: true,
  //       // }
  //     }
  //   );
  // }, []);
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
          content="https://ankots-public-assets.s3.ap-southeast-1.amazonaws.com/project-forest-meta-image.png"
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

        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XJKS1PTP6Y"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XJKS1PTP6Y');
        </script> */}
      </Head>
      <main>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="nav-hero-section-bg">
              <Navbar />

              {/* Hero Section */}
              <Hero />

              {/* How It Works Section */}
              <ImageComponent
                src={"/assets/trees-bg.png"}
                className="how-section-trees -mb-2"
              />
            </div>
            <HowItWorks
              howItWorksItemsList={howItWorksItemsList}
              haveRoundedPoints={true}
            />

            {/* NFT Slider Section */}
            <div className="nft-impact-section-bg">
              <NFTSlider DataArr={DataArr} />

              {/* Token Section */}
              <Token />
            </div>

            {/* Roadmap Section */}
            <Roadmap />

            {/* Reforestation Section */}
            <Reforestation />

            <Partners />

            {/* Newsletter Section */}
            {/* <MailingList /> */}
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
