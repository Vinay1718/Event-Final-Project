import React from 'react'
import './Booksigning.css'

import e217 from '../images/e217.webp';
import e218 from '../images/e218.webp';
import e219 from '../images/e219.webp';
import e220 from '../images/e220.webp';
import e221 from '../images/e221.webp';
import e222 from '../images/e222.webp';
import e223 from '../images/e223.webp';
import e224 from '../images/e224.webp';
import e225 from '../images/e225.webp';
import e226 from '../images/e226.webp';
import e227 from '../images/e227.webp';
import e228 from '../images/e228.webp';

export default function Booksigning() {


    const booksignings = [
        { id: 1, name: "Bestseller Meet & Greet", description: "Meet the author of a bestselling novel and get your copy signed.", amount: 3000, location: "New York, USA", time: "2:00 PM - 5:00 PM", date: "2025-06-20", image: e217 },
        { id: 2, name: "Fantasy Fiction Signing", description: "A book signing event featuring top fantasy authors.", amount: 3200, location: "London, UK", time: "3:00 PM - 6:00 PM", date: "2025-07-10", image: e218 },
        { id: 3, name: "Autobiography Release & Signing", description: "Meet an inspiring public figure launching their autobiography.", amount: 3500, location: "Los Angeles, USA", time: "1:00 PM - 4:00 PM", date: "2025-08-15", image: e219 },
        { id: 4, name: "Science & Technology Book Signing", description: "Engage with science authors and thought leaders.", amount: 2800, location: "San Francisco, USA", time: "12:00 PM - 3:00 PM", date: "2025-09-05", image: e220 },
        { id: 5, name: "Children’s Book Signing & Storytelling", description: "An event for kids featuring popular children's book authors.", amount: 2500, location: "Sydney, Australia", time: "10:00 AM - 1:00 PM", date: "2025-10-12", image: e221 },
        { id: 6, name: "Thriller & Mystery Book Launch", description: "An exclusive signing event with leading thriller writers.", amount: 4000, location: "Berlin, Germany", time: "4:00 PM - 7:00 PM", date: "2025-11-08", image: e222 },
        { id: 7, name: "Romance Novel Signing", description: "Meet bestselling romance novelists and get your book signed.", amount: 3800, location: "Paris, France", time: "5:00 PM - 8:00 PM", date: "2025-12-01", image: e223 },
        { id: 8, name: "Self-Help & Motivational Signing", description: "An event with renowned self-help authors sharing their insights.", amount: 3300, location: "Toronto, Canada", time: "1:00 PM - 4:00 PM", date: "2026-01-18", image: e224 },
        { id: 9, name: "Graphic Novel & Comics Signing", description: "Comic book and graphic novel enthusiasts meet their favorite creators.", amount: 4200, location: "Tokyo, Japan", time: "11:00 AM - 2:00 PM", date: "2026-02-22", image: e225 },
        { id: 10, name: "Poetry Collection Signing", description: "An intimate event where poets sign and read their latest works.", amount: 2700, location: "Amsterdam, Netherlands", time: "6:00 PM - 9:00 PM", date: "2026-03-15", image: e226 },
        { id: 11, name: "History & Biography Book Signing", description: "A book signing event for history lovers and biography enthusiasts.", amount: 3100, location: "Washington D.C., USA", time: "12:00 PM - 3:30 PM", date: "2026-04-10", image: e227 },
        { id: 12, name: "Cookbook Signing & Tasting Event", description: "Meet celebrity chefs, get your cookbook signed, and enjoy live tastings.", amount: 4500, location: "Dubai, UAE", time: "2:00 PM - 6:00 PM", date: "2026-05-05", image: e228 }
    ];

  return (
    <div className='ticket-container'>
    {
      booksignings.map((booksigning) => [
        <div key={booksigning.id} className='card'>
          <img src={booksigning.image} alt={booksigning.name} />
          <h2>{booksigning.name}</h2>
          <h3>{booksigning.location}</h3>
          <h3>₹{booksigning.amount}</h3>
          <button>View Details</button>
          <button>Add to Cart</button>
        </div>
      ])
    }
  </div>
  )
}
