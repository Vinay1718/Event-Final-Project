import React, { useState } from 'react'
import './Product.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e85 from '../images/e85.webp';
import e86 from '../images/e86.webp';
import e87 from '../images/e87.webp';
import e88 from '../images/e88.webp';
import e89 from '../images/e89.webp';
import e90 from '../images/e90.webp';
import e91 from '../images/e91.webp';
import e92 from '../images/e92.webp';
import e93 from '../images/e93.webp';
import e94 from '../images/e94.webp';
import e95 from '../images/e95.webp';
import e96 from '../images/e96.webp';


export default function Product({ cart, setCart }) {
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    { id: 1, name: "Smartphone & Gadgets Launch Event", description: "Unveiling the latest smartphones, smartwatches, and tech gadgets.", amount: 3000, location: "San Francisco, USA", time: "10:00 AM - 3:00 PM", date: "2025-06-20", image: e85 },
    { id: 2, name: "Automobile Unveiling & Test Drive Event", description: "Exclusive showcase of new car models with test drive opportunities.", amount: 5000, location: "Detroit, USA", time: "9:00 AM - 5:00 PM", date: "2025-07-18", image: e86 },
    { id: 3, name: "Fashion Brand Collection Reveal", description: "Runway show presenting the latest collections from top designers.", amount: 4500, location: "Paris, France", time: "6:00 PM - 10:00 PM", date: "2025-08-05", image: e87 },
    { id: 4, name: "Health & Wellness Product Showcase", description: "Demonstration of the newest fitness equipment, supplements, and wellness tech.", amount: 3500, location: "London, UK", time: "10:00 AM - 4:00 PM", date: "2025-09-12", image: e88 },
    { id: 5, name: "Real Estate Property Open House", description: "Tour newly developed properties and meet real estate experts.", amount: 4000, location: "Dubai, UAE", time: "9:30 AM - 3:30 PM", date: "2025-10-08", image: e89 },
    { id: 6, name: "Food & Beverage Product Tasting", description: "A delightful tasting experience featuring the latest food and drink innovations.", amount: 2500, location: "New York, USA", time: "12:00 PM - 6:00 PM", date: "2025-11-22", image: e90 },
    { id: 7, name: "Home & Interior Design Product Expo", description: "Explore modern home décor and interior design trends.", amount: 3800, location: "Toronto, Canada", time: "10:00 AM - 5:00 PM", date: "2025-12-15", image: e91 },
    { id: 8, name: "Gaming & Console Release Event", description: "Experience the latest gaming consoles and upcoming game releases.", amount: 5500, location: "Los Angeles, USA", time: "5:00 PM - 11:00 PM", date: "2026-01-30", image: e92 },
    { id: 9, name: "Travel & Tourism Package Launch", description: "Get exclusive deals on travel packages and learn about new destinations.", amount: 3200, location: "Sydney, Australia", time: "11:00 AM - 6:00 PM", date: "2026-02-18", image: e93 },
    { id: 10, name: "Sustainable & Eco-friendly Product Expo", description: "A showcase of the latest innovations in sustainability and green living.", amount: 4000, location: "Berlin, Germany", time: "9:00 AM - 3:30 PM", date: "2026-03-10", image: e94 },
    { id: 11, name: "Media & Entertainment Product Premiere", description: "An exclusive first look at new movies, music releases, and entertainment tech.", amount: 4800, location: "Mumbai, India", time: "6:30 PM - 11:00 PM", date: "2026-04-05", image: e95 },
    { id: 12, name: "Wearable Tech & Fitness Gear Launch", description: "Showcasing the future of wearable fitness and health tracking technology.", amount: 4200, location: "Singapore", time: "10:30 AM - 4:00 PM", date: "2026-05-20", image: e96 }
  ];


  const filteredProducts = products.filter(event =>
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

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === product.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${product.name} added to cart!`, toastConfig);
        return [...prevCart, product];
      } else {
        toast.info(`${product.name} is already in cart!`, toastConfig);
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
            filteredProducts.map((product) => [
              <div key={product.id} className='card'>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <h3>{product.location}</h3>
                <h3>₹{product.amount}</h3>
                <button>View Details</button>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ])
          }
        </div>
      </div>
    </>

  );
}
  