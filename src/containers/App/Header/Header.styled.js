import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  padding: 20px 0px;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  // background-color: rgba(42, 42, 56, 1);

  h2 {
    margin: 0;
    color: white;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  Button {
    margin: 5px;
    width: 100px;
  }
`;

export const Essentials = styled.div`
  display: flex;
  align-items: center;
`;