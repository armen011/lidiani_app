import React from "react";
import OrderButton from "../../../components/core/Button/OrderButton";
import PaymentMethods from "../../../components/payment_methods";
import Slider from "../../../components/core/Slider";
import "./style.scss";

export const images = [
  "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
];

const CurrentDress = ({ handleOpenModal }) => {
  return (
    <div className="hole_page_container_current">
      <div className="content_container">
        <div className="all_img_container">
          {images.map((src, index) => (
            <div
              className={index === 1 ? "img_wrapper active" : "img_wrapper"}
              key={index}
            >
              <img src={src} alt="" />
            </div>
          ))}
        </div>
        <Slider className="slider_container" />
        <div className="info_bar">
          <div className="wrapper_div">
            <h3 className="title">Կանանց Զգեստներ</h3>
            <span className="decription">
              Մեր մասին որ մտնին թող բացվի նկարը, որը ես քեզի կտելեգրամեմ, տակը
              էղնի բլոկ, որի մեջ կեղնի մեծ գրած «Ո՞վ ենք մենք» ու իրա տակը
              քիչիկմ փոքր գրած էղնի «Երբևէ մտածե՞լ եք՝ ինչեր կարելի է անել այն
              զգեստի գումարով, որը պատրաստ եք ձեռք բերել ու 1 անգամից հետո կախել
              զգեստապահարանում», իսկ սրա տակը իրանից ավելի փոքր գրած՝ «Լիդիանի
              ստեղծագործ թիմը վաղուց է մտածել այդ մասին և հիմնադրել ամենաշքեղ
              երեկոյան զգեստների վարձույթ-սրահը, որը տրամադրում է առաջատար
              դիզայներների հանրահայտ զգեստները՝ հասանելի արժեքով»
            </span>
          </div>
          <div className="wrapper_div">
            <div className="order_wrapper">
              <div className="price_bar">
                <span className="price_name">Արժեքը ։</span>
                <span className="price">2,400 դրամ</span>
              </div>
              <OrderButton onClick={handleOpenModal} />
            </div>
            <PaymentMethods />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentDress;
