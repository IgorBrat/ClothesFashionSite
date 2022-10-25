import styled from "styled-components";
import PageContainer from "../PageContainer.styled";

export const ItemPageContainer = styled(PageContainer)`
  display: flex;
  flex-direction: column;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
`;

export const DescriptionWrapper = styled.div`
  h1 {
    text-align: left;
  }

  > span {
    text-align: center;
    font-size: 20px;
    background-color: rgb(73, 72, 77);
    border-radius: 20px;
    display: inline-block;
    width: 150px;
  }

  p {
    width: 800px;
    font-size: 20px;
  }
`;

export const InputWrapper = styled.div`
  align-items: center;
  justify-content: center;

  * {
    margin-right: 20px;
  }
`;

export const ItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  h2 {
    color: white;
    font-size: 28px;
    margin: 0;
  }
`;

export const ButtonWrapper = styled.div`
  * {
    margin: 0 40px;
  }
`;
