import React, { useEffect, useState } from 'react';
import './Toggle.css'; 

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.body.setAttribute('data-theme', savedTheme);
    }, []);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <li className="theme-toggle-container">
            <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </li>
    );
};

export default ThemeToggle;
