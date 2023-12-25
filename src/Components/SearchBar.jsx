import React from "react";

const SearchBar = ({ search, setSearch, searchHandler }) => {
  return (
    <div className="flex gap-2 items-center mt-3 justify-center">
      <input
        className="block w-full p-2  ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        placeholder="Type here to search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          searchHandler();
        }}
      />
      <button
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4  text-center h-10 w-20 "
        onClick={searchHandler}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
