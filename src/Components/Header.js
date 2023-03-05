import React from "react";
import lws_logo from "../assets/img/lws.svg";
import SearchForm from "./SearchForm";
const Header = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <a href="/">
          <img className="h-10" src={lws_logo} alt="Learn with Sumit" />
        </a>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <SearchForm />
        </div>
      </div>
    </nav>
  );
};

export default Header;
