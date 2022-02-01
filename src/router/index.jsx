import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/core/Layout";
import Home from "./pages/home";
import WomenDresses from "./pages/women_dresses";
import BabyDresses from "./pages/baby_dresses";
import CurrentDress from "./pages/current_dress";

const Routing = () => {
  return (
    <Router>
      <Layout
        childrenFunc={(props) => (
          <>
            <Routes>
              <Route path="/" exact element={<Home {...props} />} />
              <Route path="/women_dresses" exact element={<WomenDresses />} />
              <Route
                path="/women_dresses/:dressId"
                exact
                element={<CurrentDress />}
              />
              <Route path="/baby_dresses" exact element={<BabyDresses />} />
            </Routes>
          </>
        )}
      />
    </Router>
  );
};
export default Routing;
