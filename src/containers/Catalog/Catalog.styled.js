import styled from "styled-components";

export const CatalogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Essentials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FilterWrapper = styled.div`
  font-size: 25px;

  .ant-select {
    margin: 0 20px;
  }
`;
