import React from "react";
import SuccessIcon from "../../../assets/success-icon.png";
import SuccessContainer from "./SuccessContainer.styled";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../../../components/buttons/SecondaryButton.styled.js";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <SuccessContainer>
      <img src={SuccessIcon} alt="success-icon"/>
      <h1>Success!</h1>
      <p>Your order was sent to processing.<br/>
      Check your email box for payment confirmation.</p>
      <SecondaryButton onClick={() => navigate('/')}>Go to Home page</SecondaryButton>
    </SuccessContainer>
  );
};

export default SuccessPage;
