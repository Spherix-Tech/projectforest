import Head from "next/head";
import Navbar from "../../src/components/navbar/Navbar";
import Footer from "../../src/components/footer/Footer";
import NFTSlider from "../../src/components/NFT/NFTSlider";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { gsap, Power3 } from "gsap";
import { getDataBySectionName } from "../../src/services/dataService";
import { getAllRegionsData } from "../../src/services/data-files/RegionsData";
import PageGradientTitle from "../../src/components/shared/PageGradientTitle";
import ImageComponent from "../../src/components/shared/ImageComponent";
import {
  getAllAttributesData,
  getAttributesSetData,
} from "../../src/services/data-files/AttributesData";
import TreePartsSlider from "../../src/components/tree-parts-slider/TreePartsSlider";
import AttributesTable from "../../src/components/NFT/tables/AttributesTable";
import RegionsTable from "../../src/components/NFT/tables/RegionsTable";
const DataArr = getDataBySectionName("nft");
const regionsData = getAllRegionsData();

export default function NFTs() {
  const [attributesData] = useState(getAllAttributesData);
  const [attributesSetData] = useState(getAttributesSetData);

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
              <div className="section-spacing pb-0 mb-[2rem] md:mb-0">
                <PageGradientTitle
                  title={"Sustainability Starts Here"}
                  className="uppercase"
                />
                {/* <p className="page-description mt-4">
                  Take the First Step Towards a Greener Tomorrow <br /> Get your
                  green thumb
                </p> */}
              </div>
              <NFTSlider className="pt-0" hideTitle={true} DataArr={DataArr} />

              <div className="section-spacing">
                <PageGradientTitle
                  title="Tree NFTs — A Closer Look"
                  className="uppercase"
                />
                <p className="page-description my-[1rem] md:my-[2rem] text-[12px] font-normal md:text-[15px]">
                  Trees are the main NFTs in Project Forest and are required to
                  enter into the Project Forest Grow-to-Earn app. These trees
                  When first planted, these trees are mere seeds that can be
                  cultivated and grown by daily nurturing, watering and
                  nourishing using fertilizers. In order to get their hands on a
                  Project Forest Tree NFT, players must participate during the
                  official Genesis Airdrop event before the launch of the public
                  beta. Later, players can participate in the blind box sales or
                  purchase them through the secondary marketplace.
                </p>
                <ImageComponent
                  className="w-full rounded-xl"
                  src="assets/nft/nft-tree-banner.svg"
                />
              </div>

              <div className="section-spacing">
                <PageGradientTitle title="Appearance" className="uppercase" />
                <p className="page-description my-[1rem] md:my-[2rem] text-[12px] font-normal md:text-[15px]">
                  Tree NFTs in Project Forest are differentiated to the extent
                  that no two Tree NFTs are alike. The appearance of Tree NFTs
                  helps physically distinguish them from other NFTs and makes
                  for a diverse and beautiful Forest NFT that the player owns
                  and cultivates.
                </p>
                <p className="page-description my-[1rem] md:my-[2rem] text-[13px] font-semibold md:text-[16px]">
                  Each Tree NFT is made up of 5 distinct parts that make up its
                  appearance. These include:
                </p>
                {/* Slider Row */}
                <TreePartsSlider />
              </div>
              {/* Attributes and Quality Section Starts */}
              <div className="section-spacing">
                <PageGradientTitle
                  title="Attributes And Quality"
                  className="uppercase"
                />
                <p className="page-description my-[1rem] md:my-[2rem] text-[12px] font-normal md:text-[15px]">
                  Other factors such as attributes and quality further
                  differentiate Tree NFTs by defining their characteristics
                  within the Project Forest ecosystem. Each Tree NFT has 5 sets
                  of attributes. These are:
                </p>
                <div className="flex flex-row gap-2 ">
                  {attributesSetData.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className="text-[#797979] w-1/5 flex flex-col items-center "
                      >
                        <div className="rounded-xl border-2 border-dotted border-borderColor border-opacity-20 ">
                          <ImageComponent
                            src={"assets/nft/attributes-table/" + e.image}
                            className="md:h-44 lg:h-52"
                            alt={e.name}
                          />
                        </div>
                        <p className="pt-2 pb-2 text-[9px] md:text-base text-center leading-3 font-bold">
                          {e.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <p className="page-description md:my-[2rem] text-[12px] font-normal md:text-[15px]">
                  Attributes significantly impact the longterm production
                  capabilities of the Tree NFTs. Tree NFTs of better quality
                  have stronger attribute specifications and, therefore, provide
                  a more sustainable yield over time. The table below showcases
                  the attribute bonuses for each quality tier.
                </p>
                <AttributesTable />
              </div>
              {/* Regions Section Starts */}
              <div className="section-spacing pt-0">
                <PageGradientTitle title="Regions" className="uppercase" />
                <p className="page-description my-[1rem] md:my-[2rem] text-[12px] font-normal md:text-[15px]">
                  Tree NFTs are further segmented into continents based on their
                  most common geographical locations. There are 5 unique
                  continents that these Tree NFTs can belong to, including
                  Africa, Asia, Europe, America and Oceania. At the time of
                  launch, each continent will be home to 6 unique species of
                  Tree NFTs. This number will increase as new species are
                  discovered When Project Forest’s reforestation milestones are
                  met.
                </p>
                <p className="page-description my-[1rem] md:my-[2rem] text-[12px] font-normal md:text-[15px]">
                  Trees are a product of their geographical environment, and
                  each continent has a distinct set of physical and
                  environmental attributes such as climate, temperature,
                  latitudes and longitudes. Therefore, each continent will be
                  home to trees with distinct attributes and characteristics.
                  This is outlined in the table below:
                </p>
                <RegionsTable />
              </div>
              {/* Regions Section Ends */}

              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
