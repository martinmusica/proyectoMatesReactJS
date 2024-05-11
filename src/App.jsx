import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
          <Routes>
          <Route path="/" element={<ItemListContainer saludo="Nuestros productos" />} />
            <Route path="/category/:idCategory" element={<ItemListContainer saludo="Nuestros productos" />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/checkout" element={<Checkout />} /> */}
          </Routes>    
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;