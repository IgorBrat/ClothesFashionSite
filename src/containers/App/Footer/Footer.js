import React from 'react';
import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
} from "@ant-design/icons";
import {StyledFooter, Upper, Lower, IconsWrapper, StyledIcon, Info, Contacts, Header} from "./Footer.styled.js";
import Logo from "../../../assets/favicon.png";

const Footer = () => {
  return (
    <StyledFooter>
      <Upper>
        <Info>
          <Header>
            <img src={Logo} alt="header-logo"/>
            <h3>IBC Clothes - master them all!</h3>
          </Header>
          <p>Fashion for men - my answer is yes, definitely yes.</p>
          <span><i>© Igor Patus</i></span>
        </Info>
        <Contacts>
          <span><b>Phone number 1:</b><i> +3900394100</i><br/></span>
          <span><b>Phone number 2:</b><i> +3900394101</i><br/></span>
          <span><b>Email:</b><i> ICBshop@gmail.com</i><br/></span>
          <span><b>HQ address:</b><i> (323) 238-0629<br/>
            909-1/2 E 49th St<br/>
          Los Angeles, California(CA), 90011</i></span>
        </Contacts>
      </Upper>
      <Lower>
        <IconsWrapper>
          <StyledIcon component={YoutubeOutlined} />
          <StyledIcon component={TwitterOutlined} />
          <StyledIcon component={LinkedinOutlined} />
          <StyledIcon component={InstagramOutlined} />
        </IconsWrapper>
      </Lower>
    </StyledFooter>
  );
}

export default Footer;
