import React from "react";
import { Carousel } from "antd";
import { useParams } from "react-router";
import womenDresses from "../../constants/women";
import style from "./style.module.scss";

const { goto, next, prev } = Carousel;

const CurrentItem = () => {
  const { id: selectedId, category } = useParams();
  const { allPhotos } = womenDresses.filter(({ id }) => id == selectedId)[0];
  return (
    <div className={style.mainContainer}>
      <div className={style.itemInfo}>
        <div className={style.itemPhotos}>
          <div className={style.allPhotos}>
            {allPhotos.map((img, key) => (
              <div className={style.photoWrapper} key={key}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
          <Carousel className={style.carousel} autoplay={false} dots={false}>
            {allPhotos.map((img, key) => (
              <div className={style.carouselItem} key={key}>
                <img src={img} alt="" />
              </div>
            ))}
          </Carousel>
          <button onClick={() => next()}>Next</button>
        </div>
        <div className={style.itemDesc}>Hell</div>
      </div>
    </div>
  );
};

export default CurrentItem;
