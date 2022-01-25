import React, { useContext } from "react";
import Button from "../../../components/core/Button";
import pic from "../../../assets/img/first.webp";
import useWindowDimiisions from "../../../hooks";
import "./style.scss";
import Icon from "../../../components/core/Icon";

const HomePage = () => {
  const [width, height] = useWindowDimiisions();
  const sectionStyle = { width, height: height - 80 };
  return (
    <>
      <div className="section_container first_section" style={sectionStyle}>
        <div className="info_bar">
          <div className="info_texts">
            <span>
              Վարձույթ-սրահ Լիդիանի. Զգեստներ՝ արժեքը գնահատող կանանց համար
            </span>
          </div>
          <Button type="secondary" text="Տեսնել ավելին" />
        </div>
        <div className="slider_wrapper">hell</div>
      </div>
      <div className="section_container second_section" style={sectionStyle}>
        <div className="top_tree_title_wrapper">
          <span>Ամենաշատ Հավանած</span>
        </div>
        <div className="top_tree_item_container">
          <div className="top_tree_item">
            <img src={pic} alt="" />
            <div className="top_tree_item_hover">
              <Button type="primary" text="Տեսնել ավելին" />
            </div>
          </div>
          <div className="top_tree_item">
            <img src={pic} alt="" />
            <div className="top_tree_item_hover">
              <Button type="primary" text="Տեսնել ավելին" />
            </div>
          </div>
          <div className="top_tree_item">
            <img src={pic} alt="" />
            <div className="top_tree_item_hover">
              <Button type="primary" text="Տեսնել ավելին" />
            </div>
          </div>
        </div>
      </div>
      <div className="additional_info_bar">
        <div className="info_container">
          <Icon iconName="additional_info_customer" width={128} height={128} />
          <div className="info_text_container">
            <h5>50+</h5>
            <span>Գոհ Հաճախորդ</span>
          </div>
        </div>
        <div className="info_container">
          <Icon iconName="additional_info_dress" width={128} height={128} />
          <div className="info_text_container">
            <h5>45+</h5>
            <span>Զգեստներ</span>
          </div>
        </div>
      </div>
      <div className="about_section" style={sectionStyle}>
        <div className="about_text">
          <h3>Մեր Մասին</h3>
          <span>
            Urna volutpat elit et lectus consectetur non. Diam pellentesque enim
            justo aliquet odio mi ut. Cras nunc pellentesque amet vel dignissim
            non porta. Amet, aliquet scelerisque ut tortor. Euismod in vel
            dignissim neque et eu nunc. Est proin pellentesque diam est turpis
            maecenas mi amet scelerisque. Lacus purus arcu ut eu. Duis nulla
            ultricies sed diam. Dui fringilla vitae elit purus faucibus dolor et
            egestas. Tristique varius mi dui pellentesque porta. Enim id
            malesuada risus arcu egestas ac vitae ultrices. Magna vestibulum id
            scelerisque id sit dictum. Nisl auctor mauris nec, dignissim. .
          </span>
        </div>
        <div className="about_pic_wrapper">
          <img src="" alt="" />
        </div>
      </div>
      <div className="info_about_our_clients">
        <div className="text_wrapper_about_clients">
          <p>Մեր Հաճախորդները Նրբաճաշակ են և Նորաոճ </p>
        </div>
        <div className="icon_container_clients"></div>
      </div>
    </>
  );
};

export default HomePage;
