import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Layoute from "../components/Layoute";
import Women from "./Women";
import CurrentItem from "./CurrentItem";

const Routing = () => {
  return (
    <Router>
      <Layoute>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/:category/:id" exact element={<CurrentItem />} />
          <Route path="/women" exact element={<Women />} />
        </Routes>
      </Layoute>
    </Router>
  );
};
export default Routing;
