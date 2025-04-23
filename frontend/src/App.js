import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Sidebar from './component/sidebar/Sidebar';
import Home from './component/Home/Home';
import Settings from './component/Settings/Settings';
import Orders from './component/Orders/Orders';
import Cart from './component/Cart/Cart';
import Payments from './component/Payments/Payments';
import Support from './component/Support/Support';
import Tickets from './component/Tickets/Tickets';
import Address from './component/Settings/Address/Address';
import Edit from './component/Settings/Edit/Edit';
import Faq from './component/Settings/Faq/Faq';
import History from './component/Settings/History/History';
import Login from './Authentication/Login/Login';
import Signup from './Authentication/Signup/Signup';
import Landing from './Authentication/Landing/Landing';
import Profile from './component/Profile/Profile';

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

function App() {
  const [cart, setCart] = useState([]);

  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={
            <div className="app-container">
              <Sidebar />
              <div className="content-container">
                <Routes>
                  <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/settings/address" element={<Address />} />
                  <Route path="/settings/edit" element={<Edit />} />
                  <Route path="/settings/faq" element={<Faq />} />
                  <Route path="/settings/history" element={<History />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                  <Route path="/payments" element={<Payments />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/tickets" element={<Tickets />} />
                  <Route path="/tickets/conference" element={<Conference cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/fundraiser" element={<Fundraiser cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/workshop" element={<Workshop cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/webinar" element={<Webinar cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/trade-show" element={<Trade cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/sport-events" element={<Sport cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/seminar" element={<Seminar cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/product-launch" element={<Product cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/panel-discussion" element={<Panel cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/networking-event" element={<Networking cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/hackathon" element={<Hackathon cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/gaming-tournament" element={<Gaming cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/festival" element={<Festival cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/exhibition" element={<Exhibition cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/concert" element={<Concert cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/comedy-show" element={<Comedy cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/charity-gala" element={<Charity cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/book-signing" element={<Booksigning cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/film-screening" element={<Film cart={cart} setCart={setCart} />} />
                  <Route path="/tickets/career-fair" element={<Career cart={cart} setCart={setCart} />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
=======
    <>
      <BrowserRouter>
        <div className="app-container">
          <Sidebar />
          <div className="content-container">
            <Routes>
              <Route path='/' element={<Home cart={cart} setCart={setCart} />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/settings/address' element={<Address />} />
              <Route path='/settings/edit' element={<Edit />} />
              <Route path='/settings/faq' element={<Faq />} />
              <Route path='/settings/history' element={<History />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
              <Route path='/payments' element={<Payments />} />
              <Route path='/support' element={<Support />} />
              <Route path='/tickets' element={<Tickets />} />
              <Route path='/landing' element={<Landing />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/tickets/conference' element={<Conference cart={cart} setCart={setCart} />} />
              <Route path='/tickets/fundraiser' element={<Fundraiser cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/workshop' element={<Workshop cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/webinar' element={<Webinar cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/trade-show' element={<Trade cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/sport-events' element={<Sport cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/seminar' element={<Seminar cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/product-launch' element={<Product cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/panel-discussion' element={<Panel cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/networking-event' element={<Networking cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/hackathon' element={<Hackathon cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/gaming-tournament' element={<Gaming cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/festival' element={<Festival cart={cart} setCart={setCart} />} />
              <Route path='/tickets/exhibition' element={<Exhibition cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/concert' element={<Concert cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/comedy-show' element={<Comedy cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/charity-gala' element={<Charity cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/book-signing' element={<Booksigning cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/film-screening' element={<Film cart={cart} setCart={setCart}/>} />
              <Route path='/tickets/career-fair' element={<Career cart={cart} setCart={setCart}/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
>>>>>>> cbf93d1 (code updated in froentend)
  );
}

export default App;
