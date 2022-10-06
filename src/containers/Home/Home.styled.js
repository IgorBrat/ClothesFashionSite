import styled from "styled-components";

export const StyledText = styled.div`
  font-size: 25px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 60px;
  img {
    width: 50%;
  }

  ${StyledText} {
    padding-right: 70px;

    h1 {
      text-align: left;
    }
  }
`;

export const SectionWrapperReversed = styled(SectionWrapper)`
  flex-direction: row-reverse;
  text-align: right;
  margin-top: 60px;

  img {
    width: 60%;
  }

  ${StyledText} {
    padding-right: 0;
    padding-left: 70px;

    h1 {
      text-align: right;
    }
  }
`;

export const CatalogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonWrapper = styled.div``;
