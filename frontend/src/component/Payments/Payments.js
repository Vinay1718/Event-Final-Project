import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Payments.css';
import { useNavigate } from 'react-router-dom';

export default function Payments() {
  const [selectedMethod, setSelectedMethod] = useState('cod');

  const navigate = useNavigate();
  const handlePaymentSelection = (method) => {
    if (method === 'cod') {
      setSelectedMethod(method);
    } else {
      toast.error('This payment method is currently unavailable.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false,
        style: {
          background: "linear-gradient(135deg, rgba(240, 25, 25, 0.9), rgba(240, 25, 25, 0.7))",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "8px",
          boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)",
        },
        theme: 'colored',
      });
    }
  };

  return (
    <div className="payment-container">
      <h2>Choose Your Payment Method</h2>
      <p className="sub-text">
        Secure and convenient payment options to complete your order. Currently, only <b>Cash on Delivery</b> is available.
      </p>

      <ToastContainer />

      <div className="payment-options">
        <label
          className={`payment-option ${selectedMethod === 'cod' ? 'active-option' : ''}`}
          onClick={() => handlePaymentSelection('cod')}
        >
          <input type="radio" name="payment" value="cod" checked={selectedMethod === 'cod'} readOnly />
          <i className="fas fa-money-bill-wave"></i>
          <span>Cash on Delivery (COD)</span>
          <p className="payment-description">Pay when you receive your order.</p>
        </label>

        <label className="payment-option disabled-option" onClick={() => handlePaymentSelection('credit-card')}>
          <input type="radio" name="payment" value="credit-card" disabled />
          <i className="fas fa-credit-card"></i>
          <span>Credit/Debit Card</span>
          <p className="payment-description">Pay securely using Visa, MasterCard, or other major cards.</p>
        </label>

        <label className="payment-option disabled-option" onClick={() => handlePaymentSelection('upi')}>
          <input type="radio" name="payment" value="upi" disabled />
          <i className="fas fa-mobile-alt"></i>
          <span>UPI (Google Pay, PhonePe, Paytm)</span>
          <p className="payment-description">Fast and easy payments using UPI apps.</p>
        </label>

        <label className="payment-option disabled-option" onClick={() => handlePaymentSelection('net-banking')}>
          <input type="radio" name="payment" value="net-banking" disabled />
          <i className="fas fa-university"></i>
          <span>Net Banking</span>
          <p className="payment-description">Make payments through your bank’s online services.</p>
        </label>

        <label className="payment-option disabled-option" onClick={() => handlePaymentSelection('paypal')}>
          <input type="radio" name="payment" value="paypal" disabled />
          <i className="fab fa-paypal"></i>
          <span>PayPal</span>
          <p className="payment-description">Use your PayPal account for secure transactions.</p>
        </label>

        <label className="payment-option disabled-option" onClick={() => handlePaymentSelection('wallet')}>
          <input type="radio" name="payment" value="wallet" disabled />
          <i className="fas fa-wallet"></i>
          <span>Digital Wallets</span>
          <p className="payment-description">Pay with wallets like Amazon Pay, Apple Pay, etc.</p>
        </label>

        <label className="payment-option disabled-option" onClick={() => handlePaymentSelection('cryptocurrency')}>
          <input type="radio" name="payment" value="cryptocurrency" disabled />
          <i className="fab fa-bitcoin"></i>
          <span>Cryptocurrency</span>
          <p className="payment-description">Make payments using Bitcoin, Ethereum, and more.</p>
        </label>
      </div>

      <button className="confirm-btn" onClick={() => navigate('/orders')}>Confirm Payment</button>

      <p className="secure-text">
        All transactions are encrypted and secure.
      </p>
    </div>
  );
}
