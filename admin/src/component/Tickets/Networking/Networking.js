import React, { useState } from 'react'
import './Networking.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e109 from '../images/e109.webp';
import e110 from '../images/e110.webp';
import e111 from '../images/e111.webp';
import e112 from '../images/e112.webp';
import e113 from '../images/e113.webp';
import e114 from '../images/e114.webp';
import e115 from '../images/e115.webp';
import e116 from '../images/e116.webp';
import e117 from '../images/e117.webp';
import e118 from '../images/e118.webp';
import e119 from '../images/e119.webp';
import e120 from '../images/e120.webp';

export default function Networking({ cart, setCart }) {
  const [searchQuery, setSearchQuery] = useState('');

  const networkings = [
    { id: 1, name: "Tech Innovators Meetup", description: "Connect with tech professionals, entrepreneurs, and investors in the industry.", amount: 3000, location: "San Francisco, USA", time: "6:00 PM - 9:00 PM", date: "2025-06-28", image: e109 },
    { id: 2, name: "Entrepreneur Networking Night", description: "An evening of networking for startup founders, investors, and business leaders.", amount: 3500, location: "New York, USA", time: "7:00 PM - 10:00 PM", date: "2025-07-12", image: e110 },
    { id: 3, name: "Women in Business Networking", description: "An exclusive event for women professionals to build meaningful connections.", amount: 3200, location: "London, UK", time: "5:30 PM - 8:30 PM", date: "2025-08-08", image: e111 },
    { id: 4, name: "Marketing Professionals Mixer", description: "A casual networking event for marketing executives and digital strategists.", amount: 2800, location: "Los Angeles, USA", time: "6:30 PM - 9:30 PM", date: "2025-09-15", image: e112 },
    { id: 5, name: "Finance & Investment Connect", description: "Network with financial experts, wealth managers, and investment professionals.", amount: 4000, location: "Dubai, UAE", time: "7:00 PM - 10:00 PM", date: "2025-10-05", image: e113 },
    { id: 6, name: "Creative Industry Networking", description: "A meetup for artists, designers, and content creators to collaborate and grow.", amount: 3100, location: "Berlin, Germany", time: "5:00 PM - 8:00 PM", date: "2025-11-18", image: e114 },
    { id: 7, name: "Healthcare Professionals Meet & Greet", description: "Medical professionals and researchers gather to share ideas and network.", amount: 3700, location: "Toronto, Canada", time: "6:30 PM - 9:30 PM", date: "2025-12-03", image: e115 },
    { id: 8, name: "Real Estate Networking Mixer", description: "An event for real estate agents, developers, and investors to connect.", amount: 4200, location: "Miami, USA", time: "5:30 PM - 8:30 PM", date: "2026-01-20", image: e116 },
    { id: 9, name: "Legal Professionals Networking", description: "A networking opportunity for lawyers, legal advisors, and policymakers.", amount: 3500, location: "Washington D.C., USA", time: "6:00 PM - 9:00 PM", date: "2026-02-14", image: e117 },
    { id: 10, name: "Gaming & eSports Networking Night", description: "Gamers, developers, and streamers gather to discuss trends and opportunities.", amount: 2700, location: "Seoul, South Korea", time: "7:00 PM - 10:00 PM", date: "2026-03-10", image: e118 },
    { id: 11, name: "Sustainability & Green Tech Networking", description: "Environmentalists, green tech experts, and entrepreneurs discuss innovation.", amount: 3300, location: "Amsterdam, Netherlands", time: "5:30 PM - 8:30 PM", date: "2026-04-22", image: e119 },
    { id: 12, name: "HR & Leadership Networking Forum", description: "HR leaders and executives discuss workplace culture and leadership strategies.", amount: 3600, location: "Singapore", time: "6:00 PM - 9:00 PM", date: "2026-05-05", image: e120 }
  ];


  const filteredNetworkings = networkings.filter(event =>
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

  const addToCart = (networking) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === networking.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${networking.name} added to cart!`, toastConfig);
        return [...prevCart, networking];
      } else {
        toast.info(`${networking.name} is already in cart!`, toastConfig);
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
            filteredNetworkings.map((networking) => [
              <div key={networking.id} className='card'>
                <img src={networking.image} alt={networking.name} />
                <h2>{networking.name}</h2>
                <h3>{networking.location}</h3>
                <h3>₹{networking.amount}</h3>
                <button>View Details</button>
                <button onClick={() => addToCart(networking)}>Add to Cart</button>
              </div>
            ])
          }
        </div>
      </div>
    </>
  );
}

