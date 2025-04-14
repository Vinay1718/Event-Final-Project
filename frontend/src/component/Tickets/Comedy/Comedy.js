import React, { useState } from 'react';
import './Comedy.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e181 from '../images/e181.webp';
import e182 from '../images/e182.webp';
import e183 from '../images/e183.webp';
import e184 from '../images/e184.webp';
import e185 from '../images/e185.webp';
import e186 from '../images/e186.webp';
import e187 from '../images/e187.webp';
import e188 from '../images/e188.webp';
import e189 from '../images/e189.webp';
import e190 from '../images/e190.webp';
import e191 from '../images/e191.webp';
import e192 from '../images/e192.webp';

export default function Comedy({ cart, setCart }) {
  const [searchQuery, setSearchQuery] = useState('');

  const comedys = [
    { id: 1, name: "Stand-Up Comedy Night", description: "A hilarious night with top stand-up comedians.", amount: 5500, location: "New York, USA", time: "7:00 PM - 10:00 PM", date: "2025-06-10", image: e181 },
    { id: 2, name: "Improv Comedy Show", description: "A spontaneous and interactive comedy experience.", amount: 4800, location: "Chicago, USA", time: "6:30 PM - 9:30 PM", date: "2025-07-15", image: e182 },
    { id: 3, name: "Comedy Roast Night", description: "A night of friendly insults and hilarious roasts.", amount: 6000, location: "Los Angeles, USA", time: "8:00 PM - 11:00 PM", date: "2025-08-05", image: e183 },
    { id: 4, name: "Satirical News Comedy", description: "A comedic take on current affairs and politics.", amount: 5300, location: "London, UK", time: "7:30 PM - 10:30 PM", date: "2025-09-12", image: e184 },
    { id: 5, name: "Dark Humor Special", description: "A night of edgy and uncensored comedy.", amount: 5900, location: "Berlin, Germany", time: "9:00 PM - 12:00 AM", date: "2025-10-08", image: e185 },
    { id: 6, name: "Sketch Comedy Festival", description: "Live sketches performed by talented comedy groups.", amount: 5200, location: "Toronto, Canada", time: "6:00 PM - 9:30 PM", date: "2025-11-20", image: e186 },
    { id: 7, name: "Musical Comedy Show", description: "A mix of music and comedy with witty songs.", amount: 5700, location: "Nashville, USA", time: "7:00 PM - 10:30 PM", date: "2025-12-10", image: e187 },
    { id: 8, name: "Comedy & Magic Night", description: "A blend of laughter and mind-blowing magic.", amount: 5600, location: "Las Vegas, USA", time: "8:00 PM - 11:00 PM", date: "2026-01-18", image: e188 },
    { id: 9, name: "Indian Stand-Up Special", description: "A comedy night featuring the best Indian comedians.", amount: 6100, location: "Mumbai, India", time: "6:30 PM - 10:00 PM", date: "2026-02-07", image: e189 },
    { id: 10, name: "Comedy Battle Night", description: "Comedians face off in a laughter showdown.", amount: 5000, location: "Sydney, Australia", time: "7:00 PM - 10:00 PM", date: "2026-03-14", image: e190 },
    { id: 11, name: "Open Mic Comedy", description: "A night where new comedians take the stage.", amount: 4500, location: "Amsterdam, Netherlands", time: "6:00 PM - 9:00 PM", date: "2026-04-22", image: e191 },
    { id: 12, name: "LGBTQ+ Comedy Night", description: "A celebration of humor with LGBTQ+ comedians.", amount: 5800, location: "San Francisco, USA", time: "8:00 PM - 11:30 PM", date: "2026-05-10", image: e192 }
  ];

  const filteredComedys = comedys.filter(event =>
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

  const addToCart = (comedy) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === comedy.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${comedy.name} added to cart!`, toastConfig);
        return [...prevCart, comedy];
      } else {
        toast.info(`${comedy.name} is already in cart!`, toastConfig);
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
            filteredComedys.map((comedy) => (
              <div key={comedy.id} className='card'>
                <img src={comedy.image} alt={comedy.name} />
                <h2>{comedy.name}</h2>
                <h3>{comedy.location}</h3>
                <h3>₹{comedy.amount}</h3>
                <button>View Details</button>
                <button onClick={() => addToCart(comedy)}>Add to Cart</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
