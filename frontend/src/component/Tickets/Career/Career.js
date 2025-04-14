import React, { useState } from 'react';
import './Career.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e205 from '../images/e205.webp';
import e206 from '../images/e206.webp';
import e207 from '../images/e207.webp';
import e208 from '../images/e208.webp';
import e209 from '../images/e209.webp';
import e210 from '../images/e210.webp';
import e211 from '../images/e211.webp';
import e212 from '../images/e212.webp';
import e213 from '../images/e213.webp';
import e214 from '../images/e214.webp';
import e215 from '../images/e215.webp';
import e216 from '../images/e216.webp';

export default function Career({ cart, setCart }) {
  const [searchQuery, setSearchQuery] = useState('');

  const careers = [
    { id: 1, name: "Job Fair", description: "An event where job seekers meet potential employers.", amount: 4000, location: "New York, USA", time: "10:00 AM - 4:00 PM", date: "2025-06-20", image: e205 },
    { id: 2, name: "Tech Recruitment Expo", description: "A hiring event focused on tech professionals.", amount: 4500, location: "San Francisco, USA", time: "9:30 AM - 5:30 PM", date: "2025-07-12", image: e206 },
    { id: 3, name: "Finance Career Summit", description: "A networking event for finance and banking professionals.", amount: 5000, location: "London, UK", time: "8:30 AM - 3:00 PM", date: "2025-08-18", image: e207 },
    { id: 4, name: "Healthcare Career Fair", description: "An event for medical professionals and students.", amount: 4200, location: "Toronto, Canada", time: "9:00 AM - 2:30 PM", date: "2025-09-09", image: e208 },
    { id: 5, name: "Marketing & PR Job Expo", description: "Meet industry leaders and recruiters in marketing and PR.", amount: 4700, location: "Sydney, Australia", time: "10:00 AM - 5:00 PM", date: "2025-10-15", image: e209 },
    { id: 6, name: "Government & Civil Service Careers", description: "A career event for public service and government jobs.", amount: 4800, location: "Dubai, UAE", time: "10:00 AM - 6:00 PM", date: "2025-11-05", image: e210 },
    { id: 7, name: "Engineering Career Expo", description: "An event focused on job opportunities for engineers.", amount: 4600, location: "Berlin, Germany", time: "9:30 AM - 4:30 PM", date: "2025-11-25", image: e211 },
    { id: 8, name: "Entrepreneurship Career Fair", description: "A summit for aspiring entrepreneurs and startup founders.", amount: 5300, location: "Singapore", time: "10:00 AM - 5:30 PM", date: "2025-12-10", image: e212 },
    { id: 9, name: "Legal Career Networking", description: "An event for law students and legal professionals.", amount: 5000, location: "Paris, France", time: "9:00 AM - 3:00 PM", date: "2026-01-14", image: e213 },
    { id: 10, name: "Creative Arts Career Fair", description: "A platform for artists, designers, and creative professionals.", amount: 5200, location: "Amsterdam, Netherlands", time: "8:30 AM - 4:00 PM", date: "2026-02-08", image: e214 },
    { id: 11, name: "Media & Journalism Career Summit", description: "An event for journalists and media professionals.", amount: 4800, location: "Los Angeles, USA", time: "10:00 AM - 4:30 PM", date: "2026-03-12", image: e215 },
    { id: 12, name: "STEM Career Expo", description: "An event for science, technology, engineering, and math careers.", amount: 5500, location: "Washington D.C., USA", time: "9:00 AM - 5:00 PM", date: "2026-04-22", image: e216 }
  ];

  const filteredCareers = careers.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLocaleLowerCase())

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

  const addToCart = (career) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === career.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${career.name} added to cart!`, toastConfig);
        return [...prevCart, career];
      } else {
        toast.info(`${career.name} is already in cart!`, toastConfig);
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
            placeholder="Search careers by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='search-bar'
          />
        </div>

        <div className='ticket-container'>
          {
            filteredCareers.map((career) => (
              <div key={career.id} className='card'>
                <img src={career.image} alt={career.name} />
                <h2>{career.name}</h2>
                <h3>{career.location}</h3>
                <h3>₹{career.amount}</h3>
                <button>View Details</button>
                <button onClick={() => addToCart(career)}>Add to Cart</button>
              </div>
            ))
          }
        </div>
      </div>
    </>

  );
}
