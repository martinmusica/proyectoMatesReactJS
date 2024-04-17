import React from 'react';
import './Count.css'; 

const Count = ({ count, setCount }) => {
  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const borrar = () => {
    setCount(1);
  };

  return (
    <div className="counter-container"> 
      <p className="counter-value">Te llevas: {count}</p> 
      <div className="counter-buttons"> 
        <button className="counter-button" onClick={sumar}>+</button> 
        <button className="counter-button" onClick={restar}>-</button> 
        <button className="counter-button" onClick={borrar}>Reset</button> 
      </div>
    </div>
  );
};

export default Count;