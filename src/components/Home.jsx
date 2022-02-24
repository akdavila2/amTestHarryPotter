import React from "react";
import Cards from "./Cards";
import AccionesHeader from "./AccionesHeader";
import Header from "./Header";

const Home = () => {
  return (
    <div className="home-container">
      <AccionesHeader />
      <Header />
      <Cards />
    </div>
  );
};

export default Home;
