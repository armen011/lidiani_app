import React from "react";
import womenDresses from "../../constants/women";
import style from "./style.module.scss";

export default function Women() {
  return (
    <div className={style.mainContainer}>
      {womenDresses.map(({ id, img, title, subTitle, price }, key) => (
        <div className={style.itemContainer}>
          <div className={style.imgWrapper} key={key}>
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
