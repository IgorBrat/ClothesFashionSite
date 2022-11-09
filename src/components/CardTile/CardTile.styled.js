import styled from "styled-components";

const StyledCardTile = styled.div`
  background-color: rgb(184, 188, 201);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 5px solid grey;

  img {
    width: 150px;
  }

  > h2 {
    width: 250px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: inherit;
  align-items: inherit;
`;

export const CountWrapper = styled.div`
  display: inherit;
  align-items: inherit;

  h2 {
    margin: 0 20px;
  }
`;

export const ChangeButton = styled.button`
  width: 40px;
  height: 40px;
  color: black;
  font-size: 25px;
  text-align: center;
  line-height: 20px;
`;

export default StyledCardTile;
