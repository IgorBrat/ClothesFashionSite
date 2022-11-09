import React from 'react';
import PageContainer from "../PageContainer.styled.js";
import PrimaryButton from "../../components/buttons/PrimaryButton.styled.js";
import SecondaryButton from "../../components/buttons/SecondaryButton.styled.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CardTile from "../../components/CardTile/CardTile";
import ButtonWrapper from "../../components/ButtonWrapper/ButtonWrapper.styled";

const Cart = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.value);
  console.log(items);

  let totalPrice = 0;
  for (const foundItem of items) {
    totalPrice += foundItem.content.price * foundItem.count;
  }

  return (
    <PageContainer>
      {items.map(({ content, count }) => (
        <CardTile
          id={content.id}
          title={content.title}
          image={content.image}
          brand={content.brand}
          price={content.price}
          key={content.id}
        />
      ))}
      <h1>Total price: {totalPrice}$</h1>
      <ButtonWrapper>
        <SecondaryButton onClick={() => navigate(`/catalog`)}>
          Go to catalog
        </SecondaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </ButtonWrapper>
    </PageContainer>
  )
};

export default Cart;
