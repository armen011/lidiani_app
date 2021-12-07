import React, { useState } from "react";
import { Drawer, Button } from "antd";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Layoute = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div className={style.leftSideMenu}>
        <span className={style.appName}>Լիդիանի</span>
        <button className="menu" onClick={showDrawer} aria-label="Main Menu">
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path
              className={visible ? style.openedLine1 : style.line1}
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path
              className={visible ? style.openedLine2 : style.line2}
              d="M 20,50 H 80"
            />
            <path
              className={visible ? style.openedLine3 : style.line3}
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
      <div className={style.container}>
        <div className={style.children}>
          <div className={visible ? style.navBar : style.navBarHide}>
            {visible && (
              <div className={style.linkContainer}>
                <Link to="/" className={style.linkText}>
                  Հիմնական էջ
                </Link>
                <Link to="/about" className={style.linkText}>
                  Մեր մասին
                </Link>
                <div className={style.linkText}>
                  Երեկոյան Զգեստներ
                  <div className={style.subMenu}>
                    <Link to="/women" className={style.linkText}>
                      Կանանց համար
                    </Link>
                    <Link to="/kides" className={style.linkText}>
                      երեխաների համար
                    </Link>
                  </div>
                </div>
                <Link to="/contact" className={style.linkText}>
                  Հետադարձ կապ
                </Link>
                <Link to="/terms" className={style.linkText}>
                  Առաքում և պայմաններ
                </Link>
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
export default Layoute;
