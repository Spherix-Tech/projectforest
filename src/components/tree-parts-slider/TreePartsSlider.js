import { useState } from "react";
import { getAllTreePartsSliderData } from "../../services/data-files/TreePartsSliderData";
import ImageComponent from "../shared/ImageComponent";
import NFTPageDottedImageBox from "../shared/NFTPageDottedImageBox";
const partsSliderData = getAllTreePartsSliderData();

function TreePartsSlider() {
  const [partsSliderSelectedIndex, setPartsSliderSelectedIndex] = useState(0);
  const changeSlide = (currentIndex, movementDirection) => {
    let newIndex =
      movementDirection == "left" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0) {
      setPartsSliderSelectedIndex(partsSliderData.length - 1);
    } else if (newIndex == partsSliderData.length) {
      setPartsSliderSelectedIndex(0);
    } else {
      setPartsSliderSelectedIndex(newIndex);
    }
  };
  return (
    <div>
      <p>BB {partsSliderSelectedIndex}</p>
      {partsSliderData.map((item, index) => {
        return (
          <div
            key={index}
            className={index == partsSliderSelectedIndex ? " block" : "hidden"}
          >
            <div className="flex justify-center items-center mt-[2rem] lg:mt-[3rem] relative">
              <div className="absolute left-1">
                <ImageComponent
                  className="w-[35px] cursor-pointer"
                  src="assets/nft/slider-left-arrow.svg"
                  onClick={() => changeSlide(index, "left")}
                />
              </div>
              <ImageComponent
                className="h-[250px] xs:h-[300px] sm:h-[400px] md:h-[450px]"
                src={`assets/nft/tree-parts-slider/${item.sliderImageName}`}
              />
              <div className="absolute right-1">
                <ImageComponent
                  className="w-[35px] cursor-pointer"
                  src="assets/nft/slider-right-arrow.svg"
                  onClick={() => changeSlide(index, "right")}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 justify-between items-center mt-[2rem] lg:mt-[3rem]">
              {/* Slider sub images row */}
              {item.sliderPartsArray.map((subItem, ind) => {
                return (
                  <div className="h-full" key={ind}>
                    <NFTPageDottedImageBox
                      title={subItem.title}
                      src={`assets/nft/tree-parts-slider/${subItem.partImageName}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TreePartsSlider;
