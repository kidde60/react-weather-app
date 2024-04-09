import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CITYS from "./Cities";
import Details from "../details/Details";

const Home = () => {
  const city = useSelector((state) => state.homeReducer);
  return (
    <div className="container-home">
      <Router>
        <Routes>
          <Route exact path="/" element={<CITYS />} />
          <Route exact path="/details" element={<Details city={city} />} />
        </Routes>
      </Router>
    </div>
  );
};
export default Home;
