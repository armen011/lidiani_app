import React, { useContext, memo } from "react";

import logo from "../../../assets/img/lidiani_logo.png";
import useWindowDimiisions from "../../../hooks";
import "./style.scss";

const LayoutWhithHeader = ({ children }) => {
  const [width, height] = useWindowDimiisions();
  return (
    <div className="full_page_wrapper">
      <div className="header">
        <div className="logo_wrapper">
          <img src={logo} alt="lidiani" />
        </div>
        <ul className="navbar">
          <li className="link_button">Հիմնական էջ</li>
          <li className="link_button">Մեր մասին </li>
          <li className="link_button">Երեկոյան Զգեստներ</li>
          <li className="link_button">Հետադարձ կապ</li>
          <li className="link_button">Առաքում և պայմաններ</li>
        </ul>
      </div>
      <div
        className="children_container"
        style={{ width, height: height - 80 }}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(LayoutWhithHeader);
