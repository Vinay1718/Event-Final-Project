import React from 'react'
import './Festival.css'

import e145 from '../images/e145.webp';
import e146 from '../images/e146.webp';
import e147 from '../images/e147.webp';
import e148 from '../images/e148.webp';
import e149 from '../images/e149.webp';
import e150 from '../images/e150.webp';
import e151 from '../images/e151.webp';
import e152 from '../images/e152.webp';
import e153 from '../images/e153.webp';
import e154 from '../images/e154.webp';
import e155 from '../images/e155.webp';
import e156 from '../images/e156.webp';


export default function Festival() {

    const festivals = [
        { id: 1, name: "Music Festival", description: "A grand celebration of music featuring artists from around the world.", amount: 9000, location: "Los Angeles, USA", time: "4:00 PM - 12:00 AM", date: "2025-06-20", image: e145 },
        { id: 2, name: "Film Festival", description: "Showcasing the best in international cinema and indie films.", amount: 7500, location: "Cannes, France", time: "10:00 AM - 11:00 PM", date: "2025-07-05", image: e146 },
        { id: 3, name: "Food Festival", description: "A paradise for food lovers, featuring cuisines from different cultures.", amount: 6500, location: "New York, USA", time: "11:00 AM - 9:00 PM", date: "2025-08-15", image: e147 },
        { id: 4, name: "Cultural Festival", description: "A vibrant event celebrating diverse traditions and heritage.", amount: 5800, location: "Tokyo, Japan", time: "1:00 PM - 10:00 PM", date: "2025-09-10", image: e148 },
        { id: 5, name: "Beer & Wine Festival", description: "Enjoy craft beers and fine wines from top producers worldwide.", amount: 7200, location: "Berlin, Germany", time: "3:00 PM - 11:00 PM", date: "2025-10-08", image: e149 },
        { id: 6, name: "Art & Design Festival", description: "An exhibition of contemporary art, design, and creativity.", amount: 6700, location: "London, UK", time: "10:00 AM - 7:00 PM", date: "2025-11-12", image: e150 },
        { id: 7, name: "Comedy Festival", description: "A laughter-filled event featuring stand-up comedians and improv acts.", amount: 6000, location: "Chicago, USA", time: "6:00 PM - 11:00 PM", date: "2025-12-18", image: e151 },
        { id: 8, name: "Literary Festival", description: "An event for book lovers, featuring author readings and discussions.", amount: 5000, location: "Edinburgh, Scotland", time: "9:00 AM - 6:00 PM", date: "2026-01-25", image: e152 },
        { id: 9, name: "Fashion Festival", description: "A stylish event showcasing the latest trends in the fashion industry.", amount: 8200, location: "Milan, Italy", time: "2:00 PM - 10:00 PM", date: "2026-02-10", image: e153 },
        { id: 10, name: "Lantern Festival", description: "A mesmerizing festival with lantern displays and cultural performances.", amount: 5800, location: "Beijing, China", time: "5:00 PM - 11:00 PM", date: "2026-03-05", image: e154 },
        { id: 11, name: "Dance Festival", description: "A showcase of global dance styles, from classical to contemporary.", amount: 6300, location: "Rio de Janeiro, Brazil", time: "7:00 PM - 1:00 AM", date: "2026-04-15", image: e155 },
        { id: 12, name: "Flower Festival", description: "A breathtaking floral extravaganza celebrating nature’s beauty.", amount: 5500, location: "Amsterdam, Netherlands", time: "10:00 AM - 6:00 PM", date: "2026-05-20", image: e156 }
    ];

  return (
    <div className='ticket-container'>
    {
      festivals.map((festival) => [
        <div key={festival.id} className='card'>
          <img src={festival.image} alt={festival.name} />
          <h2>{festival.name}</h2>
          <h3>{festival.location}</h3>
          <h3>₹{festival.amount}</h3>
          <button>View Details</button>
          <button>Add to Cart</button>
        </div>
      ])
    }
  </div>
  )
}
