import React, { useState } from 'react'
import './Hackathon.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e121 from '../images/e121.webp';
import e122 from '../images/e122.webp';
import e123 from '../images/e123.webp';
import e124 from '../images/e124.webp';
import e125 from '../images/e125.webp';
import e126 from '../images/e126.webp';
import e127 from '../images/e127.webp';
import e128 from '../images/e128.webp';
import e129 from '../images/e129.webp';
import e130 from '../images/e130.webp';
import e131 from '../images/e131.webp';
import e132 from '../images/e132.webp';

export default function Hackathon({ cart, setCart }) {
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const hackathons = [
    { id: 1, name: "AI & Machine Learning Hackathon", description: "Develop AI-driven solutions and machine learning models in a competitive setting.", price: 7000, location: "San Francisco, USA", time: "9:00 AM - 9:00 PM", date: "2025-06-30", image: e121 },
    { id: 2, name: "Cybersecurity Hackathon", description: "Participants work on ethical hacking challenges and cybersecurity solutions.", price: 6500, location: "New York, USA", time: "10:00 AM - 8:00 PM", date: "2025-07-20", image: e122 },
    { id: 3, name: "FinTech Hackathon", description: "A coding event for building innovative financial technology applications.", price: 7200, location: "London, UK", time: "8:00 AM - 10:00 PM", date: "2025-08-12", image: e123 },
    { id: 4, name: "Blockchain & Web3 Hackathon", description: "Develop decentralized apps (DApps) and blockchain-based solutions.", price: 8000, location: "Dubai, UAE", time: "9:30 AM - 11:00 PM", date: "2025-09-18", image: e124 },
    { id: 5, name: "Healthcare Tech Hackathon", description: "A hackathon focused on technology solutions for the healthcare industry.", price: 6800, location: "Berlin, Germany", time: "10:00 AM - 9:00 PM", date: "2025-10-10", image: e125 },
    { id: 6, name: "EdTech Hackathon", description: "Develop innovative solutions to improve education using technology.", price: 6200, location: "Toronto, Canada", time: "9:00 AM - 7:00 PM", date: "2025-11-05", image: e126 },
    { id: 7, name: "Game Development Hackathon", description: "Create and develop new video games within a limited time frame.", price: 7500, location: "Los Angeles, USA", time: "8:00 AM - 12:00 AM", date: "2025-12-15", image: e127 },
    { id: 8, name: "Smart Cities & IoT Hackathon", description: "Work on IoT and smart city solutions for urban innovation.", price: 7000, location: "Singapore", time: "9:30 AM - 10:00 PM", date: "2026-01-25", image: e128 },
    { id: 9, name: "Sustainability & GreenTech Hackathon", description: "Develop eco-friendly technology solutions for sustainability challenges.", price: 6900, location: "Amsterdam, Netherlands", time: "10:00 AM - 9:00 PM", date: "2026-02-18", image: e129 },
    { id: 10, name: "E-commerce & Retail Tech Hackathon", description: "Build next-generation solutions for the e-commerce industry.", price: 7100, location: "Hong Kong", time: "8:00 AM - 9:30 PM", date: "2026-03-12", image: e130 },
    { id: 11, name: "Social Impact & Nonprofit Hackathon", description: "Create technology-driven solutions for social good and nonprofit initiatives.", price: 6300, location: "Paris, France", time: "9:00 AM - 8:00 PM", date: "2026-04-10", image: e131 },
    { id: 12, name: "Open Source Contribution Hackathon", description: "A collaborative coding event to contribute to open-source projects.", price: 6700, location: "San Diego, USA", time: "10:00 AM - 9:00 PM", date: "2026-05-05", image: e132 }
  ];

  const filteredHackathons = hackathons.filter(event =>
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

  const addToCart = (hackathon) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === hackathon.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${hackathon.name} added to cart!`, toastConfig);
        return [...prevCart, hackathon];
      } else {
        toast.info(`${hackathon.name} is already in cart!`, toastConfig);
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
            filteredHackathons.map((hackathon) => [
              <div key={hackathon.id} className='card'>
                <img src={hackathon.image} alt={hackathon.name} />
                <h2>{hackathon.name}</h2>
                <h3>{hackathon.location}</h3>
                <h3>₹{hackathon.price}</h3>
                <button onClick={() => setSelectedHackathon(hackathon)}>View Details</button>
                <button onClick={() => addToCart(hackathon)}>Add to Cart</button>
              </div>
            ])
          }
        </div>

        {selectedHackathon && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setSelectedHackathon(null)}>&times;</span>
              <img src={selectedHackathon.image} alt={selectedHackathon.name} />
              <h2>{selectedHackathon.name}</h2>
              <h3>{selectedHackathon.location}</h3>
              <p>{selectedHackathon.description}</p>
              <h3>₹{selectedHackathon.price}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

