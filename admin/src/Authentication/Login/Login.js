import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }

        setLoading(true);
        try {
            const res = await Axios.post('http://localhost:4200/login', { email, password });
            if (res.data.success) {
                alert('Login successful!');
                Navigate('/dashboard');
            } else {
                alert(res.data.message || 'Invalid credentials');
            }
        } catch (err) {
            const msg = err.response?.data?.message || 'An error occurred during login.';
            alert(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-left">
                <div className="branding">
                    <h1>Welcome to <span>Eventify</span> Admin</h1>
                    <p>Manage your events, track revenue, and handle customer orders — all in one place.</p>
                </div>
            </div>
            <div className="login-right">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Admin Login</h2>
                    <input type="email" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Log In'}
                    </button>
                    <p className="register-link">
                        Don't have an account? <a href="/signup">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
