import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Signup() {
    const [firstName, setName] = useState('');
    const [lastName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [loading, setLoading] = useState(false);

    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!termsAccepted) {
            alert("Please accept the terms and conditions.");
            return;
        }

        setLoading(true);
        try {
            const res = await Axios.post('http://localhost:4200/user', {
                firstName, lastName, email, phoneNo, password
            });

            if (res.data.success) {
                alert('Signup successful! Please log in.');
                setName('');
                setUsername('');
                setEmail('');
                setPhone('');
                setPassword('');
                setTermsAccepted(false);
                Navigate('/login');
            } else {
                alert(res.data.message || 'Signup failed. Please try again.');
            }
        } catch (err) {
            const msg = err.response?.data?.message || 'An error occurred. Please try again.';
            alert(msg);
        } finally {
            setLoading(false);
        }
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
            </div>
            <div className="signup-container">
                <h2 className="signup-title">Create Your Account</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group">
                        <label>Full Name:</label>
                        <input type="text" value={firstName} onChange={(e) => setName(e.target.value)}
                            required className="form-input" placeholder="Raju" name='firstname' />
                    </div>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" value={lastName} onChange={(e) => setUsername(e.target.value)}
                            required className="form-input" placeholder="raju123" name='lastname' />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            required className="form-input" placeholder="email@example.com" name='email' />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input type="tel" value={phoneNo} onChange={(e) => setPhone(e.target.value)}
                            required className="form-input" placeholder="+91-9876543210" name='phoneNo' />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type={showPassword ? 'text' : 'password'} value={password}
                            onChange={(e) => setPassword(e.target.value)} required
                            className="form-input" placeholder="Enter password" name='password' minLength={6} />
                    </div>
                    <div className="form-group checkbox-group">
                        <input type="checkbox" checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)} id="showPassword" />
                        <label htmlFor="showPassword">Show Password</label>
                    </div>
                    <div className="form-group checkbox-group">
                        <input className='jaga' type="checkbox" checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)} id="terms" />
                        <label htmlFor="terms">
                            I agree to the <a href="https://termly.io/resources/templates/terms-and-conditions-template/" target="_blank" rel="noreferrer">terms and conditions</a>.
                        </label>
                    </div>
                    <button type="submit" className="signup-button" disabled={loading}>
                        {loading ? 'Signing up...' : 'Sign Up'}
                    </button>
                    <p className="login-text">
                        Already have an account? <a href="/login">Log In</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
