import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

export default function Cart({ cart, setCart }) {
  const removeFromCart = (id, name) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.error(`${name} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      style: {
        background: "linear-gradient(135deg, rgba(240, 25, 25, 0.9), rgba(240, 25, 25, 0.7))",
        color: "#fff",
        fontWeight: "bold",
        borderRadius: "8px",
        boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)"
      },
      theme: "colored",
    });
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ToastContainer />
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add some tickets!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>{item.place}</p>
                <p>{item.description}</p>
                <p>₹{item.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id, item.name)}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
