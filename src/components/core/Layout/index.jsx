import React, { memo, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../../assets/img/lidiani_logo.png";
import womenPic from "../../../assets/img/women.png";
import babyPic from "../../../assets/img/baby.png";
import Icon from "../Icon";
import Footer from "../Footer";
import Modal from "../Modal";
import { AnimatePresence } from "framer-motion";
import "./style.scss";

const LayoutWhithHeader = ({ childrenFunc }) => {
  const [isSubBarOpened, setIsSubBarOpened] = useState(false);
  const [isMenuBarOpened, setIsMenuBarOpened] = useState(false);
  const [active, setActive] = useState("home");
  const [modalOpened, setModalOpened] = useState(false);
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
      <AnimatePresence exitBeforeEnter={true}>
        {modalOpened && (
          <Modal
            modalOpened={modalOpened}
            handleClose={() => setModalOpened(false)}
          />
        )}
      </AnimatePresence>

      <div className="header">
        <div className="logo_wrapper">
          <img src={logo} alt="lidiani" onClick={() => navigate("/")} />
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
        <button
          className={
            isMenuBarOpened
              ? "hamburger_wrapper_opened"
              : "hamburger_wrapper_closed"
          }
          onClick={() => setIsMenuBarOpened((prev) => !prev)}
        >
          <div />
        </button>
      </div>
      <div className={`navbar_mobile ${isMenuBarOpened && "opened"}`}>
        <span className="menu_title">Մենյու</span>
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
        <ul
          className={`sub_bar_wrapper ${!isSubBarOpened && "sub_bar_closed"}`}
        >
          <li
            className="category_container_mobile"
            onClick={() => {
              setIsSubBarOpened(false);
              setIsMenuBarOpened(false);
              navigate("/women_dresses");
              setActive("women");
            }}
          >
            <img src={womenPic} alt="" />
            <div className={`category_container_hover`}>
              <span>Կանացի</span>
            </div>
          </li>
          <li
            className="category_container_mobile"
            onClick={() => {
              setIsSubBarOpened(false);
              setIsMenuBarOpened(false);
              navigate("/baby_dresses");
              setActive("baby");
            }}
          >
            <img src={babyPic} alt="" />
            <div className={`category_container_hover`}>
              <span>Մանկական</span>
            </div>
          </li>
        </ul>
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
            className={`category_container_hover ${
              active === "women" && "selected"
            }`}
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
            className={`category_container_hover ${
              active === "baby" && "selected"
            }`}
          >
            <span>Մանկական</span>
          </div>
        </div>
      </div>
      <div className="children_container">
        {childrenFunc({
          homeRef,
          aboutRef,
          deliveryRef,
          handleOpenModal: () => setModalOpened(true),
        })}
        <Footer ref={contactRef} />
      </div>
    </div>
  );
};

export default memo(LayoutWhithHeader);
