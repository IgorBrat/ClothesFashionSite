import React, {useState} from "react";
import StyledCardTile from "./CardTile.styled";
import PrimaryButton from "../buttons/PrimaryButton.styled.js";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/cartSlice";

const CardTile = ({id, title, image, brand, price, count}) => {
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(count);

  return (
    <StyledCardTile>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button>-</button>
      <h2>{itemCount}</h2>
      <button>+</button>
      <PrimaryButton onClick={() => dispatch(deleteItem(id))}>Remove</PrimaryButton>
    </StyledCardTile>
  )
};

export default CardTile;
