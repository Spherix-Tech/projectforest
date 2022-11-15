import React, { useState } from "react";

const FilterOptions = ({ title, options, open = false }) => {
  const [toggle, setToggle] = useState(open);
  return (
    <div className="border-[#CECECE] border-opacity-40 border-b py-4 px-2">
      <div className="flex justify-between items-center py-1 pr-1">
        <h1 className="text-sm font-medium text-[#3A3A3C]">{title}</h1>
        <button className="text-sm" onClick={() => setToggle((prev) => !prev)}>
          {toggle ? "+" : "-"}
        </button>
      </div>
      {toggle && options}
    </div>
  );
};

export default FilterOptions;
