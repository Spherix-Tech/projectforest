import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import ImageComponent from "../shared/ImageComponent";

export default function MobileNFTSlider({ DataArr, hideTitle = false }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [selectedNFTObj, setSelectedNFTObj] = useState(DataArr[0]);

  useEffect(() => {
    setSelectedNFTObj(DataArr[DataArr.length - 5]);
  }, [DataArr]);

  const changeSelectedNft = (slideObj) => {
    setSelectedNFTObj(slideObj);
  };
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    rtl: true,
    dragSpeed: 1,
    initial: 0,
    rubberband: false,
    range: {
      min: 0,
      max: 10,
    },
    breakpoints: {
      "(min-width: 0px) and (max-width: 400px)": {
        slides: {
          perView: 2,
        },
      },
      "(min-width: 401px) and (max-width: 500px)": {
        slides: {
          perView: 3,
        },
      },
      "(min-width: 500px) and (max-width: 768px)": {
        slides: {
          perView: 4,
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
    <div id="gaming" className="w-full">
      <div className="flex section-title-spacing justify-between items-center">
        <div>{!hideTitle && <h3 className="section-title">NFT</h3>}</div>
        <div className=" inline-flex gap-2">
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

      <div className="w-full">
        {/* NFT Slider */}
        <div ref={sliderRef} className="keen-slider w-full ">
          {DataArr &&
            DataArr.map((slide, i) => {
              return (
                <div
                  key={i}
                  onClick={() => changeSelectedNft(slide)}
                  className={
                    "keen-slider__slide pr-[1.4rem] cursor-pointer number-slide" +
                    i
                  }
                >
                  <div
                    className={`${slide?.bgGradientColorClass} flex flex-col justify-center h-[110px] items-center gap-2 rounded-2xl `}
                  >
                    <ImageComponent
                      className="h-[80px]"
                      alt="ankots"
                      src={`/assets/nft/${slide.imageName}`}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        {/* NFT Slider ends */}
      </div>
      <div className="flex flex-row mt-5 items-center">
        {/* Selected NFT */}
        <div
          className={
            "flex flex-col w-[320px] xs:w-[285px] mr-2 xs:mr-4 h-[230px] "
          }
        >
          <div
            className={`${selectedNFTObj?.bgGradientColorClass} flex justify-center items-center rounded-xl h-full`}
          >
            <div>
              <ImageComponent
                src={`/assets/nft/${selectedNFTObj?.imageName}`}
                alt="NFT Ankot"
                className={" h-[11rem] "}
              />
            </div>
          </div>
        </div>

        <div className="max-w-[230px] xs:max-w-[350px] w-[75%] xs:w-[80%] lg:max-w-4xl 3xl:max-w-[75rem] 3xl:w-full flex flex-col h-full text-textTitle">
          <h2 className=" text-[1rem] lg:text-5xl font-semibold lg:pt-4 lg:pb-2 leading-5 pb-0 pt-0 sm:pt-2">
            Purchase your first NFT
            <span className="text-[#19B7B7]"> Tree </span>
          </h2>

          <p className="lg:text-[16px] text-[9px] xs:text-xs lg:w-[90%] md:w-full w-full leading-[1.1rem] py-1 sm:py-3 text-textDescription">
            Make the first step in building your Forest NFT. Choose from a
            distinct collection of unique plant species, each with their own
            characteristics such as O2 production, water intake, climate
            resistance, terrain suitability and more.
          </p>
          <button className="w-[8rem] xs:w-44 h-10 flex flex-col items-center text-[10px] xs:text-xs disabled cursor-default btnPrimary text-xs">
            Mint Now
          </button>
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
        alt="ankots"
        src={`/assets/nft/${
          props.left ? "slider-right-arrow" : "slider-left-arrow"
        }.svg`}
      />
    </div>
  );
}
