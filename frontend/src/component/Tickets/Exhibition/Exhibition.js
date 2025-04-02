import React from 'react'
import './Exhibition.css'

import e157 from '../images/e157.webp';
import e158 from '../images/e158.webp';
import e159 from '../images/e159.webp';
import e160 from '../images/e160.webp';
import e161 from '../images/e161.webp';
import e162 from '../images/e162.webp';
import e163 from '../images/e163.webp';
import e164 from '../images/e164.webp';
import e165 from '../images/e165.webp';
import e166 from '../images/e166.webp';
import e167 from '../images/e167.webp';
import e168 from '../images/e168.webp';

export default function Exhibition() {

    const exhibitions = [
        { id: 1, name: "Technology & Innovation Exhibition", description: "Showcasing the latest advancements in AI, robotics, and software.", amount: 9500, location: "San Francisco, USA", time: "10:00 AM - 6:00 PM", date: "2025-06-12", image: e157 },
        { id: 2, name: "Automobile Expo", description: "An exhibition featuring the latest cars, motorcycles, and electric vehicles.", amount: 8500, location: "Detroit, USA", time: "11:00 AM - 7:00 PM", date: "2025-07-08", image: e158 },
        { id: 3, name: "Fashion & Apparel Exhibition", description: "Showcasing the latest fashion trends from top designers.", amount: 7800, location: "Paris, France", time: "12:00 PM - 8:00 PM", date: "2025-08-20", image: e159 },
        { id: 4, name: "Health & Wellness Expo", description: "An exhibition featuring health products, fitness trends, and medical innovations.", amount: 7200, location: "New York, USA", time: "10:00 AM - 5:00 PM", date: "2025-09-10", image: e160 },
        { id: 5, name: "Real Estate & Property Exhibition", description: "Connecting property developers, investors, and buyers.", amount: 8800, location: "Dubai, UAE", time: "9:00 AM - 6:00 PM", date: "2025-10-05", image: e161 },
        { id: 6, name: "Food & Beverage Expo", description: "A gathering of top chefs, restaurants, and food manufacturers.", amount: 7000, location: "Rome, Italy", time: "11:00 AM - 9:00 PM", date: "2025-11-12", image: e162 },
        { id: 7, name: "Construction & Engineering Exhibition", description: "Showcasing the latest construction technology and infrastructure projects.", amount: 9200, location: "Berlin, Germany", time: "10:00 AM - 5:30 PM", date: "2025-12-02", image: e163 },
        { id: 8, name: "Gaming & eSports Exhibition", description: "A showcase of upcoming games, gaming hardware, and competitive eSports.", amount: 8300, location: "Seoul, South Korea", time: "12:00 PM - 10:00 PM", date: "2026-01-18", image: e164 },
        { id: 9, name: "Travel & Tourism Expo", description: "Highlighting global travel destinations, airlines, and hospitality services.", amount: 7500, location: "Bangkok, Thailand", time: "9:30 AM - 5:00 PM", date: "2026-02-10", image: e165 },
        { id: 10, name: "Renewable Energy & Sustainability Exhibition", description: "Focusing on clean energy, climate change solutions, and green technology.", amount: 8900, location: "Amsterdam, Netherlands", time: "10:00 AM - 6:00 PM", date: "2026-03-22", image: e166 },
        { id: 11, name: "Home & Interior Design Expo", description: "An exhibition for architects, interior designers, and home décor brands.", amount: 6800, location: "London, UK", time: "11:00 AM - 7:30 PM", date: "2026-04-15", image: e167 },
        { id: 12, name: "Media & Entertainment Expo", description: "A showcase of the latest in film, TV, digital media, and music.", amount: 8000, location: "Los Angeles, USA", time: "12:00 PM - 8:00 PM", date: "2026-05-10", image: e168 }
    ];


  return (
    <div className='ticket-container'>
    {
      exhibitions.map((exhibition) => [
        <div key={exhibition.id} className='card'>
          <img src={exhibition.image} alt={exhibition.name} />
          <h2>{exhibition.name}</h2>
          <h3>{exhibition.location}</h3>
          <h3>₹{exhibition.amount}</h3>
          <button>View Details</button>
          <button>Add to Cart</button>
        </div>
      ])
    }
  </div>
  )
}
