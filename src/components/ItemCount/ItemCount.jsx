import React, { useState } from 'react';

const ItemCount = ({ addToCart }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(count);
  };

  return (
    <Count contador={count} sumar={sumar} restar={restar} borrar={() => setCount(1)} />
  );
};

export default ItemCount;