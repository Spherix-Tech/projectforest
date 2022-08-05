import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import ImageComponent from "../shared/ImageComponent";
import { getDataBySectionName } from "../../services/dataService";

const DataArr = getDataBySectionName("nft");

export default function NFTSlider({ reference }) {
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
      "(min-width: 681px) and (max-width: 1119px)": {
        slides: {
          perView: 3,
        },
      },
      "(min-width: 1120px) and (max-width: 1300px)": {
        slides: {
          perView: 4,
        },
      },
      "(min-width: 1301px)": {
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
    <div id="nft" className="lg:px-60 px-6 panel " ref={reference}>
      <h3 className=" text-textTitle font-bold text-[40px] pt-8 pb-4">NFT</h3>

      <div className="flex w-full justify-end gap-2 pb-4 ">
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

      <div className="flex flex-row items-start justify-between w-full ">
        {/* Selected NFT */}
        <div
          className={`${selectedNFTObj?.bgGradientColorClass} flex flex-col justify-center items-center rounded-2xl lg:w-[380px] w-2/4 mr-4 -mt-2 lg:h-[390px] h-[400px]`}
        >
          <ImageComponent
            src={`/assets/nft/${selectedNFTObj?.imageName}`}
            alt="NFT Project Forest"
            className=" w-[16rem] h-[16rem] md:w-[18rem] md:h-[18rem] "
          />
        </div>

        <div className="w-2/4 md:w-[60%] lg:w-[55%] xl:w-[75%] max-w-sm md:max-w-[35rem] lg:max-w-[40rem] xl:max-w-[70rem] flex flex-col h-full text-textTitle">
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
                      className={`${slide?.bgGradientColorClass} flex flex-col justify-center items-center rounded-2xl w-full`}
                    >
                      <ImageComponent
                        className="h-[6rem] w-[6rem] md:h-[8rem] md:w-[7rem]"
                        alt="project forest"
                        src={`/assets/nft/${slide.imageName}`}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          {/* NFT Slider ends */}
          <h3 className=" lg:text-[40px] text-xl md:text-3xl font-semibold lg:pt-8 lg:pb-2 pb-0 pt-2">
            Purchase your first NFT
            <span className="text-[#19B7B7]"> Plant </span>
          </h3>

          <p className="lg:text-[16px] text-xs lg:w-[90%] md:w-full w-full leading-4 sm:leading-5 py-1 sm:py-4 text-textDescription">
            Make the first step in building your NFT Forest. Choose from a
            distinct collection of unique plant species, each with their own
            characteristics such as O2 production, water intake, climate
            resistance, terrain suitability and more.
          </p>
          <a>
            <button className=" btnPrimary w-44 h-10 flex flex-col items-center text-xs">
              Go To Marketplace
            </button>
          </a>
        </div>
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
