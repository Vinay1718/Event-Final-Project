import React, { useState } from 'react'
import './Panel.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e97 from '../images/e97.webp';
import e98 from '../images/e98.webp';
import e99 from '../images/e99.webp';
import e100 from '../images/e100.webp';
import e101 from '../images/e101.webp';
import e102 from '../images/e102.webp';
import e103 from '../images/e103.webp';
import e104 from '../images/e104.webp';
import e105 from '../images/e105.webp';
import e106 from '../images/e106.webp';
import e107 from '../images/e107.webp';
import e108 from '../images/e108.webp';

export default function Panel({ cart, setCart }) {
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const panels = [
    { id: 1, name: "AI & Future Tech Panel", description: "Experts discuss the impact of AI on industries and future innovations.", price: 4000, location: "San Francisco, USA", time: "11:00 AM - 2:00 PM", date: "2025-06-25", image: e97 },
    { id: 2, name: "Sustainability & Climate Change Panel", description: "A discussion on environmental policies, renewable energy, and sustainability efforts.", price: 3500, location: "Berlin, Germany", time: "10:00 AM - 1:30 PM", date: "2025-07-15", image: e98 },
    { id: 3, name: "Women in Leadership Panel", description: "Successful women leaders share their experiences and strategies for success.", price: 4500, location: "New York, USA", time: "9:30 AM - 12:30 PM", date: "2025-08-05", image: e99 },
    { id: 4, name: "Cybersecurity & Privacy Panel", description: "Industry leaders discuss threats, cybersecurity strategies, and data protection.", price: 5000, location: "London, UK", time: "1:00 PM - 4:00 PM", date: "2025-09-10", image: e100 },
    { id: 5, name: "Startup & Investment Panel", description: "Entrepreneurs and investors discuss funding, scaling, and startup trends.", price: 4800, location: "Singapore", time: "2:00 PM - 5:00 PM", date: "2025-10-20", image: e101 },
    { id: 6, name: "Healthcare & Biotech Panel", description: "Medical experts discuss breakthroughs in healthcare, biotech, and pharmaceuticals.", price: 5200, location: "Boston, USA", time: "10:30 AM - 2:30 PM", date: "2025-11-12", image: e102 },
    { id: 7, name: "Future of Work & Remote Culture Panel", description: "HR and business leaders explore the evolution of remote work and company culture.", price: 3900, location: "Toronto, Canada", time: "12:00 PM - 3:00 PM", date: "2025-12-01", image: e103 },
    { id: 8, name: "Blockchain & Web3 Panel", description: "A discussion on decentralized finance, NFTs, and the future of blockchain technology.", price: 5500, location: "Dubai, UAE", time: "1:30 PM - 4:30 PM", date: "2026-01-18", image: e104 },
    { id: 9, name: "Entertainment & Media Panel", description: "Leaders in film, music, and media discuss industry trends and digital content.", price: 4200, location: "Los Angeles, USA", time: "3:00 PM - 6:00 PM", date: "2026-02-07", image: e105 },
    { id: 10, name: "Finance & Global Economy Panel", description: "Experts analyze economic trends, investments, and the financial markets.", price: 6000, location: "Hong Kong", time: "11:00 AM - 3:00 PM", date: "2026-03-22", image: e106 },
    { id: 11, name: "Education & EdTech Panel", description: "A discussion on the future of education, e-learning, and edtech innovations.", price: 3400, location: "Amsterdam, Netherlands", time: "10:00 AM - 1:00 PM", date: "2026-04-15", image: e107 },
    { id: 12, name: "Legal & Ethics Panel", description: "Experts discuss legal challenges, ethics, and regulatory changes in various industries.", price: 4600, location: "Washington D.C., USA", time: "9:00 AM - 12:30 PM", date: "2026-05-10", image: e108 }
  ];

  const filteredPanels = panels.filter(event =>
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

  const addToCart = (panel) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === panel.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${panel.name} added to cart!`, toastConfig);
        return [...prevCart, panel];
      } else {
        toast.info(`${panel.name} is already in cart!`, toastConfig);
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
            filteredPanels.map((panel) => [
              <div key={panel.id} className='card'>
                <img src={panel.image} alt={panel.name} />
                <h2>{panel.name}</h2>
                <h3>{panel.location}</h3>
                <h3>₹{panel.price}</h3>
                <button onClick={() => setSelectedPanel(panel)}>View Details</button>
                <button onClick={() => addToCart(panel)}>Add to Cart</button>
              </div>
            ])
          }
        </div>

        {selectedPanel && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-btn" onClick={() => setSelectedPanel(null)}>&times;</span>
              <img src={selectedPanel.image} alt={selectedPanel.name} />
              <h2>{selectedPanel.name}</h2>
              <h3>{selectedPanel.location}</h3>
              <p>{selectedPanel.description}</p>
              <h3>₹{selectedPanel.price}</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

