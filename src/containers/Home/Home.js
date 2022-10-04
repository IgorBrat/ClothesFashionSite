import React from 'react';
import {SectionWrapper, CatalogWrapper, SectionWrapperReversed, CardWrapper, HomeWrapper, StyledText} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem.js";
import HomeImage1 from "../../assets/home-1.png";
import HomeImage2 from "../../assets/home-2.png";
import { Fade } from "react-awesome-reveal";
import {Button} from 'antd';
import {data} from "../../resources/data";
import {PrimaryButton} from "../../components/buttons/PrimaryButton.styled.js";

const Home = () => {
  return (
    <HomeWrapper>
      <Fade duration={3000}>
        <SectionWrapper>
          <StyledText>
            <h1>IBC - biggest men clothes shop in Ukraine</h1>
            <p>IBC is entering a new era. Firmly cemented as a fashion authority, follow IBC as it takes you on a journey of exploration and discovery. Championing the very best of its heritage, this next chapter celebrates cherished pieces such as tailoring, jackets and jumpers. It also embraces the new, retaining and reflecting that unique London spirit through its T-shirts, sweatshirts and accessories.</p>
            <PrimaryButton type="primary">Look for our shops</PrimaryButton>
          </StyledText>
          <img src={HomeImage1} alt="home-img-1"/>
        </SectionWrapper>
        <SectionWrapperReversed>
          <StyledText>
            <h1>Shop latest releases</h1>
            <p>Look forward to, and get ready for spring & summer with our latest collection. Explore our new season looks with a focus on layering, lightweight essentials and statement shirts. Need something for that 'save the date'? Check out our occasionwear for when you need an extra smartness boost. Sunny and warmer days are coming so get your wardrobe as ready as you are.</p>
            <PrimaryButton type="primary">Latest season</PrimaryButton>
          </StyledText>
          <img src={HomeImage2} alt="home-img-2"/>
        </SectionWrapperReversed>
        <h1>Browse our catalog!</h1>
        <CatalogWrapper>
          <CardWrapper>
            {data.map(({ title, image, brand, price }, idx) => (
              <CardItem
                title={title}
                image={image}
                brand={brand}
                price={price}
                key={idx}
              />
            ))}
          </CardWrapper>
          <div>
            <PrimaryButton type="primary">Show more</PrimaryButton>
          </div>
        </CatalogWrapper>
      </Fade>
    </HomeWrapper>
  );
};

export default Home;
