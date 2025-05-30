import React from "react";
import "./Landing.css";

import { useNavigate } from "react-router-dom";

const Landing = () => {
    const Navigate = useNavigate();
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">Eventify</div>
                <ul className="nav-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#cta">Join</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <h1>Welcome to Eventify</h1>
                <p>Simplify your events with style and speed.</p>
                <button onClick={()=> Navigate('/signup')}>Get Started</button>
            </section>

            {/* Features Section */}
            <section className="features" id="features">
                <h2>Why Choose Eventify?</h2>
                <div className="feature-cards">
                    <div className="feature">
                        <h3>Easy Event Planning</h3>
                        <p>Plan and manage events effortlessly with our intuitive tools.</p>
                    </div>
                    <div className="feature">
                        <h3>Buddy Booking</h3>
                        <p>Let your friends book for you without the hassle.</p>
                    </div>
                    <div className="feature">
                        <h3>Premium Automation</h3>
                        <p>Subscribe to automate bookings for your favorite events.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="about">
                <div className="about-content">
                    <h2>About Eventify</h2>
                    <p>
                        Eventify is your ultimate event management partner. Whether you're planning a concert, conference,
                        or casual meetup — we've got the tools to streamline your process from start to finish.
                    </p>
                    <p>
                        Trusted by thousands of users and organizations, Eventify blends simplicity with power
                        to deliver seamless event experiences.
                    </p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials" id="testimonials">
                <h2>What Our Users Say</h2>
                <div className="testimonial-cards">
                    <div className="testimonial">
                        <p>"Eventify made my wedding planning stress-free and fun!"</p>
                        <h4>- Priya S.</h4>
                    </div>
                    <div className="testimonial">
                        <p>"I use it for all my college events. The automation is a game changer."</p>
                        <h4>- Arjun M.</h4>
                    </div>
                    <div className="testimonial">
                        <p>"The Buddy Booking feature is genius. It’s saved me so much time!"</p>
                        <h4>- Neha D.</h4>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta" id="cta">
                <h2>Ready to plan your next event?</h2>
                <p>Join thousands of happy users and make your event shine!</p>
                <button onClick={()=> Navigate('/signup')}>Sign up</button>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Eventify. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;
