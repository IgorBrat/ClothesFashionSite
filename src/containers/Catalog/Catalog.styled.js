import styled from "styled-components";

export const Essentials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FilterWrapper = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;

  .ant-select, .ant-input-number-group-wrapper {
    margin: 0 10px;
  }
`;
