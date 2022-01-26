import React from "react";
import "./style.scss";
import babyPic from "../../../assets/img/babyBig.png";
import womenPic from "../../../assets/img/womenBig.png";
import Icon from "../Icon";

const CategoryHeader = ({ category, text }) => {
  return (
    <div className="category_header_container">
      <div className="category_header_wrapper">
        <div className="category_name_container">
          <span>{text}</span>
        </div>
        <div className="category_img_container">
          <img src={category === "baby" ? babyPic : womenPic} alt="" />
        </div>
      </div>
      <div className="category_route_conatiner">
        <div className="category_route_wrapper">
          <span className="simple_text">Երեկոյան Զգեստներ</span>
          <Icon iconName="route_arrow" width={8} height={14} />
          <span className="bolt_text">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
