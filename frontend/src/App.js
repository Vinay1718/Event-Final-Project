import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])
  return (
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
              <Route path='/tickets/conference' element={<Conference />} />
              <Route path='/tickets/fundraiser' element={<Fundraiser />} />
              <Route path='/tickets/workshop' element={<Workshop />} />
              <Route path='/tickets/webinar' element={<Webinar />} />
              <Route path='/tickets/trade-show' element={<Trade />} />
              <Route path='/tickets/sport-events' element={<Sport />} />
              <Route path='/tickets/seminar' element={<Seminar />} />
              <Route path='/tickets/product-launch' element={<Product />} />
              <Route path='/tickets/panel-discussion' element={<Panel />} />
              <Route path='/tickets/networking-event' element={<Networking />} />
              <Route path='/tickets/hackathon' element={<Hackathon />} />
              <Route path='/tickets/gaming-tournament' element={<Gaming />} />
              <Route path='/tickets/festival' element={<Festival />} />
              <Route path='/tickets/exhibition' element={<Exhibition />} />
              <Route path='/tickets/concert' element={<Concert/>} />
              <Route path='/tickets/comedy-show' element={<Comedy/>} />
              <Route path='/tickets/charity-gala' element={<Charity/>} />
              <Route path='/tickets/book-signing' element={<Booksigning/>} />
              <Route path='/tickets/film-screening' element={<Film/>} />
              <Route path='/tickets/career-fair' element={<Career/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
