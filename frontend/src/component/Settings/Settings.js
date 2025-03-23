import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Settings.css';

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <p className="settings-subtext">Customize your account settings and preferences.</p>

      <div className="settings-cards">
        <div className="settings-card" onClick={() => navigate('/settings/address')}>
          <i className="fas fa-map-marker-alt"></i>
          <h3>Address</h3>
          <p>View your saved addresses for quick checkout.</p>
        </div>

        <div className="settings-card" onClick={() => navigate('/settings/edit')}>
          <i className="fas fa-edit"></i>
          <h3>Edit Address</h3>
          <p>Update or change your address details.</p>
        </div>

        <div className="settings-card" onClick={() => navigate('/settings/faq')}>
          <i className="fas fa-question-circle"></i>
          <h3>FAQ</h3>
          <p>Find answers to common questions.</p>
        </div>

        <div className="settings-card" onClick={() => navigate('/settings/history')}>
          <i className="fas fa-box"></i>
          <h3>Order History</h3>
          <p>View your past orders and track deliveries.</p>
        </div>

        <div className="settings-card" onClick={() => navigate('/payments')}>
          <i className="fas fa-credit-card"></i>
          <h3>Payment Methods</h3>
          <p>Manage your saved payment options.</p>
        </div>

        <div className="settings-card disabled-card">
          <i className="fas fa-bell"></i>
          <h3>Notifications</h3>
          <p>Manage your notification preferences (Coming Soon).</p>
        </div>

        <div className="settings-card disabled-card">
          <i className="fas fa-lock"></i>
          <h3>Privacy & Security</h3>
          <p>Manage security settings (Coming Soon).</p>
        </div>

        <div className="settings-card disabled-card">
          <i className="fas fa-user-cog"></i>
          <h3>Account Settings</h3>
          <p>Modify your profile and preferences (Coming Soon).</p>
        </div>

        <div className="settings-card disabled-card">
          <i className="fas fa-moon"></i>
          <h3>Dark Mode</h3>
          <p>Toggle dark mode for a better experience (Coming Soon).</p>
        </div>

        <div className="settings-card disabled-card">
          <i className="fas fa-language"></i>
          <h3>Language Preferences</h3>
          <p>Choose your preferred language (Coming Soon).</p>
        </div>

        <div className="settings-card disabled-card">
          <i className="fas fa-info-circle"></i>
          <h3>Help & Support</h3>
          <p>Get help and contact support (Coming Soon).</p>
        </div>
      </div>
    </div>
  );
}
