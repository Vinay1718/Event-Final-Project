import React, { useState } from 'react';
import './Concert.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e169 from '../images/e169.webp';
import e170 from '../images/e170.webp';
import e171 from '../images/e171.webp';
import e172 from '../images/e172.webp';
import e173 from '../images/e173.webp';
import e174 from '../images/e174.webp';
import e175 from '../images/e175.webp';
import e176 from '../images/e176.webp';
import e177 from '../images/e177.webp';
import e178 from '../images/e178.webp';
import e179 from '../images/e179.webp';
import e180 from '../images/e180.webp';

export default function Concert({ cart, setCart }) {
  const [selectedConcert, setSelectedConcert] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const concerts = [
    { id: 1, name: "Rock Music Concert", description: "A night of electrifying performances by top rock bands.", price: 9500, location: "Los Angeles, USA", time: "7:00 PM - 11:00 PM", date: "2025-06-18", image: e169 },
    { id: 2, name: "Pop Music Festival", description: "Experience live performances from the biggest pop artists.", price: 8800, location: "London, UK", time: "6:30 PM - 10:30 PM", date: "2025-07-12", image: e170 },
    { id: 3, name: "Hip-Hop & Rap Concert", description: "A night of beats, rhymes, and high-energy performances.", price: 8700, location: "New York, USA", time: "8:00 PM - 12:00 AM", date: "2025-08-05", image: e171 },
    { id: 4, name: "EDM & DJ Festival", description: "Dance to electrifying beats with world-renowned DJs.", price: 9900, location: "Ibiza, Spain", time: "9:00 PM - 3:00 AM", date: "2025-09-20", image: e172 },
    { id: 5, name: "Jazz & Blues Concert", description: "An evening of soulful music and smooth performances.", price: 7600, location: "New Orleans, USA", time: "6:00 PM - 10:00 PM", date: "2025-10-14", image: e173 },
    { id: 6, name: "Classical Music Orchestra", description: "A grand orchestral performance featuring renowned musicians.", price: 8000, location: "Vienna, Austria", time: "5:00 PM - 9:00 PM", date: "2025-11-07", image: e174 },
    { id: 7, name: "Country Music Night", description: "A night of country music hits and live performances.", price: 7200, location: "Nashville, USA", time: "7:30 PM - 11:30 PM", date: "2025-12-02", image: e175 },
    { id: 8, name: "Indie & Alternative Concert", description: "A showcase of the best independent and alternative bands.", price: 7900, location: "Berlin, Germany", time: "7:00 PM - 11:00 PM", date: "2026-01-15", image: e176 },
    { id: 9, name: "Bollywood Music Night", description: "A live concert featuring Bollywood's biggest music stars.", price: 8600, location: "Mumbai, India", time: "8:00 PM - 12:00 AM", date: "2026-02-10", image: e177 },
    { id: 10, name: "Reggae & Caribbean Beats", description: "Enjoy the best reggae music with a tropical vibe.", price: 7300, location: "Kingston, Jamaica", time: "6:00 PM - 11:00 PM", date: "2026-03-05", image: e178 },
    { id: 11, name: "Metal & Heavy Rock Fest", description: "An adrenaline-filled concert with top metal bands.", price: 8900, location: "Stockholm, Sweden", time: "7:00 PM - 12:30 AM", date: "2026-04-22", image: e179 },
    { id: 12, name: "K-Pop Extravaganza", description: "A high-energy concert featuring the biggest K-pop idols.", price: 9100, location: "Seoul, South Korea", time: "5:00 PM - 10:00 PM", date: "2026-05-18", image: e180 }
  ];


  const filteredConcerts = concerts.filter(event =>
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

  const addToCart = (concert) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === concert.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${concert.name} added to cart!`, toastConfig);
        return [...prevCart, concert];
      } else {
        toast.info(`${concert.name} is already in cart!`, toastConfig);
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
            filteredConcerts.map((concert) => [
              <div key={concert.id} className='card'>
                <img src={concert.image} alt={concert.name} />
                <h2>{concert.name}</h2>
                <h3>{concert.location}</h3>
                <h3>₹{concert.price}</h3>
                <button onClick={() => setSelectedConcert(concert)}>View Details</button>
                <button onClick={() => addToCart(concert)}>Add to Cart</button>
              </div>
            ])
          }
        </div>

        {selectedConcert && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setSelectedConcert(null)}>&times;</span>
              <img src={selectedConcert.image} alt={selectedConcert.name} />
              <h2>{selectedConcert.name}</h2>
              <h3>{selectedConcert.location}</h3>
              <p>{selectedConcert.description}</p>
              <h3>₹{selectedConcert.price}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
