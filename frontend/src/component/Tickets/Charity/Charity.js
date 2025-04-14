import React, { useState } from 'react';
import './Charity.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e193 from '../images/e193.webp';
import e194 from '../images/e194.webp';
import e195 from '../images/e195.webp';
import e196 from '../images/e196.webp';
import e197 from '../images/e197.webp';
import e198 from '../images/e198.webp';
import e199 from '../images/e199.webp';
import e200 from '../images/e200.webp';
import e201 from '../images/e201.webp';
import e202 from '../images/e202.webp';
import e203 from '../images/e203.webp';
import e204 from '../images/e204.webp';

export default function Charity({ cart, setCart }) {
  const [searchQuery, setSearchQuery] = useState('');

  const charitys = [
    { id: 1, name: "Fundraising Gala", description: "An elegant night of giving to support various causes.", amount: 10000, location: "New York, USA", time: "7:00 PM - 11:00 PM", date: "2025-06-15", image: e193 },
    { id: 2, name: "Charity Marathon", description: "A running event to raise funds for health initiatives.", amount: 5000, location: "London, UK", time: "6:00 AM - 12:00 PM", date: "2025-07-08", image: e194 },
    { id: 3, name: "Benefit Concert", description: "A music event where proceeds go to humanitarian aid.", amount: 8000, location: "Los Angeles, USA", time: "8:00 PM - 12:00 AM", date: "2025-08-20", image: e195 },
    { id: 4, name: "Food Drive Event", description: "A community gathering to donate food to the needy.", amount: 3000, location: "Chicago, USA", time: "9:00 AM - 3:00 PM", date: "2025-09-05", image: e196 },
    { id: 5, name: "Environmental Clean-Up Drive", description: "A charity event focused on cleaning and conservation.", amount: 3500, location: "Sydney, Australia", time: "7:00 AM - 1:00 PM", date: "2025-10-10", image: e197 },
    { id: 6, name: "Orphanage Support Program", description: "A day dedicated to helping children in need.", amount: 4500, location: "Mumbai, India", time: "10:00 AM - 5:00 PM", date: "2025-11-12", image: e198 },
    { id: 7, name: "Charity Art Auction", description: "Bid on art pieces to raise funds for various charities.", amount: 9000, location: "Paris, France", time: "6:00 PM - 10:00 PM", date: "2025-12-18", image: e199 },
    { id: 8, name: "Animal Shelter Support", description: "A fundraising event for animal rescue and shelters.", amount: 4000, location: "Toronto, Canada", time: "11:00 AM - 4:00 PM", date: "2026-01-22", image: e200 },
    { id: 9, name: "Education & Scholarship Drive", description: "A campaign to provide scholarships for underprivileged students.", amount: 7000, location: "Berlin, Germany", time: "10:00 AM - 3:00 PM", date: "2026-02-14", image: e201 },
    { id: 10, name: "Blood Donation Camp", description: "A health-focused charity event to collect blood donations.", amount: 2500, location: "Dubai, UAE", time: "8:00 AM - 2:00 PM", date: "2026-03-09", image: e202 },
    { id: 11, name: "Disaster Relief Fundraiser", description: "An event to support communities affected by disasters.", amount: 8500, location: "Tokyo, Japan", time: "7:00 PM - 11:00 PM", date: "2026-04-25", image: e203 },
    { id: 12, name: "Clothing Donation Drive", description: "A charitable initiative to distribute clothing to those in need.", amount: 3200, location: "Amsterdam, Netherlands", time: "9:00 AM - 4:00 PM", date: "2026-05-17", image: e204 }
  ];

  const filteredCharities = charitys.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
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

  const addToCart = (charity) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === charity.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${charity.name} added to cart!`, toastConfig);
        return [...prevCart, charity];
      } else {
        toast.info(`${charity.name} is already in cart!`, toastConfig);
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
            placeholder="Search charity events by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='search-bar'
          />
        </div>

        <div className='ticket-container'>
          {
            filteredCharities.map((charity) => (
              <div key={charity.id} className='card'>
                <img src={charity.image} alt={charity.name} />
                <h2>{charity.name}</h2>
                <h3>{charity.location}</h3>
                <h3>₹{charity.amount}</h3>
                <button>View Details</button>
                <button onClick={() => addToCart(charity)}>Add to Cart</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
