import React from 'react'
import './Seminar.css'

import e73 from '../images/e73.webp';
import e74 from '../images/e74.webp';
import e75 from '../images/e75.webp';
import e76 from '../images/e76.webp';
import e77 from '../images/e77.webp';
import e78 from '../images/e78.webp';
import e79 from '../images/e79.webp';
import e80 from '../images/e80.webp';
import e81 from '../images/e81.webp';
import e82 from '../images/e82.webp';
import e83 from '../images/e83.webp';
import e84 from '../images/e84.webp';

export default function Seminar() {
  const seminars = [
    {id: 1,name: "Business Growth & Innovation Seminar",description: "A deep dive into strategies for scaling businesses and fostering innovation.",amount: 3000,location: "New York, USA",time: "10:00 AM - 4:00 PM",date: "2025-06-12",image: e73 },
    {id: 2,name: "Artificial Intelligence & Future Tech Seminar",description: "Exploring the impact of AI and emerging technologies on industries.",amount: 3500,location: "San Francisco, USA",time: "9:00 AM - 5:00 PM",date: "2025-07-08",image: e74},
    {id: 3,name: "Leadership & Personal Development Seminar",description: "Techniques and strategies to enhance leadership skills and self-growth.",amount: 2800,location: "London, UK",time: "10:00 AM - 3:30 PM",date: "2025-07-22",image: e75},
    {id: 4,name: "Health & Wellness Seminar",description: "A seminar focusing on mental health, nutrition, and overall well-being.",amount: 2500,location: "Toronto, Canada",time: "11:00 AM - 4:00 PM",date: "2025-08-14",image:  e76} ,
    {id: 5,name: "Digital Marketing & Branding Seminar",description: "Understanding branding, content strategies, and online marketing trends.",amount: 3200,location: "Berlin, Germany",time: "9:30 AM - 3:30 PM",date: "2025-09-05",image: e77},
    {id: 6,name: "Finance & Investment Strategies Seminar",description: "Expert guidance on wealth management, stock market investments, and savings.",amount: 4000,location: "Dubai, UAE",time: "10:00 AM - 5:00 PM",date: "2025-09-30",image: e78},
    {id: 7,name: "Entrepreneurship & Startup Seminar",description: "Insights from successful entrepreneurs on starting and growing a business.",amount: 3700,location: "Sydney, Australia",time: "9:00 AM - 4:00 PM",date: "2025-10-18",image: e79},
    {id: 8,name: "Cybersecurity & Data Protection Seminar",description: "A session on cybersecurity risks, best practices, and data privacy laws.",amount: 2900,location: "Singapore",time: "10:00 AM - 3:00 PM",date: "2025-11-10",image: e80},
    {id: 9,name: "Real Estate & Property Investment Seminar",description: "Learn about real estate trends, buying properties, and making smart investments.",amount: 4500,location: "Los Angeles, USA",time: "9:30 AM - 4:30 PM",date: "2025-11-25",image: e81},
    {id: 10,name: "Education & Career Growth Seminar",description: "Guidance on higher education, career choices, and skill development.",amount: 2700,location: "Amsterdam, Netherlands",time: "10:00 AM - 3:30 PM",date: "2025-12-05",image: e82},
    {id: 11,name: "Environmental Sustainability & Green Tech Seminar",description: "Discussions on sustainability, renewable energy, and green technologies.",amount: 3100,location: "Stockholm, Sweden",time: "9:00 AM - 4:00 PM",date: "2026-01-15",image: e83},
    {id: 12,name: "Legal & Compliance Seminar",description: "Understanding corporate laws, compliance policies, and legal frameworks.",amount: 3800,location: "Paris, France",time: "10:00 AM - 5:00 PM",date: "2026-02-20",image: e84}
];


    
  return (
    <div className='ticket-container'>
    {
      seminars.map((seminar) => [
        <div key={seminar.id} className='card'>
          <img src={seminar.image} alt={seminar.name} />
          <h2>{seminar.name}</h2>
          <h3>{seminar.location}</h3>
          <h3>₹{seminar.amount}</h3>
          <button>View Details</button>
          <button>Add to Cart</button>
        </div>
      ])
    }
  </div>
  )
}
