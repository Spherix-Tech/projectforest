import React from "react";
import ImageComponent from "../../shared/ImageComponent";
import { getAllBenefitsData } from "../../../services/data-files/BenefitsData";

const benefitsData = getAllBenefitsData();

const benefits = () => {
  return (
    <div className=" w-full flex flex-col md:flex-row justify-between nav-hero-section-bg rounded-[2rem] md:p-12 p-8 py-18 shadow-xl">
      <div className="md:w-[50%]  flex flex-col items-center md:items-start md:gap-10 gap-5 md:pl-6 md:pt-4 text-center md:text-left">
        <h2 className=" text-labelTextColor text-xl md:text-3xl font-semibold ">
          Benefits of Playing the Beta
        </h2>
        <p className="text-labelTextColor text-opacity-80 mdtext-lg text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className="cursor-pointer btnSecondary h-12  lg:w-56 w-40 mb-8 md:mb-0">
          Read More
        </button>
      </div>
      <div className="md:w-[40%] w-full flex flex-col gap-4">
        {benefitsData.map((e, i) => {
          return (
            <div
              key={i}
              className="w-full flex flex-col md:flex-row items-center rounded-3xl bg-[#C2C983] bg-opacity-30 px-4 py-6 gap-4 shadow-[0_2px_0px_0px_rgba(0,0,0,0.2)]"
            >
              <ImageComponent
                src={`/assets/beta/benefits/${e.image}.svg`}
                alt="Project forest Benefits"
                className="object-contain w-12 h-10"
              />
              <div className="flex flex-col items-center text-center md:text-left md:items-start w-[90%]">
                <h2 className="text-lg text-labelTextColor font-semibold pb-1">
                  {e.title}
                </h2>
                <p className="text-labelTextColor text-opacity-80 text-base">
                  {e.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default benefits;
