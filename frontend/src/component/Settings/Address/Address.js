import React, { useEffect, useState } from 'react';
import './Address.css';
import { useNavigate } from 'react-router-dom';

export default function Address() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="address-container">
      <h2>Saved Address Details</h2>
      {formData ? (
        <div className="address-details">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>ZIP Code:</strong> {formData.zip}</p>
          <p><strong>State:</strong> {formData.state}</p>
          <p><strong>Additional Notes:</strong> {formData.additionalNotes}</p>
        </div>
      ) : (
        <p className="no-data">No details saved yet.</p>
      )}

      {formData && (
        <button className="continue-btn" onClick={()=> navigate('/payments')}>Continue</button>
      )}
      <button className="continue-btn" onClick={()=> navigate('/settings/edit')}>Add/ edit new address</button>
    </div>
  );
}
