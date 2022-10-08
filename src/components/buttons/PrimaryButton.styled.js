import styled from "styled-components";
import {Button} from 'antd';

export const PrimaryButton = styled(Button)`
  font-size: 28px;
  height: 100%;
  background-color: grey;
  border-color: black;

  :hover, ::selection {
    background-color: #0d152e;
    border-color: black;
  }
  :focus {
    background-color: #301511;
    border-color: black;
  }
`;
