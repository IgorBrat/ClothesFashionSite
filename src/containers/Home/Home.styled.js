import styled from "styled-components";

export const HomeWrapper = styled.div`
  color: white;
  padding: 50px 100px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 50%;
  }
`;

export const CardWrapper = styled.div`

`;

export const StyledText = styled.div`
  font-size: 25px;
  padding: 0 50px;

  h1 {
    color: white;
    text-align: end;
  }

  Button {
    font-size: 28px;
    height: 100%;
    background-color: grey;
    border-color: black;
  }

  Button:hover, ::selection {
    background-color: #0d152e;
    border-color: black;
  }
  Button:focus {
    background-color: #301511;
    border-color: black;
  }
`;