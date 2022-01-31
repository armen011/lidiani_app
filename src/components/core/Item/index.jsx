import React from "react";
import "./style.scss";

const Item = ({ title, img, desc, price }) => {
  return (
    <div className="item_container">
      <div className="img_wrapper">
        <img src={img} alt="" />
      </div>
      <div className="hover_layer">
        <div className="info_wrapper">
          <h4>{title}</h4>
          <span className="desc">{desc}</span>
          <span className="price">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
