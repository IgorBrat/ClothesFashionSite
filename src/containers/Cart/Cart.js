import React from 'react';
import PageContainer from "../PageContainer.styled.js";
import PrimaryButton from "../../components/buttons/PrimaryButton.styled.js";
import SecondaryButton from "../../components/buttons/SecondaryButton.styled.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardTile from "../../components/CardTile/CardTile";

const Cart = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.value);
  console.log(items);
  return (
    <PageContainer>
      {items.map(({ id, title, image, brand, price }) => (
        <CardTile
          id={id}
          title={title}
          image={image}
          brand={brand}
          price={price}
          key={id}
        />
      ))}
      <SecondaryButton onClick={() => navigate(`/catalog`)}>
        Go to catalog
      </SecondaryButton>
      <PrimaryButton onClick={() => console.log(items)}>Confirm</PrimaryButton>
    </PageContainer>
  )
};

export default Cart;
