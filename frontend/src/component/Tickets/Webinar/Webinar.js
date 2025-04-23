import React, { useState } from 'react'
import './Webinar.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e25 from '../images/e25.webp';
import e26 from '../images/e26.webp';
import e27 from '../images/e27.webp';
import e28 from '../images/e28.webp';
import e29 from '../images/e29.webp';
import e30 from '../images/e30.webp';
import e31 from '../images/e31.webp';
import e32 from '../images/e32.webp';
import e33 from '../images/e33.webp';
import e34 from '../images/e34.webp';
import e35 from '../images/e35.webp';
import e36 from '../images/e36.webp';

export default function Webinar({ cart, setCart }) {
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const webinars = [
    { id: 1, name: "Digital Marketing Trends Webinar", description: "An in-depth session on the latest trends and strategies in digital marketing.", price: 1500, location: "Online", time: "6:00 PM - 8:00 PM", date: "2025-06-10", image: e25 },
    { id: 2, name: "AI & Machine Learning Webinar", description: "Exploring advancements in artificial intelligence and machine learning applications.", price: 2000, location: "Online", time: "5:30 PM - 7:30 PM", date: "2025-07-05", image: e26 },
    { id: 3, name: "Personal Finance & Investment Webinar", description: "Guidance on financial planning, investment strategies, and wealth management.", price: 1200, location: "Online", time: "7:00 PM - 9:00 PM", date: "2025-07-25", image: e27 },
    { id: 4, name: "Health & Wellness Webinar", description: "A discussion on mental and physical health with top medical professionals.", price: 1000, location: "Online", time: "4:00 PM - 6:00 PM", date: "2025-08-10", image: e28 },
    { id: 5, name: "E-commerce & Dropshipping Webinar", description: "Learn about setting up an online store and succeeding in e-commerce.", price: 1800, location: "Online", time: "6:30 PM - 8:30 PM", date: "2025-09-01", image: e29 },
    { id: 6, name: "Cybersecurity & Data Privacy Webinar", description: "Understanding the importance of cybersecurity and how to protect online data.", price: 2500, location: "Online", time: "3:00 PM - 5:00 PM", date: "2025-09-20", image: e30 },
    { id: 7, name: "Entrepreneurship & Startup Webinar", description: "Insights from successful entrepreneurs on launching and scaling a business.", price: 2200, location: "Online", time: "5:00 PM - 7:00 PM", date: "2025-10-05", image: e31 },
    { id: 8, name: "Leadership & Team Management Webinar", description: "A session on developing leadership skills and managing high-performing teams.", price: 1700, location: "Online", time: "6:00 PM - 8:00 PM", date: "2025-10-15", image: e32 },
    { id: 9, name: "Content Writing & Blogging Webinar", description: "Tips and strategies for effective blogging and content marketing.", price: 1400, location: "Online", time: "7:30 PM - 9:30 PM", date: "2025-11-02", image: e33 },
    { id: 10, name: "Real Estate Investment Webinar", description: "Understanding the real estate market and how to invest wisely.", price: 2600, location: "Online", time: "4:30 PM - 6:30 PM", date: "2025-11-18", image: e34 },
    { id: 11, name: "Remote Work & Productivity Webinar", description: "Best practices for staying productive while working remotely.", price: 1300, location: "Online", time: "5:00 PM - 7:00 PM", date: "2025-12-05", image: e35 },
    { id: 12, name: "Social Media Growth & Branding Webinar", description: "How to build a strong online presence and grow your brand on social media.", price: 1600, location: "Online", time: "6:30 PM - 8:30 PM", date: "2025-12-20", image: e36 }
  ];

  const filteredWebinars = webinars.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toastConfig = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    style: {
      background: "linear-gradient(135deg, rgba(240, 25, 25, 0.9), rgba(240, 25, 25, 0.7))",
      color: "#fff",
      fontWeight: "bold",
      borderRadius: "8px",
      boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)"
    },
    theme: "colored",
  };

  const addToCart = (webinar) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === webinar.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${webinar.name} added to cart!`, toastConfig);
        return [...prevCart, webinar];
      } else {
        toast.info(`${webinar.name} is already in cart!`, toastConfig);
        return prevCart;
      }
    });
  };
  return (
    <>
      <ToastContainer />
      <div>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search comedy events by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='search-bar'
          />
        </div>

        <div className='ticket-container'>
          {
            filteredWebinars.map((webinar) => [
              <div key={webinar.id} className='card'>
                <img src={webinar.image} alt={webinar.name} />
                <h2>{webinar.name}</h2>
                <h3>{webinar.location}</h3>
                <h3>₹{webinar.price}</h3>
                <button onClick={() => setSelectedWebinar(webinar)}>View Details</button>
                <button onClick={() => addToCart(webinar)}>Add to Cart</button>
              </div>
            ])
          }
        </div>

        {selectedWebinar && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setSelectedWebinar(null)}>&times;</span>
              <img src={selectedWebinar.image} alt={selectedWebinar.name} />
              <h2>{selectedWebinar.name}</h2>
              <h3>{selectedWebinar.location}</h3>
              <p>{selectedWebinar.description}</p>
              <h3>₹{selectedWebinar.price}</h3>
            </div>
          </div>
        )}
      </div>
    </>

  );
}
