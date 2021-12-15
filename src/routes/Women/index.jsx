import React from "react";
import womenDresses from "../../constants/women";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";

export default function Women() {
  const navigate = useNavigate();
  return (
    <div className={style.mainContainer}>
      {womenDresses.map(({ id, img, title, subTitle, price }, key) => (
        <div
          className={style.itemContainer}
          key={key}
          onClick={() => navigate(`/women/${id}`)}
        >
          <div className={style.imgWrapper}>
            <img src={img} alt="" />
          </div>
          <div className={style.contenteWrapper}>
            <span className={style.title}>{title}</span>
            <span>{subTitle}</span>
            <span>{price}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
