import { useRouter } from "next/router";
import React, { useState } from "react";

import ImageComponent from "../shared/ImageComponent";
import AreaFilterOption from "./AreaFilterOption";
import FilterOptions from "./FilterOptions";
import Slider from "./Slider";

const filterAreas = [
  { title: "Asia", color: "#C0AADD" },
  { title: "Africa", color: "#D0BB8D" },
  { title: "Europe", color: "#E8AEBC" },
  { title: "America", color: "#77BFB8" },
  { title: "Oceania", color: "#B8B8BC" },
];
const filterQualities = [
  { title: "Common", color: "#D3F1B2" },
  { title: "Uncommon", color: "#93BAE6" },
  { title: "Rare", color: "#7C92FF" },
  { title: "Epic", color: "#A679FF" },
  { title: "Legendary", color: "#DD61EC" },
];
const filterSeedMint = ["0", "1", "2"];

const Filters = ({
  age,
  level,
  setAge,
  setLevel,
  removeAllQueryParams,
  mobile = false,
}) => {
  const router = useRouter();
  const setQueryParam = (key, value) => {
    router.push({
      pathname: "/marketplace",
      query: { ...router.query, [key]: value },
    });
  };

  return (
    <div
      className={`pr-2 border-r border-[#CECECE] border-opacity-40 ${
        mobile ? "w-full block" : "w-72 hidden"
      } md:block`}
    >
      <div
        className={`${
          !mobile && "border-b"
        } border-[#CECECE] border-opacity-40`}
      >
        <div
          className={`flex justify-between items-center py-4 px-2 ${
            mobile && "hidden"
          }`}
        >
          <h1 className="text-sm">
            Filters ({Object.keys(router.query).length})
          </h1>
          <button className="text-sm" onClick={removeAllQueryParams}>
            Clear All
          </button>
        </div>
        <div
          className={`grid grid-cols-3 gap-2 text-gray-400 text-xs pb-4 px-2 ${
            mobile && "hidden"
          }`}
        >
          {Object.keys(router.query).map(
            (param, i) =>
              router.query[param] && (
                <button
                  key={i}
                  onClick={() => setQueryParam(`${param}`)}
                  className="bg-white rounded-md py-1"
                >
                  {router.query[param]}
                </button>
              )
          )}
        </div>
      </div>

      <FilterOptions
        title="SORT"
        open={mobile}
        options={
          <div className="grid grid-cols-3 gap-2 text-gray-400 text-xs font-medium">
            <button
              onClick={() => setQueryParam("sort", "Price: Low To High")}
              className={`${
                router.query.sort === "Price: Low To High"
                  ? "bg-[#bcedab]"
                  : "bg-white"
              } rounded-md py-2`}
            >
              Price{" "}
              <ImageComponent
                src="/assets/marketplace/sort-high.svg"
                className="w-2 inline"
              />
            </button>
            <button
              onClick={() => setQueryParam("sort", "Quality: Low To High")}
              className={`${
                router.query.sort === "Quality: Low To High"
                  ? "bg-[#bcedab]"
                  : "bg-white"
              } rounded-md py-2`}
            >
              Quality{" "}
              <ImageComponent
                src="/assets/marketplace/sort-high.svg"
                className="w-2 inline"
              />
            </button>
            <button
              onClick={() => setQueryParam("sort", "Score: Low To High")}
              className={`${
                router.query.sort === "Score: Low To High"
                  ? "bg-[#bcedab]"
                  : "bg-white"
              } rounded-md py-2`}
            >
              Score{" "}
              <ImageComponent
                src="/assets/marketplace/sort-high.svg"
                className="w-2 inline"
              />
            </button>
            <button
              onClick={() => setQueryParam("sort", "Price: High To Low")}
              className={`${
                router.query.sort === "Price: High To Low"
                  ? "bg-[#E8AEBC] "
                  : "bg-white"
              } rounded-md py-2`}
            >
              Price{" "}
              <ImageComponent
                src="/assets/marketplace/sort-low.svg"
                className="w-2 inline"
              />
            </button>
            <button
              onClick={() => setQueryParam("sort", "Quality: High To Low")}
              className={`${
                router.query.sort === "Quality: High To Low"
                  ? "bg-[#E8AEBC] "
                  : "bg-white"
              } rounded-md py-2`}
            >
              Quality{" "}
              <ImageComponent
                src="/assets/marketplace/sort-low.svg"
                className="w-2 inline"
              />
            </button>
            <button
              onClick={() => setQueryParam("sort", "Score: High To Low")}
              className={`${
                router.query.sort === "Score: High To Low"
                  ? "bg-[#E8AEBC] "
                  : "bg-white"
              } rounded-md py-2`}
            >
              Score{" "}
              <ImageComponent
                src="/assets/marketplace/sort-low.svg"
                className="w-2 inline"
              />
            </button>
          </div>
        }
      />
      <FilterOptions
        title="AREA"
        open={mobile}
        options={
          <div className="grid grid-cols-3 gap-2 text-gray-400 text-xs font-medium">
            {filterAreas.map((area, i) => (
              <AreaFilterOption key={i} {...area} />
            ))}
          </div>
        }
      />
      <FilterOptions
        title="RARITY"
        open={mobile}
        options={
          <div className="grid grid-cols-3 gap-2 text-xs font-medium">
            {filterQualities.map(({ title, color }, i) => (
              <button
                onClick={() => setQueryParam("rarity", title)}
                key={i}
                className="bg-white rounded-md py-2"
                style={{
                  border:
                    router.query.rarity === title
                      ? `1px solid ${color}`
                      : "1px solid white",
                  color:
                    router.query.rarity === title ? color : "rgb(156 163 175)",
                }}
              >
                {title}
              </button>
            ))}
          </div>
        }
      />
      <FilterOptions
        title="SEEDS MINT"
        open={mobile}
        options={
          <div className="grid grid-cols-3 gap-2 text-gray-400 text-xs">
            {filterSeedMint.map((seed, i) => (
              <button
                onClick={() => setQueryParam("seed", seed)}
                key={i}
                className="rounded-md py-2"
                style={{
                  backgroundColor:
                    router.query.seed === seed ? "#bcedab" : "white",
                }}
              >
                {seed}
              </button>
            ))}
          </div>
        }
      />
      <FilterOptions
        title="LEVEL"
        open={mobile}
        options={
          <Slider
            min={1}
            max={35}
            value={level}
            onChange={(value) => setLevel(value)}
          />
        }
      />
      <FilterOptions
        title="AGE"
        open={mobile}
        options={
          <Slider
            min={1}
            max={100}
            value={age}
            onChange={(value) => setAge(value)}
          />
        }
      />
    </div>
  );
};

export default Filters;
