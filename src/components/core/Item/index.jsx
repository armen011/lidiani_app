import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../Icon";
import "./style.scss";

const Item = ({ id, title, img, desc, price }) => {
  const navigate = useNavigate();
  return (
    <div className="item_container" onClick={() => navigate(`${5}`)}>
      <div className="img_wrapper">
        <img src={img} alt="" />
      </div>
      <div className="hover_layer">
        <div className="title_icon">
          <span className="title">Ամրագրիր քո երազանքների զգեստը</span>
          <div className="icon_text">
            <Icon iconName="truck_small" width={48} height={48} />
            <span>Առաքում դեպի Երևան</span>
          </div>
        </div>
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
