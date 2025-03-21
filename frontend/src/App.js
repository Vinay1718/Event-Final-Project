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
              <Route path='/orders' element={<Orders />} />
              <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
              <Route path='/payments' element={<Payments />} />
              <Route path='/support' element={<Support />} />
              <Route path='/tickets' element={<Tickets />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
