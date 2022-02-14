import React from "react";
import idram from "../../assets/img/idram.png";
import telcell from "../../assets/img/telcell.png";
import visa from "../../assets/img/visa.png";
import arca from "../../assets/img/arca.png";
import maestro from "../../assets/img/maestro.png";
import "./style.scss";

const paymentMethodeList = [
  { id: "idram", img: idram, alt: "pay with idram" },
  { id: "telcell", img: telcell, alt: "pay with telcell" },
  { id: "visa", img: visa, alt: "pay with visa card" },
  { id: "arca", img: arca, alt: "pay with arca card" },
  { id: "maestro", img: maestro, alt: "pay with maestro card" },
];

const PaymentMethods = ({ selectble, formValues, setFormValues, name }) => {
  return (
    <div className={selectble ? "selectble_paymen_wrapper" : "payment_wrapper"}>
      <span>Վճարման Տեսակները</span>

      {paymentMethodeList.map(({ id, img, alt }, index) => (
        <button
          className={`payment_type_wrapper ${
            selectble && formValues[`${name}`] === id && "active"
          }`}
          onClick={() =>
            selectble &&
            setFormValues((state) => ({ ...state, [`${name}`]: id }))
          }
          key={index}
        >
          <img src={img} alt={alt} />
        </button>
      ))}
    </div>
  );
};

export default PaymentMethods;
