import styled from "styled-components";
import {Card} from "antd";

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCard = styled(Card)`
  cursor: default;
  width: 350px;
  height: 100%;
  transition: width 0.5s, font-size 0.5s;
  margin: 40px 0;
  // margin-right: 70px;

  Button {
    opacity: 0;
  }

  :hover {
    width: 400px;
    font-size: 1rem;
  }
  :hover Button {
    opacity: 1;
  }
`;
