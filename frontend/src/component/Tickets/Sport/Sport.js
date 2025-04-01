import React from 'react'
import './Sport.css'

import e61 from '../images/e61.webp';
import e62 from '../images/e62.webp';
import e63 from '../images/e63.webp';
import e64 from '../images/e64.webp';
import e65 from '../images/e65.webp';
import e66 from '../images/e66.webp';
import e67 from '../images/e67.webp';
import e68 from '../images/e68.webp';
import e69 from '../images/e69.webp';
import e70 from '../images/e70.webp';
import e71 from '../images/e71.webp';
import e72 from '../images/e72.webp';

export default function Sport() {
  
  const sports = [
    {id: 1,name: "Soccer World Cup",description: "The biggest international football tournament held every four years.",location: "Various countries",time: "Varies",date: "2026-06-10",image: e61},
    {id: 2,name: "NBA Finals",description: "The championship series of the National Basketball Association.",location: "USA",time: "8:00 PM - 11:00 PM",date: "2025-06-15",image: e62},
    {id: 3,name: "Wimbledon Tennis Championship",description: "The oldest and most prestigious tennis tournament, played on grass courts.",location: "London, UK",time: "10:00 AM - 8:00 PM",date: "2025-07-01",image: e63},
    {id: 4,name: "Olympic Games",description: "A global multi-sport event held every four years featuring various disciplines.",location: "Paris, France",time: "Varies",date: "2024-07-26",image: e64},
    {id: 5,name: "Tour de France",description: "A prestigious annual cycling race covering thousands of kilometers.",location: "France",time: "All day",date: "2025-07-10",image: e65},
    {id: 6,name: "Super Bowl",description: "The championship game of the National Football League (NFL) in the USA.",location: "USA",time: "6:30 PM - 10:00 PM",date: "2026-02-08",image: e66},
    {id: 7,name: "ICC Cricket World Cup",description: "The premier international championship of men's One Day International (ODI) cricket.",location: "India",time: "9:00 AM - 6:00 PM",date: "2027-10-15",image: e67 },
    {id: 8,name: "Ironman Triathlon",description: "A long-distance triathlon race consisting of swimming, cycling, and running.",location: "Hawaii, USA",time: "6:00 AM - 10:00 PM",date: "2025-10-10",image: e68},
    {id: 9,name: "US Open Golf Championship",description: "A major golf tournament played annually in the United States.",location: "USA",time: "7:00 AM - 6:00 PM",date: "2025-06-20",image: e69},
    {id: 10,name: "MotoGP Grand Prix",description: "The premier class of motorcycle road racing events held on circuits worldwide.",location: "Various countries",time: "Varies",date: "2025-05-15",image: e70},
    {id: 11,name: "WWE WrestleMania",description: "A professional wrestling event produced annually by WWE.",location: "USA",time: "7:00 PM - 11:00 PM",date: "2026-04-05",image: e71},
    {id: 12,name: "X Games Extreme Sports",description: "An extreme sports event featuring skateboarding, BMX, and more.",location: "USA",time: "10:00 AM - 8:00 PM",date: "2025-08-20",image: e72}
  
  ];



  return (
    <div className='ticket-container'>
    {
      sports.map((sport) => [
        <div key={sport.id} className='card'>
          <img src={sport.image} alt={sport.name} />
          <h2>{sport.name}</h2>
          <h3>{sport.location}</h3>
          <h3>₹{sport.amount}</h3>
          <button>View Details</button>
          <button>Add to Cart</button>
        </div>
      ])
    }
  </div>
  )
}
