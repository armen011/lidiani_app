import React, { memo } from "react";
import Icon from "../Icon";
import "./style.scss";

const Footer = React.forwardRef((props, ref) => {
  return (
    <div className="main_footer" ref={ref} {...props}>
      <div className="info_text">
        <div className="info_text_title">
          <span>Հետադարձ Կապ</span>
        </div>
        <div className="info_text_with_icon">
          <Icon iconName="contact_position" width={32} height={32} />
          <span>ք Գյումրի, Անի թաղամաս 7</span>
        </div>
        <a href="tel:+37498453094" className="info_text_with_icon">
          <Icon iconName="contact_phone" width={32} height={32} />
          <span>+374 (98) 45-30-94</span>
        </a>
        <a href="mailto:lidianiboutique@mai.ru" className="info_text_with_icon">
          <Icon iconName="contact_email" width={32} height={32} />
          <span>lidianiboutique@mai.ru</span>
        </a>
        <div className="info_text_insta_fb">
          <a href="./" className="icon_text_href">
            <Icon iconName="contact_fb" width={33} height={32} />
            <span>Facebook</span>
          </a>
          <a href="./" className="icon_text_href">
            <Icon iconName="contact_insta" width={33} height={32} />
            <span>Intagram</span>
          </a>
        </div>
      </div>
      <div className="info_map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d938.4038295251704!2d43.8282327644096!3d40.829263990092976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4041f90a23eaec79%3A0x83b7ca17d8b2e1bb!2sVII%20St%2C%20Gyumri%2C%20Armenia!3m2!1d40.828777699999996!2d43.8286246!5e0!3m2!1sen!2s!4v1643230311761!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
});

export default memo(Footer);
