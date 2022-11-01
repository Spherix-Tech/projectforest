import React, { useState } from "react";

const FilterOptions = ({ title, options }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="border-stone-300 border-b py-4 px-2">
      <div className="flex justify-between items-center py-1 pr-1">
        <h1 className="text-sm">{title}</h1>
        <button className="text-sm" onClick={() => setToggle((prev) => !prev)}>
          {toggle ? "+" : "-"}
        </button>
      </div>
      {!toggle && options}
    </div>
  );
};

export default FilterOptions;
