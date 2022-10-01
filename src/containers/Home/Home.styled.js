import styled from "styled-components";

export const HomeWrapper = styled.div`
  color: white;
  padding: 50px 100px;

  h1 {
    color: white;
    text-align: end;
  }
  > h1 {
    text-align: center;
    font-size: 3.3rem;
    margin-top: 50px;
    margin-bottom: 0;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 50%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px;
`;

export const StyledText = styled.div`
  font-size: 25px;
  padding-right: 70px;

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
