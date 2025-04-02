import React from 'react'
import './Film.css'

import e229 from '../images/e229.webp';
import e230 from '../images/e230.webp';
import e231 from '../images/e231.webp';
import e232 from '../images/e232.webp';
import e233 from '../images/e233.webp';
import e234 from '../images/e234.webp';
import e235 from '../images/e235.webp';
import e236 from '../images/e236.webp';
import e237 from '../images/e237.webp';
import e238 from '../images/e238.webp';
import e239 from '../images/e239.webp';
import e240 from '../images/e240.webp';

export default function Film() {


    const films = [
        { id: 1, name: "International Film Festival", description: "A showcase of award-winning films from around the world.", amount: 6000, location: "Cannes, France", time: "6:00 PM - 11:00 PM", date: "2025-06-10", image: e229 },
        { id: 2, name: "Indie Film Screening", description: "An event highlighting independent filmmakers and unique storytelling.", amount: 4500, location: "Los Angeles, USA", time: "5:30 PM - 10:00 PM", date: "2025-07-20", image: e230 },
        { id: 3, name: "Horror Movie Marathon", description: "A thrilling experience featuring classic and new horror films.", amount: 4000, location: "Berlin, Germany", time: "8:00 PM - 2:00 AM", date: "2025-08-15", image: e231 },
        { id: 4, name: "Animated Film Festival", description: "A celebration of animated films and their creative artistry.", amount: 4800, location: "Tokyo, Japan", time: "3:00 PM - 9:00 PM", date: "2025-09-05", image: e232 },
        { id: 5, name: "Documentary Film Expo", description: "An event featuring impactful documentaries and discussions.", amount: 5000, location: "New York, USA", time: "4:00 PM - 9:30 PM", date: "2025-10-12", image: e233 },
        { id: 6, name: "Sci-Fi & Fantasy Film Fest", description: "A gathering of sci-fi and fantasy film lovers with special screenings.", amount: 5300, location: "London, UK", time: "6:00 PM - 12:00 AM", date: "2025-11-18", image: e234 },
        { id: 7, name: "Classic Cinema Night", description: "A nostalgic screening of legendary classic films.", amount: 3500, location: "Paris, France", time: "7:00 PM - 11:00 PM", date: "2025-12-01", image: e235 },
        { id: 8, name: "Short Film Showcase", description: "An event dedicated to emerging short film directors and their work.", amount: 4200, location: "Toronto, Canada", time: "5:00 PM - 10:00 PM", date: "2026-01-14", image: e236 },
        { id: 9, name: "Bollywood Film Night", description: "A special screening of the latest and classic Bollywood films.", amount: 4700, location: "Mumbai, India", time: "6:30 PM - 11:30 PM", date: "2026-02-08", image: e237 },
        { id: 10, name: "LGBTQ+ Film Festival", description: "A festival showcasing films that explore LGBTQ+ stories and themes.", amount: 4900, location: "Amsterdam, Netherlands", time: "4:30 PM - 9:00 PM", date: "2026-03-22", image: e238 },
        { id: 11, name: "Film Industry Networking & Screening", description: "A chance for aspiring filmmakers to connect with industry professionals.", amount: 5500, location: "Los Angeles, USA", time: "3:00 PM - 8:00 PM", date: "2026-04-18", image: e239 },
        { id: 12, name: "Outdoor Drive-In Movie Night", description: "A retro-themed drive-in movie experience under the stars.", amount: 3000, location: "Sydney, Australia", time: "7:30 PM - 11:00 PM", date: "2026-05-05", image: e240 }
    ];

  return (
    <div className='ticket-container'>
    {
      films.map((film) => [
        <div key={film.id} className='card'>
          <img src={film.image} alt={film.name} />
          <h2>{film.name}</h2>
          <h3>{film.location}</h3>
          <h3>₹{film.amount}</h3>
          <button>View Details</button>
          <button>Add to Cart</button>
        </div>
      ])
    }
  </div>
  )
}
