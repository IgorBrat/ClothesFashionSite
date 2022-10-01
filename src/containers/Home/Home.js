import React from 'react';
import {SectionWrapper, CardWrapper, HomeWrapper, StyledText} from "./Home.styled";
import HomeImage from "../../components/images/home-1.png";
import {Button} from 'antd';

const Home = () => {
  return (
    <HomeWrapper>
      <SectionWrapper>
        <StyledText>
          <h1>IBC - biggest men clothes shop in Ukraine</h1>
          <p>IBC is entering a new era. Firmly cemented as a fashion authority, follow IBC as it takes you on a journey of exploration and discovery. Championing the very best of its heritage, this next chapter celebrates cherished pieces such as tailoring, jackets and jumpers. It also embraces the new, retaining and reflecting that unique London spirit through its T-shirts, sweatshirts and accessories.</p>
          <Button type="primary">Look for our shops</Button>
        </StyledText>
        <img src={HomeImage} alt="home-img"/>
      </SectionWrapper>
      <CardWrapper>

      </CardWrapper>
    </HomeWrapper>
  )
};

export default Home;
