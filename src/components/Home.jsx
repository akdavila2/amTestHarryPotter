import React from "react";
import Cards from "./Cards";
import AccionesHeader from "./AccionesHeader";
import Header from "./Header";
import Filter from "./Filter";

const Home = () => {

  return (
    <div className="home-container">
      <AccionesHeader />
      <Header />
      <Filter />
      <Cards />
    </div>
  );
};

export default Home;
