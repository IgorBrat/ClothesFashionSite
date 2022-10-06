import React, {useState, useEffect} from "react";
import {Button} from 'antd';
import Logo from "../../../assets/favicon.png";
import {StyledHeader, IconWrapper, ButtonWrapper, Essentials} from "./Header.styled";
import data from "../../../resources/data";

const Header = () => {
  return (
    <StyledHeader>
      <IconWrapper>
        <img src={Logo} alt="header-logo"/>
        <h2>IBC Clothes Shop</h2>
      </IconWrapper>
      <Essentials>
        <ButtonWrapper>
          <Button type="primary">Log in</Button>
          <Button>Sign up</Button>
        </ButtonWrapper>
      </Essentials>
    </StyledHeader>
  );
  };

export default Header;
