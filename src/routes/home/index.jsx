import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MessengerCustomerChat from "react-messenger-customer-chat";
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
        {carouselContent.map(({ id, img, category }, key) => (
          <div
            className={style.carouselItem}
            onClick={() => {
              navigate(`${category}/${id}`);
            }}
            key={key}
          >
            <div
              className={style.imgWrapper}
              style={{ width: "100%", height }}
              key={key}
            >
              <img src={img} alt="" />
            </div>
          </div>
        ))}
      </Carousel>
      <div className={style.topTree} style={{ width: "100%", height }}>
        {topTree.map(({ id, catgory, img }, key) => (
          <div className={style.dresses} key={key}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      <MessengerCustomerChat pageId="107943368276671" appId="476200953861310" />
    </div>
  );
};
export default HomePage;
