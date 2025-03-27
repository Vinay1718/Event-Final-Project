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


import Conference from './component/Tickets/Conference/Conference';

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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
