import React from "react";
import StyledCardTile from "./CardTile.styled";

const CardTile = ({id, title, image, brand, price}) => {
  return (
    <StyledCardTile>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button>-</button>
      <button>+</button>
      <button>Remove item</button>
    </StyledCardTile>
  )
};

export default CardTile;
