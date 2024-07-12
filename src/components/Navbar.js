import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

  return (
    <>
      <div className="navbar">
        <div className='logo'>
            <img src="Images\blackLogo1.png" alt="logo" />
            <img src="Images\blackLogo2.png" alt="logo" />
        </div>

        <img id='search-icon' src="Images\search-icon.png" alt="search-icon" />
        <div className="search-bar">
            <input placeholder='Search for Products' type="text" name="search" id="search" />
        </div>

        <div className="login-cart">
          <div className="login">
              Login/Register
          </div>

          <div className="cart">
            <div>
              Cart
            </div>
            <div>
              <img src="Images\Cart.png" alt="cart" />
            </div>
          </div>
        </div>

      </div>

      {/* NAVBAR 2 - CATEGORIES */}
      <ul className="categories">
        <li><Link to='' className='no-underline'>Beverages</Link></li>
        <li><Link to='' className='no-underline'>Snacks</Link></li>
        <li><Link to='' className='no-underline'>Bakery</Link></li>
        <li><Link to='' className='no-underline'>Diary</Link></li>
        <li><Link to='' className='no-underline'>Foodgrains</Link></li>
        <li><Link to='' className='no-underline'>Cosmetics</Link></li>
      </ul>
    </>
  )
}
/*
  if image is in public folder no need to import it
*/