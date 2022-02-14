import React, { useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { dropIn } from "./animation";
import ButtonWidthIcon from "../Button/ButtonWidthIcon";
import TextInput from "../Input";
import PaymentMethods from "../../payment_methods";
import Calendar from "../Calendar";
import "./style.scss";

const initianValue = {
  name: "",
  surname: "",
  phoneNumber: "",
  paymenMethod: "",
};

const Modal = ({ handleClose }) => {
  const [formValues, setFormValues] = useState(initianValue);
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal_wrapper"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal_header">
          <span className="modal_title">Պատվերել հիմա</span>
          <ButtonWidthIcon
            iconName="close_modal"
            width={40}
            height={40}
            onClick={handleClose}
          />
        </div>
        <div className="modal_content">
          <div className="calendar_wrapper">
            <span className="calendar_header">Ընտրել առաքման օրը</span>
            <Calendar />
          </div>
          <div className="form_wrapper">
            <TextInput
              name="name"
              values={formValues}
              setValues={setFormValues}
              placeholder="Գրեք անունը"
              label="Անունը"
            />
            <TextInput
              name="surname"
              values={formValues}
              setValues={setFormValues}
              placeholder="Գրեք ազգանուն"
              label="Ազգանուն"
            />
            <TextInput
              name="surname"
              values={formValues}
              setValues={setFormValues}
              placeholder="Գրեք ազգանուն"
              label="Ազգանուն"
            />
            <PaymentMethods
              {...{
                selectble: true,
                formValues,
                setFormValues,
                name: "paymenMethod",
              }}
            />
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
