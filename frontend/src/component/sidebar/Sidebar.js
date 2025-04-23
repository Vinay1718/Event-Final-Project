import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import ThemeToggle from '../Toggle/Toggle'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h1><i class="fa-brands fa-xing"></i>
            Eventify
            </h1>
            <ul className='first'>
                <li>
                <Link to='/'>
                <i class="fa-solid fa-house" style={{color: "#f01919;"}}></i>
                Home
                </Link>
                </li>

                <li>
                <Link to='/tickets'>
                <i class="fa-solid fa-layer-group" style={{color: "#f01919;"}}></i>
                Tickets
                </Link>
                </li>

                <li>
                <Link to='/cart'>
                <i class="fa-solid fa-cart-shopping" style={{color: "#f01919;"}}></i>
                Cart
                </Link>
                </li>

                <li>
                <Link to='/orders'>
                <i class="fa-solid fa-box" style={{color: "#f01919;"}}></i>
                Orders
                </Link>
                </li>
            </ul>
            <ul className='second'>
                <li>
                <Link to='/payments'>
                <i class="fa-brands fa-paypal" style={{color: "#f01919;"}}></i>
                Payments
                </Link>
                </li>

                <li>
                <Link to='/settings'>
                <i class="fa-solid fa-gear" style={{color: "#f01919;"}}></i>
                Settings
                </Link>
                </li>

                <li>
                <Link to='/support'>
                <i class="fa-solid fa-phone" style={{color: "#f01919;"}}></i>
                Support
                </Link>
                </li>
                

            </ul>
            <ul className='theme-toggle'>
                <ThemeToggle />
            </ul>
            
        </div>
    )
}