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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project Forest</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* How It Works Section */}
        <ImageComponent src={"/assets/trees-bg.png"} />
        <HowItWorks />


        {/* NFT Slider Section */}
        {/* <NFTSlider /> */}

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
