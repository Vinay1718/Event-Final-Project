import React from 'react'
import "./Tickets.css"


export default function Tickets() {

  const tickets = [
    { id: 1, name: "Conference", icon: "fa-solid fa-microphone", description: "Professional gathering for industry experts to share knowledge and network.", },
    { id: 2, name: "Workshop", icon: "fa-solid fa-chalkboard-teacher", description: "Interactive sessions focused on skill-building and hands-on learning." },
    { id: 3, name: "Seminar", icon: "fa-solid fa-users", description: "Educational meeting where experts present on a specific topic." },
    { id: 4, name: "Webinar", icon: "fa-solid fa-laptop", description: "Online seminar allowing participants to engage remotely." },
    { id: 5, name: "Networking Event", icon: "fa-solid fa-handshake", description: "Social gathering for professionals to build business relationships." },
    { id: 6, name: "Trade Show", icon: "fa-solid fa-store", description: "Exhibition where businesses showcase and promote products or services." },
    { id: 7, name: "Concert", icon: "fa-solid fa-music", description: "Live music performance featuring artists and bands." },
    { id: 8, name: "Sports Event", icon: "fa-solid fa-football-ball", description: "Competitive sporting matches for entertainment and team spirit." },
    { id: 9, name: "Festival", icon: "fa-solid fa-theater-masks", description: "Celebration featuring music, food, art, and cultural performances." },
    { id: 10, name: "Exhibition", icon: "fa-solid fa-paint-brush", description: "Public display of art, photography, or technological innovations." },
    { id: 11, name: "Hackathon", icon: "fa-solid fa-code", description: "Coding competition where developers create innovative solutions." },
    { id: 12, name: "Fundraiser", icon: "fa-solid fa-hand-holding-heart", description: "Charity event to raise funds for social or environmental causes." },
    { id: 13, name: "Comedy Show", icon: "fa-solid fa-laugh", description: "Live performance featuring stand-up comedians and humorous acts." },
    { id: 14, name: "Product Launch", icon: "fa-solid fa-rocket", description: "Event introducing a new product to the market with demonstrations." },
    { id: 15, name: "Career Fair", icon: "fa-solid fa-briefcase", description: "Event where companies and job seekers connect for employment opportunities." },
    { id: 16, name: "Panel Discussion", icon: "fa-solid fa-comments", description: "Multiple speakers discussing and debating a specific topic." },
    { id: 17, name: "Book Signing", icon: "fa-solid fa-book", description: "Event where authors meet fans and sign copies of their books." },
    { id: 18, name: "Charity Gala", icon: "fa-solid fa-glass-cheers", description: "Formal gathering with entertainment to support a cause or organization." },
    { id: 19, name: "Film Screening", icon: "fa-solid fa-film", description: "Exclusive showing of a movie or documentary for an audience." },
    { id: 20, name: "Gaming Tournament", icon: "fa-solid fa-gamepad", description: "Competitive esports event where gamers battle for prizes and recognition." }
];

  return (
    <div className='ticket'>
      {
        tickets.map((ticket)=>[
          <div key={ticket.id} className='event'>
            <img src={ticket.icon}></img>
            <h2>{ticket.name}</h2>
            <p>{ticket.description}</p>
            </div>
        ])
      }
      </div>
  )
}
