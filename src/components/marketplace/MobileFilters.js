import { useRouter } from "next/router";
import React, { useState } from "react";
import ImageComponent from "../shared/ImageComponent";
import Filters from "./Filters";

const MobileFilters = ({ age, level, setAge, setLevel }) => {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);

  const setQueryParam = (key, value) => {
    router.push({
      pathname: "/marketplace",
      query: { ...router.query, [key]: value },
    });
  };

  const removeAllQueryParams = () => {
    router.push({
      pathname: "/marketplace",
      query: {},
    });
    setLevel(1);
    setAge(1);
    setShowFilters((prev) => !prev);
  };

  return (
    <div className="my-3 md:hidden flex justify-between">
      <button
        onClick={() => setShowFilters((prev) => !prev)}
        className="flex gap-2 items-center bg-[#f5d77b] rounded-md py-2 px-2"
      >
        <ImageComponent src="/assets/marketplace/filter-icon.svg" />
        <p className="text-xs font-medium">Filters</p>
      </button>
      <div className="flex items-center flex-row bg-[#f5d77b] rounded-md px-2">
        <ImageComponent
          src="/assets/marketplace/sort-mobile.svg"
          className="h-3"
        />
        <select
          value={router.query.sort ?? "Price: Low To High"}
          className=" bg-[#f5d77b] appearance-none text-xs font-medium p-1 block outline-none "
          onChange={(e) => setQueryParam("sort", e.target.value)}
        >
          <option value="Price: Low To High">Price: Low To High </option>
          <option value="Price: High To Low">Price: High To Low </option>
        </select>
      </div>
      {showFilters && (
        <div className="fixed top-0 mt-20 pb-20 left-0 w-full h-full overflow-auto bg-[#f5d77b] rounded-t-2xl z-10000">
          <div className="flex justify-between items-center py-3 px-5 overflow-auto">
            <ImageComponent
              src="/assets/marketplace/arrow.svg"
              className="w-6 h-8 cursor-pointer"
              onClick={() => setShowFilters((prev) => !prev)}
            />
            <h1 className="text-lg font-semibold">Filters</h1>
            <button
              onClick={removeAllQueryParams}
              className="font-semibold opacity-50"
            >
              Clear
            </button>
          </div>
          <hr className="mx-4 border-[#CECECE] border-opacity-40" />
          <Filters
            mobile
            age={age}
            level={level}
            setAge={setAge}
            setLevel={setLevel}
          />
        </div>
      )}
    </div>
  );
};

export default MobileFilters;
