import styled from "styled-components";

export const HomeWrapper = styled.div`
  color: white;
  padding: 50px 100px;

  .ant-pagination {
    justify-content: center;
  }

  h1 {
    text-align: center;
    font-size: 3.3rem;
    color: white;
    margin-bottom: 0;
  }
`;

export const StyledText = styled.div`
  font-size: 25px;

  h1 {
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

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 60px;
  img {
    width: 50%;
  }

  ${StyledText} {
    padding-right: 70px;
  }
`;

export const SectionWrapperReversed = styled(SectionWrapper)`
  flex-direction: row-reverse;
  text-align: right;
  margin-top: 60px;

  img {
    width: 60%;
  }

  ${StyledText} {
    padding-right: 0;
    padding-left: 70px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px;
`;
