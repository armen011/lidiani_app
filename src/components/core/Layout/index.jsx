import React, { memo, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../../assets/img/lidiani_logo.png";
import useWindowDimiisions from "../../../hooks";
import "./style.scss";
import womenPic from "../../../assets/img/women.png";
import babyPic from "../../../assets/img/baby.png";
import Icon from "../Icon";
import Footer from "../Footer";

const LayoutWhithHeader = ({ childrenFunc }) => {
  const [width, height] = useWindowDimiisions();
  const [isSubBarOpened, setIsSubBarOpened] = useState(false);
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const deliveryRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/baby_dresses") {
      setActive("baby");
    } else if (location.pathname === "/women_dresses") {
      setActive("women");
    }
  }, [location]);

  const goTo = (ref, string) => () => {
    setIsSubBarOpened(false);
    setActive(string);
    if (location.pathname !== "/") {
      navigate("/");
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="full_page_wrapper">
      <div className="header">
        <div className="logo_wrapper">
          <img src={logo} alt="lidiani" />
        </div>
        <ul className="navbar">
          <li
            className={`link_button ${active === "home" && "active"}`}
            onClick={goTo(homeRef, "home")}
          >
            Հիմնական էջ
          </li>
          <li
            className={`link_button ${active === "about" && "active"}`}
            onClick={goTo(aboutRef, "about")}
          >
            Մեր մասին
          </li>
          <li
            className={`link_button ${
              (active === "women" || active === "baby") && "active"
            }`}
            onClick={() => setIsSubBarOpened(!isSubBarOpened)}
          >
            Երեկոյան Զգեստներ
            <Icon
              iconName="dropdown_arrow"
              width={24}
              height={24}
              className="arrow"
              style={{
                transform: isSubBarOpened ? "rotate(0)" : "rotate(90deg)",
              }}
            />
          </li>
          <li
            className={`link_button ${active === "contact" && "active"}`}
            onClick={goTo(contactRef, "contact")}
          >
            Հետադարձ կապ
          </li>
          <li
            className={`link_button ${active === "terms" && "active"}`}
            onClick={goTo(deliveryRef, "terms")}
          >
            Առաքում և պայմաններ
          </li>
        </ul>
      </div>
      <div
        className={
          isSubBarOpened
            ? "sub_bur_container_opened"
            : "sub_bur_container_closed"
        }
      >
        <div
          className="category_container"
          onClick={() => {
            setIsSubBarOpened(false);
            navigate("/women_dresses");
            setActive("women");
          }}
        >
          <img src={womenPic} alt="" />
          <div
            className="category_container_hover"
            style={{ opacity: active === "women" ? "1" : "0" }}
          >
            <span>Կանացի</span>
          </div>
        </div>
        <div
          className="category_container"
          onClick={() => {
            setIsSubBarOpened(false);
            navigate("/baby_dresses");
            setActive("baby");
          }}
        >
          <img src={babyPic} alt="" />
          <div
            className="category_container_hover"
            style={{
              opacity: active === "baby" ? "1" : "0",
            }}
          >
            <span>Մանկական</span>
          </div>
        </div>
      </div>
      <div
        className="children_container"
        style={{ width, height: height - 80 }}
      >
        {childrenFunc({
          homeRef,
          aboutRef,
          deliveryRef,
        })}
        <Footer ref={contactRef} />
      </div>
    </div>
  );
};

export default memo(LayoutWhithHeader);
