import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

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
                Dashboard
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
                <Link to='/create'>
                <i class="fa-solid fa-box" style={{color: "#f01919;"}}></i>
                Create
                </Link>
                </li>
            </ul>
            <ul className='second'>
                <li>
                <Link to='/custome'>
                <i class="fa-solid fa-pen-to-square" style={{color: "#f01919;"}}></i>
                Custome
                </Link>
                </li>

                <li>
                <Link to='/settings'>
                <i class="fa-solid fa-gear" style={{color: "#f01919;"}}></i>
                Settings
                </Link>
                </li>

                <li>
                <Link to='/revenue'>
                <i class="fa-solid fa-money-bill-trend-up" style={{color: "#f01919;"}}></i>
                Revenue
                </Link>
                </li>
            </ul>
        </div>
    )
}