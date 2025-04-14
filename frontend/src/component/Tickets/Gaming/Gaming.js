import React, { useState } from 'react'
import './Gaming.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e133 from '../images/e133.webp';
import e134 from '../images/e134.webp';
import e135 from '../images/e135.webp';
import e136 from '../images/e136.webp';
import e137 from '../images/e137.webp';
import e138 from '../images/e138.webp';
import e139 from '../images/e139.webp';
import e140 from '../images/e140.webp';
import e141 from '../images/e141.webp';
import e142 from '../images/e142.webp';
import e143 from '../images/e143.webp';
import e144 from '../images/e144.webp';

export default function Gaming({ cart, setCart }) {
  const [searchQuery, setSearchQuery] = useState('');

  const gamings = [
    { id: 1, name: "eSports Championship", description: "A high-stakes tournament featuring top eSports teams.", amount: 10000, location: "Los Angeles, USA", time: "12:00 PM - 10:00 PM", date: "2025-07-10", image: e133 },
    { id: 2, name: "Battle Royale Tournament", description: "A competitive event for Battle Royale game lovers.", amount: 8500, location: "Seoul, South Korea", time: "2:00 PM - 11:00 PM", date: "2025-08-05", image: e134 },
    { id: 3, name: "Fighting Games Showdown", description: "An intense competition featuring classic and modern fighting games.", amount: 7000, location: "Tokyo, Japan", time: "1:00 PM - 9:00 PM", date: "2025-09-15", image: e135 },
    { id: 4, name: "Racing Simulator Championship", description: "A thrilling event for racing simulation enthusiasts.", amount: 7200, location: "Dubai, UAE", time: "3:00 PM - 10:00 PM", date: "2025-10-20", image: e136 },
    { id: 5, name: "Multiplayer Online Battle Arena (MOBA) Tournament", description: "A competitive event for MOBA gamers worldwide.", amount: 8800, location: "Berlin, Germany", time: "2:30 PM - 11:00 PM", date: "2025-11-07", image: e137 },
    { id: 6, name: "Retro Gaming Festival", description: "An event celebrating classic arcade and console games.", amount: 5000, location: "London, UK", time: "12:00 PM - 8:00 PM", date: "2025-12-12", image: e138 },
    { id: 7, name: "Virtual Reality (VR) Gaming Expo", description: "A showcase of the latest VR games and technology.", amount: 7500, location: "San Francisco, USA", time: "10:00 AM - 6:00 PM", date: "2026-01-22", image: e139 },
    { id: 8, name: "Indie Game Developers Meetup", description: "An event where indie game developers showcase their projects.", amount: 6200, location: "Toronto, Canada", time: "11:00 AM - 7:00 PM", date: "2026-02-14", image: e140 },
    { id: 9, name: "Mobile Gaming Tournament", description: "A competition focused on mobile gaming titles.", amount: 6800, location: "Singapore", time: "3:00 PM - 10:00 PM", date: "2026-03-18", image: e141 },
    { id: 10, name: "Game Streaming & Content Creator Summit", description: "A convention for streamers, YouTubers, and gaming influencers.", amount: 7100, location: "Amsterdam, Netherlands", time: "9:00 AM - 6:00 PM", date: "2026-04-05", image: e142 },
    { id: 11, name: "Cosplay & Gaming Expo", description: "A gaming and cosplay convention celebrating gaming culture.", amount: 6000, location: "Paris, France", time: "10:30 AM - 8:00 PM", date: "2026-05-09", image: e143 },
    { id: 12, name: "AI-Powered Gaming Challenge", description: "A futuristic competition exploring AI-driven game design.", amount: 8900, location: "New York, USA", time: "12:00 PM - 9:00 PM", date: "2026-06-20", image: e144 }
  ];

  const filteredGamings = gamings.filter(event =>
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

  const addToCart = (gaming) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === gaming.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${gaming.name} added to cart!`, toastConfig);
        return [...prevCart, gaming];
      } else {
        toast.info(`${gaming.name} is already in cart!`, toastConfig);
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
            filteredGamings.map((gaming) => [
              <div key={gaming.id} className='card'>
                <img src={gaming.image} alt={gaming.name} />
                <h2>{gaming.name}</h2>
                <h3>{gaming.location}</h3>
                <h3>₹{gaming.amount}</h3>
                <button>View Details</button>
                <button onClick={() => addToCart(gaming)}>Add to Cart</button>
              </div>
            ])
          }
        </div>
      </div>
    </>
  );
}