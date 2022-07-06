import Head from "next/head";
import Navbar from "../src/components/navbar/Navbar";
import Hero from "../src/components/hero/Hero";
import Footer from "../src/components/footer/Footer";
import HowItWorks from "../src/components/how-it-works/HowItWorks";
import MailingList from "../src/components/mailing-list/MailingList";
import Reforestation from "../src/components/reforestation/Reforestation";

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

        <Hero />

        <HowItWorks />

        <Reforestation />

        <MailingList />
        
        <Footer />
      </main>
    </div>
  );
}
