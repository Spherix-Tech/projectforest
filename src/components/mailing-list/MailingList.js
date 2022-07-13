import React from "react";
import ImageComponent from "../shared/ImageComponent";

const MailingList = () => {
  return (
    <div className="w-full text-primary flex lg:flex-row flex-col justify-between py-8 bg-mailBgColor lg:px-60 px-6">
      <ImageComponent src={"/assets/mail-list/mail-list-logo.svg"} alt="Project forest logo" className="hidden lg:flex justify-center items-center lg:h-42 mr-6" />
      <div className="flex flex-col w-full">
        <h3 className=" text-[25px] font-semibold py-2 text-textTitle">
          Take your first step to a greener tomorrow
        </h3>
        <p className="text-[#1D3C34] text-sm pb-6">Join our mailing list</p>
        <div className="flex lg:flex-row flex-col gap-4 space-between">
          <input
            type="text"
            placeholder="First Name"
            className="py-3 px-4 w-full placeholder:text-sm outline-none rounded-md"
          ></input>
          <input
            type="text"
            placeholder="Email Address"
            className="py-3 px-4 w-full placeholder:text-sm outline-none rounded-md"
          ></input>
        </div>
        <div className="flex flex-row items-center justify-between pt-6">
          <p className="w-3/4 text-sm lg:text-[16px]">
            Get our emails to stay in the know on what’s happening in the field
            and ways you can get involved.
          </p>
          <button className="flex flex-row justify-end items-center font-bold text-lg w-1/4">
            SUBMIT
            <ImageComponent src={"/assets/mail-list/arrow-icon.svg"} alt="Project forest logo" className="h-8 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MailingList;
