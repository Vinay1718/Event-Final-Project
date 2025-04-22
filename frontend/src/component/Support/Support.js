import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Support.css";

export default function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");

  const handleSupportSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const supportTeamParams = {
      from_name: name,
      from_email: email,
      issue: issue,
      to_email: "pro12fessor3@gmail.com",
    };

    const userAcknowledgmentParams = {
      to_name: name,
      user_email: email,
      message: `
        Hi ${name},
        We have received your support request regarding:
        "${issue}"
        Here is a copy of your message for your reference.
        Our team will review your issue and get back to you as soon as possible.
        If you need urgent assistance, feel free to reply to this email.
        — Support Team
      `,
    };
    emailjs.send(serviceId, templateId, supportTeamParams, publicKey)
      .then(() => {
        emailjs.send(serviceId, templateId, userAcknowledgmentParams, publicKey)
          .then(() => {
            alert('Your support request has been sent! A confirmation email has been sent to you.');
            setName('');
            setEmail('');
            setIssue('');
          })
          .catch((error) => {
            console.error('Error sending acknowledgment email:', error);
            alert('Request sent, but confirmation email failed.');
          });
      })
      .catch((error) => {
        console.error('Error sending support request:', error);
        alert('Failed to send your support request. Please try again later.');
      });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Support Request</h2>
      <p className="contact-description">
        Facing issues? Fill out the form below and our team will get back to you!
      </p>

      <div className="contact-form-container">
        <form onSubmit={handleSupportSubmit} className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="issue">Describe Your Issue</label>
            <textarea
              id="issue"
              name="issue"
              rows="5"
              placeholder="Write your issue here..."
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn">Submit Support Request</button>
        </form>
      </div>

      <div className="contact-details">
        <p><strong>Support Email:</strong> pro12fessor3@gmail.com</p>
        <p style={{ marginTop: '20px', fontSize: '14px', color: '#777' }}>
          &copy; 2025 Eventify. All rights reserved.
        </p>
      </div>
    </div>
  );
}
