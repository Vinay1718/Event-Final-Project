import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from './Authentication/Signup/Signup';
import Login from './Authentication/Login/Login';
import Sidebar from './component/sidebar/Sidebar';
import Dashboard from './component/Dashboard/Dashboard';
import Cart from './component/Cart/Cart';
import Tickets from './component/Tickets/Tickets';
import Settings from './component/Settings/Settings';
import Custome from './component/Custome/Custome';
import Revenue from './component/Revenue/Revenue';
import Create from './component/Create/Create';

import Conference from './component/Tickets/Conference/Conference';
import Fundraiser from './component/Tickets/Fundraiser/Fundraiser';
import Webinar from './component/Tickets/Webinar/Webinar';
import Workshop from './component/Tickets/Workshop/Workshop';
import Trade from './component/Tickets/Trade/Trade';
import Sport from './component/Tickets/Sport/Sport';
import Seminar from './component/Tickets/Seminar/Seminar';
import Product from './component/Tickets/Product/Product';
import Panel from './component/Tickets/Panel/Panel';
import Networking from './component/Tickets/Networking/Networking';
import Hackathon from './component/Tickets/Hackathon/Hackathon';
import Gaming from './component/Tickets/Gaming/Gaming';
import Festival from './component/Tickets/Festival/Festival';
import Exhibition from './component/Tickets/Exhibition/Exhibition';
import Concert from './component/Tickets/Concert/Concert';
import Comedy from './component/Tickets/Comedy/Comedy';
import Charity from './component/Tickets/Charity/Charity';
import Booksigning from './component/Tickets/Booksigning/Booksigning';
import Film from './component/Tickets/Film/Film';
import Career from './component/Tickets/Career/Career';

import h1 from "./component/asset/h1.avif";
import h2 from "./component/asset/h2.jpg";
import h3 from "./component/asset/h3.avif";
import h4 from "./component/asset/h4.jpg";
import h5 from "./component/asset/h5.avif";
import h6 from "./component/asset/h6.avif";
import h7 from "./component/asset/h7.jpeg";
import h8 from "./component/asset/h8.jpg";
import h9 from "./component/asset/h9.jpg";
import h10 from "./component/asset/h10.png";
import h32 from "./component/asset/h32.png";
import h33 from "./component/asset/h33.png";
import h34 from "./component/asset/h34.png";
import h35 from "./component/asset/h35.png";
import h36 from "./component/asset/h36.png";
import h37 from "./component/asset/h37.png";
import h38 from "./component/asset/h38.png";
import h39 from "./component/asset/h39.png";
import h40 from "./component/asset/h40.png";
import h41 from "./component/asset/h41.png";
import h42 from "./component/asset/h42.png";
import h43 from "./component/asset/h43.png";
import h44 from "./component/asset/h44.png";
import h45 from "./component/asset/h45.png";
import h46 from "./component/asset/h46.png";
import h47 from "./component/asset/h47.png";
import h48 from "./component/asset/h48.png";
import h49 from "./component/asset/h49.png";
import h50 from "./component/asset/h50.png";
import h11 from "./component/asset/h11.jpg";
import h12 from "./component/asset/h12.png";
import h13 from "./component/asset/h13.jpg";
import h14 from "./component/asset/h14.avif";
import h15 from "./component/asset/h15.avif";
import h16 from "./component/asset/h16.jpg";
import h17 from "./component/asset/h17.webp";
import h18 from "./component/asset/h18.avif";
import h19 from "./component/asset/h19.jpg";
import h20 from "./component/asset/h20.webp";
import h21 from "./component/asset/h21.jpeg";
import h22 from "./component/asset/h22.jpeg";
import h23 from "./component/asset/h23.webp";
import h24 from "./component/asset/h24.webp";
import h25 from "./component/asset/h25.webp";
import h26 from "./component/asset/h26.webp";
import h27 from "./component/asset/h27.webp";
import h28 from "./component/asset/h28.webp";        
import h29 from "./component/asset/h29.webp";
import h30 from "./component/asset/h30.webp";

function App() {
  const [cart, setCart] = useState([]);
  
  const [tickets, setTickets] = useState([
    { id: 1, name: "Dancing Event", place: "Delhi", price: 500, image: h1, description: "A night of energetic dance performances featuring top artists and DJs." },
        { id: 2, name: "Music Concert", place: "Mumbai", price: 1200, image: h2, description: "Experience the magic of live music with famous singers and bands." },
        { id: 3, name: "Comedy Show", place: "Bangalore", price: 800, image: h3, description: "Laugh out loud with the best stand-up comedians in the country." },
        { id: 4, name: "Art Exhibition", place: "Chennai", price: 600, image: h4, description: "Discover breathtaking artworks from renowned and emerging artists." },
        { id: 5, name: "Food Festival", place: "Kolkata", price: 450, image: h5, description: "A paradise for food lovers, featuring a variety of delicious cuisines." },
        { id: 6, name: "Rock Concert", place: "Hyderabad", price: 1500, image: h6, description: "Get ready to rock with electrifying performances by top rock bands." },
        { id: 7, name: "Magic Show", place: "Pune", price: 700, image: h7, description: "Witness mind-blowing illusions and magical acts by famous magicians." },
        { id: 8, name: "Film Festival", place: "Jaipur", price: 500, image: h8, description: "Enjoy a selection of award-winning films from around the world." },
        { id: 9, name: "Poetry Slam", place: "Ahmedabad", price: 350, image: h9, description: "An evening of powerful poetry and spoken word performances." },
        { id: 10, name: "Fashion Show", place: "Lucknow", price: 2000, image: h10, description: "A glamorous showcase of the latest trends in fashion and couture." },
        { id: 11, name: "Gaming Tournament", place: "Chandigarh", price: 900, image: h11, description: "Compete with the best gamers in an adrenaline-packed competition." },
        { id: 12, name: "Tech Expo", place: "Indore", price: 1100, image: h12, description: "Explore the latest technological innovations and futuristic gadgets." },
        { id: 13, name: "Stand-up Comedy", place: "Goa", price: 750, image: h13, description: "A rib-tickling evening with the best stand-up comedians." },
        { id: 14, name: "Jazz Night", place: "Nagpur", price: 650, image: h14, description: "Immerse yourself in the smooth and soulful tunes of jazz." },
        { id: 15, name: "Cricket Match", place: "Bhopal", price: 300, image: h15, description: "Watch your favorite teams battle it out on the cricket field." },
        { id: 16, name: "Football Match", place: "Visakhapatnam", price: 400, image: h16, description: "Experience the thrill of live football action with top teams." },
        { id: 17, name: "Bollywood Night", place: "Surat", price: 1300, image: h17, description: "A dazzling night filled with Bollywood music, dance, and glamour." },
        { id: 18, name: "EDM Festival", place: "Patna", price: 1700, image: h18, description: "Dance to electrifying beats by world-class DJs and EDM artists." },
        { id: 19, name: "Book Fair", place: "Thiruvananthapuram", price: 200, image: h19, description: "A haven for book lovers with a wide range of books and authors." },
        { id: 20, name: "Photography Workshop", place: "Coimbatore", price: 500, image: h20, description: "Learn photography tips and tricks from professional photographers." },
        { id: 21, name: "Street Play", place: "Mysore", price: 250, image: h21, description: "Enjoy thought-provoking performances by talented street artists." },
        { id: 22, name: "Carnival", place: "Ranchi", price: 700, image: h30, description: "A fun-filled event with games, rides, and cultural performances." },
        { id: 23, name: "Auto Expo", place: "Raipur", price: 1400, image: h22, description: "Discover the latest cars, bikes, and automobile technology." },
        { id: 24, name: "Cycling Marathon", place: "Dehradun", price: 100, image: h23, description: "Join a thrilling cycling adventure through scenic routes." },
        { id: 25, name: "Science Fair", place: "Shimla", price: 600, image: h24, description: "Showcasing incredible science experiments and innovations." },
        { id: 26, name: "Startup Summit", place: "Guwahati", price: 800, image: h25, description: "Network with entrepreneurs and investors in the startup world." },
        { id: 27, name: "Social Awareness Camp", place: "Jodhpur", price: 50, image: h26, description: "Engage in meaningful discussions and initiatives for social change." },
        { id: 28, name: "Chess Championship", place: "Udaipur", price: 300, image: h27, description: "Battle it out on the chessboard with top-ranking players." },
        { id: 29, name: "Theater Play", place: "Varanasi", price: 750, image: h28, description: "A captivating live theater performance by talented actors." },
        { id: 30, name: "Spiritual Retreat", place: "Haridwar", price: 400, image: h29, description: "A rejuvenating retreat to relax and connect with your inner self." },
        { id: 31, name: "Horse Racing", place: "Pune", price: 2500, image: h30, description: "Experience the thrill of speed and elegance as top-tier horses compete for glory on Pune’s prestigious racetrack." },
        { id: 32, name: "Wine Tasting", place: "Nasik", price: 1800, image: h32, description: "Indulge in the finest wines of Nasik, India's wine capital, with guided tastings and food pairings in a luxurious vineyard setting." },
        { id: 33, name: "Ballet Show", place: "Chennai", price: 1300, image: h33, description: "Witness a mesmerizing ballet performance by world-class dancers, bringing classical and contemporary dance to life on stage." },
        { id: 34, name: "Astronomy Night", place: "Bangalore", price: 900, image: h34, description: "Gaze at the wonders of the cosmos with high-powered telescopes and expert astronomers guiding you through celestial marvels." },
        { id: 35, name: "Drone Racing", place: "Delhi", price: 600, image: h35, description: "Watch high-speed drones zip through challenging obstacle courses as pilots showcase their precision and skill in an electrifying competition." },
        { id: 36, name: "Fishing Tournament", place: "Kerala", price: 450, image: h36, description: "Join a thrilling fishing challenge in Kerala’s serene backwaters, where anglers compete to reel in the biggest catch of the day!" },
        { id: 37, name: "Adventure Trekking", place: "Manali", price: 1600, image: h37, description: "Embark on an exhilarating trek through Manali’s breathtaking landscapes, crossing lush forests, rivers, and snow-capped mountains." },
        { id: 38, name: "Snowboarding Camp", place: "Gulmarg", price: 2500, image: h38, description: "Glide through fresh powder and perfect your snowboarding skills with expert instructors in the winter wonderland of Gulmarg." },
        { id: 39, name: "Kite Festival", place: "Ahmedabad", price: 200, image: h39, description: "Watch the sky come alive with colorful kites from around the world as participants showcase incredible kite-flying artistry and techniques." },
        { id: 40, name: "Puppet Show", place: "Rajasthan", price: 350, image: h40, description: "Immerse yourself in Rajasthan’s vibrant culture with an enchanting puppet show, narrating folk tales with traditional music and dance." },
        { id: 41, name: "International Film Awards", place: "Mumbai", price: 5000, image: h41, description: "Join the glamour and excitement of cinema’s biggest night, featuring red carpet moments, celebrity appearances, and award-winning films." },
        { id: 42, name: "Marathon", place: "Hyderabad", price: 150, image: h42, description: "Push your limits and run through Hyderabad’s scenic routes, cheered on by an energetic crowd in this thrilling endurance race." },
        { id: 43, name: "Tennis Open", place: "Chennai", price: 2200, image: h43, description: "Catch the action as top-ranked tennis players battle it out in Chennai’s premier tournament, showcasing power, precision, and agility." },
        { id: 44, name: "Badminton Tournament", place: "Lucknow", price: 800, image: h44, description: "Watch skilled shuttlers compete in an intense showdown, featuring fast rallies and breathtaking smashes at Lucknow’s biggest badminton event." },
        { id: 45, name: "Rowing Championship", place: "Kolkata", price: 950, image: h45, description: "Feel the adrenaline as rowers power through the waters in a thrilling test of strength, endurance, and teamwork at this premier championship." },
        { id: 46, name: "Food Tasting Event", place: "Pondicherry", price: 1250, image: h46, description: "Savor exquisite flavors and explore a world of gourmet delights with renowned chefs presenting unique culinary masterpieces." },
        { id: 47, name: "Skydiving Experience", place: "Mysore", price: 3500, image: h47, description: "Feel the ultimate rush of freefall as you jump from thousands of feet above, witnessing breathtaking aerial views of Mysore." },
        { id: 48, name: "Hot Air Balloon Ride", place: "Jaipur", price: 2800, image: h48, description: "Soar above Jaipur’s majestic forts and palaces in a magical hot air balloon ride, offering panoramic views of the Pink City." },
        { id: 49, name: "Ice Skating Show", place: "Shimla", price: 1300, image: h49, description: "Experience a dazzling ice-skating spectacle featuring world-class performers executing gravity-defying spins and artistic routines." },
        { id: 50, name: "Zumba Festival", place: "Pune", price: 450, image: h50, description: "Dance, sweat, and have fun at Pune’s biggest Zumba festival, where fitness meets rhythm in an electrifying atmosphere." }
  ]);

  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Sidebar />
          <div className="content-container">
            <Routes>
              <Route path='/' element={<Dashboard tickets={tickets} cart={cart} setCart={setCart} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/custome' element={<Custome />} />
              <Route path='/revenue' element={<Revenue />} />
              <Route path='/create' element={<Create tickets={tickets} setTickets={setTickets} />} />
              <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
              <Route path='/tickets' element={<Tickets />} />
              <Route path='/tickets/conference' element={<Conference cart={cart} setCart={setCart} />} />
              <Route path='/tickets/fundraiser' element={<Fundraiser cart={cart} setCart={setCart} />} />
              <Route path='/tickets/workshop' element={<Workshop cart={cart} setCart={setCart} />} />
              <Route path='/tickets/webinar' element={<Webinar cart={cart} setCart={setCart} />} />
              <Route path='/tickets/trade-show' element={<Trade cart={cart} setCart={setCart} />} />
              <Route path='/tickets/sport-events' element={<Sport cart={cart} setCart={setCart} />} />
              <Route path='/tickets/seminar' element={<Seminar cart={cart} setCart={setCart} />} />
              <Route path='/tickets/product-launch' element={<Product cart={cart} setCart={setCart} />} />
              <Route path='/tickets/panel-discussion' element={<Panel cart={cart} setCart={setCart} />} />
              <Route path='/tickets/networking-event' element={<Networking cart={cart} setCart={setCart} />} />
              <Route path='/tickets/hackathon' element={<Hackathon cart={cart} setCart={setCart} />} />
              <Route path='/tickets/gaming-tournament' element={<Gaming cart={cart} setCart={setCart} />} />
              <Route path='/tickets/festival' element={<Festival cart={cart} setCart={setCart} />} />
              <Route path='/tickets/exhibition' element={<Exhibition cart={cart} setCart={setCart} />} />
              <Route path='/tickets/concert' element={<Concert cart={cart} setCart={setCart} />} />
              <Route path='/tickets/comedy-show' element={<Comedy cart={cart} setCart={setCart} />} />
              <Route path='/tickets/charity-gala' element={<Charity cart={cart} setCart={setCart} />} />
              <Route path='/tickets/book-signing' element={<Booksigning cart={cart} setCart={setCart} />} />
              <Route path='/tickets/film-screening' element={<Film cart={cart} setCart={setCart} />} />
              <Route path='/tickets/career-fair' element={<Career cart={cart} setCart={setCart} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
