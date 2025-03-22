import React from "react";
import "./Cart.css";

export default function Cart({ cart, setCart }) {
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
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
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
