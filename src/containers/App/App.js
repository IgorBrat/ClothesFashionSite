import './App.css';
import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import Header from './Header/Header.js';
import 'antd/dist/antd.min.css';

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
    </div>
  );
};

export default App;
