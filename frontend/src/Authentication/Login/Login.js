import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }

        console.log('Logged in with:', { email, password });
        alert('Login successful!');
        Navigate('/Home');
    };

    return (
        <div className="login-page">
            <div className="login-left">
                <div className="branding">
                    <h1>Welcome to <span>Eventify</span></h1>
                    <p>
                        Eventify is your personal gateway to discovering, planning, and enjoying the best events around you.
                        Whether it's concerts, tech meetups, or food festivals — we bring them to your fingertips.
                    </p>

                    <div className="features">
                        <ul>
                            <li>🎟️ <strong>One-tap ticket booking</strong> for any event, any time.</li>
                            <li>👥 <strong>Group-friendly options</strong> for seamless team and friend plans.</li>
                            <li>📅 <strong>Calendar sync</strong> so you never double-book.</li>
                            <li>🧠 <strong>Smart reminders</strong> — get notified before your events start.</li>
                            <li>🗺️ <strong>Map-based search</strong> to explore events visually.</li>
                            <li>🧾 <strong>Digital Passes</strong> — no printing, no stress.</li>
                            <li>💳 <strong>Secure Payments</strong> with UPI, cards, and wallets.</li>
                            <li>🔥 <strong>Trending Now</strong> — stay updated with what’s hot.</li>
                            <li>🔄 <strong>Cancel Anytime</strong> with flexible ticketing options.</li>
                            <li>📸 <strong>Post-Event Gallery</strong> with photos and highlights.</li>
                            <li>🏆 <strong>Premium Perks</strong> with exclusive VIP access.</li>
                            <li>🧾 <strong>Detailed invoices</strong> for professional users.</li>
                            <li>🌐 <strong>Multilingual interface</strong> – browse in your language.</li>
                            <li>📍 <strong>Nearby deals</strong> and early bird discounts.</li>
                            <li>🔗 <strong>Share with a link</strong> – no login needed for buddies.</li>
                            <li>🎊 <strong>Create your own events</strong> and manage guests easily.</li>
                            <li>🛒 <strong>Eventify Marketplace</strong> for merchandise and add-ons.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="login-right">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login to Eventify</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Log In</button>
                    <p className="register-link">Don't have an account? <a href="/signup">Sign up</a></p>
                </form>
            </div>
        </div>
    );
};

export default Login;