import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dimmisonContext } from "../../App";
import { Carousel } from "antd";
import carouselContent from "../../constants/carousel";
import style from "./style.module.scss";
import topTree from "../../constants/topTree";

const HomePage = () => {
  const navigate = useNavigate();
  const [width, height] = useContext(dimmisonContext);

  return (
    <div className={style.homePage}>
      <Carousel autoplay>
        {carouselContent.map(({ id, img, category }) => (
          <div
            className={style.carouselItem}
            onClick={() => {
              navigate(`${category}/${id}`);
            }}
          >
            <div className={style.imgWrapper} style={{ width: "100%", height }}>
              <img src={img} />
            </div>
          </div>
        ))}
      </Carousel>
      <div className={style.topTree} style={{ width: "100%", height }}>
        {topTree.map(({ id, catgory, img }) => (
          <div className={style.dresses}>
            <img src={img} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
