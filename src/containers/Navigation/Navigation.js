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
import {Wrapper} from './Navigation.styled'

const Navigation = () => {
  return (
    <Router>
      <Wrapper>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/catalog" element={<Catalog/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default Navigation;
