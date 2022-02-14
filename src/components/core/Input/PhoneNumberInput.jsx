import React from "react";
import "./style.scss";

const PhoneNumberInput = ({ name, placeholder, label, values, setValues }) => {
  return (
    <label className="label_input">
      <span className="label_text">{label}</span>
      <input
        type="text"
        className="input"
        value={values[`${name}`]}
        onChange={({ target: { value } }) =>
          setValues((state) => ({ ...state, [`${name}`]: value }))
        }
        placeholder={placeholder}
      />
    </label>
  );
};

export default PhoneNumberInput;
