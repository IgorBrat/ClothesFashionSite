import React, {useState, useEffect} from "react";
import StyledCardTile, {CountWrapper, DescriptionWrapper, ChangeButton} from "./CardTile.styled";
import PrimaryButton from "../buttons/PrimaryButton.styled.js";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/cartSlice";

const CardTile = ({id, title, image, brand, price, count}) => {
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(count);
  let previewTitle = title;
  if (title.length > 20) {
    previewTitle = title.slice(0,20) + "...";
  };

  const verifyItemCount = () => {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
    else {
      alert("Item count can`t be less than 1");
    }
  };

  return (
    <StyledCardTile>
      <img src={image} alt={title} />
      <h2>{previewTitle}</h2>
      <CountWrapper>
        <ChangeButton onClick={() => verifyItemCount()}>-</ChangeButton>
        <h2>{itemCount}</h2>
        <ChangeButton onClick={() => setItemCount(itemCount + 1)}>+</ChangeButton>
      </CountWrapper>
      <PrimaryButton onClick={() => dispatch(deleteItem(id))}>Remove</PrimaryButton>
    </StyledCardTile>
  )
};

export default CardTile;
