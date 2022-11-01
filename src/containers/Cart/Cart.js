import React from 'react';
import PageContainer from "../PageContainer.styled.js";
import PrimaryButton from "../../components/buttons/PrimaryButton.styled.js";
import SecondaryButton from "../../components/buttons/SecondaryButton.styled.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CardTile from "../../components/CardTile/CardTile";
import ButtonWrapper from "../../components/ButtonWrapper/ButtonWrapper.styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.value);
  console.log(items);

  let totalPrice = 0;
  for (const foundItem of items) {
    totalPrice += foundItem.content.price * foundItem.count;
  }

  const checkCart = () => {
    if (items.length == 0) {
      toast("Your cart is empty");
    }
    else {
        navigate(`/cart/submit`);
    }
  }

  return (
    <PageContainer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
        <PrimaryButton onClick={() => checkCart()}>Confirm</PrimaryButton>
      </ButtonWrapper>
    </PageContainer>
  )
};

export default Cart;
