import React, {useState} from "react";
import StyledCardTile, {CountWrapper, DescriptionWrapper, ChangeButton} from "./CardTile.styled";
import PrimaryButton from "../buttons/PrimaryButton.styled.js";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, changeCount } from "../../redux/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardTile = ({id, title, image, brand, price}) => {
  const items = useSelector((state) => state.cart.value);
  const item = items[items.findIndex((item) => item.content.id === id)];

  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(item.count);
  let previewTitle = title;
  if (title.length > 20) {
    previewTitle = title.slice(0,20) + "...";
  };

  const verifyItemCount = (increase) => {
    if (increase) {
      setItemCount(itemCount + 1);
      dispatch(changeCount({id: id, increase: true}));
    }
    else if (itemCount > 1){
      setItemCount(itemCount - 1);
      dispatch(changeCount({id: id, increase: false}));
    }
    else {
      toast("Item count can`t be less than 1");
    }
  };

  return (
    <StyledCardTile>
      <img src={image} alt={title} />
      <h2>{previewTitle}</h2>
      <CountWrapper>
        <ChangeButton onClick={() => verifyItemCount(false)}>-</ChangeButton>
        <h2>{itemCount}</h2>
        <ChangeButton onClick={() => verifyItemCount(true)}>+</ChangeButton>
      </CountWrapper>
      <h2>{price}$</h2>
      <PrimaryButton onClick={() => dispatch(deleteItem(id))}>Remove</PrimaryButton>
    </StyledCardTile>
  )
};

export default CardTile;
