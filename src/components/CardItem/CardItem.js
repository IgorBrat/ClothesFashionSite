import React from "react";
import {Card, Button} from "antd";
import {CardFooter, CardItemWrapper} from "./CardItem.styled.js"
const {Meta} = Card;

const CardItem = ({title="Empty", image, brand, price}) => {
  return (
    <Card
      style={{width: 350, height: 400,}}
      cover = {
        <img alt="card" src={image} />
      }
    >
      <Meta title={title} description="Another fashion clothes"/>
      <span>From <b><i>{brand}</i></b> to people</span>
      <CardFooter>
        <span>Price: {price}$</span>
        <Button>View item</Button>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
