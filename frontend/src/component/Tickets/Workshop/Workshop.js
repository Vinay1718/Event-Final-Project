import React, { useState } from 'react'
import './Workshop.css'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import e37 from '../images/e37.webp';
import e38 from '../images/e38.webp';
import e39 from '../images/e39.webp';
import e40 from '../images/e40.webp';
import e41 from '../images/e41.webp';
import e42 from '../images/e42.webp';
import e43 from '../images/e43.webp';
import e44 from '../images/e44.webp';
import e45 from '../images/e45.webp';
import e46 from '../images/e46.webp';
import e47 from '../images/e47.webp';
import e48 from '../images/e48.webp';

export default function Workshop({ cart, setCart }) {
  const [searchQuery, setSearchQuery] = useState('');

  const workshops = [
    { id: 1, name: "Leadership & Management Workshop", description: "Develop leadership skills, team management, and strategic decision-making abilities.", amount: 1500, location: "New York, USA", time: "10:00 AM - 3:00 PM", date: "2025-06-15", image: e37 },
    { id: 2, name: "Entrepreneurship & Startup Workshop", description: "Learn how to launch and scale a startup, pitch to investors, and develop business strategies.", amount: 1800, location: "San Francisco, USA", time: "9:30 AM - 2:30 PM", date: "2025-07-10", image: e38 },
    { id: 3, name: "Public Speaking & Communication Workshop", description: "Enhance public speaking, confidence, and communication skills with professional training.", amount: 1300, location: "London, UK", time: "11:00 AM - 4:00 PM", date: "2025-05-22", image: e39 },
    { id: 4, name: "Digital Marketing & SEO Workshop", description: "Gain expertise in digital marketing, SEO, content creation, and online branding strategies.", amount: 1600, location: "Toronto, Canada", time: "1:00 PM - 5:00 PM", date: "2025-08-05", image: e40 },
    { id: 5, name: "Photography & Videography Workshop", description: "Improve photography and videography skills, including lighting, composition, and editing.", amount: 1400, location: "Paris, France", time: "10:00 AM - 3:00 PM", date: "2025-06-30", image: e41 },
    { id: 6, name: "Coding & Software Development Workshop", description: "Learn programming languages, software development techniques, and app building.", amount: 2000, location: "Berlin, Germany", time: "9:00 AM - 2:00 PM", date: "2025-09-12", image: e42 },
    { id: 7, name: "Graphic Design & UI/UX Workshop", description: "Master graphic design and user experience concepts using tools like Adobe XD and Figma.", amount: 1700, location: "Sydney, Australia", time: "10:30 AM - 4:30 PM", date: "2025-07-18", image: e43 },
    { id: 8, name: "Finance & Investment Planning Workshop", description: "Learn financial planning, investment strategies, and money management techniques.", amount: 1900, location: "Dubai, UAE", time: "11:00 AM - 5:00 PM", date: "2025-08-25", image: e44 },
    { id: 9, name: "Health & Wellness Workshop", description: "Improve mental and physical well-being through yoga, mindfulness, and fitness training.", amount: 1200, location: "Bali, Indonesia", time: "8:00 AM - 1:00 PM", date: "2025-06-10", image: e45 },
    { id: 10, name: "Artificial Intelligence & Machine Learning Workshop", description: "Understand AI and ML fundamentals with hands-on projects and real-world applications.", amount: 2200, location: "Singapore", time: "9:00 AM - 3:00 PM", date: "2025-10-05", image: e46 },
    { id: 11, name: "Content Writing & Blogging Workshop", description: "Enhance writing skills, storytelling techniques, and blogging strategies for digital success.", amount: 1300, location: "Los Angeles, USA", time: "10:00 AM - 3:00 PM", date: "2025-09-20", image: e47 },
    { id: 12, name: "Cybersecurity & Ethical Hacking Workshop", description: "Learn about cybersecurity threats, ethical hacking, and protecting online systems.", amount: 2100, location: "Tokyo, Japan", time: "9:30 AM - 2:30 PM", date: "2025-11-15", image: e48 }
  ];


  const filteredWorkshops = workshops.filter(event =>
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

  const addToCart = (workshop) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === workshop.id);
      toast.dismiss();
      if (!isItemInCart) {
        toast.success(`${workshop.name} added to cart!`, toastConfig);
        return [...prevCart, workshop];
      } else {
        toast.info(`${workshop.name} is already in cart!`, toastConfig);
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
            filteredWorkshops.map((workshop) => [
              <div key={workshop.id} className='card'>
                <img src={workshop.image} alt={workshop.name} />
                <h2>{workshop.name}</h2>
                <h3>{workshop.location}</h3>
                <h3>₹{workshop.amount}</h3>
                <button>View Details</button>
                <button onClick={() => addToCart(workshop)}>Add to Cart</button>
              </div>
            ])
          }
        </div>
      </div>
    </>

  );
}
