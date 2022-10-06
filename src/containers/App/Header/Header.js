import React, {useState, useEffect} from "react";
import {Input, Button} from 'antd';
import Logo from "../../../assets/favicon.png";
import {StyledHeader, IconWrapper, ButtonWrapper, Essentials} from "./Header.styled";
import data from "../../../resources/data";
// import {searchItems} from "../../../logic/search";

const { Search } = Input;



const Header = () => {
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <StyledHeader>
      <IconWrapper>
        <img src={Logo} alt="header-logo"/>
        <h2>IBC Clothes Shop</h2>
      </IconWrapper>
      <Essentials>
        <Search
          id="search_title"
          placeholder="Input search text"
          allowClear
          onSearch={(value, event) => {
            setSearchTitle(value);
            console.log(searchTitle);
          }}
          style={{
            width: 200,
          }}
        />
        <ButtonWrapper>
          <Button type="primary">Log in</Button>
          <Button>Sign up</Button>
        </ButtonWrapper>
      </Essentials>
    </StyledHeader>
  );
  };

export default Header;
