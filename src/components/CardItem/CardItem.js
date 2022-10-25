import React from "react";
import {Card, Button} from "antd";
import {CardFooter, StyledCard } from "./CardItem.styled.js";
import {NavLink} from "react-router-dom";

const {Meta} = Card;

const CardItem = ({id, title="Empty", image, brand, price}) => {
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
        <Button size="large">
          <NavLink to={`/catalog/${id}`}>
            View item
          </NavLink>
        </Button>
      </CardFooter>
    </StyledCard>
  );
};

export default CardItem;
