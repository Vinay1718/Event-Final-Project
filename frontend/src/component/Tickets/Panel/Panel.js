import React from 'react'
import './Panel.css'

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

export default function Panel() {
    const panels = [
        { id: 1, name: "AI & Future Tech Panel", description: "Experts discuss the impact of AI on industries and future innovations.", amount: 4000, location: "San Francisco, USA", time: "11:00 AM - 2:00 PM", date: "2025-06-25", image: e97 },
        { id: 2, name: "Sustainability & Climate Change Panel", description: "A discussion on environmental policies, renewable energy, and sustainability efforts.", amount: 3500, location: "Berlin, Germany", time: "10:00 AM - 1:30 PM", date: "2025-07-15", image: e98 },
        { id: 3, name: "Women in Leadership Panel", description: "Successful women leaders share their experiences and strategies for success.", amount: 4500, location: "New York, USA", time: "9:30 AM - 12:30 PM", date: "2025-08-05", image: e99 },
        { id: 4, name: "Cybersecurity & Privacy Panel", description: "Industry leaders discuss threats, cybersecurity strategies, and data protection.", amount: 5000, location: "London, UK", time: "1:00 PM - 4:00 PM", date: "2025-09-10", image: e100 },
        { id: 5, name: "Startup & Investment Panel", description: "Entrepreneurs and investors discuss funding, scaling, and startup trends.", amount: 4800, location: "Singapore", time: "2:00 PM - 5:00 PM", date: "2025-10-20", image: e101 },
        { id: 6, name: "Healthcare & Biotech Panel", description: "Medical experts discuss breakthroughs in healthcare, biotech, and pharmaceuticals.", amount: 5200, location: "Boston, USA", time: "10:30 AM - 2:30 PM", date: "2025-11-12", image: e102 },
        { id: 7, name: "Future of Work & Remote Culture Panel", description: "HR and business leaders explore the evolution of remote work and company culture.", amount: 3900, location: "Toronto, Canada", time: "12:00 PM - 3:00 PM", date: "2025-12-01", image: e103 },
        { id: 8, name: "Blockchain & Web3 Panel", description: "A discussion on decentralized finance, NFTs, and the future of blockchain technology.", amount: 5500, location: "Dubai, UAE", time: "1:30 PM - 4:30 PM", date: "2026-01-18", image: e104 },
        { id: 9, name: "Entertainment & Media Panel", description: "Leaders in film, music, and media discuss industry trends and digital content.", amount: 4200, location: "Los Angeles, USA", time: "3:00 PM - 6:00 PM", date: "2026-02-07", image: e105 },
        { id: 10, name: "Finance & Global Economy Panel", description: "Experts analyze economic trends, investments, and the financial markets.", amount: 6000, location: "Hong Kong", time: "11:00 AM - 3:00 PM", date: "2026-03-22", image: e106 },
        { id: 11, name: "Education & EdTech Panel", description: "A discussion on the future of education, e-learning, and edtech innovations.", amount: 3400, location: "Amsterdam, Netherlands", time: "10:00 AM - 1:00 PM", date: "2026-04-15", image: e107 },
        { id: 12, name: "Legal & Ethics Panel", description: "Experts discuss legal challenges, ethics, and regulatory changes in various industries.", amount: 4600, location: "Washington D.C., USA", time: "9:00 AM - 12:30 PM", date: "2026-05-10", image: e108 }
];




  return (
    <div className='ticket-container'>
    {
      panels.map((panel) => [
        <div key={panel.id} className='card'>
          <img src={panel.image} alt={panel.name} />
          <h2>{panel.name}</h2>
          <h3>{panel.location}</h3>
          <h3>₹{panel.amount}</h3>
          <button>View Details</button>
          <button>Add to Cart</button>
        </div>
      ])
    }
  </div>
  )
}
