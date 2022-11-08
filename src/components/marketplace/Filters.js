import { useRouter } from "next/router";
import React from "react";

import ImageComponent from "../shared/ImageComponent";
import FilterOptions from "./FilterOptions";
import Slider from "./Slider";

const filterAreas = ["Asia", "Africa", "Europe", "America", "Oceania"];
const filterQualities = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
const filterSeedMint = ["0", "1", "2"];

const Filters = ({ age, level, setAge, setLevel, removeAllQueryParams }) => {
  const router = useRouter();
  const setQueryParam = (key, value) => {
    router.push({
      pathname: "/marketplace",
      query: { ...router.query, [key]: value },
    });
  };

  return (
    <div className="w-72 pr-2 border-r border-[#CECECE] border-opacity-40">
      <div className="border-b border-[#CECECE] border-opacity-40">
        <div className="flex justify-between items-center py-4 px-2">
          <h1 className="text-sm">Filters ({"0"})</h1>
          <button className="text-sm" onClick={removeAllQueryParams}>
            Clear All
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 text-gray-400 text-xs pb-4 px-2">
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
        options={
          <div className="grid grid-cols-3 gap-2 text-gray-400 text-xs">
            <button
              onClick={() => setQueryParam("sort", "Price: Low To High")}
              className="bg-white rounded-md py-1"
            >
              Price{" "}
              <ImageComponent
                src="/assets/marketplace/sort-high.svg"
                className="w-2 inline"
              />
            </button>
            <button
              onClick={() => setQueryParam("sort", "Quality: Low To High")}
              className="bg-white rounded-md py-1"
            >
              Quality{" "}
              <ImageComponent
                src="/assets/marketplace/sort-high.svg"
                className="w-2 inline"
              />
            </button>
            <button
              onClick={() => setQueryParam("sort", "Score: Low To High")}
              className="bg-white rounded-md py-1"
            >
              Score{" "}
              <ImageComponent
                src="/assets/marketplace/sort-high.svg"
                className="w-2 inline"
              />
            </button>
            <button
              onClick={() => setQueryParam("sort", "Price: High To Low")}
              className="bg-white rounded-md py-1"
            >
              Price{" "}
              <ImageComponent
                src="/assets/marketplace/sort-low.svg"
                className="w-2 inline"
              />
            </button>
            <button
              onClick={() => setQueryParam("sort", "Quality: High To Low")}
              className="bg-white rounded-md py-1"
            >
              Quality{" "}
              <ImageComponent
                src="/assets/marketplace/sort-low.svg"
                className="w-2 inline"
              />
            </button>
            <button
              onClick={() => setQueryParam("sort", "Score: High To Low")}
              className="bg-white rounded-md py-1"
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
        options={
          <div className="grid grid-cols-3 gap-2 text-gray-400 text-xs">
            {filterAreas.map((area, i) => (
              <button
                onClick={() => setQueryParam("area", area)}
                key={i}
                className="bg-white rounded-md py-1"
              >
                {area}
              </button>
            ))}
          </div>
        }
      />
      <FilterOptions
        title="RARITY"
        options={
          <div className="grid grid-cols-3 gap-2 text-gray-400 text-xs">
            {filterQualities.map((rarity, i) => (
              <button
                onClick={() => setQueryParam("rarity", rarity)}
                key={i}
                className="bg-white rounded-md py-1"
              >
                {rarity}
              </button>
            ))}
          </div>
        }
      />
      <FilterOptions
        title="SEEDS MINT"
        options={
          <div className="grid grid-cols-3 gap-2 text-gray-400 text-xs">
            {filterSeedMint.map((seed, i) => (
              <button
                onClick={() => setQueryParam("seed", seed)}
                key={i}
                className="bg-white rounded-md py-1"
              >
                {seed}
              </button>
            ))}
          </div>
        }
      />
      <FilterOptions
        title="LEVEL"
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
