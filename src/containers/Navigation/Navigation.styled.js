import styled from "styled-components";

export const Wrapper = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    padding: 20px;
  }

  li {
    font-size: 20px;
    margin: 10px 50px;

    a {
      color: grey;
      text-decoration: none;
    }

    a.selected {
      color: white;
    }
  }
`;
