import React from "react";
import ImageComponent from "../shared/ImageComponent";

const MailingList = () => {
  return (
    <div className="w-full text-primary flex flex-row justify-between py-8 bg-mailBgColor lg:px-60 px-6">
      <ImageComponent src={"/assets/mail-list/mail-list-logo.svg"} alt="Project forest logo" />
      <div className="flex flex-col w-3/4">
        <h2 className=" font-semibold text-[34px] py-2 text-textTitle">
          Take your First Step to a Greener Tomorrow
        </h2>
        <p className="text-[#1D3C34] text-sm pb-6">Join our Mailing List</p>
        <div className="flex flex-row gap-4 space-between">
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
        <div className="flex flex-row items-center justify-between py-4">
          <p className="w-3/4">
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
