import styled from "styled-components";
import Icon from "@ant-design/icons";

export const StyledFooter = styled.div`
  display: flex;
  color: white;
  background-color: rgb(32, 24, 24);
  flex-direction: column;
  padding: 50px 0;

  h3 {
    color: white;
    margin-bottom: 0;
  }
`;

export const Upper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 40px;
  }
`;

export const Contacts = styled.div`
  line-height: 2;
`;

export const Lower = styled.div`

`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledIcon = styled(Icon)`
  font-size: 2.5rem;
  margin: 0 30px;
`;
