import React from "react";

const PriceFilter = ({ price, setPrice, searchHandler }) => {
  return (
    <div className="flex justify-center flex-col mt-2">
      {/* <label className="font-semibold" htmlFor="minmax-range">
        Price Filter
      </label> */}
      <div className="flex gap-4 justify-center items-center">
        <input
          onInput={(e) => {
            setPrice(e.target.value);
            searchHandler();
          }}
          id="minmax-range"
          min="0"
          max="3000"
          type="range"
          value={price}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
        />

        <span className="text-gray-800 w-4">${price}</span>
      </div>
    </div>
  );
};

export default PriceFilter;
