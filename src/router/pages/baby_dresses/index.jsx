import React from "react";
import CategoryHeader from "../../../components/core/category_header";
import babyPic from "../../../assets/img/babyPlacholder.png";
import "./style.scss";

const BabyDresses = () => {
  return (
    <div className="hole_page_container">
      <CategoryHeader {...{ category: "baby", text: "Մանկական Զգեստներ" }} />
      <div className="baby_pic_placholder">
        <div className="img_wrapper">
          <img src={babyPic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BabyDresses;
