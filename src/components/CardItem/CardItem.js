import React from "react";
import {Card, Button} from "antd";
import {CardFooter, StyledCard } from "./CardItem.styled.js"
const {Meta} = Card;

const CardItem = ({title="Empty", image, brand, price}) => {
  return (
    <StyledCard
      hoverable
      cover = {
        <img alt="card" src={image} />
      }
    >
      <Meta title={title} description="Another fashion clothes"/>
      <span>From <b><i>{brand}</i></b> to people</span>
      <CardFooter>
        <span>Price: {price}$</span>
        <Button size="large">View item</Button>
      </CardFooter>
    </StyledCard>
  );
};

export default CardItem;
