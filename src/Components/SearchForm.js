import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import searchIcon from "../assets/img/search.svg";
import { searched } from "../features/filter/filterSlice";

const SearchForm = () => {
  const { search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [input, setInput] = useState(search);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searched(input));
  };
  // console.log(input);
  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src={searchIcon}
        alt="Search"
      />
    </>
  );
};

export default SearchForm;
