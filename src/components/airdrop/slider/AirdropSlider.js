import React, { useEffect, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import ImageComponent from "../../shared/ImageComponent";

export default function AirdropSlider({ DataArr }) {
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
      "(min-width: 769px)": {
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
    <div id="gaming" className="flex flex-col gap-8 w-full">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex-1 flex justify-center items-center">
          <ImageComponent
            src={`/assets/nft/${selectedNFTObj?.imageName}`}
            alt="NFT Ankot"
            className={" h-[25rem] "}
          />
        </div>
        <div className="flex-1 gap-4 flex flex-col justify-center items-center 2xl:justify-start 2xl:items-start">
          <div className="airdrop-title-gradient w-[100%] lg:w-[70%] inline-flex justify-between items-center">
            <div>
              <h2 className="text-[#3A3A3C] font-semibold">Name: </h2>
            </div>
            <div className="text-[#666666] font-light">CEDAR TREE</div>
          </div>
          <div className="airdrop-title-gradient w-[100%] lg:w-[70%] inline-flex justify-between items-center">
            <div>
              <h2 className="text-[#3A3A3C] font-semibold">Species: </h2>
            </div>
            <div className="text-[#666666] font-light">XXXXXXXXXX</div>
          </div>
          <div className="airdrop-title-gradient w-[100%] lg:w-[70%] inline-flex justify-between items-center">
            <div>
              <h2 className="text-[#3A3A3C] font-semibold">Location: </h2>
            </div>
            <div className="text-[#666666] font-light">XXXXXXXXXX</div>
          </div>

          {/* Three images */}
          <div className="flex justify-start items-center w-[100%] lg:w-[70%] gap-6">
            <div className="bg-gradient-to-b p-4 from-[#DED897] w-[130px] md:w-[200px]">
              <ImageComponent
                src={`/assets/nft/${selectedNFTObj?.imageName}`}
                alt="NFT Ankot"
              />
            </div>
            <div className="bg-gradient-to-b p-4 from-[#DED897] w-[130px] md:w-[200px]">
              <ImageComponent
                src={`/assets/nft/${selectedNFTObj?.imageName}`}
                alt="NFT Ankot"
              />
            </div>
            <div className="bg-gradient-to-b p-4 from-[#DED897] w-[130px] md:w-[200px]">
              <ImageComponent
                src={`/assets/nft/${selectedNFTObj?.imageName}`}
                alt="NFT Ankot"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-8 inline-flex justify-start items-center gap-4">
        {/* NFT Slider */}
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
                    className={`${slide?.bgGradientColorClass} flex flex-col justify-center h-[110px] 2xl:h-[140px] items-center gap-2 rounded-2xl `}
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
        {/* NFT Slider ends */}
      </div>
    </div>
  );
}
function Arrow(props) {
  return (
    <div
      className="w-7 md:w-12 flex flex-col items-center justify-center"
      onClick={props.onClick}
    >
      <ImageComponent
        className="cursor-pointer w-full"
        alt="ankots"
        src={`/assets/nft/${
          props.left ? "slider-right-arrow" : "slider-left-arrow"
        }.svg`}
      />
    </div>
  );
}
