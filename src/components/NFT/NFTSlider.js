import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import ImageComponent from "../shared/ImageComponent";
import MobileNFTSlider from "./MobileNFTSlider";

export default function NFTSlider({ reference, DataArr }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [selectedNFTObj, setSelectedNFTObj] = useState(DataArr[0]);

  //   useEffect(() => {
  //     setSelectedNFTObj(DataArr);
  //   }, [DataArr]);

  const changeSelectedNft = (slideObj) => {
    setSelectedNFTObj(slideObj);
  };
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    rtl: true,
    dragSpeed: 0.5,
    renderMode: "precision",
    rubberband: false,
    mode: "free-snap",
    initial: 0,
    range: {
      min: 0,
      max: 12,
    },
    breakpoints: {
      "(min-width: 0px) and (max-width: 440px)": {
        slides: {
          perView: 1,
        },
      },
      "(min-width: 441px) and (max-width: 680px)": {
        slides: {
          perView: 2,
        },
      },
      "(min-width: 681px) and (max-width: 1201px)": {
        slides: {
          perView: 3,
        },
      },
      "(min-width: 1202px) and (max-width: 1300px)": {
        slides: {
          perView: 4,
        },
      },
      "(min-width: 1301px) and (max-width: 1500px)": {
        slides: {
          perView: 5,
        },
      },
      "(min-width: 1501px)": {
        slides: {
          perView: 6,
        },
      },
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div id="nft" className="section-spacing panel " ref={reference}>
      <div className="hidden md:block">
        <div className="flex justify-between items-center section-title-spacing">
          <div>
            <h3 className="section-title">NFT</h3>
          </div>
          <div>
            <div className="flex w-full justify-end gap-2">
              <div>
                {loaded && instanceRef.current && (
                  <>
                    <Arrow
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.next()
                      }
                      disabled={
                        currentSlide ===
                        instanceRef.current.track.details.slides.length - 1
                      }
                    />
                  </>
                )}
              </div>
              <div>
                {loaded && instanceRef.current && (
                  <>
                    <Arrow
                      left
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                      }
                      disabled={currentSlide === 0}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start justify-between w-full ">
          {/* Selected NFT */}
          <div
            className={`${selectedNFTObj?.bgGradientColorClass} flex flex-col justify-center items-center rounded-2xl lg:w-[385px] w-2/4 mr-4 -mt-2 lg:h-[390px] h-[400px]`}
          >
            <ImageComponent
              src={`/assets/nft/${selectedNFTObj?.imageName}`}
              alt="NFT Project Forest"
              className=" w-[15rem] h-[16rem] "
            />
          </div>

          <div className="w-2/4 md:w-[60%] lg:w-[55%] xl:w-[70%] max-w-sm md:max-w-[35rem] lg:max-w-[40rem] xl:max-w-[70rem] flex flex-col h-full text-textTitle">
            {/* NFT Slider */}
            <div ref={sliderRef} className="keen-slider w-full flex ">
              {DataArr &&
                DataArr.map((slide, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => changeSelectedNft(slide)}
                      className={
                        "keen-slider__slide cursor-pointer number-slide flex lg:justify-start justify-center pr-2"
                      }
                    >
                      <div
                        className={`${slide?.bgGradientColorClass} flex h-[8rem] w-[8rem] md:h-[9rem] md:w-[10rem] flex-col justify-center items-center rounded-2xl`}
                      >
                        <ImageComponent
                          className="h-[6rem] w-[6rem] md:h-[7rem] md:w-[6rem]"
                          alt="project forest"
                          src={`/assets/nft/${slide.imageName}`}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* NFT Slider ends */}
            <h3 className=" lg:text-[40px] text-xl md:text-3xl font-semibold pt-2 lg:pb-[0.5rem] lg:pt-[0.5rem] xl:pt-8 xl:pb-2 pb-0">
              Purchase your first NFT
              <span className="text-[#19B7B7]"> Tree </span>
            </h3>

            <p className="lg:text-[16px] text-xs lg:w-[90%] md:w-full w-full leading-4 sm:leading-5 py-1 sm:py-4 lg:py-[0.5rem] xl:py-4 text-textDescription">
              Make the first step in building your NFT Forest. Choose from a
              distinct collection of unique plant species, each with their own
              characteristics such as O2 production, water intake, climate
              resistance, terrain suitability and more.
            </p>
            <a>
              <button className="disabled cursor-default btnPrimary w-44 h-10 flex flex-col items-center text-xs">
                Mint Now
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <MobileNFTSlider DataArr={DataArr} />
      </div>
    </div>
  );
}
function Arrow(props) {
  return (
    <div
      className="w-7 flex flex-col items-center justify-center"
      onClick={props.onClick}
    >
      <ImageComponent
        className="cursor-pointer"
        alt="arrow icon"
        src={`/assets/nft/${
          props.left ? "slider-right-arrow" : "slider-left-arrow"
        }.svg`}
      />
    </div>
  );
}
