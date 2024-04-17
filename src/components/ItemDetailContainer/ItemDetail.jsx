import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../../data/getProducts";

const ItemDetail = () => {
  const { id } = useParams(); // Cambiado de idProduct a id
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts()
      .then((response) => {
        const selectedProduct = response.find((p) => p.id === id);
        setProduct(selectedProduct);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetail;