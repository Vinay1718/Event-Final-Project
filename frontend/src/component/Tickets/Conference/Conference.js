import React, { useState } from 'react'
import './Conference.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import e1 from '../images/e1.webp';
import e2 from '../images/e2.webp';
import e3 from '../images/e3.webp';
import e4 from '../images/e4.webp';
import e5 from '../images/e5.webp';
import e6 from '../images/e6.webp';
import e7 from '../images/e7.webp';
import e8 from '../images/e8.webp';
import e9 from '../images/e9.webp';
import e10 from '../images/e10.webp';
import e11 from '../images/e11.webp';
import e12 from '../images/e12.webp';

export default function Conference({ cart, setCart }) {
  const [selectedConference, setSelectedConference] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const conferences = [
    { id: 1, name: "Business Conference", description: "A gathering of professionals to discuss market trends and business strategies.", price: 5000, location: "New York, USA", time: "10:00 AM - 4:00 PM", date: "2025-06-15", image: e1 },
    { id: 2, name: "Technology Conference", description: "An event showcasing the latest advancements in AI, cybersecurity, and software development.", price: 7000, location: "San Francisco, USA", time: "9:30 AM - 5:00 PM", date: "2025-07-10", image: e2 },
    { id: 3, name: "Healthcare Conference", description: "A platform for medical professionals to discuss innovations in healthcare and treatment methodologies.", price: 6000, location: "London, UK", time: "8:00 AM - 3:30 PM", date: "2025-08-20", image: e3 },
    { id: 4, name: "Education Conference", description: "An event focused on new teaching methodologies, educational technology, and curriculum advancements.", price: 4000, location: "Toronto, Canada", time: "9:00 AM - 2:00 PM", date: "2025-09-05", image: e4 },
    { id: 5, name: "Marketing Conference", description: "Industry leaders discuss digital marketing, branding, and consumer engagement strategies.", price: 5500, location: "Sydney, Australia", time: "11:00 AM - 5:00 PM", date: "2025-09-25", image: e5 },
    { id: 6, name: "Finance & Investment Conference", description: "A global platform for discussing financial markets, investment strategies, and economic trends.", price: 8000, location: "Dubai, UAE", time: "10:00 AM - 6:00 PM", date: "2025-10-12", image: e6 },
    { id: 7, name: "Leadership & HR Conference", description: "A forum for HR professionals and leaders to explore team management, recruitment, and workplace culture.", price: 4500, location: "Berlin, Germany", time: "9:30 AM - 4:30 PM", date: "2025-11-03", image: e7 },
    { id: 8, name: "Startup & Entrepreneurship Conference", description: "Entrepreneurs and investors connect to discuss innovation, funding, and business scaling.", price: 6500, location: "Singapore", time: "10:00 AM - 5:30 PM", date: "2025-11-22", image: e8 },
    { id: 9, name: "Legal Conference", description: "A gathering of legal professionals to discuss policies, new regulations, and case law developments.", price: 4800, location: "Paris, France", time: "9:00 AM - 3:00 PM", date: "2025-12-10", image: e9 },
    { id: 10, name: "Environmental Conference", description: "Experts discuss climate change, sustainability, and renewable energy innovations.", price: 5200, location: "Amsterdam, Netherlands", time: "8:30 AM - 4:00 PM", date: "2026-01-15", image: e10 },
    { id: 11, name: "Media & Journalism Conference", description: "Journalists and media professionals discuss the future of news, press freedom, and digital journalism.", price: 5000, location: "Los Angeles, USA", time: "10:00 AM - 4:30 PM", date: "2026-02-07", image: e11 },
    { id: 12, name: "Government & Policy Conference", description: "Officials and policy experts discuss governance, legislation, and global political trends.", price: 6000, location: "Washington D.C., USA", time: "9:00 AM - 5:00 PM", date: "2026-03-20", image: e12 }
  ];

  const filteredConferences = conferences.filter(event =>
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

  const addToCart = (conference) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === conference.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${conference.name} added to cart!`, toastConfig);
        return [...prevCart, conference];
      } else {
        toast.info(`${conference.name} is already in cart!`, toastConfig);
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
            filteredConferences.map((conference) => [
              <div key={conference.id} className='card'>
                <img src={conference.image} alt={conference.name} />
                <h2>{conference.name}</h2>
                <h3>{conference.location}</h3>
                <h3>₹{conference.price}</h3>
                <button onClick={() => setSelectedConference(conference)}>View Details</button>
                <button onClick={() => addToCart(conference)}>Add to Cart</button>
              </div>
            ])
          }
        </div>

        {selectedConference && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setSelectedConference(null)}>&times;</span>
              <img src={selectedConference.image} alt={selectedConference.name} />
              <h2>{selectedConference.name}</h2>
              <h3>{selectedConference.location}</h3>
              <p>{selectedConference.description}</p>
              <h3>₹{selectedConference.price}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

