import { useState, useEffect } from "react";
import Count from "./Count";

const CountController = () => {
  const [contador, setContador] = useState(1);

  useEffect(() => {
    console.log("useEffect ejecutado");
  }, [contador]);

  const sumar = () => {
    setContador(contador + 1);
  };

  const borrar = () => {
    setContador(1);
  };

  return (
    <div>
      <Count contador={contador} sumar={sumar} borrar={borrar} />
    </div>
  );
};

export default CountController;