import React, { useState } from 'react'
import './Trade.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e49 from '../images/e49.webp';
import e50 from '../images/e50.webp';
import e51 from '../images/e51.webp';
import e52 from '../images/e52.webp';
import e53 from '../images/e53.webp';
import e54 from '../images/e54.webp';
import e55 from '../images/e55.webp';
import e56 from '../images/e56.webp';
import e57 from '../images/e57.webp';
import e58 from '../images/e58.webp';
import e59 from '../images/e59.webp';
import e60 from '../images/e60.webp';


export default function Trade({ cart, setCart }) {
  const [selectedTrade, setSelectedTrade] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const trades = [
    { id: 1, name: "Technology & Innovation Expo", description: "Showcasing the latest advancements in AI, robotics, and emerging technologies.", price: 2500, location: "Las Vegas, USA", time: "10:00 AM - 6:00 PM", date: "2025-07-15", image: e49 },
    { id: 2, name: "Automobile & Transportation Trade Show", description: "Featuring the newest car models, electric vehicles, and futuristic transport solutions.", price: 2800, location: "Detroit, USA", time: "9:00 AM - 5:00 PM", date: "2025-09-10", image: e50 },
    { id: 3, name: "Fashion & Apparel Expo", description: "Global brands presenting the latest fashion trends, textiles, and designs.", price: 2000, location: "Milan, Italy", time: "11:00 AM - 7:00 PM", date: "2025-06-25", image: e51 },
    { id: 4, name: "Health & Fitness Trade Show", description: "Exploring wellness products, fitness technology, and healthcare innovations.", price: 1800, location: "Los Angeles, USA", time: "9:30 AM - 4:30 PM", date: "2025-08-12", image: e52 },
    { id: 5, name: "Real Estate & Property Expo", description: "A trade show for real estate investors, developers, and buyers.", price: 2300, location: "Dubai, UAE", time: "10:00 AM - 5:00 PM", date: "2025-10-20", image: e53 },
    { id: 6, name: "Food & Beverage Trade Fair", description: "Exhibiting international cuisines, food processing technologies, and gourmet products.", price: 1900, location: "Paris, France", time: "11:00 AM - 6:00 PM", date: "2025-11-05", image: e54 },
    { id: 7, name: "Construction & Engineering Trade Show", description: "Presenting the latest construction materials, tools, and architectural innovations.", price: 2600, location: "Berlin, Germany", time: "9:00 AM - 4:00 PM", date: "2025-07-30", image: e55 },
    { id: 8, name: "Gaming & eSports Expo", description: "Showcasing new video games, VR technology, and professional eSports tournaments.", price: 2200, location: "Tokyo, Japan", time: "10:30 AM - 8:00 PM", date: "2025-09-18", image: e56 },
    { id: 9, name: "Travel & Tourism Trade Fair", description: "Promoting travel destinations, airlines, and tourism packages worldwide.", price: 2100, location: "Bangkok, Thailand", time: "10:00 AM - 5:00 PM", date: "2025-08-28", image: e57 },
    { id: 10, name: "Renewable Energy & Sustainability Expo", description: "Highlighting solar power, wind energy, and eco-friendly solutions.", price: 2700, location: "Amsterdam, Netherlands", time: "9:30 AM - 4:30 PM", date: "2025-06-15", image: e58 },
    { id: 11, name: "Home & Interior Design Trade Show", description: "Featuring home decor trends, furniture innovations, and smart home technologies.", price: 2000, location: "Sydney, Australia", time: "10:00 AM - 6:00 PM", date: "2025-07-22", image: e59 },
    { id: 12, name: "Media & Entertainment Trade Fair", description: "A showcase of film, music, television, and content creation technologies.", price: 2500, location: "Mumbai, India", time: "11:00 AM - 7:00 PM", date: "2025-10-08", image: e60 }
  ];

  const filteredTrades = trades.filter(event =>
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

  const addToCart = (trade) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === trade.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${trade.name} added to cart!`, toastConfig);
        return [...prevCart, trade];
      } else {
        toast.info(`${trade.name} is already in cart!`, toastConfig);
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
            filteredTrades.map((trade) => [
              <div key={trade.id} className='card'>
                <img src={trade.image} alt={trade.name} />
                <h2>{trade.name}</h2>
                <h3>{trade.location}</h3>
                <h3>₹{trade.price}</h3>
                <button onClick={() => setSelectedTrade(trade)}>View Details</button>
                <button onClick={() => addToCart(trade)}>Add to Cart</button>
              </div>
            ])
          }
        </div>

        {selectedTrade && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setSelectedTrade(null)}>&times;</span>
              <img src={selectedTrade.image} alt={selectedTrade.name} />
              <h2>{selectedTrade.name}</h2>
              <h3>{selectedTrade.location}</h3>
              <p>{selectedTrade.description}</p>
              <h3>₹{selectedTrade.price}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
