import React from 'react'
import './Hackathon.css'

import e121 from '../images/e121.webp';
import e122 from '../images/e122.webp';
import e123 from '../images/e123.webp';
import e124 from '../images/e124.webp';
import e125 from '../images/e125.webp';
import e126 from '../images/e126.webp';
import e127 from '../images/e127.webp';
import e128 from '../images/e128.webp';
import e129 from '../images/e129.webp';
import e130 from '../images/e130.webp';
import e131 from '../images/e131.webp';
import e132 from '../images/e132.webp';

export default function Hackathon() {
    const hackathons = [
        { id: 1, name: "AI & Machine Learning Hackathon", description: "Develop AI-driven solutions and machine learning models in a competitive setting.", amount: 7000, location: "San Francisco, USA", time: "9:00 AM - 9:00 PM", date: "2025-06-30", image: e121 },
        { id: 2, name: "Cybersecurity Hackathon", description: "Participants work on ethical hacking challenges and cybersecurity solutions.", amount: 6500, location: "New York, USA", time: "10:00 AM - 8:00 PM", date: "2025-07-20", image: e122 },
        { id: 3, name: "FinTech Hackathon", description: "A coding event for building innovative financial technology applications.", amount: 7200, location: "London, UK", time: "8:00 AM - 10:00 PM", date: "2025-08-12", image: e123 },
        { id: 4, name: "Blockchain & Web3 Hackathon", description: "Develop decentralized apps (DApps) and blockchain-based solutions.", amount: 8000, location: "Dubai, UAE", time: "9:30 AM - 11:00 PM", date: "2025-09-18", image: e124 },
        { id: 5, name: "Healthcare Tech Hackathon", description: "A hackathon focused on technology solutions for the healthcare industry.", amount: 6800, location: "Berlin, Germany", time: "10:00 AM - 9:00 PM", date: "2025-10-10", image: e125 },
        { id: 6, name: "EdTech Hackathon", description: "Develop innovative solutions to improve education using technology.", amount: 6200, location: "Toronto, Canada", time: "9:00 AM - 7:00 PM", date: "2025-11-05", image: e126 },
        { id: 7, name: "Game Development Hackathon", description: "Create and develop new video games within a limited time frame.", amount: 7500, location: "Los Angeles, USA", time: "8:00 AM - 12:00 AM", date: "2025-12-15", image: e127 },
        { id: 8, name: "Smart Cities & IoT Hackathon", description: "Work on IoT and smart city solutions for urban innovation.", amount: 7000, location: "Singapore", time: "9:30 AM - 10:00 PM", date: "2026-01-25", image: e128 },
        { id: 9, name: "Sustainability & GreenTech Hackathon", description: "Develop eco-friendly technology solutions for sustainability challenges.", amount: 6900, location: "Amsterdam, Netherlands", time: "10:00 AM - 9:00 PM", date: "2026-02-18", image: e129 },
        { id: 10, name: "E-commerce & Retail Tech Hackathon", description: "Build next-generation solutions for the e-commerce industry.", amount: 7100, location: "Hong Kong", time: "8:00 AM - 9:30 PM", date: "2026-03-12", image: e130 },
        { id: 11, name: "Social Impact & Nonprofit Hackathon", description: "Create technology-driven solutions for social good and nonprofit initiatives.", amount: 6300, location: "Paris, France", time: "9:00 AM - 8:00 PM", date: "2026-04-10", image: e131 },
        { id: 12, name: "Open Source Contribution Hackathon", description: "A collaborative coding event to contribute to open-source projects.", amount: 6700, location: "San Diego, USA", time: "10:00 AM - 9:00 PM", date: "2026-05-05", image: e132 }
];



  return (
    <div className='ticket-container'>
    {
      hackathons.map((hackathon) => [
        <div key={hackathon.id} className='card'>
          <img src={hackathon.image} alt={hackathon.name} />
          <h2>{hackathon.name}</h2>
          <h3>{hackathon.location}</h3>
          <h3>₹{hackathon.amount}</h3>
          <button>View Details</button>
          <button>Add to Cart</button>
        </div>
      ])
    }
  </div>
  )
}
