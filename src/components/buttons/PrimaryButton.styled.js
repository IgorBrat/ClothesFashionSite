import styled from "styled-components";
import {Button} from 'antd';

const PrimaryButton = styled(Button)`
  font-size: 28px;
  height: 100%;
  background-color: grey;
  border-color: black;
  max-width: 300px;

  :hover, ::selection {
    background-color: #0d152e;
    border-color: black;
  }
  :focus {
    background-color: #301511;
    border-color: black;
  }
`;

export default PrimaryButton;
