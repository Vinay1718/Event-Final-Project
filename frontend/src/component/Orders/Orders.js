import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';

export default function Orders() {
  const [cart, setCart] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [emailStatus, setEmailStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    const savedUser = JSON.parse(localStorage.getItem("formData")) || {};
    setUserDetails(savedUser);
  }, []); 

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getShippingCost = () => {
    return 50;
  };

  const getTaxAmount = () => {
    return (getTotalAmount() * 0.1);
  };

  const handlePrint = () => {
    sendEmail();
    window.print();
    setTimeout(() => {
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/");
    }, 500);
  };

  const sendEmail = () => {
    const orderItems = cart.map(item => ({
      name: item.name,
      image_url: item.image_url || '',
      units: item.quantity,
      price: item.price
    }));

    const shippingCost = getShippingCost();
    const taxAmount = getTaxAmount();
    const totalAmount = getTotalAmount();
    
    const templateParams = {
      user_email: userDetails.email,
      order_id: Math.floor(Math.random() * 10000),
      orders: orderItems,
      cost: {
        shipping: shippingCost,
        tax: taxAmount,
        total: totalAmount + shippingCost + taxAmount
      },
      email: userDetails.email,
    };

    emailjs.send('service_a85oxfp', 'template_bixosfg', templateParams, 'BhYpg_g0radNIeTwp')
      .then(response => {
        console.log('Email sent successfully:', response);
        setEmailStatus('Email sent successfully!');
      })
      .catch(error => {
        console.error('Error sending email:', error);
        setEmailStatus('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className="order-container">
      <h2>Order Summary</h2>
      <div className="order-details">
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> {userDetails.name || "N/A"}</p>
        <p><strong>Email:</strong> {userDetails.email || "N/A"}</p>
        <p><strong>Phone:</strong> {userDetails.phone || "N/A"}</p>
        <p><strong>Address:</strong> {userDetails.address || "N/A"}</p>
      </div>

      <h3>Order Items</h3>
      {cart.length > 0 ? (
        <>
          <table className="order-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price (₹)</th>
                <th>Total (₹)</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Amount: ₹{getTotalAmount()}</h3>
          <button className="print-btn" onClick={handlePrint}>Print Order Slip</button>
        </>
      ) : (
        <p className="empty-cart">Your cart is empty. Please add items to place an order.</p>
      )}

      {emailStatus && <div className="email-status">{emailStatus}</div>}
    </div>
  );
}
