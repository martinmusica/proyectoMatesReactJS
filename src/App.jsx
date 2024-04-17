import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Nuestro Catálogo" />} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo="Nuestro Catálogo" />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        </Routes>    
      </BrowserRouter>
    </div>
  );
}

export default App;