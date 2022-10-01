import React from 'react';
import {SectionWrapper, CardWrapper, HomeWrapper, StyledText} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem.js";
import HomeImage from "../../assets/home-1.png";
import {Button} from 'antd';
import ImgModel from "../../assets/home-1.png"

const data = [
  {
    title: "Clothes 1",
    image: ImgModel,
    brand: "Reebok",
    price: 715,
  },
  {
    title: "Clothes 2",
    image: ImgModel,
    brand: "Nike",
    price: 540,
  },
  {
    title: "Clothes 3",
    image: ImgModel,
    brand: "Adidas",
    price: 1610,
  },
  {
    title: "Clothes 4",
    image: ImgModel,
    brand: "Channel",
    price: 1610,
  },
];

const Home = () => {
  return (
    <HomeWrapper>
      <SectionWrapper className="reveal">
        <StyledText>
          <h1>IBC - biggest men clothes shop in Ukraine</h1>
          <p>IBC is entering a new era. Firmly cemented as a fashion authority, follow IBC as it takes you on a journey of exploration and discovery. Championing the very best of its heritage, this next chapter celebrates cherished pieces such as tailoring, jackets and jumpers. It also embraces the new, retaining and reflecting that unique London spirit through its T-shirts, sweatshirts and accessories.</p>
          <Button type="primary">Look for our shops</Button>
        </StyledText>
        <img src={HomeImage} alt="home-img"/>
      </SectionWrapper>
      <h1>Browse our catalog!</h1>
      <CardWrapper className="reveal">
        {data.map(({ title, image, brand, price }, idx) => (
          // console.log(idx)
            <CardItem
              title={title}
              image={image}
              brand={brand}
              price={price}
              key={idx}
            />
        ))}
      </CardWrapper>
    </HomeWrapper>
  );
};

export default Home;
