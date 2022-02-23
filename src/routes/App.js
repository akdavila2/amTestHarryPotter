import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Modal from "../components/Modal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/modal" element={<Modal />} />
      </Routes>
    </Router>
  );
};

export default App;
