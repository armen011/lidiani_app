import React from "react";
import "./style.scss";

const OrderButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn order_button">
      Պատվիրել Հիմա
    </button>
  );
};

export default OrderButton;
