import React, {useState, useEffect} from 'react';
import {SectionWrapper, CatalogWrapper, ButtonWrapper, SectionWrapperReversed, StyledText} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem.js";
import HomeImage1 from "../../assets/home-1.png";
import HomeImage2 from "../../assets/home-2.png";
import {Fade} from "react-awesome-reveal";
import PrimaryButton from "../../components/buttons/PrimaryButton.styled.js";
import PageContainer from "../PageContainer.styled.js";
import CardWrapper from "../Catalog/CardWrapper/CardWrapper";
import {NavLink} from "react-router-dom";
import Loader from "../../components/Loader/Loader.styled";
import {getAllItems} from "../../api/items_api";

const Home = () => {
  const [count, setCount] = useState(4);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllItems().then((response) => {
      setItems(response.slice(0, count));
      setIsLoading(false);
    });
  }, [count]);

  const showMore = () => {
    if (count < 8) {
      setCount(count+4);
    }
    else {
      window.open("/catalog","_self");
    }
  };

  return (
    <PageContainer>
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
        {isLoading && <Loader />}
        <CatalogWrapper>
          <CardWrapper>
            {items.map(({ id, title, image, brand, price }, idx) => (
              <CardItem
                id={id}
                title={title}
                image={image}
                brand={brand}
                price={price}
                key={id}
              />
            ))}
          </CardWrapper>
          <ButtonWrapper>
            <PrimaryButton type="primary" onClick={() => showMore()}>
                Show more
            </PrimaryButton>
          </ButtonWrapper>
        </CatalogWrapper>
      </Fade>
    </PageContainer>
  );
};

export default Home;
