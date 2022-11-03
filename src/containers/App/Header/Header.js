import React from "react";
import {Button} from 'antd';
import Logo from "../../../assets/favicon.png";
import {StyledHeader, IconWrapper, ButtonWrapper, Essentials} from "./Header.styled";
import {logOutUser} from "../../../local_storage/localStorageLogic.js";

const Header = () => {
  return (
    <StyledHeader>
      <IconWrapper>
        <img src={Logo} alt="header-logo"/>
        <h2>IBC Clothes Shop</h2>
      </IconWrapper>
      <Essentials>
        <ButtonWrapper>
          <Button type="primary" onClick={() => {
            logOutUser();
            window.open('/login', '_self');
          }}>Log out</Button>
        </ButtonWrapper>
      </Essentials>
    </StyledHeader>
  );
  };

export default Header;
