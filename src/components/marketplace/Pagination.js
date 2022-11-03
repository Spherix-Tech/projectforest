import React from "react";
import ImageComponent from "../shared/ImageComponent";

const Pagination = ({ items, currentPage, setCurrentPage }) => {
  return (
    <div className="flex justify-end items-center mt-4 gap-2 text-xs text-[#a2a2a2]">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => (prev -= 1))}
        className="border border-[#d0d0b3] px-3 py-2 rounded-md disabled:opacity-50"
      >
        <ImageComponent src="/assets/marketplace/arrow.svg" className="w-5" />
      </button>
      <p>Page</p>
      <p className="bg-[#fbfbf0] text-black py-1 px-3 rounded-md shadow-lg">
        {currentPage.toString().padStart(2, "0")}
      </p>
      <p>Of {Math.ceil(items.length / 15)}</p>
      <button
        disabled={currentPage === Math.ceil(items.length / 15)}
        onClick={() => setCurrentPage((prev) => (prev += 1))}
        className="border border-[#d0d0b3] px-3 py-2 rounded-md disabled:opacity-50"
      >
        <ImageComponent
          src="/assets/marketplace/arrow.svg"
          className="w-5 rotate-180"
        />
      </button>
    </div>
  );
};

export default Pagination;
