import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/home';
import Main from './components/pages/Main/main';
import General from './components/pages/General';
import Xiaomi from "./components/pages/Xiaomi/Xiaomi";
import Header from './components/headerr/header';
import { CartProvider } from './components/CartContext';
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/General" element={<General />} />
          <Route path="/Xiaomi" element={<Xiaomi />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;


