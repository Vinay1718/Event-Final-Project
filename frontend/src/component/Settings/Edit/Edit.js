import React, { useState } from 'react';
import './Edit.css';

import { useNavigate } from 'react-router-dom';

export default function Edit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    state: '',
    additionalNotes: '',
  });

  const navigate = useNavigate();
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phone, address, city, zip, state, additionalNotes } = formData;

    if (name.trim().length < 3) {
      alert('Name must be at least 3 characters long.');
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert('Phone number must be exactly 10 digits.');
      return false;
    }

    if (address.trim() === '') {
      alert('Address cannot be empty.');
      return false;
    }

    if (city.trim() === '') {
      alert('City cannot be empty.');
      return false;
    }

    const zipPattern = /^[0-9]{6}$/;
    if (!zipPattern.test(zip)) {
      alert('ZIP Code must be exactly 6 digits.');
      return false;
    }

    if (state === '') {
      alert('Please select a state.');
      return false;
    }

    if (additionalNotes.trim() === '') {
      alert('Please provide additional notes.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      alert('Order details updated successfully!');
      navigate('/settings/address')
    }
  };
  

  return (
    <div className="edit-container">
      <h2>Add Shippings Details</h2>
      <p className="edit-subtext">Modify your order details below before it's processed.</p>

      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required autoComplete="off" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="off" />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required autoComplete="off" />
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required autoComplete="off" />
        </div>

        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required autoComplete="off" />
        </div>

        <div className="form-group">
          <label>ZIP Code</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleChange} required autoComplete="off" />
        </div>

        <div className="form-group">
          <label>State</label>
          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="" disabled>Select your state</option>
            {states.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Additional Notes</label>
          <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} placeholder="Any special instructions?" autoComplete="off"></textarea>
        </div>

        <button type="submit" className="update-btn">Save Address</button>
      </form>
    </div>
  );
}
