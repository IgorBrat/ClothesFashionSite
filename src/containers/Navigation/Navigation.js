import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import React from "react";
import Home from "../Home/Home.js";
import Catalog from "../Catalog/Catalog.js";
import Cart from "../Cart/Cart.js";
import {Wrapper} from './Navigation.styled';
import ItemPage from "../ItemPage/ItemPage.js";
import CartForm from "../Cart/CartForm/CartForm.js";
import SuccessPage from "../Cart/FormSuccess/SuccessPage.js";

const Navigation = () => {
  return (
    <Router>
      <Wrapper>
        <ul>
          <li>
            <NavLink to="/"
              className={({ isActive }) =>
                isActive ? "selected" : undefined
              }
            end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog"
              className={({ isActive }) =>
                isActive ? "selected" : undefined
              }
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart"
              className={({ isActive }) =>
                isActive ? "selected" : undefined
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/catalog" element={<Catalog/>}/>
          <Route exact path="/catalog/:id" element={<ItemPage/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/cart/submit" element={<CartForm/>}/>
          <Route exact path="/cart/submit/success" element={<SuccessPage/>}/>
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default Navigation;
