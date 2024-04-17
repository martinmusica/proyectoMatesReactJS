import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../data/getProducts";
import ItemDetail from "./ItemDetail"; 

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts(); 
        const newProduct = response.find((product) => product.id === id);
        setProduct(newProduct);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); 
  }, [id]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <div>Cargando...</div>}
    </div>
  );
};

export default ItemDetailContainer;