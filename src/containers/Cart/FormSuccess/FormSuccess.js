import React from "react";
import SuccessIcon from "../../../assets/success-icon.png";
import SuccessContainer from "./SuccessContainer.styled";

const FormSuccess = () => {
  return (
    <SuccessContainer>
      <img src={SuccessIcon} alt="success-icon"/>
      <h1>Success!</h1>
      <p>Your order was sent to processing.<br/>
      Check your email box for payment confirmation.</p>
    </SuccessContainer>
  );
};

export default FormSuccess;
