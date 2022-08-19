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
import React, { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { gsap, Power3 } from "gsap";
import { getDataBySectionName } from "../../src/services/dataService";
import PageGradientTitle from "../../src/components/shared/PageGradientTitle";
import ImageComponent from "../../src/components/shared/ImageComponent";
import NFTPageDottedImageBox from "../../src/components/shared/NFTPageDottedImageBox";
import { getAllAttributesData } from "../../src/services/data-files/AttributesData";
import {getAttributesSetData} from "../../src/services/data-files/AttributesData"

const DataArr = getDataBySectionName("nft");

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
                  enter into the Project Forest grow-to-earn app. These trees
                  when first planted are mere seeds that can be cultivated and
                  grown by daily nurturing, watering and nourishing using
                  fertilizers. In order to get their hands on a Project Forest
                  tree NFT, players must participate during the official
                  genesis airdrop event before the launch of the public beta.
                  Later, players can participate in the blind box sales or
                  purchase them through the secondary marketplace.
                </p>
                <ImageComponent
                  className="w-full"
                  src="assets/nft/nft-tree-banner.svg"
                />
              </div>

              <div className="section-spacing">
                <PageGradientTitle title="Appearance" className="uppercase" />
                <p className="page-description my-[1rem] md:my-[2rem] text-[12px] font-normal md:text-[15px]">
                  Tree NFTs in Project Forest are differentiated to the extent
                  that no two Tree NFTs are alike. The appearance of Tree NFTs
                  helps physically distinguish them from other NFTs and makes
                  for a diverse and beautiful NFT Forest that the player owns
                  and cultivates.
                </p>
                <p className="page-description my-[1rem] md:my-[2rem] text-[13px] font-semibold md:text-[16px]">
                  Each Tree NFT is made up of 5 distinct parts that make up its
                  appearance. These include:
                </p>
              </div>

              {/* Slider Row */}

              {/* Slider sub images row */}
              <div className="flex justify-start items-center ">
                <NFTPageDottedImageBox
                  src={"assets/nft/tree-parts-slider/sub-slider-tree-part.svg"}
                />
              </div>

              <div className="section-spacing">
                <PageGradientTitle
                  title="Attributes And Quality"
                  className="uppercase"
                />
                <p className="page-description my-[1rem] md:my-[2rem] text-[12px] font-normal md:text-[15px]">
                  Other factors such as Attributes and Quality further
                  differentiate Tree NFTs by defining their characteristics
                  within the Project Forest ecosystem. Each Tree NFT has 5 sets
                  of attributes. These are, namely:
                </p>
                <div className="flex flex-col attrscreen:flex-row gap-2 justify-between ">
                {attributesSetData.map((e, i) => {
                        return (
                          <div key={i} className=" text-[#797979] flex flex-col items-center justify-center ">
                           <div className="flex flex-col items-center justify-center  rounded-xl w-[200px] h-[200px] border-2 border-dotted border-borderColor border-opacity-20 ">
                            <ImageComponent src={
                                  "assets/nft/attributes-table/" + e.image
                                }
                                className=" h-36"
                                alt={e.name} />
                                </div>
                                 <p className="pt-4 pb-6">{e.name}</p>
                           
                            </div>
                           
                          );
                        })}
                        </div>
                <p className="page-description my-[1rem] md:my-[2rem] text-[12px] font-normal md:text-[15px]">
                  Attributes significantly impact the longterm production
                  capabilities of the Tree NFTs. Tree NFTs of better quality
                  have stronger attribute specifications, and therefore provide
                  a more sustainable yield over time. The table below showcases
                  the attribute bonuses for each quality tier.
                </p>
                {/* Attributes Table Starts */}

                <div className="w-full rounded-xl border-2 border-dotted  border-borderColor border-opacity-20 my-10 overflow-x-scroll no-scrollbar ">
                  <table className="w-full min-w-[1100px]">
                    <thead className="">
                      <tr className="flex flex-row items-center w-full">
                        <th className=" w-[20%] attributes-header ">
                          Property Value
                        </th>
                        <th className=" w-[16%] gap-2 attributes-header">
                          Common
                        </th>
                        <th className="w-[16%] gap-2 attributes-header">
                          Uncommon
                        </th>
                        <th className="w-[16%] gap-2 attributes-header">
                          Rare
                        </th>
                        <th className="w-[16%] gap-2 attributes-header">
                          Epic
                        </th>
                        <th className=" w-[16%] gap-2 attributes-header border-r-0">
                          Legend
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {attributesData.map((e, i) => {
                        return (
                          <tr
                            className="flex flex-row items-center w-full border-t-[1px] border-dashed border-borderColor border-opacity-20 text-xs md:text-sm text-[#797979]"
                            key={i}
                          >
                            <td className=" w-[20%] flex flex-col md:flex-row  justify-center md:justify-start items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 px-3 md:px-6 h-[90px]">
                              <ImageComponent
                                src={
                                  "assets/nft/attributes-table/" + e.valueImage
                                }
                                className="h-12"
                                alt={e.value}
                              />

                              {e.value}
                            </td>
                            <td className=" w-[16%] flex justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 h-[90px] ">
                              <p>{e.common}</p>
                            </td>
                            <td className="w-[16%] flex justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 h-[90px]  ">
                              <p>{e.uncommon}</p>
                            </td>
                            <td className="w-[16%] flex justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 h-[90px]">
                              <p>{e.rare}</p>
                            </td>
                            <td className="w-[16%] flex justify-center items-center border-r-[1px] border-dashed border-borderColor border-opacity-20 h-[90px]">
                              <p>{e.epic}</p>
                            </td>
                            <td className="w-[16%] flex justify-center items-center border-dashed border-borderColor border-opacity-20 h-[90px]">
                              <p>{e.legend}</p>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {/* Attributes Table Ends */}
              </div>

              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
