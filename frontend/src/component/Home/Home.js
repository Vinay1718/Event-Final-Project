import React from "react";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import h1 from "../asset/h1.avif";
import h2 from "../asset/h2.jpg";
import h3 from "../asset/h3.avif";
import h4 from "../asset/h4.jpg";
import h5 from "../asset/h5.avif";
import h6 from "../asset/h6.avif";
import h7 from "../asset/h7.jpeg";
import h8 from "../asset/h8.jpg";
import h9 from "../asset/h9.jpg";
import h10 from "../asset/h10.png";
import h11 from "../asset/h11.jpg";
import h12 from "../asset/h12.png";
import h13 from "../asset/h13.jpg";
import h14 from "../asset/h14.avif";
import h15 from "../asset/h15.avif";
import h16 from "../asset/h16.jpg";
import h17 from "../asset/h17.webp";
import h18 from "../asset/h18.avif";
import h19 from "../asset/h19.jpg";
import h20 from "../asset/h20.webp";
import h21 from "../asset/h21.jpeg";
import h22 from "../asset/h22.jpeg";
import h23 from "../asset/h23.webp";
import h24 from "../asset/h24.webp";
import h25 from "../asset/h25.webp";
import h26 from "../asset/h26.webp";
import h27 from "../asset/h27.webp";
import h28 from "../asset/h28.webp";
import h29 from "../asset/h29.webp";
import h30 from "../asset/h30.webp";

export default function Home({ cart, setCart }) {
  const tickets = [
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
    { id: 31, name: "Horse Racing", place: "Pune", price: 2500, image: h1, description: "Experience the thrill of speed and elegance as top-tier horses compete for glory on Pune’s prestigious racetrack." },
    { id: 32, name: "Wine Tasting", place: "Nasik", price: 1800, image: h1, description: "Indulge in the finest wines of Nasik, India's wine capital, with guided tastings and food pairings in a luxurious vineyard setting." },
    { id: 33, name: "Ballet Show", place: "Chennai", price: 1300, image: h1, description: "Witness a mesmerizing ballet performance by world-class dancers, bringing classical and contemporary dance to life on stage." },
    { id: 34, name: "Astronomy Night", place: "Bangalore", price: 900, image: h1, description: "Gaze at the wonders of the cosmos with high-powered telescopes and expert astronomers guiding you through celestial marvels." },
    { id: 35, name: "Drone Racing", place: "Delhi", price: 600, image: h1, description: "Watch high-speed drones zip through challenging obstacle courses as pilots showcase their precision and skill in an electrifying competition." },
    { id: 36, name: "Fishing Tournament", place: "Kerala", price: 450, image: h1, description: "Join a thrilling fishing challenge in Kerala’s serene backwaters, where anglers compete to reel in the biggest catch of the day!" },
    { id: 37, name: "Adventure Trekking", place: "Manali", price: 1600, image: h1, description: "Embark on an exhilarating trek through Manali’s breathtaking landscapes, crossing lush forests, rivers, and snow-capped mountains." },
    { id: 38, name: "Snowboarding Camp", place: "Gulmarg", price: 2500, image: h1, description: "Glide through fresh powder and perfect your snowboarding skills with expert instructors in the winter wonderland of Gulmarg." },
    { id: 39, name: "Kite Festival", place: "Ahmedabad", price: 200, image: h1, description: "Watch the sky come alive with colorful kites from around the world as participants showcase incredible kite-flying artistry and techniques." },
    { id: 40, name: "Puppet Show", place: "Rajasthan", price: 350, image: h1, description: "Immerse yourself in Rajasthan’s vibrant culture with an enchanting puppet show, narrating folk tales with traditional music and dance." },
    { id: 41, name: "International Film Awards", place: "Mumbai", price: 5000, image: h1, description: "Join the glamour and excitement of cinema’s biggest night, featuring red carpet moments, celebrity appearances, and award-winning films." },
    { id: 42, name: "Marathon", place: "Hyderabad", price: 150, image: h1, description: "Push your limits and run through Hyderabad’s scenic routes, cheered on by an energetic crowd in this thrilling endurance race." },
    { id: 43, name: "Tennis Open", place: "Chennai", price: 2200, image: h1, description: "Catch the action as top-ranked tennis players battle it out in Chennai’s premier tournament, showcasing power, precision, and agility." },
    { id: 44, name: "Badminton Tournament", place: "Lucknow", price: 800, image: h1, description: "Watch skilled shuttlers compete in an intense showdown, featuring fast rallies and breathtaking smashes at Lucknow’s biggest badminton event." },
    { id: 45, name: "Rowing Championship", place: "Kolkata", price: 950, image: h1, description: "Feel the adrenaline as rowers power through the waters in a thrilling test of strength, endurance, and teamwork at this premier championship." },
    { id: 46, name: "Food Tasting Event", place: "Pondicherry", price: 1250, image: h1, description: "Savor exquisite flavors and explore a world of gourmet delights with renowned chefs presenting unique culinary masterpieces." },
    { id: 47, name: "Skydiving Experience", place: "Mysore", price: 3500, image: h1, description: "Feel the ultimate rush of freefall as you jump from thousands of feet above, witnessing breathtaking aerial views of Mysore." },
    { id: 48, name: "Hot Air Balloon Ride", place: "Jaipur", price: 2800, image: h1, description: "Soar above Jaipur’s majestic forts and palaces in a magical hot air balloon ride, offering panoramic views of the Pink City." },
    { id: 49, name: "Ice Skating Show", place: "Shimla", price: 1300, image: h1, description: "Experience a dazzling ice-skating spectacle featuring world-class performers executing gravity-defying spins and artistic routines." },
    { id: 50, name: "Zumba Festival", place: "Pune", price: 450, image: h1, description: "Dance, sweat, and have fun at Pune’s biggest Zumba festival, where fitness meets rhythm in an electrifying atmosphere." }

];

  const addToCart = (ticket) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.some((item) => item.id === ticket.id);
      if (!isItemInCart) {
        toast.success(`${ticket.name} added to cart!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          style: {
            background: "linear-gradient(135deg, rgba(240, 25, 25, 0.9), rgba(240, 25, 25, 0.7))",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)"
          },
          theme: "colored",
        });
        return [...prevCart, ticket];
      } else {
        toast.info(`${ticket.name} is already in cart!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "colored",
          style: {
            background: "linear-gradient(135deg, rgba(240, 25, 25, 0.9), rgba(240, 25, 25, 0.7))",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)"
          },
        });
        return prevCart;
      }
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="ticket-container">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="card">
            <img src={ticket.image} alt={ticket.name} />
            <h2>{ticket.name}</h2>
            <h3>{ticket.place}</h3>
            <h3>₹{ticket.price}</h3>
            <button>View Details</button>
            <button onClick={() => addToCart(ticket)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}
