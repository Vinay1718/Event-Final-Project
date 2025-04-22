import React, { useState } from 'react';
import './Signup.css';

function Signup() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!termsAccepted) {
            alert("Please accept the terms and conditions.");
            return;
        }

        console.log('Signup details:', {
            name,
            username,
            email,
            phone,
            password,
        });

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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="form-input"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="form-input"
                            placeholder="johndoe123"
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
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            className="form-input"
                            placeholder="+91-9876543210"
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
