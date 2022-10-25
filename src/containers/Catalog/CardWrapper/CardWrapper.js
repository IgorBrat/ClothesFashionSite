import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px 0px;
  flex-wrap: wrap;
  flex: 1 0 20%;

  + div {
    display: flex;
    justify-content: center;
  }
`;

export default CardWrapper;
