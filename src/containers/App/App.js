import './App.css';
import React, {useState} from 'react';
import Navigation from '../Navigation/Navigation.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import {Provider} from "react-redux";
import 'antd/dist/antd.min.css';
import store from "../../redux/store";

const App = () => {

  return (
    <Provider store={store}>
      <Header />
      <Navigation/>
      <Footer />
    </Provider>
  );
};

export default App;
