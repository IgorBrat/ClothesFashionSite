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
import SignIn from "../SignIn/SignIn.js";
import SignUp from "../SignUp/SignUp.js";
import ProtectedRoute from "./ProtectedRoute";

const Navigation = () => {
  const loggedUserEmail = localStorage.getItem('loggedUserEmail');

  return (
    <Router>
      <Wrapper>
        {(loggedUserEmail !== 'null') ? <ul>
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
        : null}
        <Routes>
          <Route exact path="/" element={
            <ProtectedRoute isAuthenticated={loggedUserEmail !== 'null'}
            component={Home}
            />
          }/>
          <Route exact path="/login" element={<SignIn/>}/>
          <Route exact path="/register" element={<SignUp/>}/>
          <Route exact path="/catalog" element={
            <ProtectedRoute isAuthenticated={loggedUserEmail !== 'null'}
            component={Catalog}
            />
          }/>
          <Route exact path="/catalog/:id" element={
            <ProtectedRoute isAuthenticated={loggedUserEmail !== 'null'}
            component={ItemPage}
            />
          }/>
          <Route exact path="/cart" element={
            <ProtectedRoute isAuthenticated={loggedUserEmail !== 'null'}
            component={Cart}
            />
          }/>
          <Route exact path="/cart/submit" element={
            <ProtectedRoute isAuthenticated={loggedUserEmail !== 'null'}
            component={CartForm}
            />
          }/>
          <Route exact path="/cart/submit&success" element={
            <ProtectedRoute isAuthenticated={loggedUserEmail !== 'null'}
            component={SuccessPage}
            />
          }/>
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default Navigation;
