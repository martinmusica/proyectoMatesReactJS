import React from 'react';
import { Link } from "react-router-dom";
import Count from '../ItemCount/Count'; // Importa el componente Count

const Item = ({ product }) => {
  return (
    <div key={product.id} className="card">
      <div className="image-box-card">
        <img className="image-card" src={product.image} alt={product.name} />
      </div>
      <div className="info-card">
        <h2 className="title-card">{product.name}</h2>
        <p className="description-card">{product.description}</p>
        <p className="description-card">Precio: ${product.price}</p>
        <p className="description-card">Stock Disponible: {product.stock}</p>
        <div className="box-button-item">
          <Count /> 
          <Link to={`/detail/${product.id}`} className="button-item">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;