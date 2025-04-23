import React, { useState } from 'react';
import './Signup.css';

import Axios from 'axios';

function Signup() {
    const [firstName, setName] = useState('');
    const [lastName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!termsAccepted) {
            alert("Please accept the terms and conditions.");
            return;
        }
        Axios.post('http://localhost:4200/user', {firstName, lastName, email, phoneNo, password })
        .then((result)=> console.log(result))
        .catch((err)=> console.log(err))

        alert('Signup successful!');

        // Reset form
        setName('');
        setUsername('');
        setEmail('');
        setPhone('');
        setPassword('');
        setTermsAccepted(false);
    };

    return (
        <div className="signup-wrapper">

            <div className="left-section">
                <h1>Welcome to Eventify!</h1>
                <p>🎉 Join the ultimate platform for event lovers.</p>
                <p>📅 Discover exciting events happening around you.</p>
                <p>🎟 Book tickets effortlessly and securely.</p>
                <p>🤝 Use Buddy Booking to grab tickets for your friends!</p>
                <p>✨ Get personalized recommendations just for you.</p>
                <p>🔔 Receive timely reminders so you never miss out.</p>

                <img src="https://source.unsplash.com/300x200/?events,party" alt="Events" className="promo-image" />
            </div>
            <div className="signup-container">
                <h2 className="signup-title">Create Your Account</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group">
                        <label>Full Name:</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="form-input"
                            placeholder="John Doe"
                            name='firstname'
                        />
                    </div>

                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="form-input"
                            placeholder="johndoe123"
                            name='lastname'
                        />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-input"
                            placeholder="email@example.com"
                            name='email'
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            value={phoneNo}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="form-input"
                            placeholder="+91-9876543210"
                            name='phoneNo'
                        />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-input"
                            placeholder="Enter password"
                            name='password'
                        />
                    </div>

                    <div className="form-group checkbox-group">
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            id="showPassword"
                        />
                        <label htmlFor="showPassword">Show Password</label>
                    </div>

                    <div className="form-group checkbox-group">
                        <input className='jaga'
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                            id="terms"
                        />
                        <label htmlFor="terms">
                            I agree to the <a href="https://termly.io/resources/templates/terms-and-conditions-template/">terms and conditions</a>.
                        </label>
                    </div>

                    <button type="submit" className="signup-button">Sign Up</button>

                    <p className="login-text">
                        Already have an account? <a href="/login">Log In</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
