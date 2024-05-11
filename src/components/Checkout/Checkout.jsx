import { useState, useContext } from "react";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import FormularioCheckout from "./FormularioCheckout";
import db from "../../db/db";
import validateForm from "../../utils/validationYup.js";
import { CartContext } from "../../context/CartContext";

import "./checkout.css";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [idOrder, setIdOrder] = useState(null);
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
      user: { ...dataForm },
      products: [...cart],
      total: totalPrice(),
    };
    const response = await validateForm(dataForm);
    if (response.status === "success") {
      uploadOrder(order);
    } else {
      toast(response.error);
    }
  };

  const uploadOrder = async (order) => {
    const ordersRef = collection(db, "orders");
    const response = await addDoc(ordersRef, order);

    setIdOrder(response.id);
    updateStock();
    clearCart();
  };

  const updateStock = async () => {
    cart.map(async (productCart) => {
      const quantity = productCart.quantity;
      delete productCart.quantity;

      const productRef = doc(db, "products", productCart.id);
      await setDoc(productRef, {
        ...productCart,
        stock: productCart.stock - quantity,
      });
    });
  };

  return (
    <div className="checkout">
      {idOrder ? (
        <div className="order-generated">
          <h2>Su compra se genero correctamente 😲</h2>
          <p>Guarde el id de su compra: {idOrder}</p>
          <Link className="button-order" to="/">Volver al inicio</Link>
        </div>
      ) : (
        <>
          <FormularioCheckout
            dataForm={dataForm}
            handleChangeInput={handleChangeInput}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
};
export default Checkout;