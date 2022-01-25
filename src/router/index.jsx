import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/core/Layout";
import Home from "./pages/home";

const Routing = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/about" exact element={<About />} /> */}
          {/* <Route path="/:category/:id" exact element={<CurrentItem />} /> */}
          {/* <Route path="/women" exact element={<Women />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};
export default Routing;
