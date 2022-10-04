import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0px;
  flex-wrap: wrap;
  flex: 1 0 20%;

  + div {
    display: flex;
    justify-content: center;
  }
`;
