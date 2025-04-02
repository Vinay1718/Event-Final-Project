import React from 'react'
import './Concert.css'

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

export default function Concert() {

    const concerts = [
        { id: 1, name: "Rock Music Concert", description: "A night of electrifying performances by top rock bands.", amount: 9500, location: "Los Angeles, USA", time: "7:00 PM - 11:00 PM", date: "2025-06-18", image: e169 },
        { id: 2, name: "Pop Music Festival", description: "Experience live performances from the biggest pop artists.", amount: 8800, location: "London, UK", time: "6:30 PM - 10:30 PM", date: "2025-07-12", image: e170 },
        { id: 3, name: "Hip-Hop & Rap Concert", description: "A night of beats, rhymes, and high-energy performances.", amount: 8700, location: "New York, USA", time: "8:00 PM - 12:00 AM", date: "2025-08-05", image: e171 },
        { id: 4, name: "EDM & DJ Festival", description: "Dance to electrifying beats with world-renowned DJs.", amount: 9900, location: "Ibiza, Spain", time: "9:00 PM - 3:00 AM", date: "2025-09-20", image: e172 },
        { id: 5, name: "Jazz & Blues Concert", description: "An evening of soulful music and smooth performances.", amount: 7600, location: "New Orleans, USA", time: "6:00 PM - 10:00 PM", date: "2025-10-14", image: e173 },
        { id: 6, name: "Classical Music Orchestra", description: "A grand orchestral performance featuring renowned musicians.", amount: 8000, location: "Vienna, Austria", time: "5:00 PM - 9:00 PM", date: "2025-11-07", image: e174 },
        { id: 7, name: "Country Music Night", description: "A night of country music hits and live performances.", amount: 7200, location: "Nashville, USA", time: "7:30 PM - 11:30 PM", date: "2025-12-02", image: e175 },
        { id: 8, name: "Indie & Alternative Concert", description: "A showcase of the best independent and alternative bands.", amount: 7900, location: "Berlin, Germany", time: "7:00 PM - 11:00 PM", date: "2026-01-15", image: e176 },
        { id: 9, name: "Bollywood Music Night", description: "A live concert featuring Bollywood's biggest music stars.", amount: 8600, location: "Mumbai, India", time: "8:00 PM - 12:00 AM", date: "2026-02-10", image: e177 },
        { id: 10, name: "Reggae & Caribbean Beats", description: "Enjoy the best reggae music with a tropical vibe.", amount: 7300, location: "Kingston, Jamaica", time: "6:00 PM - 11:00 PM", date: "2026-03-05", image: e178 },
        { id: 11, name: "Metal & Heavy Rock Fest", description: "An adrenaline-filled concert with top metal bands.", amount: 8900, location: "Stockholm, Sweden", time: "7:00 PM - 12:30 AM", date: "2026-04-22", image: e179 },
        { id: 12, name: "K-Pop Extravaganza", description: "A high-energy concert featuring the biggest K-pop idols.", amount: 9100, location: "Seoul, South Korea", time: "5:00 PM - 10:00 PM", date: "2026-05-18", image: e180 }
    ];

  return (
    <div className='ticket-container'>
    {
      concerts.map((concert) => [
        <div key={concert.id} className='card'>
          <img src={concert.image} alt={concert.name} />
          <h2>{concert.name}</h2>
          <h3>{concert.location}</h3>
          <h3>₹{concert.amount}</h3>
          <button>View Details</button>
          <button>Add to Cart</button>
        </div>
      ])
    }
  </div>
  )
}
