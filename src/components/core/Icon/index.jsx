import React from "react";
import icons from "../../../assets/icon/paths.json";

const Icon = ({ iconName, width, height, ...otherProps }) => {
  return (
    <div {...{ ...otherProps }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...{ width, height }}
        dangerouslySetInnerHTML={{ __html: icons[iconName] }}
      ></svg>
    </div>
  );
};

export default Icon;
