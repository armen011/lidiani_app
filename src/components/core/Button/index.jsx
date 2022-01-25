import React from "react";
import "./style.scss";

const buttonType = {
  primary: {
    className: "primary_btn",
  },
  secondary: {
    className: "secondary_btn",
  },
};
const Button = ({ type, text }) => {
  return (
    <button className={`btn ${buttonType[type].className} `}>{text}</button>
  );
};

export default Button;
