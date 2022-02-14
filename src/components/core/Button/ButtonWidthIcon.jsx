import React from "react";
import Icon from "../Icon";

const ButtonWidthIcon = ({ iconName, onClick, className, width, height }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      <Icon iconName={iconName} width={width} height={height} />
    </button>
  );
};

export default ButtonWidthIcon;
