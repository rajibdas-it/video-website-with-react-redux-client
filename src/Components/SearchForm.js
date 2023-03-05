import React from "react";
import search from "../assets/img/search.svg";

const SearchForm = () => {
  return (
    <>
      <form>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />
      </form>
      <img className="inline h-4 cursor-pointer" src={search} alt="Search" />
    </>
  );
};

export default SearchForm;
