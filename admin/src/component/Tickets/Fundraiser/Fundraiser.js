import React, { useState } from 'react'
import './Fundraiser.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e13 from '../images/e13.webp';
import e14 from '../images/e14.webp';
import e15 from '../images/e15.webp';
import e16 from '../images/e16.webp';
import e17 from '../images/e17.webp';
import e18 from '../images/e18.webp';
import e19 from '../images/e19.webp';
import e20 from '../images/e20.webp';
import e21 from '../images/e21.webp';
import e22 from '../images/e23.webp';
import e23 from '../images/e23.webp';
import e24 from '../images/e24.webp';

export default function Fundraiser({ cart, setCart }) {
  const [searchQuery, setSearchQuery] = useState('');


  const funds = [
    { id: 1, name: "Charity Gala", description: "A formal fundraising event with dinner, entertainment, and auctions for a noble cause.", amount: 8000, location: "New York, USA", time: "7:00 PM - 11:00 PM", date: "2025-06-20", image: e13 },
    { id: 2, name: "Walkathon", description: "A community-driven walking event to raise funds for health and social causes.", amount: 2000, location: "Los Angeles, USA", time: "8:00 AM - 12:00 PM", date: "2025-07-05", image: e14 },
    { id: 3, name: "Benefit Concert", description: "A live music event featuring popular artists to raise funds for charity.", amount: 5000, location: "London, UK", time: "6:00 PM - 10:00 PM", date: "2025-08-15", image: e15 },
    { id: 4, name: "Auction Fundraiser", description: "An auction of exclusive items and experiences to generate charitable contributions.", amount: 10000, location: "Dubai, UAE", time: "7:30 PM - 10:30 PM", date: "2025-09-12", image: e16 },
    { id: 5, name: "Marathon Fundraiser", description: "A large-scale running event where participants raise money through sponsorships.", amount: 3000, location: "Sydney, Australia", time: "6:00 AM - 1:00 PM", date: "2025-10-10", image: e17 },
    { id: 6, name: "Charity Dinner", description: "An exclusive dinner event with speeches and fundraising activities.", amount: 6000, location: "Toronto, Canada", time: "7:00 PM - 10:00 PM", date: "2025-11-08", image: e18 },
    { id: 7, name: "Online Crowdfunding Campaign", description: "A virtual fundraising effort using online donation platforms.", amount: 1000, location: "Global (Online)", time: "24/7", date: "Ongoing", image: e19 },
    { id: 8, name: "Talent Show Fundraiser", description: "A showcase of local talent with ticket sales contributing to a social cause.", amount: 2500, location: "Berlin, Germany", time: "5:00 PM - 9:00 PM", date: "2025-12-01", image: e20 },
    { id: 9, name: "Charity Sports Tournament", description: "A competitive sports event where teams and spectators donate towards a cause.", amount: 4000, location: "Amsterdam, Netherlands", time: "10:00 AM - 5:00 PM", date: "2026-01-20", image: e21 },
    { id: 10, name: "Book Fair Fundraiser", description: "A book sale event where proceeds go towards education and literacy programs.", amount: 1500, location: "Singapore", time: "9:00 AM - 6:00 PM", date: "2026-02-10", image: e22 },
    { id: 11, name: "Comedy Night Fundraiser", description: "A stand-up comedy event where ticket proceeds support a charitable mission.", amount: 3500, location: "San Francisco, USA", time: "8:00 PM - 11:00 PM", date: "2026-03-05", image: e23 },
    { id: 12, name: "Art Auction Fundraiser", description: "An auction of artworks donated by artists, with funds supporting community projects.", amount: 7000, location: "Paris, France", time: "6:30 PM - 9:30 PM", date: "2026-04-15", image: e24 }
  ];


  const filteredFunds = funds.filter(event =>
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

  const addToCart = (fund) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === fund.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${fund.name} added to cart!`, toastConfig);
        return [...prevCart, fund];
      } else {
        toast.info(`${fund.name} is already in cart!`, toastConfig);
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
            filteredFunds.map((fund) => [
              <div key={fund.id} className='card'>
                <img src={fund.image} alt={fund.name} />
                <h2>{fund.name}</h2>
                <h3>{fund.location}</h3>
                <h3>₹{fund.amount}</h3>
                <button>View Details</button>
                <button onClick={() => addToCart(fund)}>Add to Cart</button>
              </div>
            ])
          }
        </div>
      </div>
    </>
  );
}
