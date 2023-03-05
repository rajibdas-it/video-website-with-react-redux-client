import React from "react";
import Pagination from "../../Components/Pagination";
import Tags from "../../Components/Tags";
import Videos from "../../Components/Videos";

const Home = () => {
  return (
    <div>
      <Tags />
      <Videos />
      <Pagination />
    </div>
  );
};

export default Home;
