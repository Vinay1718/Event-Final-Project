import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";
import { useNavigate } from 'react-router-dom';

export default function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item
      )
    );
  };

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

  const totalAmount = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart-container expanded">
      <h2>Your Curated Collection</h2>
      <ToastContainer />
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add some tickets!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item expanded-item">
              <img src={item.image} alt={item.name} className="cart-image expanded-image" />
              <div className="cart-details expanded-details">
                <h3>{item.name}</h3>
                <p>{item.place}</p>
                <p>{item.description}</p>
                <p>₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id, item.name)}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">Total: ₹{totalAmount}</div>
          <div className="cart-actions">
            <button className="checkout-btn" onClick={() => navigate('/')}>Back to Page</button>
            <button className="back-btn" onClick={() => navigate('/settings/edit')}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
